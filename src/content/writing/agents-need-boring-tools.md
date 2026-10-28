---
title: Agents need boring tools
description: The best tool you can give an AI agent is the same one you'd give a new hire on day one.
date: 2026-03-14
---

Every few weeks someone shows me an agent with forty custom tools. Each one is a
thin wrapper around an API, with a clever name and a paragraph of description
the model has to read before every call. The agent is slow, it picks the wrong
tool a third of the time, and nobody can tell why.

The agents I trust look different. They get a shell, a file system, and a
handful of commands that already exist: `git`, `grep`, `curl`, a test runner.

## Why boring wins

Models have read a staggering amount of shell transcripts. They know what
`git diff --stat` prints. They know `grep -rn` returns `file:line:match`. When
you hand them a tool they have seen a million times, you get the benefit of
all that training for free.

A bespoke `search_codebase(query, scope, mode)` tool gets none of it. The model
has to learn your semantics from a docstring, in context, every single run.

## Make the output parseable

The second thing that matters is what the tool prints. Agents read output the
way people skim logs: top first, looking for the line that matters. So:

- keep the default output short,
- put the important number first,
- fail loudly with a non-zero exit code and a one-line reason.

That last one is the whole reason I wrote [branchmaid](/projects/) the way I
did. It prints exactly what it is about to delete and exits non-zero if
anything looks off. A person can read that. So can an agent.

## The rule I use

Before I write a new tool for an agent, I ask: would I give this to a new
teammate on their first day? If the answer is "no, I'd just tell them to use
git", then that's what the agent gets too.
