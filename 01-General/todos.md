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

### Implement Pricing Calculator Display Changes

- **Status:** In progress

- **Link:**

- **Summary:**

  Update pricing calculator and main pricing page to show actual hourly price when under minimum ($0.043/hr with "$200/month minimum" disclaimer instead of $0.274/hr). Remove QPF from main calculator view, keep in breakdown only. Rearrange field layout: move High Availability toggle next to Dataset field.

- **Notes:**

  - From: 2025-10-08 Redis.io Sizing Tool Updates
  - Fundamental issue: Redis appears very expensive compared to ElastiCache and Memorystore
  - Update main pricing page "from" pricing to align with calculator
  - Default QPF to 1 for simplified user experience
  - Yoav to provide written brief via Google Doc

---

### Continue Builder IO Migration Work

- **Status:** In progress

- **Link:**

- **Summary:**

  Continue migration from Builder IO to production environment. One-by-one migration approach for safety. Add LLM-generated metadata for SEO (phase two). Script provided 90% automation success.

- **Notes:**

  - From: 2025-10-07 Scott/Cody 1-on-1
  - From: 2025-10-14 Web Team Weekly - Migration work paused, resuming
  - Images location proving challenging despite Cursor AI assistance
  - Code samples and content structure looking good
  - Authors extraction will be next phase
  - Mass link updates needed, though existing redirects should help
  - URL structure: keeping existing learn/\* paths, pointing wildcard to new system
  - Will extract components for different fields carefully

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

---

### Surface and Plan All ~300 Redirects for Tutorial Migration

- **Status:** In progress

- **Link:**

- **Summary:**

  Need to surface and plan all approximately 300 redirects required for tutorial migration. Internal link updates needed throughout content.

- **Notes:**

  - From: 2025-11-18 Scott/Cody 1-on-1
  - Blockers identified: ~300 redirects required for migration
  - Content grouping/navigation improvements needed
  - Redirect strategy: considering moving from Cloudflare to Vercel-only setup
  - Decision to implement redirects in config file for efficiency

---

### Test Rich Text/Markdown Toggle Functionality

- **Status:** In progress

- **Link:**

- **Summary:**

  Test the rich text/markdown toggle functionality in the tutorial system.

- **Notes:**

  - From: 2025-11-18 Scott/Cody 1-on-1

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

- **Status:** In progress

- **Link:**

- **Summary:**

  Update existing tutorial schema with new filter categories (industry tags, Redis features, integrations, programming languages). Align with portfolio architecture terminology. Add GitHub-specific fields and distinctive styling. Implement basic filtering functionality.

- **Notes:**

  - From: 2025-11-06 Dev Center Tutorials Design
  - Phase 1: Update existing tutorial schema with new filter categories
  - Target: End of calendar year completion
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

---

### Stripe Access Request - ITHELP-7757

- **Status:** Done

- **Link:** ITHELP-7757

- **Summary:**

  Request submitted to IT Help Desk for Stripe account access to support Redis University course payment integration. Ticket created November 18, 2025. Need direct developer support access from Stripe for implementation work.

- **Notes:**

  - **Context:** Redis University course payment setup project
    - New revenue stream for online courses through Redis.io checkout
    - FlockJay platform hosts courses but lacks payment solution
    - User selects course → redirects to Redis.io payment page
    - One-time payments only (no subscriptions)
    - Global customer base: US, APAC, EMEA mix
  - **Technical Requirements:**
    - Direct developer support access from Stripe needed
    - Solutions architect support requested for complex setup questions
    - Stripe Checkout recommended for minimal implementation
    - Customizable with Redis logo and colors
    - Stripe Tax for automatic tax calculation
    - Stripe Billing for invoice generation and compliance
  - **Timeline:** Target completion by end of calendar year
  - **Previous Attempts:**
    - From: 2025-10-29 Redis <> Stripe meeting
    - Marie-Emmanuelle Flute (Stripe) was checking if Neil's access could be temporarily swapped
    - Alternative: manual rerouting of requests during project
    - From: 2025-11-10 Scott/Cody 1-on-1 - Cody will follow up on stalled ticket for November timeline
    - Working with Alex Weiss to resolve access issues
  - **Current Status:**
    - Access request submitted: November 18, 2025 (ITHELP-7757)
    - IT ticket acknowledgment received: November 18, 2025
    - **Access granted via Okta** - After extensive back and forth, access successfully obtained through Okta integration on November 19, 2025 at approximately 4:30pm PT
  - **Related Work:**
    - Product setup in Stripe still pending
    - Technical questions about product pre-selection, user ID handling, webhook integration
    - Design implementation in progress (Stripe hosted billing page with minimal customization)
    - From: 2025-10-03 Stripe Web Flow Design Sync - Found Stripe's packaged checkout flow documentation (pre-built solution reduces custom development needs)
    - From: 2025-10-09 Stripe Access Product Set Up - Architecture: FlockJay → Redis.io → Cloud billing API → Orb (pricing) → Stripe checkout. Two options: cloud billing generates checkout links (recommended) or embedded Stripe checkout on Redis.io. Test card: 4242 4242 4242 4242, 10/26, 123. Two Stripe instances needed: Global (Redis Inc) and Israel (Redis Ltd)
