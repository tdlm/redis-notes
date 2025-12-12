---
type: meeting
title: "Stripe Integration with FJ/Redis.io Checkout"
date: 2025-05-28
participants:
  [Sallie Gamboa, Dianna Hosford, Yoav Har-Esh, Cody Henshaw, Scott Weaver]
tags: [stripe, flockjay, checkout, redis-university, orb]
---

# Stripe Integration with FJ/Redis.io Checkout

## Topics

- FlockJay: want a way for users to purchase a course/exam/lab (unit of learning)
- Since we have Stripe internally, we want to leverage this
- FlockJay will build an integration with Stripe
- You go to the course, you see a button 'Purchase' and then it brings you to an interface where you can enter your credit card, then send an API request back to Flockjay to grant access to the course
- Chris wanted to explore in-Cloud considering you guys are moving to a new tool called Orb
- So that's one option: we send them back to the Cloud after they enter their CC info
- The other option (why we're here): build an interface in the .io experience with credit card flow, the SKU you've selected
- Yoav: with Orb, it will take more time. We won't be able to make September. This is why I mentioned the redis.io option because it will be much quicker.
- If we go down the redis.io path, what requirements do we need
- Goal: September/October timeframe, because that's when we want our certification available. The opportunity to offer live public training and purchase that right there.
- Cody: I may have misunderstood the first part; FlockJay ..
- Sallie: The main integration would be the API call from FlockJay to our Stripe instance to say they selected X course. I don't think you'd want to be brought to a menu with the selected course with the checkout flow.
- How many courses at a time? One at a time.
  - Sallie: The most logical flow is that you click purchase.
- Live items time limit?
  - Sallie: If the course has seats available.
- Cody: To me, FlockJay shouldn't even do anything with the Stripe integration. That should be on our side. We need to figure out how to enrich the SM profile with the courses you've purchased on the university. It would be nice to be able to see in SalesForce that they've bought these 3 courses. It wouldn't be a Stripe integration on their side; it would be our SM profile syncing with them. I'm not familiar with exactly those profiles can be enriched (Okta?) but it sounds like it would be the most scalable thing for us. We've talked about a longer term that would use a redis login for Redis University tied to Cloud. I see a property on your user object that has all your courses you've paid for.
- Dianna: I think that's how we did it before. Harder to scale if someone wants to purchase for their entire company, for example.
- Sallie: That's another use case (on a PO, purchase training for 30 employees, for example). For this, we'd have coupons, and they'd be able to give them access that way. If we do it on the SM profile, you have the option to train on objects.
- Dianna: I think we start small and give individuals access.
- Cody: I'm worried if we do it on our side via a request to Flockjay, the only place we're tracking which courses people have access to is on their side; we won't know.
- Sallie: When we say the SM profile, what is that?
- Cody: That's their cloud profile that syncs to Salesforce.
- Sallie: The Orb experience could, potentially, be the easiest way to make that happen?
- Yoav: In this case, Orb will not help you other than making sure we charge them and put it on an invoice (using Stripe) maybe. That's what will help you. Go to Flockjay, unlock the courses in Flockjay (etc), we'll need to do that because Orb doesn't have anything like that.
- Sallie: But it would be connected to their profile.
- Yoav: Yes, it will be connected to their SM account eventually. For context, today we're doing all the billing from SM (SM
