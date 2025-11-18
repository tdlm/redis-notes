# Conversion Scripts

Scripts for converting PDF and DOCX files to Markdown format.

## Installation

Install dependencies:

```bash
cd scripts
npm install
```

## Scripts

### convert_pdf.js

Converts PDF files to Markdown format.

**Usage:**
```bash
node convert_pdf.js <file.pdf> [--output-dir <dir>] [--archive-dir <dir>]
```

**Arguments:**
- `<file.pdf>` - Path to the PDF file to convert (required)
- `--output-dir <dir>` - Directory to save the Markdown file (optional, defaults to same directory as source file)
- `--archive-dir <dir>` - Directory to archive the original file (optional, not used by default)

**Example:**
```bash
node convert_pdf.js document.pdf --output-dir 00-Inbox/
```

**Features:**
- Extracts text content from PDF
- Preserves document metadata (title, author, dates) when available
- Attempts to detect headings
- Preserves paragraph structure
- Deletes original PDF after successful conversion

### convert_docx.js

Converts DOCX files to Markdown format.

**Usage:**
```bash
node convert_docx.js <file.docx> [--output-dir <dir>] [--archive-dir <dir>]
```

**Arguments:**
- `<file.docx>` - Path to the DOCX file to convert (required)
- `--output-dir <dir>` - Directory to save the Markdown file (optional, defaults to same directory as source file)
- `--archive-dir <dir>` - Directory to archive the original file (optional, not used by default)

**Example:**
```bash
node convert_docx.js document.docx --output-dir 00-Inbox/
```

**Features:**
- Converts DOCX to Markdown using mammoth library
- Preserves formatting (headings, lists, bold, italic, etc.)
- Handles conversion warnings
- Deletes original DOCX after successful conversion

## Dependencies

- `pdf-parse` - PDF text extraction
- `mammoth` - DOCX to Markdown conversion

## Integration with Inbox Processing

These scripts are automatically called during inbox processing:
- PDF files in `00-Inbox/` are converted using `convert_pdf.js`
- DOCX files in `00-Inbox/` are converted using `convert_docx.js`
- PDF/DOCX files in attachment folders are also converted
- Original files are deleted after successful conversion

## Error Handling

Both scripts:
- Validate file existence and type
- Provide clear error messages
- Exit with error code 1 on failure
- Log conversion progress

## Module Exports

Both scripts export their conversion functions for use in other scripts:

```javascript
const { convertPdfToMarkdown, archiveFile } = require('./convert_pdf.js');
const { convertDocxToMarkdown, archiveFile } = require('./convert_docx.js');
```

