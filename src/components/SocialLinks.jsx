import { Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { siteConfig } from '../data/siteConfig';

export function SocialLinks({ showCV = true, showEmail = true, compact = false }) {
  const base = compact
    ? 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-parchment-100 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
    : 'btn-secondary';

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub profile"
        className={base}
      >
        <Github className="h-4 w-4" aria-hidden="true" />
        {!compact && <span>GitHub</span>}
      </a>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn profile"
        className={base}
      >
        <Linkedin className="h-4 w-4" aria-hidden="true" />
        {!compact && <span>LinkedIn</span>}
      </a>
      {showEmail && (
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label={`Send email to ${siteConfig.name}`}
          className={base}
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {!compact && <span>Email</span>}
        </a>
      )}
      {showCV && (
        <a
          href={siteConfig.cv}
          download
          aria-label="Download CV as PDF"
          className={base}
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {!compact && <span>Download CV</span>}
        </a>
      )}
    </div>
  );
}
