---
title: Keep the agent loop small
description: Short tasks, real checks and a human at the seams beat one heroic autonomous run.
date: 2026-09-21
---

The demo version of an AI agent runs for an hour and opens a pull request. The
version I actually use runs for a few minutes, does one thing, and stops.

## One task, one check

Each loop gets a single, verifiable goal: make this test pass, rename this
symbol, update this config. And every goal ends with a check the agent can't
talk its way around: a test run, a type check, a build.

If there is no check, the agent will tell you it's done. It will sound sure.
That's not the same as being done.

## Humans at the seams

I stay in the loop at the boundaries, not in the middle. I read the plan
before it starts and the diff after it ends. Everything between is the
agent's.

This turns out to be much less tiring than watching every step, and much
safer than reading a 2,000-line diff at the end of a long run.

## Small loops compose

Five small loops, each checked, get further than one big loop that drifts at
step three and keeps going. When a small loop fails it fails cheaply, and the
next one starts from a known-good state.

It's the same advice we give people: small commits, run the tests, ask for
review early. Agents just make the cost of ignoring it show up faster.
