# Scott / Cody 1-on-1

**Date:** Tuesday, October 7, 2025

**Participants:**
- cody.henshaw@redis.com

## Current Projects Status

- **Migration from Builder IO to production environment**
  - Images location proving challenging despite Cursor AI assistance
  - Code samples and content structure looking good in side-by-side comparison
  - Authors extraction will be next phase
  - Mass link updates needed, though existing redirects should help
  - Planning one-by-one migration approach for safety
  - URL structure: keeping existing learn/* paths, pointing wildcard to new system

- **Pricing calculator development paused**
  - Sonia raised concerns about displaying actual hourly price vs minimum price
  - $2.74/hour × 730 hours = $200.02 monthly minimum
  - Confusion around competitor positioning vs actual pricing breakdown
  - Scheduled call needed to discuss calculator direction and feedback

## Calculator UI Improvements

- QPF-only editing approach confirmed (not calculated throughput)
- **Loading state refinements:**
  - Keep existing overlay during recalculation
  - Add highlight animation on changed values (throughput, total) after loading
  - Similar to Notion's link highlight effect - brief color highlight that fades
- Design review needed for Mac before release candidate
- Add database button padding issues with new layout
- Four remaining items to complete before release

## Team Structure & Performance Updates

- LenCache hero page performing 17% better
- Traffic to page increased 150% after alert bar changes
- **Future hiring:** Engineering manager/conversion rate optimization specialist
  - Megan's 8-person direct report limit driving organizational change
  - Scott will participate in interview process for culture fit
- Focus shifting toward experimentation once migration complete
- CDN rewrite compliance issue: web producers skipping required rewrite logs, need to fix existing uploads

## Next Steps

- **Scott:** Continue migration work, add LLM-generated metadata for SEO (phase two)
- **Cody:** Review Sonia's pricing feedback, schedule discussion call
- **Both:** Design review with Mac for calculator updates

