// Exercise 05 · Objects
// Run: npm run test:05

/**
 * Use DESTRUCTURING in the parameter list.
 * getFullName({ firstName: "Ada", lastName: "Lovelace" }) → "Ada Lovelace"
 */
export function getFullName(person) {
  // TODO: hint — change the parameter to ({ firstName, lastName })
}

/**
 * Return a NEW user object with `changes` applied.
 * The original user must NOT be modified.
 * updateUser({ name: "Ada", age: 36 }, { age: 37 }) → { name: "Ada", age: 37 }
 */
export function updateUser(user, changes) {
  // TODO
}

/**
 * Count how many times each word appears (case-insensitive).
 * countWords("the cat and THE hat") → { the: 2, cat: 1, and: 1, hat: 1 }
 * hint: .toLowerCase(), .split(" "), and an object as a tally
 */
export function countWords(sentence) {
  // TODO
}

/**
 * Swap keys and values.
 * invert({ a: "x", b: "y" }) → { x: "a", y: "b" }
 * hint: Object.entries + map + Object.fromEntries
 */
export function invert(obj) {
  // TODO
}

/**
 * Safely read the user's city. Return "Unknown" if any part is missing.
 * getCity({ address: { city: "Cairo" } }) → "Cairo"
 * getCity({})                             → "Unknown"
 * getCity(null)                           → "Unknown"
 * hint: ?. and ??
 */
export function getCity(user) {
  // TODO
}

/**
 * Return an object with METHODS that use `this`:
 *  - owner             (string property)
 *  - balance           (number property, starts at 0)
 *  - deposit(amount)   adds to balance, returns new balance
 *  - withdraw(amount)  subtracts, returns new balance
 *                      throws new Error("Insufficient funds") if amount > balance
 *  - statement()       returns "<owner>: $<balance>"   e.g. "Ada: $50"
 */
export function createBankAccount(owner) {
  // TODO
}
