// Exercise 07 · Async JavaScript
// Run: npm run test:07
import { getUser, getPosts, slowEndpoint } from "./api.js";

/**
 * Return a Promise that resolves (with no value) after `ms` milliseconds.
 * hint: new Promise(resolve => setTimeout(...))
 */
export function wait(ms) {
  // TODO
}

/**
 * Use async/await. Return just the user's name.
 * await getUserName(1) → "Ada Lovelace"
 */
export async function getUserName(id) {
  // TODO
}

/**
 * Return the user object with an extra `posts` property containing their posts.
 * await getUserWithPosts(1) → { id: 1, name: "Ada Lovelace", email: "...", posts: [ ... ] }
 * Bonus: can you fetch the user and posts IN PARALLEL?
 */
export async function getUserWithPosts(id) {
  // TODO
}

/**
 * Fetch several users IN PARALLEL (use Promise.all) and return their names.
 * await getManyNames([3, 1]) → ["Grace Hopper", "Ada Lovelace"]
 * Must be fast: 3 users should take ~50ms, not ~150ms.
 */
export async function getManyNames(ids) {
  // TODO
}

/**
 * Like getUser, but NEVER throws. Return null if the user doesn't exist.
 * hint: try / catch
 */
export async function safeGetUser(id) {
  // TODO
}

/**
 * Call slowEndpoint(ms) but give up after `timeoutMs`.
 * If it's too slow, REJECT with Error("Timeout").
 * hint: Promise.race between the request and a promise that rejects after timeoutMs
 */
export async function withTimeout(ms, timeoutMs) {
  // TODO
}

/**
 * Given ids (some may not exist), return a report:
 * { found: ["Ada Lovelace", ...], missing: [99, ...] }
 * Fetch in parallel. hint: Promise.allSettled keeps the order of ids.
 */
export async function fetchReport(ids) {
  // TODO
}
