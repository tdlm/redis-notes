---
type: meeting
title: Scott and Cody 1-on-1
date: 2025-12-08
participants: [Scott Weaver, Cody Henshaw]
source: Slack
tags: [1-on-1, pricing-calculator, flex-pricing, tutorial-migration, ab-testing, team-expansion]
---

# Scott / Cody

Mon, 08 Dec 25 · cody.henshaw@redis.com

### Personal Updates

- Weekend activities
  - Both had mothers-in-law visiting
  - Hung Christmas lights on houses
  - Scott's son helped with second story - climbed roof like "spider monkey"
- Fitness discussion
  - Scott back to running 2 miles, working toward weight loss goals
  - Cody cycling background - used to ride 100 miles/week, dropped to 145 lbs
  - Both targeting 2025 as comeback year
- Ben's school project
  - Egyptian deity sarcophagus project due Dec 15th
  - Playing god "Ptah" (creator deity)
  - Building sarcophagus + recorded speech presentation

### Pricing Calculator Updates

- Redis Flex feature now active in console
  - 10-50% RAM allocation slider (rest SSD)
  - Currently charging lowest price regardless of selection
  - Real pricing math coming soon from Shmulik
- Hard-coded pricing received for implementation
  - $0.0049 and $0.0066 per gigabyte per hour
  - Need to move toggle to database level vs card level
  - Urgent priority - was needed for re:Invent last week
- Bug reported by Ravi Raj on breakdown inconsistencies
  - 25GB with 20-75k ops showing calculation errors
  - Phase 2 fixes needed

### Tutorial Migration Strategy

- Scott abandoning "all at once" approach
  - Will surface high-popularity tutorials individually with feature flags
  - Back button points to dev hub temporarily
  - Prevents blocking on stub page cleanup
- Cody paid $600 for [Builder.io](http://Builder.io) with personal money
  - Need to transition ownership ASAP
  - 12,000+ items in backlog causing delays

### A/B Testing Platform Discussion

- Marketing ops evaluating Mutiny renewal
  - Keith Nyberg exploring alternative tools
  - Preference to avoid Mutiny (slow, causes flash issues)
  - LaunchDarkly likely solution - Cody will discuss with Tomer
- Implementation approach
  1. Show current proof of concept to Nyberg
  2. Build in feature sprints vs full interface
  3. Hybrid management - power users in LaunchDarkly, others request setup
- Requirements gathering needed
  - ABM use cases (dynamic logos, Salesforce integration)
  - Interface for viewing active tests vs creating them
  - Feature flags for ABM team with component selection

### Infrastructure Issues Resolved

- Resources/videos redirect mystery solved
  - Found in Cloudflare bulk redirects (Adrian's temp redirect)
  - Scott needs bulk redirect access from Tomer
  - Issue immediately resolved after deletion

### Team Expansion

- New headcount approved for CRO manager role
  - Will manage rate optimization and A/B testing
  - Scott will report to new hire, both under Cody
  - Job posting needed this week
- Interview process planning
  - Scott involved in candidate selection 100%
  - Focus on culture fit + technical minimums
  - Practical evaluation: "How would you increase meeting form conversions?"
- Website performance achievement
  - Vercel score improved from 98 to 100/100
  - Performance insights consuming half monthly billing units
  - Plan to implement sampling on key pages only

### Next Steps

- Cody: Get pricing calculator math from Shmulik and post manager job req
- Cody: Request Cloudflare bulk redirect access for Scott from Tomer
- Cody: Discuss LaunchDarkly timeline with Tomer for A/B testing
- Scott: Implement database-level Flex toggle with slider on preview environment
- Scott: Surface individual tutorials with feature flags starting today
- Scott: Investigate pricing calculator breakdown bug from Ravi Raj
- Scott: Provide manager role candidate recommendations to Cody

---

Chat with meeting transcript: [https://notes.granola.ai/t/4c1529a9-b905-49eb-9a97-f98fb8348633](https://notes.granola.ai/t/4c1529a9-b905-49eb-9a97-f98fb8348633)

