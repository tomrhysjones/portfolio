import { SectionHeading } from '../components/SectionHeading';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Experience"
          title="Commercial and independent client work."
          description="A concise view of the professional roles behind my move into software engineering."
        />

        <div className="mt-14 max-w-3xl">
          <ExperienceTimeline items={experience} />
        </div>
      </div>
    </section>
  );
}
