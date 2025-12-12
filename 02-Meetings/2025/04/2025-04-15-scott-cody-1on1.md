---
type: meeting
title: "Scott / Cody 1:1"
date: 2025-04-15
participants: [Scott Weaver, Cody Henshaw]
tags: [1on1, pricing-calculator, sanity, instance-based, orb]
---

# Scott / Cody 1:1

## Talking Points

- Pricing calculator
  - Need to double memory size for HA
  - Confirm Free Essentials on <= 0.02GB
    - Forever free; may change
- Pricing calculator on Sanity-Next
  - Meeting with Lana / GG
  - New design system (spoke with Mac)
    - We have final say; it's our site
    - We need to have a healthy push/pull with brand
    - If it's DG/PMM coming to us, it's an easy no
    - If it's Matt, saying we need to test a new variant, it's in most cases going to be a yes
    - (Within reason)
      - Functional vs visual differences
    - I want to look for yes in most cases
- Instance-based pricing in June; an additional SKU. Will add some complexity in the short term. Implementing a new billing & payment system called Orb. Right now, all the pricing/APIs are managed by our product team. It will eventually move into Orb. In the short-term, they'll only be able to get instance-based pricing on Orb and then they'll do reconciliation at a different, platform level.
  - Flex will roll into Essentials/Pro and be instance-based and an add-on as you're setting it up, so it will go back to 3. Pro may go away at some point.
  - Why Instance-based over Pro?
    - We select the size of the hardware based on your configuration. Most customers don't buy hardware that way; people buy instances and you choose the size of the machine you want. That's the feedback we've received from customers.
    - It also causes issues when they know they need more space, they have to buy more space. They have to buy more than they need. You'd need a lot more shards, which would be expensive.
    - People are used to buying instance-based.
    - Technically, we're cheaper, but people don't know it. It doesn't feel that way.
  - Could be better for us?
    - ElastiCache if you're comparing us head-to-head based on the data you can put into it; they'll provision 30% more resource than you need because you only get 70% of the machine as usable space.
    - When we have instance-based you'll be able to use 100% of that instance. Ours will be cheaper for the same amount of memory just because we can use all that space. It's a big bet.
  - Vercel/Heroku - you can only buy the Essentials tier.
- Igal / Head of Growth on Product Side
  - Lots of opinions
  - A/B testing A-Z
  - LaunchDarkly / only benefit is that produce already has it
- Homepage
  - Doesn't matter what we say there
  - Maybe we want to A/B test a banner
- A/B test
  - Send Cody a thumbs up and thumbs down
  - Keith would prefer us to tell the results of an A/B test
