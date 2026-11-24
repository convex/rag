/// <reference types="vite/client" />
import { test } from "vitest";
import { convexTest } from "convex-test";
import schema from "./schema.js";
export const modules = import.meta.glob("./**/*.*s");
import workpool from "@convex-dev/workpool/test";

export function initConvexTest() {
  const t = convexTest(schema, modules);
  workpool.register(t, "workpool");
  return t;
}

test("setup", () => {});
