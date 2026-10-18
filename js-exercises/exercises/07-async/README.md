# 07 · Async JavaScript ⏳

JavaScript runs on **one thread**. Slow things (network, timers, files) don't block it —
they run "in the background" and JS gets notified when they finish.

## The order surprise

```js
console.log("1 🍳 order breakfast");
setTimeout(() => console.log("3 🥞 pancakes ready"), 0);
console.log("2 ☕ drink coffee while waiting");
// prints 1, 2, 3 — even with a 0 ms timer!
```

## Promises — "I owe you a value later"

A Promise is in one of three states: **pending** ⏳ → **fulfilled** ✅ or **rejected** ❌

```js
fetch("https://api.example.com/users/1")
  .then(response => response.json())
  .then(user => console.log(user.name))
  .catch(error => console.error("Oops:", error))
  .finally(() => console.log("done either way"));
```

## async / await — the same thing, but readable

```js
async function showUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.error("Oops:", error.message);
  }
}
```

- `await` pauses **this function** (not the whole program) until the Promise settles.
- An `async` function **always returns a Promise**.

## Running things in parallel 🏎️

```js
// ❌ Sequential: 1s + 1s + 1s = 3s
const a = await getUser(1);
const b = await getUser(2);

// ✅ Parallel: ~1s total
const [a, b, c] = await Promise.all([getUser(1), getUser(2), getUser(3)]);
```

| Helper | Resolves when… |
|---|---|
| `Promise.all` | ALL succeed (rejects on first failure) |
| `Promise.allSettled` | all finish, success or failure |
| `Promise.race` | the FIRST one settles |
| `Promise.any` | the first one SUCCEEDS |

## Making your own Promise

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
await wait(1000); // pause 1 second
```

## Your tasks → `exercise.js`

`api.js` is a **fake server** with small random delays — read it first.
Run `npm run test:07`.
