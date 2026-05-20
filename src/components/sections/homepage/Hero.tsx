import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";

const Hero = () => {
  const shouldReduceMotion = prefersReducedMotion();

  const pillVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
  };

  const headingVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  const ctaVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.7 } },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with animation */}
      <motion.div
        className="absolute inset-0 gradient-hero pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="section-container pt-16 lg:pt-24 pb-8 lg:pb-12 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial="initial"
          animate="animate"
        >
          {/* Pill badge */}
          <motion.div
            className="sub-heading-pill mb-6"
            variants={shouldReduceMotion ? undefined : pillVariants}
          >
            Consulting, Strategy & Operational Support
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-heading text-display leading-tight mb-6"
            variants={shouldReduceMotion ? undefined : headingVariants}
          >
            Modern consulting built for
            <span className="text-primary">executive teams</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-muted-foreground text-body-lg max-w-xl mb-8 leading-relaxed"
            variants={shouldReduceMotion ? undefined : subtitleVariants}
          >
            MMP Consultants strengthens leadership, operations and technical delivery with strategy-led execution that keeps your business moving.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            variants={shouldReduceMotion ? undefined : ctaVariants}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <Link to="/services">
              <CraftButton>
                <CraftButtonLabel>Explore Services</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowRight className="size-4 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
                </CraftButtonIcon>
              </CraftButton>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border/60 bg-background/10 px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/20"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
