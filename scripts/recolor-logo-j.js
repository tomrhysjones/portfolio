// Recolours the J in public/logo.png without touching the T, R or frames.
//
// The logo is a raster crop from the GitHub banner (see extract-logo.js), so
// the J's colour isn't a value we can edit — it's pixels. This isolates the J
// as a connected component (flood fill from a seed inside its stem) rather
// than by colour alone, because the frames share the J's blue hue and a
// colour threshold catches them too.
//
// Shading and anti-aliased edges are preserved by scaling the target colour
// per-pixel by the original's relative luminance.
//
// Run: npm run recolor:j        (re-run after replacing logo.png)

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.resolve(__dirname, '..', 'public', 'logo.png');

// accent-300. Chosen over white so the J stays a deliberate brand accent
// rather than flattening into the T and R. ~8.8:1 against ink-950, up from
// ~4.6:1 for the original #346EEA.
const TARGET = [0x8f, 0xb0, 0xf0];

// A point inside the J's stem. Adjust if the crop in extract-logo.js changes.
const SEED = { x: 340, y: 250 };

const { data, info } = await sharp(file)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: W, height: H } = info;

// "Blue enough to be part of the J" — deliberately loose, since the flood
// fill's connectivity is what actually excludes the frames.
const isBlue = (i) => {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  return data[i + 3] >= 40 && b > 120 && b - r > 60 && g < b;
};

const seedIdx = SEED.y * W + SEED.x;
if (!isBlue(seedIdx * 4)) {
  throw new Error(
    `Seed (${SEED.x},${SEED.y}) is not on the J — the crop probably moved.`,
  );
}

// This writes in place, so guard against a second run shifting the J further.
// Restore the original with `git checkout public/logo.png` before re-running
// with a different TARGET.
const seedPx = [data[seedIdx * 4], data[seedIdx * 4 + 1], data[seedIdx * 4 + 2]];
if (seedPx.every((v, c) => Math.abs(v - TARGET[c]) < 24)) {
  console.log('• J is already this colour — nothing to do.');
  process.exit(0);
}

// Flood fill the J glyph.
const seen = new Uint8Array(W * H);
const stack = [seedIdx];
const core = [];
seen[seedIdx] = 1;

const NEIGHBOURS = [
  [1, 0], [-1, 0], [0, 1], [0, -1],
  [1, 1], [1, -1], [-1, 1], [-1, -1],
];

while (stack.length) {
  const p = stack.pop();
  core.push(p);
  const x = p % W;
  const y = (p / W) | 0;
  for (const [dx, dy] of NEIGHBOURS) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
    const q = ny * W + nx;
    if (seen[q] || !isBlue(q * 4)) continue;
    seen[q] = 1;
    stack.push(q);
  }
}

// Soft edge: the glyph's anti-aliased fringe falls below the isBlue
// threshold, so blend those pixels proportionally to how blue they are.
// Without this the J keeps a faint dark-blue halo.
const weight = new Float32Array(W * H);
for (const p of core) weight[p] = 1;
for (const p of core) {
  const x = p % W;
  const y = (p / W) | 0;
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      const q = ny * W + nx;
      if (weight[q] > 0) continue;
      const i = q * 4;
      if (data[i + 3] < 20) continue;
      const w = Math.max(0, Math.min(1, (data[i + 2] - data[i] - 20) / 50));
      if (w > 0) weight[q] = w;
    }
  }
}

const lum = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
const BASE = lum(0x34, 0x6e, 0xea); // the J's original core colour

const out = Buffer.from(data);
for (let q = 0; q < W * H; q++) {
  const w = weight[q];
  if (!w) continue;
  const i = q * 4;
  // Cap the highlight multiplier so specular pixels don't blow out to white.
  const k = Math.min(1.35, lum(out[i], out[i + 1], out[i + 2]) / BASE);
  for (let c = 0; c < 3; c++) {
    const blended = out[i + c] * (1 - w) + TARGET[c] * k * w;
    out[i + c] = Math.max(0, Math.min(255, Math.round(blended)));
  }
}

await sharp(out, { raw: info })
  .png({ compressionLevel: 9 })
  .toFile(file);

const hex = TARGET.map((v) => v.toString(16).padStart(2, '0')).join('');
console.log(`✔ Recoloured J to #${hex} (${core.length} core px) in ${path.relative(process.cwd(), file)}`);
