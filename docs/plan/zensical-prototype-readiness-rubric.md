# Zensical Prototype Readiness Scoring Rubric

Use this rubric to score migration readiness before opening a cutover PR.

## Scoring model

- Score each category from 0 to 5.
- Multiply by weight.
- Sum weighted scores for total readiness score.
- Cutover threshold recommendation: **>= 80/100**.

| Category | Weight | Score (0-5) | Weighted score |
|---|---:|---:|---:|
| Navigation parity | 20 |  |  |
| Link and route parity | 20 |  |  |
| Rendering parity | 15 |  |  |
| Workflow stability | 15 |  |  |
| Review coverage | 15 |  |  |
| Rollback safety | 15 |  |  |

## Category guidance

- **Navigation parity:** core sections and routes match production IA.
- **Link and route parity:** no broken links on required pages.
- **Rendering parity:** headings, lists, tables, and code blocks are intact.
- **Workflow stability:** preview runs and validation commands pass repeatedly.
- **Review coverage:** review report and handoff checklist are current.
- **Rollback safety:** rollback path is documented and recently validated.

## Decision bands

- **90-100:** ready for migration PR.
- **80-89:** conditionally ready; close remaining medium gaps.
- **60-79:** continue prototype work; do not cut over.
- **0-59:** blocked; remediate major issues first.
