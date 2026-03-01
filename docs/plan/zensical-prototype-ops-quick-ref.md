# Zensical Prototype Ops Quick Reference

Date: 2026-03-01

Use this as a fast runbook for daily prototype operations.

## Branch operations

```bash
git checkout main
git pull --rebase
git checkout -b zensical-prototype
git push -u origin zensical-prototype
```

## Trigger preview workflow

```bash
gh workflow run "Zensical Prototype Preview" --ref zensical-prototype
```

## Check latest runs

```bash
gh run list --workflow "Zensical Prototype Preview" --branch zensical-prototype --limit 5
```

## Inspect one run

```bash
gh run view <run-id> --json status,conclusion,url
```

## Required validation commands

```bash
make docs-check
make docs-site-check
```

## Record evidence

- Append each run result to `docs/plan/zensical-prototype-preview-log.md`.
- Keep branch and run URLs in the task/PR summary.
