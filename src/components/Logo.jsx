// TRJ brand mark — the real asset extracted from the GitHub profile banner.
// Located at public/logo.png (400 x ~450 px, dark navy background baked in
// to match the site's ink-950 background).
//
// To swap in a different version later, replace public/logo.png. The image's
// intrinsic aspect ratio is preserved via w-auto in the caller's className.

export function Logo({ className = 'h-11 w-auto', ariaLabel = 'Tom Rhys Jones — TRJ monogram' }) {
  return (
    <img
      src="/logo.png"
      alt={ariaLabel}
      className={className}
      draggable="false"
      decoding="async"
    />
  );
}
