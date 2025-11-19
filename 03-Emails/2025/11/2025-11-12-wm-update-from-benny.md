# Work Update from Bonny Sentrosi

**From:** Bonny Sentrosi  
**Date:** Wednesday, November 12, 2025  
**Time:** 10:02 PM  
**Subject:** Midweek Update

Hey :redis: edis team :wave::skin-tone-5:! Here's what we've been up to so far this week:

---

## :star2: FEATURES :star2:

### On-Demand Webinars :film_projector:

Following last week's schema planning, we've now implemented the new Webinar setup within the Video schema.

Here's what's live in Sanity and working in builds:

- Added a new Webinar group in the Video schema with fields for:
  - Date
  - Time
  - Sign Up Button
  - Event page header and card images
- Videos can now be flagged as Webinars, automatically revealing all relevant fields.
- The Video page now adapts dynamically depending on whether it's a webinar — and on the webinar's status. :brain:
- Content is shared between the Event and On-Demand Webinar pages for consistency.

**Webinar states and behavior:**

- Upcoming Webinars → appear on the Events page, styled like standard Event pages.
- On-Demand Webinars → webinars that have passed and include a video asset; displayed like a Video page that plays the uploaded video.
- Past Webinars (no video) → happy to open discussion on these
  - But there are options we could explore:
    - Show Event page with no sign-up buttons (we've implemented this approach currently)
    - Show Video page with thumbnail only (no video)
    - → @mac please confirm if you're happy with the current approach or switch - or we can discuss options.

**EventFeed updates:**

- Refactored /event/feed API to also fetch Video Webinars.
- Fixed preview build issues (API calls now working on resource-center-uat).
- Upcoming video webinars now appear in the Upcoming events & webinars grid.
- On-demand video webinars now appear in the On-Demand webinars section and are fetched when the event-filter is in the past.

### In-Browser Resources :book: :computer:

We've continued refining the new in-browser resource experience this week, focusing on text styling consistency.

- Updated TextBlock Quote styles
- Updated List item styles

These updates align the typography more closely with the latest UI spec and improve overall readability across resource content.

### Resource Center:

- Glossary page updates went Live :zap:
- Glossary/item/ page updates went Live :zap:

---

## :gear: PIPELINE :gear:

- :white_check_mark: Webinar schema & API refactor
- :white_check_mark: TextBlock style updates
- :eyes: Pending feedback from Mac on Past Webinar display
- :inbox_tray: Continued UAT for Resource Center LP and Videos LP
- :last_quarter_moon: Dark Mode planning & section audit ongoing

---

## :crystal_ball: UP NEXT :crystal_ball:

- Finalise fallback display logic for Past Webinars (awaiting design decision)
- Begin integration prep for Dev Hub layout refinements
- Continue planning for Sanity Staging Dataset setup
- Review next steps for Dark Mode toggle once section audit is complete

That's it for now — great progress this week as the Webinar flow comes together and In-Browser Resources continue to polish.

Hope you're having a good week! :palm_tree: (edited)

---

## Follow-up Discussion

**gg**  
Nov 11th at 10:31 PM

Hey @mac i've recorded a Loom just going through the on-demand webinars implementation.

Let us know if you have any questions!

:mac-of-approval:

**Mac McDonald**  
:spiral_calendar_pad: Nov 12th at 6:35 AM

Upcoming Webinars This gives me a 404 error

:eyes:

**Bonny Sentrosi**  
Wednesday at 3:55 PM

That link should be fine now @mac

