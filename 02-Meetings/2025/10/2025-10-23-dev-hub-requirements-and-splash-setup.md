---
type: meeting
title: Dev Hub Requirements & Splash Setup
date: 2025-10-23
participants: [Scott Weaver, Ashwin Hariharan]
tags: [dev-hub, github, sanity, repositories]
---

# Dev Hub Requirements & Splash Setup

**Date:** October 23, 2025  
**Participants:** Scott, Ashwin Hariharan (ashwin.hariharan@redis.com)

## Repository Search Hub Concept

- Ashwin built prototype dev hub for searching Redis repositories by features/use cases
  - Built with Hugo, uses YAML for data structure
  - Includes filtering by language (JavaScript/TypeScript), features (semantic search, caching), domains (ecommerce, gaming)
  - Has "pinned" repositories concept for highlighting key examples
- Original motivation: needed way to find relevant examples for Redis events in Bangalore/Mumbai
  - Show attendees industry-specific demos (fintech, ecommerce, grocery)
  - Current GitHub organization search inadequate for discovery
- Discovered existing [developer.redis.io](http://developer.redis.io) after building prototype
  - Existing hub has tutorials/blog posts but lacks repository search functionality

## Integration with Current Dev Hub

- Scott confirmed strong interest in incorporating concept
- Dev Hub currently built with Next.js + Sanity CMS
  - All content stored in Sanity
  - Current tutorials point to [university.redis.io](http://university.redis.io) ([Builder.io](http://Builder.io))
  - Working on ingesting content as markdown/MDX
- Implementation approach:
  - Phase 1: Manual curation of ~10 repositories as MVP
    - Start with featured/pinned repositories
    - Add as Sanity objects with metadata (title, description, keywords)
  - Phase 2: Add search functionality on dedicated page
    - Separate from main Dev Hub search
    - Full repository listing with pagination
- Placement: New section in Dev Hub, likely near tutorials section

## Next Steps

- Scott: Follow up with Sally on project scope and timeline
- Scott: Consult with Mac (designer) on user interaction design
- Scott: Get approval from Cody Henshaw (Scott's manager) for prioritization
- Ashwin: Provide YAML data structure file
- Ashwin: Push prototype to Redis developer GitHub organization
- Consider adding suggestion mechanism for missing examples/integrations
  - Allow users to request specific technology stacks not currently covered

