Google Sheets integration setup

1) Create a Google Cloud service account
   - Go to https://console.cloud.google.com/
   - Create (or select) a project, then create a service account
   - Grant it the role: Editor (or a role that allows Sheets access)
   - Create a JSON key for the service account and download it

2) Share the Google Sheet with the service account
   - Open your Google Sheet and share it with the service account email (from the JSON file)

3) Environment variables (add to `.env.local` in project root)
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` = service account `client_email` from JSON
   - `GOOGLE_PRIVATE_KEY` = service account `private_key` from JSON (keep exact newlines; in `.env.local` replace real newlines with `\n`)
   - `GOOGLE_SHEET_ID` = the ID part of your sheet URL (between `/d/` and `/edit`)
   - `GOOGLE_SHEET_RANGE` (optional) = e.g. `Sheet1!A:K`, defaults to `Sheet1!A:K`

Example `.env.local` entries:

GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEv...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1AbcD...yourSheetId

4) Set up Google Sheet header row with these columns:
   A: Timestamp
   B: Full Name
   C: Job Title
   D: Email
   E: Phone
   F: Tỷ lệ chuyển đổi thấp
   G: Chi phí Ads cao nhưng ROAS thấp
   H: Khó kết nối Livestream – Video – Affiliate
   I: KOC/KOL chưa hiệu quả
   J: Thiếu công cụ đo lường.
   K: Speaker Question

5) Install dependencies and run

npm install
npm run dev

Benefits of this structure
- **Easy to filter:** Use Data → Create a filter to show only rows where column F = TRUE
- **Easy to sort:** Sort by any challenge column to group submissions
- **Pivot table ready:** Create a pivot table to count which challenges are most frequently selected
- **Conditional formatting:** Highlight rows where specific challenges are TRUE
- **Analytics:** Use COUNTIF to quickly count how many people selected each challenge

Example formulas in a summary sheet
- Count "Tỷ lệ chuyển đổi thấp": =COUNTIF(Sheet1!F:F, "TRUE")
- Percentage of total: =COUNTIF(Sheet1!F:F, "TRUE") / COUNTA(Sheet1!B:B)

Notes
- Keep the service account key secret. Do not commit it.
- If you see auth errors, ensure the sheet is shared and the private key newlines are preserved (use `\n` in `.env.local`).

