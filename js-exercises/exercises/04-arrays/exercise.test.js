import { test } from "node:test";
import assert from "node:assert/strict";
import {
  getNames, getInStock, totalValue, findByName, sortByPrice,
  inStockNamesIn, groupByCategory, unique, chunk,
} from "./exercise.js";

const products = () => [
  { name: "Laptop", price: 1200, qty: 2, category: "tech", inStock: true },
  { name: "Mug", price: 8, qty: 0, category: "home", inStock: false },
  { name: "Phone", price: 800, qty: 5, category: "tech", inStock: true },
  { name: "Lamp", price: 45, qty: 3, category: "home", inStock: true },
  { name: "Cable", price: 12, qty: 0, category: "tech", inStock: false },
];

test("getNames", () => {
  assert.deepEqual(getNames(products()), ["Laptop", "Mug", "Phone", "Lamp", "Cable"]);
  assert.deepEqual(getNames([]), []);
});

test("getInStock", () => {
  assert.deepEqual(getInStock(products()).map((p) => p.name), ["Laptop", "Phone", "Lamp"]);
});

test("totalValue", () => {
  assert.equal(totalValue(products()), 1200 * 2 + 800 * 5 + 45 * 3);
  assert.equal(totalValue([]), 0);
});

test("findByName", () => {
  assert.equal(findByName(products(), "Phone").price, 800);
  assert.equal(findByName(products(), "Spaceship"), undefined);
});

test("sortByPrice does not mutate", () => {
  const list = products();
  const sorted = sortByPrice(list);
  assert.deepEqual(sorted.map((p) => p.price), [8, 12, 45, 800, 1200]);
  assert.equal(list[0].name, "Laptop", "original array was changed!");
  assert.notEqual(sorted, list, "must return a new array");
});

test("inStockNamesIn", () => {
  assert.deepEqual(inStockNamesIn(products(), "tech"), ["LAPTOP", "PHONE"]);
  assert.deepEqual(inStockNamesIn(products(), "home"), ["LAMP"]);
  assert.deepEqual(inStockNamesIn(products(), "toys"), []);
});

test("groupByCategory", () => {
  assert.deepEqual(groupByCategory(products()), {
    tech: ["Laptop", "Phone", "Cable"],
    home: ["Mug", "Lamp"],
  });
});

test("unique", () => {
  assert.deepEqual(unique([1, 2, 2, 3, 1]), [1, 2, 3]);
  assert.deepEqual(unique(["a", "b", "a"]), ["a", "b"]);
  assert.deepEqual(unique([]), []);
});

test("chunk", () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assert.deepEqual(chunk([1, 2, 3], 3), [[1, 2, 3]]);
  assert.deepEqual(chunk([], 4), []);
});
