---
type: project
title: "Sanity Dev Hub"
tags: [sanity, dev-hub, tutorials, search, nextjs]
---

# Sanity / Dev Hub

## Questions for Woolly

NOTE: Given that I want to lead the effort on this one but I have a lot of knowledge gaps, I was hoping you could be my subject-matter-expert so I start building this the right way instead of taking off in the wrong direction. I appreciate any answers you can provide to the questions below in advance!

GOING LIVE WITH DARK MODE ✅

## New Questions

- For WM:
  - Top Bar (Shared nav)
    - How to properly set it up across pages? I have it on /dev/ but how should I surface the same component on /tutorials/ so I don't have to redefine it?
    - How can I add custom external links?
      - We'll adjust this to be an array of links instead of just a page ref
  - Dev Hub Header
    - Ready for mini search help here.
      - Build an index at build time.
    - Will mini search support filters?
      - Add 'category' (and other taxonomy items) for faceted search
  - Tutorials Search/Filtering
    - Will this also use mini search?
- For our team:
  - Do we have an API key we can use with GoogleAPIs? (Pinged Cody/Adrian)
  - Where do results for Dev Hub search display? (Mac looking into this)
  - Who will populate Tutorials? (Pinged Will)
    - Still need to figure out whether Authors need to be included and how they should be displayed
  - Redis University (Will?)
    - How will we pull this in?

## Questions

### General Questions

- Am I using the right components?
- Which are the right components to use for the remainder?
- How best to override styles for this use case?
- RE: Header w/ Search
  - Ask Mac which one he wants; if he wants both, use a prop to add a class for stylings; otherwise, switch to the one he wants
- RE: Language icons
  - Probably not coming through due to the groq query
- RE: Three column layout
  - Copy the three column layout component the homepage uses and use it as a starting point for building a new 3 col layout section
- RE: Developer learning paths
  - RE: Icons
    - Instead of icons, maybe use Images in the same way in that component or a new one
      - Most likely JUST use images
    - Question for Mac: do we want all icons to behave like Redis Icons?
- RE: Events
  - Look at Lana DM
  - Look at Three Col Videos
- RE: University
  - Do we need to go live with this (and the integration with Flockjay)?
- RE: Videos
  - Look at this tools/sanity/schema/sections/threeColVideosSection.ts
  - Use the groq query to see where it's being used before we change it or decide to extend it
  - Question for Mac: should we manually enter the videos into Sanity or automate pulling the Playlist into Sanity
- RE: Tutorial Index
- RE: Tutorial pages
  - Totally like Glossary items; need to create a new document type
  - Do we want Related Items?
    - NOTE: In Sanity, you can add an array of related Glossary Items to a Glossary Item.

## Dev Hub General

- Use Secondary Nav Section for shared navigation; create and link a secondary nav document.
- Match active nav using partial base slug.

## Search Implementation

- Use MiniSearch for live GROQ document search (see blog search implementation).
- Pass facet filters as query params into MiniSearch.search().
- For tutorials search, create a custom API endpoint if GROQ doesn't scale well.
- Combine GROQ queries for pagination and total count in one request.

## Landing Page Sections

- Develop in Your Language: Repurpose homepage's Frameworks Section or hardcode if not reusable.
- Tutorials:
  - Create new content type at /tutorials/[slug].
  - Build /tutorials/ landing as TutorialsLandingPage document.
- Redis University:
  - Prefer cron-based import into Sanity, similar to Greenhouse.
  - Alternative: API call from app route.
- Learning Paths: No existing section; either hardcode or create new one.
- Developer Events: Use existing Events system and <Card /> component to wrap links.
- Videos: Store video URLs in a custom schema (see mediaSection.ts).

## Tutorials Page Specific

- Create custom content type for tutorials (like blog posts).
- Use buttonElement[] for Related Resources.
- Use BlockContentRich for content; render with TextBlockRich and hardcode the "TUTORIAL" tagline.
- For in-page nav, reuse TextBlockTableOfContents from Glossary template.

Will we have to hide Events or do we have to go live without?

## RE: Dev Hub Shared Nav Bar

Questions:

- Is there an existing component that would work well for this?
  - Yes we have a section called Secondary Nav Section that would be good for this. It's a section that references a document. You make the secondary nav document (here) and then link to it in the section.
- Do you recommend matching (active) by document partial base slug (and having documents share a base slug) or is there a better way?
  - Partial sounds good!

## RE: Dev Hub Landing Page / Search

Questions:

- We use search on the homepage and I'd likely reuse a lot of that. However, for the search, I noticed we are porting that search to redis.io/search/{search} — but for this, we'd be doing a live groq search for our documents; do you recommend this approach?
  - The search on the homepage uses the CoPilot API. If the contents for the developer hub are not available in the results, you may want to leverage the MiniSearch setup we created for the blog here: (app/blog/search/page.tsx && templates/BlogSearchTemplate/index.tsx)
  - We created an index in the app route, which is built during build time and then passed down to a client component. This component loads the index and performs queries on it using the minisearch.search() function.
    - Minisearch.search() docs
- For search facets (categories, topics, etc.), do you also recommend just passing those as query param arrays and handling those in a custom api endpoint?
  - Yes, I would recommend capturing the facets as separate query parameters, so you can pass them to the filter key in the MiniSearch search options. You can see the docs for this here:
    - Filtering search results

## RE: Dev Hub Landing Page / Develop in your language Section

Questions:

- Given that this is a set of standard links I may start out with this hard-coded but only if it's not already built. Just wanted to see whether this is already built and used somewhere?
  - There's something similar that we built for the homepage (Frameworks Section), maybe we can see if Mac would be open to repurposing this section or if not, you could add a field to modify the style to match.

## RE: Dev Hub Landing Page / Tutorials Section

Questions:

- This seems like it would be as simple as building out separate blog-like content type for tutorials with /tutorials/[slug] as the pattern, and a Dev Hub Category for grouping them. Do you see that as the right way to organize this content?
  - YES! :)
- And /tutorials/ would point to a full page search page. Given that that result page is more like an app than a Page, what type of content do you recommend building this out as?
  - We'd recommend creating this page as a document called TutorialsLandingPage . You can follow the way we've set it up for the other landing pages we've created (partnerLandingPage, customerLandingPage, etc).

## RE: Dev Hub Landing Page / Redis University

Questions:

- Given that this is going to be fed to us from FlockJay, do you recommend — as an optimal storage — a cron-based import that stores this against a particular data type?
  - We generally recommend importing this into Sanity so it is readily available during build time, and the querying is consistent with other documents. This is similar to how we integrated Greenhouse (see app/api/sync-careers).
  - However, you can call their API directly from the app route, if preferred.

## RE: Dev Hub Landing Page / Developer learning paths Section

Questions:

- Similar to the "Develop in your language section," it seems like we'll likely hard code this unless you already have it built somewhere?
  - Somehow, we don't have a section exactly like this already. You could either hard code it or create a new one.

## RE: Dev Hub Landing Page / Developer events Section

Questions:

- I believe we already have the Events in the system that we'd be querying for there. Is there anything particular I need to know here?
  - Just that for cards like these where the entire thing should be a link, we have a <Card /> component (components/Card/index.tsx) that can wrap it in a link. You can see this being used for events here (templates/EventsLandingTemplate/EventFeed/index.tsx).

## RE: Dev Hub Landing Page / Videos Section

Questions:

- Do you have recommendations for a data type under which to store these videos given that they'll most likely start as video URL references (either YouTube or Wistia)?
  - Yes we've been setting them up as video URLs, you can see the field in the schema in the media section for ex (tools/sanity/schema/sections/mediaSection.ts).

## RE: Dev Hub Tutorials Search

Questions:

- Similar to the previous question about search, do you recommend a custom API endpoint here that will support the various facet searches or is there a different approach you recommend? My instinct would be to build it out so I can send arrays of each type and feed it into a groq query, but I don't want to rush in.
  - For search, you could look at the Minisearch integration we added to the blog. Ideally, we would have a dedicated search tool for this, like Algolia. If the requirements stretch the capabilities of an in-memory search, then yes, you could try using a GROC query, but as you are charged based on API call volume, you
- Given that the page should support pagination, is there a way to avoid running two separate groq queries? (one for the count, one for each page of results)?
  - Yes, this can be done in a single query; this is how we did it for the blog pagination:

```groq
export const POSTS_QUERY = groq`{
  "posts": *[_type == "blogPost" && defined(pathname)]
    ${blogPostsProjection}
    | order(publishDate desc, _createdAt desc) [$start...$end],
  "totalPosts": count(*[_type == "blogPost" && defined(pathname)])
}`;
```

## RE: Dev Hub Tutorial Page / Page

Questions:

- Given that these need to exist under /tutorials/[slug], do you recommend a new custom content type for these? I'd guess so but wanted to confirm.
  - Yeah we'd make these their own doc type like Blog Posts or Events for example.
- The Related resource on the left would just be a list of links with titles that would get surfaced if filled in. Any particular Section Type you recommend here?
  - I'd make this an array of type "buttonElement" on the Tutorial Document.
- The Tutorial Category and Tutorial Content seem straight-forward. Any gotchas there?
  - For the block content for the tutorial page we'd recommend the making the Sanity field BlockContentRich and then using the corresponding TextBlockRich component in the frontend (and then maybe hardcoding the "TUTORIAL" eyebrow/tagline so they don't need to input it everytime they make one?). This allows you to add H1s (components/TextBlockRich/index.tsx).
- The Tutorial Sections on the right seem like I can just scan the content for headings and output a set of links to headings on the page. Any gotchas there?
  - We'd recommend leveraging what we've done on the Glossary Item Template (templates/GlossaryItemTemplate/index.tsx), as it's very similar to this layout. There's a component called (components/TextBlockTableOfContents/index.tsx) that you can use for this!

NOTE: NO MORE QUESTIONS BEYOND THIS POINT

These are just notes.

## Sanity Layout Ideation

- Dev Hub
  - All Developer Events >
  - All Tutorials >
  - All University Posts >
  - All Video Posts >
  - Tutorials by Category >
  - Tutorials by Topic >
  - Tutorial Categories >
  - Tutorial Topics >
  - DevHub Landing Page >
- Common Header Nav Bar
  - Hard coded for now, eventually editable
  - Shows focus on currently-selected page (based on URL)
  - What does 'Docs' link out to?
  - What does 'Commands' link out to?
  - What does 'Community' link out to?
  - What does 'Support' link out to?
  - Can consult with Woolly here for recommendations on Section/Component
- DevHub Landing Page Areas (/developers)
  - Approach:
    - Slug: /dev/
  - Common Header Nav Bar
  - Title (Editable)
  - Subtitle (Editable)
  - Search
    - Can be done via custom API endpoint, however:
    - Need to consult with Woolly here
  - Develop in Your Language
    - Hard coded list initially; eventually editable
  - Tutorials
    - List of most recent Tutorial posts in each section
    - Link "View all tutorials →" to /tutorials/
    - Link each to /tutorials/[slug]
  - Redis University -- Going to be hard-coded links up front; later we'll make it more robust.
    - Top 4 most recent University posts
    - Is there a University Landing page?
    - Where does each link to? FlockJay, but do we need Content in Sanity to represent a Flockjay post or could we get this from an API? (needs title, excerpt, featured image, category, length and link)
  - Developer learning paths
    - Hard coded for now?
- DevHub Tutorials Page Index
  - Common Header Nav Bar
  - Search
    - Filter pills
  - Sidebar/filter
    - List Categories as filters
    - List Topics as filters
  - Tutorial Card Listing
  - Pagination
    - Can be fed via API endpoint
- DevHub Tutorial Page
  - Approach:
    - Assume that everything is a link out (nothing will be migrated).
    - We'll add link toggle to the entity.
    - Link behavior on:
      - Link to the destination URL
    - Link behavior off:
      - Path: /tutorials/[slug]
  - Common Header Nav Bar
  - Left Sidebar (list of related links can be a simple editable piece of content)
  - Main content will be based on existing blog post
  - Right Sidebar w/ Sections
    - Scan for headings and output them as jump links
  - Ratings?
- Developer events
  - Will we have a calendar view?
  - Will this use an existing feed?
- Video Card Posts
  - Will reference video URL, video image placeholder, video title and video length
  - Do they need to have standalone pages?

## General Considerations

- Tailwind now or still later? Given dark mode switching, it seems prudent to try it now.
  - This would open us up to use certain ShadCN components.

## Top-Level Page Types in Sanity

### DevHubPage

- URL: /dev
- Modules:
  - Intro text
  - Search bar
  - Develop in your language (icons + link)
  - Tutorials bucket (AI, Developers, Operators)
  - Redis University previews
  - Developer events
  - Videos

### tutorialLandingPage

- URL: /tutorials
- Modules:
  - Filter sidebar (categories, topics)
  - Search results / tutorial grid

### tutorialPage

- URL: /tutorials/[slug]
- Content:
  - Title, body (rich text), code snippets, images
  - Right rail table of contents (auto-generated in frontend, sections in body)
  - Related resources (linked entries)

### eventsPage

- Approach:
  - Existing events page filtered down by dev events.
  - Lana added extra tags but we should be able to filter by URL param.
- URL: /events
- Content:
  - Filtered by URL param (hardcoded for now, can evolve to dynamic collection)
  - Event grid

### videosPage

Approach:
If we just link directly to the videos.
We don't yet have the strategy for a full video page, so we'll defer this.

- Could be nested under DevHub or stand-alone
- Video grid, video modal logic in frontend
