---
title: I started counting tokens and stopped guessing
description: What a month of per-project token logs taught me about where agent spend actually goes.
date: 2026-06-02
---

For a while my answer to "how much do your agents cost?" was a shrug and a
number off the billing page. The number was real. It just didn't tell me
anything I could act on.

So I wrote [tokentally](/projects/), a small Python CLI that reads usage logs
and breaks spend down by model, by project and by day. A month later, here is
what the numbers said.

## Most tokens are input, not output

I expected long generations to dominate. They didn't. Roughly four out of
every five tokens I paid for were *input*: the system prompt, tool schemas,
and the same files being re-read turn after turn.

The fix was unglamorous. Shorter system prompts, fewer tools (see
[boring tools](/writing/agents-need-boring-tools/)), and caching anything that
does not change between turns.

## One project was most of the bill

A single long-running refactor agent accounted for more than half the month.
It wasn't doing anything wrong. It was doing a lot, in a loop, with a big
context. Seeing it as one line in a table made it obvious which job deserved a
cheaper model for the easy steps.

## Daily views catch regressions

The per-day view turned out to be the most useful. A prompt change that
doubled the context showed up as a step in the chart the next morning, long
before it would have shown up on an invoice.

## Takeaway

You don't need a dashboard product to get this. You need the usage numbers
your provider already returns, written somewhere you can group by. Start
counting before you start optimizing.
