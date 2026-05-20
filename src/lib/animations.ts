import { Variants } from "framer-motion";

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Fade In Animation
export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Slide Up Animation
export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

// Slide Down Animation
export const slideDownVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Slide Right Animation
export const slideRightVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

// Slide Left Animation
export const slideLeftVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

// Scale Up Animation
export const scaleUpVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Stagger Container - for animating children in sequence
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger Item - child of stagger container
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Hover Scale for interactive elements
export const hoverScaleVariants: Variants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

// Button Hover Animation
export const buttonHoverVariants: Variants = {
  initial: { y: 0 },
  whileHover: { y: -2 },
  whileTap: { y: 0 },
};

// Card Hover Animation
export const cardHoverVariants: Variants = {
  initial: { y: 0, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" },
  whileHover: {
    y: -8,
    boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
  },
};

// Pulse Animation
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Text Reveal Animation
export const textRevealVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Bounce Animation
export const bounceVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Transition Configs
export const transitionConfig = {
  fast: { duration: 0.2, ease: "easeOut" },
  normal: { duration: 0.3, ease: "easeOut" },
  slow: { duration: 0.5, ease: "easeOut" },
  spring: { type: "spring", stiffness: 300, damping: 30 },
  smoothSpring: { type: "spring", stiffness: 100, damping: 20 },
};

// Safe animation wrapper that respects prefers-reduced-motion
export const getSafeVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    return {
      initial: variants.initial,
      animate: variants.animate,
      exit: variants.exit,
      transition: { duration: 0 },
    };
  }
  return variants;
};
