import { describe, expect, it } from "vitest";
import { formatDate } from "./format";

describe("formatDate", () => {
  it("formats as short month, day, year", () => {
    expect(formatDate(new Date("2026-03-14"))).toBe("Mar 14, 2026");
  });
});
