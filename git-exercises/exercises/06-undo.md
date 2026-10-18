# 06 · Undoing Things ⏪

**Goal:** know the right "undo" for each situation.

```bash
./scripts/setup.sh 06
cd sandbox/06
```

## The undo map

| Situation | Command |
|---|---|
| I edited a file and want the last committed version back | `git restore <file>` |
| I staged something by mistake | `git restore --staged <file>` |
| My last commit message has a typo (not pushed yet) | `git commit --amend -m "new msg"` |
| A commit was **already pushed** and must be undone | `git revert <hash>` (creates a new "anti-commit") |
| A commit was **not pushed** and I want it gone | `git reset --soft HEAD~1` (keeps changes) / `--hard` (⚠️ deletes them) |

> 🚦 Rule of thumb: **never rewrite history others already have**. Pushed? → `revert`.

## The story

Everything in this repo has already been pushed to the team. Things went wrong:

## Tasks

1. `notes.txt` has an accidental keyboard smash. Discard that change.
2. `oops.txt` was staged by mistake. Unstage it, then delete the file.
3. The commit **`Add BROKEN feature`** broke production. Undo it **safely** (it's already pushed!).
   *Find its hash with `git log --oneline`.* An editor opens with the message
   `Revert "Add BROKEN feature"` — keep it as is, save and close (or add `--no-edit` to skip the editor).
4. Create `docs.md` with any content, and commit it with the message `Add docs`.
5. Your lead says the message should be **`Add documentation`**. Fix the message of that commit
   (it's not pushed yet, so rewriting is OK) — without creating a new commit.

## Check

```bash
../../scripts/check.sh 06
```

## 🤔 Think about it

- After `git revert`, the broken commit is still in history. Why is that a *good* thing?
- `git reflog` is Git's secret safety net — it remembers where HEAD has been. Run it and look!
