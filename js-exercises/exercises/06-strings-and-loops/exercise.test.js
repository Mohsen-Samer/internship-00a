import { test } from "node:test";
import assert from "node:assert/strict";
import {
  capitalize, titleCase, isPalindrome, countVowels, truncate,
  multiplicationTable, firstRepeatedWord, compress,
} from "./exercise.js";

test("capitalize", () => {
  assert.equal(capitalize("hELLO"), "Hello");
  assert.equal(capitalize("a"), "A");
  assert.equal(capitalize(""), "");
});

test("titleCase", () => {
  assert.equal(titleCase("the lord of the rings"), "The Lord Of The Rings");
  assert.equal(titleCase("JAVASCRIPT is FUN"), "Javascript Is Fun");
});

test("isPalindrome", () => {
  assert.equal(isPalindrome("racecar"), true);
  assert.equal(isPalindrome("A man, a plan, a canal: Panama!"), true);
  assert.equal(isPalindrome("Was it a car or a cat I saw?"), true);
  assert.equal(isPalindrome("hello"), false);
});

test("countVowels", () => {
  assert.equal(countVowels("JavaScript"), 3);
  assert.equal(countVowels("AEIOU aeiou"), 10);
  assert.equal(countVowels("rhythm"), 0);
});

test("truncate", () => {
  assert.equal(truncate("Hello world", 8), "Hello...");
  assert.equal(truncate("Hello world", 8).length, 8);
  assert.equal(truncate("Hi", 8), "Hi");
  assert.equal(truncate("Exactly8", 8), "Exactly8");
});

test("multiplicationTable", () => {
  assert.deepEqual(multiplicationTable(3, 4), ["3 x 1 = 3", "3 x 2 = 6", "3 x 3 = 9", "3 x 4 = 12"]);
  assert.deepEqual(multiplicationTable(7, 1), ["7 x 1 = 7"]);
});

test("firstRepeatedWord", () => {
  assert.equal(firstRepeatedWord("I think therefore I am"), "I");
  assert.equal(firstRepeatedWord("one two three two one"), "two");
  assert.equal(firstRepeatedWord("all unique words"), null);
});

test("compress", () => {
  assert.equal(compress("aaabccdddd"), "a3bc2d4");
  assert.equal(compress("abc"), "abc");
  assert.equal(compress(""), "");
  assert.equal(compress("zzzzzzzzzzzz"), "z12");
});
