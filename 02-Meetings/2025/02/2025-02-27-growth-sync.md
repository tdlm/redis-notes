---
type: meeting
title: "Growth Sync"
date: 2025-02-27
participants: [Adrian, Scott Weaver, Cody Henshaw, Ian]
tags: [growth, data, tracking, ab-testing, sso]
---

# Growth Sync

## Summary

- Website Optimization: Discussion centered on optimizing the user path on the website, including weekly reporting and improving data capture from the website to the product.
- Data Gaps & Integration: The main gap identified is the hand-off between website data and product data. Cody and Adrian discussed potential solutions, such as integrating more product signup elements on the website and establishing a unique identifier (e.g., GAID) to connect data across systems.
- User Tracking & Enrichment: The team explored options to enrich user profiles via a logged-in state and SSO improvements, including adding custom fields (like an "AccountSource") to better filter and understand user origins (e.g., University sign-ups vs. downloads).
- A/B Testing & Reporting: Emphasis was placed on enabling quick testing and optimization using A/B tests and improved data tracking to drive better insights.

## Action Items

- Scott Weaver: Discuss with Ian tracking the A→B traffic and getting more insight on that
- Scott Adrian: Implement a custom field (e.g., "AccountSource") on the University sign-up form for testing.
- Scott Adrian: Follow up with the SM contact to ensure custom fields can be accepted in the data pipeline.
- General: Assess the feasibility of a logged-in state and expanded SSO scope to capture more user data.
- General: Review current source pages for additional optimization opportunities.

## Full Discussion Notes

We did introductions with Ian.

Optimizing our path through the website

Started doing weekly reporting

Getting comfortable with the data

Biggest gap in data is hand-off that happens between website info capture and info we capture in product

Cody and I have talked through a couple of ways we think we can solve it

We're interested in the right way of solving it

Cody can give an overview

Adrian: Integrate more of the product sign-up side on the website?

Cody: Yes. Sign-up will always be here. They're worried we'll have to keep two things in sync all the time. We have GA, HotJar, tracking platforms but nothing pushes to our main data warehouse, so you can't see a full E2E of someone signing up all the way through to paying, etc. There's a lot we can do. Onboarding one of these A/B testing tools, doing tracking with native integrations with the data warehouses is our most viable path forward.

The Growth Team needs to be able to optimize and test a bunch of solutions really quickly.

Ian: Having a key value that we can key on to join all the info we're getting on the web to all the product data. Cody hit on it. We're going to spend a lot of this year trying to improve and create more efficiency around what we can control; the big lever there is the website. We ran this A/B test, we generated X/more of AAR. We get clicks/conversions. We do pass some information along (GA ID); coverage is less than 5%. We've got cookie blocking, SSO sign-ons, a handful of things causing this issue.

Cody: When Ian mentioned a unique identifier, it's often a person. We have a GAID of a person and then they sign up and we don't join those in the data warehouse.

Ian: We do, but it doesn't always work.

Cody: It would be difficult tracking an individual user going to the site to the product.

Adrian: Implementing a logged in state on the website. Would that help us?

Cody: That would help us a lot. Knowing what plan they're on. A universal Redis login vs a cloud login, which we've also been talking about — if they sign up for Redis University, it would be nice to carry that across the site and have an enriched user profile.

Ultimately, we want to pass that back to Sales, so once they're.

Lowest hanging fruit — we don't know who's signing up very well. We have a rough understanding. SSO makes it so we don't have any country information. There are ways to do some enrichment there. One of the things we want to do is a post activation state where you're filling out more information about yourself.

It used to be in the product onboarding because it was clunky and not helping people activate.

Who are the people coming to the site? Paid conversion rate is low because it's all students.

It's our team to know everything about everybody on the site as much as we can.

Ian: Is it solvable?

Adrian: You can add Scope to the SSO itself to get more information and there may be a consent checkbox. We don't own the SSO API itself.

Cody: We use the SSO and you click one of those buttons and then instead of going directly to the product, you go back to a form to self-identify.

Adrian: We could have them redirect after the signup, but that might be clunky.

Cody: Those are the things we need to be able to test pretty easily. With the new platform, hopefully we can build things like this in for 50% of the traffic.

Ian: Would you be able to describe the data handoff between the website and the product?

Adrian: From the Try Free page (or wherever you're registering), it basically fills in a bunch of hidden fields in the Marketo form with UTM params, so there are dynamic ones that are generated if you're not coming from a specific campaign (user agent, referrer, etc.), but usually the use case is coming with UTM params from Ads, Campaigns, etc., you'll get landing page, referrer url, source, medium, etc.

Ian: How flexible is that grouping of data? Can we add other fields to it and hand it off into SM?

Adrian: We could; they'd have to accept it and pass it. During the sign-up, I don't think the form is going directly to Marketo.

Ian: Website SM (Service Manager) to Marketo?

NOTE: Service Manager (SM) keeps keeps track of account creations, setup, and usage

Adrian: Yes.

Ian: Have you discussed with him the idea of the downloads thing? Form within the downloads page?

Cody: Problem Statement -- Today, users have to sign up for Cloud in order to get software and those are low intent sign-ups because they never intended on getting Cloud so we need to figure out how to exclude them from the dashboards we're using. One way to do it is to use a utm so it's almost like a campaign so we can filter based on that. I don't know if that — since we already have the form that's embedded on the new downloads page you already built — that could be a hidden field. Then we can do the filtering that way or have a separate — basically a clone of the try free page that's just sign up for software that does basically the same thing.

Adrian: We already did that for University sign-ups.

Ian: Do they accept anything?

Adrian: It's not a form id; the logic I already built, I can easily add a custom field to that form. We just need to make sure that wherever the data's going, they can accept/see it.

Cody: We can test it with the University form. That's what we want to filter out anyway.

Adrian: I can hard code.

Ian: I don't want to overwrite our utm stuff because it's still useful; maybe a different field that's like source. Do you have a contact on the SM side?

Adrian: Do we want to do it on the University side?

Cody: Yes, then we could start seeing that data populate.

Adrian: I just need a naming convention.

Ian: AccountSource and that would be University and we'll have another one that's Downloads and null would be our basic one.

Adrian: Empty is nothing.

--

Ian: Take a look at other pages to see if there are optimization points we could make. Source pages.

Cody: Do you have any idea why we chose try free as the URL slug for sign-ups?

Adrian: Originally, it was because you were going to try Cloud for free.

Ian: We kept trying to try different things; it always resulted in lower conversion.

Cody: Across the board?

--

Cody: I added you to the low-touch channel.
