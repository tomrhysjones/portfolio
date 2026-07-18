// Extracts the TRJ mark from the top-left of the GitHub banner.
// Outputs public/logo.png at a clean 2x resolution.
//
// The banner is 1536x1024. From visual inspection the mark sits in roughly
// the top-left ~15% of the width. If the crop needs nudging, adjust the
// numbers below and re-run.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = '/tmp/banner.png';
const out = path.resolve(__dirname, '..', 'public', 'logo.png');

// Approximate mark location within the 1536x1024 banner.
const CROP = { left: 40, top: 40, width: 190, height: 220 };

await sharp(src)
  .extract(CROP)
  .resize({ width: 400, withoutEnlargement: false, kernel: 'lanczos3' })
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`✔ Wrote ${path.relative(process.cwd(), out)} from crop`, CROP);
