import { Aperture, Command, Globe } from "lucide-react";

const AccentUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block text-accent">
    {children}
    <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
      <path d="M2 8C20 4 50 2 100 5C150 8 175 5 198 7" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </span>
);

const items = [
  { icon: Aperture, title: "Streamlining Operations" },
  { icon: Command, title: "Automation & Integration" },
  { icon: Globe, title: "Digital Transformation" },
];

const SuccessSection = () => (
  <section className="w-full py-24 px-6 lg:px-16 bg-background">
    <div className="mx-auto max-w-[1280px]">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-block px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground mb-6">Our Success</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
          Reimagining Digital<br />Experiences <AccentUnderline>Worldwide</AccentUnderline>
        </h2>
        <p className="text-muted-foreground max-w-lg">Since 2018, MMP Consultants has helped over 200 businesses across Perth reduce costs, improve efficiency, and stay ahead with the right technology.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="bg-card rounded-2xl p-10 flex flex-col items-center text-center gap-5 border border-border/30 shadow-sm">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'hsl(270 80% 92%)' }}>
              <item.icon className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Proven delivery across software development, IT infrastructure, digital marketing, and ongoing managed support.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default SuccessSection;
