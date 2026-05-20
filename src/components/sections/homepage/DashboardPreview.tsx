import { TrendingUp, Users, BarChart3, PieChart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";

const DashboardPreview = () => {
  const shouldReduceMotion = prefersReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  // Map scroll progress to rotation angles
  // Start: rotateX(60°) - Device tilted back like opening book with pronounced perspective
  // End: rotateX(0°) - Device flat/facing viewer
  // SkewY creates slanted edges for perspective effect
  const rotateX = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const skewY = useTransform(scrollYProgress, [0, 0], [0, 0]); // Slanted edges effect
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [80, 0]); // Moves up as it opens
  const enableMotion = isDesktop && !shouldReduceMotion;

  return (
    <section className="relative pb-20 lg:pb-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Floating label - Top Left with curved arrow */}
        <motion.div
          className="absolute -top-20 left-4 lg:left-0 z-20 w-40"
          initial={enableMotion ? { opacity: 0, y: -20, x: -20 } : false}
          whileInView={enableMotion ? { opacity: 1, y: 0, x: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
        </motion.div>

        {/* Floating label - Top Right with curved arrow */}
        <motion.div
          className="absolute -top-12 right-4 lg:right-0 z-20 w-40"
          initial={enableMotion ? { opacity: 0, y: -20, x: 20 } : false}
          whileInView={enableMotion ? { opacity: 1, y: 0, x: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          
        </motion.div>

        {/* Floating label - Bottom Right with curved arrow */}
        <motion.div
          className="absolute -bottom-16 right-4 lg:right-0 z-20 w-40"
          initial={enableMotion ? { opacity: 0, y: 20, x: 20 } : false}
          whileInView={enableMotion ? { opacity: 1, y: 0, x: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         
        </motion.div>
        {/* Device frame - Scroll-linked 3D rotation (Desktop) / Static (Mobile) */}
        {enableMotion ? (
          <motion.div
            className="bg-card rounded-2xl lg:rounded-3xl shadow-2xl shadow-foreground/10 border-4 border-black overflow-hidden"
            style={{
              rotateX,
              skewY,
              scaleY,
              translateY,
              transformPerspective: "800px",
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
            }}
          >
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-8">
              <div className="bg-muted rounded-md h-6 max-w-xs mx-auto" />
            </div>
          </div>

          {/* Dashboard content */}
          <div className="m-3 rounded-2xl border border-border/60 bg-card p-4 lg:m-4 lg:rounded-[1.75rem] lg:p-6">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {["Client Performance", "Digital Marketing", "IT Health"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    i === 0
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Stats grid - Staggered reveals */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
              initial={enableMotion ? "hidden" : false}
              whileInView={enableMotion ? "visible" : undefined}
              viewport={{ once: true }}
              variants={enableMotion ? {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              } : undefined}
            >
              {/* AVG Order Value */}
              <motion.div
                className="bg-muted/50 rounded-xl p-4"
                variants={enableMotion ? {
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                } : undefined}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp size={16} className="text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Discovery & Planning</span>
                </div>
                <p className="text-2xl font-bold text-foreground">Clear Scope</p>
                <span className="text-xs text-green-500 font-medium">Business-first delivery</span>
              </motion.div>

              {/* Growth stat */}
              <motion.div
                className="bg-muted/50 rounded-xl p-4"
                variants={enableMotion ? {
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                } : undefined}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 size={16} className="text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Launch & Delivery</span>
                </div>
                <p className="text-2xl font-bold text-foreground">Custom Fit</p>
                <span className="text-xs text-green-500 font-medium">Designed for real-world operations</span>
              </motion.div>

              {/* Accuracy */}
              <motion.div
                className="bg-muted/50 rounded-xl p-4"
                variants={enableMotion ? {
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                } : undefined}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <PieChart size={16} className="text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Reporting & Insight</span>
                </div>
                <p className="text-2xl font-bold text-foreground">Actionable</p>
                <span className="text-xs text-green-500 font-medium">Clear decisions from data</span>
              </motion.div>

              {/* Team */}
              <motion.div
                className="bg-muted/50 rounded-xl p-4"
                variants={enableMotion ? {
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                } : undefined}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Users size={16} className="text-blue-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">Ongoing Support</span>
                </div>
                <p className="text-2xl font-bold text-foreground">Responsive</p>
                <span className="text-xs text-muted-foreground">After launch and beyond</span>
              </motion.div>
            </motion.div>

            {/* Chart area - Staggered reveals */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-4"
              initial={enableMotion ? "hidden" : false}
              whileInView={enableMotion ? "visible" : undefined}
              viewport={{ once: true }}
              variants={enableMotion ? {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.5,
                  },
                },
              } : undefined}
            >
              {/* Line chart */}
              <motion.div
                className="lg:col-span-2 bg-muted/30 rounded-xl p-4"
                variants={enableMotion ? {
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                } : undefined}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-foreground">Program Delivery Overview</h4>
                  <div className="flex gap-3">
                    {[
                      { label: "Strategy", color: "bg-primary" },
                      { label: "Delivery", color: "bg-secondary" },
                      { label: "Operations", color: "bg-green-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Simplified chart */}
                <div className="h-32 flex items-end gap-1">
                  {[40, 65, 45, 70, 55, 80, 60, 75, 50, 85, 70, 90].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-0.5">
                      <div
                        className="bg-primary/20 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Donut chart area */}
              <motion.div
                className="bg-muted/30 rounded-xl p-4"
                variants={enableMotion ? {
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                } : undefined}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-sm font-semibold text-foreground mb-4">Service Coverage</h4>
                <div className="flex items-center justify-center mb-3">
                  <div className="relative w-28 h-28">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                        strokeDasharray="92, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-base font-bold text-foreground">Tailored</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Web & App Delivery</span>
                    <span className="font-medium text-foreground">Custom built</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">IT & Marketing Support</span>
                    <span className="font-medium text-foreground">Ongoing</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        ) : (
          <div className="bg-card rounded-2xl lg:rounded-3xl shadow-2xl shadow-foreground/10 border-4 border-black overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-muted rounded-md h-6 max-w-xs mx-auto" />
              </div>
            </div>

            {/* Dashboard content - Static (Mobile) */}
            <div className="m-3 rounded-2xl border border-border/60 bg-card p-4 lg:m-4 lg:rounded-[1.75rem] lg:p-6">
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {["Client Performance", "Digital Marketing", "IT Health"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      i === 0
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Stats grid - No animation - Compact 2 column mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {[
                  { title: "Clear Scope", subtitle: "Discovery & Planning", icon: TrendingUp, color: "primary" },
                  { title: "Custom Fit", subtitle: "Build & Launch", icon: BarChart3, color: "teknify-purple" },
                  { title: "Actionable", subtitle: "Reporting & Insight", icon: PieChart, color: "green-500" },
                  { title: "Responsive", subtitle: "Ongoing Support", icon: Users, color: "blue-500" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-muted/50 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className={`w-7 h-7 bg-${item.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon size={14} className={`text-${item.color}`} />
                      </div>
                      <span className="text-[11px] text-muted-foreground line-clamp-1">{item.subtitle}</span>
                    </div>
                    <p className="text-lg lg:text-2xl font-bold text-foreground leading-tight">{item.title}</p>
                  </div>
                ))}
              </div>

              {/* Chart area - Hidden on mobile, visible on lg */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-4">
                {/* Line chart */}
                <div className="lg:col-span-2 bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-foreground">Digital Marketing Performance</h4>
                    <div className="flex gap-3">
                      {[
                        { label: "SEO", color: "bg-primary" },
                        { label: "SEM", color: "bg-teknify-purple" },
                        { label: "Social", color: "bg-green-500" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full ${item.color}`} />
                          <span className="text-xs text-muted-foreground">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-32 flex items-end gap-1">
                    {[40, 65, 45, 70, 55, 80, 60, 75, 50, 85, 70, 90].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col gap-0.5">
                        <div
                          className="bg-primary/20 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Donut chart area */}
                <div className="bg-muted/30 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-4">Service Coverage</h4>
                  <div className="flex items-center justify-center mb-3">
                    <div className="relative w-28 h-28">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle
                          cx="18" cy="18" r="15.9"
                          fill="none"
                          stroke="hsl(var(--muted))"
                          strokeWidth="3"
                        />
                        <circle
                          cx="18" cy="18" r="15.9"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="3"
                          strokeDasharray="92, 100"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-base font-bold text-foreground">Tailored</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Web & App Delivery</span>
                      <span className="font-medium text-foreground">Custom built</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">IT & Marketing Support</span>
                      <span className="font-medium text-foreground">Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardPreview;
