import { test } from "node:test";
import assert from "node:assert/strict";
import { sum, applyDiscount, makeCounter, once, compose, trackCalls } from "./exercise.js";

test("sum is an arrow function with rest params", () => {
  assert.equal(typeof sum, "function", "sum should be a function");
  assert.equal(sum.prototype, undefined, "sum should be an ARROW function");
  assert.equal(sum(), 0);
  assert.equal(sum(5), 5);
  assert.equal(sum(1, 2, 3, 4), 10);
});

test("applyDiscount with default parameter", () => {
  assert.equal(applyDiscount(100), 90);
  assert.equal(applyDiscount(80, 25), 60);
  assert.equal(applyDiscount(19.99, 15), 16.99);
  assert.equal(applyDiscount(50, 0), 50);
});

test("makeCounter uses a closure", () => {
  const c = makeCounter(5);
  assert.equal(c.increment(), 6);
  assert.equal(c.increment(), 7);
  assert.equal(c.decrement(), 6);
  assert.equal(c.value(), 6);
  assert.equal(c.reset(), 5);
  const keys = Object.keys(c).sort();
  assert.deepEqual(keys, ["decrement", "increment", "reset", "value"], "count must stay private");
});

test("makeCounter instances are independent", () => {
  const a = makeCounter();
  const b = makeCounter(100);
  a.increment(); a.increment();
  assert.equal(a.value(), 2);
  assert.equal(b.value(), 100);
});

test("once only calls fn the first time", () => {
  let calls = 0;
  const init = once((x) => { calls++; return x * 2; });
  assert.equal(init(21), 42);
  assert.equal(init(100), 42);
  assert.equal(init(), 42);
  assert.equal(calls, 1);
});

test("compose", () => {
  const add1 = (x) => x + 1;
  const double = (x) => x * 2;
  assert.equal(compose(add1, double)(5), 11);
  assert.equal(compose(double, add1)(5), 12);
});

test("trackCalls", () => {
  const spy = trackCalls(Math.max);
  assert.equal(spy.calls, 0);
  assert.equal(spy(1, 5, 3), 5);
  spy(2, 2);
  assert.equal(spy.calls, 2);
});
