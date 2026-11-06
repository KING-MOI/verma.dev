import { describe, expect, it } from "vitest";
import { serializeJsonLd } from "./json-ld";

describe("serializeJsonLd", () => {
  it("cannot close the surrounding script tag", () => {
    const out = serializeJsonLd({ headline: "</script><b>hi</b>" });
    expect(out).not.toContain("</script>");
    expect(JSON.parse(out)).toEqual({ headline: "</script><b>hi</b>" });
  });
});
