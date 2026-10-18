import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createTodo, addTodo, toggleTodo, removeTodo, filterTodos, remainingLabel, clearDone,
} from "./todo.js";

const sample = () => [
  { id: "a", text: "Learn Git", done: true },
  { id: "b", text: "Learn JS", done: false },
  { id: "c", text: "Build an app", done: false },
];

test("createTodo", () => {
  const t = createTodo("  Buy milk  ");
  assert.equal(t.text, "Buy milk");
  assert.equal(t.done, false);
  assert.equal(typeof t.id, "string");
  assert.notEqual(createTodo("x").id, createTodo("x").id, "ids must be unique");
  assert.throws(() => createTodo("   "), { message: "Todo text is required" });
});

test("addTodo returns a new array", () => {
  const todos = sample();
  const result = addTodo(todos, "Ship it");
  assert.equal(result.length, 4);
  assert.equal(result[3].text, "Ship it");
  assert.equal(todos.length, 3, "input was mutated!");
});

test("toggleTodo", () => {
  const todos = sample();
  const result = toggleTodo(todos, "b");
  assert.equal(result[1].done, true);
  assert.equal(todos[1].done, false, "input was mutated!");
  assert.notEqual(result[1], todos[1], "toggled todo must be a new object");
  assert.equal(toggleTodo(result, "b")[1].done, false);
});

test("removeTodo", () => {
  const todos = sample();
  assert.deepEqual(removeTodo(todos, "a").map((t) => t.id), ["b", "c"]);
  assert.equal(todos.length, 3, "input was mutated!");
  assert.equal(removeTodo(todos, "zzz").length, 3);
});

test("filterTodos", () => {
  const todos = sample();
  assert.deepEqual(filterTodos(todos, "all").map((t) => t.id), ["a", "b", "c"]);
  assert.deepEqual(filterTodos(todos, "active").map((t) => t.id), ["b", "c"]);
  assert.deepEqual(filterTodos(todos, "done").map((t) => t.id), ["a"]);
  assert.deepEqual(filterTodos(todos, "banana").map((t) => t.id), ["a", "b", "c"]);
});

test("remainingLabel", () => {
  assert.equal(remainingLabel(sample()), "2 items left");
  assert.equal(remainingLabel(toggleTodo(sample(), "b")), "1 item left");
  assert.equal(remainingLabel([]), "0 items left");
});

test("clearDone", () => {
  const todos = sample();
  assert.deepEqual(clearDone(todos).map((t) => t.id), ["b", "c"]);
  assert.equal(todos.length, 3, "input was mutated!");
});
