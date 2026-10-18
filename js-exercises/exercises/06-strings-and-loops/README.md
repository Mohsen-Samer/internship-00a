# 06 · Strings & Loops 🔁

## Loops

```js
for (let i = 0; i < 3; i++) { console.log(i); }   // 0 1 2 — classic, when you need the index

for (const fruit of ["🍎", "🍌"]) { console.log(fruit); } // for...of — VALUES of an iterable

for (const key in { a: 1, b: 2 }) { console.log(key); }   // for...in — KEYS of an object

let lives = 3;
while (lives > 0) { lives--; }                       // while — unknown number of repeats

["a", "b"].forEach((letter, i) => console.log(i, letter)); // array method
```

`break` exits the loop, `continue` skips to the next round.

> 🚫 Don't use `for...in` on arrays — use `for...of`.

## Strings are immutable — methods return NEW strings

```js
const s = "  Hello, World!  ";
s.trim();                 // "Hello, World!"
s.toUpperCase();          // "  HELLO, WORLD!  "
s.includes("World");      // true
s.trim().startsWith("He"); // true
"a-b-c".split("-");       // ["a", "b", "c"]
["a", "b"].join(" + ");   // "a + b"
"hello".slice(1, 4);      // "ell"
"hello".at(-1);           // "o"
"ha".repeat(3);           // "hahaha"
"7".padStart(3, "0");     // "007"
"a.b.c".replaceAll(".", "/"); // "a/b/c"
[..."hello"];             // ["h", "e", "l", "l", "o"]
```

## A tiny bit of regex

```js
"Hello, World!".replace(/[^a-z]/gi, "");   // "HelloWorld" — remove non-letters
/^\d+$/.test("12345");                    // true — only digits?
"a1b2c3".match(/\d/g);                    // ["1", "2", "3"]
```

## Your tasks → `exercise.js`

Run `npm run test:06`.
