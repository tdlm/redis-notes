---
type: meeting
title: Stripe Site and UI Check-in
date: 2025-10-31
participants: [Sallie Gamboa, Mac McDonald, Scott Weaver, Kelsey Szukhent]
tags: [stripe, design, checkout, flockj]
---

# Stripe Site and UI Check-in

**Date:** October 31, 2025  
**Attendees:** Sallie Gamboa (sallie.gamboa@redis.com), Mac McDonald (mac.mcdonald@redis.com), Scott Weaver (Growth Engineer), Kelsey Szukhent (kelsey.szukhent@redis.com)

## Team Health Check

- Sallie Gamboa (Head of Customer Education), Mac McDonald (Design Lead), Scott Weaver (Growth Engineer), Kelsey Szukhent (Web and Design Project Manager)
- Multiple team members dealing with health issues
  - Sallie recovering from illness, slow recovery process
  - Kelsey battling bronchitis for two weeks, muted on most calls
  - Kelsey's ongoing respiratory issues since severe flu in February
  - Exercise-induced asthma and fall allergies complicating recovery

## Stripe Integration Decision

- Met with Stripe last week with Yoav from billing
- Moving forward with Stripe hosted billing page (minimal customization)
  - Can customize colors and add Redis logo
  - Standard appearance with limited branding options
  - Lowest lift possible approach given revenue expectations
- Future iteration plan: move to Stripe Elements if traction builds and brand requires more customization
- Stripe checkout customization documentation: [https://docs.stripe.com/payments/checkout/customization](https://docs.stripe.com/payments/checkout/customization)

## Design Implementation Approach

- Using similar treatment as Redis University login (dark mode switch)
- Options for checkout page illustration vs Redis logo placement
- Mac exploring color themes, button styles, and font options
- Chakra Petch font closest available option to current brand font
- Demo environment available for testing design variations

## FlockJ Integration Updates

- Kelsey has FlockJ website updates on Q4 task list
- Structural changes in web team affecting priority mapping
- FlockJ committed to better implementation support
  - Will schedule live implementation sessions
  - Avoid previous back-and-forth issues with Cody
- Course-specific card design integration planned for checkout experience

## Technical Implementation Questions

- Product setup in Stripe still pending
- Manual pricing entry feasible for initial 3 products
- Webhook integration needed post-checkout completion
- Outstanding questions:
  - How to pass pre-selected product information to checkout
  - User ID and username handling in Stripe
  - Payment method restrictions (if any)

## Next Steps

- Sallie to reply to Marie about using demo for business requirements
- Mac to send design screenshots to Scott
- Scott to investigate product pre-selection in checkout
- Team to set up initial products in Stripe to begin iteration

