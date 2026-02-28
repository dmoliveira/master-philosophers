import pathlib
import re
import sys


ROOT = pathlib.Path(".")
MD_FILES = [
    p
    for p in ROOT.rglob("*.md")
    if ".git/" not in p.as_posix()
    and ".beads/" not in p.as_posix()
    and ".opencode/" not in p.as_posix()
]

HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)$", re.M)
LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")


def normalize_heading(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"`([^`]*)`", r"\1", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    text = re.sub(r"\*([^*]+)\*", r"\1", text)
    text = re.sub(r"\s+", "-", text)
    text = "".join(ch for ch in text if ch.isalnum() or ch == "-")
    text = re.sub(r"-+", "-", text).strip("-")
    return text


anchors_by_file = {}
for md in MD_FILES:
    content = md.read_text(encoding="utf-8")
    counts = {}
    anchors = set()
    for _, heading in HEADING_RE.findall(content):
        base = normalize_heading(heading)
        if not base:
            continue
        idx = counts.get(base, 0)
        anchor = base if idx == 0 else f"{base}-{idx}"
        counts[base] = idx + 1
        anchors.add(anchor)
    anchors_by_file[md.resolve()] = anchors


errors = []
for md in MD_FILES:
    content = md.read_text(encoding="utf-8")
    for link in LINK_RE.findall(content):
        if link.startswith(("http://", "https://", "mailto:")):
            continue

        target_path, _, anchor = link.partition("#")
        if not target_path and not anchor:
            continue

        target = (md.parent / target_path).resolve() if target_path else md.resolve()
        if target_path and not target.exists():
            errors.append(f"{md}: missing local target: {link}")
            continue

        if anchor and target.suffix.lower() == ".md" and target in anchors_by_file:
            if anchor not in anchors_by_file[target]:
                errors.append(f"{md}: missing anchor target: {link}")


if errors:
    print("Markdown link check failed:")
    for err in errors:
        print(f"- {err}")
    sys.exit(1)

print("Markdown link check passed.")
