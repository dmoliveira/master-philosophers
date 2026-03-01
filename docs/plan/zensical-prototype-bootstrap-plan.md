# Zensical Prototype Bootstrap Plan

Date: 2026-03-01

This plan bootstraps a safe prototype branch with preview deployment, while the
current production docs pipeline stays unchanged.

## Goal

- Create a reviewable Zensical prototype branch.
- Publish preview output without replacing current Pages production workflow.
- Preserve rollback safety at every step.

## Bootstrap steps

1. Create branch `zensical-prototype` from `main`.
2. Add prototype config and build command under `docs/plan` references.
3. Add a preview workflow triggered by pushes to `zensical-prototype`.
4. Upload preview artifact for review comments and parity checks.
5. Run parity checklist before any cutover discussion.

Workflow scaffold path: `.github/workflows/zensical-preview.yml`.

## Preview workflow requirements

- Trigger: `push` and `workflow_dispatch` on `zensical-prototype`.
- Build job must fail on broken links or invalid pages.
- Artifact retention should be at least 7 days for review.
- Workflow must not publish to production Pages target.

## Safety controls

- Keep existing `pages.yml` untouched during prototype phase.
- Keep `main` as the source of production documentation.
- Require parity checklist completion before proposing migration PR.

## Hand-off outputs

- Prototype branch URL.
- Latest successful preview run URL.
- Completed parity checklist reference.
