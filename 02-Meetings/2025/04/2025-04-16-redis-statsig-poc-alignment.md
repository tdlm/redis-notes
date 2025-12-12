---
type: meeting
title: "Redis <> Statsig POC Alignment"
date: 2025-04-16
participants: [Sophie Saouma, Mary Nguyen, Adrian, Scott Weaver]
tags: [statsig, ab-testing, poc, sanity, mutiny]
---

# Redis <> Statsig POC Alignment

Sophie Saouma (StatSig) - Solutions Engineer, Help with Technical Implementation
Mary Nguyen (StatSig) - Account Executive, Main point of contact
Adrian
Weaver

## Summary

The Redis <> Statsig POC meeting included introductions and an overview of current efforts, highlighting light an ongoing migration to Sanity.io, and limited technical integration with Mutiny, which poses scaling and performance challenges. The website replatforming aims to boost sign-ups and reduce drop-off through atomic component testing and user segmentation. Statsig presented their strengths in component-based and server-side testing, flexible metrics reporting, and robust experimentation tools. They support integration with data warehouses like Postgres and Redshift and offer features for managing user exposure across tests. A follow-up meeting is scheduled for Friday at 9am.

## Topics

- Intros
- Overview
  - Engagement with Cody has been light.
  - Actively moving to Sanity.io
  - Mutiny exists for testing
    - We have PMs running it; there's no technical integration
    - Adrian has to do CSS/JS; more than not, they're able to handle it at a high level
    - Challenges:
      - Scale (changing a component that spans across multiple pages because it's very URL based right now). The system we were envisioning building would be more component based so they can test the same component across different pages.
      - Performance; it's another JS front that's on top of the site. The less we can use it, the better.
      - Integration with the full flow control.
  - Examples:
    - Top Banner
- Website Replatforming
  - Main goal is to increase sign-ups on our platform and decrease drop-off
  - Atomic testing of components
  - Segmenting users
- StatSig
  - Feature flagging and experimentation for component-based and server-side testing
  - 98% of customers are using StatSig for component-based or server-side testing
  - Meaningful as a second part:
    - Reporting metrics is very flexible compared to other solutions in the market
      - Gathering clicks, pairing it with product data in your warehouse
      - Offline events
      - Collect different data points besides clicks
      - Different types of metric types
      - Tons of stats
      - Conditions you can set up so a certain type of user is exposed
      - Tests that are contradicting; we can make sure the user who is exposed to test A is not exposed to test B
- Data Strategy / Experimentation
  - Technical Challenges
    - What people typically do with a giant Content Management System to effectively increase conversions
    - Most clients are programmatically setting up tests?
    - Data is exportable
      - Postgres/Redshift - can connect with those
      - Connect all of the different redis.io areas together

We'll set up a meeting for Friday morning at 9am
