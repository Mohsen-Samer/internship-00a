import { test } from "node:test";
import assert from "node:assert/strict";
import { describeType, greet, isTruthy, swap, celsiusToFahrenheit, toNumber } from "./exercise.js";

test("describeType: normal types", () => {
  assert.equal(describeType("hi"), "string");
  assert.equal(describeType(42), "number");
  assert.equal(describeType(true), "boolean");
  assert.equal(describeType(undefined), "undefined");
  assert.equal(describeType({}), "object");
  assert.equal(describeType(() => {}), "function");
});

test("describeType: fixes null and arrays", () => {
  assert.equal(describeType(null), "null");
  assert.equal(describeType([]), "array");
  assert.equal(describeType([1, 2, 3]), "array");
});

test("greet uses a template literal", () => {
  assert.equal(greet("Ada", 36), "Hi, I'm Ada and I'm 36 years old.");
  assert.equal(greet("Linus", 21), "Hi, I'm Linus and I'm 21 years old.");
});

test("isTruthy: falsy values", () => {
  for (const v of [false, 0, "", null, undefined, NaN]) {
    assert.equal(isTruthy(v), false, `expected ${String(v)} to be falsy`);
  }
});

test("isTruthy: surprising truthy values", () => {
  for (const v of ["0", "false", [], {}, -1, " "]) {
    assert.equal(isTruthy(v), true, `expected ${JSON.stringify(v)} to be truthy`);
  }
});

test("swap", () => {
  assert.deepEqual(swap(1, 2), [2, 1]);
  assert.deepEqual(swap("a", "b"), ["b", "a"]);
});

test("celsiusToFahrenheit", () => {
  assert.equal(celsiusToFahrenheit(0), 32);
  assert.equal(celsiusToFahrenheit(100), 212);
  assert.equal(celsiusToFahrenheit(37.5), 99.5);
  assert.equal(celsiusToFahrenheit(-40), -40);
  assert.equal(celsiusToFahrenheit(21.3), 70.3);
});

test("toNumber", () => {
  assert.equal(toNumber("42"), 42);
  assert.equal(toNumber("3.14"), 3.14);
  assert.equal(toNumber("hello"), 0);
  assert.equal(toNumber("12abc"), 0);
});
