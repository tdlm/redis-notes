# Scott / Cody 1-on-1

**Date:** October 14, 2025  
**Participants:** Scott, Cody (cody.henshaw@redis.com)

## Site Migration & Performance

- Media asset URLs on back burner - reach out to Willie and Amit since Adrian can't implement
- WordPress to new site migration nearly complete
  - Statistics plugin disabled after issues (upgrade may have fixed but staying cautious)
  - Remaining blockers: missing pages still getting WordPress traffic
  - Top priority pages: technology, enterprise sections, Korean homepage
  - Kelsey back to help finalize migration - share traffic analysis sheet
- A/B testing implementation coming soon using LaunchDarkly for hero code sections
- Site performance improvements planned as measurable goals (10% site speed = ~0.5% conversion boost)

## 2025 OKRs & Experimentation Goals

- Target: 100 website experiments next year requiring infrastructure foundation
- Two main focus areas:
  - Build pipeline machine for sales (more hand-raisers)
  - Grow cloud business (sign-ups + contracted deals)
- Experiment types ranging from simple (button colors) to complex (new signup flows)
- Framework for measuring business impact vs technical work
  - Calculator effectiveness unclear - need data on conversion rates
  - Tag interactions properly for funnel analysis
- Input required in Asana by end of next week
  - Draft 3-5 big rock objectives
  - Partner with ChatGPT for initial framework

## Data Infrastructure Challenges

- Current setup: Amplitude events don't flow to data warehouse
  - Using poor open source connector to Postgres database
  - Manual mapping required for each data object
  - Data team lacks bandwidth for API integrations
- Solution coming early 2025:
  - Migration to Snowflake data warehouse
  - Standardized data dictionary across teams
  - Recently moved from Tableau to Hex ([https://hex.tech](https://hex.tech)) for better visualization
- Short-term workaround: manual export/mapping by Ian for funnel analysis
- Sign-up optimization opportunities identified (email validation errors, character limits)

## Next Steps

- Scott: Share WordPress traffic analysis with Kelsey for migration completion
- Scott: Draft OKR objectives by tomorrow night
- Scott: Follow up with Willie/Amit on media asset URL integration
- Team: Finalize remaining page migrations through Kelsey coordination
- Future consideration: Replace FlockJay with in-house solution (blocked by enablement team relationship with founder)
