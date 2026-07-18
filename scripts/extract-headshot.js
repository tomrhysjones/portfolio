// Extracts a clean square headshot from the full-portrait source.
//
// The source at /tmp/portrait-full.png has a thin white circular ring
// inscribed near the edges of the image. Rather than attempting to
// inpaint a hard circular line (which leaves visible artefacts without
// ML-based tools), this script crops inward by ~15% on each side so
// the ring falls entirely outside the visible frame.
//
// Geometry: for a WxH source with a ring at radius R ≈ min(W,H)/2, a
// centred square crop of side S keeps the ring outside as long as the
// crop's corner-to-centre distance (S/√2) is less than R.
// 480 is chosen for a 694x708 source to keep the person's shoulders
// visible while safely clearing the ring.
//
// If you replace /tmp/portrait-full.png with a differently-sized
// source, adjust CROP_SIDE.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = '/tmp/portrait-full.png';
const out = path.resolve(__dirname, '..', 'public', 'headshot.png');

const CROP_SIDE = 480;

const { width: w, height: h } = await sharp(src).metadata();
const left = Math.round((w - CROP_SIDE) / 2);
const top = Math.round((h - CROP_SIDE) / 2);

await sharp(src)
  .extract({ left, top, width: CROP_SIDE, height: CROP_SIDE })
  .resize({ width: 640, kernel: 'lanczos3' })
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`✔ Wrote ${path.relative(process.cwd(), out)} — cropped ${CROP_SIDE}x${CROP_SIDE} from ${w}x${h}`);
