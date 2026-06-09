// One-shot: build favicon + apple-touch-icon from the logo.
// Run with: node scripts/make-icons.mjs
import sharp from "sharp";

const SRC = "public/images/logo.png";

await sharp(SRC).resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("app/icon.png");
await sharp(SRC).resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("app/apple-icon.png");

console.log("Wrote app/icon.png (32x32) and app/apple-icon.png (180x180)");
