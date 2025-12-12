---
type: meeting
title: "Yoav / Scott - Pricing Calculator Enhancements Phase 2"
date: 2025-05-27
participants: [Yoav Har-Esh, Scott Weaver]
tags: [pricing-calculator, auto-tiering, flex, dedicated, qpf]
---

# Yoav / Scott

## Topics

- Pricing Calculator Enhancements Phase 2
- Auto Tiering Logic
  - Not sure how it worked in the previous instance.
  - Let's see what it does in the sizing-calculator.
  - If you check the box, the pricing API gives you the right price
  - Maybe we need to add Auto Tiering
  - There are different billing units for Flex, Pro, etc.
  - If you check the auto-tiering, you'll get a billing unit called XLarge (Auto-tiering Redis 7.2+)
- Flex - how do we present it? It's not a standalone product. You can have Essential or Pro Flex. Soon, we'll have instance-based (called dedicated), which also have a flex option within. We'll have to talk to ???.
- Generally, we'd like to add some wording in each tile that's the difference between each offering. Same as we do in the UI. If I go to Redis Cloud UI (cloud.redis.io). It should match what's in here.
- Then, we'd like to add Dedicated (Instance Based). It's the same as the previous requirements with some other restrictions, like: we will only allow one DB. If you create several DBs, instance-based is not relevant for you. Later, we will allow it.
- Query Performance: if you want more compute power. You say I want to grow vertically. If I check Pro Subscription, I get a multiplier for the performance (like increasing CPU power).
  - Soon, we'll be adding this to billing.
  - We need to add some kind of field "Query Performance Factor" and once the user checks it, basically the pricing API should automatically give you the price including query performance factor. What we do -- if the customer requested 1000 ops/sec and if I do 4x; we take the 1000 ops and multiply it times 4 and gives you Redis Billing Units as if you asked for 4000 ops per second. We'll reflect it in the UI too. As soon as it's checked in the calculator, the pricing API will send back the price.
    - Where do we represent this pricing change?
    - It needs to have values (2, 4, 6, 8 ... 16)
    - The pricing API
  - Let's keep this to last as we are working on returning this from the pricing API.
- High Availability impacts the total memory
- The Billing part of the Query Performance is not ready yet, so the pricing api will not bring you the price including the Query Performance. What I can do is calculate it for you. If you tell me you want a dataset size of 1GB, and I want 4X query performance
- Dedicated should be available for instance-based launch (end of July (31st))
- Wording rollout, then auto-tiering would be next
- Yoav: If we can make the tiles as close to the Cloud UI
- Sallie: Fall is our goal

## Action Items

- Scott Weaver will review the PRD and get back
- Scott Weaver will look into auto-tiering on the old calculator and document it
- Yoav will double check with Yacov
