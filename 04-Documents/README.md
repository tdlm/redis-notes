# Documents

This directory contains PDFs, DOCX files, and other documents that have been converted to Markdown format.

## Naming Convention

**Format:** `[YYYY]-[MM]-[DD]-[title].md`

**Examples:**
- `2025-11-10-contract-agreement.md`
- `2025-09-26-invoice-statement.md`
- `2025-12-15-letter-correspondence.md`

**Rules:**
- Date format: YYYY-MM-DD (ISO 8601)
- Date comes first for chronological sorting
- Title should be lowercase with hyphens separating words
- Title should be descriptive but concise
- No spaces in filenames (use hyphens instead)

## Folder Structure

Documents are organized by year and month:

```
04-Documents/
└── [YYYY]/
    └── [MM]/
        └── [YYYY]-[MM]-[DD]-[title].md
```

**Example:**
```
04-Documents/
└── 2025/
    ├── 01/
    │   └── 2025-01-15-contract-agreement.md
    └── 11/
        └── 2025-11-10-invoice-statement.md
```

## Conversion

PDF and DOCX files are automatically converted to Markdown when placed in `00-Inbox/`:

- **PDF files**: Converted using `scripts/convert_pdf.js`
- **DOCX files**: Converted using `scripts/convert_docx.js`
- Original files are deleted after successful conversion
- Metadata (author, creation date, etc.) is preserved in the Markdown when available

## What Goes Here

- Contracts and agreements
- Invoices and statements
- Letters and correspondence
- Legal documents
- Reports and analyses
- Any PDF or DOCX files that need to be preserved as Markdown

## Processing

Documents placed in `00-Inbox/` are automatically:
1. Converted to Markdown (PDF/DOCX → .md)
2. Formatted for readability
3. Dates extracted from filenames, content, or metadata
4. Organized into year/month folders
5. Renamed to follow naming convention
6. Original files deleted after conversion

## Conversion Scripts

See `scripts/README.md` for details on the conversion scripts.

