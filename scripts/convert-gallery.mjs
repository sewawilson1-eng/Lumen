// One-shot: normalize and optimize the GALLERY 1..6 images for the smile gallery.
// - Each "GALLERY N.{png,webp}" becomes "gallery-N.webp"
// - PNGs are encoded to WebP at quality 82 (matches the rest of /public/images)
// - Existing .webp files are re-encoded too, to enforce consistent compression
// Run with: node scripts/convert-gallery.mjs
import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join } from "node:path";

const DIR = "public/images";
const QUALITY = 82;

const files = await readdir(DIR);
const targets = files
  .map((f) => ({ f, m: f.match(/^GALLERY\s*(\d+)\.(png|webp)$/i) }))
  .filter((x) => x.m)
  .map((x) => ({ src: x.f, n: x.m[1] }));

for (const { src, n } of targets) {
  const srcPath = join(DIR, src);
  const dstName = `gallery-${n}.webp`;
  const dstPath = join(DIR, dstName);
  const { size: srcBytes } = await stat(srcPath);

  await sharp(srcPath).webp({ quality: QUALITY }).toFile(dstPath);
  const { size: dstBytes } = await stat(dstPath);

  if (srcPath !== dstPath) await unlink(srcPath);

  const pct = ((1 - dstBytes / srcBytes) * 100).toFixed(1);
  console.log(
    `${src} (${(srcBytes / 1024).toFixed(0)} KB) -> ${dstName} (${(dstBytes / 1024).toFixed(0)} KB) (-${pct}%)`
  );
}
