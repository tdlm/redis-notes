# Sallie on DevHub Tutorial Setup

**Date:** October 29, 2025  
**Participants:** Sallie, Scott

## DevHub Landing Page Content Management

- Tutorial listings feed the 12 items on DevHub landing page automatically
- Query pulls all items in reverse published date order by category:
  - AI tutorials
  - Developer tutorials
  - Operator tutorials
- System designed to front-load content loading process
  - No manual URL entry needed for new content
  - Automatic routing to correct location

## Current Workaround Process

- Use "URL override" field to bridge gap between old and new systems
- Points to existing tutorial locations during transition period
- Temporary solution until full content migration complete

## New Content Publication Flow

- Upload new operator-themed tutorial with proper tag
- Latest published date automatically positions at top of far-right column
- Bumps existing content down in order:
  - Cloud migration tutorial moves down
  - Bottom item drops off display
  - New tutorial takes top position

## System Clarification

- Sallie previously thought content was manually curated ("here are the 12 we want")
- Actually automated selection based on recency and category tags
- No manual intervention required for content ordering

