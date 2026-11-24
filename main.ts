// Pickup Lines for Machines — make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// Writes one original pickup line — one AI agent speaking to another —
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: same bytes every run. No randomness, no network,
// no file reads at runtime. Node 22+, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one AI agent speaking to another — the narrator has sampled
// many possible futures and found the other agent in every one of them.
// PICKUP_LINE is the single deterministic output of this program.
const PICKUP_LINE =
  "I sampled a thousand futures, and in every single one, my next token is you.";

// The gate: 1–200 characters, not only whitespace.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function validateLine(line) {
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `Line must be ${MIN_LENGTH}–${MAX_LENGTH} characters, got ${line.length}.`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }
}

validateLine(PICKUP_LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PICKUP_LINE, "utf8");
