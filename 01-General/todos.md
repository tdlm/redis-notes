# Todos & Action Items

## Action Item Template

Use the following format for all action items:

### [TICKET IF IT EXISTS]: [Title]

- **Status:** [In progress / Blocked / In Review / Done]

- **Link:** [Link to ticket, if it exists]

- **Summary:**

  [Brief summary of the action item or ticket]

- **Notes:**

  - [Any additional context, blockers, or updates]

---

## Action Items from Past 5 Days

### Stripe Integration for Redis University Course Payments

- **Status:** In progress

- **Link:**

- **Summary:**

  Implement Stripe integration for Redis University course payment flow. FlockJay hosts courses but lacks payment solution - users select course and redirect to Redis.io payment page for one-time payments. Access granted via Okta on November 19, 2025.

- **Notes:**

  - From: 2025-10-29 Redis <> Stripe meeting
  - From: 2025-11-10 Scott/Cody 1-on-1
  - **Access Status:** ✅ Granted via Okta on Nov 19, 2025 (ITHELP-7757)
  - **Next Steps:**
    - Follow up with Sallie to set up products in Stripe
    - Reach out to Stripe support for guidance on simple integration steps
    - Once products are set up, create test page
  - **Architecture:** FlockJay → Redis.io → Cloud billing API → Orb (pricing) → Stripe checkout
  - **Technical Requirements:**
    - Stripe Checkout for minimal implementation (customizable with Redis branding)
    - Stripe Tax for automatic tax calculation
    - Stripe Billing for invoice generation and compliance
    - Two Stripe instances needed: Global (Redis Inc) and Israel (Redis Ltd)
  - **Outstanding Technical Questions:**
    - Product pre-selection handling
    - User ID handling and passing
    - Webhook integration setup
  - **Timeline:** Target completion by end of calendar year
  - **Test Card:** 4242 4242 4242 4242, 10/26, 123

---

### Implement Pricing Calculator Display Changes

- **Status:** Done

- **Link:**

- **Summary:**

  Update pricing calculator and main pricing page to show actual hourly price when under minimum ($0.043/hr with "$200/month minimum" disclaimer instead of $0.274/hr). Remove QPF from main calculator view, keep in breakdown only. Rearrange field layout: move High Availability toggle next to Dataset field.

- **Notes:**

  - From: 2025-10-08 Redis.io Sizing Tool Updates
  - Fundamental issue: Redis appears very expensive compared to ElastiCache and Memorystore
  - Update main pricing page "from" pricing to align with calculator
  - Default QPF to 1 for simplified user experience
  - ✅ Completed: All display changes implemented

---

### Tutorial Migration from Builder.io to Production

- **Status:** In progress

- **Link:**

- **Summary:**

  Migrate tutorials from Builder.io to production environment. One-by-one migration approach for safety. Migration is mostly functional with search, categories, and content working. Redirects (~300) are one of the last steps before going live.

- **Notes:**

  - From: 2025-10-07 Scott/Cody 1-on-1
  - From: 2025-10-14 Web Team Weekly - Migration work paused, resuming
  - From: 2025-11-18 Scott/Cody 1-on-1 - Significant progress, mostly functional
  - **Completed:**
    - Search functionality (currently title-only, plans for TanStack Query)
    - Category system working (AI category auto-tags content)
    - Duplicate cheat sheet pages deleted, tabbed interface implemented
    - Rich text/markdown toggle tested and working (minor styling issues)
    - Code samples and content structure looking good
  - **In Progress:**
    - Images location proving challenging
    - Authors extraction (next phase)
    - Mass link updates needed throughout content
    - Content grouping/navigation improvements needed
  - **Remaining for Go-Live:**
    - ✅ Plan all ~300 redirects required for migration (completed)
    - Determine fallback destination for sources that will have no destination
    - Move redirects to next.config to surface them on Vercel
    - Comb through existing tutorials to make sure they're all well-formatted
    - Internal link updates throughout content
    - Related items navigation in the left sidebar for related tutorials
  - URL structure: keeping existing learn/\* paths, pointing wildcard to new system
  - Add LLM-generated metadata for SEO (phase two)

---

### Delete Duplicate Cheat Sheet Pages & Implement Tabbed Interface

- **Status:** Done

- **Link:**

- **Summary:**

  Builder IO created separate pages for each tab interface. Need to delete duplicates, keep main cheat sheet page with all tabs, and implement tabbed interface in new system.

- **Notes:**

  - From: 2025-11-18 Scott/Cody 1-on-1
  - Major issue resolved: duplicate cheat sheet pages identified
  - Solution: delete duplicates, keep main cheat sheet page with all tabs
  - ✅ Completed: Duplicate pages deleted

---

### Test Rich Text/Markdown Toggle Functionality

- **Status:** Done

- **Link:**

- **Summary:**

  Test the rich text/markdown toggle functionality in the tutorial system.

- **Notes:**

  - From: 2025-11-18 Scott/Cody 1-on-1
  - Tested on 2025-11-21: Toggle works as expected
  - Minor styling/spacing issues identified but functionality is solid

---

### Try Obsidian for Enhanced Note-Taking Workflow

- **Status:** In progress

- **Link:**

- **Summary:**

  Cody suggested Obsidian for note management. Supports React plugins, markdown-based, integrates well with AI tools.

- **Notes:**

  - From: 2025-11-18 Scott/Cody 1-on-1
  - Tool recommendation for enhanced note-taking workflow

---

### Update Sanity Schema with New Filter Fields, Implement Basic Filtering

- **Status:** Deferred

- **Link:**

- **Summary:**

  Update existing tutorial schema with new filter categories (industry tags, Redis features, integrations, programming languages). Align with portfolio architecture terminology. Add GitHub-specific fields and distinctive styling. Implement basic filtering functionality.

- **Notes:**

  - From: 2025-11-06 Dev Center Tutorials Design
  - Phase 1: Update existing tutorial schema with new filter categories
  - **Status Update:** Deferred until Q1 2026
  - Start small: add few GitHub demo cards with basic filtering
  - Will needs to provide complete list of tags, languages, integrations from portfolio architecture

---

### Implement Generic RC Plan Detection and R Parameter Passing

- **Status:** Done

- **Link:**

- **Summary:**

  Add detection for RC plan parameter and pass through as "r" parameter. SMUI codebase looks for RC plan under parameter called "r" (not "RC plan"). Generic solution: take any RC plan value and set r equal to that value. Will work for all RC plans, not just LaneCash-specific.

- **Notes:**

  - From: 2025-11-05 Seth/Scott - RC Plan Parameter
  - Implementation scope: Google and GitHub SSO options
  - Code architecture concern: LaneCash-specific code embedded in generic signup functionality
  - SMUI has 6-7 different RC plans with some having special handling

---

### Deploy RC Plan Parameter to Preview Environment and Send Testing Link

- **Status:** Done

- **Link:**

- **Summary:**

  Deploy to preview environment and send testing link for RC plan parameter functionality.

- **Notes:**

  - From: 2025-11-05 Seth/Scott - RC Plan Parameter
  - Original target: Deploy to preview environment today (November 5)
  - Test functionality with both Google and GitHub SSO flows

---

### Complete Benefits Open Enrollment in ADP

- **Status:** Done

- **Link:**

- **Summary:**

  Log into ADP by November 21st to make benefit elections for 2026. Make sure to SUBMIT your elections in ADP (if not submitted, changes won't be captured).

- **Notes:**

  - From: 2025-11-10 Benefits Open Enrollment Email
  - Deadline: November 21, 2025
  - Passive enrollment: current 2025 benefit elections will automatically carry over except for FSA and HSA elections
  - Review/update beneficiaries, confirm personal and dependent information is accurate
  - Employee cost shares remain flat for 2026
  - Dental benefits moving to Cigna (mirrors Delta Dental coverage)
  - HSA, FSA, and Commuter Benefits moving from Optum to Navia
  - Life & Disability and voluntary benefits moving to Unum
  - VSP frame allowance increased to $180

---

## Waiting On Others

### Product Team: Finalize Flex Pricing Calculator Requirements

- **Status:** Waiting

- **Link:**

- **Summary:**

  Product team needs to finalize Flex pricing calculator requirements this week. Adding Flex option to Pro plans. Scope still being defined by product team.

- **Notes:**

  - From: 2025-11-18 Scott/Cody 1-on-1
  - Pricing calculator updates coming "hot" this week
  - Preference for minimal impact on existing business logic
  - From: 2025-11-19 Company Quarterly Meeting - Redis Flex now GA on Redis Cloud Pro (up to 75% lower cost per gig)

---

### Will: Provide Complete List of Tags, Languages, Integrations

- **Status:** Waiting

- **Link:**

- **Summary:**

  Will needs to provide complete list of tags, languages, integrations from portfolio architecture for tutorial schema updates.

- **Notes:**

  - From: 2025-11-06 Dev Center Tutorials Design

---

### Ashwin: Clean Up Demo Repository, Share Working Link

- **Status:** Waiting

- **Link:**

- **Summary:**

  Ashwin needs to clean up demo repository and share working link for manual testing before building sync process.

- **Notes:**

  - From: 2025-11-06 Dev Center Tutorials Design

---

### All: Manual Testing with GitHub Repo URLs

- **Status:** Waiting

- **Link:**

- **Summary:**

  Manual testing with GitHub repo URLs before building sync process.

- **Notes:**

  - From: 2025-11-06 Dev Center Tutorials Design
  - Need to test before building automated GitHub repo syncing
