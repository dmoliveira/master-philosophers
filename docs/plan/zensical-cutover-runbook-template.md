# Zensical Cutover Runbook Template

Use this runbook during the migration cutover window.

## Run metadata

- Date:
- Run owner:
- Migration PR:
- Rollback owner:
- Communication channel:

Communication template: `docs/templates/zensical-cutover-communication-template.md`.

## Phase 1 - Pre-cutover checks

- [ ] Preflight checklist completed.
- [ ] Latest preview and validation checks are green.
- [ ] Decision log approved for cutover.
- [ ] Rollback instructions verified.

## Phase 2 - Cutover execution

1. Merge migration PR.
2. Confirm deploy workflow starts.
3. Confirm deploy workflow succeeds.
4. Verify live docs URL availability.

## Phase 3 - Post-cutover verification

- [ ] Home page loads.
- [ ] Core navigation routes load.
- [ ] Search works on key terms.
- [ ] Key docs links resolve.
- [ ] Mobile navigation remains usable.

Detailed verification template: `docs/plan/zensical-post-cutover-verification-checklist.md`.

## Phase 4 - Rollback decision gate

- [ ] Critical issues present? yes/no
- [ ] Rollback triggered? yes/no
- [ ] If rollback: record reason and timestamp.

If rollback is triggered, run: `docs/plan/zensical-rollback-verification-checklist.md`.

## Incident notes

-

## Final status

- [ ] Cutover successful
- [ ] Rollback executed
- [ ] Follow-up action items logged

Postmortem template: `docs/templates/zensical-migration-postmortem-template.md`.
Lessons index: `docs/plan/zensical-migration-lessons-learned-index.md`.
Risk register: `docs/templates/zensical-migration-risk-register-template.md`.
Dependency checklist: `docs/templates/zensical-migration-dependency-checklist.md`.
Metrics template: `docs/templates/zensical-migration-metrics-tracking-template.md`.
KPI summary template: `docs/templates/zensical-migration-kpi-summary-template.md`.
Issue triage template: `docs/templates/zensical-migration-issue-triage-template.md`.
