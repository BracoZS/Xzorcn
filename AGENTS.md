# xzorcn

A web version of shadcn built for Xzor.

## On session start

1. Read `.agents/STATUS.md`. Always: it is short and says where we left off.
2. Read only what the task needs, using this table.
3. Never read `.agents/LOG.md` in full. If you need history, read only the last 20 lines.

| You need | Read |
|---|---|
| To work on a feature | `.agents/specs/<feature>.md` (use `_TEMPLATE.md` for new specs) |
| To write code or run commands | `.agents/STACK.md` |
| To know what is in or out of the project | `.agents/PROJECT.md` |
| To see the goal and what comes next | `.agents/ROADMAP.md` |
| To propose an architecture or stack change | `.agents/DECISIONS.md` |

## Working rules

- Work only on the current focus (`← CURRENT` in `ROADMAP.md`). Anything under Next, Later or "Do not touch yet" in `STATUS.md` is not implemented, even if it looks easy.
- One task per session. If something out of scope comes up, note it under "Next" in `STATUS.md` and keep going with the current task.
- If information is missing to decide, ask; do not assume.
- Ask before making architecture, stack or scope decisions, and record them in `.agents/DECISIONS.md` with their reason.
- Write documentation, code, and comments in English; converse with the user in Spanish.
- Never write secrets (keys, tokens, passwords) in these files.

## Saving state and closing a session

Do **not** update `.agents/` after small edits, tweaks, or ongoing iterations.

Update `.agents/` only when:
- The user says "close session" / "save state".
- Right before a commit (when the user asks to commit).
- The current focus (or a `Done when` criterion in `ROADMAP.md` / active spec) is completed.
- You are switching to a different task.

If substantial progress was made but the user may still iterate, do not write yet—ask in one line: "Update `.agents/`?"

When updating:

1. Overwrite `.agents/STATUS.md` with the real state (40 lines max).
2. Append an entry to the end of `.agents/LOG.md`.
3. If decisions were made, append them to `.agents/DECISIONS.md`.
4. If the user ruled something out, add it to "Out of scope" in `.agents/PROJECT.md`.
5. In `.agents/ROADMAP.md`, tick what is completed; if the current focus is done, move the first item from Next into Current focus.
6. Reply with a 3-line summary only.
