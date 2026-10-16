import { describe, expect, it } from "vitest";
import { byNewest } from "./posts";

const post = (id: string, date: string) => ({ id, data: { date: new Date(date) } });

describe("byNewest", () => {
  it("puts the most recent post first", () => {
    const posts = [post("a", "2026-01-01"), post("c", "2026-09-01"), post("b", "2026-05-01")];
    expect(byNewest(posts).map((p) => p.id)).toEqual(["c", "b", "a"]);
  });

  it("does not mutate the input", () => {
    const posts = [post("a", "2026-01-01"), post("b", "2026-05-01")];
    byNewest(posts);
    expect(posts.map((p) => p.id)).toEqual(["a", "b"]);
  });
});
