# LangCache Calculator Blank Email Issue

## Monday, November 10, 2025

**Keith Nyberg** - 10:42 AM
hey y'all - seems we are having issues with the langcache calculator passing null values again... :disappointed: sorry this is annoying but hoping we can get some support. happy to file a bug ticket too.

2 files
- Screenshot 2025-11-10 at 10.41.46.png
- Screenshot 2025-11-10 at 10.42.39.png

**Scott Weaver** - 10:49 AM
@keith This is for "Email results" ?

**Scott Weaver** - 10:50 AM
Any steps to reproduce? It seems to be working for me (edited)

**Keith Nyberg** - 10:54 AM
katie and my tests both failed

**Keith Nyberg** - 10:55 AM
i can see that yours works for some reason... :hmmmm:

**Keith Nyberg** - 10:56 AM
not sure why this would sporadically work/not...

**Scott Weaver** - 10:56 AM
Could be browser, extensions, certain steps, that kind of thing

**Keith Nyberg** - 11:00 AM
i'm in chrome. navigating to the page. changing the values a bit and smashing calculate. adding my email address. :disappointed:

**Keith Nyberg** - 11:00 AM
i'll ask a few other team mates to test

**Scott Weaver** - 11:00 AM
And any ad blocker to speak of?

**Keith Nyberg** - 11:00 AM
not that im aware of but maybe hidden in chrome somewhere?

**Keith Nyberg** - 11:08 AM
confirming other users are having this issue as well.
- Screenshot 2025-11-10 at 11.08.28.png

**Scott Weaver** - 11:09 AM
Testing with Chrome

**Scott Weaver** - 11:10 AM
So far, I'm only seeing positives, even after messing with the data
:shrug:

## Tuesday, November 11, 2025

**Keith Nyberg** - 8:57 AM
@scott.weaver so i tested today in my primary chrome profile (fail) and again in my personal chrome profile (fail). I then tested using Safari which worked so i suspect this has something to do with Chrome ad blockers as you mentioned. knowing that chrome is a very heavily used browser, i think we should still work to debug this to ensure durability. any chance you're game to hop on a call to debug from my browser today?

**Scott Weaver** - 10:36 AM
Hey @keith, thanks for getting back on the details.
I'm out today so I'll do more testing and maybe we can set something up for tomorrow

**Keith Nyberg** - 10:39 AM
yeah no worries. i assume most people are for the holiday

## Monday, November 24, 2025

**Katie Dunn** - 3:12 AM
hey squad, wanted to check in on this and see if we ever found a fix?

**Scott Weaver** - 9:00 AM
No, not yet, but I was able to reproduce it

**Scott Weaver** - 9:00 AM
Now looking into adding more debugging

**Scott Weaver** - 10:16 AM
@keith Please give it a test here: https://redis-sanity-proxied-git-fix-langcache-e-94ad48-redis-marketing.vercel.app/calculator/langcache/

**Keith Nyberg** - 10:26 AM
that worked for me

