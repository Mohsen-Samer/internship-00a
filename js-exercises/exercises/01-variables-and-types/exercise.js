// Exercise 01 · Variables & Types
// Replace every TODO. Run: npm run test:01

/**
 * Return a string describing the type of `value`.
 * Like `typeof`, BUT fix its two weird cases:
 *   - null   → "null"   (typeof says "object")
 *   - arrays → "array"  (typeof says "object")
 *
 * describeType("hi")  → "string"
 * describeType(null)  → "null"
 * describeType([1,2]) → "array"
 */
export function describeType(value) {
  // TODO
}

/**
 * Use a template literal to build an introduction.
 * greet("Ada", 36) → "Hi, I'm Ada and I'm 36 years old."
 */
export function greet(name, age) {
  // TODO
}

/**
 * Return true if `value` is truthy, false if it's falsy.
 * Must return a real boolean (not just the value itself).
 */
export function isTruthy(value) {
  // TODO
}

/**
 * Return the two values swapped, as an array, using destructuring.
 * swap(1, 2) → [2, 1]
 */
export function swap(a, b) {
  // TODO
}

/**
 * Convert Celsius to Fahrenheit: F = C × 9/5 + 32
 * Round to 1 decimal place.  (hint: Math.round(x * 10) / 10)
 * celsiusToFahrenheit(100)  → 212
 * celsiusToFahrenheit(37.5) → 99.5
 */
export function celsiusToFahrenheit(celsius) {
  // TODO
}

/**
 * Convert a string to a number. If the result is not a valid number, return 0.
 * toNumber("42")    → 42
 * toNumber("3.14")  → 3.14
 * toNumber("hello") → 0
 * hint: Number(...) and Number.isNaN(...)
 */
export function toNumber(text) {
  // TODO
}
