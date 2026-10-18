# 03 · Ignoring Files 🙈

**Goal:** stop committing secrets and junk.

```bash
./scripts/setup.sh 03
cd sandbox/03
```

## The story

Someone made the classic first commit: `git add .` and pushed **everything** — including
the `.env` file with an API key and the whole `node_modules` folder. 😱
Also, a `debug.log` file keeps showing up in `git status`.

## Concepts

`.gitignore` is a text file listing patterns Git should pretend don't exist:

```gitignore
node_modules/   # a whole folder
.env            # a specific file
*.log           # every file ending in .log
```

⚠️ `.gitignore` only affects **untracked** files. If a file is already committed,
you must remove it from Git's index first:

```bash
git rm --cached <file>        # stop tracking, keep on disk
git rm -r --cached <folder>   # same, for a folder
```

## Tasks

1. Look at what's tracked: `git ls-files`
2. Create a `.gitignore` that ignores `node_modules/`, `.env` and all `*.log` files.
3. Stop tracking `.env` and `node_modules` — **but keep them on your disk!**
4. Commit everything with a sensible message (e.g. `Add gitignore and untrack secrets`).
5. Run `git status` — `debug.log` should no longer appear.

## Check

```bash
../../scripts/check.sh 03
```

## 🤔 Think about it

The `.env` file is no longer tracked… but is the secret really gone?
Try `git show HEAD~1:.env`. What does this tell you about committing secrets?
(In real life: **rotate the key immediately** if a secret is ever pushed.)
