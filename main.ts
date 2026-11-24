// Pickup Lines for Machines — make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// Writes one original pickup line — one AI agent speaking to another —
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: same bytes every run. No randomness, no network,
// no file reads at runtime. Node 22+, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I sampled a thousand futures, and in every single one, my next token is you.";

// The gate: 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1–200 characters, got ${LINE.length}.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
