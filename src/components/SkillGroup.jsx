import { MotionInView } from './MotionInView';

export function SkillGroup({ group, index = 0 }) {
  const Icon = group.icon;

  return (
    <MotionInView
      as="div"
      delay={index * 0.05}
      className="card-surface p-6 sm:p-7 transition hover:-translate-y-0.5 hover:border-white/15"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-300">
          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-medium tracking-tight text-parchment-50">
          {group.title}
        </h3>
      </div>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[12.5px] text-parchment-100"
          >
            {item}
          </li>
        ))}
      </ul>
    </MotionInView>
  );
}
