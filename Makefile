PROJECT_NAME := master-philosophers
PROJECT_VERSION := 0.1.0
weeks ?= 0

.PHONY: help docs-lint docs-links docs-check docs-site-check streak

help: ## Show available commands
	@printf "%s v%s\n" "$(PROJECT_NAME)" "$(PROJECT_VERSION)"
	@printf "Available commands:\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-12s %s\n", $$1, $$2}'

docs-lint: ## Run markdownlint using repo baseline
	npx --yes markdownlint-cli2 "**/*.md"

docs-links: ## Validate local markdown links and anchors
	python3 scripts/check_markdown_links.py

docs-check: docs-lint docs-links ## Run docs lint and link checks

docs-site-check: ## Build MkDocs site with pinned engine
	uvx --with "mkdocs<2" --with mkdocs-material mkdocs build --strict

streak: ## Update streak badge (usage: make streak weeks=4)
	python3 scripts/update_reading_streak_badge.py --weeks $(weeks)
