---
type: meeting
title: "Redis.io Calculator Discussion"
date: 2025-06-17
participants: [Yoav Har-Esh, Scott Weaver, Sowmya, Cody Henshaw, Igal Perelman]
tags: [pricing-calculator, auto-tiering, qpf, flex, dedicated]
---

# Redis.io Calculator Discussion

## Discussion

### Auto-tiering (Redis Flex)

- Already exists in the pricing API.
- Should be easy to add to the calculator UI.
- Applies only to the Pro tier.
- Requires design input (e.g., Figma).

### QPF (Query Performance Factor)

- Will be add to billing as of August 1.
- Soon work on enhancing the pricing API will be done, will update Scott Weaver once we can start testing.

### Design & Ownership

- Cody's team will handle design (Figma).
- Mac might contribute, but async planning is preferred over live calls.
- Conversation needed around how to represent Flex, especially in Essentials.

### Essentials vs. Essentials Flex

- Ongoing discussion on how Flex shows up in Essentials.
- May require changes to redis.io sizer and purchase flow.
- Tied to the rollout of the Dedicated tier.
- Ownership expected to remain with Noam (PM).

### Calculator Purpose & Data Strategy

- Split planned features into:
  - No Brainers (e.g., QPF removal, Pro Auto-tiering)
  - Data-Driven (e.g., Flex in Essentials)
- Amplitude instrumentation expected by end of month.
- In the meantime, GA data may help assess usage.
- Overall goal:
  - Show best possible offer.
  - Possibly turn calculator into a hand-raiser funnel to drive sales engagement.

## Action Items

### Cody

- Provide GA data on calculator usage
- Coordinate Figma for Auto-tiering and Flex
- Start measuring calculator via Amplitude if no GA data

### Yoav Har-Esh

- Future - Dedicated (Instance base) - Confirm with Cody Goal is to be ready for launch September 1st
  Require design + Pricing API from ORB new billing platform (soon will be available for testing).
- Confirm with Cody on QPF/Auto-tiering work
  Auto tiering require design (Flex in pro) + Auto tiering toggle in the UI
  QPF billing going live August 1st, goal is to add to the calculator for launch.

### Igal Perelman

- Align with Noam on Flex in Essentials
- Help coordinate design and flow changes as needed
- Share Hadas's FIGMA

### Team

- Finalize Essentials vs. Essentials Flex UI behavior
- Add Noam to #unified-cloud-pricing-calc (if not already present)
