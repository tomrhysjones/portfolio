# Project screenshots

Drop your project screenshots into this folder. The `ProjectImage`
component will automatically display them, and will render a graceful
placeholder card if a file is missing.

## Expected filenames

Add each image using these exact filenames (referenced from
`src/data/projects.js`):

- `setlistlab.jpg`
- `record-shelf.jpg`
- `giglog.jpg`
- `ocean-match.jpg`

## Recommended dimensions

- Aspect ratio: **16:10**
- Resolution: **1600 × 1000 px** (or 2× for retina crispness)
- Format: **PNG** or **JPG** (PNG preferred for UI screenshots)
- File size: keep under ~400 KB where possible for fast loading

## How to capture a good screenshot

1. Open the deployed project in a clean browser window.
2. Log in and populate the interface with realistic sample content.
3. Take a full-page or hero-area screenshot at a wide viewport
   (roughly 1440–1600 px wide).
4. Crop to a 16:10 area that showcases the main UI.

## Changing the filename or alt text

Both are set in `src/data/projects.js` under each project's
`image` and `imageAlt` fields.
