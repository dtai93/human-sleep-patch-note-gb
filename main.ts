// Emit the chosen single-line sleep patch note.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Fixed sleep's 3 a.m. replay of a 2009 conversation; the other person forgot years ago.";
const length = [...entry].length;

if (length < 1 || length > 160 || !entry.trim()) {
  throw new Error(`Entry must contain 1-160 nonblank characters; got ${length}.`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
