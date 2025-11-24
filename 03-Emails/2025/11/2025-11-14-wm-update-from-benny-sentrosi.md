# Work Update from Bonny Sentrosi

**From:** Bonny Sentrosi  
**Date:** Friday, November 14, 2025  
**Time:** 8:58 PM  
**Subject:** End of week Update

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
- These have been updated to have multiple dates. The current config goes as follows:
  - Webinar has multiple dates and one is still upcoming, the next closest date is shown
  - Webinar has multiple dates and all dates have passed, the latest date is shown
  - @mac let us know if you have any reservations with this setup.
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
- Featured events on the Events LP has been updated to work with the new On-Demand webinars.

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

## :blob_help: SUPPORT :blob_help:

- Reviewing updated auth requirements to include Sm-Id-Token
- Assisted with the Segment setup on the Docs website

---

## :crystal_ball: UP NEXT :crystal_ball:

- Finalise fallback display logic for Past Webinars (awaiting design decision)
- Begin integration prep for Dev Hub layout refinements
- Continue planning for Sanity Staging Dataset setup
- Review next steps for Dark Mode toggle once section audit is complete

That's it for now — great progress this week as the Webinar flow comes together and In-Browser Resources continue to polish.

Hope you all have a great weekend! :eyes:

---

## Follow-up Discussion

**Mac McDonald**  
:spiral_calendar_pad: Yesterday at 2:26 PM

@Bonny sorry for the delay here. Getting myself sorted after being out last week.

**Notes/questions:**

**Events & Webinars -**

- Upcoming Webinars → appear on the Events page, styled like standard Event pages.
  - This makes sense, the CTA button currently says "Watch now" but I assume that would be more like "Sign up" since it's not live/on-demand yet. Right?
- We still need a multi-date drop down option for events/webinars. For example, we have the same event/webinar happening across different time zones. We want users to be able see and register for time/date that works for them vs. having multiple cards of the same event for each time zone. I owe you a design for that.
- We still need the series logic you've built. So if we have the same event over and over once a month, it just automatically surfaces that next event/webinar in the same series once the most one has past.
  - @Laura Giannola can you keep me honest on these last 2 bullets. Do I have this right?

- Past Webinars (no video) → happy to open discussion on these
  - I don't think we have a use case for this treatment currently. If there is not video for a past webinar we wouldn't show it, but there might be a future state where we need this so we can keep it ask an option.

**In-Browser Resources :book: :computer:**

- I have some design feedback I'll put into pastel. Nothing major.

I think that covers it! Reach out if you have questions!

**Links:**
- [Dev] Webinar Upcoming: https://redis-sanity-git-feature-on-demand-webinars-redis-marketing.vercel.app/resource-center/videos/dev-webinar-upcoming/
- [Dev] Webinar Past: https://redis-sanity-git-feature-on-demand-webinars-redis-marketing.vercel.app/resource-center/videos/dev-webinar-past/

---

**Bonny Sentrosi**  
Yesterday at 2:46 PM

Thanks for getting back to us with these @mac, and no worries, figured the big changes would be time consuming for you.

---

**Laura Giannola**  
Today at 6:38 AM

Yes, both of those bullets are accurate for the webinar functionality @mac & @Bonny!

I also have those outlined on the planning doc here for reference :slightly_smiling_face:

**Google Docs:** Event architecture & web

---

**Bonny Sentrosi**  
1 hour ago

Thanks for confirming @Laura Giannola :slightly_smiling_face: :+1:


