// Zoho CRM API integration

interface ZohoTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface ZohoLeadData {
  [key: string]: string | number | boolean | undefined | null;
}

// Round-robin rep list (excluding Bryan Chamberlin, Aaron Rian, Reece Nunez)
const ROUND_ROBIN_REPS = [
  { id: '6522534000001975859', name: 'Ruvim Popov' },
  { id: '6522534000003949131', name: 'David York' },
  { id: '6522534000004046003', name: 'Tyler Carullo' },
  { id: '6522534000022419009', name: 'Tom Jones' },
  { id: '6522534000022419092', name: 'Anna Knower' },
  { id: '6522534000035483004', name: 'Jacob Lowe' },
  { id: '6522534000048539135', name: 'Aleksandr Renfro' },
  { id: '6522534000052169051', name: 'Edwin Flores' },
  { id: '6522534000057753064', name: 'Kyle Payne' },
  { id: '6522534000060361064', name: 'Mauricio Rubschlager' },
  { id: '6522534000064990001', name: 'Michael Paez' },
  { id: '6522534000065165049', name: 'Jonathan Brown' },
  { id: '6522534000065165097', name: 'Piilani Harris' },
  { id: '6522534000066833011', name: 'Bradley Knodle' },
  { id: '6522534000066833163', name: 'Isaac Gaetano' },
  { id: '6522534000066833224', name: 'Casey Veach' },
  { id: '6522534000069690008', name: 'Mohammed Alheleji' },
  { id: '6522534000069690023', name: 'Monica Monroe' },
  { id: '6522534000069690038', name: 'Charles Ezekiel Hackney Jr' },
  { id: '6522534000069690053', name: 'Kellie Sutton-Thomas' },
  { id: '6522534000069690068', name: 'Zachary Parker' },
  { id: '6522534000069690083', name: 'Nelson Moore' },
  { id: '6522534000069690128', name: 'Elizabeth Perez' },
  { id: '6522534000069690143', name: 'Zeena Smiley' },
  { id: '6522534000069690371', name: 'Edric Williams' },
  { id: '6522534000069690386', name: 'Max Perron' },
  { id: '6522534000070969006', name: 'Kaitlyn Conley' },
  { id: '6522534000070969021', name: 'Kevin Le' },
  { id: '6522534000070969036', name: 'Kharion King-Kemp' },
];

interface ZohoCreateResponse {
  data: Array<{
    code: string;
    details: {
      id: string;
      Modified_Time: string;
      Created_Time: string;
    };
    message: string;
    status: string;
  }>;
}

// Get access token using refresh token
async function getAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Zoho CRM credentials not configured');
  }

  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get Zoho access token: ${error}`);
  }

  const data: ZohoTokenResponse = await response.json();
  return data.access_token;
}

// Get the next rep in round-robin rotation
async function getNextRoundRobinRep(accessToken: string): Promise<{ id: string; name: string }> {
  try {
    // Query for the most recent lead from website applications
    const searchParams = new URLSearchParams({
      criteria: '(Lead_Source:equals:Website - Funding Application)',
      sort_by: 'Created_Time',
      sort_order: 'desc',
      per_page: '1',
    });

    const response = await fetch(
      `https://www.zohoapis.com/crm/v2/Leads/search?${searchParams.toString()}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
        },
      }
    );

    if (response.ok) {
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        const lastOwnerId = result.data[0].Owner?.id;

        if (lastOwnerId) {
          // Find the last owner in our round-robin list
          const lastIndex = ROUND_ROBIN_REPS.findIndex(rep => rep.id === lastOwnerId);

          if (lastIndex !== -1) {
            // Return the next rep in rotation
            const nextIndex = (lastIndex + 1) % ROUND_ROBIN_REPS.length;
            return ROUND_ROBIN_REPS[nextIndex];
          }
        }
      }
    }

    // If no previous lead found or owner not in list, start with first rep
    return ROUND_ROBIN_REPS[0];
  } catch (error) {
    console.error('Error getting round-robin rep:', error);
    // Default to first rep on error
    return ROUND_ROBIN_REPS[0];
  }
}

// Create a lead in Zoho CRM with round-robin assignment
export async function createZohoLead(leadData: ZohoLeadData): Promise<{ success: boolean; leadId?: string; assignedTo?: string; error?: string }> {
  try {
    const accessToken = await getAccessToken();

    // Get the next rep in round-robin rotation
    const nextRep = await getNextRoundRobinRep(accessToken);
    console.log(`Assigning lead to: ${nextRep.name} (${nextRep.id})`);

    // Add the owner to the lead data
    const leadWithOwner = {
      ...leadData,
      Owner: nextRep.id,
    };

    const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [leadWithOwner],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Zoho CRM API error:', error);
      return { success: false, error: `API error: ${response.status}` };
    }

    const result: ZohoCreateResponse = await response.json();

    if (result.data && result.data[0]?.status === 'success') {
      return {
        success: true,
        leadId: result.data[0].details.id,
        assignedTo: nextRep.name
      };
    }

    return {
      success: false,
      error: result.data?.[0]?.message || 'Unknown error'
    };
  } catch (error) {
    console.error('Error creating Zoho lead:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Parse address string into components (basic parsing)
function parseAddress(address: string): { street: string; city: string; state: string; zip: string } {
  // Default values
  const result = { street: '', city: '', state: '', zip: '' };

  if (!address) return result;

  // Try to parse common address formats
  // Format: "123 Main St, City, ST 12345" or "123 Main St, City, State 12345"
  const parts = address.split(',').map(p => p.trim());

  if (parts.length >= 1) {
    result.street = parts[0];
  }
  if (parts.length >= 2) {
    result.city = parts[1];
  }
  if (parts.length >= 3) {
    // Last part might be "ST 12345" or "State 12345"
    const lastPart = parts[parts.length - 1];
    const stateZipMatch = lastPart.match(/^([A-Za-z]{2,})\s*(\d{5}(?:-\d{4})?)?$/);
    if (stateZipMatch) {
      result.state = stateZipMatch[1];
      result.zip = stateZipMatch[2] || '';
    } else {
      result.state = lastPart;
    }
  }

  return result;
}

// Format currency string to number
function parseCurrency(value: string): number {
  if (!value) return 0;
  return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}

// Format date to YYYY-MM-DD for Zoho
function formatDateForZoho(dateStr: string): string | null {
  if (!dateStr) return null;

  // Try to parse various date formats
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return null;

  return date.toISOString().split('T')[0];
}

// Helper to format application data for Zoho Lead
export function formatApplicationForZoho(applicationData: {
  // Funding info
  fundingSpecialistName?: string;
  amountRequested: string;
  useOfFunds: string;

  // Business info
  legalBusinessName: string;
  dba?: string;
  businessAddress?: string;
  businessPhone?: string;
  businessPhoneCountry?: string;
  businessStartDate?: string;
  legalStructure?: string;
  stateOfIncorporation?: string;
  federalTaxId?: string;
  industry?: string;
  website?: string;

  // Owner 1 info
  ownerFirstName: string;
  ownerLastName: string;
  ownerTitle?: string;
  ownershipPercentage?: string;
  ownerHomeAddress?: string;
  ownerSSN?: string;
  ownerDOB?: string;
  ownerPhone: string;
  ownerPhoneCountry?: string;
  ownerEmail: string;
  ownerDriversLicense?: string;
  ownerDriversLicenseState?: string;

  // Owner 2 info
  hasSecondOwner?: 'yes' | 'no' | '';
  secondOwnerFirstName?: string;
  secondOwnerLastName?: string;
  secondOwnerTitle?: string;
  secondOwnerOwnershipPercentage?: string;
  secondOwnerHomeAddress?: string;
  secondOwnerSSN?: string;
  secondOwnerDOB?: string;
  secondOwnerPhone?: string;
  secondOwnerPhoneCountry?: string;
  secondOwnerEmail?: string;
  secondOwnerDriversLicense?: string;
  secondOwnerDriversLicenseState?: string;

  // Financial info
  grossAnnualSales?: string;
  averageMonthlyRevenue?: string;
  openLoansAdvances?: string;
  hasBankruptcy?: 'yes' | 'no' | '';
}): ZohoLeadData {
  // Parse addresses
  const businessAddr = parseAddress(applicationData.businessAddress || '');
  const ownerAddr = parseAddress(applicationData.ownerHomeAddress || '');
  const secondOwnerAddr = parseAddress(applicationData.secondOwnerHomeAddress || '');

  // Format phone numbers
  const ownerPhone = applicationData.ownerPhoneCountry
    ? `${applicationData.ownerPhoneCountry} ${applicationData.ownerPhone}`
    : applicationData.ownerPhone;

  const businessPhone = applicationData.businessPhoneCountry
    ? `${applicationData.businessPhoneCountry} ${applicationData.businessPhone}`
    : applicationData.businessPhone;

  const secondOwnerPhone = applicationData.secondOwnerPhoneCountry
    ? `${applicationData.secondOwnerPhoneCountry} ${applicationData.secondOwnerPhone}`
    : applicationData.secondOwnerPhone;

  // Build the lead data object
  const leadData: ZohoLeadData = {
    // Standard Zoho fields
    First_Name: applicationData.ownerFirstName,
    Last_Name: applicationData.ownerLastName,
    Email: applicationData.ownerEmail,
    Phone: ownerPhone,
    Company: applicationData.legalBusinessName,
    Website: applicationData.website || null,
    Industry: applicationData.industry || null,
    Lead_Source: 'Website - Funding Application',
    Designation: applicationData.ownerTitle || null,

    // Business address
    Street: businessAddr.street || applicationData.businessAddress || null,
    City: businessAddr.city || null,
    State: businessAddr.state || applicationData.stateOfIncorporation || null,
    Zip_Code: businessAddr.zip || null,

    // Financial fields
    Amount_Requested: parseCurrency(applicationData.amountRequested) || null,
    Monthly_Revenue: parseCurrency(applicationData.averageMonthlyRevenue || '') || null,
    Annual_Revenue: parseCurrency(applicationData.grossAnnualSales || '') || null,
    Use_For_Funding: applicationData.useOfFunds || null,

    // Business details
    DBA: applicationData.dba || null,
    EIN: applicationData.federalTaxId ? parseInt(applicationData.federalTaxId.replace(/[^0-9]/g, '')) || null : null,
    Date_business_opened: formatDateForZoho(applicationData.businessStartDate || ''),
    Legal_Structure: applicationData.legalStructure || null,
    Phone_2: businessPhone || null,

    // Owner 1 details
    Owner_1_Street: ownerAddr.street || applicationData.ownerHomeAddress || null,
    Owner_1_City: ownerAddr.city || null,
    Owner_1_State: ownerAddr.state || null,
    Owner_1_Zip: ownerAddr.zip || null,
    Owner_1_Phone: ownerPhone || null,
    Owner_1_Email: applicationData.ownerEmail || null,
    Owner_1_SSN: applicationData.ownerSSN || null,
    Owner_1_Date_of_Birth: applicationData.ownerDOB || null,
    Owner_1_Drivers_License_Number: applicationData.ownerDriversLicense || null,
    Owner_1_DL_State_Issuance: applicationData.ownerDriversLicenseState || null,
    Owner1_Ownership: applicationData.ownershipPercentage ? parseFloat(applicationData.ownershipPercentage) : null,

    // Owner 2 details (if exists)
    Additional_owners: applicationData.hasSecondOwner === 'yes' ? 'Yes' : 'No',
    Owner_2_First_Name: applicationData.secondOwnerFirstName || null,
    Owner_2_Last_Name: applicationData.secondOwnerLastName || null,
    Owner_2_Street: secondOwnerAddr.street || applicationData.secondOwnerHomeAddress || null,
    Owner_2_City: secondOwnerAddr.city || null,
    Owner_2_State: secondOwnerAddr.state || null,
    Owner_2_Zip: secondOwnerAddr.zip || null,
    Owner_2_Phone: secondOwnerPhone || null,
    Owner_2_Email: applicationData.secondOwnerEmail || null,
    Owner_2_SSN: applicationData.secondOwnerSSN || null,
    Owner_2_Date_of_Birth: applicationData.secondOwnerDOB || null,
    Owner_2_Ownership: applicationData.secondOwnerOwnershipPercentage
      ? parseFloat(applicationData.secondOwnerOwnershipPercentage)
      : null,

    // Loan history
    Have_any_open_loans_advances: applicationData.openLoansAdvances || null,
    Any_Liens_defaults_bankruptcy: applicationData.hasBankruptcy === 'yes' ? 'Yes' :
                                    applicationData.hasBankruptcy === 'no' ? 'No' : null,

    // Description with additional details
    Description: [
      `Funding Specialist: ${applicationData.fundingSpecialistName || 'N/A'}`,
      `Amount Requested: $${parseCurrency(applicationData.amountRequested || '').toLocaleString()}`,
      `Use of Funds: ${applicationData.useOfFunds || 'N/A'}`,
      `Monthly Revenue: $${parseCurrency(applicationData.averageMonthlyRevenue || '').toLocaleString()}`,
      `Gross Annual Sales: $${parseCurrency(applicationData.grossAnnualSales || '').toLocaleString()}`,
    ].join('\n'),
  };

  // Remove null/undefined values to avoid API errors
  Object.keys(leadData).forEach(key => {
    if (leadData[key] === null || leadData[key] === undefined || leadData[key] === '') {
      delete leadData[key];
    }
  });

  return leadData;
}
