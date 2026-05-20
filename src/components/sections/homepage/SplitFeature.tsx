import { Check } from "lucide-react";

const stats = [
  { title: "Strategic Planning", subtitle: "Clear commercial direction and priorities", value: "Strategy-led", color: "text-primary" },
  { title: "Operational Delivery", subtitle: "Governance, execution and handover", value: "Built to scale", color: "text-primary" },
  { title: "Continuous Support", subtitle: "Ongoing guidance and documentation", value: "Long-term", color: "text-primary" },
];

const SplitFeature = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="sub-heading-pill mb-5 inline-flex">Why MMP Consultants</div>
            <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-6 leading-tight">
                Scalable solutions built to support
                <span className="text-primary">business transformation</span>
              </h2>
              <p className="text-muted-foreground text-body mb-8 leading-relaxed">
                We combine practical consulting, operational design, and long-term delivery support so your teams can execute more confidently and consistently.
</p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-muted-foreground/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-body text-foreground mb-1">
                    Reliability You Can Count On
                  </h4>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    We help prevent delays, handover gaps, and scope confusion so your projects stay on track from planning through delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-muted-foreground/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-body text-foreground mb-1">
                    Client-Centric Approach
                  </h4>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    Every engagement is tailored to your business outcomes, with pragmatic plans that support both leadership and delivery teams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual - gradient card with stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-primary/20 rounded-3xl p-6 lg:p-8">
              <div className="bg-foreground rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <p className="text-primary-foreground font-heading font-semibold text-body">
                    MMP Performance Dashboard
                  </p>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-4 space-y-3">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between bg-background rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <span className="text-primary text-caption">MM</span>
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-body-sm text-foreground">{stat.title}</p>
                        <p className="text-caption text-muted-foreground">{stat.subtitle}</p>
                      </div>
                    </div>
                    <span className={`font-heading font-semibold text-body-sm ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitFeature;
