import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { MotionInView } from './MotionInView';
import { ProjectImage } from './ProjectImage';
import { Github } from './BrandIcons';

export function ProjectCard({ project, index = 0 }) {
  const { title, label, description, technologies, image, imageAlt, links, accent } = project;
  const gradient = accent || 'from-accent-500/10 to-accent-500/[0.02]';

  return (
    <MotionInView
      as="article"
      delay={index * 0.05}
      className={`group card-surface relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:shadow-soft`}
    >
      <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${gradient} opacity-70`} />

      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06]">
        <ProjectImage src={image} alt={imageAlt} title={title} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-parchment-100 backdrop-blur">
          {label}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-parchment-50">
            {title}
          </h3>
          <ArrowUpRight
            className="mt-1 h-5 w-5 flex-none text-parchment-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
            aria-hidden="true"
          />
        </div>
        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-parchment-200/85">
          {description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${title} technologies`}>
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 text-[11px] font-medium text-parchment-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
              aria-label={`${title} GitHub repository`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          )}
          {links.frontend && (
            <a
              href={links.frontend}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
              aria-label={`${title} frontend repository`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Frontend
            </a>
          )}
          {links.backend && (
            <a
              href={links.backend}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
              aria-label={`${title} backend repository`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Backend
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary"
              aria-label={`${title} live demo`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live demo
            </a>
          )}
        </div>
      </div>
    </MotionInView>
  );
}
