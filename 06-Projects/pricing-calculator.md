---
type: project
title: "Pricing Calculator"
tags: [pricing-calculator, wordpress, nextjs, sanity, redis-cloud]
---

# Pricing Calculator

Figma: https://www.figma.com/design/HIKwQCPRIrRp6GPJ4v9c7Z/Redis---Website-2.0?node-id=22332-7010&p=f&m=dev
Doc: https://docs.google.com/document/d/16_V67LIzdsw68_oxf_97syf7pd0jDwEqQsFiACpe5Mg/edit?pli=1&tab=t.0
Site: https://weaver-redis.pantheonsite.io/pricing/calculator/
URL will be: /pricing/calculator/

## Next.js Version

### Action Items

- A few SVGs and images (like flags, plus/minus icons) appear to duplicate ones we already have. Worth checking if they exist before adding new versions.
  - public/flags
  - assets/icons/index.ts (used in this component: components/Icon/index.tsx)
- The eyebrowSection has already been created in the MiniHeaderSimpleComponent, which could be reused and included as part of pricingCalculatorSection.
  - components/MiniHeaderSimple/index.tsx
- The region select dropdown looks similar to the one we used in the pricing page, maybe you could use that to avoid duplicates.
- We noticed a few custom components (e.g. Button, Text) where we already have common ones in place.
  - components/Text/index.tsx
  - components/Link/index.tsx (imports styles from components/Button/styles.module.scss )
- Bit worried about using hardcoded hex values. If we want this section to comply with the global theme toggle we will need to use our theme variables.
- Media queries should also use the existing breakpoint variables instead of custom values.
- Typography looks like it's been manually redefined. If you want to add a new font you can add it here:
  - config/fonts.ts
  - tools/sass/base/\_typography.scss

## WordPress Version

### Action Items

#### Calculator Bugs

- Fix HA across all plans

#### Calculator Functionality & UI

- Add horizontal scroll to breakdown table with shadows on left/right when scrollable
- Ask Cody: Did the Flex plans just get adjusted for us-east-1 and us-west-1?
- Cody: Duplicate button looks broken
- Round prices to fixed 0
- Add "DB #" column to pricing breakdown for clarity
- Set Breakdown header sizes to 12px / 10px Space Grotesk 500 and show Mac
- Show max throughput (e.g., 12500 ops/sec) for Pro plans on Breakdown
  - Ensure max throughput for Pro displays cleanly on small screens (verify responsive layout)
- Show the plan size in the Breakdown vs inputted DB size
- On mobile, move "Add database" above the form instead of below
- Add duplicate button to duplicate a DB config row (waiting to hear back)
- Ask Mac: on mobile, should we move the "Add database" above the form instead of below?
- Ask Cody: Should Breakdown show inputted DB Size or tier DB Size (e.g. 12GB instead of 10GB)
- Add documentation for business logic
- Support decimal dataset sizes (<1GB) like 0.1, 0.25, etc.
- Add "/hr" to hourly pricing display
- Fix tooltip language for unavailable plans (e.g., Essentials for 50GB)
- Match rounding logic with old sizing calculator
- Redis Flex 10GB → confirm it maps to correct 12GB/$60 plan
- Stack buttons vertically on mobile to avoid awkward line breaks

#### Cloud/Region Features

- Display "Region is currently unavailable" tooltip for unsupported regions
- Pull region support dynamically from API (or get full list from Yoav/Yaacov)
- When Azure is selected, show link to Azure Managed Redis

#### Legacy vs New Pricing Handling

- Send legacy pricing for /sizing-calculator/
- Expose both legacy and new pricing via API endpoints on weaver2 env
- Add ?pricing-version=legacy param support to API to weaver2 env
- Update /pricing/calculator/ to use new pricing on weaver2
- Update /sizing-calculator/ to use legacy pricing on weaver2

#### Cleanup

- Clean up app, add jsdoc, phpdoc
- Add aria/alt attributes for accessibility
- debounce for inputs
- Fix input field to allow deleting all digits

### Action Items (Old)

- Review feedback day 2:
  - Yoav: We need to add "/hr" after the number on Pro pricing.
  - Yoav: I picked a 50GB plan and saw that essentials not relevant (as expected), however the tooltip doesnt make sense.
  - Yoav: When selecting Azure as my cloud provider, we should present a link to Azure managed Redis as specified in the requirements. Sowmya and Talshk to correct.
  - Yoav: When having an estimation of several DB's on the same subscription, we should mention which DB it refers to.
    - Should we widen the modal a bit to accommodate it?
  - Yoav: I dont see the option to add several databases with the same config (e.g i want 5 db's with dataset of 10GB each). I can only add additional DB but than the UX in my opinion is impacted a bit because the user will need to add DB and insert the required dataset size when he simply wants several DB with the same configuration.
  - Yoav: When the region is unavailable in this specific plan (e.g. Redis Flex), let's say "Region is currently unavailable" or anything that makes more sense in this case. We may be able to determine this through the API. Yoav to get back.
- Add throughput to Pro breakdown
- Ask Cody: Should breakdown show inputted db size or qualified db size?

- Fast follow: Refactor / clean up app
- Fast follow for breakdown: Add debounce to inputs
- Fast follow for Azure / Essentials: If it's too large, we can indicate it in the card
- TODO: Check with Product team to see when Flex / Essentials are coming soon?
- TODO: Get Azure pricing to work
  - Flex = Coming Soon
  - Essentials = Show pricing
  - Pro = Show the custom card for "Try Azure Managed Redis" defined below
  - Get response from Yaacov
  - Try Essentials endpoint
  - Show "COMING SOON" under Flex and Pro
- TODO: For Pro under Azure, it should say "Try Azure Managed Redis"
  - Cody will provide a link:
  - https://aka.ms/AzureManagedRedis
  - Try Azure Managed Redis
- Fast follow for breakdown: Work on padding between Subscription and Billing Unit in Pro Breakdown
- TODO: Switch GCP/Azure items to "Not supported" if any items are $0 (client side)
- Fast follow for breakdown: Make the headers sticky
- TODO: Get "connections" in Flex/Essentials Breakdowns
  - Use max_connections
- TODO: Determine Subtotal display for Pro Pricing Breakdown
- TODO: Pro Pricing Breakdown Total should be:

  - Est. Cost: $2,723/mo ($0.232/hr)
  - Hourly price in same grey as

- TODO: Figure out if modal format is good
- Set up React, script enqueue, template base
- Set up wp-scripts (so we don't touch Gulp)
- Set up style modules
- Fix Pantheon build
- Remove dist files and add npm build to deploy
- Add service tabs/buttons
- Add Region dropdown w/ flags
- Add pricing card
- Add pricing card buttons
- Add fetch for pricing using React Query
- TODO: Ask Mac about 1.5 letter-spacing (which specific element?)
- TODO: Go over pricing breakdowns one more time with Cody:
  - Flex: one database per subscription. Each item gets its own line.
  - Essentials: one database per subscription. Each item gets its own line?
  - Pro: just one line in the breakdown? Do we sum each of the fields?
    - ONLY for Pro: ALSO, use Billing Unit, Price/Type, Quantity Required and Total
- TODO: Find out if we need an upper limit on Database (GB) per item (e.g. 1000000)
- TODO: Find out why 2GB returns unsupported by Redis Flex and Essentials (should return: redis flex $13/mo, essentials $52/mo, pro $200.02/mo; returns only pro $200.02/mo)
- Figure out how pricing is determined based on shard pricing response
  - How is pricing calculated for each card in the right rail?
    - Use this endpoint to get pricing for each plan:
      - https://app.redislabs.com/api/v1/plans/pricing?db_type=unifiedrc&is_bdb_package=true
      - Maybe cache it for a day
    - Redis Flex: Three different plans; Flex is new. It has different size availability than Essentials and Pro, so you can create a database from up to 100GB on Flex. So anything above 100GB would NOT show on Flex.
      - If I need X GB, I need >= X GB
      - If any DB are > 100GB, Flex is not supported
    - Essentials is up to 12GB
      - If any DB are > 12GB, Essentials is not supported
    - Pro is whatever size you want
      - Breakdown: Just one subscription line
    - Flex/Essentials can only have one database per subscription
    - https://redis.io/pricing/
      - Ask Adrian how he did this
    - Maybe we can build a proxy that does pricing/calculations based on our existing inputs
  - How is pricing calculated for the breakdown?
    - Copy whatever they did on https://redis.io/sizing-calculator/ for pricing
      - ONLY for Pro: ALSO, use Billing Unit, Price/Type, Quantity Required and Total
      - For Essentials, exactly what is on the Figma
    - Flex: Breakdown: If I need 2+ databases, they each get their own line
  - What happens if there's an error; what should we show?
  - What should the loading state look like?
    - Disabled while loading with opacity, then new state loads in
- What will be the URL for this?
- Fix Azure error (see below)
  - Two regions, only available on Essentials
    - Try hitting the Essentials Endpoint for Azure
    - Yakov Shapiro built the API
  - Flex, not available (show Coming Soon?)
  - Pro, not available (show Coming Soon?)
- Add region code to dropdown
- Add modal and trigger from "See breakdown" button
  - Add 'X' to close modal
  - Close on X or ESC button press
- Add page heading ("Redis pricing calculator") as set from Page
- Add info icons and popovers
- Fix the key issue on the looped items
- Styling
  - Add fallback card component for items that are not supported
  - What's the hover state for the buttons?
  - Style Dataset (GB) input
  - Style - button
  - Style "Add database" button
  - Fix flag styling in dropdown
  - Add container styling per breakpoint
  - Add mobile breakdown
  - Style table and format it
  - Set correct images for Service buttons
- Design feedback round 1:
  - The tracking on the header text looks really tight, I'd double check the type style settings across this page against the UI toolkit here
  - The button height seems to be responsive, but should be fixed at 50px height. And all button text should be Space Grotesk 16px body regular.
  - Add database button text appears to be Ariel, should be Space Grotesk regular (just spec'd in toolkit)
  - Hover states on buttons, just cross reference with toolkit.
  - Extremely nitpicky, but the "on" position on the toggle isn't flush to the right (off looks good)
- Design feedback round 2:
  - The tracking on the header text looks really tight, I'd double check the type style settings across this page against the UI toolkit here
    - Use 1.5px letter-spacing
      - TODO: Ask Mac about this
    - Body and headers should have 0px spacing
    - The drop shadow on the buttons is looking strong too. Use this:
      - border-radius: 5px; background: var(--Hyper-Hyper-09, #8A221C); box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
    - No shadow on the secondary style, just the color change on hover
    - There's also this default and click/hover state for this bit of UI too
- Design feedback round 3:
  - Optional: make buttons full width
