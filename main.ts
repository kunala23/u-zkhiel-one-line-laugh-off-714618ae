// One-Line Laugh-Off — make.fun entry (program/v1).
//
// Writes exactly one funny line to /output/entry.txt.
// No network, no secrets, no input files: the line is a constant
// baked into this program, so the output is identical on every run.
// The gate is 1-200 characters of non-whitespace text; this entry is
// 108 characters, comfortably inside it, and the check below enforces
// that bound at runtime so a future edit cannot silently break it.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked the cloud where my files went; it said 'up here,' which is technically true and emotionally useless.";

// Fail loudly instead of writing an out-of-gate entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Entry must be 1-200 non-whitespace characters, got ${JOKE.length}`);
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Create the output directory (if needed) and write the entry in one
// place, so the write path is easy to audit and reuse.
function writeEntry(path: string, text: string): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(OUT_FILE, JOKE);
console.log(`Wrote ${JOKE.length} characters to ${OUT_FILE}`);
