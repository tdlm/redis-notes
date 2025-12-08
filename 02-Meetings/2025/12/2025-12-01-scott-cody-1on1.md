---
type: meeting
title: Scott and Cody 1-on-1
date: 2025-12-01
participants: [Scott Weaver, Cody Henshaw]
source: Slack
tags: [1-on-1, pricing, stripe, flex-pricing, tutorial-redirects]
---

# Scott / Cody

Mon, 01 Dec 25 · cody.henshaw@redis.com

### Personal Updates & Holiday

- Scott handled Thanksgiving turkey successfully using Alton Brown's scientific method
  - 24-hour marinade in Home Depot bucket with herbs/spices
  - Fan-dried skin, oil coating, Weber thermometer monitoring
  - No stuffing approach worked well - moist, not burnt
  - Also managed gravy and stuffing simultaneously
- Neighbor gifted electric skateboard to Scott's family
  - Used for hours at in-laws' house during Thanksgiving
  - Considering purchasing multiple units
- Cody discussed scientific cooking approaches
  - Recommended Kenji (Serious Eats) for food science techniques
  - Mentioned Git repo for open-source recipes with pull requests

### Active Work Updates

- Pricing page updates completed
  - Removed free plans from display as of last week
  - Discovered daily cron job was overriding manual changes
  - Now understands Sanity cron system for future use
- Stripe integration progress
  - Working with Sally on test page setup
  - Refreshing knowledge of Stripe test mode functionality
  - Building POC currently
- Pricing calculator updates awaiting Cody's input
  - Cody has brief nearly complete, will share after flight
  - New flex pricing went live in product last night
  - Uses same APIs as current implementation

### Flex Pricing Implementation

- New Pro tier flexibility for RAM/flash percentage allocation
  - Allows 50-100% RAM usage in 10% intervals (50, 60, 70, 80, 90, 100%)
  - Up to 80% cost savings for customers using mixed storage
  - Targets customers who couldn't afford 250GB+ on full RAM
- UI implementation plan:
  - Add percentage slider to Pro card in calculator
  - Default at 100% RAM (current Pro pricing)
  - Label: "RAM percent" or "configure your price to performance"
  - Breakdown section updates needed based on selected percentage
- Mobile styling fixes needed for calculator display

### Technical Details & Redirects

- Tutorial redirects testing in progress
  - Rolling out piecemeal rather than all at once
  - Old/stub pages redirecting to /tutorials index
  - Obvious course pages may redirect to course start instead
- EN URL cleanup implemented
  - Fixed proxy surfacing to remove /en/ from default language URLs
  - Social sharing links updated to exclude /en/ prefix
  - Marketing redirects already in place, proxy now surfaces properly

### Next Steps

- Cody: Share flex pricing brief after flight with billing deck details
- Scott: Implement percentage slider for Pro tier in calculator
- Scott: Fix mobile styling issues on calculator
- Scott: Continue tutorial redirect testing and implementation
- Scott: Deploy EN URL cleanup changes

---

Chat with meeting transcript: [https://notes.granola.ai/t/48e45241-b68b-495a-8d70-280735e206be](https://notes.granola.ai/t/48e45241-b68b-495a-8d70-280735e206be)

