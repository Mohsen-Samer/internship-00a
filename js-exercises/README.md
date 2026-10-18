# ⚡ JavaScript Fundamentals — Intern Exercises

Learn JavaScript by making **failing tests pass**. Every exercise has:

- `README.md` — the concepts, with examples
- `exercise.js` — functions with `// TODO` for you to write
- `exercise.test.js` — automated tests that tell you if you got it right (**don't edit these!**)

No libraries to install — just Node.js.

## ✅ Setup

1. Install **Node.js 20 or newer** → https://nodejs.org (check with `node --version`)
2. **Fork** this repo on GitHub, then clone your fork:
   ```bash
   git clone https://github.com/<your-username>/js-exercises.git
   cd js-exercises
   ```
3. Create your own branch: `git switch -c solutions/<your-username>`

## 🕹️ How it works

```bash
npm run test:01     # run the tests for exercise 01
npm test            # run ALL tests
```

At first, everything is red ❌. Open `exercise.js`, replace each `TODO`, save, re-run. Turn it all green ✅.

> 💡 Tip: `npm run watch:01` re-runs the tests every time you save.

## 🗺️ The exercises

| #  | Exercise | Concepts |
|----|----------|----------|
| 01 | [Variables & Types](exercises/01-variables-and-types) | `let`/`const`, `typeof`, template literals, truthy/falsy |
| 02 | [Conditionals](exercises/02-conditionals) | `if`/`else`, `===`, `switch`, ternary, logical operators |
| 03 | [Functions](exercises/03-functions) | arrow functions, default & rest params, closures, higher-order functions |
| 04 | [Arrays](exercises/04-arrays) | `map`, `filter`, `reduce`, `find`, `sort`, spread, `Set` |
| 05 | [Objects](exercises/05-objects) | destructuring, spread, `Object.entries`, methods & `this`, optional chaining |
| 06 | [Strings & Loops](exercises/06-strings-and-loops) | `for`, `for...of`, string methods, regex basics |
| 07 | [Async JavaScript](exercises/07-async) | Promises, `async`/`await`, `Promise.all`, error handling |
| 08 | [Classes](exercises/08-classes) | `class`, constructor, getters, private fields, errors |
| 09 | [DOM To-Do App](exercises/09-dom-todo-app) | DOM, events, `fetch` — build a real web page! |

## 🏁 Submitting

When an exercise is green, commit it (one commit per exercise is a nice habit):

```bash
git add exercises/01-variables-and-types/exercise.js
git commit -m "Solve exercise 01: variables and types"
git push -u origin solutions/<your-username>
```

When you've finished, open a **Pull Request** from your branch so your mentor can review your code.
Passing tests is the minimum — reviewers also look for **readable, simple code**.

## 📏 Rules of the game

1. Don't edit the `*.test.js` files.
2. No copy-pasting from AI/StackOverflow without understanding every line — you'll be asked to explain it!
3. Stuck for more than 20 minutes? Ask. That's what we're here for.

## 📚 Reference

- MDN JavaScript Guide → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- javascript.info → https://javascript.info
