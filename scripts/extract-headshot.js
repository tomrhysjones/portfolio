// Prepares the site headshot from a clean source photo.
//
// Expects a clean (ring-free) square portrait at the SRC path below.
// Resizes it to 800px on the long edge for a crisp retina render on
// the site while keeping the file size reasonable.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = '/Users/tomjones/Downloads/LinkedIn Image.png';
const out = path.resolve(__dirname, '..', 'public', 'headshot.jpg');

await sharp(src)
  .resize({ width: 800, height: 800, fit: 'cover', kernel: 'lanczos3' })
  .jpeg({ quality: 85, mozjpeg: true, progressive: true })
  .toFile(out);

console.log(`✔ Wrote ${path.relative(process.cwd(), out)}`);
