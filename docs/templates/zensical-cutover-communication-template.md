# Zensical Cutover Communication Template

Use this template to communicate cutover status before, during, and after the
migration window.

## Message metadata

- Date/time:
- Sender:
- Channel:
- Audience:
- Migration PR:

## 1) Pre-cutover announcement

Subject: Zensical migration cutover window

Message:

> We will start the Zensical docs cutover at <time>. Expected duration is
> <duration>. We will post updates at each phase checkpoint.

## 2) In-progress update

Subject: Zensical cutover in progress

Message:

> Cutover is in progress. Current phase: <phase>. No blockers / blockers:
> <details>. Next update at <time>.

## 3) Success message

Subject: Zensical cutover completed successfully

Message:

> Cutover completed at <time>. Verification checks passed: <summary>. Monitoring
> continues until <time>.

## 4) Rollback message

Subject: Zensical cutover rolled back

Message:

> We rolled back at <time> due to <reason>. Previous stable docs state is
> restored. Follow-up actions: <actions>.
