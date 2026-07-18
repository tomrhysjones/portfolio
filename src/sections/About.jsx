import { Layers, Lightbulb, Users } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { MotionInView } from '../components/MotionInView';

const values = [
  {
    icon: Layers,
    title: 'Full-Stack Development',
    body: 'Comfortable across the stack — from React interfaces to Node, Express and Django APIs backed by MongoDB or PostgreSQL.',
  },
  {
    icon: Lightbulb,
    title: 'Product & User Thinking',
    body: 'I care about who the product is for, what problem it solves, and whether the details actually make it easier to use.',
  },
  {
    icon: Users,
    title: 'Communication & Collaboration',
    body: 'Comfortable working with non-technical stakeholders, translating requirements clearly and taking feedback well.',
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About"
          title="A software engineer with commercial and creative experience."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-parchment-200/90">
            <MotionInView as="p">
              I am a full-stack software engineer currently studying{' '}
              <span className="text-parchment-50">
                Postgraduate Software Engineering
              </span>{' '}
              at the University of Westminster alongside{' '}
              <span className="text-parchment-50">
                General Assembly’s Software Engineering Immersive
              </span>
              . I have built and shipped applications using JavaScript, React,
              Node.js, Express, MongoDB, Python, Django, PostgreSQL, HTML, CSS,
              Git, GitHub and REST APIs.
            </MotionInView>
            <MotionInView as="p" delay={0.05}>
              Before moving into engineering, I worked in digital marketing at{' '}
              <span className="text-parchment-50">Reach plc</span> and as a
              freelance digital consultant, using campaign data, dashboards,
              Salesforce, Marin, tracking pixels and landing pages to improve
              commercial outcomes. That background helps me think beyond code
              — I care about user needs, business objectives, usability and
              whether a product actually solves the problem it set out to.
            </MotionInView>
            <MotionInView as="p" delay={0.1}>
              Music and live performance are also part of my background and
              have directly influenced projects like{' '}
              <span className="text-parchment-50">GigLog</span> and{' '}
              <span className="text-parchment-50">SetlistLab</span>.
            </MotionInView>
          </div>

          <ul className="grid gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <MotionInView
                  as="li"
                  key={v.title}
                  delay={i * 0.06}
                  className="card-surface p-5 sm:p-6 transition hover:-translate-y-0.5 hover:border-white/15"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-300">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium text-parchment-50">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-parchment-200/80">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </MotionInView>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
