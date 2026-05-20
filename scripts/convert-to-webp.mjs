// One-shot script to convert large PNGs in public/images to WebP.
// Run with: node scripts/convert-to-webp.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const DIR = "public/images";
const MIN_BYTES = 500 * 1024; // only convert files > 500KB
const QUALITY = 82;

const files = await readdir(DIR);
for (const f of files) {
  if (!/\.png$/i.test(f)) continue;
  if (/^logo\./i.test(f)) continue; // keep logo as PNG (transparency)
  const src = join(DIR, f);
  const { size } = await stat(src);
  if (size < MIN_BYTES) continue;
  const dst = src.replace(/\.png$/i, ".webp");
  const out = await sharp(src).webp({ quality: QUALITY }).toFile(dst);
  const pct = ((1 - out.size / size) * 100).toFixed(1);
  console.log(`${f}: ${(size / 1024).toFixed(0)}KB → ${(out.size / 1024).toFixed(0)}KB (-${pct}%)`);
}
