import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateApplicationPDF } from '@/app/lib/generateApplicationPDF';

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

export async function GET() {
  try {
    // Mock application data
    const applicationData = {
      fundingSpecialistName: 'James Thompson',
      amountRequested: '250000',
      useOfFunds: 'Equipment purchase and working capital expansion',
      legalBusinessName: 'Acme Technologies LLC',
      dba: 'Acme Tech',
      businessAddress: '123 Business Park Drive, Suite 400, Austin, TX 78701',
      businessPhoneCountry: '+1',
      businessPhone: '(512) 555-1234',
      businessStartDate: '2019-03-15',
      legalStructure: 'llc',
      stateOfIncorporation: 'TX',
      federalTaxId: '123456789',
      industry: 'Technology',
      website: 'https://www.acmetech.com',
      ownerFirstName: 'John',
      ownerLastName: 'Smith',
      ownerTitle: 'CEO',
      ownershipPercentage: '75',
      ownerHomeAddress: '456 Residential Lane, Austin, TX 78702',
      ownerSSN: '123456789',
      ownerDOB: '1985-06-20',
      ownerPhoneCountry: '+1',
      ownerPhone: '(512) 555-5678',
      ownerEmail: 'john.smith@acmetech.com',
      ownerDriversLicenseState: 'TX',
      ownerDriversLicense: '12345678',
      hasSecondOwner: 'yes',
      secondOwnerFirstName: 'Jane',
      secondOwnerLastName: 'Doe',
      secondOwnerTitle: 'CFO',
      secondOwnerOwnershipPercentage: '25',
      secondOwnerHomeAddress: '789 Oak Street, Austin, TX 78703',
      secondOwnerSSN: '987654321',
      secondOwnerDOB: '1988-09-12',
      secondOwnerPhoneCountry: '+1',
      secondOwnerPhone: '(512) 555-9012',
      secondOwnerEmail: 'jane.doe@acmetech.com',
      secondOwnerDriversLicenseState: 'TX',
      secondOwnerDriversLicense: '87654321',
      grossAnnualSales: '1500000',
      averageMonthlyRevenue: '125000',
      openLoansAdvances: '50000',
      hasBankruptcy: 'no',
      properties: [
        {
          address: '123 Business Park Drive, Suite 400, Austin, TX 78701',
          propertyType: 'commercial',
          yearAcquired: '2019',
          purchasePrice: '450000',
          currentValue: '550000',
          loanBalance: '325000',
          lender: 'First National Bank',
          titleHolders: 'Acme Technologies LLC',
        },
      ],
    };

    const submissionDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Mock signature (simple base64 PNG - a small transparent image)
    const mockSignature = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAYAAAAZUZThAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTAxLTE1VDEwOjAwOjAwLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTE1VDEwOjAwOjAwLTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xNVQxMDowMDowMC0wNTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMjM0NTY3OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMjM0NTY3OCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjEyMzQ1Njc4IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTIzNDU2NzgiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTVUMTA6MDA6MDAtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAAyADIAAAC/4SPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0teleqw8BACH5BAAAAAAh+QQAAAAAACwAAAAAyADIAAAC';
    const mockSecondSignature = mockSignature;

    const bankStatementNames = ['Sample_Bank_Statement_Jan.pdf', 'Sample_Bank_Statement_Feb.pdf'];

    // Generate PDF
    const pdfBuffer = await generateApplicationPDF(
      applicationData,
      mockSignature,
      mockSecondSignature,
      submissionDate,
      bankStatementNames
    );

    // Create PDF filename
    const pdfFilename = `TEST_Application_Acme_Technologies_${new Date().toISOString().split('T')[0]}.pdf`;

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
    .test-badge {
      background-color: #dc2626;
      color: white;
      text-align: center;
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
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

    <div class="test-badge">
      TEST SUBMISSION - NOT A REAL APPLICATION
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

      <div class="card">
        <div class="card-label">Funding Specialist</div>
        <div class="card-value">${applicationData.fundingSpecialistName}</div>
      </div>

      <div class="divider"></div>
      <div class="card">
        <div class="card-label">Attached Bank Statements (Mock)</div>
        <div style="margin-top: 10px;">
          ${bankStatementNames.map(name => `<div class="card-sub">• ${name}</div>`).join('')}
        </div>
      </div>
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

    // Prepare attachments (just the PDF for test)
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
    ];

    // Send email via Resend
    const resendClient = getResend();
    if (!resendClient) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const { data, error } = await resendClient.emails.send({
      from: 'Goldman and Co Applications <applications@thegoldmanfund.com>',
      to: ['reece@nunezdev.com'],
      subject: `[TEST] New Funding Application - ${applicationData.legalBusinessName} - ${formatCurrency(applicationData.amountRequested)}`,
      html: emailHtml,
      attachments: allAttachments,
    });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      messageId: data?.id
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process test submission', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
