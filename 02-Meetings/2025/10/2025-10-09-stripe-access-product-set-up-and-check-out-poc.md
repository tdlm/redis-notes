---
type: meeting
title: Stripe Access - Product Set Up and Check Out POC
date: 2025-10-09
participants: [Yoav Haresh, Sallie Gamboa, Nir Chodorov]
tags: [stripe, billing, redis-university, checkout]
---

# Stripe Access - Product Set Up and Check Out POC

**Date:** Thursday, October 9, 2025

**Participants:**
- yoav.haresh@redis.com
- sallie.gamboa@redis.com
- nir.chodorov@redis.com

## Proposed Architecture & Flow

- FlockJay sends user to Redis.io with SM account ID and course number/name
- Redis.io calls cloud billing API with account ID and course details
- Cloud billing retrieves pricing from Orb ($15, $30 examples shown)
- Cloud billing creates Stripe checkout page and returns link to Redis.io
- User completes payment on Stripe-hosted checkout page
- Stripe sends webhook to cloud billing, which proxies success/failure back to Redis.io

## Pricing & Product Management

- Orb will store all course prices as source of truth
- Currently planning $100-$300 price range for courses
- Sally manages pricing through Orb interface (can add discounts, promotions, versions)
- FlockJay needs API endpoint to retrieve pricing by SKU for display
- Nir demonstrated Orb interface: Redis University items with multiple price points

## Payment Processing Options

- **Option 1:** Cloud billing generates Stripe checkout links (recommended)
  - Maintains pricing centralization through Orb
  - Automatic NetSuite integration possible
  - Credit card storage for future Redis Cloud upsells

- **Option 2:** Embedded Stripe checkout on Redis.io
  - Redis.io gets pricing from cloud billing API
  - Direct Stripe integration required
  - More UI control but additional development complexity

## Technical Requirements

- Scott needs Stripe access via help desk ticket for testing
- Test credit card: 4242 4242 4242 4242, 10/26, 123
- Webhook listener needed for payment confirmations
- API development required for cloud billing integration
- Two Stripe instances: Global (Redis Inc) and Israel (Redis Ltd)

## Outstanding Business Questions

- NetSuite invoice generation capability and prioritization
- Salesforce integration requirements (currently not automated)
- Country detection for proper subsidiary routing (Israel vs rest of world)
- Whether to show billing history and purchase tracking
- How to prevent duplicate course purchases

## Global vs Israel Billing Complexity

- Two separate subsidiaries require different Stripe/Orb instances
- Country detection needed before checkout page generation
- Business decision required on legal compliance vs simplicity
- Pricing assumed same globally, but checkout routing differs
- FlockJay may need to provide country information

## Next Steps

- **Sally:** Meeting with NetSuite team (Chris, Mahesh, Cossack) to clarify requirements
- Follow-up call with Yoav scheduled for next week
- **Scott:** Explore Stripe embedding capabilities while waiting for access
- **Nir:** Create Orb items for Redis University courses
- Business decision needed on Israel billing approach

