---
type: email
title: "End of Week Recap - Web Team"
date: 2025-12-04
from: Bonny Sentrosi
source: Slack
tags: [web-team, redis, updates, features, resource-center, landing-pages]
---

# Bonny Sentrosi - End of Week Recap

**Posted:** 9:09 PM

Hey Redis team! Here's an end of week recap on what we got up to:

---

## Features

### Redis Released V2

Rework based on Mac's Figma designs. Updates can be found here.
We'll switch out the video, and if Mac is happy, we'll set this live.

### Landing Pages

**Form SignUp Section updated (alternate variant)**

- Added extra fields and variant styles to convert the section into a two column layout for A/B testing

**Two Col (Icon) Section updated fields + front-end**

- Added support for additional themes and updated the asset used on the latest LP page

### Resource Centre - Phase 3 Rollout (IN PROGRESS)

**Resource Center LP**

- Updates have been actioned
- @Mac let us know if you are happy for us to deploy this

**Videos**

- These have been deployed, but it looks like there's a redirect on either WP or CloudFlare's side, which is redirecting https://redis.io/resources/videos to https://redis.io/customers/
- Once this has been resolved, we will add videos to the resource center subnav
- CC: @Scott Weaver

### Resource Centre - Phase 4 Enhancements (IN PROGRESS)

**Featured blog update**

- The blog featured at the top of the Blog LP can now be manually set from the Blog LP document in Sanity

**In Progress:**

- Event dates spanning multiple days

**To Do:**

- Automated pretty URLs for diagrams and resource assets
- Developing a solution to automate proxy URLs for Sanity-hosted diagrams and resource assets based on each document's slug

### Sanity Staging Dataset (PAUSED)

Latest update shared separately.

### Contact Page Updates

- Updated the schema and front-end for all sections and the page is ready for review
- CC: @Kelsey Szukhent & @Mac

### Misc Other Fixes Pushed Live

- Interactive Demos section on the `/demo-center` page to four col
- Downloads form section - Added some extra logic to handle enterprise downloads for VS Code Enterprise
- Cloud UI Image updated

---

## Pipeline

- Switching to Sanity's new Scheduled Drafts plugin
- "Header (Hero)" section title size is inconsistent in Sanity Visual Editor
- Update divider line CSS for Dusk and Midnight themes

Hope you all have a great weekend!
