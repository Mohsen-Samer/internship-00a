// Part 1 · Pure to-do logic — NO DOM code in this file.
// Every function returns a NEW array/object. Never mutate the input!
// Run: npm run test:09

/**
 * Create a todo object: { id, text, done: false }
 * - `text` must be trimmed
 * - throw Error("Todo text is required") if the trimmed text is empty
 * - use crypto.randomUUID() for the id (works in browsers and Node)
 */
export function createTodo(text) {
  // TODO
}

/** Return a new array with a new todo added at the END. */
export function addTodo(todos, text) {
  // TODO
}

/**
 * Return a new array where the todo with `id` has `done` flipped.
 * The toggled todo must be a NEW object; others can be reused.
 * hint: map + spread
 */
export function toggleTodo(todos, id) {
  // TODO
}

/** Return a new array without the todo with `id`. */
export function removeTodo(todos, id) {
  // TODO
}

/**
 * filter: "all" | "active" | "done"
 * "active" = not done. Unknown filters behave like "all".
 */
export function filterTodos(todos, filter) {
  // TODO
}

/**
 * Return a friendly counter label for the not-done todos:
 * 0 → "0 items left", 1 → "1 item left", 5 → "5 items left"
 */
export function remainingLabel(todos) {
  // TODO
}

/** Return a new array with all done todos removed. */
export function clearDone(todos) {
  // TODO
}
