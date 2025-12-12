---
type: meeting
title: "Redis <> Statsig Demo"
date: 2025-04-18
participants: [Mary Nguyen, Sophie Saouma, Scott Weaver, Cody Henshaw, Adrian]
tags: [statsig, ab-testing, experimentation, poc]
---

# Redis <> Statsig Demo

Mary Nguyen - Came from Amplitude before StatSig
Sophie Saouma
Weaver
Cody
Adrian

## Action Items

- Mary will share the deck after the call
- Redis.io team to define the scope of the PoC, including:
  - Which 1–2 tests to run (e.g., AA test or simple feature gate)
  - Success criteria and key metrics
  - Timeline alignment for 2–3 weeks
- StatSig team to share the presentation deck from the demo.
- Follow-up check-in scheduled for the morning of April 24th, 2025 to review PoC scope, confirm technical setup, and align on goals.
- Optional: Redis.io team can begin identifying test areas (e.g., homepage hero, sign-up flow) and draft any questions or blockers ahead of the check-in.

## GPT Summary

The StatSig team presented an overview of how their platform can support Redis.io's experimentation needs, focusing on clean integration with a Next.js App Router setup, Sanity CMS, and Vercel's edge architecture. They addressed technical considerations like SSR compatibility, fast failure fallbacks, edge caching, event deduplication, and support for backend metric correlation. StatSig offers strong GDPR/CCPA compliance and allows full control over PII data. They highlighted tools like CUPED and Power Analysis for low-traffic experiments and recommended a PoC scope of 1–2 tests over 2–3 weeks. Redis.io's current challenges with visibility, data routing, and component-based testing were discussed, and StatSig emphasized their flexibility, integration options, and parity with Amplitude for analytics.

## Questions

- What's the recommended integration path for a Next.js (App Router) app hosted on Vercel with StatSig, especially with server/client boundaries and middleware?
  Looking to clarify SSR vs client SDK usage and edge compatibility.
- How does StatSig handle feature evaluation and fallbacks during SSR/ISR, especially when there's no user context at render time? And full failure fallbacks? ✅
  Important for cold loads and Vercel's edge/cache-first architecture.
  - Quick fail, show default and log the error.
- How do you recommend modeling feature gates and experiments for a component-based CMS like Sanity, where content blocks are reused across multiple pages?
  Helps determine the granularity and reusability of flags.
- Does the SDK support batching or deduplication of analytics events during hydration or navigation in a single-page app?
  To reduce noise and optimize client performance.
- How does StatSig capture and attribute events when A/B tests span across page views or include multi-touch flows?
  Especially relevant for guided flows or multi-step sign-ups.
- Can we feed in external events (e.g., Redis CLI interactions, API usage) into StatSig's analysis pipeline for deeper experiment correlation? ✅
  Useful for backend-based success metrics.
  - Enrich the data we send to stats engine.
  - Page latency, API calls, guardrail metrics, to make sure as they roll out a new feature
- What's the CDN/cache behavior for experiment definitions and flags? Can we preload or persist definitions in edge runtimes?
  Important for low-latency edge-rendered environments.
- Is there support for environment-specific segmentation (e.g., staging vs prod) and rollout rules tied to Git branches or deployment previews on Vercel?
  Affects confidence in pre-prod testing.
- How does StatSig handle user identity and PII in analytics, especially for GDPR/CCPA compliance? ✅
  Make sure user context is handled safely and legally.
  - TrustArc is what we use.
  - They are GDPR/SOFT2 compliant as well. As far as PII.
  - With the SDKs, haven't heard about implementation; you have full control for what you send over to them.
  - PII data can be used as Private Attributes; only used for targeting. Not logged or stored within StatSig.
- What's the smallest measurable effect size (lift %) StatSig can confidently detect, and how does it avoid false positives in low-traffic tests? ✅
  Critical if Redis.io has narrow funnel points or early-stage usage.
  - How long do we need to run an experiment with a lower population?
    - Tool called Power Analysis to help us figure out how long to run an experiment
    - They also have CUPED to help speed up gathering results with smaller populations
    - Niche experiments; we can rely on the StatSig data scientists
    - Big on making sure we give our customers the right knowledge setting these up
- For a PoC, what would you say is the best way to set things up? ✅
  - Align on timeline
  - What will help them to support us is the scope of the PoC
  - What are the tests we want to set up, what's the criteria, and get a clear sense of what success would look like for us
  - Next week: confirm the scope of a PoC (doesn't have to be on a call)
  - They recommend 2-3 weeks. They recommend 1-2 tests. Can be AA test.

## Topics

- Goals
  - What StatSig does and how to set it up relative to what we have today
- How have things changed?
  - Cody: Not much. Further along in the re-platform we talked about.
  - Company-wide, things have changed. Hired a new growth leader for the product side.
  - Looking at LaunchDarkly vs StatSig.
- Experimentation for both teams will be future date
- Recap of Redis
  - Challenges
    - Mutiny / flashing — especially with large components (homepage hero section)
    - Changing components across multiple pages — not a Mutiny strong point.
    - We have to go to the tool to check results; it doesn't pipe anywhere.
      - We have to roughly figure out the results of an A/B test.
      - We can't see Cohort B actually ended up spending more money which is not super helpful.
      - Sanity and Tableau would be ideal for us.
      - Mary: You can do a lot within StatSig, but we also integrate with other warehouses and tooling.
  - Business Goals
    - Developer-led and code-based to A/B Testing
    - Increased hand-raisers (meetings booked) and sign-ups on the website
- Platform
  - Feature Management
  - Experimentation
  - Analytics / 80% parity with Amplitude
- Cloud vs. Warehouse Native - They're pretty much the same.
  - StatSig built to scale with you.
