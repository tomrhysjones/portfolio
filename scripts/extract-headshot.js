// Extracts a clean square headshot from the GitHub avatar.
//
// The uploaded GitHub avatar has a thin white circular ring baked into it,
// inscribed in the 460x460 square. This script crops inward so the ring
// falls entirely outside the visible frame, then resizes the result to a
// crisp square for use on the site.
//
// If the person shifts within a future avatar (or the ring geometry
// changes), tweak CROP and re-run:  node scripts/extract-headshot.js

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = '/tmp/avatar-raw.png';
const out = path.resolve(__dirname, '..', 'public', 'headshot.png');

// Source is 460x460, ring inscribed at r≈230. A 300x300 centered crop
// keeps the corner distance from centre (~212) inside the ring radius,
// so the ring is fully clipped away.
const CROP = { left: 80, top: 80, width: 300, height: 300 };

await sharp(src)
  .extract(CROP)
  .resize({ width: 480, kernel: 'lanczos3' })
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`✔ Wrote ${path.relative(process.cwd(), out)}`);
