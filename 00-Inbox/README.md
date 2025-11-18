# Inbox Processing Rules

This is the single inbox for all files awaiting processing and organization. Files placed here are automatically processed according to the rules below.

## Automatic Processing

**IMPORTANT:** When files are present in `00-Inbox/`, they are automatically processed without requiring explicit user request.

## Processing Workflow

### 1. PDF/DOCX Conversion

**PDF files:**
- Converted to Markdown using: `node scripts/convert_pdf.js <file> --output-dir 00-Inbox/`
- Original PDF file is deleted after successful conversion

**DOCX files:**
- Converted to Markdown using: `node scripts/convert_docx.js <file> --output-dir 00-Inbox/`
- Original DOCX file is deleted after successful conversion

**PDF/DOCX files in attachment folders:**
- Converted to Markdown using the same scripts
- Output directory set to the attachment folder
- Original files are deleted after successful conversion
- **IMPORTANT**: Only Markdown files should remain in attachment folders after processing

### 2. Markdown Formatting

Markdown files are formatted for better readability:
- Normalize spacing (consistent line breaks between sections)
- Ensure proper heading hierarchy
- Clean up excessive whitespace
- Fix common markdown formatting issues
- Improve list formatting consistency
- Add appropriate spacing around code blocks, tables, etc.

### 3. Content Detection

Files are analyzed to determine appropriate destination based on keywords and content:

**Keywords to detect:**
- **Meeting notes**: "meeting", "call", "discussion", "session", "sync"
- **Email content**: "email", "message", "correspondence"
- **Documents**: "document", "contract", "agreement", "letter", "statement"
- **Project documentation**: "project", "task", "milestone"
- **Ideas and concepts**: "idea", "concept", "brainstorm"
- **Business reference**: "business", "company", "corporate", "strategy"
- **Personal reference**: "personal", "career", "resume", "cv"
- **People-related**: "person", "contact", "relationship"

### 4. File Routing

Files are routed to appropriate destinations:

- **Meeting notes** → `02-Meetings/[YYYY]/[MM]/` with naming: `[YYYY]-[MM]-[DD]-[title].md`
- **Email content** → `03-Emails/[YYYY]/[MM]/` with naming: `[YYYY]-[MM]-[DD]-[title].md`
- **Documents** → `04-Documents/[YYYY]/[MM]/` with naming: `[YYYY]-[MM]-[DD]-[title].md`
- **Project documentation** → `06-Projects/` (or date-based `06-Projects/[YYYY]/[MM]/` if applicable)
- **Ideas and concepts** → `07-Ideas/`
- **Business reference materials** → `08-Business/[YYYY]/[MM]/` with naming: `[YYYY]-[MM]-[DD]-[title].md` (NOT meeting notes)
- **Personal reference materials** → `09-Personal/[YYYY]/[MM]/` with naming: `[YYYY]-[MM]-[DD]-[title].md` (NOT meeting notes)
- **People-related notes** → `05-People/` (reference materials only, NOT meeting notes)

**If destination is unclear:** User will be prompted to clarify where the file should be placed.

### 5. Date Extraction

Dates are extracted from:
- Filenames
- File content
- File metadata
- Email headers

Dates are formatted as `YYYY-MM-DD` (ISO 8601) for all date-based destinations.

### 6. File Organization

- Dates formatted as `YYYY-MM-DD` for meeting notes, emails, documents, business docs, and personal docs
- Files organized into year/month folders: `[YYYY]/[MM]/` for all date-based destinations
- Files renamed to follow naming conventions: `[YYYY]-[MM]-[DD]-[title].md` before moving
- For emails with attachments, attachments (in folders) are moved with the email to maintain relationship

### 7. Cleanup

- Original files are deleted from inbox after successful processing
- Only `README.md` should remain in the inbox folder

## What Stays in Inbox

- `README.md` (this file) - stays in inbox permanently

## What Gets Processed

- All files except `README.md` are automatically processed and moved to appropriate destinations

