---
type: document
title: "Cloud.redis.io Platform Notes"
date: 2025-12-11
tags: [cloud-redis, ux, onboarding, redis-copilot, observations]
---

# Cloud.redis.io Notes

## General Observations

- Joined University through JavaScript path, but it wasn't pre-selected. Had to select it again.
- No CMD+K menu for navigation – could be very useful (similar to PostHog and other platforms).
  - I just noticed that the docs subsite has this feature. It feels weird that all these things are so disjointed.
- Could we add an AI chat feature to answer questions?
  - Redis Copilot exists (detailed notes below).
- Why doesn't redis.io know when I've logged into cloud.redis.io ?

  - Answer: we have a session token detector but only use it for university signin. We definitely can manipulate the header when logged in.

- Are there reminder emails for users who haven't completed setup?
  - Suggested implementation: Automated email reminders.

## Sign-In Flow & Onboarding

### Authentication

- Google – Works ✅
- GitHub – Works ✅ (only if a public email is available)
- Manual Sign-In – Works ✅
- Logout – Logs out in all open windows 👍

### Questions/Suggestions

- Should we add GitLab authentication? (PostHog supports it.)
- Should we collect Organization Name, Role, and "Where did you hear about us?"? (Could provide useful insights.)
- Manual sign-up:
  - No live feedback on password strength ❌
  - No "show password" option ❌
- Tested manual flow after using SSO – received the expected email confirmation ✅

## Creating a Database

### User Experience Notes

- Crazy idea: Offer simplified interface with preconfigured options to reduce onboarding friction, but with an advanced toggle for the view we see now.

  - Cloud Database create has something like that:

- "What type of subscription do you need?"
  - Clear, but should indicate the most popular option.
- "Database Name"
  - Makes sense but could use a Tour Guide or Explanation popover.
- Why is Memcached an option? 🤔
- "Durability Settings"
  - Needs more explanation, even for technical users.
- DB Size Selection Flow
  - Selecting "Essentials" above affects the 250MB $5/mo selection below, which alters the user flow.
  - This could be confusing and should be clarified.
- Coupon Box
  - Why is it visible if I'm creating a free database?

## Database Configuration View

- "Open with Redis Insight"
  - What does this do? Why should the user care?
- "Upgrade" button
  - Well-placed ✅
- "Import dataset | Connect to database | Open with Redis Insight"
  - Redis Insight is unclear at this point – feels like analytics or visualization?

### Configuration Tab

- General Section
  - "Connect" button opens right-side drawer – great UX ✅
  - "Tags" – Why use these?
  - Vendor/Region/Type/Version/Creation Time – Useful ✅
  - Supported Protocol(s) & Advanced Capabilities – Not immediately clear why these matter 🤔
- Performance Section – Excellent ✅
- Durability Section – Needs more explanation 🤔
- Security Section – Useful ✅
- Alerts Section – Useful, but could benefit from a prompt: "Create alerts for XYZ."
- Danger Zone Section – Well-organized ✅

### Metrics Tab

- Super useful data visualization ✅

### Slowlog

- Could use an explanation for non-technical users.

## Subscriptions

- Filter & Search functionality – Logical interface ✅

## Databases Tab

- Popover with connection hint – Very helpful ✅
  - Suggestion: Standardize this across the platform.

## Overview Tab

- Tabbing through sections reveals helpful hints
  - This is useful but not obvious – could be highlighted better.

## Data Access Control (DAC)

- Popover helps guide users to the next step ✅

## Access Management

- Seems straightforward but unclear how it differs from Data Access Control (DAC).

## Logs / Account Settings / Usage Report / Billing & Payments

- All seem straightforward. ✅

## Redis Copilot

- Should be available on the bottom right across the whole interface.
- Questions & Suggestions:
  - What ML model powers Redis Copilot?
  - Does it support positive/negative feedback for training?
  - Why doesn't it upsell users? Could be a big opportunity.
  - A mascot could add some personality to the bot as well:

## Download Center

- Straightforward. ✅

## Support

- Why isn't Redis Copilot featured front and center in the Support Portal?

## Documentation

- Decent. ✅
