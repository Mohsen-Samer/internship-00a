#!/usr/bin/env bash
# Creates (or resets) a sandbox repo for an exercise.
# Usage: ./scripts/setup.sh 01
set -euo pipefail

# Run from PowerShell/cmd or double-clicked, Windows opens this in a new Git Bash (mintty) window
# that closes as soon as the script ends. Keep it open so the output can be read.
if [[ -t 0 ]] && ps -p "$PPID" 2>/dev/null | grep -q mintty; then
  trap 'echo; read -rp "Press Enter to close this window..."' EXIT
fi

EX="${1:-}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SANDBOX="$ROOT/sandbox/$EX"

if [[ -z "$EX" ]]; then
  echo "Usage: ./scripts/setup.sh <exercise-number>   e.g. ./scripts/setup.sh 01"
  exit 1
fi

# Commits made by this script use a fixed "Trainer" identity so they look the same for everyone.
export GIT_AUTHOR_NAME="Trainer" GIT_AUTHOR_EMAIL="trainer@example.com"
export GIT_COMMITTER_NAME="Trainer" GIT_COMMITTER_EMAIL="trainer@example.com"

as() { # as "Name" -> switch author for following commits
  export GIT_AUTHOR_NAME="$1" GIT_AUTHOR_EMAIL="$(echo "$1" | tr '[:upper:]' '[:lower:]')@example.com"
  export GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME" GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"
}

fresh_repo() {
  rm -rf "$SANDBOX"
  mkdir -p "$SANDBOX"
  cd "$SANDBOX"
  git init -q -b main
}

case "$EX" in
  01)
    rm -rf "$SANDBOX"; mkdir -p "$SANDBOX"
    echo "📁 Created an EMPTY folder (not a repo yet!)"
    ;;

  02)
    fresh_repo
    printf "Pancakes\n- 2 eggs\n- 1 cup flour\n- 1 cup milk\n" > recipe.txt
    printf "Shopping list\n- eggs\n- flour\n" > shopping.txt
    git add . && git commit -qm "Add recipe and shopping list"
    printf "Pancakes\n- 2 eggs\n- 1 cup flour\n- 1 cup milk\n- 1 tbsp sugar\n- pinch of salt\n" > recipe.txt
    printf "Shopping list\n- eggs\n- flour\n- milk\n- chocolate (do NOT commit this yet!)\n" > shopping.txt
    ;;

  03)
    fresh_repo
    echo 'console.log("My app");' > app.js
    echo 'API_KEY=super-secret-123' > .env
    mkdir -p node_modules/left-pad && echo 'module.exports = () => {}' > node_modules/left-pad/index.js
    git add . && git commit -qm "Initial commit (oops, committed too much)"
    echo "debug output..." > debug.log
    ;;

  04)
    fresh_repo
    printf "<h1>My Website</h1>\n" > index.html
    git add . && git commit -qm "Add homepage"
    ;;

  05)
    fresh_repo
    echo "Hello World" > greeting.txt
    echo "This file is shared by two teams." > notes.txt
    git add . && git commit -qm "Add greeting"
    git switch -qc spanish
    echo "Hola Mundo" > greeting.txt
    git commit -qam "Translate greeting to Spanish"
    git switch -q main
    echo "Hello Everyone" > greeting.txt
    git commit -qam "Make greeting more inclusive"
    ;;

  06)
    fresh_repo
    echo "port=3000" > config.txt
    git add . && git commit -qm "Add config"
    echo "function login() {}" > feature.js
    git add . && git commit -qm "Add login feature"
    echo "throw new Error('everything is on fire 🔥');" > broken.js
    git add . && git commit -qm "Add BROKEN feature"
    echo "Meeting notes: ship on Friday" > notes.txt
    git add . && git commit -qm "Add notes"
    # pretend everything above was already pushed to a shared remote
    echo "asdfjkl; accidental keyboard smash" >> notes.txt   # unwanted edit
    echo "this file should never be committed" > oops.txt
    git add oops.txt                                          # accidentally staged
    ;;

  07)
    fresh_repo
    echo "Welcom to our app!" > README.md
    echo "App v1" > app.txt
    git add . && git commit -qm "Initial version"
    echo "WIP: new dark-mode feature (half done)" >> app.txt
    ;;

  08)
    fresh_repo
    as "Alice";   echo "# Secret Project" > README.md;           git add . && git commit -qm "Start project"
    as "Bob";     echo "port=8080" > config.txt;                 git add . && git commit -qm "Add config"
    as "Alice";   echo "def main(): pass" > main.py;             git add . && git commit -qm "Add main entrypoint"
    as "Charlie"; echo "debug=false" >> config.txt;              git commit -qam "Disable debug"
    as "Bob";     echo "def helper(): pass" > utils.py;          git add . && git commit -qm "Add utils"
    as "Mallory"; echo "password = hunter2" >> config.txt;       git commit -qam "Tweak config"
    as "Alice";   echo "Run: python main.py" >> README.md;       git commit -qam "Document how to run"
    as "Charlie"; echo "def test(): assert True" > test_main.py; git add . && git commit -qm "Add tests"
    as "Bob";     echo "timeout=30" >> config.txt;               git commit -qam "Add timeout"
    as "Alice";   echo "v1.0 ready" >> README.md;                git commit -qam "Prepare release"
    ;;

  10)
    fresh_repo
    echo "# Store" > README.md
    git add . && git commit -qm "Init store"
    echo "products = []" > products.py
    git add . && git commit -qm "Add products"
    git switch -qc feature/search
    echo "def search(q): pass" > search.py
    git add . && git commit -qm "wip"
    echo "def search(q): return [p for p in products if q in p]" > search.py
    git commit -qam "wip 2"
    echo "# search products by name" >> search.py
    git commit -qam "fix typo lol"
    git switch -q main
    echo "def checkout(): pass" > checkout.py
    git add . && git commit -qm "Add checkout"
    git switch -q feature/search
    ;;

  09)
    echo "Exercise 09 doesn't use a sandbox — read exercises/09-pull-request.md"
    exit 0
    ;;

  *)
    echo "Unknown exercise '$EX'. Try 01–08 or 10."
    exit 1
    ;;
esac

echo "✅ Sandbox ready at: sandbox/$EX"
echo "   Next:  cd sandbox/$EX   (then follow exercises/$EX-*.md)"
