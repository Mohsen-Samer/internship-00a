# 01 · Your First Commit 🐣

**Goal:** turn an empty folder into a Git repository and save two snapshots.

```bash
./scripts/setup.sh 01
cd sandbox/01
```

## Concepts

```
 Working Directory  ──git add──▶  Staging Area  ──git commit──▶  Repository
  (your files)                    (the "cart")                   (history)
```

- `git init` — "start tracking this folder"
- `git status` — "what changed?"
- `git add <file>` — put a change in the cart
- `git commit -m "..."` — check out the cart: save a snapshot forever

## Tasks

1. Turn the folder into a repository.
2. Create a file `hello.txt` containing exactly: `Hello, Git!`
3. Run `git status`. Notice the file is **untracked** (red).
4. Stage it, run `git status` again — now it's **staged** (green).
5. Commit it with the message **`Add hello file`**
6. Create `about.md` with your name and one fun fact about you.
7. Stage and commit it (any message you like — make it descriptive!).
8. Run `git log --oneline`. You should see two commits.

## Check

```bash
../../scripts/check.sh 01
```

## 🤔 Think about it

- What's the difference between *saving a file* and *committing* it?
- Each commit has a hash like `a1b2c3d`. Why do you think Git uses hashes instead of numbers 1, 2, 3?

<details><summary>Stuck? Click for a hint</summary>

```bash
git init
echo "Hello, Git!" > hello.txt
git add hello.txt
git commit -m "Add hello file"
```
</details>
