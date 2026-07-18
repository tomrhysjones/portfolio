import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

/**
 * Displays a project screenshot with a graceful fallback if the image is missing.
 * Place real screenshots at /public/project-images/ using the filename in
 * projects.js (e.g. /project-images/setlistlab.png).
 */
export function ProjectImage({ src, alt, title }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-800 to-ink-900 p-6 text-center"
        role="img"
        aria-label={alt || `${title} screenshot placeholder`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-parchment-200">
          <ImageIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-parchment-100">{title}</p>
        <p className="max-w-[26ch] text-xs text-parchment-300">
          Add a screenshot at{' '}
          <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[11px] text-parchment-100">
            public{src}
          </code>
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}
