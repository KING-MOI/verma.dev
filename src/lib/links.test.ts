import { describe, expect, it } from "vitest";
import { extractHrefs, internalTarget } from "./links";

describe("internalTarget", () => {
  it("maps directory links to their index.html", () => {
    expect(internalTarget("/")).toBe("/index.html");
    expect(internalTarget("/writing/small-loops/")).toBe(
      "/writing/small-loops/index.html",
    );
  });

  it("keeps file links as they are", () => {
    expect(internalTarget("/rss.xml")).toBe("/rss.xml");
  });

  it("drops hashes and query strings", () => {
    expect(internalTarget("/projects/#envault")).toBe("/projects/index.html");
    expect(internalTarget("/?ref=feed")).toBe("/index.html");
  });

  it("ignores external, protocol-relative and mailto links", () => {
    expect(internalTarget("https://github.com")).toBeNull();
    expect(internalTarget("//cdn.example.com/x.js")).toBeNull();
    expect(internalTarget("mailto:hi@example.com")).toBeNull();
    expect(internalTarget("#content")).toBeNull();
  });
});

describe("extractHrefs", () => {
  it("pulls href and src attributes", () => {
    const html =
      '<a href="/about/">a</a><img src="/me.png"><link rel="icon" href="/favicon.svg">';
    expect(extractHrefs(html)).toEqual(["/about/", "/me.png", "/favicon.svg"]);
  });
});
