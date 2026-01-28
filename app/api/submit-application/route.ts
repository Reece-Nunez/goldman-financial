import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as Sentry from '@sentry/nextjs';
import { generateApplicationPDF } from '@/app/lib/generateApplicationPDF';
import { createZohoLead, formatApplicationForZoho } from '@/app/lib/zoho';

// Increase timeout for large file uploads (60 seconds)
export const maxDuration = 60;

// Verify reCAPTCHA Enterprise token
async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number }> {
  const apiKey = process.env.RECAPTCHA_API_KEY;
  const projectId = process.env.RECAPTCHA_PROJECT_ID;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!apiKey || !projectId) {
    console.warn('RECAPTCHA_API_KEY or RECAPTCHA_PROJECT_ID not configured, skipping verification');
    return { success: true };
  }

  try {
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: {
            token: token,
            expectedAction: 'submit_application',
            siteKey: siteKey,
          },
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error('reCAPTCHA Enterprise API error:', data.error);
      return { success: false };
    }

    // Enterprise returns riskAnalysis.score (0.0 to 1.0, higher = more likely human)
    const score = data.riskAnalysis?.score;
    const tokenValid = data.tokenProperties?.valid;

    if (!tokenValid) {
      console.warn('reCAPTCHA token invalid:', data.tokenProperties?.invalidReason);
      return { success: false, score };
    }

    // Score of 0.5 or higher is considered legitimate
    return { success: score >= 0.5, score };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false };
  }
}

// Resend will be initialized when the API is called
let resend: Resend | null = null;

const getResend = () => {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
};

// Format currency for display
const formatCurrency = (value: string): string => {
  if (!value) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseInt(value));
};

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  let step = 'initializing';

  try {
    // Step 1: Parse form data
    step = 'parsing_form_data';
    console.log('[Submit] Starting application submission');
    const formData = await request.formData();

    // Step 2: Parse JSON data
    step = 'parsing_json_data';
    const applicationData = JSON.parse(formData.get('formData') as string);
    const signature = formData.get('signature') as string;
    const secondSignature = formData.get('secondSignature') as string;
    const recaptchaToken = formData.get('recaptchaToken') as string;
    const submissionDate = formData.get('submissionDate') as string;
    console.log(`[Submit] Parsed application for: ${applicationData.legalBusinessName}`);

    // Step 3: Verify reCAPTCHA
    step = 'verifying_recaptcha';
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      console.log(`[Submit] reCAPTCHA result: success=${recaptchaResult.success}, score=${recaptchaResult.score}`);
      if (!recaptchaResult.success) {
        console.warn(`[Submit] reCAPTCHA failed for ${applicationData.legalBusinessName}, score: ${recaptchaResult.score}`);
        return NextResponse.json(
          { error: 'Security verification failed. Please try again.' },
          { status: 400 }
        );
      }
    } else {
      console.log('[Submit] No reCAPTCHA token provided, skipping verification');
    }

    // Step 4: Collect bank statement files
    step = 'collecting_bank_statements';
    const bankStatementAttachments: { filename: string; content: Buffer }[] = [];
    const bankStatementNames: string[] = [];

    for (let i = 0; i < 4; i++) {
      const file = formData.get(`bankStatement${i}`) as File | null;
      if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        bankStatementAttachments.push({
          filename: file.name,
          content: buffer,
        });
        bankStatementNames.push(file.name);
      }
    }
    console.log(`[Submit] Collected ${bankStatementAttachments.length} bank statements`);

    // Step 5: Generate PDF
    step = 'generating_pdf';
    console.log('[Submit] Generating PDF...');
    const pdfBuffer = await generateApplicationPDF(
      applicationData,
      signature || null,
      secondSignature || null,
      submissionDate,
      bankStatementNames
    );
    console.log(`[Submit] PDF generated successfully (${pdfBuffer.length} bytes)`);

    // Create PDF filename
    const sanitizedBusinessName = applicationData.legalBusinessName
      .replace(/[^a-zA-Z0-9]/g, '_')
      .substring(0, 30);
    const pdfFilename = `Application_${sanitizedBusinessName}_${new Date().toISOString().split('T')[0]}.pdf`;

    // Logo URL hosted on S3
    const logoUrl = 'https://thegoldmanfund.s3.us-east-1.amazonaws.com/Final+Files+1-01.png';

    // Professional email body with logo
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Georgia, 'Times New Roman', serif;
      line-height: 1.6;
      color: #1a1a2e;
      max-width: 600px;
      margin: 0 auto;
      padding: 0;
      background-color: #f8fafc;
    }
    .container {
      background-color: #ffffff;
      margin: 20px auto;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 30px 20px;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }
    .header img {
      max-width: 200px;
      height: auto;
    }
    .title-bar {
      background-color: #b8860b;
      color: white;
      text-align: center;
      padding: 15px 20px;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .content {
      padding: 30px;
    }
    .intro {
      color: #64748b;
      font-size: 14px;
      margin-bottom: 25px;
      text-align: center;
    }
    .card {
      background: #f8fafc;
      padding: 20px;
      border-radius: 8px;
      margin: 15px 0;
      border-left: 4px solid #b8860b;
    }
    .card-label {
      color: #b8860b;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 5px;
      font-weight: bold;
    }
    .card-value {
      color: #0f172a;
      font-size: 18px;
      font-weight: bold;
    }
    .card-sub {
      color: #64748b;
      font-size: 13px;
      margin-top: 5px;
    }
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #e2e8f0, transparent);
      margin: 25px 0;
    }
    .footer {
      text-align: center;
      padding: 25px;
      background-color: #0f172a;
      color: #94a3b8;
      font-size: 12px;
    }
    .footer-brand {
      color: #b8860b;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${logoUrl}" alt="Goldman and Co" />
    </div>

    <div class="title-bar">
      NEW FUNDING APPLICATION
    </div>

    <div class="content">
      <p class="intro">A new business funding application has been submitted. The complete application is attached as a PDF document.</p>

      <div class="card">
        <div class="card-label">Business Name</div>
        <div class="card-value">${applicationData.legalBusinessName}</div>
        ${applicationData.dba ? `<div class="card-sub">DBA: ${applicationData.dba}</div>` : ''}
      </div>

      <div class="card">
        <div class="card-label">Amount Requested</div>
        <div class="card-value">${formatCurrency(applicationData.amountRequested)}</div>
        <div class="card-sub">Use of Funds: ${applicationData.useOfFunds}</div>
      </div>

      <div class="card">
        <div class="card-label">Primary Contact</div>
        <div class="card-value">${applicationData.ownerFirstName} ${applicationData.ownerLastName}</div>
        <div class="card-sub">${applicationData.ownerEmail}</div>
        <div class="card-sub">${applicationData.ownerPhoneCountry} ${applicationData.ownerPhone}</div>
      </div>

      ${applicationData.fundingSpecialistName ? `
      <div class="card">
        <div class="card-label">Funding Specialist</div>
        <div class="card-value">${applicationData.fundingSpecialistName}</div>
      </div>
      ` : ''}

      ${bankStatementNames.length > 0 ? `
      <div class="divider"></div>
      <div class="card">
        <div class="card-label">Attached Bank Statements</div>
        <div style="margin-top: 10px;">
          ${bankStatementNames.map(name => `<div class="card-sub">• ${name}</div>`).join('')}
        </div>
      </div>
      ` : ''}
    </div>

    <div class="footer">
      <div class="footer-brand">Goldman and Co</div>
      <div>Private Capital & Investment</div>
      <div style="margin-top: 10px;">Application submitted on ${submissionDate}</div>
    </div>
  </div>
</body>
</html>
    `;

    // Prepare all attachments
    const allAttachments: Array<{
      filename: string;
      content: Buffer;
      contentType?: string;
    }> = [
      {
        filename: pdfFilename,
        content: pdfBuffer,
        contentType: 'application/pdf',
      },
      ...bankStatementAttachments.map(att => {
        const ext = att.filename.toLowerCase().split('.').pop();
        let contentType = 'application/octet-stream';
        if (ext === 'pdf') contentType = 'application/pdf';
        else if (ext === 'png') contentType = 'image/png';
        else if (ext === 'jpg' || ext === 'jpeg') contentType = 'image/jpeg';

        return {
          filename: att.filename,
          content: att.content,
          contentType,
        };
      }),
    ];

    // Step 6: Send email via Resend
    step = 'sending_email';
    const resendClient = getResend();
    if (!resendClient) {
      const configError = new Error('Email service not configured - RESEND_API_KEY missing');
      Sentry.captureException(configError, {
        tags: {
          feature: 'email-send',
          error_type: 'configuration',
        },
        extra: {
          businessName: applicationData.legalBusinessName,
          amountRequested: applicationData.amountRequested,
          contactEmail: applicationData.ownerEmail,
        },
      });
      console.error('[Submit] Resend client not configured - RESEND_API_KEY missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log(`[Submit] Sending email with ${allAttachments.length} attachments (total size: ${allAttachments.reduce((acc, att) => acc + att.content.length, 0)} bytes)`);
    const { data, error } = await resendClient.emails.send({
      from: 'Goldman and Co Applications <applications@thegoldmanfund.com>',
      to: ['submissions@thegoldmanfund.com'],
      subject: `New Funding Application - ${applicationData.legalBusinessName} - ${formatCurrency(applicationData.amountRequested)}`,
      html: emailHtml,
      attachments: allAttachments,
    });

    if (error) {
      Sentry.captureException(new Error(`Email send failed: ${error.message}`), {
        tags: {
          feature: 'email-send',
          error_type: 'send_failure',
        },
        extra: {
          resendError: error,
          businessName: applicationData.legalBusinessName,
          amountRequested: applicationData.amountRequested,
          contactEmail: applicationData.ownerEmail,
          contactPhone: `${applicationData.ownerPhoneCountry} ${applicationData.ownerPhone}`,
          contactName: `${applicationData.ownerFirstName} ${applicationData.ownerLastName}`,
          attachmentCount: allAttachments.length,
          totalAttachmentSize: allAttachments.reduce((acc, att) => acc + att.content.length, 0),
        },
      });
      console.error(`[Submit] Resend email failed:`, error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }
    console.log(`[Submit] Email sent successfully, messageId: ${data?.id}`);

    // Step 7: Create lead in Zoho CRM
    step = 'creating_zoho_lead';
    let zohoLeadId: string | undefined;
    try {
      const zohoLeadData = formatApplicationForZoho(applicationData);

      // Prepare bank statements for Zoho attachment upload
      const zohoAttachments = bankStatementAttachments.map(att => {
        const ext = att.filename.toLowerCase().split('.').pop();
        let contentType = 'application/octet-stream';
        if (ext === 'pdf') contentType = 'application/pdf';
        else if (ext === 'png') contentType = 'image/png';
        else if (ext === 'jpg' || ext === 'jpeg') contentType = 'image/jpeg';

        return {
          filename: att.filename,
          content: att.content,
          contentType,
        };
      });

      const zohoResult = await createZohoLead(zohoLeadData, zohoAttachments, applicationData.fundingSpecialistName);
      if (zohoResult.success) {
        zohoLeadId = zohoResult.leadId;
        console.log('Zoho lead created:', zohoLeadId, 'Assigned to:', zohoResult.assignedTo);
      } else {
        console.error('Failed to create Zoho lead:', zohoResult.error);
      }
    } catch (zohoError) {
      // Log but don't fail the request if Zoho integration fails
      console.error('Zoho CRM integration error:', zohoError);
    }

    const duration = Date.now() - startTime;
    console.log(`[Submit] Application submitted successfully in ${duration}ms for ${applicationData.legalBusinessName}`);
    return NextResponse.json({ success: true, messageId: data?.id, zohoLeadId });
  } catch (error) {
    const duration = Date.now() - startTime;
    Sentry.captureException(error, {
      tags: {
        feature: 'application-submit',
        failed_step: step,
      },
      extra: {
        duration,
        step,
      },
    });
    console.error(`[Submit] Failed at step "${step}" after ${duration}ms:`, error);
    return NextResponse.json(
      { error: 'Failed to process application', details: error instanceof Error ? error.message : String(error), step },
      { status: 500 }
    );
  }
}
