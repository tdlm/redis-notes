---
type: idea
title: "A/B Testing Ideas and Implementation Plan"
tags: [ab-testing, experimentation, posthog, conversion, growth]
---

# A/B Testing Ideas and Implementation Plan

## A/B Testing Ideas - March 21st, 2025

| Rank | Section/Component            | Test Description                                                                                                                                                                                                                                                                         | Note                                                                                                                                                                   |
| ---- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Hero Messaging & CTA Design  | Test alternative headlines and button text (e.g., "Try Redis for free" vs "Get started now") along with variations in button color and size to boost clarity and urgency. We should try an outlined button for "Get a demo →"; use homepage of StatSig and vercel homepage as an example | We should also move the buttons up higher and shrink the text                                                                                                          |
| 2    | Prominent Sign-Up Placement  | Experiment with moving the sign-up CTA higher on the page or into a sticky header—making it immediately visible, even as users scroll. Again, like StatSig; let's move the sign-up higher above the fold                                                                                 | "Create a free account" instead of "Try for free" would be good to test                                                                                                |
| 3    | Value Proposition Clarity    | Refine and test different versions of the benefit statements, like "Deliver fast experiences with the fastest cache." Could try out "fastest cache" in green as opposed to "experiences"                                                                                                 | Could try "Accelerate your app's performance"                                                                                                                          |
| 4    | Streamlined Sign-Up Process  | Test variations in the sign-up form itself (reducing friction by minimizing required fields or adding progress indicators) to see if a simpler process increases completion rates                                                                                                        | How can we measure drop-off?                                                                                                                                           |
| 5    | Social Proof & Trust Signals | A/B test the inclusion (or repositioning) of customer testimonials, partner logos, or usage stats near the sign-up CTA to build credibility                                                                                                                                              |                                                                                                                                                                        |
| 6    | Demo Center Flow             | We can A/B test a qualifier page (50% of logged-out users) would see a qualifier page that would gather a subset of fields to schedule a call. This could help to qualify leads.                                                                                                         | The qualifier form would pre-fill out the "schedule a personalized demo" form. NOTE: We could also display a form overlay over the video during pause/complete states. |

## A/B Testing Implementation Plan - February 26th, 2025

### Questions

- What kind of traffic do we get now?
- What are the top things we want to test initially?
- Are we comfortable phasing this out (low fidelity MVP and increase over time)?
- Example: Does it have to live in the Sanity editor immediately or can we just vet it with code pushes for any given experiment for now?
- Do we have existing plans, mock-ups, etc., for the way A/B testing will work?
- At what level do we want to test? Full pages, components, etc.

### Plan

#### Define Clear Objectives and Hypotheses

- Write a clear hypothesis for each experiment (e.g., "User research showed that users hesitate to click the red button, so changing it to green should increase click-through rates and ultimately drive more conversions.").
- Identify primary metrics (clicks, conversions) and counter-metrics (bounce rate, time-on-page) to monitor side effects.

#### Target Audience and Segmentation

- Filter Affected Users:
  - Ensure only users impacted by the test are included (e.g., exclude logged-in users if they shouldn't see the test).
  - Use session cookies or middleware in Next.js to segment users before applying PostHog feature flags.
- Segment by Device:
  - Confirm that device data (desktop vs. mobile) is captured and tag events accordingly for later segmentation.

#### Implementing the Test in Code

- Use PostHog feature flags to assign users to variants.
- Persist assignments (using cookies/local storage) to keep users in the same bucket across visits.
- In Next.js, utilize middleware or API routes for early segmentation.
- Integrate Sanity as needed to control content/variants for dynamic pages.

#### Controlled Rollout

- Begin with a small rollout (e.g., 5% of the target audience) to validate that the implementation is working correctly without affecting all users.
- Monitor metrics and session replays to catch any unexpected behavior.

#### Determine Experiment Duration

- Use a statistical significance calculator (like PostHog's built-in tool) to decide on the test duration.
- Avoid premature peeking at the results; decide on a minimum runtime (typically 1–2 weeks) based on our traffic and expected effect size.

#### Monitor and Analyze Results

- Regularly review both primary and counter-metrics.
- Segment results by device, user tenure, or other relevant dimensions to avoid aggregation pitfalls like Simpson's paradox.
- If aggregated data looks promising but subgroups differ, dig deeper into the breakdowns.

#### Iteration and Learning

- Based on the outcomes, decide if changes should be rolled out or if further experiments are needed.
- Document lessons learned and adjust future hypotheses accordingly.
