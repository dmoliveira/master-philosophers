import argparse
import json
from pathlib import Path


BADGE_PATH = Path("docs/stats/reading-streak-badge.json")


def streak_color(weeks: int) -> str:
    if weeks <= 1:
        return "orange"
    if weeks <= 3:
        return "yellow"
    if weeks <= 7:
        return "blue"
    return "brightgreen"


def streak_message(weeks: int) -> str:
    unit = "week" if weeks == 1 else "weeks"
    return f"{weeks} {unit}"


def main() -> None:
    parser = argparse.ArgumentParser(description="Update reading streak badge JSON")
    parser.add_argument(
        "--weeks", type=int, required=True, help="Consecutive study weeks"
    )
    args = parser.parse_args()

    if args.weeks < 0:
        raise SystemExit("weeks must be >= 0")

    payload = {
        "schemaVersion": 1,
        "label": "reading streak",
        "message": streak_message(args.weeks),
        "color": streak_color(args.weeks),
    }
    BADGE_PATH.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {BADGE_PATH} -> {payload['message']} ({payload['color']})")


if __name__ == "__main__":
    main()
