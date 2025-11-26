---
type: email
title: Work Update from Bonny Sentrosi
date: 2025-11-07
from: bonny@mammoth.tech
to: redis-team
source: Slack
tags: [woolly-mammoth, webinars, resource-center, update]
---

# Work Update from Bonny Sentrosi

**From:** Bonny Sentrosi  
**Date:** Friday, November 7, 2025  
**Time:** 11:32 PM  
**Subject:** End of Week Update

Hey :redis: edis team :wave::skin-tone-5:! Here's a recap of things we worked on this week.

---

## :star2: FEATURES :star2:

Our two main points of focus were the migration of webinars to video and the introduction of in-browser resources.

### On-demand Webinars migration :film_projector:

The expansion of video content schema to include on-demand webinars and migration from events to video resources means that the current Sanity schema for Videos will require a few extra fields required for Webinars. These are:

- dateNew
- time

Once these fields are added, new webinars can be created as a video in Sanity. :vhs:

- Webinars that have not yet taken place will appear on the "Upcoming events & webinars" grid on the Events page.
- Visiting the Webinar page will show a registration form with any relevant content (title, details, speakers, date/time)
- After a Webinar has happened it will be taken off the site
- Uploading a video asset of the Webinar will make it a "On-demand" webinar.
- This webinar will appear on the events page in the "On-demand" section
- Visiting the Webinar page will show the uploaded video.
- Future webinars will live on the same URL: /resource-center/videos/[slug]

Please let us know if you're happy with this and we'll get started on this first thing next week! :saluting_face: @mac

### Introduction of in-browser resources. :book: :computer:

We've been working on a way to replace gated PDF downloads, allowing users to view content with chapters directly in the browser

- The In-Browser Resources preview build is here.
- New In-Browser Resource document can be found here in Sanity.
- We'll work with Mac on updating the TextBlock components to follow latest designs

### Architectural Diagrams

We did some updates to hopefully images not appearing on certain mobile browsers (@Cody)

### Resource Center LP

We worked through outstanding Pastel Feedback and pushed those fixes to UAT.

It looks like the Redis team is close to completing their content updates, which means we'll soon be able to move forward with the URL updates outlined previously (Phase 3 rollout).

We'll coordinate once final content entry wraps up. Please keep us posted.

---

## :gear: PIPELINE :gear:

- Videos LP (:inbox_tray: UAT done - please re-review)
- /videos/all page (:inbox_tray: UAT done - please re-review)
- Featured Videos section (:inbox_tray: UAT done - please re-review)
- Architecture Diagram LP lazy loading :white_check_mark:
- Architecture Diagram Page modal + download button :white_check_mark:
- Changing card style to match UI Toolkit - thanks for chat @mac leaving this with you for now.

**Up Next:**

- Continue integration prep for Dev Hub layout refinements.
- Sanity Staging Dataset (:eyes: Up Next)
- Continuing plans for Dark Mode toggle

---

## :blob_help: SUPPORT :blob_help:

- We worked on a fix for PeremeterX bot detection logic
- We pushed an update for EventFeedSection so initial data is fetched server side and that loading state isn't there on mount.
- Also pushed a fix for failing metadata on the Resource Center page.
- We pushed a 25% section size decrease live :zap:
- We address an issue with OpenGraph images not displaying

**Backlog of Support Requests**

We've compiled a list of misc/support requests we've identified/received recently here. We are balancing these whilst prioritising the feature list. Please let us know if anything on this list should be our main priority:

- Will add option for light/dark logo to News logos (per Mac's feedback).
- Considerations raised about multi-date/time webinars requiring new design logic
- Exploration of Databricks model for pdf to html automation

Hope you have a great weekend! :palm_tree:
