# 08 · Classes 🏗️

A class is a **blueprint** for creating objects that share the same shape and behaviour.

```js
class Dog {
  #barkCount = 0;                 // private field — only reachable inside the class
  static species = "Canis familiaris"; // belongs to the class, not each dog

  constructor(name, breed = "mixed") {
    this.name = name;              // runs once, when you call `new Dog(...)`
    this.breed = breed;
  }

  bark() {                         // method — shared by every dog
    this.#barkCount++;
    return `${this.name} says Woof!`;
  }

  get barks() {                    // getter — read like a property: rex.barks
    return this.#barkCount;
  }
}

const rex = new Dog("Rex", "beagle");
rex.bark();        // "Rex says Woof!"
rex.barks;         // 1
rex.#barkCount;    // ❌ SyntaxError — private!
Dog.species;       // "Canis familiaris"
```

## Inheritance

```js
class Puppy extends Dog {
  bark() {
    return super.bark().replace("Woof", "Yip");   // call the parent's version
  }
}
new Puppy("Bit").bark();   // "Bit says Yip!"
```

## Throwing errors

Guard your class against bad input — fail loudly and early:

```js
if (typeof price !== "number" || price < 0) {
  throw new Error("Invalid price");
}
```

> 💡 Prefer composition ("has a") over deep inheritance chains ("is a") in real apps.

## Your tasks → `exercise.js`

Build a **ShoppingCart** that a real e-commerce front end could use. Run `npm run test:08`.
