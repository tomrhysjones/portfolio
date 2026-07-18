// Extracts a headshot from the full-portrait source.
//
// Because the source has a thin white circular ring inscribed near its
// edges, we can't include the ring inside the visible frame. However,
// the ring sits at source-radius ≈ 347 from the source centre, so if
// the site displays the headshot as a CIRCLE (rounded-full) that maps
// to a visible source-radius smaller than the ring, the ring naturally
// falls outside the visible area and no inpainting is needed.
//
// Strategy: crop to a nearly-full square (660x660 from a 694x708
// source), then let the site render it as a circle. The visible circle
// then covers source-radius ≈ 330 — clear of the ring at 347, but wide
// enough to include the top of the hair (source-radius ~314).

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = '/tmp/portrait-full.png';
const out = path.resolve(__dirname, '..', 'public', 'headshot.png');

const CROP_SIDE = 660;

const { width: w, height: h } = await sharp(src).metadata();
const left = Math.round((w - CROP_SIDE) / 2);
const top = Math.round((h - CROP_SIDE) / 2);

await sharp(src)
  .extract({ left, top, width: CROP_SIDE, height: CROP_SIDE })
  .resize({ width: 800, kernel: 'lanczos3' })
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`✔ Wrote ${path.relative(process.cwd(), out)} — cropped ${CROP_SIDE}x${CROP_SIDE} from ${w}x${h}`);
