#!/usr/bin/env bash
# Checks your work for an exercise. Run from anywhere inside this repo.
# Usage: ./scripts/check.sh 01
set -uo pipefail

# Run from PowerShell/cmd or double-clicked, Windows opens this in a new Git Bash (mintty) window
# that closes as soon as the script ends. Keep it open so the results can be read.
if [[ -t 0 ]] && ps -p "$PPID" 2>/dev/null | grep -q mintty; then
  trap 'echo; read -rp "Press Enter to close this window..."' EXIT
fi

EX="${1:-}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SANDBOX="$ROOT/sandbox/$EX"
PASS=0; FAIL=0

ok()   { echo "  ✅ $1"; PASS=$((PASS+1)); }
bad()  { # bad "description" ["hint"] ["details"]
  echo "  ❌ $1"
  [[ -n "${3:-}" ]] && sed 's/^/     │ /' <<<"$3"
  [[ -n "${2:-}" ]] && echo "     💡 hint: $2"
  FAIL=$((FAIL+1))
}
check(){ # check "description" "hint" command...  (on failure, logs the command and its output)
  local desc="$1" hint="$2" out; shift 2
  if out=$("$@" 2>&1); then ok "$desc"
  else bad "$desc" "$hint" "ran: $*${out:+$'\n'$out}"; fi
}

# Helpers print what they actually found when they fail, so check() can log it.
tracked()     { git ls-files --error-unmatch "$1"; }
not_tracked() {
  if git ls-files --error-unmatch "$1" >/dev/null 2>&1; then echo "$1 is still tracked by Git"; return 1; fi
}
clean() {
  local st; st=$(git status --porcelain)
  [[ -z "$st" ]] || { echo "uncommitted changes:"; echo "$st"; return 1; }
}
has_msg() {
  git log --format=%s 2>/dev/null | grep -qxF "$1" && return 0
  echo "commit messages found:"; git log --format='  %h %s' 2>&1; return 1
}
file_has() {
  grep -qF "$2" "$1" 2>/dev/null && return 0
  if [[ -f "$1" ]]; then echo "$1 contains:"; head -20 "$1"; else echo "$1 does not exist"; fi
  return 1
}

if [[ -z "$EX" ]]; then echo "Usage: ./scripts/check.sh <exercise-number>"; exit 1; fi

if [[ "$EX" != "09" ]]; then
  [[ -d "$SANDBOX" ]] || { echo "No sandbox found. Run ./scripts/setup.sh $EX first."; exit 1; }
  cd "$SANDBOX"
fi

echo "🔎 Checking exercise $EX…"

case "$EX" in
  01)
    check "Folder is a Git repository" "run: git init" test -d .git
    check "hello.txt is committed" "git add hello.txt && git commit -m \"Add hello file\"" tracked hello.txt
    check "hello.txt contains 'Hello, Git!'" "echo \"Hello, Git!\" > hello.txt" file_has hello.txt "Hello, Git!"
    check "A commit named exactly 'Add hello file' exists" "Check spelling and capitalisation" has_msg "Add hello file"
    check "about.md is committed" "create about.md, add it, commit it" tracked about.md
    check "At least 2 commits" "Make one commit per step" test "$(git rev-list --count HEAD 2>/dev/null || echo 0)" -ge 2
    check "Working tree is clean" "run git status — commit or remove leftovers" clean
    ;;

  02)
    check "Latest commit is 'Update recipe'" "git commit -m \"Update recipe\"" test "$(git log -1 --format=%s)" = "Update recipe"
    check "Latest commit changed ONLY recipe.txt" "Only 'git add recipe.txt', not 'git add .'" \
      test "$(git show --name-only --format= HEAD)" = "recipe.txt"
    check "recipe.txt has sugar and salt" "Did you commit the full change?" bash -c "git show HEAD:recipe.txt | grep -q sugar && git show HEAD:recipe.txt | grep -q salt"
    check "shopping.txt is still modified (not committed)" "Don't commit shopping.txt yet" \
      bash -c "git status --porcelain shopping.txt | grep -q '^ M'"
    check "chocolate was NOT committed" "Use 'git restore --staged shopping.txt' if you staged it" \
      bash -c "! git show HEAD:shopping.txt | grep -q chocolate"
    ;;

  03)
    check ".gitignore is committed" "git add .gitignore && git commit" tracked .gitignore
    check ".env is no longer tracked" "git rm --cached .env" not_tracked .env
    check ".env still exists on your disk" "--cached removes it from Git only, not from disk" test -f .env
    check "node_modules is no longer tracked" "git rm -r --cached node_modules" not_tracked node_modules/left-pad/index.js
    check ".env is ignored" "add '.env' to .gitignore" git check-ignore -q .env
    check "node_modules/ is ignored" "add 'node_modules/' to .gitignore" git check-ignore -q node_modules/left-pad/index.js
    check "*.log files are ignored" "add '*.log' to .gitignore" git check-ignore -q debug.log
    check "Working tree is clean" "commit your changes" clean
    ;;

  04)
    check "You are on main" "git switch main" test "$(git branch --show-current)" = "main"
    check "footer.html is on main" "merge feature/footer into main" tracked footer.html
    check "header.html is on main" "merge feature/header into main" tracked header.html
    check "There is at least one merge commit" "The second merge should create one" \
      test "$(git rev-list --merges --count HEAD)" -ge 1
    check "Branch feature/footer was deleted" "git branch -d feature/footer" bash -c "! git show-ref --verify --quiet refs/heads/feature/footer"
    check "Branch feature/header was deleted" "git branch -d feature/header" bash -c "! git show-ref --verify --quiet refs/heads/feature/header"
    check "Working tree is clean" "commit your changes" clean
    ;;

  05)
    check "No conflict markers left" "remove <<<<<<<, =======, >>>>>>> lines" bash -c "! grep -qE '^(<<<<<<<|=======|>>>>>>>)' greeting.txt"
    check "greeting.txt keeps 'Hello Everyone'" "keep both teams' work" file_has greeting.txt "Hello Everyone"
    check "greeting.txt keeps 'Hola Mundo'" "keep both teams' work" file_has greeting.txt "Hola Mundo"
    check "Latest commit is a merge (2 parents)" "after resolving: git add greeting.txt && git commit" \
      test "$(git log -1 --format=%p | wc -w)" -eq 2
    check "Merge is finished" "git commit to conclude the merge" test ! -f .git/MERGE_HEAD
    check "Working tree is clean" "commit your changes" clean
    ;;

  06)
    check "notes.txt keyboard smash discarded" "git restore notes.txt" bash -c "! grep -q asdfjkl notes.txt"
    check "oops.txt is not tracked" "git restore --staged oops.txt" not_tracked oops.txt
    check "oops.txt was deleted" "rm oops.txt" test ! -f oops.txt
    check "History still contains 'Add BROKEN feature'" "Use revert, not reset — history is shared!" has_msg "Add BROKEN feature"
    check "A revert commit exists" "git revert <hash-of-broken-commit>" bash -c "git log --format=%s | grep -q '^Revert \"Add BROKEN feature\"'"
    check "broken.js is gone" "the revert should remove it" test ! -f broken.js
    check "docs.md is committed" "create docs.md and commit it" tracked docs.md
    check "Latest commit message is 'Add documentation'" "git commit --amend -m \"Add documentation\"" test "$(git log -1 --format=%s)" = "Add documentation"
    check "No leftover 'Add docs' commit" "amend replaces the commit — don't make a new one" bash -c "! git log --format=%s | grep -qx 'Add docs'"
    check "Working tree is clean" "commit or discard leftovers" clean
    ;;

  07)
    check "You are on main" "git switch main" test "$(git branch --show-current)" = "main"
    check "Typo fixed in README.md" "Welcom → Welcome" file_has README.md "Welcome to our app!"
    check "'Fix typo' commit exists" "commit the fix on the hotfix branch" has_msg "Fix typo"
    check "'Add new feature' commit exists" "after git stash pop, commit your WIP" has_msg "Add new feature"
    check "'Fix typo' happened before 'Add new feature'" "fix first, feature second" \
      bash -c "git log --format=%s | grep -nE '^(Fix typo|Add new feature)$' | head -1 | grep -q 'Add new feature'"
    check "The fix commit doesn't contain the WIP" "stash BEFORE fixing the typo" \
      bash -c "h=\$(git log --format=%H --grep='^Fix typo\$' | head -1); ! git show \$h:app.txt | grep -q WIP"
    check "The dark-mode WIP survived" "git stash pop" file_has app.txt "dark-mode"
    check "Stash is empty" "pop (not apply), or git stash drop" test -z "$(git stash list)"
    check "Working tree is clean" "commit your changes" clean
    ;;

  08)
    [[ -f ANSWERS.txt ]] || { bad "ANSWERS.txt exists" "create it in sandbox/08"; echo; echo "Score: $PASS passed, $FAIL failed"; exit 1; }
    ans() { grep -iE "^$1\s*=" ANSWERS.txt | head -1 | cut -d= -f2- | tr -d '[:space:]'; }
    leak=$(git log --format=%h -S"hunter2" | tail -1)
    check "commits = correct total" "git log --oneline | wc -l" test "$(ans commits)" = "$(git rev-list --count HEAD)"
    check "author = who leaked the password" "git blame config.txt" bash -c "[[ '$(ans author | tr '[:upper:]' '[:lower:]')' == mallory ]]"
    check "hash = commit that added the password" "git log -S hunter2 --oneline" \
      bash -c "[[ -n '$(ans hash)' && \$(git rev-parse --verify -q '$(ans hash)^{commit}') == \$(git rev-parse '$leak') ]]"
    check "files = number of files Alice created" "git log --author=Alice --diff-filter=A --name-only" test "$(ans files)" = "2"
    check "Tag v0.1 points to the first commit" "git tag v0.1 <first-hash>" \
      test "$(git rev-list -n1 v0.1 2>/dev/null)" = "$(git rev-list --max-parents=0 HEAD)"
    check "Tag v1.0 points to the latest commit" "git tag v1.0" test "$(git rev-list -n1 v1.0 2>/dev/null)" = "$(git rev-parse HEAD)"
    check "v1.0 is an annotated tag" "git tag -a v1.0 -m \"First release\"" test "$(git cat-file -t v1.0 2>/dev/null)" = "tag"
    ;;

  09)
    cd "$ROOT"
    branch=$(git branch --show-current)
    check "You're on a branch other than main" "git switch -c add-<your-github-username>" bash -c "[[ '$branch' != main && -n '$branch' ]]"
    mine=$(git diff --name-only --relative main...HEAD -- interns/ 2>/dev/null | grep -v _TEMPLATE | head -1)
    check "You added a file in interns/" "cp interns/_TEMPLATE.md interns/<username>.md" test -n "$mine"
    if [[ -n "$mine" ]]; then
      check "Your file has no leftover TODOs" "fill in every section" bash -c "! grep -q TODO '$mine'"
    fi
    check "Your branch is pushed to GitHub" "git push -u origin $branch" git rev-parse --abbrev-ref '@{upstream}'
    check "Nothing left to push" "git push" test -z "$(git log '@{upstream}..HEAD' --oneline 2>/dev/null || echo x)"
    echo "  👉 Last step (can't be auto-checked): open the Pull Request on GitHub!"
    ;;

  10)
    check "feature/search exists" "don't delete the branch" git show-ref --verify --quiet refs/heads/feature/search
    check "feature/search is based on the latest main" "git rebase main (while on feature/search)" git merge-base --is-ancestor main feature/search
    check "Exactly 1 commit on top of main" "git rebase -i main → squash the wips" test "$(git rev-list --count main..feature/search 2>/dev/null)" = "1"
    check "Commit message is 'Add search feature'" "reword while squashing" test "$(git log -1 --format=%s feature/search)" = "Add search feature"
    check "No merge commits (linear history)" "rebase instead of merge" test "$(git rev-list --merges --count main..feature/search)" = "0"
    check "checkout.py from main is present" "the rebase should include main's work" bash -c "git ls-tree -r --name-only feature/search | grep -qx checkout.py"
    check "search.py has the final code" "keep all the changes while squashing" bash -c "git show feature/search:search.py | grep -q 'search products by name'"
    ;;

  *) echo "Unknown exercise '$EX'"; exit 1 ;;
esac

echo
if [[ $FAIL -eq 0 ]]; then
  echo "🎉 All $PASS checks passed! On to the next one."
else
  echo "Score: $PASS passed, $FAIL to go. You've got this 💪"
  exit 1
fi
