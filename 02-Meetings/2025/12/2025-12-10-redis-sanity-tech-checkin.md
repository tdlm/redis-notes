---
type: meeting
title: "Redis + Sanity: Tech Check-in"
date: 2025-12-10
participants:
  [Scott Adrian, Aaron Emery, Cody Henshaw, Alannah Frankel, Jarena Griffin]
source: Zoom
tags: [sanity, redis, a/b-testing, personalization, sdk, product-updates]
---

# Redis + Sanity: Tech Check-in

### Product Updates & Features

- New full screen editor view now available in Sanity v4.17
  - Based on new modal system with breadcrumb navigation
  - Reduces z-index stacking issues with multiple modals
  - Accessible through focus mode button in editor
- New typography plugin for portable text
  - Keyboard shortcuts for special characters (arrows, copyright symbols)
  - Eliminates need for custom front-end parsing
- TypeScript improvements coming after holidays
  - Custom Grok functions with type generation
  - Currently in internal QA phase

### A/B Testing & Personalization

- Sanity AB testing personalization plugin available now
  - GitHub: [https://github.com/sanity-io/sanity-plugin-personalization](https://github.com/sanity-io/sanity-plugin-personalization)
  - Integrates with LaunchDarkly (Redis already uses LaunchDarkly)
  - Content variants stored in Sanity, eliminating flash issues
  - Clean experience vs. external tools that inject HTML
- Product roadmap includes first-class personalization features
  - Aaron can add Redis to early testing customer list
  - Internal Slack channel with LaunchDarkly for collaboration
- Current Redis setup uses Mutiny (removing personalization functionality)
  - Creates bundle size issues and text flashing
  - Need alternative solution anyway

### SDK Applications & Custom Tools

- Sanity App SDK enables custom React apps within studio
  - Same hooks used to build Sanity's media library
  - Can integrate third-party APIs (mapping, analytics, etc.)
  - Real-time data editing without leaving custom interface
- Potential Redis use cases discussed:
  - Event landing page manager for field marketers
  - Integration with Marketo/Salesforce workflows
  - Form builder connecting to marketing automation
- Content agent feature launching January
  - Chat interface for content analysis and creation
  - SEO optimization recommendations
  - Research competitor coverage gaps
  - Document-specific chat functionality

### Next Steps

- Aaron: Provide AB testing demo with static rendering examples
- Aaron: Add Redis to personalization early access customer list
- Scott: Review SDK documentation and explore use cases
- Aaron: Arrange product roadmap session with head of product for renewal discussions
- Future call: Demo SDK applications and content agent features

---

Chat with meeting transcript: [https://notes.granola.ai/t/5ba27343-ccc7-4067-b32a-1c9747c5fc76](https://notes.granola.ai/t/5ba27343-ccc7-4067-b32a-1c9747c5fc76)
