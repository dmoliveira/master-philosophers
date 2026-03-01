# Zensical Config Migration Checklist

Date: 2026-03-01

Use this checklist to migrate docs configuration from the current MkDocs setup
to a Zensical prototype with minimal risk.

## 1) Inventory current config

- [ ] Record current navigation structure from `mkdocs.yml`.
- [ ] Record markdown extension usage and equivalents.
- [ ] Record custom assets currently injected (CSS/JS files).
- [ ] Record build/deploy workflow dependencies.

## 2) Map config equivalence

- [ ] Define nav mapping from MkDocs sections to Zensical sections.
- [ ] Map search configuration to Zensical defaults/options.
- [ ] Map current theme-level behaviors to Zensical components.
- [ ] Define replacement path for custom footer injection logic.

## 3) Prototype config scaffold

- [ ] Add Zensical config file in prototype branch.
- [ ] Add initial navigation entries for core routes.
- [ ] Add asset inclusion hooks for styles/scripts where needed.
- [ ] Add strict build command for prototype validation.

## 4) Validation and safety

- [ ] Build passes in CI without broken routes.
- [ ] All pages linked from `README.md` are reachable.
- [ ] Mobile navigation remains usable on key pages.
- [ ] Rollback instructions remain up to date.

## 5) Exit criteria

Proceed to migration PR only after this checklist and
`docs/plan/zensical-prototype-parity-checklist.md` are fully complete.
