# Zensical Migration Quality Gate Template

Use this template to enforce quality thresholds before advancing migration work.

## Quality gates

| Gate | Metric | Threshold | Evidence | Status |
|---|---|---|---|---|
| Docs lint quality | markdownlint errors | 0 |  | pass/fail |
| Link integrity | broken links | 0 |  | pass/fail |
| Build reliability | docs site build | success |  | pass/fail |
| Review quality | blocking findings | 0 blockers |  | pass/fail |
| Readiness completeness | required checklists | 100% complete |  | pass/fail |

## Gate decision

- [ ] Approved to proceed
- [ ] Hold and remediate
