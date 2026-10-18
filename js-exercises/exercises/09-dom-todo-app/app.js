// Part 2 · Connect the logic to the page.
// Serve this folder and open it in the browser (see README). Keep DevTools open (F12)!
import {
  addTodo, toggleTodo, removeTodo, filterTodos, remainingLabel, clearDone,
} from "./todo.js";

// ---------- 1. Grab the elements we need ----------
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const count = document.querySelector("#todo-count");
// TODO: also grab the filter buttons (all of them), #clear-done and #load-samples

// ---------- 2. State ----------
// The single source of truth. We never edit the DOM by hand — we change state, then render().
let todos = load();
let currentFilter = "all";

// ---------- 3. Render: state → HTML ----------
function render() {
  list.innerHTML = "";

  for (const todo of filterTodos(todos, currentFilter)) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    // TODO: add the "done" class when todo.done is true
    // TODO: create a checkbox (<input type="checkbox">), checked when done
    // TODO: create a <span> with the todo text (use textContent, NOT innerHTML — why?)
    // TODO: create a delete <button class="delete">🗑️</button>
    // TODO: append all three to the li
    list.append(li);
  }

  count.textContent = remainingLabel(todos);
  // TODO: mark the active filter button with the "active" class
  save();
}

// ---------- 4. Events: user action → change state → render ----------
form.addEventListener("submit", (event) => {
  event.preventDefault(); // without this, the browser reloads the page!
  // TODO: if the input is blank, do nothing
  // TODO: todos = addTodo(todos, input.value)
  // TODO: clear the input and re-render
});

list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  const id = li.dataset.id;
  // TODO: if the click was on the checkbox → toggleTodo
  // TODO: if the click was on .delete      → removeTodo
  // TODO: re-render
});

// TODO: filter buttons → set currentFilter from button.dataset.filter, then render
// TODO: #clear-done → clearDone, then render

// ---------- 5. Persistence with localStorage ----------
function save() {
  // TODO: localStorage.setItem("todos", JSON.stringify(todos))
}

function load() {
  // TODO: read "todos" from localStorage and JSON.parse it
  // Return [] if there's nothing saved (or the data is broken — try/catch!)
  return [];
}

// ---------- 6. ⭐ Bonus: fetch from a real API ----------
// On #load-samples click:
//   fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
//   → for each item, add a todo with its `title` (and `completed` → done)
//   → render
// Open DevTools → Network to watch the request!

render();
