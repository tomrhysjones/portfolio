import { motion, useReducedMotion } from 'framer-motion';

/**
 * Large square portrait card for the hero. Occupies the same visual
 * footprint the code panel originally had, with a soft accent glow
 * behind and a caption strip along the bottom.
 *
 * The photo lives at public/headshot.jpg. Replace that file (or run
 * `npm run gen:headshot`) and this component picks up the new image
 * automatically.
 */
export function HeroPhoto() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg">
      {/* Soft glow behind the card, matching the site's radial fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-500/12 via-transparent to-transparent blur-2xl"
      />

      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="card-surface relative overflow-hidden aspect-square"
      >
        <img
          src="/headshot.jpg"
          alt="Portrait of Tom Rhys Jones"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />

        {/* Bottom gradient so the caption stays readable over any photo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/85 via-ink-950/40 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
          <div>
            <p className="font-display text-base text-parchment-50">
              Tom Rhys Jones
            </p>
            <p className="text-[12px] uppercase tracking-[0.16em] text-parchment-300">
              Full-Stack Software Engineer
            </p>
          </div>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 text-[11px] text-parchment-200 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to work
          </span>
        </div>
      </motion.div>
    </div>
  );
}
