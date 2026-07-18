import { Github, Linkedin } from './BrandIcons';
import { siteConfig } from '../data/siteConfig';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-ink-900/40">
      <div className="container-narrow py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-parchment-50">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-parchment-300">
              {siteConfig.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-parchment-100 transition hover:border-white/20 hover:text-white"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-parchment-100 transition hover:border-white/20 hover:text-white"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/[0.05] pt-6 text-xs text-parchment-300 sm:flex-row sm:items-center">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Built with React and Vite.</p>
        </div>
      </div>
    </footer>
  );
}
