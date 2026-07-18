import { motion, useReducedMotion } from 'framer-motion';

export function MotionInView({
  as = 'div',
  children,
  delay = 0,
  y = 16,
  className,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const whileInView = { opacity: 1, y: 0 };
  const transition = reduce
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay };

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once, amount }}
      transition={transition}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
