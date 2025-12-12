---
type: meeting
title: "Software Download Tagging"
date: 2025-03-07
participants: [Zack, Ian, Scott Weaver]
tags: [software-downloads, tagging, marketo, utm, try-free]
---

# Software Download Tagging

## Action Items

- Get names from Ian
- Scott will do research to see what the hand-off might look like

## Discussion

Zack, Ian, Scott

Ian: Regular meeting between Sales Systems Operations Team. Cody says let's get a plan together to solve the software tagging thing. Let's get something together. I have a fun app.diagrams.net.

We go from Redis Software → Download center → SSO Sign in

We want to remove these people from our flows.

Zach: This form is not a Marketo form but it will submit to Marketo.

Ian: Try Free form gets submitted and it goes to Marketo and SM. The long term solution

[Try Free] -> [SM] -> [Data Warehouse] -> [SalesForce] ↔ [Marketo]
-------------------------------------------------^

Try Free Sign-in Flow

https://www.mermaidchart.com/raw/97ac8918-fd64-4187-afe4-41326147cb69?theme=light&version=v0.1&format=svg

Who can we hand him off to?

Zack: This was built so long ago; I don't think anyone actively manages it. It does work.

Are we doing this for Try Free or Software Downloads or both?

Ian: We're okay with Try Free; Software Downloads makes you sign up for a cloud account. It's redirecting you to the cloud.redis.io page and if you don't have an account, you have to sign up from there.

1. Create a duplicate try free page with hidden fields
2.

Ian: Does it have to be passed to Marketo or?

Zack: It would take more engineering work rather than just passing the data to Marketo. They would be associated through their contact. I'd create a SalesForce campaign. When a form is submitted, the hidden form would submit those fields and inform me what campaign to assign them to. You can click on that contact. You will also see an associated cloud contact based on how they download our software. You can download the redis software without signing up. If you do that, we wouldn't see any cloud contacts, cloud subscriptions, etc.

Ian: This is why the campaign member thing gives me pause.

Zack: Isn't that good though? Then you can delineate.

Ian: What about all the people signing up regularly?

Zack: We can create a report to say you're a member of that campaign but have a Cloud account. We can do a with or without a cloud account. We don't know when you download the software. We don't see who's downloading and not doing anything.

Ian: We want to tag those people and remove them from the flow. Create some tagging system to say if you're here from downloads, we don't want to see you in our sign-up funnel.

Zack: Why wouldn't the campaign tag work?

Ian: If the tag isn't created or associated for some reason. Why would we go through Marketo, SFDC vs SM to DWH?

Zack: Right.

Ian: Is this too narrow of a path?

Zack: It simplifies it a bit. We could make this really simple: have a script that runs on the page that we create or the one we have to do internal UTMs to say you came from the software page and if you fill out the form with those UTMs, those get passed to SM and the Data Warehouse and then you exclude anybody with those utms. Is that a bad practice? We can just do a hidden field. If you fill out the duplicate form, the hidden fields have some values that get excluded from your funnel. You don't need my help then.

Ian: The internal UTMs is pretty simple. I'm creating a link and then talking to Daryl (?).

Zack: If somebody goes to that page from somewhere else, we want to capture it. The hidden field accomplishes that, I think. It's a matter of working with somebody. We could use a Marketo form with hidden fields; we just don't need it. Adrian would need to work with the Data Engineer to make sure hidden field values get passed off to SM, then tagged in DWH.

Ian: First, we need to understand is the field itself (the try free page itself -- what's going on, how the hand-off happens).

Zack: Good to know so you can replicate it.

Ian: Yes, so when we replicate it, it actually works. Let's understand handoff to SM to duplicate try free form. If we were doing it the other way around, it would be a duplicate try-free page and flip it -- right now it takes you to the sign up page if you don't have an account -- we'd do ti the other way around, we'd take you to try-free and if you do have an account. For tagging purposes, the tagging would exist on this page, right?

Zack: I think we have to create a duplicate of the page with a slightly different URL to have a different URL.

Scott: We could add a non-UTM parameter.

Zack: You could literally do redis.io/try-free/#software-download

Scott: What's the priority on this?

Ian: Cody wants something done in the next week. This is going to have to be our long-term plan. Short-term, we'll do internal utm referrers.
