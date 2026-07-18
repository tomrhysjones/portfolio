import { SectionHeading } from '../components/SectionHeading';
import { SkillGroup } from '../components/SkillGroup';
import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to build web applications."
          description="A working toolkit rather than a checklist. These are the languages, frameworks and services I reach for day-to-day when building full-stack projects."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
