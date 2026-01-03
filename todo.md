# Goldman Financial - TODO

## Zoho Integration

Need to get the following information from the client to integrate the funding application form with their Zoho database:

1. **Which Zoho product are they using?**
   - Zoho CRM (leads/contacts/deals)
   - Zoho Creator (custom database/app)
   - Zoho Books (accounting)
   - Something else?

2. **What data do they need in Zoho?**
   - All fields from the application?
   - Just key fields (business name, contact info, amount requested)?
   - Should it create a new lead/record?

3. **Do we have access to their Zoho account** to set up API credentials (API key/OAuth)?

### Implementation Plan (once we have answers)
1. Get Zoho API credentials (OAuth or API key)
2. When form is submitted, after sending email, make API call to Zoho to create new record
3. Map form fields to Zoho fields
