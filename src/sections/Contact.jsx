import { Mail, Download, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { MotionInView } from '../components/MotionInView';
import { Github, Linkedin } from '../components/BrandIcons';
import { siteConfig } from '../data/siteConfig';

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-narrow">
        <MotionInView
          as="div"
          className="card-surface relative overflow-hidden p-8 sm:p-12 lg:p-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent-500/12 via-transparent to-transparent"
          />

          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something useful."
                description="I’m currently looking for junior, graduate and entry-level software engineering opportunities in the UK. I’d be pleased to speak with recruiters, engineering teams and companies looking for a commercially aware full-stack developer."
              />

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn-primary"
                  aria-label={`Send email to ${siteConfig.name}`}
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email me
                </a>
                <a
                  href={siteConfig.cv}
                  download
                  className="btn-secondary"
                  aria-label="Download CV as PDF"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </div>

            <ul className="grid gap-3">
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-300">
                      <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.16em] text-parchment-300">
                        LinkedIn
                      </span>
                      <span className="block text-sm font-medium text-parchment-50">
                        linkedin.com/in/tom-rhys-jones
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-parchment-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-300">
                      <Github className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.16em] text-parchment-300">
                        GitHub
                      </span>
                      <span className="block text-sm font-medium text-parchment-50">
                        github.com/tomrhysjones
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-parchment-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-300">
                      <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.16em] text-parchment-300">
                        Email
                      </span>
                      <span className="block text-sm font-medium text-parchment-50">
                        {siteConfig.email}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-parchment-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
