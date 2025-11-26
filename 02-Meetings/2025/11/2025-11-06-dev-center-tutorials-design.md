---
type: meeting
title: Dev Center Tutorials Design
date: 2025-11-06
participants: [Ashwin Hariharan, Sallie Gamboa, Mac McDonald, Will Johnston, Cody Henshaw, Kelsey Szukhent]
tags: [dev-center, tutorials, github, sanity]
---

# Dev Center Tutorials Design

**Date:** November 6, 2025  
**Attendees:** Ashwin Hariharan (ashwin.hariharan@redis.com), Sallie Gamboa (sallie.gamboa@redis.com), Mac McDonald (mac.mcdonald@redis.com), Will Johnston (will.johnston@redis.com), Cody Henshaw (cody.henshaw@redis.com), Kelsey Szukhent (kelsey.szukhent@redis.com)

## Tutorial & Demo Integration Strategy

- Merging existing tutorial framework with GitHub demo repositories
- Ashwin proposed better display system for dev rel team demos across agents, cloud providers, LM providers
- Current issue: hard to find demos on GitHub repo
- Goal: cohesive "how to build a thing" experience for Redis

## Demo Hub Prototype Review (Ashwin)

- Built filtering system for Redis developer repositories
- Filter categories:
  - Industry tags (ecommerce, education, etc.)
  - Redis features (semantic cache, vector search)
  - Integrations (PyTorch, OpenAI, LangChain, etc.)
  - Programming languages
- Curated list approach vs. pulling all GitHub repos
- "Find more on GitHub" button applies filters to GitHub search
- Static website using Hugo, single YAML file for adding entries

## Technical Implementation Plan

- Phase 1: Update existing tutorial schema with new filter categories
  - Align with portfolio architecture terminology
  - Add GitHub-specific fields and distinctive styling (GitHub icon)
  - Manual entry process initially
- Phase 2: Automated GitHub repo syncing
  - Nightly pull from GitHub repos into Sanity
  - Repos default to disabled, require manual curation
  - Metadata file in repos to determine inclusion criteria
- Phase 3: Full tutorial integration
  - Every demo should have accompanying tutorial
  - Dedicated pages vs. direct GitHub links

## Schema & Tagging Strategy

- Align with existing portfolio architecture:
  - Business use cases, solutions, technical implementation, features, tools
  - Skip products and packages categories
- White-listed tags approach to prevent arbitrary tagging
- Languages: ~5 supported languages for tutorials
- Integration tags: potential for very long list, may need "top 3" limit
- GitHub repo tagging separate from website tags to avoid crowding GitHub's native tags

## Timeline & Scope Management

- Target: End of calendar year completion
- Current tutorial index page exists, needs filter/search implementation
- Stripe checkout and Adrian's absence creating bandwidth constraints
- Start small: add few GitHub demo cards with basic filtering
- Avoid scope creep on DevHub search functionality initially

## Next Steps

- Scott: Update Sanity schema with new filter fields, implement basic filtering
- Will: Provide complete list of tags, languages, integrations from portfolio architecture
- Ashwin: Clean up demo repository, share working link
- All: Manual testing with GitHub repo URLs before building sync process
- Sallie: Create Asana subtasks under DevHub project

