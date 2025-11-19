# Web Team Weekly

**Date:** Tuesday, October 14, 2025

**Participants:**
- scott.adrian@redis.com
- cody.henshaw@redis.com

## Recent Updates & Deployments

- **Removed Redeson site from modules/downloads**
  - Successfully deployed with no adverse effects
  - Simple filtering solution implemented
- **Terminal sign-up page sections pushed to production**
  - Page not 100% complete, awaiting Mac's approval
  - Form styling issues remain
  - Added header form capability, featured sections, full-size image options
- **Kevin building AWS re:Invent page using new sections**
  - First attempt at modular page building approach
  - May need rebuild if section-based approach fails
- **Gated content field implementation complete**
  - Eliminates CDN sanity URLs going forward
- Icon updates in progress (Donna handling 32-pixel variations)

## Security & Technical Issues

- **WordPress security vulnerability resolved**
  - WP Statistics plugin XSS exploit allowed admin account creation
  - Plugin deactivated, not BlockJ-related this time
  - Reinforces need to migrate off WordPress
- **Ahrefs tracking setup complete**
  - Replaces ScreamFrog for most monitoring needs
  - Broken link reports, slow page detection available
  - Email notifications forwarding to Slack planned
- **Pricing calculator changes implemented**
  - Awaiting Somia's testing approval against cloud calculator
  - Max provided design updates including dark mode
  - Dark mode release planned separately

## Billing Integration Progress

- Met with Sally and Near (billing dev) about Stripe integration
  - Two options: Stripe checkout link or integrated form
  - Orb vs Stripe decision pending
  - Complex routing needed for Israeli vs global checkout
- **Key challenges identified:**
  - Pricing source of truth (likely Orb)
  - Geographic routing requirements
  - Billing history and duplicate prevention
- Orb checkout not ready until after planned rollout
- Awaiting Near's recommendation this week
- **Builder IO migration work paused, resuming tomorrow**
  - Script provided 90% automation success
  - Will extract components for different fields carefully

