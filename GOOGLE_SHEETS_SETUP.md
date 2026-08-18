# BMART — Connect the Quote Form to Google Sheets (5 minutes)

Your quote form already saves every lead in the website database. Follow these steps to ALSO
have each lead auto-appear as a new row in your Google Sheet.

## Step 1 — Create the Sheet
1. Go to https://sheets.google.com and create a **new blank spreadsheet**.
2. Rename it to `BMART Leads` (optional).

## Step 2 — Open Apps Script
1. In the sheet, click **Extensions → Apps Script**.
2. Delete any code shown in the editor.
3. **Paste the entire script below** and click the 💾 Save icon.

```javascript
// BMART - Google Sheet lead receiver
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Add header row once
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Name', 'Phone', 'Email', 'City', 'Product', 'Message']);
    }

    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.created_at || new Date(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.city || '',
      data.product || '',
      data.message || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3 — Deploy as a Web App
1. Click **Deploy → New deployment**.
2. Click the ⚙️ gear icon next to "Select type" → choose **Web app**.
3. Set:
   - **Description:** BMART Leads
   - **Execute as:** Me
   - **Who has access:** **Anyone**   ← important
4. Click **Deploy**, then **Authorize access** and allow permissions for your Google account.
5. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfyc.../exec`).

## Step 4 — Send me the URL
Paste that Web app URL back to me here in the chat. I'll plug it into the site, and from then on
every quote submitted on the website will instantly appear as a new row in your Google Sheet. ✅
