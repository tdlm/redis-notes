# Scott / Cody

**Date:** November 18, 2025  
**Participants:** Scott, Cody (cody.henshaw@redis.com)

## Health Check-ins & Weekend Updates

- Cody recovered from sudden stomach flu yesterday
  - Hit out of nowhere around noon, couldn't hold water down
  - Slept 2pm-9am next day, feeling much better today
- Scott caught up on sleep after sleepless Friday
  - Used NyQuil Saturday, slept 10-11 hours
  - Wife helped maintain quiet house for recovery
- Weekend activities: roasted marshmallows during cold snap

## Tutorial Migration Progress & Demo

- **Tutorial migration status:** Significant progress made, mostly functional
- Search functionality implemented
  - Currently searches by title only
  - Filter results update URL for shareable links
  - Plans to add TanStack Query for smoother performance
- Category system working
  - AI category auto-tags content with "AI", "GPT" in titles
  - Can add slug versions for cleaner URLs
- Major issue resolved: duplicate cheat sheet pages
  - Builder IO created separate pages for each tab interface
  - Solution: delete duplicates, keep main cheat sheet page with all tabs
  - Need to implement tabbed interface in new system
- Blockers identified:
  - Internal link updates needed throughout content
  - ~300 redirects required for migration
  - Content grouping/navigation improvements needed

## Upcoming Priorities & Technical Decisions

- **Stripe access request:** Working with Alex Weiss to resolve access issues
- **Pricing calculator updates:** Coming "hot" this week
  - Adding Flex option to Pro plans
  - Scope still being defined by product team
  - Preference for minimal impact on existing business logic
- Redirect strategy discussion
  - Considering moving from Cloudflare to Vercel-only setup
  - Vercel CEO suggested Cloudflare slowing site performance
  - Decision to implement redirects in config file for efficiency
- Tool recommendations
  - Cody suggested Obsidian for note management
  - Supports React plugins, markdown-based, integrates well with AI tools

## Action Items

- Scott: Delete duplicate cheat sheet pages, implement tabbed interface
- Scott: Surface and plan all ~300 redirects for tutorial migration
- Scott: Test rich text/markdown toggle functionality
- Scott: Try Obsidian for enhanced note-taking workflow
- Product team: Finalize Flex pricing calculator requirements this week
