---
type: meeting
title: Scott and Cody 1-on-1
date: 2025-11-24
participants: [Scott Weaver, Cody Henshaw]
source: Slack
tags: [1-on-1, tutorial-migration, stripe, pricing-calculator, ab-testing, splash-migration]
---

# Scott / Cody

Mon, 24 Nov 25 · cody.henshaw@redis.com

### In Progress

**Tutorial Migration**

- Nearing completion with approximately 20% of tutorials requiring formatting cleanup
- Next steps:
  - Implement redirects in next.config for Vercel deployment
  - Complete internal link updates throughout content
  - Switch from [Builder.io](http://Builder.io) to live site once testing complete
- Technical improvements made:
  - Now using slugs instead of names for cleaner URLs
  - Future-proofed category system (e.g., category/AI) for filtered listings
  - Markdown-friendly format ready for GitHub sync discussions with Will

**Stripe Integration (Redis University)**

- Access finally granted after extended approval process
- Assigned to developer role for implementation
- Timeline shifted from November POC to December delivery due to delays
- Next: Coordinate with Sally on product setup and test checkout page development

**Pricing Calculator Phase 2 Updates**

- Canvas system implemented to centralize feedback and task management
- Dataset positioning updated per Eigal's feedback - moved to correspond with line items
- Point-two-five gigabyte pricing clarification needed:
  - 0.25 GB = 256 MB (over 250 MB limit)
  - Not equivalent to 250 MB as some users expect
  - Awaiting user acknowledgment of calculation logic
- Marketo form bug resolved using prop drilling instead of setTimeout approach

### Waiting On

**Product Team: Flex Pricing Calculator Requirements**

- High priority from Chief Product Officer Jonathan - calculator identified as most important website asset
- Context: Transparent pricing differentiator vs competitors, supporting lower pricing strategy vs AWS/GCP
- Cody to provide bridged requirements from Sonia (under 2-week deadline pressure)
- Approach: Ship functional toggle first, iterate on design later with Mac's input

**Redirect Destination Confirmation**

- Decision made: Tutorial items not migrating will redirect to tutorials listing page
- Enables users to search for alternative content via [https://next.co](https://next.co)
- Scott to implement redirect list comparing Sanity content to [Builder.io](http://Builder.io) output

### Coming Up

**A/B Testing Platform Integration**

- Major focus for remainder of year
- Goal: Increase experimentation velocity to 50 tests next fiscal year
- Will require ad hoc component development
- Hours allocation pending between Scott's AB testing work vs Woolly Mammoth's splash migration

**Splash Migration Project**

- Moving all events pages from [events.redis.co](http://events.redis.co) (third-party Splash service) to Sanity
- Scope: $140K+ project, several hundred hours
- Benefits:
  - Better design control for field team
  - Improved tracking (Amplitude integration vs Google Analytics only)
  - Cost savings: $70K/year Splash subscription elimination
- Self-service tool replacement with permissions-based Sanity workflow

**Cost Optimization Context**

- Marketing SaaS spend: $2-3M annually
- Current major costs: Sanity ($75K), Vercel ($100K), Woolly Mammoth ($250K projected)
- Strategy: Variable agency costs vs fixed headcount for pre-IPO positioning
- Consolidation benefits: Strengthens Vercel partnership, improves performance, better dev experience

---

Chat with meeting transcript: [https://notes.granola.ai/t/161af073-045c-4161-b30e-b0b257d1245a](https://notes.granola.ai/t/161af073-045c-4161-b30e-b0b257d1245a)

