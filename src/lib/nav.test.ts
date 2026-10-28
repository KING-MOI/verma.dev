import { describe, expect, it } from "vitest";
import { isActive } from "./nav";

describe("isActive", () => {
  it("only matches home on the root path", () => {
    expect(isActive("/", "/")).toBe(true);
    expect(isActive("/about", "/")).toBe(false);
  });

  it("matches a section and its children", () => {
    expect(isActive("/writing", "/writing")).toBe(true);
    expect(isActive("/writing/", "/writing")).toBe(true);
    expect(isActive("/writing/small-loops", "/writing")).toBe(true);
  });

  it("accepts hrefs with a trailing slash", () => {
    expect(isActive("/writing/", "/writing/")).toBe(true);
    expect(isActive("/writing/small-loops/", "/writing/")).toBe(true);
  });

  it("does not match a sibling that shares a prefix", () => {
    expect(isActive("/projects-archive", "/projects")).toBe(false);
  });
});
