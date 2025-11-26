---
type: meeting
title: Redis <> Stripe - Redis University
date: 2025-10-29
participants: [Yoav Haresh, Sallie Gamboa, Marie-Emmanuelle Flute, Chris Floyd, Fahad Ahmed, Organ Not, Scott Weaver]
tags: [stripe, redis-university, billing, tax, invoicing]
---

# Redis <> Stripe - Redis University

**Date:** October 29, 2025  
**Participants:** Yoav Haresh (yoav.haresh@redis.com), Sallie Gamboa (sallie.gamboa@redis.com), Marie-Emmanuelle Flute (marieflute@stripe.com), Chris Floyd (chris.floyd@redis.com), Fahad Ahmed (fahad.ahmed@redis.com), Organ Not (organnot@stripe.com), Scott

## Redis University Course Payment Setup

- New revenue stream for online courses through [Redis.io](http://Redis.io) checkout
- FlockJay platform hosts courses but lacks payment solution
  - User selects course → redirects to [Redis.io](http://Redis.io) payment page
  - One-time payments only (no subscriptions)
  - Global customer base: US, APAC, EMEA mix
- Marie-Emmanuelle Flute (Stripe) confirmed low-lift integration possible
  - Stripe Checkout recommended for minimal implementation
  - Customizable with Redis logo and colors
  - Handles all payment errors automatically

## Tax and Invoicing Requirements

- Must issue proper invoices (not just receipts) for B2B compliance
- VAT collection needed for Israeli customers only currently
- US sales tax calculation based on billing address ZIP code
  - Customer responsibility to provide correct address
  - Checkbox confirmation required
- Chris Floyd confirmed monthly batching acceptable (aligns with current SM invoices)
- Stripe Tax can automatically calculate and collect required taxes
- Stripe Billing handles invoice generation and compliance

## Technical Implementation Plan

- Scott Weaver gets direct developer support access from Stripe
  - Marie checking if Neil's access can be temporarily swapped
  - Alternative: manual rerouting of requests during project
- Solutions architect support requested for complex setup questions
- Documentation package to be provided by Marie
- Timeline target: completion by end of calendar year
- Minimal integration approach prioritized over feature-rich solution

## Next Steps

- Marie: Contact Laura for solutions architect assignment (tomorrow)
- Marie: Send implementation documentation to team
- Marie: Verify sales tax calculation requirements with Stripe team
- Marie: Set up Scott's developer support access
- Sallie: Send requirements list and Figma screenshot to Marie
- Sallie: Coordinate with FlockJay on course unlock API integration
- Team: Decide on separate Stripe accounts for different regions
- Chris: Monthly report extraction from Stripe to NetSuite (quarterly if manual)
- Roy consultation on SMID data lake integration as alternative to manual reporting

