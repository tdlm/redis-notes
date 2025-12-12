---
type: meeting
title: "Redis x Woolly: Sanity / NextJS"
date: 2025-03-18
participants:
  [Sam, Alannah Frankel, Scott Adrian, William Johnston, Scott Weaver]
tags: [sanity, nextjs, cms, woolly-mammoth]
---

# Redis x Woolly: Sanity / NextJS

## Action Items

- Us: Get env files from Vercel (if not, ask Sam)
- Sam will set up a staging dataset in Sanity

## Questions

- Is there anything stopping us from getting started with preview environments going? For example, I'd like to rebuild the pricing calculator I'm currently building.
- Any issue with us adding Tailwind on top of Style Modules?
  - This looks like it's been addressed here: Lana: "Hey Cody, moving over now would be challen..."
- Where would I look to see how the editor blocks are defined and how they're assigned to particular other blocks, content types, etc.?
- Your thoughts on creating variations of components for A/B testing

## GPT Summary

The team discussed ensuring consistency in Sanity's content structure, naming, and editing experience across content types. Sam demonstrated the schema setup, duplication options, visual editor, and centralized form management, noting the frontend is decoupled via Next.js. Adrian asked about component nesting, formatting behavior, and localization. William proposed integrating the separate Redis Learn/Developer Hub into the main Sanity instance, with Sam recommending reuse of existing components and leveraging access controls. Weaver asked how to get started locally. The group also touched on collaboration features, versioning, and content block reuse.

## Discussion

Sam: Make sure there's consistency in Sanity for naming things, etc., and that the experience with the editing experience is consistent across all the content types, etc.

Adrian: I want to look into the page creation process.

Weaver: I'd like to look at the UI, the schema, that kind of thing, and then we can take it from there.

Sam:
[Sharing his screen]

He is on localhost:3000/studio/structure/pages;...

We define everything you see in the left hand side bar. These are the content types (looking at "Pages." You've got Data and SEO at the top under "All fields." Under Data itself, you have the title, etc., the schema, etc. As Mac is sending updated designs, certain things will be replaced.

Adrian: How would you copy an entire page's stuff?

Alannah: You can also copy and individual section as well and then adjust that individually.

Sam: They have individual options (theming options). You can click Copy on the kebab menu, or you can copy all on the top right to the right of "Sections" or you can click Duplicate on the kebab next to Publish.

Adrian: Can you nest components? Oh, you can.

Sam: There's also the Visual Editor.

Adrian: There's no changing the font size, changing the font type; these are defined, right?

Sam: Yes, that's the thing with moving to Sanity. It's more of a tight setup. Everything is detached from the frontend, which is built in Next.

[Now he's going over Posts, which have a slight difference to pages in that it has a WYSIWYG, that has code blocks]

Sam: We've used your font in the WYSIWYG.

Adrian: This adheres to copy-paste (bold, italic, links, etc.)

Sam: You can add links individually.

Adrian: What about a paste?

Sam: It will format it well, usually.

Next, we have icons.

Weaver: They're stored in Sanity?

Sam: Yes, this is the source of truth. Next, we have Settings > Header and Footer and Social Media and Redirects. We've made Forms their own Document type so the Marketo stuff you can add here. Say, from a Press Release page, you can pull in the correct form, so if you change the meeting form ID, you're not going into tons of documents and managing it crazily, it's managed in one place.

Any questions?

Adrian: Localization?

Sam: Good question. Top right, we have Translations. It will switch to a page where you can change translations with an interface.

Sam: More life enhancements, you've got collaboration stuff; you can add comments, you can tag people. It's got History and version control, go through, create releases, go through the history, see what changes have been made, roll back as needed, etc.

William: The reason I'm on this call is that we have a separate site if you were to go to redis.io/learn; it's our Learn or Developer Hub -- it's for developer content, tutorials, etc.; the content types would be similar to blogs in terms of formatting. They follow a pretty standard format. I am trying to figure out what would be the best way -- since this currently exists as a separate site altogether -- to fold this site into the main site and whether it makes sense to move it in and maybe redesign this page using the components you guys have built already, or maybe add components. If you go down to the commands cheatsheet, that's an example of one of the pages. We have code blocks, some tables; this is actually one of the more complicated ones -- they're usually just lists and headings. If you could take a look at this site and see what you'd recommend in terms of moving it. Would you want to create it separate? Or treat it all the same? The one caveat that it's kind of a separate team.

Sam: You could do either and do a new Sanity instance; you're on Sanity Enterprise so you've got finite access controls. We could limit access so there's no chance of people impacting other peoples' work. You can see Sanity is structured neatly. I'd say pull it into Sanity, have one place everyone works from.

William: I was leaning toward borrowing from existing design. I don't know what it looks like in here to restrict people. Say I had a guy who needs to come in here and shouldn't be able to edit landing pages but he can create a different kind of page that's on the Learn Hub.

Weaver: How do I get started?

Sam: When you pull down the code; this will give you a local version of Sanity. You can make changes directly in the Sanity folder. You can open up a PR in Github. Keep us in the loop; we can review and make sure nothing's going to break. When you build, we can say this is how we're going to approach it.

Adrian: Not a ton of complexity.

William: Is there a way to see what pages the form is referenced on?

Weaver: Defining blocks that can be used in blocks, separating by content type?

[Closing questions about setup]
