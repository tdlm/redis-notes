---
type: meeting
title: "Pricing Calculator - Additional Requirements"
date: 2025-06-03
participants: [Scott Weaver, Yoav Har-Esh, Nir Chodorov, Cody Henshaw]
tags: [pricing-calculator, requirements, dedicated, auto-tiering, qpf]
---

# Pricing Calculator - Additional Requirements

## Topics

- General:
  - Add some wording to the pricing calculator
  - Cody: We'd have to change to a 2X2 type tiling to fit everything
- Adding Dedicated (instance-based) tile - Will start July at earliest, then be ready by August/September
  - Should come from the new billing system; Nir is here for that.
  - It will be a new, separate tile.
  - Inputs required: Cloud Provider, Region, Dataset size, Replication/HA - Yes/no, # of DBs
  - Make replication/region editable on the fly to see live price and do not require clicking on "calculate" — same as now.
  - Multi DB is NOT available for Dedicated at MVP (same as Essentials; one subscription per DB)
  - Breakdown: Instance (cluster) Type, Hourly price, QTY
- Adding Redis Flex for Pro (AKA Auto tiering) option (the most important one; we're not even showing it now)
  - RFV1
  - Add new toggle using the same logic as before
  - Yoav wants the discussion to involve Igal
  - Yoav: Flex is an add-on product to Essentials
  - Cody: Do you lose functionality in pro if you add Auto-Tiering?
  - Yoav: No, I think it works with everything. No limitation there.
  - Cody: You can still do search? Vector support?
  - Yoav: Essentials for Flex doesn't, but I will check this one.
  - Cody: Easiest path forward is a toggle on the card. Let's call it Auto-Tiering. I don't think we can call it Flex yet.
  - Yoav: That should be called (confirmed with Sowmya) Auto Tiering
  - Yoav looked it up in the Cloud interface and saw that Auto Tiering is on the cluster level, not the DB level
  - Yoav will schedule a meeting with Igal; I think we need to move toward moving Flex to each tile. I don't know if it's the right direction, but we have Essentials, we'll click on Breakdown, we'll have an option for Flex and it could show you what additional packages you should see? Thinking out loud.
- Add some wording that describes the differences between each offering
- Add Query Performance Factor pricing option
  - We don't have the pricing API ready with the logic yet so we'll have to wait
  - A feature that gives you more compute. We are currently working on the Billing piece of it.
  - It's simple math: 1000 ops/sec, x4 compute. Multiply 1000 x 4 and calculate your RBUs (billing units).
  - Yoav: I will keep this one to last because we're working on the Billing side of it. Should be ready mid-July-ish.
  - This is a DB level of configuration.
  - Cody: Is that only available in Pro?
  - Yoav: Yes, it's only available on Pro.
  - Yoav: We will allow up to 16x in 2x increments (2x, 4x, 6x, 8x, etc.). Standard means it doesn't use the feature.

## Action Items

- After meeting, Yoav will publish his Confluence document
- Yoav will set up a meeting with Igal
- Yoav will set up another 30 min meeting with Nir to talk about testing Orb
