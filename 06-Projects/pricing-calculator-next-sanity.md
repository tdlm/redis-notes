---
type: project
title: "Pricing Calculator (Next.js/Sanity)"
tags: [pricing-calculator, nextjs, sanity, groq]
---

# Pricing Calculator (Next.js/Sanity)

## Notes

Example page architecture flow diagram: https://www.mermaidchart.com/raw/e99f818a-5877-40e0-892d-4606ca4118fa?theme=light&version=v0.1&format=png

- From Sanity, we should be able to control:
  - Title of page
  - Result Card Messaging for Flex / Essentials / Pro
  - Tooltip text(s)

## Meetings

### Call with Lana and GG on April 7th, 2025

- Lana will send me the pricing page schema
- Lana will send me groq cheat sheet

### Summary

Had a call with Lana and GG from Woolly Mammoth today. Lana went over the pricing page schema and sent me a GROQ cheat sheet. We discussed setting up /pricing/calculator/ in Sanity Studio—(published drafts can be previewed locally, but publishing to prod is fine for now since we aren't live yet, of course). Pages are created under "Create Page," where "Page" is the English version; others are language-specific. We use "Sections" to define the page structure using pre-built components, either as an array or fixed objects. They noted that for GROQ, to avoid over-fetching, you want to query only for what you need as long queries can cause build errors and impact performance; however, sometimes, if queries are too long, you can use spread syntax to fetch more but query less (there's a balance). We touched briefly on A/B testing at page level, but noted we'll need more time to dive into how we might tackle more atomic A/B testing, particularly with partners like Statsig/PostHog/etc. since the team only has experience with page-level A/B testing using page-level content variations.

### Notes

- I want to set up /pricing/calculator/
  - How do I set up Sanity Studio so I don't interfere with production?
    - http://localhost:3000/studio
      (same for production url: https://redis-sanity.vercel.app/studio/)
    - If you push changes on the local one, it will show on the production one
    - If you keep it as 'Draft', I can see it on local; but pushing to Prod right now is OK too.
  - What's the mental model for surfacing base URLs?
    - Under Create Page, Page = English Page, and the rest are language-specific
    - We can ignore 'Breadcrumbs' for now
    - The main area we'll work in = Sections
      - And the page data model will get defined here.
      - I can select from the defined components.
      - There's a defined schema and a matching frontend for it.
      - The whole thing would be a section with an array of objects where we could define each one. Or if there will always be three, we could have one object per plan type.
  - How do you do something wrong?
    - Grabbing more data than you need.
  - What's the mental model for surfacing data types?
    - groq cheatsheet: https://www.sanity.io/docs/query-cheat-sheet
    - With groq, you make the query from Sanity.
    - There's a balance for fields you're querying for. You can technically spread syntax to grab everything; we try not to do that.
    - The data you query from Sanity does affect page performance and load times.
    - Sanity has a quirk where, if the queries become too long, you're going to run into an error (in the build logs).
    - Using the spread, the thing I'm most conscious about (since you can reference documents from other sections), let's say you have three plans and each plan is being synced up through the API, if you spread all the fields for each plan when you might need only three plans.
  - Sections
    - We could cut maybe up to 10 sections
    - On the design side, you don't want to scroll through 50+
    - Double-sided section: similar section with feature flags
