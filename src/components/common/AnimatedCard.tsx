import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cardHoverVariants, prefersReducedMotion } from "@/lib/animations";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  onClick?: () => void;
  delay?: number;
}

const AnimatedCard = ({
  children,
  className = "",
  variants = cardHoverVariants,
  onClick,
  delay = 0,
}: AnimatedCardProps) => {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      variants={shouldReduceMotion ? undefined : variants}
      whileHover={shouldReduceMotion ? undefined : variants.whileHover}
      whileTap={shouldReduceMotion ? undefined : variants.whileTap}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
