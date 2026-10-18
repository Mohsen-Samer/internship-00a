# 🌳 Git Fundamentals — Intern Exercises

Welcome! These exercises take you from "what is a commit?" to opening your first Pull Request.
Every exercise runs in a **sandbox** folder, so you can break things freely — that's the point.

## ✅ Before you start

1. Install Git → https://git-scm.com/downloads
   > 🪟 **Windows:** run every command in **Git Bash**, not PowerShell or cmd. In VS Code, open the
   > terminal's **⌄** menu (next to **+**) and pick **Git Bash**. PowerShell can't run the `.sh` scripts.
2. Tell Git who you are (once per machine):
   ```bash
   git config --global user.name  "Your Name"
   git config --global user.email "you@example.com"
   git config --global init.defaultBranch main
   git config --global core.editor "code --wait"   # use VS Code for commit/merge messages (or "nano")
   ```
3. **Fork** [fathelbab/internship-00a](https://github.com/fathelbab/internship-00a) on GitHub
   (button top-right), then clone *your fork* and go into this folder:
   ```bash
   git clone https://github.com/<your-username>/internship-00a.git
   cd internship-00a/git-exercises
   git remote add upstream https://github.com/fathelbab/internship-00a.git
   ```
   `origin` is your fork (you push here); `upstream` is the original (you pull updates from here).

## 🕹️ How it works

Each exercise has three steps, starting from the `git-exercises/` folder:

```bash
./scripts/setup.sh 01     # 1. creates sandbox/01 (a fresh playground)
cd sandbox/01             # 2. do the exercise in there
../../scripts/check.sh 01 # 3. check your work — tells you ✅ or ❌ with hints
```

Messed up? Just run `./scripts/setup.sh 01` again from the repo root — it resets the sandbox.

> The `sandbox/` folder is git-ignored, so your practice repos never pollute this one.
> Your sandbox work stays on your laptop — only exercise 09 gets pushed to GitHub.

⚠️ Always run exercise commands (especially `git init`) **inside `sandbox/NN`**, never in
`git-exercises/` itself. Not sure where you are? Run `pwd`.

## 🗺️ The exercises

| #  | Exercise | You'll learn |
|----|----------|--------------|
| 01 | [First commit](exercises/01-first-commit.md) | `init`, `add`, `commit`, `status`, `log` |
| 02 | [Staging area & diff](exercises/02-staging-and-diff.md) | partial staging, `diff`, `diff --staged` |
| 03 | [Ignoring files](exercises/03-gitignore.md) | `.gitignore`, `git rm --cached` |
| 04 | [Branches & merging](exercises/04-branches.md) | `switch`, `branch`, `merge` |
| 05 | [Merge conflicts](exercises/05-merge-conflict.md) | reading and resolving conflict markers |
| 06 | [Undoing things](exercises/06-undo.md) | `restore`, `reset`, `revert`, `commit --amend` |
| 07 | [Stash](exercises/07-stash.md) | `stash`, `stash pop`, `stash list` |
| 08 | [Time travel & detective work](exercises/08-history.md) | `log` options, `show`, `blame`, tags |
| 09 | [Your first Pull Request](exercises/09-pull-request.md) | branch → push → PR → review |
| ⭐ | [Bonus: rebase](exercises/10-bonus-rebase.md) | `rebase`, interactive rebase, squashing |

## 🏁 Submitting

Exercise 09 is your submission: you'll open a Pull Request to the **original** repo
(`fathelbab/internship-00a`) that adds your file to `git-exercises/interns/`. Your mentor will review it.

## 🆘 Cheat sheet

| I want to… | Command |
|---|---|
| See what's going on | `git status` |
| Stage a file | `git add <file>` |
| Commit staged changes | `git commit -m "message"` |
| See history | `git log --oneline --graph --all` |
| Create + switch branch | `git switch -c <name>` |
| Merge a branch into the current one | `git merge <name>` |
| Discard changes in a file | `git restore <file>` |
| Unstage a file | `git restore --staged <file>` |
| Undo a pushed commit safely | `git revert <hash>` |
| Upload commits | `git push` |
| Download + merge | `git pull` |

**Golden rule:** when in doubt, run `git status`. It almost always tells you what to do next.
