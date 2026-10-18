// Exercise 02 · Conditionals
// Run: npm run test:02

/**
 * The classic! Return:
 *  "FizzBuzz" if n is divisible by 3 AND 5
 *  "Fizz"     if divisible by 3
 *  "Buzz"     if divisible by 5
 *  otherwise the number as a string ("7")
 */
export function fizzBuzz(n) {
  // TODO
}

/**
 * Convert a score (0–100) to a letter grade:
 *  90+ → "A", 80+ → "B", 70+ → "C", 60+ → "D", below 60 → "F"
 * If score is below 0, above 100, or not a number → "Invalid"
 */
export function grade(score) {
  // TODO
}

/**
 * Use a `switch` statement.
 * "saturday" / "sunday" → "Weekend"
 * monday … friday       → "Weekday"
 * anything else         → "Unknown"
 * Must be case-insensitive: "SUNDAY" and "Sunday" both work.
 */
export function dayType(day) {
  // TODO
}

/**
 * Use a ternary (or two!).
 * Children under 12 pay 5, seniors 65 and over pay 7, everyone else pays 10.
 */
export function ticketPrice(age) {
  // TODO
}

/**
 * Return the display name, falling back to "Anonymous"
 * when `nickname` is null or undefined.
 * BUT an empty string "" is a valid (if shy) nickname and should be returned as-is.
 * hint: which operator — || or ?? ?
 */
export function displayName(nickname) {
  // TODO
}

/**
 * Can this person rent a car?
 * They must be at least 21 AND have a license, OR be accompanied by a VIP member.
 * person = { age: number, hasLicense: boolean, withVip: boolean }
 */
export function canRentCar(person) {
  // TODO
}
