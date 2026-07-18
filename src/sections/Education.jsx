import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { MotionInView } from '../components/MotionInView';
import { education } from '../data/education';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Education"
          title="Formal training and study."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((entry, i) => (
            <MotionInView
              as="li"
              key={`${entry.institution}-${entry.qualification}`}
              delay={i * 0.05}
              className="card-surface flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-white/15"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-300">
                <GraduationCap className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-parchment-300">
                {entry.institution}
              </p>
              <h3 className="mt-1 text-base font-medium text-parchment-50">
                {entry.qualification}
              </h3>
              {entry.dates && (
                <p className="mt-1 text-xs text-parchment-400">{entry.dates}</p>
              )}
              {entry.note && (
                <p className="mt-3 text-sm leading-relaxed text-parchment-200/80">
                  {entry.note}
                </p>
              )}
            </MotionInView>
          ))}
        </ul>
      </div>
    </section>
  );
}
