// Prepares project screenshots for the site.
//
// For each entry in the SOURCES table below, this script normalises
// the source image to 1600x1000 (16:10) — the aspect ratio used by
// ProjectCard. Two fit modes are supported:
//
//   - cover  (default) — crops from the top so headers/hero content
//     stay visible. Good for tall page screenshots.
//   - contain          — letterboxes the image against the site's
//     ink-950 background. Use for wide screenshots (aspect > 16:10)
//     where side content matters.
//
// Missing sources are skipped with a warning so this script is safe
// to run at any stage.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectImagesDir = path.resolve(__dirname, '..', 'public', 'project-images');

const INK_950 = { r: 10, g: 15, b: 26 }; // matches tailwind.config.js ink.950

const SOURCES = [
  {
    src: '/Users/tomjones/Desktop/Unit 2 Coursework GA/giglog/screenshots/home.png',
    dest: 'giglog.png',
    fit: 'cover',
    position: 'top',
  },
  {
    src: '/Users/tomjones/Desktop/All-Folders/GA/unit3project/setlistlab/frontend/docs/Dashboard UI.png',
    dest: 'setlistlab.png',
    fit: 'cover',
    position: 'top',
  },
  {
    src: '/Users/tomjones/Library/Application Support/Claude/local-agent-mode-sessions/c91b4f1f-c9f9-498f-ba57-b07d5ee848a5/e0a1da99-a6d7-4580-9acf-49649fe4b80d/local_7e1f98b2-69b6-4fdf-a8a5-044cdfb5743a/outputs/record-shelf-project/record-shelf/docs/landing.png',
    dest: 'record-shelf.png',
    fit: 'cover',
    position: 'top',
  },
  {
    src: '/Users/tomjones/Desktop/All-Folders/GA/ocean-match/assets/oceanmatch.png',
    dest: 'ocean-match.png',
    fit: 'contain',
    background: INK_950,
  },
];

const TARGET_WIDTH = 1600;
const TARGET_HEIGHT = 1000;

for (const s of SOURCES) {
  try {
    await fs.access(s.src);
  } catch {
    console.warn(`⚠  Skipping ${s.dest} — source not found: ${s.src}`);
    continue;
  }

  const outPath = path.join(projectImagesDir, s.dest);
  const resizeOpts = {
    width: TARGET_WIDTH,
    height: TARGET_HEIGHT,
    fit: s.fit,
    kernel: 'lanczos3',
  };
  if (s.position) resizeOpts.position = s.position;
  if (s.background) resizeOpts.background = s.background;

  await sharp(s.src)
    .resize(resizeOpts)
    .flatten({ background: s.background || INK_950 })
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`✔ Wrote ${path.relative(process.cwd(), outPath)} (${s.fit})`);
}
