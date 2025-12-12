---
type: email
title: "End of Week Recap - Web Team"
date: 2025-12-12
from: Bonny Sentrosi
source: Slack
tags: [web-team, redis, updates, features, resource-center]
---

# Bonny Sentrosi - End of Week Recap

**Posted:** 5:13 AM

Hey Redis team! Here's an end of week recap of what we've been up to:

---

## Features

### Redis Released V2

Now live with some small updates to the Marketo form styles.

### Resource Centre - Phase 3 Rollout (COMPLETED)

**Resource Center LP**

- Migration is done + live
- `/resources` now shows the Resource Center, and the previous `/resource` page can be found at `/resource/all`
- A new route to `/resource/all` has been added, so it can now be linked to in Sanity
- The CTA on the "Read our guides" section on the Resource Center has been updated to go to `/resource/all`

**Videos**

- Migration is done + live. Thanks again for looking into the redirect issue @Scott Weaver
- Videos have been added to the sub-nav

### Resource Centre - Phase 4 Enhancements (IN PROGRESS)

- Multi-day event functionality is live and available on Events and On-Demand Webinars
- A new field called `dates` has been added to Events and the previous `date` and `time` field has been deprecated. This was done to keep fields consistent across events and video webinars
- Enabling the "Is Multiple Days" toggle in Sanity shows a range of dates inside of the date chip instead of a single date
- Events will also be considered to be "Upcoming" until the latest date has passed
- `EventFeedSection` and the events feed API have been optimised/refactored to suit the new dates field and multi-day event functionality

**To Do:**

- Automated pretty URLs for diagrams and resource assets
- Developing a solution to automate proxy URLs for Sanity-hosted diagrams and resource assets based on each document's slug

### Sanity Staging Dataset (PAUSED)

Latest update shared separately.

### Contact Page Updates

Updates have been pushed live.

### Misc Other Fixes Pushed Live

- Added Card Grid section to the Landing Page document

---

## Pipeline

- Switching to Sanity's new Scheduled Drafts plugin
- "Header (Hero)" section title size is inconsistent in Sanity Visual Editor
- Update divider line CSS for Dusk and Midnight themes

Hope you all have a great weekend!
