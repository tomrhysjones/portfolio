import { MotionInView } from './MotionInView';

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <MotionInView as="div" className="mb-5">
          <span className="eyebrow">{eyebrow}</span>
        </MotionInView>
      )}
      <MotionInView as="h2" delay={0.05} className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tightest leading-[1.05]">
        {title}
      </MotionInView>
      {description && (
        <MotionInView
          as="p"
          delay={0.1}
          className="mt-5 text-base sm:text-lg text-parchment-200/85 leading-relaxed"
        >
          {description}
        </MotionInView>
      )}
    </div>
  );
}
