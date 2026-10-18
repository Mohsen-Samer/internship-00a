# 01 · Variables & Types 📦

## `let` vs `const` (and why not `var`)

```js
const name = "Ada";     // can't be reassigned — use this by default
let score = 0;          // can be reassigned
score = score + 10;     // ✅
// name = "Grace";      // ❌ TypeError: Assignment to constant variable
```

> Use `const` by default. Use `let` only when the value must change. Avoid `var` (old, function-scoped, surprising).

## The 7 primitive types (+ objects)

```js
typeof "hello"     // "string"
typeof 42          // "number"   (integers AND decimals)
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof 10n         // "bigint"
typeof Symbol()    // "symbol"
typeof null        // "object"   😱 a famous bug from 1995, kept forever
typeof [1, 2]      // "object"   (arrays are objects — use Array.isArray)
typeof {}          // "object"
typeof (() => {})  // "function"
```

## Template literals

```js
const item = "coffee", price = 3.5;
`One ${item} costs $${price.toFixed(2)}`   // "One coffee costs $3.50"
```

## Truthy & falsy

Only these values are **falsy**: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
**Everything else is truthy** — including `"0"`, `"false"`, `[]` and `{}`!

```js
Boolean("")     // false
Boolean("0")    // true  🤯
Boolean([])     // true  🤯
!!"hello"       // true  (double-bang = quick Boolean conversion)
```

## Destructuring

```js
const [first, second] = ["a", "b"];
let x = 1, y = 2;
[x, y] = [y, x];   // swap! x = 2, y = 1
```

## 🧠 Predict before you run

What does each print? Write your guesses, then try them in `node`:

```js
console.log("5" + 3);
console.log("5" - 3);
console.log(0.1 + 0.2 === 0.3);
console.log(typeof NaN);
```

## Your tasks → `exercise.js`

Run `npm run test:01` until everything is green.
