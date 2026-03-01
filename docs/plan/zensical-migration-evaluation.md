# Zensical Migration Evaluation

Date: 2026-03-01

## Context

Our current docs site runs on MkDocs Material and deploys to GitHub Pages.

Recent upstream messaging indicates a transition toward Zensical and highlights
compatibility pressure around MkDocs 2.0.

## Current baseline (working)

- Site build and deployment are stable.
- Local checks pass with:
  - `make docs-check`
  - `make docs-site-check`
- Pages deployment workflow is green.

## Risk snapshot

- **Toolchain risk:** future MkDocs/Material compatibility drift.
- **Migration risk:** nav, markdown features, and custom footer JS/CSS behavior may differ.
- **Operational risk:** switching generators without parity checks can break links or UX.

## Recommendation

Use a phased migration path instead of an immediate cutover.

1. Keep current production site on MkDocs Material for now.
2. Build a Zensical prototype branch with the same top-level IA.
3. Run parity checks (nav coverage, links, page count, key routes).
4. Cut over only when parity is verified and deployment is stable.

## Phase plan

### Phase 0 - Stay stable (now)

- Keep Pages workflow unchanged.
- Keep docs-site validation in CI/local routines.

### Phase 1 - Prototype

- Create `zensical-prototype` branch.
- Mirror current nav and core pages.
- Validate custom footer behavior or provide equivalent native feature.

### Phase 2 - Parity gate

- Verify top-level nav sections match current site.
- Verify all README-linked pages are reachable.
- Verify timeline, onboarding, and template routes work.
- Track completion with `docs/plan/zensical-prototype-parity-checklist.md`.

### Phase 3 - Cutover

- Switch deploy workflow to Zensical build.
- Monitor first deploy and link checks.
- Keep rollback path to MkDocs workflow for one release cycle.

## Decision

- **Decision now:** defer cutover; proceed with prototype and parity gate.
- **Exit criteria for migration:** equivalent navigation, no broken links, successful
  deployment, and no regression in onboarding flow.
