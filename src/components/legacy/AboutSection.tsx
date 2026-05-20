import { ArrowRight } from "lucide-react";

const AccentUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block text-accent">
    {children}
    <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
      <path d="M2 8C20 4 50 2 100 5C150 8 175 5 198 7" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </span>
);

const AboutSection = () => (
  <section className="w-full py-24 px-6 lg:px-16 bg-background">
    <div className="mx-auto max-w-[1280px] flex flex-col items-center text-center">
      <span className="inline-block px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground mb-6">About Us</span>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
        Innovative Systems For<br />Seamless <AccentUnderline>Integration</AccentUnderline>
      </h2>
      <p className="text-muted-foreground max-w-lg mb-8">Founded in 2018 and based in Bentley, WA, MMP Consultants partners with businesses across Perth to design, build, and maintain the technology systems that power their success.</p>
      <a href="#" className="flex items-center gap-3 pl-2 pr-8 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity mb-16">
        <span className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center">
          <ArrowRight className="w-4 h-4" />
        </span>
        Explore More
      </a>
      {/* Dashboard mockup placeholder */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(120 60% 50%)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(210 80% 60%)' }} />
        </div>
        <div className="p-8 grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-foreground">Dashboard</h3>
            <p className="text-xs text-accent">Payments updates</p>
            <div className="h-32 rounded-xl bg-accent/10 flex items-end px-4 pb-4 gap-1">
              {[40, 55, 70, 45, 80, 60, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `hsl(20 90% ${55 + i * 3}% / 0.6)` }} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div><p className="text-xs text-muted-foreground">Income</p><p className="font-bold text-foreground">8.00</p></div>
              <div><p className="text-xs text-muted-foreground">Total Expense</p><p className="font-bold text-foreground">4.500K</p></div>
              <div><p className="text-xs text-muted-foreground">Total Bonus</p><p className="font-bold text-foreground">6.100k</p></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-accent/20" />
              <p className="text-sm font-semibold text-foreground">Ghulam</p>
              <p className="text-xs text-muted-foreground">Product Designer</p>
            </div>
            <div className="bg-secondary rounded-xl p-4">
              <p className="text-sm font-semibold text-foreground">Your Balance</p>
              <p className="text-2xl font-bold text-foreground">2564,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
