import { Lightbulb, TrendingUp, Brain } from "lucide-react";

const stats = [
  { number: "Tailored", label: "Solutions for your workflow" },
  { number: "Practical", label: "Advice grounded in operations" },
  { number: "Ongoing", label: "Support after launch" },
];

const growthCards = [
  {
    icon: Lightbulb,
    title: "Business Strategy & Roadmapping",
  },
  {
    icon: TrendingUp,
    title: "Operational Readiness & Delivery",
  },
  {
    icon: Brain,
    title: "Data & Performance Insight",
  },
];

const GrowthStats = () => {
  return (
    <section className="bg-foreground py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full border border-primary-foreground/30 px-5 py-1.5 text-sm font-medium text-primary-foreground">
              Our Growth
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-[44px] md:leading-[1.15]">
              Proven Consultancy For{" "}
              <span className="text-accent-orange underline-orange">Measurable</span> Impact
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/60">
              MMP Consultants supports leadership teams with strategy, governance, and operational support built around clear business objectives.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold text-accent">{stat.number}</p>
                  <p className="mt-1 text-sm text-primary-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Cards */}
          <div>
            <p className="mb-6 text-lg font-semibold">How We Help You Grow</p>
            <div className="space-y-4">
              {growthCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-base font-semibold">{card.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthStats;
