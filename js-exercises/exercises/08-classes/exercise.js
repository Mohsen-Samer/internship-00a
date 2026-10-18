// Exercise 08 · Classes — build a ShoppingCart 🛒
// Run: npm run test:08

/**
 * Requirements (read the tests for exact behaviour!):
 *
 * const cart = new ShoppingCart();
 *
 * cart.addItem({ name: "Book", price: 12.5 }, 2)
 *   - quantity defaults to 1
 *   - adding an item that's already in the cart INCREASES its quantity
 *   - throws Error("Invalid quantity") if quantity isn't a positive integer
 *   - throws Error("Invalid price") if price isn't a number >= 0
 *   - returns `this` so calls can be chained: cart.addItem(a).addItem(b)
 *
 * cart.removeItem("Book")       removes the item completely (no error if missing)
 * cart.updateQuantity("Book", 5) sets quantity; 0 removes the item
 *
 * cart.itemCount   (getter) total number of units, e.g. 2 books + 1 pen = 3
 * cart.subtotal    (getter) sum of price × quantity, rounded to 2 decimals
 * cart.total       (getter) subtotal minus discount, rounded to 2 decimals
 * cart.items       (getter) a COPY of the items array: [{ name, price, quantity }]
 *                  (changing the returned array must not change the cart!)
 *
 * cart.applyCoupon(code)
 *   - "SAVE10" → 10% off,  "HALF" → 50% off
 *   - anything else throws Error("Invalid coupon")
 *   - codes are case-insensitive
 *
 * cart.clear()  empties the cart and removes the coupon
 *
 * Store your data in PRIVATE fields (#items, #discount).
 */
export class ShoppingCart {
  // TODO
}
