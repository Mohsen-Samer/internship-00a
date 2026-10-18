# 09 · Your First Pull Request 🚀

**Goal:** the real team workflow — branch, push, open a PR, get reviewed.
This one happens in **this repository** (your fork), not in a sandbox.

## The workflow

```
  ┌────────────┐  fork   ┌──────────────┐  clone  ┌──────────────┐
  │ Original   │ ──────▶ │  Your fork   │ ──────▶ │ Your laptop  │
  │ (upstream) │         │  (origin)    │         │              │
  └────────────┘         └──────────────┘         └──────────────┘
        ▲                       ▲    push branch         │
        └──── Pull Request ─────┴────────────────────────┘
```

## Tasks

1. Make sure you're up to date on `main`:
   ```bash
   git switch main
   git pull
   ```
2. Create a branch named **`add-<your-github-username>`**.
3. Copy the template:
   ```bash
   cp interns/_TEMPLATE.md interns/<your-github-username>.md
   ```
4. Fill in every `TODO` in your new file.
5. Commit with a clear message, e.g. `Add <name> to interns list`.
6. Push your branch to your fork:
   ```bash
   git push -u origin add-<your-github-username>
   ```
7. Run the checker from the repo root: `./scripts/check.sh 09`
8. On GitHub, click **"Compare & pull request"**. Make sure the PR goes
   **from** `your-fork:add-<username>` **to** `original-repo:main`.
9. Write a good PR description: *what* you changed and *why*. Request a review from your mentor.

## Responding to review 💬

Your mentor will leave comments. To address them, just commit and push again on the **same branch** —
the PR updates automatically. No need to open a new one!

## 🤔 Think about it

- Why do teams use Pull Requests instead of everyone pushing straight to `main`?
- What makes a PR easy to review? (Hint: size, description, focused changes.)
