# Cody Meetings Tracker

Tracking action items, decisions, and key topics from 1-on-1 meetings with Cody Henshaw (cody.henshaw@redis.com).

## Meeting History

- **2025-11-18** - [Meeting Notes](../../02-Meetings/2025/11/2025-11-18-scott-cody-1on1.md)
- **2025-11-10** - [Meeting Notes](../../02-Meetings/2025/11/2025-11-10-scott-cody-1on1.md)
- **2025-11-03** - [Meeting Notes](../../02-Meetings/2025/11/2025-11-03-scott-cody-1on1.md) (Part 1 & Part 2)
- **2025-10-27** - [Meeting Notes](../../02-Meetings/2025/10/2025-10-27-scott-cody-1on1.md)
- **2025-10-14** - [Meeting Notes](../../02-Meetings/2025/10/2025-10-14-cody-scott-1on1.md)
- **2025-10-07** - [Meeting Notes](../../02-Meetings/2025/10/2025-10-07-scott-cody-1on1.md)
- **2025-09-29** - [Meeting Notes](../../02-Meetings/2025/09/2025-09-29-scott-cody-1on1.md)

---

## Active Action Items

### Scott's Action Items

#### Delete Duplicate Cheat Sheet Pages & Implement Tabbed Interface

- **Status:** ✅ Done
- **From:** 2025-11-18
- **Summary:** Builder IO created separate pages for each tab interface. Delete duplicates, keep main cheat sheet page with all tabs, and implement tabbed interface in new system.
- **Notes:**
  - Duplicate pages deleted
  - Tabbed interface implementation status: In progress

#### Surface and Plan All ~300 Redirects for Tutorial Migration

- **Status:** In progress
- **From:** 2025-11-18
- **Summary:** Surface and plan all ~300 redirects required for tutorial migration.
- **Notes:**
  - ✅ Full set of redirects generated
  - ⏳ Still need to manually verify each redirect belongs there
  - ⏳ Need redirect destination for items that won't make the migration (will ask Cody)
  - Next step: Implement redirects in config file (considering move from Cloudflare to Vercel-only)

#### Test Rich Text/Markdown Toggle Functionality

- **Status:** ✅ Done
- **From:** 2025-11-18
- **Summary:** Test the rich text/markdown toggle functionality in the tutorial system.
- **Notes:**
  - Toggle works as expected
  - Minor styling/spacing issues identified but functionality is solid

#### Try Obsidian for Enhanced Note-Taking Workflow

- **Status:** In progress
- **From:** 2025-11-18
- **Summary:** Cody suggested Obsidian for note management. Supports React plugins, markdown-based, integrates well with AI tools.
- **Notes:**
  - Tool recommendation for enhanced note-taking workflow

#### Share WordPress Traffic Analysis with Kelsey

- **Status:** In progress
- **From:** 2025-10-14
- **Summary:** Share WordPress traffic analysis sheet with Kelsey for migration completion.
- **Notes:**
  - Needed to finalize remaining page migrations

#### Draft OKR Objectives

- **Status:** Done
- **From:** 2025-10-14
- **Summary:** Draft 3-5 big rock objectives for 2025 OKRs by end of week.
- **Notes:**
  - Input required in Asana by end of next week
  - Partner with ChatGPT for initial framework

#### Follow Up with Willie/Amit on Media Asset URL Integration

- **Status:** In progress
- **From:** 2025-10-14
- **Summary:** Reach out to Willie and Amit since Adrian can't implement media asset URLs.
- **Notes:**
  - Media asset URLs on back burner

#### Continue Migration Work, Add LLM-Generated Metadata for SEO

- **Status:** In progress
- **From:** 2025-10-07
- **Summary:** Continue migration work, add LLM-generated metadata for SEO (phase two).
- **Notes:**
  - Part of tutorial migration project

---

## Waiting On Others

### Product Team: Finalize Flex Pricing Calculator Requirements

- **Status:** Waiting
- **From:** 2025-11-18
- **Summary:** Product team needs to finalize Flex pricing calculator requirements this week. Adding Flex option to Pro plans.
- **Notes:**
  - Pricing calculator updates coming "hot" this week
  - Scope still being defined by product team
  - Preference for minimal impact on existing business logic
  - From: 2025-11-19 Company Quarterly Meeting - Redis Flex now GA on Redis Cloud Pro (up to 75% lower cost per gig)

### Cody: Follow Up on Stripe Access Request

- **Status:** Done
- **From:** 2025-11-10
- **Summary:** Cody will follow up on stalled ticket for November timeline.
- **Notes:**
  - Access granted via Okta on Nov 19, 2025 (ITHELP-7757)

### Cody: Review Sonia's Pricing Feedback, Schedule Discussion Call

- **Status:** Done
- **From:** 2025-10-07
- **Summary:** Review Sonia's pricing feedback and schedule discussion call about calculator direction.
- **Notes:**
  - Concerns about displaying actual hourly price vs minimum price

### Cody: Provide Redirect Destination for Items Not Making Migration

- **Status:** Waiting
- **From:** Recent
- **Summary:** Need redirect destination URL/path for tutorial items that won't make the migration.
- **Notes:**
  - Required to complete redirect verification and implementation

---

## Key Topics & Decisions

### Tutorial Migration

- **Status:** In progress
- **Latest Update:** 2025-11-18
- **Progress:**
  - Search functionality implemented (title-only, plans for TanStack Query)
  - Category system working (AI category auto-tags content)
  - ✅ Using slugs instead of names for filtering categories on Tutorials Search (completed)
  - Duplicate cheat sheet pages deleted
  - Rich text/markdown toggle tested and working
  - Code samples and content structure looking good
- **Remaining:**
  - Images location proving challenging
  - Authors extraction (next phase)
  - Mass link updates needed throughout content
  - Content grouping/navigation improvements needed
  - ⏳ Verify all ~300 redirects manually (full set generated, verification in progress)
  - ⏳ Get redirect destination from Cody for items not making migration
  - Implement verified redirects in config file
  - Internal link updates throughout content
- **URL Structure:** Keeping existing learn/\* paths, pointing wildcard to new system

### Pricing Calculator Updates

- **Status:** In progress
- **Latest Update:** 2025-11-18
- **Notes:**
  - Adding Flex option to Pro plans
  - Product team finalizing requirements
  - Preference for minimal impact on existing business logic

### Stripe Integration

- **Status:** In progress
- **Latest Update:** 2025-11-18
- **Notes:**
  - Working with Alex Weiss to resolve access issues
  - Access granted via Okta on Nov 19, 2025 (ITHELP-7757)
  - See todos.md for full details

### Redirect Strategy

- **Status:** Decision Made
- **Latest Update:** 2025-11-18
- **Decision:** Implement redirects in config file for efficiency
- **Notes:**
  - Considering moving from Cloudflare to Vercel-only setup
  - Vercel CEO suggested Cloudflare slowing site performance

### Task Management & Workflow

- **Status:** Ongoing
- **Latest Update:** 2025-11-03 (Part 2)
- **Notes:**
  - Web producer work needs stricter oversight (all work pre-approved)
  - Kelsey building intake form for ad hoc requests
  - Framework: Quick fixes (<30 min) handle directly, longer requests escalate
  - Scott creating own Asana tasks for better visibility

### OKRs & Experimentation Goals

- **Status:** Defined
- **Latest Update:** 2025-10-27
- **Focus Areas:**
  - Build pipeline machine for sales (more hand-raisers)
  - Grow cloud business (sign-ups + contracted deals)
- **Target:** 100 website experiments next year requiring infrastructure foundation
- **Framework:** Measuring business impact vs technical work

---

## Completed Items

### ✅ Delete Duplicate Cheat Sheet Pages

- **Completed:** 2025-11-18
- **From:** 2025-11-18

### ✅ Generate Full Set of ~300 Redirects

- **Completed:** Recent
- **From:** 2025-11-18
- **Summary:** Generated the complete set of redirects for tutorial migration.
- **Notes:**
  - Manual verification of each redirect still in progress
  - Need redirect destination for items not making migration

### ✅ Test Rich Text/Markdown Toggle Functionality

- **Completed:** 2025-11-21
- **From:** 2025-11-18

### ✅ Draft OKR Objectives

- **Completed:** 2025-10-14
- **From:** 2025-10-14

### ✅ Implement Slugs for Tutorial Search Filter Categories

- **Completed:** Recent
- **From:** 2025-11-18
- **Summary:** Finished using slugs instead of names for filtering categories on the Tutorials Search page for cleaner URLs.

---

## Notes

- Cody suggested Obsidian for note management (2025-11-18)
- Tool supports React plugins, markdown-based, integrates well with AI tools
- Both using Granola tool extensively for meeting productivity (2025-09-29)
- Future hiring: Engineering manager/conversion rate optimization specialist (2025-10-07)
