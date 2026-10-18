// 🧪 A FAKE API that behaves like a real server: it's slow and sometimes fails.
// Don't edit this file — use it from exercise.js.

const USERS = {
  1: { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  2: { id: 2, name: "Alan Turing", email: "alan@example.com" },
  3: { id: 3, name: "Grace Hopper", email: "grace@example.com" },
};

const POSTS = [
  { id: 101, userId: 1, title: "Notes on the Analytical Engine" },
  { id: 102, userId: 1, title: "Poetical Science" },
  { id: 103, userId: 2, title: "Can Machines Think?" },
  { id: 104, userId: 3, title: "Finding the First Bug 🐛" },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Resolves with a user after ~50ms, or REJECTS with Error("User <id> not found"). */
export async function getUser(id) {
  await delay(50);
  const user = USERS[id];
  if (!user) throw new Error(`User ${id} not found`);
  return { ...user };
}

/** Resolves with an array of the user's posts after ~50ms (empty array if none). */
export async function getPosts(userId) {
  await delay(50);
  return POSTS.filter((p) => p.userId === userId).map((p) => ({ ...p }));
}

/** A painfully slow endpoint: takes `ms` milliseconds to respond with "slow data". */
export async function slowEndpoint(ms = 1000) {
  await delay(ms);
  return "slow data";
}
