# Woolly Mammoth and Redis Quick Check-in

**Date:** November 5, 2025  
**Attendees:** Kelsey Szukhent (kelsey.szukhent@redis.com), Scott Adrian (scott.adrian@redis.com), Sam (sam@mammoth.tech), Alannah (alannah@mammoth.tech), Mac McDonald (mac.mcdonald@redis.com), Cody Henshaw (cody.henshaw@redis.com), Bonny (bonny@mammoth.tech), Laura Giannola (laura.giannola@redis.com)

## Resource Center & Video Updates

- Phase 3 UAT complete, ready to ship resource center live
- Phase 4 enhancements planned:
  - Automatic pretty URLs for resources
  - Architecture diagrams from document URLs
  - Webinar-to-video migration workflow
- Video schema expansion needed to include on-demand webinar fields
  - Videos will exist in two places initially
  - Final URL always in resources section after event date passes
- Glossary document UAT feedback completed, shipping today
- New in-browser resources launching:
  - Bypasses gated form for viewing PDFs directly
  - Includes chapter navigation functionality
  - Three resource types: gated download, ungated in-browser, ungated download (third-party)

## Moving from Splash to Redis.io for Events

- Target launch: February 2025
- Template requirements:
  - All elements editable (text, images)
  - Show/hide toggle for speaker/agenda sections
  - New expandable agenda module (based on AWS re:Invent design)
- Form functionality needed:
  - Easy Marketo form ID swapping
  - Form removal with custom text replacement
  - Auto-expiration after event date (nice-to-have)
- Password protection for restricted events:
  - Simple barrier, not high-security
  - Checkbox toggle in backend
  - Pop-up similar to existing form designs
- Multi-date webinar series support:
  - Show all dates/times on landing page before form submission
  - Single tile on main events page (next upcoming)
  - Priority: dates over times if technical limitations
- New ABM hub page template using existing modules
- Localized pages: redis.io/fr/events structure for language-specific content

## Team Access & Training

- Marketer access restricted to webinar/events sections only in Sanity
- Training documentation needed before February launch
- Development timeline: complete by December/early January for training buffer

## Technical Notes from Scott Weaver

- Added Markdown plugin for Tutorial items
- Plugin doesn't support details/summary for FAQ sections
- Considering conversion to bulleted lists if no alternative
- Same limitation applies to tabs functionality

