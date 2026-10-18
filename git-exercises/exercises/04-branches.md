# 04 · Branches & Merging 🌿

**Goal:** build two features in parallel and bring them together.

```bash
./scripts/setup.sh 04
cd sandbox/04
```

## Concepts

A branch is just a **movable label pointing at a commit**. Creating one is instant and free.

```
main:            A───B───────M
                      \     /
feature/header:        C───D
```

| Command | What it does |
|---|---|
| `git branch` | list branches (`*` = where you are) |
| `git switch -c <name>` | create a branch and move to it |
| `git switch <name>` | move to an existing branch |
| `git merge <name>` | bring `<name>`'s commits into the current branch |
| `git branch -d <name>` | delete a branch that's been merged |

## Tasks

1. From `main`, create and switch to **`feature/footer`**.
2. Create `footer.html` (e.g. `<footer>© 2026</footer>`) and commit it.
3. Switch back to `main`. Run `ls` — where did `footer.html` go?! (It's safe on its branch.)
4. From `main`, create and switch to **`feature/header`**.
5. Create `header.html` and commit it.
6. Switch to `main` and merge `feature/footer`. Notice it says **Fast-forward**.
7. Still on `main`, merge `feature/header`. An editor may open for the merge message — save and close it.
8. Delete both feature branches.
9. Admire your work: `git log --oneline --graph --all`

## Check

```bash
../../scripts/check.sh 04
```

## 🤔 Think about it

- Why was the first merge a "fast-forward" but the second one created a merge commit?
- Draw the graph on paper before running `git log --graph`. Did you get it right?

<details><summary>Stuck in a weird editor (Vim)?</summary>

Type `:wq` and press Enter. To avoid it next time:
`git config --global core.editor "code --wait"` (VS Code) or `"nano"`.
</details>
