import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { containerVariants, prefersReducedMotion } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  id?: string;
}

const AnimatedSection = ({
  children,
  variants = containerVariants,
  delay = 0,
  className = "",
  id,
}: AnimatedSectionProps) => {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <motion.div
      id={id}
      initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
      viewport={{ once: true, amount: 0.3 }}
      variants={shouldReduceMotion ? undefined : variants}
      transition={shouldReduceMotion ? { duration: 0 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
