import { describe, expect, it } from "vitest";
import { readingTime } from "./reading-time";

describe("readingTime", () => {
  it("never reports less than a minute", () => {
    expect(readingTime("")).toBe(1);
    expect(readingTime("just a few words")).toBe(1);
  });

  it("scales with word count", () => {
    expect(readingTime("word ".repeat(660))).toBe(3);
  });
});
