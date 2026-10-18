# ⭐ Bonus · Rebase & Squash 🧹

**Goal:** clean up messy commits before opening a PR.

```bash
./scripts/setup.sh 10
cd sandbox/10
```

## The story

Your `feature/search` branch has three embarrassing commits: `wip`, `wip 2`, `fix typo lol`.
Meanwhile `main` moved on (someone added checkout). Clean up before review!

## Merge vs Rebase

```
MERGE:   main  A──B──E─────M          REBASE:  main  A──B──E
                 \        /                                 \
          feature C──D──F                          feature   C'─D'─F'
```

Rebase **replays** your commits on top of the latest `main` → linear, tidy history.
Interactive rebase (`-i`) lets you squash, reword, reorder or drop commits.

## Tasks

1. Look at the mess: `git log --oneline --graph --all`
2. On `feature/search`, start an interactive rebase onto `main`:
   ```bash
   git rebase -i main
   ```
3. In the editor, keep the first line as `pick`, change the other two to `squash` (or `s`).
4. Save & close. In the next editor, replace the messages with: **`Add search feature`**
5. Check the graph again — beautiful. ✨

## Check

```bash
../../scripts/check.sh 10
```

## ⚠️ The golden rule of rebasing

**Never rebase commits that others have already pulled.** Rebase rewrites hashes —
it's for tidying *your own* local work before sharing it.
