import { Link } from "react-router-dom";
import { Activity, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, prefersReducedMotion } from "@/lib/animations";

const AnimatedProgressBar = ({ value, color }: { value: number; color: string }) => {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${color} rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
        }}
        style={shouldReduceMotion ? { width: `${value}%` } : undefined}
      />
    </div>
  );
};

const Analytics = () => {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={shouldReduceMotion ? undefined : containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left content */}
          <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
            <motion.span
              className="text-primary text-sm font-semibold uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Data & Analytics
            </motion.span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Turn Your Business Data Into Actionable Insights
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We help you harness live KPI data, visualise trends, and generate easy-to-read reports that guide smarter decisions across every department.
            </p>

            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Activity, label: "Data Accuracy", value: "99.5%" },
                { icon: TrendingUp, label: "Manual Reporting", value: "-80%" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="bg-muted/50 rounded-xl p-4"
                  >
                    <Icon size={20} className="text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                to="/services/data-analytics"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
              >
                Explore Analytics Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center justify-between mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-sm font-semibold text-foreground">Performance Metrics</h4>
              <BarChart3 size={18} className="text-muted-foreground" />
            </motion.div>
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {[
                { label: "SEO Ranking Improvement", value: 87, color: "bg-primary" },
                { label: "Lead Conversion Rate", value: 64, color: "bg-teknify-purple" },
                { label: "Client Satisfaction", value: 96, color: "bg-green-500" },
                { label: "System Uptime", value: 99, color: "bg-blue-500" },
              ].map((metric) => (
                <motion.div key={metric.label} variants={itemVariants}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                    <span className="text-xs font-semibold text-foreground">{metric.value}%</span>
                  </div>
                  <AnimatedProgressBar value={metric.value} color={metric.color} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;
