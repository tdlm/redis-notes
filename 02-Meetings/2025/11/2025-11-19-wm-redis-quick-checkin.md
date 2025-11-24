# WM/Redis Quick Check-in

Wed, 19 Nov 25 · kelsey.szukhent@redis.com, scott.adrian@redis.com, sam@mammoth.tech, alannah@mammoth.tech, mac.mcdonald@redis.com, cody.henshaw@redis.com, bonny@mammoth.tech, regine.carreras@redis.com

### Outstanding items from previous check-ins

**From Oct 29 check-in:**

- PDF URL rewrite implementation — Woolly Mammoth investigating pretty link rewrites for architecture diagrams and existing PDF resources (added to backlog)
- In-browser PDF reading — Mac reviewing solutions, updates pending from Woolly Mammoth

**From Nov 5 check-in:**

- Phase 4 enhancements status:
  - Automatic pretty URLs for resources — captured in requirements
  - Architecture diagrams from document URLs — part of webinar implementation
  - Webinar-to-video migration workflow — completed, merging to Sanity today
- Events migration from Splash to [Redis.io](http://Redis.io) — target Feb 2025, development complete by Dec/early Jan for training buffer
  - All requirements captured from last call
  - Planning for resources in progress
- Training documentation needed before Feb launch

### New items since Nov 5

**Team changes:**

- New team member: Regine Carreras joined as Design Director alongside Mac
  - Working on web projects for brand team
  - Settling in well with team support via Slack

**Technical infrastructure updates:**

- Redirect strategy considerations for tutorial migration (~300 redirects needed)
- Moving from Cloudflare to Vercel-only setup under consideration

### Demand webinars implementation

**Video and webinar content model updates:**

- Extended existing video document to include webinar functionality
- Combined shared fields for both videos and webinars in single interface
- Multiple dates functionality implemented
  - Logic shows closest upcoming date that hasn't passed
  - Series logic still needed for recurring events across time zones
  - Mac clarifying requirements with Laura before building asset

**Content states and workflow:**

- Upcoming webinar — shows form with sign-up button
- Past webinar without video — interim state, URL removed from indexing
- Past webinar with video — appears in on-demand section and videos collection

**Management consolidation:**

- All webinars managed from videos and webinars section in Resource Center
- No longer uploading webinars to events section
- One centralized location for all video content management

### Development updates

**Resource Center status:**

- Phase 3 rollout pending: videos and landing page (only two outstanding items)
- In-browser resources: Mac provided Figma feedback, refinements in progress this week
- Phase 4 enhancements captured: automatic pretty URLs, diagrams, resource assets based on slug name

**Sanity staging dataset:**

- Leveraging AWS setup from scheduled backups
- Two sync modes available:
  - Soft sync — brings new items from production to staging (weekly automated)
  - Hard sync — complete staging wipe and replace (manual trigger only)
- Workflow: build in staging → connect feature branch → review → manual copy approved sections to production
- Ready by end of next week

**Technical items in progress:**

- Global dark mode toggle development
- Scheduled drafts plugin migration
- Identity card styles alignment with UI toolkit
- Light/dark logo toggles — building reusable component instead of individual icons

### Segment integration

**Documentation website issues:**

- Different write keys between marketing site and docs site
- Same data passing, but docs using separate segment source
- Sam can see events firing correctly from site
- Cody to check segment setup and invite Sam if needed for troubleshooting

### Questions to ask

- Status on PDF URL rewrite investigation?
- Timeline and blockers for Phase 4 enhancements?
- Events migration timeline — on track for Dec/early Jan completion?
- Capacity and bandwidth given increased reliance post-Adrian exit?
- Input on redirect implementation strategy for tutorial migration?
- Markdown plugin alternatives for FAQ/tabs in Tutorial items?

### Campaign page component needs

**High-priority workflow established:**

- Slack tagging for maximum visibility and quick response
- Asana invitations for ticket management and requirements review
- Components needed: card layout and side-by-side comparison feature table
- Prevents page publishing, tied to ad campaigns and Redis initiatives
- Cody to send Asana invitations and ping in Slack for immediate needs

### Action Items

- Woolly Mammoth: Merge webinar updates into Sanity today
- Woolly Mammoth: Complete staging dataset setup by end of next week
- Woolly Mammoth: Share documentation of new fields, states, behaviors and triggers
- Mac: Get clarity on series logic requirements with Laura before building
- Cody: Send Asana invitations to Woolly Mammoth team
- Cody: Check segment setup for docs site integration issues


