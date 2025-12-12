---
type: meeting
title: "2 Versions of the Pricing Calculator - Old and New"
date: 2025-03-24
participants:
  [Sowmya, Cody Henshaw, Scott Kostojohn, Scott Weaver, Yoav Har-Esh]
tags: [pricing-calculator, pricing-api, legacy, pro]
---

# 2 Versions of the Pricing Calculator - Old and New

## Action Items

- We need to obtain both API endpoints (new and old pricing); Yaacov will provide the old pricing endpoint.
- We must ensure subscription data includes a pricing version flag; Roy G and Yaacov will coordinate on this.
- We will update and publish the new pricing calculator, while providing a link to the legacy version for specific customers.

## GPT Summary

We reviewed our Pro offering and its pricing updates effective January 5, 2025. We reduced the minimum price from $0.88/hr to $0.27/hr and modified the allocation of Redis billing units, creating two pricing versions: subscriptions before January 5 use the old pricing and those after use the new pricing. We also noted that certain customer groups, such as Legacy Google Marketplace Platform and non-hosted, bring-your-own-cloud customers, are excluded from the new pricing. We discussed the need to update our calculators so they can identify the correct pricing version for each subscription by leveraging a pricing flag in the database and distinct API endpoints, and we agreed to work with the data team to implement this solution while evaluating the long-term viability of maintaining separate pricing calculators.

## Discussion

Sowmya: We have this offering called 'Pro' which we'll focus on today. Back in January 5th, 2025, we updated Pro and changed how it's pricing. We made two changes: We brought the minimum price for Pro down from $0.88/hr down to $0.27/hr and we changed the way the Redis billing units are allocated for a user high-availability/throughput combination. As a result, we have two versions of the pricing. All subscriptions that were created before January 5th, 2025 are on that previous pricing version and after, are on the new pricing version. Additionally, there are two islands of customers that don't get the new price: Legacy Google Marketplace Platform (WePick) -- we'd like to sunset that. No users on that platform got the new price. And Non-hosted, bring-your-own-cloud customers should not get the new price. Presumably there are accounts out there that have a combination of accounts created before the change and then after the change. If this customer were on a contract and their contract came up for renewal. The SalesForce calculator will try to price their next year out (combo of old and new pricing) and we realized, the calculators -- especially the SalesForce one -- is using the latest API. The only thing SA can size is for new pricing. They're now asking for a way for them to size a customer's exact configuration. We'll talk about SF calculator first and then the public-facing calculator. The main SF calculator should show the new pricing. We may find a place for the older version to sit.

We're trying to understand how to give them the ability to come in, provide their account number/name, we pull up their subscription list and say, here's pricing for the next year for renewal.

Scott K: What you're describing doesn't exist today. The offer starts with a blank piece of paper every time. Ernie from the SA team and I have been working on a feature to do exactly what you're describing -- working with the data team to pull what they're subscribed for, read that in a calculator, create an offer for what they already have. The hope is to provide that feature. Ernie ran into the same problem you're describing. That's the hiccup we ran into there. From my perspective, it wouldn't be tremendously difficult. We need an endpoint for old pricing. Then we have to know which of those endpoints to apply. There may be a field at the offer or subscription level, to say which type they'd use. We can do that. The other piece is -- for this scenario where we're creating an offer for the existing config, the data. from the data warehouse has to tell us endpoint to use for their subscription. Assuming those pieces are in place, it's not terrifically challenging to do in the calculator.

Sowmya: Then it's back to us. We need a price-v1 or price-v2.

Yoav: The pricing is at the subscription level. We have a field in the DB that says which it's on. If it's blank, it's the old pricing. If it has a value, it's the new pricing. We need a way to identify that in the calculator and then make the calculator -- per subscription -- reach out to the correct API endpoint.

Sowmya: So you'll take that?

Yoav: Yes.

Sowmya: Let's do that.

Sowmya: The link for the previous calculator, can we have it pointing to the old pricing. Could we say -- because you're on non-hosted, you get the redis.io/pricing ?

Cody: When would that situation happen? There's almost no clicks on that page.

Sowmya: I was under the same impression.

Cody: There were 40 engaged sessions last quarter. Next to none.

Sowmya: Reps give out redis.io/sizing-calculator/ -- so let's have this page live on but not be linked to our pricing page.

Cody: That's fine in the short term; we're re-platforming the whole site and I don't want to rebuild this. It's also not using the current branding. There's a lot wrong with this. I'd want to kick off an entirely new project for this if this is something we actually think needs to stay around.

Sowmya: I think that Spencer is asking that we get this back up and running, at least in the short term. The ask is: can we get a public facing link with the pre-Jan-5th version for specific customers? For now, I wonder who can point to one version or the other?

Cody: This one is using the new pricing?

Sowmya: Yes. It appears to be on the new one. We don't know how -- just because it points to an API, it auto-updates perhaps. For the longest time, it showed the $0.88/hr minimum. Can we do that to provide the sales team with what they're looking for now?

Cody: Do you have that endpoint?

Sowmya: It would be part of the same ask to Yaacov -- this weekly, hopefully he can give us that second endpoint, older API endpoint.

Yoav: I'll make sure you have it.

Sowmya: That would be awesome.

Yoav: I'll make sure. I'll push for it.

Cody: That solves from now until May until we're live on the new site. I'm not rebuilding this calculator as-is on the new platform; I think we need to decide whether it's worth the investment. I'll talk to Spencer; it's not a big deal. Is it an opportunity to talk to a rep and use the SF calculator?

Sowmya: I think that's valid. We have a plan. We'll get you the two versions of the APIs and let's go ahead with publishing the new calculator that Weaver has worked on. Scott K, we'll get you the version. Can we get a subscription-level load?

Scott K: The data team is giving me that now; it just doesn't have the flag for new/old pricing.

Sowmya: Who on the data team specifically?

Scott K: Roy Gershtein

Sowmya: That's someone you'll have to talk to. Have Yaacov and Roy talk to each other to see if the parameter for version can become part of the subscription-level data.

Scott K: Sowmya, not sure if you know, from the salesperson's perspective, do they know when they're pricing if they need to use old/new pricing?

Sowmya: Not always.

Scott K: It's usually the SA's that use the calculator. If they don't know what the right answer is, it's not as effective.

Sowmya: When Ernie talked to us, they said: they don't know, they're just taking the existing...

Scott K: Ernie's situation is specific. The SAs don't want to be involved in that. The non-SAs would not interact with the calculator to build an offer from scratch. If the only person doing that is the SA--

Sowmya: It's only that island of users. Everyone else building from scratch would use that calculator.

Yoav: Can I ask for one favor: can someone send me the two lines I need?

Scott K: I need the information about new/old pricing flag. Cody/Scott need an endpoint for old pricing. I need that same endpoint.

Sowmya: I think we have a plan. We'll check the long-term viability of maintaining the old pricing calculator.

Yoav: Today we only have two. What would happen if we have 2, 3, 4, etc.?
