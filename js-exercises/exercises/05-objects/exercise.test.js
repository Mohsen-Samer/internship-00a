import { test } from "node:test";
import assert from "node:assert/strict";
import { getFullName, updateUser, countWords, invert, getCity, createBankAccount } from "./exercise.js";

test("getFullName", () => {
  assert.equal(getFullName({ firstName: "Ada", lastName: "Lovelace" }), "Ada Lovelace");
  assert.equal(getFullName({ lastName: "Hopper", firstName: "Grace", age: 85 }), "Grace Hopper");
});

test("updateUser returns a new object without mutating", () => {
  const user = { name: "Ada", age: 36 };
  const result = updateUser(user, { age: 37, role: "engineer" });
  assert.deepEqual(result, { name: "Ada", age: 37, role: "engineer" });
  assert.deepEqual(user, { name: "Ada", age: 36 }, "original was mutated!");
  assert.notEqual(result, user);
});

test("countWords", () => {
  assert.deepEqual(countWords("the cat and THE hat"), { the: 2, cat: 1, and: 1, hat: 1 });
  assert.deepEqual(countWords("Go go GO"), { go: 3 });
});

test("invert", () => {
  assert.deepEqual(invert({ a: "x", b: "y" }), { x: "a", y: "b" });
  assert.deepEqual(invert({}), {});
});

test("getCity with optional chaining", () => {
  assert.equal(getCity({ address: { city: "Cairo" } }), "Cairo");
  assert.equal(getCity({ address: {} }), "Unknown");
  assert.equal(getCity({}), "Unknown");
  assert.equal(getCity(null), "Unknown");
  assert.equal(getCity(undefined), "Unknown");
});

test("createBankAccount", () => {
  const acc = createBankAccount("Ada");
  assert.equal(acc.owner, "Ada");
  assert.equal(acc.balance, 0);
  assert.equal(acc.deposit(100), 100);
  assert.equal(acc.withdraw(50), 50);
  assert.equal(acc.balance, 50);
  assert.equal(acc.statement(), "Ada: $50");
  assert.throws(() => acc.withdraw(500), { message: "Insufficient funds" });
  assert.equal(acc.balance, 50, "failed withdrawal must not change balance");
});

test("bank accounts are independent", () => {
  const a = createBankAccount("A");
  const b = createBankAccount("B");
  a.deposit(10);
  assert.equal(b.balance, 0);
});
