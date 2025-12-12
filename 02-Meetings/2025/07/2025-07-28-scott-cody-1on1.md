---
type: meeting
title: Scott / Cody 1-on-1
date: 2025-07-28
participants: [Scott Weaver, Cody Henshaw]
tags:
  [
    1-on-1,
    langchain,
    pricing-calculator,
    cloudflare,
    vercel,
    performance,
    woolly-mammoth,
  ]
---

# Scott / Cody 1-on-1

**Date:** Monday, July 28, 2025

**Participants:**

- cody.henshaw@redis.com

## Agenda/Topics

### LangChain Calc

- I'd like to take a deeper look but I'm also good handing it off to Woolly given the deadline

### Dev / Mac Updates

- Header search (Sallie)
  - Prioritize this next
  - Get the new stuff once it moves

### Pricing Calculator

- Get us off of Cloudflare / straight to Vercel (10-15% speed)

### Pushing Woolly

- Error / loading states
- Fall into our testing plan
- Treat this thing like a product
- Have unit tests
- Optimize build times since they'll be slowed down
- Short term:
  - Benchmark anything on Cloudways so we know how it was on Pantheon
  - From India, the page load performance has been bad
  - Top conversion pages
  - Performance Diff:
    - Maybe use lighthouse-cli + s3 bucket for simple report (needs baseline)

### Pricing

- We need the new design up and running and then we can go live

### Pages to Speed Test

- redis.io/ (home)
- redis.io/try-free
- redis.io/meeting
- redis.io/cloud
- redis.io/software
- redis.io/insight
- redis.io/downloads
- redis.io/lp/try1/
- redis.io/resources
- redis.io/pricing

## Action Items

- Set up meeting with Mac and Sowyma RE: Pricing Calc changes
- Look into the Performance Diff for the pages above
- Set careers page live:
  - First, test form
  - Second, make sure we have parity for Greenhouse import sync
  - Change redirect from /careers/ to /company/careers/
