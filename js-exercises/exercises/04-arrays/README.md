# 04 · Arrays 🧺

## The big three: map, filter, reduce

```js
const prices = [10, 25, 3, 40];

prices.map(p => p * 2);          // [20, 50, 6, 80]     transform EVERY item
prices.filter(p => p > 5);       // [10, 25, 40]        KEEP some items
prices.reduce((sum, p) => sum + p, 0); // 78            COMBINE into one value
```

🍔 Think of a burger kitchen:
- **map** — 🥩🥩🥩 → cook each → 🍖🍖🍖
- **filter** — 🍖🥦🍖 → keep only meat → 🍖🍖
- **reduce** — 🍞🍖🥬🍞 → stack them all → 🍔

## Finding things

```js
const users = [{ id: 1, name: "Ada" }, { id: 2, name: "Linus" }];
users.find(u => u.id === 2);        // { id: 2, name: "Linus" } (or undefined)
users.findIndex(u => u.id === 2);   // 1
users.some(u => u.name === "Ada");  // true  — at least one?
users.every(u => u.id > 0);         // true  — all of them?
[1, 2, 3].includes(2);              // true
```

## Mutating vs non-mutating ⚠️

```js
const nums = [3, 1, 2];
nums.sort();              // MUTATES nums!  (and sorts as strings by default 😬)
[10, 9, 1].sort();        // [1, 10, 9]  🤯
[10, 9, 1].sort((a, b) => a - b);   // [1, 9, 10]  ✅ always pass a compare fn

const sorted = [...nums].sort((a, b) => a - b); // copy first → original untouched
const sorted2 = nums.toSorted((a, b) => a - b); // modern, non-mutating
```

## Spread & Set

```js
const a = [1, 2], b = [3, 4];
const all = [...a, ...b, 5];        // [1, 2, 3, 4, 5]
const unique = [...new Set([1, 1, 2, 3, 3])];  // [1, 2, 3]
```

## Chaining

```js
const total = cart
  .filter(item => item.inStock)
  .map(item => item.price * item.qty)
  .reduce((sum, x) => sum + x, 0);
```

## Your tasks → `exercise.js`

Use array methods — **no `for` loops allowed** in this exercise! Run `npm run test:04`.
