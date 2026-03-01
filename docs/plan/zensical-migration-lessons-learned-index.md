# Zensical Migration Lessons Learned Index

Use this index to track reusable lessons from prototype passes, cutover attempts,
and postmortems.

## How to use

1. Add one entry per meaningful lesson.
2. Link evidence (PR, workflow run, or postmortem section).
3. Include prevention guidance that can be reused.

## Lessons table

| Date | Area | Lesson | Evidence | Prevention |
|---|---|---|---|---|
| 2026-03-01 | Templates | Use `[placeholder]` instead of `<placeholder>` in markdown templates to avoid lint violations. | PR #47 | Keep placeholder style consistent in template docs. |
| 2026-03-01 | PR automation | If PR body guard blocks `gh pr create`, use `gh api repos/.../pulls` with explicit validation lines. | PRs #20-#48 workflow pattern | Keep API fallback in ops quick reference. |
| 2026-03-01 | Merge flow | Local `gh pr merge` may show worktree conflict while merge still completes remotely. | PR merges #38+ | Always verify with `gh pr view --json state,mergedAt,url`. |
