---
type: meeting
title: Scott / Adrian Huddle
date: 2025-10-17
participants: [Scott Weaver, Adrian]
tags: [aws-reinvent, sanity, design, development]
---

# Scott / Adrian Huddle

**Date:** October 17, 2025  
**Participants:** Scott, Adrian

## AWS re:Invent Page Development Issues

- Building new page with 7 sections, each requiring custom field modifications
- Preview environment showing incorrect styling/data choices
  - Same issue Scott experienced with Lancash header
  - Only displays correctly in production environment
  - Cache clearing not working properly on preview
- 17 file changes, 429 line additions, 21 deletions for single page
- Form styling remaining issue blocking page completion

## Sanity CMS Development Constraints

- No dynamic content creation capabilities like WordPress/Gutenberg
- Cannot nest sections within rich content editors without custom plugins
- Every design variation requires net new component builds
  - Two-column sections need complete rebuilds for new features
  - No universal component library with all styling options
- GraphQL query complexity increases with each customization
- Backwards compatibility issues when modifying existing components

## Design-Development Workflow Problems

- Mac designing with non-existent components/styling options
  - Different font sizes on every title
  - Custom styling not available in current system
- No adherence to existing component library
- Timeline pressure forcing rushed implementations
- Cody agrees changes needed but takes no action on design constraints
- Need frontend developer dedicated to component building
  - Current workload split between Scott and Adrian unsustainable
  - WM fully booked on other features

