// Extracts the TRJ mark from the top-left of the GitHub banner.
// Outputs public/logo.png at a clean 2x resolution with the banner's
// navy background chroma-keyed to transparent, so the mark sits cleanly
// on whatever background it's placed against.
//
// The source banner is 1536x1024. If the crop needs nudging, adjust
// CROP and re-run. If the transparency starts eating letter edges,
// lower TOLERANCE.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = '/tmp/banner.png';
const out = path.resolve(__dirname, '..', 'public', 'logo.png');

const CROP = { left: 40, top: 40, width: 190, height: 220 };
const TOLERANCE = 26;

// Read the cropped region as raw RGBA pixels.
const { data, info } = await sharp(src)
  .extract(CROP)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Sample the background colour from the top-left pixel of the crop —
// this reliably picks up the banner's baked-in navy.
const bgR = data[0];
const bgG = data[1];
const bgB = data[2];

// For every pixel: if it's close to the background colour, make it
// transparent. Everything else (letters, frames) keeps its alpha.
for (let i = 0; i < data.length; i += 4) {
  const dr = Math.abs(data[i] - bgR);
  const dg = Math.abs(data[i + 1] - bgG);
  const db = Math.abs(data[i + 2] - bgB);
  if (dr <= TOLERANCE && dg <= TOLERANCE && db <= TOLERANCE) {
    data[i + 3] = 0;
  }
}

await sharp(data, { raw: info })
  .resize({ width: 400, withoutEnlargement: false, kernel: 'lanczos3' })
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`✔ Wrote ${path.relative(process.cwd(), out)} (transparent bg, tolerance ${TOLERANCE})`);
