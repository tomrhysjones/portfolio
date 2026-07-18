import { MotionInView } from './MotionInView';

export function ExperienceTimeline({ items }) {
  return (
    <ol className="relative border-l border-white/[0.08] pl-8 sm:pl-10">
      {items.map((item, i) => (
        <MotionInView
          as="li"
          key={`${item.org}-${item.title}`}
          delay={i * 0.06}
          className="relative pb-10 last:pb-0"
        >
          <span
            className="absolute -left-[41px] sm:-left-[49px] top-1.5 flex h-3 w-3 items-center justify-center"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-accent-400 shadow-[0_0_0_4px_rgba(81,120,212,0.15)]" />
          </span>

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <span className="text-xs uppercase tracking-[0.16em] text-parchment-300">
              {item.org}
            </span>
            {item.dates && (
              <span className="text-xs text-parchment-400">{item.dates}</span>
            )}
          </div>
          <h3 className="mt-1 text-lg sm:text-xl font-medium text-parchment-50">
            {item.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm sm:text-[15px] leading-relaxed text-parchment-200/85">
            {item.description}
          </p>
          {item.tags && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 text-[11px] font-medium text-parchment-200"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </MotionInView>
      ))}
    </ol>
  );
}
