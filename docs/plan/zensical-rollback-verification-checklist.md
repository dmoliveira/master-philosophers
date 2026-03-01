# Zensical Rollback Verification Checklist

Use this checklist after a rollback to confirm the previous stable state is
fully restored.

## Run metadata

- Date:
- Rollback owner:
- Trigger reason:
- Rollback commit/reference:
- Incident ticket:

## 1) Site recovery checks

- [ ] Site loads on desktop.
- [ ] Site loads on mobile.
- [ ] No 5xx errors on core pages.
- [ ] TLS/HTTPS status is normal.

## 2) Content and navigation checks

- [ ] Home page and primary navigation are restored.
- [ ] Key study pages load without errors.
- [ ] Search returns expected pages.
- [ ] Timeline and image assets load correctly.

## 3) Pipeline checks

- [ ] Pages deployment workflow is green.
- [ ] Docs quality checks are green.
- [ ] No new critical workflow errors after rollback.

## 4) Communication and closure

- [ ] Status dashboard updated.
- [ ] Decision log updated with rollback outcome.
- [ ] Stakeholders notified of restored state.
- [ ] Follow-up remediation items created.
