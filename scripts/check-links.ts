import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { extractHrefs, internalTarget } from "../src/lib/links.ts";

const dist = "dist";
const broken: string[] = [];

for (const file of readdirSync(dist, { recursive: true, encoding: "utf8" })) {
  if (!file.endsWith(".html")) continue;
  for (const href of extractHrefs(readFileSync(join(dist, file), "utf8"))) {
    const target = internalTarget(href);
    if (target && !existsSync(join(dist, target))) broken.push(`${file}: ${href}`);
  }
}

if (broken.length) {
  console.error(`broken links:\n${broken.join("\n")}`);
  process.exit(1);
}
console.log("links ok");
