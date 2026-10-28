import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("projects", () => {
  it("has unique names", () => {
    const names = projects.map((p) => p.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("links every project to an https repo", () => {
    for (const p of projects) expect(p.repo).toMatch(/^https:\/\//);
  });
});
