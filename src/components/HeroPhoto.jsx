import { motion, useReducedMotion } from 'framer-motion';

/**
 * Circular portrait for the hero. The source at public/headshot.png is a
 * near-full crop of the profile portrait; displaying it as a circle
 * naturally hides the baked-in white ring around the edges of the
 * source without needing any inpainting.
 *
 * A small caption sits below the circle for identity reinforcement.
 * The availability status ("Open to opportunities") lives in the hero's
 * eyebrow chip above the headline, so it's not repeated here.
 */
export function HeroPhoto() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Soft glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-accent-500/12 via-transparent to-transparent blur-2xl"
      />

      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border border-white/10 shadow-card"
      >
        <img
          src="/headshot.png"
          alt="Portrait of Tom Rhys Jones"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="mt-6 text-center"
      >
        <p className="font-display text-lg text-parchment-50">
          Tom Rhys Jones
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-parchment-300">
          Full-Stack Software Engineer
        </p>
      </motion.div>
    </div>
  );
}
