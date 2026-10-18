// Exercise 06 · Strings & Loops
// Run: npm run test:06

/** capitalize("hELLO") → "Hello" */
export function capitalize(word) {
  // TODO
}

/** titleCase("the lord of the rings") → "The Lord Of The Rings" */
export function titleCase(sentence) {
  // TODO
}

/**
 * Ignore case, spaces and punctuation.
 * isPalindrome("A man, a plan, a canal: Panama!") → true
 * isPalindrome("hello") → false
 */
export function isPalindrome(text) {
  // TODO
}

/** Count vowels (a, e, i, o, u — any case). Use a for...of loop. */
export function countVowels(text) {
  // TODO
}

/**
 * Shorten long text. If text is longer than `max`, cut it and add "..."
 * so the TOTAL length is exactly `max`. Otherwise return it unchanged.
 * truncate("Hello world", 8) → "Hello..."
 * truncate("Hi", 8)          → "Hi"
 */
export function truncate(text, max) {
  // TODO
}

/**
 * Build a multiplication table as an array of strings.
 * multiplicationTable(3, 4) → ["3 x 1 = 3", "3 x 2 = 6", "3 x 3 = 9", "3 x 4 = 12"]
 */
export function multiplicationTable(n, upTo) {
  // TODO
}

/**
 * Return the first word that appears twice, or null.
 * Use a loop with `break` or early `return`, and a Set to remember what you've seen.
 * firstRepeatedWord("I think therefore I am") → "I"
 */
export function firstRepeatedWord(sentence) {
  // TODO
}

/**
 * Compress repeated letters:  "aaabccdddd" → "a3bc2d4"
 * (a letter appearing once has no number)
 */
export function compress(text) {
  // TODO
}
