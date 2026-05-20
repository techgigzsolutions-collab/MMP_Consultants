import { ArrowRight, Bookmark, LayoutGrid, AlignJustify, SquareCode } from "lucide-react";

const AccentUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block text-accent">
    {children}
    <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
      <path d="M2 8C20 4 50 2 100 5C150 8 175 5 198 7" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </span>
);

const transactions = [
  { icon: Bookmark, name: "IT Consulting", date: "Strategy & roadmap", amount: "✓ Done", color: "hsl(20 90% 55%)" },
  { icon: LayoutGrid, name: "Software Build", date: "Custom development", amount: "✓ Done", color: "hsl(120 60% 45%)" },
  { icon: AlignJustify, name: "System Integration", date: "API & data linking", amount: "✓ Done", color: "hsl(120 60% 45%)" },
  { icon: SquareCode, name: "Managed Support", date: "Ongoing IT support", amount: "Active", color: "hsl(20 90% 55%)" },
];

const HowItWorksSection = () => (
  <section className="w-full py-24 px-6 lg:px-16 bg-background">
    <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-16">
      {/* Left - Transaction Card */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-md rounded-3xl p-8 space-y-6" style={{ background: 'hsl(270 80% 90%)' }}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">Digital Transformation</h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            </div>
          </div>
          <div className="space-y-3">
            {transactions.map((t) => (
              <div key={t.name} className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
                <span className="text-sm font-semibold" style={{ color: t.color }}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-5">
        <span className="inline-block px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground">How It Works</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
          Simplifying <AccentUnderline>Workflows,</AccentUnderline><br />Amplifying Results
        </h2>
        <p className="text-muted-foreground max-w-md leading-relaxed">We consult, build, integrate, and support — giving your team one reliable technology partner for every stage of your business growth.</p>
        <a href="#" className="flex items-center gap-3 pl-2 pr-8 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity mt-2">
          <span className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center">
            <ArrowRight className="w-4 h-4" />
          </span>
          Explore More
        </a>
      </div>
    </div>
  </section>
);
export default HowItWorksSection;
