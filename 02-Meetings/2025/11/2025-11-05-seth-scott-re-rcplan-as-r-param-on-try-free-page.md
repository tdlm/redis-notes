---
type: meeting
title: "Seth and Scott: RC Plan as R Param on Try-Free Page"
date: 2025-11-05
participants: [Seth, Scott Weaver]
tags: [sso, authentication, rc-plan, signup]
---

# Seth and Scott: Re: RC Plan as R Param on Try-Free Page

**Date:** November 5, 2025  
**Attendees:** Seth, Scott

## SSO Authentication Implementation

- Working on auth form "try free" functionality with SSO parameters
- Identified location for SSO sub-functions and parameter handling
- Current code handles primary signup form across multiple areas

## RC Plan Parameter Detection

- Need to add detection for RC plan parameter and pass through as "r" parameter
- SMUI codebase looks for RC plan under parameter called "r" (not "RC plan")
  - Generic solution: take any RC plan value and set r equal to that value
  - Will work for all RC plans, not just LaneCash-specific
- Implementation scope: Google and GitHub SSO options

## Code Architecture Concerns

- LaneCash-specific code embedded in generic signup functionality
  - Used across multiple signup pages beyond LaneCash
  - Creates "smelly" architecture with specific logic in shared components
- SMUI has 6-7 different RC plans with some having special handling
- Unclear which other RC plans are currently active (many may be deprecated from WordPress migration)

## Next Steps

- Scott: Implement generic RC plan detection and r parameter passing
- Scott: Deploy to preview environment today and send testing link
- Test functionality with both Google and GitHub SSO flows

