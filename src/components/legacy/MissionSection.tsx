import { TrendingUp, BarChart3 } from "lucide-react";

const AccentUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block text-accent">
    {children}
    <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
      <path d="M2 8C20 4 50 2 100 5C150 8 175 5 198 7" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </span>
);

const MissionSection = () => (
  <section className="w-full py-24 px-6 lg:px-16 bg-background">
    <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-16">
      {/* Left - Image placeholder */}
      <div className="w-full lg:w-1/2">
        <div className="rounded-3xl overflow-hidden bg-secondary aspect-[4/3] flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Team collaboration" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/2 space-y-6">
        <span className="inline-block px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground">Our Mission</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-foreground">
          Technology Solutions Built For Perth <AccentUnderline>Businesses</AccentUnderline>
        </h2>
        <p className="text-muted-foreground leading-relaxed">Our mission is simple: help local businesses grow through smart, reliable technology. We deliver tailored IT solutions that reduce costs, increase efficiency, and keep your systems running.</p>
        <div className="space-y-4 pt-2">
          {[
            { icon: TrendingUp, title: "Driving Business Growth" },
            { icon: BarChart3, title: "Data-Driven Decision Making" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">We combine deep technical expertise with a genuine understanding of your business to deliver outcomes that matter.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default MissionSection;
