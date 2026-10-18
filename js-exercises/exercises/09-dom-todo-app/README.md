# 09 · DOM To-Do App ✅ (mini project)

Time to build something you can **see and click**! This is a real front-end:
HTML for structure, CSS for looks, JavaScript for behaviour.

```
index.html  →  the page skeleton (done for you)
style.css   →  the looks (done for you)
todo.js     →  PURE logic: add / toggle / remove / filter     ← Part 1 (tested)
app.js      →  DOM wiring: render the list, handle clicks     ← Part 2 (manual)
```

> 🧠 Why split it? `todo.js` has no DOM code, so it's easy to test. `app.js` just connects
> that logic to the page. This separation is how real apps (React, Vue…) are structured too.

## The DOM in 60 seconds

```js
const list = document.querySelector("#todo-list");     // find ONE element (CSS selector)
const buttons = document.querySelectorAll(".btn");     // find ALL matching

const li = document.createElement("li");               // create
li.textContent = "Buy milk";                           // set text (safe — no HTML injection)
li.classList.add("done");                              // add a CSS class
li.dataset.id = "42";                                  // <li data-id="42">
list.append(li);                                       // insert into the page
list.innerHTML = "";                                   // clear it

form.addEventListener("submit", (event) => {
  event.preventDefault();                              // stop the page reloading!
  console.log(input.value);
});
```

### Event delegation — one listener for many items

```js
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  if (event.target.matches(".delete")) { /* delete li.dataset.id */ }
});
```

## Part 1 — `todo.js` (automated tests)

Implement the pure functions. Each must return a **new** array and never mutate the input.

```bash
npm run test:09
```

## Part 2 — `app.js` (in the browser)

Run a tiny local server (ES modules don't load from `file://`):

```bash
npx serve exercises/09-dom-todo-app      # or: python3 -m http.server -d exercises/09-dom-todo-app
```

Open the URL it prints, then follow the TODOs in `app.js`. Your app is done when you can:

- [ ] Type a task and press Enter → it appears in the list
- [ ] Empty input does nothing (no blank todos)
- [ ] Click a task's checkbox → it gets crossed out
- [ ] Click 🗑️ → it disappears
- [ ] The counter shows "N items left" (and "1 item left" — grammar matters!)
- [ ] The All / Active / Done buttons filter the list
- [ ] Refresh the page → your todos are still there (`localStorage`)

### ⭐ Bonus: talk to a real server

Add a **"Load samples"** button that fetches 5 todos from a public fake API and adds them:

```js
const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
const data = await res.json();   // [{ id, title, completed }, …]
```

Open DevTools → **Network** tab and watch the HTTP request happen. That's the web at work! 🌍

## Submitting

Commit your work, push, and add a screenshot of your running app to your Pull Request description.
