import { ArrowRight, LayoutGrid, Zap, Users, Wrench } from "lucide-react";

const features = [
  { icon: LayoutGrid, title: "Custom Software", highlighted: false },
  { icon: Zap, title: "Data & Analytics", highlighted: true },
  { icon: Users, title: "IT Consulting", highlighted: false },
  { icon: Wrench, title: "Managed Support", highlighted: false },
];

const AccentUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block text-accent">
    {children}
    <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
      <path d="M2 8C20 4 50 2 100 5C150 8 175 5 198 7" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </span>
);

const FeaturesSection = () => (
  <section className="w-full py-24 px-6 lg:px-16" style={{ background: 'hsl(220 20% 10%)' }}>
    <div className="mx-auto max-w-[1280px]">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-block px-5 py-2.5 rounded-full border border-border/30 text-sm font-medium text-foreground/90 mb-6" style={{ color: 'hsl(30 33% 98%)' }}>Our Features</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: 'hsl(30 33% 98%)' }}>
          Advancing <AccentUnderline>Intelligence</AccentUnderline><br />Through Tech
        </h2>
        <p className="text-muted-foreground max-w-lg">From bespoke applications to data-driven insights, MMP Consultants brings together the right expertise to accelerate your business goals.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <div key={f.title} className={`rounded-2xl p-8 flex flex-col gap-6 ${f.highlighted ? 'text-foreground' : 'text-foreground/90'}`}
            style={{
              background: f.highlighted
                ? 'linear-gradient(180deg, hsl(270 60% 65%), hsl(20 90% 55%))'
                : 'hsl(220 15% 14%)',
              color: 'hsl(30 33% 98%)',
            }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'hsl(0 0% 100% / 0.12)' }}>
              <f.icon className="w-6 h-6" style={{ color: 'hsl(30 33% 98%)' }} />
            </div>
            <h3 className="text-xl font-bold">{f.title}</h3>
            <p className="text-sm opacity-70 leading-relaxed">Tailored solutions built around your business needs, delivered by experienced Perth-based professionals.</p>
            <ArrowRight className="w-5 h-5 mt-auto opacity-60" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;
