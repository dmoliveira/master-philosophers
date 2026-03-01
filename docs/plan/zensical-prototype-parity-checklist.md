# Zensical Prototype Parity Checklist

Date: 2026-03-01

Use this checklist before any production cutover from MkDocs Material to
Zensical.

## 1) Navigation parity

- [ ] Top-level nav sections match current site structure.
- [ ] `Home`, `How to Use This Site`, `Start Here`, and `Study Paths` are present.
- [ ] `Resources`, `Cheatsheets`, `Templates`, `Timeline`, and `Contributing` are present.
- [ ] Releases section is present and links to the current version notes.

## 2) Route and link parity

- [ ] All README-linked docs pages resolve in the prototype build.
- [ ] No broken internal links in build output.
- [ ] No missing asset links (hero, timeline, timeline gallery images).
- [ ] Auto footer links resolve for mapped pages.

## 3) Content rendering parity

- [ ] Headings, lists, tables, and checklists render correctly.
- [ ] Code blocks and inline code render clearly.
- [ ] Emoji and UTF-8 text render consistently.
- [ ] Mobile viewport keeps readable line lengths and spacing.

## 4) Functional parity

- [ ] Search returns expected key pages (authors, books, study plans).
- [ ] Sidebar navigation highlights current location correctly.
- [ ] "Back to top" behavior or equivalent exists.
- [ ] Pages load with acceptable speed on desktop and mobile.

## 5) Workflow parity

- [ ] Local build command documented and reproducible.
- [ ] CI build passes without warnings treated as failures.
- [ ] GitHub Pages deploy succeeds from `main`.
- [ ] Rollback path to MkDocs workflow is tested and documented.

## 6) Cutover gate

Cut over only when all checklist items are complete and validated in one final
prototype pass.
