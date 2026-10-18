# 03 · Functions 🔧

## Three ways to write a function

```js
function add(a, b) { return a + b; }         // declaration (hoisted)
const add2 = function (a, b) { return a + b; }; // expression
const add3 = (a, b) => a + b;                 // arrow — implicit return!
const square = x => x * x;                    // one param: parens optional
const makeUser = name => ({ name });          // returning an object? wrap in ( )
```

## Default & rest parameters

```js
const greet = (name = "friend") => `Hello, ${name}!`;
greet();          // "Hello, friend!"

const sum = (...nums) => nums.reduce((total, n) => total + n, 0);
sum(1, 2, 3, 4);  // 10
```

## Functions are values 🎁

You can store them, pass them in, and return them. A function that takes or returns
another function is a **higher-order function**.

```js
const shout = text => text.toUpperCase() + "!";
const twice = (fn, value) => fn(fn(value));
twice(shout, "hi");   // "HI!!"
```

## Closures — functions remember where they were born

```js
function makeGreeter(greeting) {
  return name => `${greeting}, ${name}`;   // remembers `greeting`
}
const hello = makeGreeter("Hello");
const hola  = makeGreeter("Hola");
hello("Ada");   // "Hello, Ada"
hola("Ada");    // "Hola, Ada"
```

Closures let you create **private state** nobody else can touch:

```js
function makeSecret(secret) {
  return { reveal: () => secret };   // `secret` can't be changed from outside
}
```

## Your tasks → `exercise.js`

Run `npm run test:03`.
