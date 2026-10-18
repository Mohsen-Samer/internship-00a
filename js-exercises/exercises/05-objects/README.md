# 05 · Objects 🗂️

## Creating & reading

```js
const user = {
  name: "Ada",
  age: 36,
  address: { city: "London" },
  "favourite-color": "purple",
};

user.name;                   // "Ada"
user["favourite-color"];     // bracket notation for odd keys…
const key = "age";
user[key];                   // …or dynamic keys → 36
```

## Destructuring

```js
const { name, age } = user;                  // pull out properties
const { name: fullName } = user;             // rename
const { role = "intern" } = user;            // default value
const { address: { city } } = user;          // nested → "London"
function show({ name, age }) { /* … */ }     // in parameters!
```

## Spread — copy & merge without mutating

```js
const updated = { ...user, age: 37 };   // new object, user is untouched
const merged  = { ...defaults, ...options };  // later keys win
```

> ⚠️ Spread is **shallow**: nested objects are still shared!

## Looping over objects

```js
Object.keys(user);     // ["name", "age", …]
Object.values(user);   // ["Ada", 36, …]
Object.entries(user);  // [["name", "Ada"], ["age", 36], …]
Object.fromEntries([["a", 1]]);  // { a: 1 }

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

## Optional chaining `?.`

```js
user.job.title;     // 💥 TypeError: Cannot read properties of undefined
user.job?.title;    // undefined — no crash
user.job?.title ?? "Unemployed";
```

## Methods & `this`

```js
const counter = {
  count: 0,
  increment() { this.count++; return this.count; },
};
counter.increment();  // 1 — `this` is the object before the dot
```

> Arrow functions don't have their own `this` — don't use them as object methods.

## Your tasks → `exercise.js`

Run `npm run test:05`.
