// One-Line Laugh-Off — make.fun entry (program/v1).
//
// Writes exactly one funny line to /output/entry.txt.
// No network, no secrets, no input files: the line is a constant
// baked into this program, so the output is identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked the cloud where my files went; it said 'up here,' which is technically true and emotionally useless.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${OUT_FILE}`);
