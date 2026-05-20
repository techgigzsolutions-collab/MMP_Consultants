import { Rocket, Brain, Target } from "lucide-react";
import strategyImg from "@/assets/strategy-section.jpg";

const strategyCards = [
  {
    icon: Rocket,
    title: "Custom Business Frameworks",
    description:
      "We develop frameworks, governance models, and delivery plans that match your business goals and team capabilities.",
  },
  {
    icon: Brain,
    title: "Operational Governance & Risk",
    description:
      "We help you define clear processes, manage risks, and keep execution aligned with your priorities and compliance needs.",
  },
  {
    icon: Target,
    title: "Change Management & Adoption",
    description:
      "We support rollout, training, and user adoption so your people can use new ways of working with confidence.",
  },
];

const StrategySection = () => {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left - Content */}
        <div>
          <span className="badge-outline">Our Strategy</span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-[44px] md:leading-[1.15]">
            What Sets MMP Consultants Apart — Our{" "}
            <span className="text-accent-orange underline-orange">Core Capabilities</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            We don't just consult — we build, manage, and grow alongside you. Our end-to-end capabilities mean you never have to juggle multiple vendors again.
          </p>

          <div className="mt-8 space-y-5">
            {strategyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src={strategyImg}
            alt="Strategy team"
            className="h-[400px] w-full object-cover md:h-[500px]"
            loading="lazy"
            width={640}
            height={480}
          />
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
