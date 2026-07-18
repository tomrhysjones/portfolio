// Generates public/og-image.png (1200x630) — the branded share card that
// appears when the site is shared on LinkedIn, Slack, WhatsApp, X, etc.
//
// Run with: node scripts/gen-og-image.js
//
// The design mirrors the tokens in tailwind.config.js so the share card
// feels like a continuation of the site itself.

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, '..', 'public', 'og-image.png');

// Only the first tspan on each line gets an explicit x; the rest flow naturally
// using the rasteriser's own font metrics. This keeps spacing correct even when
// system fonts differ from the site's web fonts.
function line(y, tokens) {
  const gutter = tokens.gutter;
  const parts = tokens.parts
    .map((t, i) => {
      const [text, color] = Array.isArray(t) ? t : [t, '#B7AE9C'];
      const xAttr = i === 0 ? ` x="40"` : '';
      return `<tspan${xAttr} fill="${color}" xml:space="preserve">${escapeXml(text)}</tspan>`;
    })
    .join('');
  return `
    <text x="24" y="${y}" text-anchor="end"
          font-family="'JetBrains Mono', 'Menlo', ui-monospace, monospace"
          font-size="13" fill="#6b6375">${gutter}</text>
    <text y="${y}"
          font-family="'JetBrains Mono', 'Menlo', ui-monospace, monospace"
          font-size="13">${parts}</text>`;
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function chip(x, y, label, w = null) {
  const width = w ?? Math.max(60, label.length * 9 + 24);
  return `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="${width}" height="28" rx="7"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
      <text x="${width / 2}" y="18" text-anchor="middle"
            font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
            font-size="13" font-weight="500" fill="#EDE8DD">${label}</text>
    </g>`;
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0D1420"/>
      <stop offset="1" stop-color="#0A0F1A"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0" r="0.7">
      <stop offset="0" stop-color="#5178D4" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#5178D4" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="rgba(255,255,255,0.14)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Wordmark (the real brand mark is composited in as a PNG below) -->
  <text x="200" y="106"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-size="22" font-weight="500" fill="#EDE8DD" letter-spacing="0.2">
    Tom Rhys Jones
  </text>

  <!-- Availability chip -->
  <g transform="translate(80, 200)">
    <rect x="0" y="0" width="470" height="36" rx="18"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
    <circle cx="20" cy="18" r="4" fill="#34D399"/>
    <text x="36" y="23"
          font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
          font-size="12" font-weight="600" fill="#B7AE9C" letter-spacing="2">
      OPEN TO JUNIOR &amp; GRADUATE ROLES · UK
    </text>
  </g>

  <!-- Headline -->
  <g transform="translate(80, 300)">
    <text font-family="Fraunces, Georgia, 'Times New Roman', serif" font-weight="500"
          font-size="74" fill="#F4F1EA" letter-spacing="-2.4">
      <tspan x="0" y="0">Full-Stack Software</tspan>
      <tspan x="0" y="88">Engineer.</tspan>
    </text>
  </g>

  <!-- Rule -->
  <rect x="80" y="490" width="380" height="1" fill="url(#rule)"/>

  <!-- Supporting line -->
  <text x="80" y="524"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-size="20" fill="#B7AE9C">
    Building useful, user-focused web applications.
  </text>

  <!-- Tech chips -->
  ${chip(80, 555, 'React', 80)}
  ${chip(172, 555, 'Node.js', 92)}
  ${chip(276, 555, 'Django', 88)}
  ${chip(376, 555, 'PostgreSQL', 116)}
  ${chip(504, 555, 'MongoDB', 100)}

  <!-- Right-hand code panel -->
  <g transform="translate(720, 130)">
    <rect x="0" y="0" width="400" height="370" rx="18"
          fill="rgba(255,255,255,0.025)"
          stroke="rgba(255,255,255,0.08)"/>

    <!-- Title bar -->
    <line x1="0" y1="42" x2="400" y2="42" stroke="rgba(255,255,255,0.06)"/>
    <circle cx="20" cy="21" r="4" fill="rgba(255,255,255,0.14)"/>
    <circle cx="34" cy="21" r="4" fill="rgba(255,255,255,0.14)"/>
    <circle cx="48" cy="21" r="4" fill="rgba(255,255,255,0.14)"/>
    <text x="200" y="26" text-anchor="middle"
          font-family="'JetBrains Mono', 'Menlo', ui-monospace, monospace"
          font-size="11" fill="#8F8676" letter-spacing="2">engineer.js</text>

    <!-- Code lines: gutter number + naturally-flowing tspans -->
    ${line(76,  { gutter: '1', parts: [['const', '#8FB0F0'], [' engineer ', '#B7AE9C'], ['= ', '#8FB0F0'], ['{', '#B7AE9C']] })}
    ${line(104, { gutter: '2', parts: [['  name', '#EDE8DD'], [': ', '#B7AE9C'], ['"Tom Rhys Jones"', '#7BE3B3'], [',', '#B7AE9C']] })}
    ${line(132, { gutter: '3', parts: [['  role', '#EDE8DD'], [': ', '#B7AE9C'], ['"Full-Stack Engineer"', '#7BE3B3'], [',', '#B7AE9C']] })}
    ${line(160, { gutter: '4', parts: [['  stack', '#EDE8DD'], ': ', ['[', '#B7AE9C']] })}
    ${line(188, { gutter: '5', parts: [['    "React"', '#7BE3B3'], [', ', '#B7AE9C'], ['"Node"', '#7BE3B3'], [', ', '#B7AE9C'], ['"Django"', '#7BE3B3'], [',', '#B7AE9C']] })}
    ${line(216, { gutter: '6', parts: [['    "Mongo"', '#7BE3B3'], [', ', '#B7AE9C'], ['"Postgres"', '#7BE3B3']] })}
    ${line(244, { gutter: '7', parts: [['  ],', '#B7AE9C']] })}
    ${line(272, { gutter: '8', parts: [['  builds', '#EDE8DD'], [': ', '#B7AE9C'], ['() => ', '#8FB0F0'], ['"useful apps"', '#7BE3B3'], [',', '#B7AE9C']] })}
    ${line(300, { gutter: '9', parts: [['};', '#B7AE9C']] })}

    <!-- Footer -->
    <line x1="0" y1="328" x2="400" y2="328" stroke="rgba(255,255,255,0.06)"/>
    <circle cx="20" cy="349" r="3" fill="#34D399"/>
    <text x="32" y="354"
          font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
          font-size="12" fill="#8F8676">Ready to ship</text>
    <text x="380" y="354" text-anchor="end"
          font-family="'JetBrains Mono', 'Menlo', ui-monospace, monospace"
          font-size="11" fill="#8F8676">UTF-8 · LF</text>
  </g>

  <!-- URL / footer -->
  <text x="80" y="600"
        font-family="'JetBrains Mono', 'Menlo', ui-monospace, monospace"
        font-size="13" fill="#8F8676" letter-spacing="1">
    tomrhysjones.dev
  </text>
  <text x="1120" y="600" text-anchor="end"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-size="13" fill="#8F8676">
    London / Bath · United Kingdom
  </text>
</svg>`;

const logoPath = path.resolve(__dirname, '..', 'public', 'logo.png');

// Resize the real brand mark to fit the corner slot, then composite it
// onto the rendered SVG so LinkedIn/Slack previews show the exact same
// asset as the site header.
const logoBuf = await sharp(logoPath)
  .resize({ height: 130 })
  .png()
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: logoBuf, top: 60, left: 80 }])
  .png({ compressionLevel: 9 })
  .toFile(outPath);

await writeFile(
  path.resolve(__dirname, '..', 'public', 'og-image.svg'),
  svg,
  'utf8',
);

console.log(`✔ Wrote ${path.relative(process.cwd(), outPath)}`);
