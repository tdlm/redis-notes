# Notes Organization System

A comprehensive notes organization system with automatic inbox processing, structured folder hierarchy, and strict naming conventions.

## Folder Structure

```
Notes/
├── 00-Inbox/          # Single inbox for all files awaiting processing
├── 01-General/         # General notes, scratch pad, todos, quick reference
├── 02-Meetings/        # ALL meeting notes (business, personal, discussions, sessions)
├── 03-Emails/          # Important personal and business emails
├── 04-Documents/       # PDFs, DOCX files converted to Markdown
├── 05-People/          # Notes about people (contacts, relationship notes)
├── 06-Projects/        # Project-specific documentation
├── 07-Ideas/           # Ideas, brainstorms, and concepts
├── 08-Business/        # Business reference materials (NOT meeting notes)
├── 09-Personal/        # Personal reference documents (NOT meeting notes)
└── scripts/            # Conversion scripts for PDF/DOCX to Markdown
```

## Core Rules

### Critical Organization Rules

- **ALL meeting notes** (dated notes from meetings, discussions, sessions) → `02-Meetings/[YYYY]/[MM]/`
- Business-related **meeting notes** → `02-Meetings/[YYYY]/[MM]/` (NOT `08-Business/`)
- Business-related **information/docs** → `08-Business/[YYYY]/[MM]/` (reference materials only)
- People-related **meeting notes** → `02-Meetings/[YYYY]/[MM]/` (NOT `05-People/`)
- People-related **reference notes** → `05-People/` (reference materials only)
- Personal **meeting notes** → `02-Meetings/[YYYY]/[MM]/`
- Personal **reference docs** → `09-Personal/[YYYY]/[MM]/` (templates, plans, etc. without dates)

### Naming Conventions

All date-based files follow the format: `[YYYY]-[MM]-[DD]-[title].md`

- Date format: YYYY-MM-DD (ISO 8601)
- Date comes first for chronological sorting
- Title should be lowercase with hyphens separating words
- Title should be descriptive but concise
- No spaces in filenames (use hyphens instead)

### Date-Based Organization

Files are organized into year/month folders: `[YYYY]/[MM]/`

- `02-Meetings/[YYYY]/[MM]/`
- `03-Emails/[YYYY]/[MM]/`
- `04-Documents/[YYYY]/[MM]/`
- `08-Business/[YYYY]/[MM]/`
- `09-Personal/[YYYY]/[MM]/`

## Inbox Processing

Files placed in `00-Inbox/` are automatically processed:

1. **PDF/DOCX files**: Converted to Markdown using conversion scripts
2. **Markdown files**: Formatted for better readability
3. **Content detection**: Analyzed to determine appropriate destination
4. **Date extraction**: Dates extracted from filenames, content, or metadata
5. **File organization**: Files moved to appropriate folders with proper naming
6. **Original files**: Deleted after successful processing

See `00-Inbox/README.md` for detailed processing rules.

## Usage

1. Place files in `00-Inbox/` for automatic processing
2. Files are automatically converted, formatted, and organized
3. Only `README.md` remains in the inbox folder

## Conversion Scripts

PDF and DOCX files are automatically converted to Markdown using scripts in the `scripts/` directory.

See `scripts/README.md` for usage details.

