---
type: meeting
title: "Redis University / Stripe Checkout Flow"
date: 2025-08-22
participants: [Cody Henshaw, Scott Weaver]
tags: [stripe, redis-university, flockjay, checkout]
---

# Redis University / Stripe Checkout Flow

Asana Task: https://app.asana.com/1/20567807697952/project/1207947364243438/task/1211126018272820?focus=true
Figma: https://www.figma.com/board/6To5tjrhu0WkhOmDRdZ4Ud/RU-Monetization-Architecture?node-id=0-1&p=f&t=AAH18O1nUtiZ0WcA-0

## Discussion

- Doesn't need to happen for a little while. FlockJay said they won't be able to do it until about Mid-September.
- It will be simple
  - Click on gated course in Flockjay
    - Takes you to gated page on our site that lets you pay right there with URL params
    - They'll fill out a form on Stripe
      - They'll use a SKU (the SKU will live in stripe; waiting on finance team)
      - Wait for success callback
        - When that happens:
          - Salesforce (waiting on endpoint there) to update the customer record to indicate they've bought the SKU
            - Apex language
          - Also back to Flockjay that says they've had a successful payment
          - Redirect back to the course they pass to us
            - Worst case, we can redirect back using the course id
- Flockjay should, in theory, be able to do bundled content
- Then we wouldn't have to do any of the bundling logic on our end
- What will the page look like?
  - Probably hosted Stripe page

## Action Items

- Cody will share notes and recording
- Ask Lana about lift for
