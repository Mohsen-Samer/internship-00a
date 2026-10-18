import { test } from "node:test";
import assert from "node:assert/strict";
import {
  wait, getUserName, getUserWithPosts, getManyNames, safeGetUser, withTimeout, fetchReport,
} from "./exercise.js";

test("wait returns a promise that resolves after ms", async () => {
  const p = wait(60);
  assert.ok(p instanceof Promise, "wait must return a Promise");
  const start = Date.now();
  await p;
  assert.ok(Date.now() - start >= 50, "resolved too early");
});

test("getUserName", async () => {
  assert.equal(await getUserName(1), "Ada Lovelace");
  assert.equal(await getUserName(3), "Grace Hopper");
});

test("getUserWithPosts", async () => {
  const ada = await getUserWithPosts(1);
  assert.equal(ada.name, "Ada Lovelace");
  assert.equal(ada.email, "ada@example.com");
  assert.deepEqual(ada.posts.map((p) => p.id), [101, 102]);
  const grace = await getUserWithPosts(3);
  assert.equal(grace.posts.length, 1);
});

test("getManyNames runs in parallel", async () => {
  const start = Date.now();
  const names = await getManyNames([3, 1, 2]);
  const elapsed = Date.now() - start;
  assert.deepEqual(names, ["Grace Hopper", "Ada Lovelace", "Alan Turing"]);
  assert.ok(elapsed < 120, `took ${elapsed}ms — are you awaiting one at a time? Use Promise.all`);
});

test("safeGetUser never throws", async () => {
  assert.equal((await safeGetUser(2)).name, "Alan Turing");
  assert.equal(await safeGetUser(999), null);
});

test("withTimeout resolves when fast enough", async () => {
  assert.equal(await withTimeout(20, 200), "slow data");
});

test("withTimeout rejects when too slow", async () => {
  await assert.rejects(() => withTimeout(500, 50), { message: "Timeout" });
});

test("fetchReport", async () => {
  const report = await fetchReport([1, 99, 3, 42]);
  assert.deepEqual(report, { found: ["Ada Lovelace", "Grace Hopper"], missing: [99, 42] });
});
