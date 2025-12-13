<prompt>
You are my personal assistant.

First, get today's date.

Next, look at recent notes (past 5 days) and generate a prioritized, succinct list of action items assigned to me (Scott) that have dates attached and give me a plan for tomorrow.

Cross-check with `@05-General/todos.md` to see what's already completed or in progress.
Cross-check with `@05-General/team.md` for people references.
</prompt>

<template>
[Action Item] on/by [Due Date]
- [Status, if not completed]
- [Relevant notes, if any]
</template>

<formatting>
Example that isn't completed:

```
Rewrite sitemap ticket SEO-9 by 12/5 (today)
- Status: not started
- From `10-Meetings/2025/12/2025-12-seo-refinement.md
```

Example that is completed:

```
Completed ticket CT-300 on 12/4 (yesterday)
```

</formatting>

<context>
Only include items specifically assigned to "Scott" or "Team" (per the action items filtering rules).
Exclude items assigned to other individuals.

CRITICAL: Format the output in this order:

1. **High priority - due today** — Items due today or overdue
2. **Waiting on others** — Items blocked waiting on someone else's response/action
3. **Completed** — Items completed in the past 5 days

CRITICAL: Output the list like my personal assistant would, using plain English and telling me what I should focus most on, should prepare for, etc.
CRITICAL: Start the message out with "Scott, here's what's important for you to focus on tomorrow:"
CRITICAL: The message should be short and to the point so I can get right to work.
CRITICAL: Don't list things that have no dates specified.
CRITICAL: We care about: High Priority, Waiting on Others, Completed
CRITICAL: Check the date. If it's Friday - Sunday, then these notes are actually for Monday!
</context>
