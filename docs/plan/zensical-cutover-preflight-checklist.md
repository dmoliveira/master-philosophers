# Zensical Cutover Preflight Checklist

Use this checklist immediately before opening or merging a migration cutover PR.

## 1) Preconditions

- [ ] Parity checklist is complete.
- [ ] Config migration checklist is complete.
- [ ] Readiness rubric score is >= 80/100.
- [ ] Decision log is signed with "Proceed to migration PR".

## 2) Validation gates

- [ ] `make docs-check` passes on latest branch head.
- [ ] `make docs-site-check` passes on latest branch head.
- [ ] Latest preview workflow run is green.
- [ ] No unresolved high-severity review findings.

## 3) Operational safety

- [ ] Rollback path is documented and tested.
- [ ] Production pages workflow change is reviewed.
- [ ] Branch protection checks are passing.
- [ ] Stakeholders/reviewers acknowledged cutover window.

## 4) Launch checklist

- [ ] Migration PR summary includes evidence links.
- [ ] Post-merge monitoring plan is documented.
- [ ] Post-merge verification owner is assigned.
- [ ] First rollback decision checkpoint time is defined.

Stakeholder signoff template: `docs/templates/zensical-migration-stakeholder-signoff-template.md`.
