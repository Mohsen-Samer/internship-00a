# 07 · Stash 🐿️

**Goal:** park unfinished work to handle an emergency.

```bash
./scripts/setup.sh 07
cd sandbox/07
```

## The story

You're halfway through a dark-mode feature in `app.txt` (uncommitted). Suddenly:
> 🚨 "The homepage says **Welcom**! Fix it NOW!"

Your WIP isn't ready to commit. Stash it like a squirrel hides a nut.

## Concepts

| Command | What it does |
|---|---|
| `git stash` | save uncommitted changes and clean the working tree |
| `git stash list` | see your stashes |
| `git stash pop` | bring the latest stash back (and remove it from the list) |
| `git stash apply` | bring it back but keep it in the list |

## Tasks

1. Check `git status` — see your WIP.
2. Stash it. Confirm with `git status` that the tree is clean.
3. Create a branch `hotfix`, fix the typo in `README.md`, commit as **`Fix typo`**.
4. Switch to `main` and merge `hotfix`. Delete the `hotfix` branch.
5. Bring your WIP back from the stash.
6. "Finish" the feature and commit it as **`Add new feature`**.

## Check

```bash
../../scripts/check.sh 07
```

## 🤔 Think about it

Stashes are easy to forget. When would you choose a quick WIP commit on a branch instead?
