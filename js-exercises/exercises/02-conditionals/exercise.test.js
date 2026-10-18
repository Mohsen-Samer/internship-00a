import { test } from "node:test";
import assert from "node:assert/strict";
import { fizzBuzz, grade, dayType, ticketPrice, displayName, canRentCar } from "./exercise.js";

test("fizzBuzz", () => {
  assert.equal(fizzBuzz(1), "1");
  assert.equal(fizzBuzz(3), "Fizz");
  assert.equal(fizzBuzz(10), "Buzz");
  assert.equal(fizzBuzz(15), "FizzBuzz");
  assert.equal(fizzBuzz(45), "FizzBuzz");
  assert.equal(fizzBuzz(7), "7");
});

test("grade boundaries", () => {
  assert.equal(grade(100), "A");
  assert.equal(grade(90), "A");
  assert.equal(grade(89), "B");
  assert.equal(grade(80), "B");
  assert.equal(grade(70), "C");
  assert.equal(grade(60), "D");
  assert.equal(grade(59), "F");
  assert.equal(grade(0), "F");
});

test("grade invalid input", () => {
  assert.equal(grade(-1), "Invalid");
  assert.equal(grade(101), "Invalid");
  assert.equal(grade("90"), "Invalid");
  assert.equal(grade(NaN), "Invalid");
});

test("dayType", () => {
  assert.equal(dayType("saturday"), "Weekend");
  assert.equal(dayType("SUNDAY"), "Weekend");
  assert.equal(dayType("Monday"), "Weekday");
  assert.equal(dayType("friday"), "Weekday");
  assert.equal(dayType("Funday"), "Unknown");
});

test("ticketPrice", () => {
  assert.equal(ticketPrice(5), 5);
  assert.equal(ticketPrice(11), 5);
  assert.equal(ticketPrice(12), 10);
  assert.equal(ticketPrice(64), 10);
  assert.equal(ticketPrice(65), 7);
  assert.equal(ticketPrice(90), 7);
});

test("displayName uses the right fallback operator", () => {
  assert.equal(displayName("ada"), "ada");
  assert.equal(displayName(null), "Anonymous");
  assert.equal(displayName(undefined), "Anonymous");
  assert.equal(displayName(""), "");
});

test("canRentCar", () => {
  assert.equal(canRentCar({ age: 25, hasLicense: true, withVip: false }), true);
  assert.equal(canRentCar({ age: 20, hasLicense: true, withVip: false }), false);
  assert.equal(canRentCar({ age: 30, hasLicense: false, withVip: false }), false);
  assert.equal(canRentCar({ age: 19, hasLicense: false, withVip: true }), true);
});
