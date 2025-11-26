---
type: meeting
title: Redis.io Calculator New Endpoint Testing
date: 2025-10-24
participants: [Scott Weaver, Yoav Haresh, Nir Chodorov]
tags: [pricing-calculator, api, testing, migration]
---

# Redis.io Calculator New Endpoint Testing

**Date:** October 24, 2025  
**Participants:** Scott, Yoav Haresh (yoav.haresh@redis.com), Nir Chodorov (nir.chodorov@redis.com)

## Migration to All Platform Pricing

- Moving Redis website pricing to All platform by November/December
  - November target might slip due to Black Friday code freeze
  - First time discussing this change with calculator team
- All pricing will come from All instead of current endpoints
  - Potential impact on [Redis.io](http://Redis.io) calculator functionality
  - Need to identify affected endpoints to minimize disruption

## Current Calculator Endpoints

- Scott shared 4 main endpoints used:
  - Get plans pricing
  - Get shard pricing (widely used endpoint)
  - Shard types
  - Subscription minimum pricing (bulk pricing endpoint)
- Similar setup to other internal tools but calculator is anonymous (no subscription attachment)

## Implementation Strategy

- Behind-the-scenes changes only initially
  - No endpoint changes for calculator team in phase 1
  - Transparent migration approach to minimize risk
- Future consolidation plans
  - Potential endpoint merging discussed for later phase
  - Will collaborate on optimization after initial migration succeeds

## Testing Environment Setup

- Calculator uses same production endpoints for preview environments
  - Vercel deployment calls [upredis.com](http://upredis.com) endpoints directly
  - No separate staging environment configuration
- LaunchDarkly feature flags available for private preview
  - Can enable for specific IPs during testing phase
  - Allows safe testing before full production rollout

## Next Steps

- Nir: Review endpoints to ensure no breaking changes planned
- Nir: Provide heads-up in couple weeks when moving to QA environments
- Scott: Be ready to test in preview environment when notified
- Future: Collaborate on endpoint consolidation after successful migration

