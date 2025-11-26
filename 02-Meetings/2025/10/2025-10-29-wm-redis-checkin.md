---
type: meeting
title: WM/Redis Quick Check-in
date: 2025-10-29
participants: [Kelsey Szukhent, Scott Adrian, Sam, Alannah, Mac McDonald, Cody Henshaw, Bonny, Scott Weaver]
tags: [woolly-mammoth, resource-center, videos, webinars, dark-mode]
---

# WM/Redis Quick Check-in

**Date:** October 29, 2025  
**Participants:** Kelsey Szukhent (kelsey.szukhent@redis.com), Scott Adrian (scott.adrian@redis.com), Sam (sam@mammoth.tech), Alannah (alannah@mammoth.tech), Mac McDonald (mac.mcdonald@redis.com), Cody Henshaw (cody.henshaw@redis.com), Bonny (bonny@mammoth.tech), Scott

## Resource Center & Architecture Diagrams Progress

- Architecture diagrams shipped and live on site
- Individual items now include:
  - Image opening in modal
  - Download functionality
- Woolly Mammoth team at [https://mammoth.tech](https://mammoth.tech) identified opportunity to improve PDF download URLs
  - Currently auto-generated ugly URLs
  - Technically possible to create pretty link rewrites during build
  - Would benefit both new architecture diagrams and existing PDF resources
- Added to development backlog

## Video Platform Updates

- Featured video section redesigned to 6 manually selected videos
- Removed lazy loading from main page
- New "View All" page with:
  - Lazy loading and search functionality
  - Grid layout for all videos
  - Filter chips for collections, webinars, event replays
- Resource landing page now supports collections beneath featured content
- Video collection page received snack card graphics under video cards
- Waiting for final content entry before shipping

## Webinar-to-Video Workflow Redesign

- Current manual process between events page and videos page needs automation
- Proposed solution based on Databricks approach at [https://databricks.com](https://databricks.com):
  - Webinars always live at consistent video URLs ([redis.io/videos/webinars/slug](http://redis.io/videos/webinars/slug))
  - Pre-event: shows registration page at same URL
  - Post-event: same URL shows on-demand viewing page
  - Removes need for redirects and preserves SEO value
- Technical implementation:
  - Extend video documents in Sanity to include event information
  - Build logic to reference videos from events area
  - Automatically hide event details after date passes
- Decision: New webinars use this approach, existing catalog remains in current location

## Dark Mode & Design System Updates

- Glossary dark mode updates completed
- Global dark mode toggle in progress:
  - Mac reviewing sections that could be deprecated
  - Identifying missing dark/light mode versions
  - Page documents need alternate styling development
  - Blogs and other content already handled

## Upcoming Features & Technical Items

- Multi-date webinar toggle requested by demand generation team
- Redis release post-event hub page conversion:
  - Repurpose into promotional recap page
  - Featured wrap video in header
  - Three featured videos with CTA to full collection
  - Form for next year interest
- In-browser PDF reading capability under review
- Content scheduling: waiting for Redis native solution to replace current plugin

## Action Items

- Mac: Review webinar promotion strategy for existing catalog
- Sam/Woolly Mammoth: Investigate PDF URL rewrite implementation
- Mac: Finalize dark mode section deprecation list
- Mac: Review in-browser PDF reading solutions and report back

