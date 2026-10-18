# 05 · Merge Conflicts 💥

**Goal:** stay calm and resolve your first conflict.

```bash
./scripts/setup.sh 05
cd sandbox/05
```

## The story

Two teams edited the **same line** of `greeting.txt`:
- On `main`: `Hello World` → `Hello Everyone`
- On `spanish`: `Hello World` → `Hola Mundo`

Git can't guess who's right, so it asks *you*.

## What a conflict looks like

```
<<<<<<< HEAD
Hello Everyone          ← your branch (main)
=======
Hola Mundo              ← the branch you're merging (spanish)
>>>>>>> spanish
```

Resolving = edit the file so it looks how it *should*, delete the three marker lines, then `add` + `commit`.

## Tasks

1. Look at both versions: `git log --oneline --all --graph`
2. On `main`, merge the `spanish` branch. 💥 CONFLICT!
3. Run `git status` — read what it tells you.
4. Open `greeting.txt`. The product owner decides **both greetings stay**, one per line:
   ```
   Hello Everyone
   Hola Mundo
   ```
5. Remove all conflict markers, save, stage the file and run `git commit` (no `-m`) to finish the merge.
   An editor opens with a ready-made "Merge branch 'spanish'" message — save and close it.

## Check

```bash
../../scripts/check.sh 05
```

## 🤔 Think about it

- Conflicts aren't errors — they're Git asking a question. How could a team reduce how often they happen?
- Panic button: `git merge --abort` puts everything back to how it was before the merge.
