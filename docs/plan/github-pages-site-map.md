# GitHub Pages Site Map Proposal 🌐

This repo is already a strong docs hub. A GitHub Pages site can make it easier
to browse, search, and share.

## Status

- Implemented in repo: `mkdocs.yml`, `docs/index.md`, `docs/contributing.md`, and `.github/workflows/pages.yml`.
- Implemented in repo: automatic "Next step" and "Related pages" footer links for major docs pages.
- Implemented in repo: expanded footer coverage across onboarding, resource, and drill pages.
- Pending: enable Pages in repository settings.

## Why enable GitHub Pages

- One clean public URL for all study content.
- Better onboarding for new learners than browsing raw repo paths.
- Easier mobile reading and sharing with classes or study groups.
- Room to add navigation, search, and category pages without changing content.

## Recommended structure

Use a docs-first site layout with these top-level sections:

1. Home
2. Start Here
3. Study Paths
4. Resources
5. Cheatsheets
6. Templates
7. Timeline Gallery
8. Contributing

## Content mapping

### Home

- `README.md` (hero, quick start, core navigation)

### Start Here

- `docs/authors.md`
- `docs/books.md`
- `docs/plan/week-zero-kickoff.md`

### Study Paths

- `docs/plan/study-plans.md`
- `docs/plan/progression-paths.md`
- `docs/resources/navigation-map.md`

### Resources

- `docs/resources/learning-resources.md`
- `docs/resources/media-watchlists.md`
- `docs/resources/access-alternatives.md`
- `docs/resources/discussion-prompt-bank.md`
- `docs/resources/source-freshness-log.md`

### Cheatsheets

- `docs/cheatsheets/argument-analysis-cheat-sheet.md`
- `docs/cheatsheets/logic-drills.md`
- `docs/cheatsheets/one-page-study-sheet.md`
- `docs/cheatsheets/thinker-comparison-sheet.md`
- `docs/cheatsheets/philosopher-quick-map.md`

### Templates

- `docs/templates/weekly-study-checklist.md`
- `docs/templates/objection-reply-lab.md`
- `docs/templates/exam-response-template.md`

### Timeline Gallery

- `docs/resources/timeline-gallery.md`
- `docs/assets/philosophy-timeline.svg`
- `docs/assets/timelines/` (period visuals)

### Contributing

- `CONTRIBUTING.md`
- `docs/specs/edition-selection-spec.md`
- `docs/plan/enrichment-roadmap.md`

## Linking strategy

- Keep one canonical hub per section (no orphan pages).
- Add "Next step" links at the end of each page.
- Add "Related pages" blocks for cross-topic jumps.
- Keep path names stable and short.
- Link images through relative paths so they work in both repo and site builds.

## Suggested implementation path

1. Enable GitHub Pages from Actions.
2. Build with `mkdocs-material` (fast setup, built-in search, clean nav).
3. Add `mkdocs.yml` nav using the mapping above.
4. Add a deploy workflow on push to `main`.
5. Add a README badge linking to the live site.

## Minimal acceptance criteria

- All major docs pages appear in top nav.
- No dead links in site build.
- Home page points to "Start Here" and "Study Paths".
- Mobile layout remains readable.
