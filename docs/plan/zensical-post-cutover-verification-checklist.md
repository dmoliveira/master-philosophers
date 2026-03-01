# Zensical Post-Cutover Verification Checklist

Use this checklist right after cutover to verify production quality and detect
regressions early.

## Run metadata

- Date:
- Verification owner:
- Migration PR:
- Live site URL:
- Incident channel:

## 1) Availability checks

- [ ] Site loads successfully on desktop.
- [ ] Site loads successfully on mobile.
- [ ] No 5xx errors on key pages.
- [ ] TLS/HTTPS works correctly.

## 2) Navigation and content checks

- [ ] Home page renders correctly.
- [ ] Core navigation sections are present.
- [ ] Key study pages resolve without broken links.
- [ ] Search returns expected high-priority pages.

## 3) Functional checks

- [ ] Footer navigation behavior works on mapped pages.
- [ ] Timeline and image assets render.
- [ ] Template pages are accessible and readable.
- [ ] Reading/study path pages remain intact.

## 4) Stability checks

- [ ] No new critical errors in workflow logs.
- [ ] Monitoring window completed without critical incidents.
- [ ] Decision log updated with outcome.

## 5) Outcome

- [ ] Verification successful
- [ ] Follow-up fixes required
- [ ] Rollback required
