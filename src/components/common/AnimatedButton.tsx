import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const buttonVariants: Variants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" },
  whileTap: { scale: 0.98 },
};

const AnimatedButton = ({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  disabled = false,
  type = "button",
}: AnimatedButtonProps) => {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variants={shouldReduceMotion ? undefined : buttonVariants}
      initial="initial"
      whileHover={shouldReduceMotion ? undefined : "whileHover"}
      whileTap={shouldReduceMotion ? undefined : "whileTap"}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
