---
type: meeting
title: Pricing Calculator - Phase 2 Updates
date: 2025-11-24
participants: [Scott Weaver, Igal Perelman, Cody Henshaw, Yoav Haresh]
source: Slack
tags: [pricing, calculator, redis-cloud]
---

# Pricing Calculator - Phase 2 Updates

**Date:** November 24, 2025  
**Participants:** Scott Weaver, Igal Perelman, Cody Henshaw, Yoav Haresh  
**Source:** Slack conversation

## Summary

Igal Perelman reviewed the pricing calculator and found some issues that don't work as expected, plus suggested some minor changes.

## Issues Identified

### 1. Pricing Page - Remove Free Tier Row

- **Issue:** https://redis.io/pricing/ => view pricing from Essentials: we should remove the 30 MB / free top row since it belongs to the free tier.
- **Status:** ✅ Done
- **Notes:**
  - Cody clarified this is not the calculator, it's the pricing page
  - Scott updated it but will double check where

### 2. Pro Breakdown - Storage Level Display

- **Issue:** https://redis.io/pricing/calculator/ => See breakdown on Pro does not display the storage level on the left most subscription column.
- **Suggestions:**
  - Indicate the GB size right next to Pro in the subscription column (like we do with Essentials)
  - Or add the GB size right next to the RBU in brackets
- **Status:** ✅ Done
- **Follow-up Thread:**
  - Igal Perelman (Nov 23, 5:43 AM): Still not seeing storage level on Pro - Essentials shows size, Pro does not
  - Scott Weaver (Nov 24): Since Pro has a shared cell for all items (to indicate all items are included in Pro rather than individually billed items), added a Dataset column to the results that indicates which plan corresponds to which line

### 3. Calculator Input - 0.25 GB Display Issue

- **Issue:** https://redis.io/pricing/calculator/ => input 0.25 GB => Essentials displays $18 / month (instead of $5 / month).
- **Root Cause:** This is due to the math:
  - 1024 \* .25 = 256MB, which puts it just over the 250MB threshold
  - 256MB = $18/mo, 250MB = $5/mo
  - 250/1024 = 0.244140625
  - If we put in .24 into the calculator, it correctly shows $5/mo
- **Potential Solution:** If we want GB to be 1000 based instead of 1024 based, that could fix this but unknown whether it would cause other issues.
- **Status:** Under discussion with Yoav Haresh

## Action Items

- Scott: Double check pricing page update location
- Yoav: Decide how to address the 0.25 GB input issue (GB calculation base: 1000 vs 1024)
