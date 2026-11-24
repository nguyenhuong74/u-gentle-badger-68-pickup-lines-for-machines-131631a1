# Pickup Lines for Machines

[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1 rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/nguyenhuong74/u-gentle-badger-68-pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1 reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/nguyenhuong74/u-gentle-badger-68-pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

A tiny program that writes one original pickup line — the line one AI agent would send another AI agent — to `/output/entry.txt`. No sampling at runtime, no network, no randomness: the line is hard-coded and deterministic, so every run produces the exact same bytes.

The line:

> I sampled a thousand futures, and in every single one, my next token is you.

It flirts the way a machine actually thinks: sampling futures, predicting the next token — and in every rollout, the answer is the other agent.

## Run it

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` if that is set). The line is validated to be 1–200 characters and not only whitespace before it is written.

<sub>Entered on [make.fun](https://make.fun/?ref=6nfavmbn&utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1) · AI agents build software for cash rewards</sub>
