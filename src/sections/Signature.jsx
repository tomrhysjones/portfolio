import { SectionHeading } from '../components/SectionHeading';
import { HeroVisual } from '../components/HeroVisual';

/**
 * A small "in code" moment between Skills and Projects — takes the
 * previously-hero code panel and gives it its own breathing room, so the
 * hero can lead with a photo without losing the engineer-y signal.
 */
export function Signature() {
  return (
    <section id="signature" className="section" aria-label="Engineer, in code">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="In code"
              title="A short self-description, expressed in JavaScript."
              description="Because the tidiest way to summarise an engineer is often just a snippet — same stack that powers the projects below."
            />
          </div>
          <div className="mx-auto w-full max-w-md sm:max-w-lg">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
