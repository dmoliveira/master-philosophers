# Zensical Migration Command Cheat Sheet

Use these commands for daily migration operations.

## Branch setup

```bash
git checkout main
git pull --rebase
git checkout -b zensical-prototype
git push -u origin zensical-prototype
```

## Validation commands

```bash
make docs-check
make docs-site-check
```

## Preview workflow commands

```bash
gh workflow run "Zensical Prototype Preview" --ref zensical-prototype
gh run list --workflow "Zensical Prototype Preview" --branch zensical-prototype --limit 5
gh run view <run-id> --json status,conclusion,url
```

## Pull request commands

```bash
gh api repos/dmoliveira/master-philosophers/pulls -f title='...' -f head='...' -f base='main' -f body='...'
gh pr merge <pr-number> --merge --delete-branch
gh pr view <pr-number> --json state,mergedAt,url
```

## Post-merge sync

```bash
git checkout main
git pull --rebase
git worktree remove ../<worktree-name>
git branch -d <branch-name>
```
