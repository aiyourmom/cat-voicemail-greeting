import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You've reached Socks. I'm pushing your glass off the table. Leave a message. I'll knock it over too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard: 1 line, 1-120 chars, not whitespace-only — fail hard before writing.
if (TEXT.length < 1 || TEXT.length > 120) {
  throw new Error(`gate: entry is ${TEXT.length} chars, must be 1-120`);
}
if (TEXT.trim().split("\n").length !== 1 || TEXT.trim().length === 0) {
  throw new Error("gate: entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`saved ${TEXT.length} characters to entry.txt`);
