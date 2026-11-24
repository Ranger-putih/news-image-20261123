// Entry point for the news-image-20261123 submission.
//
// The front page is drawn once, ahead of time, and shipped in this
// repository as entry.png. All this program does is put that exact file
// where the grader expects it. It touches no network, keeps no state,
// and reads no clock, so running it twice writes identical bytes.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const imagePath = join(repoRoot, "entry.png");

if (!existsSync(imagePath)) {
  throw new Error(`entry.png not found in repo root: ${imagePath}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(imagePath, join(outputDir, "entry.png"));
