# Zensical Prototype Execution Plan

Date: 2026-03-01

This plan defines exactly how to run a safe prototype branch for Zensical
without disrupting the current production docs site.

## Scope

- Prototype only; no production cutover in this task.
- Keep the current MkDocs Material site as the live path.
- Validate parity using `docs/plan/zensical-prototype-parity-checklist.md`.

## Branch and workflow setup

1. Create branch: `zensical-prototype`.
2. Keep all prototype-specific config in that branch only.
3. Add a separate preview workflow (do not replace current Pages workflow yet).
4. Publish preview artifact and URL for review.

Detailed bootstrap sequence: `docs/plan/zensical-prototype-bootstrap-plan.md`.
Preview workflow scaffold: `.github/workflows/zensical-preview.yml`.

## Implementation checklist

- [ ] Mirror top-level information architecture from current nav.
- [ ] Port core pages first: Home, How to Use This Site, Authors, Books,
      Study Plans, Progression Paths.
- [ ] Port high-traffic resources and template pages.
- [ ] Recreate automatic next-step navigation behavior.
- [ ] Validate timeline/media assets load correctly.

## Validation gates

- [ ] `make docs-check` passes.
- [ ] Prototype build command passes in CI.
- [ ] No broken internal links in preview output.
- [ ] Mobile layout is readable on key pages.
- [ ] Parity checklist is fully complete.
- [ ] Config checklist is complete (`docs/plan/zensical-config-migration-checklist.md`).

## Rollout decision gate

Move to cutover planning only when all validation gates are green and at least
one full review pass confirms no onboarding regressions.

## Evidence log

- Track each preview run in `docs/plan/zensical-prototype-preview-log.md`.
- Use `docs/plan/zensical-prototype-ops-quick-ref.md` for routine execution commands.
- Use `docs/templates/zensical-prototype-review-report.md` for each review pass.
- Use `docs/plan/zensical-prototype-status-dashboard.md` for current readiness state.
