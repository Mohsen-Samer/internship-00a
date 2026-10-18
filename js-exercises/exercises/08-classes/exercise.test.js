import { test } from "node:test";
import assert from "node:assert/strict";
import { ShoppingCart } from "./exercise.js";

const book = { name: "Book", price: 12.5 };
const pen = { name: "Pen", price: 1.99 };

test("a new cart is empty", () => {
  const cart = new ShoppingCart();
  assert.equal(cart.itemCount, 0);
  assert.equal(cart.subtotal, 0);
  assert.equal(cart.total, 0);
  assert.deepEqual(cart.items, []);
});

test("addItem with default quantity and chaining", () => {
  const cart = new ShoppingCart();
  const returned = cart.addItem(book, 2).addItem(pen);
  assert.equal(returned, cart, "addItem should return this");
  assert.equal(cart.itemCount, 3);
  assert.deepEqual(cart.items, [
    { name: "Book", price: 12.5, quantity: 2 },
    { name: "Pen", price: 1.99, quantity: 1 },
  ]);
});

test("adding the same item merges quantities", () => {
  const cart = new ShoppingCart().addItem(pen).addItem(pen, 3);
  assert.equal(cart.items.length, 1);
  assert.equal(cart.itemCount, 4);
});

test("validation", () => {
  const cart = new ShoppingCart();
  assert.throws(() => cart.addItem(book, 0), { message: "Invalid quantity" });
  assert.throws(() => cart.addItem(book, -1), { message: "Invalid quantity" });
  assert.throws(() => cart.addItem(book, 1.5), { message: "Invalid quantity" });
  assert.throws(() => cart.addItem({ name: "X", price: -5 }), { message: "Invalid price" });
  assert.throws(() => cart.addItem({ name: "X", price: "5" }), { message: "Invalid price" });
});

test("subtotal is rounded to 2 decimals", () => {
  const cart = new ShoppingCart().addItem(book, 2).addItem(pen, 3);
  assert.equal(cart.subtotal, 30.97);
});

test("removeItem and updateQuantity", () => {
  const cart = new ShoppingCart().addItem(book).addItem(pen);
  cart.removeItem("Book");
  assert.deepEqual(cart.items.map((i) => i.name), ["Pen"]);
  cart.removeItem("Nothing");
  cart.updateQuantity("Pen", 10);
  assert.equal(cart.itemCount, 10);
  cart.updateQuantity("Pen", 0);
  assert.equal(cart.items.length, 0);
});

test("coupons", () => {
  const cart = new ShoppingCart().addItem({ name: "TV", price: 200 });
  cart.applyCoupon("save10");
  assert.equal(cart.total, 180);
  cart.applyCoupon("HALF");
  assert.equal(cart.total, 100);
  assert.throws(() => cart.applyCoupon("FREESTUFF"), { message: "Invalid coupon" });
});

test("items getter returns a copy", () => {
  const cart = new ShoppingCart().addItem(book);
  const items = cart.items;
  items.push({ name: "Hack", price: 0, quantity: 99 });
  items[0].quantity = 1000;
  assert.equal(cart.itemCount, 1, "cart was modified from outside!");
});

test("data is private", () => {
  const cart = new ShoppingCart().addItem(book);
  assert.deepEqual(Object.keys(cart), [], "use #private fields, not public properties");
});

test("clear", () => {
  const cart = new ShoppingCart().addItem(book).addItem(pen);
  cart.applyCoupon("HALF");
  cart.clear();
  assert.equal(cart.itemCount, 0);
  cart.addItem({ name: "TV", price: 200 });
  assert.equal(cart.total, 200, "coupon should be removed by clear()");
});
