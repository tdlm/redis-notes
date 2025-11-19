# WM/Redis Quick Check-in

**Date:** Wednesday, October 8, 2025

**Participants:**
- kelsey.szukhent@redis.com
- scott.adrian@redis.com
- sam@mammoth.tech
- alannah@mammoth.tech
- mac.mcdonald@redis.com
- bonny@mammoth.tech

## Redis Resource Center Progress Updates

- **Phase 1 completed** - moving forward with placeholder card images
  - Read time and topics remain optional
  - Resource LP merging approved by Mac for deployment
- Individual resources page ready with eyeline/eyebrow updates
  - Content team can now access all schemas for reference diagrams and videos
  - Only videos pending UAT before content population
- **Path naming finalized:**
  - Resource center landing page: /resources
  - Individual resources: /resources (formerly "guides")
  - Architecture diagrams (not "reference diagrams")

## Blog and Support Page Deployments

- Blog improvements completed, dropped into Pastel for review
  - Author display issue: use Redis logo or plus sign when >3 authors
  - Awaiting final Mac approval for deployment
- Support page links removed from portal
  - Ready to deploy once old page archived
  - New page will publish on support path

## Technical Infrastructure Setup

- **Backup solution deployed using SST**
  - Runs nightly at 2AM, 7-day expiration cycle
  - X4 APIs trigger on-demand backups
  - Currently syncing in Mammoth's AWS account
- **Future staging sync capability planned**
  - Will repurpose app to sync staging with production data
  - Allows latest production content in staging environment

## Content Management Features

- **Scheduled publishing now live in Sanity production studio**
  - Schedule button in bottom right corner
  - Individual document-level scheduling
  - No cap on number of scheduled releases
  - Schedules tab shows all pending publications
- Testimonial customer section ready for deployment
  - Supports 1-4 testimonials with flexibility
  - Quote character limit: 500 (not 400)

## Next Steps

- **Sam:** Update reference diagrams to architecture diagrams, reshare document with Cody and Mac
- **Content team:** Begin populating resource center with diagrams and videos
- **Mac:** Final approval on blog changes
- Deploy testimonial section after staging review
- Continue work on glossary dark mode, Dev Hub updates, and global spacing improvements

