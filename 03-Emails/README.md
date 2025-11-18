# Emails

This directory contains important personal and business emails converted to Markdown format.

## Naming Convention

**Format:** `[YYYY]-[MM]-[DD]-[title].md`

**Examples:**
- `2025-11-10-client-inquiry.md`
- `2025-09-26-vendor-proposal.md`
- `2025-12-15-personal-correspondence.md`

**Rules:**
- Date format: YYYY-MM-DD (ISO 8601)
- Date comes first for chronological sorting
- Title should be lowercase with hyphens separating words
- Title should be descriptive but concise
- No spaces in filenames (use hyphens instead)

## Folder Structure

Emails are organized by year and month:

```
03-Emails/
└── [YYYY]/
    └── [MM]/
        └── [YYYY]-[MM]-[DD]-[title].md
        └── [YYYY]-[MM]-[DD]-[title]/  (attachment folder, if applicable)
```

**Example:**
```
03-Emails/
└── 2025/
    ├── 01/
    │   └── 2025-01-15-client-inquiry.md
    └── 11/
        ├── 2025-11-10-vendor-proposal.md
        └── 2025-11-10-vendor-proposal/
            └── attachment.pdf (converted to .md)
```

## Attachments

- Email attachments are stored in folders with the same name as the email (without `.md` extension)
- PDF and DOCX attachments are automatically converted to Markdown
- Only Markdown files remain in attachment folders after processing

## What Goes Here

- Important personal emails
- Important business emails
- Email correspondence that needs to be preserved
- Email threads converted to Markdown

## Processing

Emails placed in `00-Inbox/` are automatically:
1. Converted to Markdown (if needed)
2. Formatted for readability
3. Dates extracted from email headers or content
4. Organized into year/month folders
5. Renamed to follow naming convention

