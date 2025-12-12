---
type: meeting
title: "Scott / Mac DevHub Walkthrough"
date: 2025-05-29
participants: [Scott Weaver, Mac McDonald]
tags: [dev-hub, design, tutorials, redis-university]
---

# Scott / Mac DevHub Walkthrough

## Notes

- https://docs.google.com/spreadsheets/d/18vFZL52KxjMuZ5aF-qadUaDxEylZjMBpS7P2RiGZo8M/edit?gid=0#gid=0
- https://www.figma.com/design/CzEsQhnBMup3bKk6S4RM4y/Dev-hub?node-id=1-3&t=bqvJK9TGF6JHf2NY-1&fuid=1478434842336882684
- Will Johnson is going through to make sure things are cleaned up from his side

## Topics

- Events & Webinars page
  - Can we filter by type by URL for developer events?
- Pages:
  - Main DevHub
    - redis.io/devhub
  - Tutorials area
    - redis.io/devhub/tutorials
    - redis.io/devhub/tutorials/[slug]
- Main DevHub Layout pieces
  - Nav bar
    - Shared across pages?
  - Search bar
    - What does it do??
    - Copilot site search for the whole site; this should be only for the dev hub
  - Develop in your language
    - "See all libraries & tools" link goes to: https://redis.io/docs/latest/develop/clients/
    - Icons link out to respective docs pages as well
  - Tutorials
    - Three different buckets of tutorials: AI, For Developers, For operators
    - Each one will link to a preview of all of the tutorials and filter everything
      - Will is responsible for the content
- Tutorials Area
  - Tutorials
    - They will be on redis.io
    - These will exist in Sanity as individual pages
  - Redis University
    - Will link out to Flockjay
      - We'll see a preview image (could be hard coded for go live)
      - We also need to hard code icons for each language
    - Developer learning paths
      - The links will be in the Sheet
  - Developer events
    - Will be hard coded for now
    - See all events will send people to the resource center page (events & webinar page)
  - Videos
    - There's conversation around how we're going to do this
    - DevRel
    - How will we put videos here and link them?
    - Currently: they click on the video, a video modal pops up and you can watch it in there. Whether it's coming from YouTube or Wistia, we don't know. Will's preference is Wistia; DevRel wants to push YouTube.
- Individual pages (NOTE: they currently exist: https://redis.io/learn/create/aws/chatapp )
  - "Back" would go to either Dev Hub or Tutorials landing, depending on how you got there
  - Blog style page
  - Right rail table of contents
  - Related resources
    - What does search do here?
    - Where does this come from? (Will can know)
