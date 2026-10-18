# 02 · Conditionals 🚦

## Always use `===` (strict equality)

```js
0 == "0"     // true   😬 (== converts types first)
0 === "0"    // false  ✅ (=== compares type AND value)
null == undefined   // true
null === undefined  // false
```

## if / else if / else

```js
const temp = 28;
if (temp > 30) {
  console.log("🔥 Hot");
} else if (temp > 20) {
  console.log("😎 Nice");
} else {
  console.log("🧥 Cold");
}
```

## Ternary — a one-line if/else that *returns a value*

```js
const label = age >= 18 ? "adult" : "minor";
```

## Logical operators

```js
true && "yes"        // "yes"   (&& returns the first falsy, or the last value)
null || "default"    // "default" (|| returns the first truthy)
0 ?? 10              // 0       (?? only falls back for null/undefined)
0 || 10              // 10      (|| falls back for ANY falsy value)
```

## switch

```js
switch (light) {
  case "green":  action = "go"; break;
  case "yellow": action = "slow down"; break;
  case "red":    action = "stop"; break;
  default:       action = "???";
}
```

> Forgot `break`? Execution "falls through" into the next case. Sometimes useful, usually a bug.

## Early return — keep code flat

```js
function withdraw(balance, amount) {
  if (amount <= 0) return "Invalid amount";
  if (amount > balance) return "Insufficient funds";
  return balance - amount;
}
```

## Your tasks → `exercise.js`

Run `npm run test:02`.
