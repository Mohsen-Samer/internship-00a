# 08 · Time Travel & Detective Work 🕵️

**Goal:** dig through history to answer questions — a daily job for developers.

```bash
./scripts/setup.sh 08
cd sandbox/08
```

## The story

Someone committed a **password** into `config.txt`. Security wants answers.

## Your toolkit

```bash
git log --oneline                 # compact history
git log --author="Bob"            # filter by author
git log -S "some text"            # commits that added/removed that text ("pickaxe")
git log --stat                    # which files each commit touched
git show <hash>                   # full details of one commit
git blame <file>                  # who last changed each line
git diff <hash1> <hash2>          # compare two points in time
git switch --detach <hash>        # visit the past (git switch main to come back)
```

## Tasks

Create a file **`ANSWERS.txt`** in `sandbox/08` with these four lines filled in:

```
commits=
author=
hash=
files=
```

1. `commits` — how many commits are in this repo?
2. `author` — who added the line `password = hunter2`?
3. `hash` — the (short) hash of the commit that added it.
4. `files` — how many files did **Alice** create (not modify)?

Then mark the releases with tags:

5. Tag the **very first** commit as `v0.1` (lightweight tag is fine).
6. Tag the **latest** commit as `v1.0` using an **annotated** tag with a message.

## Check

```bash
../../scripts/check.sh 08
```

## 🤔 Think about it

Mallory's commit message was "Tweak config". How would a better commit message have helped
— or would it have? What process could have caught this before it was merged?
