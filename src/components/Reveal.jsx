import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Reveal: fades + slides in when it enters viewport.
 * - staggerChildren works if you wrap children in motion elements with variants (see StaggerGroup below)
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  duration = 0.55,
  once = true,
  amount = 0.18,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerGroup: parent that staggers its children.
 * Use with <StaggerItem> for each child you want staggered.
 */
export function StaggerGroup({ children, delayChildren = 0.05, stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren, staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, y = 14 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
