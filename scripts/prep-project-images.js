// Prepares project screenshots for the site.
//
// For each entry in the SOURCES table below, this script crops the
// source image to a 16:10 window (matching the ProjectCard's aspect
// ratio) taking pixels from the top, then resizes to 1600px wide and
// writes into public/project-images/. Missing sources are skipped
// with a warning so this script is safe to run at any stage.
//
// To add a new project screenshot: drop the source anywhere on disk,
// add an entry here mapping source → dest, then run `npm run gen:projects`.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectImagesDir = path.resolve(__dirname, '..', 'public', 'project-images');

const SOURCES = [
  {
    src: '/Users/tomjones/Desktop/Unit 2 Coursework GA/giglog/screenshots/home.png',
    dest: 'giglog.png',
  },
  // Add these when the screenshots exist:
  // { src: '/absolute/path/to/setlistlab.png',   dest: 'setlistlab.png' },
  // { src: '/absolute/path/to/record-shelf.png', dest: 'record-shelf.png' },
  // { src: '/absolute/path/to/ocean-match.png',  dest: 'ocean-match.png' },
];

const TARGET_WIDTH = 1600;
const TARGET_HEIGHT = 1000; // 16:10

for (const { src, dest } of SOURCES) {
  try {
    await fs.access(src);
  } catch {
    console.warn(`⚠  Skipping ${dest} — source not found: ${src}`);
    continue;
  }

  const outPath = path.join(projectImagesDir, dest);

  await sharp(src)
    .resize({
      width: TARGET_WIDTH,
      height: TARGET_HEIGHT,
      fit: 'cover',
      position: 'top',
      kernel: 'lanczos3',
    })
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`✔ Wrote ${path.relative(process.cwd(), outPath)}`);
}
