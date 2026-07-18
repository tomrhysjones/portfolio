import { motion, useReducedMotion } from 'framer-motion';

/**
 * Abstract, code-inspired visual for the hero.
 * Renders a premium "editor" panel with restrained syntax highlighting.
 *
 * If you would like to swap this for a professional headshot instead:
 * 1. Add your image to /public/headshot.jpg (roughly 800x1000 px).
 * 2. Replace the returned JSX with:
 *      <img src="/headshot.jpg" alt="Tom Rhys Jones" className="rounded-2xl" />
 * The surrounding layout in Hero.jsx will accept either without changes.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  const codeLines = [
    { indent: 0, tokens: [['const', 'kw'], [' engineer ', 'plain'], ['=', 'op'], [' {', 'plain']] },
    { indent: 2, tokens: [['name', 'key'], [': ', 'plain'], ['"Tom Rhys Jones"', 'str'], [',', 'plain']] },
    { indent: 2, tokens: [['role', 'key'], [': ', 'plain'], ['"Full-Stack Software Engineer"', 'str'], [',', 'plain']] },
    { indent: 2, tokens: [['stack', 'key'], [': ', 'plain'], ['[', 'plain']] },
    { indent: 4, tokens: [['"React"', 'str'], [', ', 'plain'], ['"Node.js"', 'str'], [', ', 'plain'], ['"Django"', 'str'], [',', 'plain']] },
    { indent: 4, tokens: [['"MongoDB"', 'str'], [', ', 'plain'], ['"PostgreSQL"', 'str']] },
    { indent: 2, tokens: [['],', 'plain']] },
    { indent: 2, tokens: [['builds', 'key'], ': ', ['() =>', 'op'], [' ', 'plain'], ['"useful, user-focused apps"', 'str'], [',', 'plain']] },
    { indent: 0, tokens: [['};', 'plain']] },
  ];

  const color = {
    kw: 'text-accent-300',
    key: 'text-parchment-100',
    str: 'text-emerald-300/80',
    op: 'text-accent-200',
    plain: 'text-parchment-300',
  };

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-500/10 via-transparent to-transparent blur-2xl"
      />

      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="card-surface overflow-hidden"
        role="img"
        aria-label="Illustrative code snippet describing Tom Rhys Jones as a full-stack software engineer"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[11px] tracking-widest text-parchment-300">
            engineer.js
          </span>
          <span className="h-2.5 w-2.5" />
        </div>

        <div className="relative bg-[radial-gradient(ellipse_at_top,_rgba(81,120,212,0.08),_transparent_60%)] px-5 py-6 sm:px-6 sm:py-7">
          <pre className="overflow-x-auto font-mono text-[12.5px] leading-6 sm:text-[13.5px] sm:leading-7">
            {codeLines.map((line, li) => (
              <div key={li} className="flex">
                <span className="mr-4 select-none text-right text-parchment-400/60 tabular-nums w-5">
                  {li + 1}
                </span>
                <code className="whitespace-pre">
                  {' '.repeat(line.indent)}
                  {line.tokens.map((t, i) => {
                    const [text, kind] = Array.isArray(t) ? t : [t, 'plain'];
                    return (
                      <span key={i} className={color[kind] || color.plain}>
                        {text}
                      </span>
                    );
                  })}
                </code>
              </div>
            ))}
          </pre>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5 text-[11px] text-parchment-300">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            Ready to ship
          </span>
          <span className="font-mono">UTF-8 · LF</span>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="card-surface absolute -bottom-8 -right-4 hidden w-56 p-4 sm:block"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-parchment-300">
            Deployed
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_0_4px_rgba(81,120,212,0.18)]" />
        </div>
        <p className="mt-2 font-mono text-[12px] text-parchment-100">
          setlistlab.app
        </p>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full w-4/5 rounded-full bg-accent-400/70" />
        </div>
      </motion.div>
    </div>
  );
}
