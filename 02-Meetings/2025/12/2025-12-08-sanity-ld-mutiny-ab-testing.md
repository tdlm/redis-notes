---
type: meeting
title: "Sanity/LD > Mutiny A/B Testing"
date: 2025-12-08
participants: [Keith Nyberg, Cody Henshaw]
source: Notes
tags: [mutiny, launchdarkly, ab-testing, sanity, migration, governance]
---

# Sanity/LD > Mutiny A/B Testing

### Current Mutiny Contract Status

- Contract expires March 2025 ($70k annually)
  - $30k for inbound component, $40k for ABM
  - Redis uses minimal ABM functionality
  - Only Scott, Keith, and Cody actively use platform
- Mutiny discontinuing all inbound web functionality
  - Partnering with VWO for web testing handoff
  - Offering exact rate transfer to VWO enterprise
  - Focusing solely on ABM content creation

### Migration to LaunchDarkly Plan

- Current project plan: leverage Sanity and LaunchDarkly for AB testing to replace Mutiny
- LaunchDarkly managed by product team, up for renewal
- Additional seats needed for marketing team usage
- Pricing based on events/exposures rather than flat fee
- Procurement easier since already established vendor
- Shared environment with product raises governance concerns
  - Too risky for non-technical users to access feature flags directly
  - Ticket-based process preferred over self-service

### Process and Governance Approach

- Monthly cadence meetings proposed
  - Review ongoing tests as group
  - Submit new test requests via tickets
  - Cody's team handles implementation
- Consolidation benefits:
  - Ian managing all experimentation data in unified dashboard
  - Better governance over brand/design standards
  - Prevents issues like "four popups on single page"
- Current integrations minimal:
  - One industry-based test (already discontinued)
  - No Salesforce/audience integrations in active use

### Technical Implementation Status

- Scott has proof of concept working with Statsig
  - Demo available but simple implementation
  - Core mechanism in place with new Sanity/Next.js setup
- LaunchDarkly demo needs rebuilding
- Statsig acquired by OpenAI (noting for context)
- Team preference: proceed with LaunchDarkly over Statsig

### Future Campaign Automation Vision

- Keith building internal campaign launch application
  - Auto-creates drive briefs, Salesforce campaigns, Asana projects
  - Planning Sanity API integration for page templating
- Automated page generation concept:
  - Clone template pages based on campaign type
  - Auto-populate form IDs, URL paths, language settings
  - Users fine-tune content rather than build from scratch
- Timeline: January-February 2025 for template system readiness
- Goldcast available as backup if timeline slips
  - NOTE: Goldcast AI is **an AI-driven B2B video content platform** that helps marketers create, automate, and scale video marketing by transforming long-form content (webinars, events, podcasts) into short, shareable assets like social clips, blogs, and emails, while also providing analytics to connect engagement to revenue. It uses intelligent agents to automatically edit, brand, and repurpose content, streamlining the process from live events to on-demand assets, integrating deeply with CRM systems like HubSpot for marketing automation.

### Next Steps

- Keith meeting with Mutiny CSM late December for final discussions
- Budget reallocation discussion needed ($70k from Mutiny contract)
- Cody coordinating with Tomer on LaunchDarkly expansion
- Scott to rebuild LaunchDarkly demo when decisions finalized
- Team enablement planning for new process rollout

---

Chat with meeting transcript: [https://notes.granola.ai/t/732a49f1-8b2a-4813-978a-8b098529dfe8](https://notes.granola.ai/t/732a49f1-8b2a-4813-978a-8b098529dfe8)

