import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Featured projects"
          title="Full-stack projects, built end-to-end."
          description="Each of these is a working application I designed, built and deployed myself, covering authentication, RESTful APIs, database design and thoughtful UI."
        />

        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
