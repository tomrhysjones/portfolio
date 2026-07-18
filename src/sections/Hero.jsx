import { ArrowRight, Download, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin } from '../components/BrandIcons';
import { siteConfig } from '../data/siteConfig';
import { HeroVisual } from '../components/HeroVisual';

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay) =>
    reduce
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 overflow-hidden"
      aria-label="Introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent_75%)] bg-grid-lines bg-grid-32"
      />

      <div className="container-narrow">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {siteConfig.availability}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tightest leading-[1.02] text-parchment-50"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-parchment-200/85"
            >
              {siteConfig.hero.supporting}
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary">
                View my projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact me
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-parchment-300"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-parchment-400" aria-hidden="true" />
                {siteConfig.location}
              </span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline inline-flex items-center gap-1.5"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline inline-flex items-center gap-1.5"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={siteConfig.cv}
                download
                className="link-underline inline-flex items-center gap-1.5"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
