# 02 · The Staging Area & Diff 🛒

**Goal:** commit *some* of your changes, not all of them.

```bash
./scripts/setup.sh 02
cd sandbox/02
```

## The story

You were updating the pancake recipe **and** the shopping list at the same time.
The recipe is ready to save. The shopping list isn't (you added chocolate as a joke 🍫).

## Concepts

| Command | Shows the difference between… |
|---|---|
| `git diff` | working directory ↔ staging area (unstaged changes) |
| `git diff --staged` | staging area ↔ last commit (what you're about to commit) |
| `git diff HEAD` | working directory ↔ last commit (everything) |

## Tasks

1. Run `git status`. Which files changed?
2. Run `git diff`. Read the output: lines starting with `+` were added, `-` were removed.
3. Stage **only** `recipe.txt`.
4. Run `git diff --staged` — confirm only the recipe is in the cart.
5. Run `git diff` — confirm the shopping list is still waiting outside the cart.
6. Commit with the message **`Update recipe`**
7. Leave `shopping.txt` modified — don't commit it, don't discard it.

## Check

```bash
../../scripts/check.sh 02
```

## 🤔 Think about it

- Why is it useful to make small, focused commits instead of one giant "updated stuff" commit?
- Bonus: try `git add -p` in a future exercise — it lets you stage *parts* of a file!

<details><summary>Oops, I staged both!</summary>

`git restore --staged shopping.txt` takes it back out of the cart (your edits stay safe).
</details>
