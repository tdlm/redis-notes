---
type: meeting
title: "RU Billing > Stripe > Data Warehouse > SFDC"
date: 2025-09-11
participants: [Sallie Gamboa, Kousik Lanka, Owais, Roiy Gershtein]
tags: [billing, stripe, data-warehouse, salesforce, redis-university]
---

# RU Billing > Stripe > Data Warehouse > SFDC

## Summary

Team aligned on monetizing Redis University (certs, labs, live training) via RU/Flockjay → Stripe Checkout (Web to build), passing SMID/Cloud ID, with Stripe as transactional source of truth, SFDC for customer context, NetSuite as finance system of record, and Data Warehouse for reporting only. They debated paths (Stripe→SFDC→NetSuite vs. Stripe→NetSuite→SFDC) and a DW-webhook option but cautioned DW isn't transactional; concerns include Cloud ID/SFDC sync delays, one-to-many user↔course mapping, and over-engineering for small revenue. Consensus leans toward a finance-aligned flow, ensuring payloads carry SMID, user details, product, and price. Next steps: loop in Systems Architect Jeff Hirsch, Billing, and Finance (Mahesh, Yoav), define SFDC data model and webhook contract, and let Web proceed now with Stripe product catalog and checkout while the final integration order is decided.

## Discussion

Goal: Charge customers for certs in Redis University
Goal: Charge for labs and live training

People who aren't already customers.

Business reason: One, get business rev back. Two, it adds value and perceived value to the certification and gives it more credibility.

Paying through Stripe. The goal is to have users in Redis University (Flockjay) go to a Stripe checkout flow (Scott and web development team will help with). The question is how we get that system of record in SalesForce. The question is do we go direct to SalesForce or go to the DB, enrich the SMID and then send to SalesForce.

[Sallie puts up a diagram]
Kousik: Stripe has a web hook, which it can expose, which we can consume in the Data Warehouse. Stripe can also call our Data Warehouse.
Owais: Is there a reason we wouldn't go directly to SF?
Kousik: We don't maintain that system.
Owais: What details would the webhook give us?
Kousik: Product information and pricing (courses they've signed up for and the price).
Owais: And then the SMID?
Kousik: It will be present as part of the database.
Sallie: Yes, we'll get the SMID from Flockjay and then I'm assuming Stripe will be able to pass it along.
Roiy: Everyone can sign into the university without a Redis account.
Sallie: Yes, but when they create a Cloud Account, it gets created in SF today. They have to log in through Cloud. That's our SSO.
Roiy: It's probably possible to send the whole payload together — the SMID, the name, the pricing, etc.
Sallie: Right, we just haven't built this (Redis.io checkout) yet. I just wanted to clarify the flow of information.
Owais: There's no ability for Flockjay to store this direct from Stripe?
Sallie: Yes, Flockjay will hold the information but we thought it was important to hold that info in SF as well — to make sure there's another system of record besides Flockjay. They're still building this out as well, so it's new for everyone.
Kousik: Are these core sign-ups part of the Cloud itself? The Cloud accounts are the ones going to do the sign-up?
Sallie: Stripe checkout is faster.
Kousik: In SalesForce, we do have integration right now with SM. When that integration is up and when we're bringing these courses into SM, should we add the courses / products that we have, the payments in, etc., as part of the same data structure as part of the Cloud accounts or should it be independent?
Sallie: What if it's a software customer who creates an SMID just for logging in to support portal and Redis University, and the billing goes to their SMID; is that in any way a problem for that customer?
Kousik: It should not be.
Sallie: Maybe there'd be a problem on the reporting end? But it's still possible to know the courses someone has purchased.
Owais: Many users have different courses going on and it's a one-to-many relationship — otherwise how would you know which user has paid for a course?
Kousik: That's what I'm trying to understand. Do we need to map for Cloud Account or Cloud Contact that we have to map this to?
Owais: Yes, we need to do a brain storming there. If you have Cloud Contact ID for all of the contacts that might take this course, then it sort of makes sense; at the end of the day, contact is an individual person. Cloud ID can be multiple contacts. If we are saying we already have SM Cloud ID, does it then make sense to have that payment information directly joined based on that Cloud ID into the SF and maybe not include the Data Warehouse?
Kousik: Yes, we can directly call, but the source of truth for this account is the SM integration. There's a 24 hour delay for Cloud Account syncs. If there's a course sign-up, there could be a discrepancy.
Sallie: What if someone signs up for a Cloud Account, immediately purchases a course.
Kousik: I don't think the SM integration is available today from the Data Warehouse.
Sallie: The Cloud ID might not be in SF. You're trying to add this enrichment to it, and it's not there, so it's better to put it in Data Warehouse.
Owais: Your payment information should live in an operational system, like Flockjay. All the current status should remain there. We are helping in storing that data somewhere else but we can't use the Data Warehouse as a transactional system.
Sallie: Everything would be in Stripe and Stripe would be the source of truth.
Owais: I'd only bring in data warehouse for reporting. Payment information should not be in data warehouse.
Kousik: I think that makes sense; it's not a transaction system. We'll use it for reporting and historical data. Also, Sallie, there's this payment information we have in Stripe, why are we trying to pull it to a different system?
Sallie: I don't know that we have a way of reporting easily from Stripe, connected to the user record and everything like that. Ideally, I'd be able to go in and say we had this many accounts purchase this course and because of the SMID, I can now easily link it to X company and people who purchased this course across X company and there's Y (e.g. 30) of them. Connecting it to customer information is key. I don't think that Stripe comes into our system in that way today so it needs to be housed somewhere.
Roiy: There's a lot of use cases for this to be in Data Warehouse. Any transaction in Stripe will go into NetSuite and we need to figure it out with Finance. We need to know revenue.
Owais: NetSuite being our Finance ERP for the company. If we have it there, we can pull it from that system, rather than going directly to Stripe and creating another integration.
Roiy: We want more granular data and this can be daily/hourly data. Did you talk to the billing team?
Sallie: Yes. From here, you want to know what record systems we need.
Kousik: We're talking about SF and NetSuite integration. If you're doing it from Stripe, then it would not be ideal. We need to start from Stripe, then go to SF and NetSuite.
Roiy: What will generate the invoice?
Kousik: NetSuite generates invoice and captures the payment normally. Stripe is the thing doing that now in this account process. The payment would have been completed there and there's an invoice and there's a bill that's after the fact of payment and that needs to be captured as a system of record in SF and then sent to NetSuite for book keeping.
Owais: Should we have Jeff Hirsch involved in this conversation since we have multiple systems here? He's our System Architect; he needs to understand what's going on and what we're proposing.
Roiy: Especially since it's payments and money and we want to make sure the information flows into the right places. Finance is important here. NetSuite should get the information first. If there's any issue in the Data Warehouse, you could have failures.
Owais: Stripe → SF → NetSuite → And from there we can pull it. We need to talk to other billing team and other folks as well to see if there are challenges there. Web hooks should work.
Sallie: My concern is we are talking very small amounts of revenue here and I feel like it's becoming so complicated for just for a few transactions a year. I can bring in the Billing Team, but I don't even know if Finance will care at all.
Owais: As long as we hear that, we should be good with either approach.
Roiy: If we're going to calculate the revenue, we'll get it from NetSuite only. It should go to Mehesh (FPNA) and Yoav.

Sallie and I discussed whether Web would be blocked from starting on populating products and setting up the checkout in Stripe. I confirmed the only thing we'd be waiting on is the final hand-off and integration since that's still up in the air.
