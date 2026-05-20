import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const AccentUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block text-accent">
    {children}
    <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
      <path d="M2 8C20 4 50 2 100 5C150 8 175 5 198 7" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </span>
);

const items = [
  { num: "01", title: "End-to-End Delivery", desc: "From initial scoping through to deployment and ongoing support, we manage the full technology lifecycle so you can focus on your business." },
  { num: "02", title: "Perth-Based Expertise", desc: "Our local team understands the Australian business landscape and provides responsive, on-the-ground support when you need it most." },
  { num: "03", title: "Scalable Solutions", desc: "Whether you're a growing startup or an established enterprise, our technology solutions scale with your business at every stage." },
];

const StrengthSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="w-full py-24 px-6 lg:px-16 bg-background">
      <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-start gap-16">
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="inline-block px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground">Our Strength</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-foreground">
            Inspiring Teamwork To Drive <AccentUnderline>Performance</AccentUnderline>
          </h2>
          <p className="text-muted-foreground leading-relaxed">Our team brings together the right combination of technical skills and business acumen to solve complex challenges and deliver real results.</p>
          <a href="#" className="flex items-center gap-3 pl-2 pr-8 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity w-fit">
            <span className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
            Explore More
          </a>
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          {items.map((item, i) => (
            <div key={item.num} className={`rounded-2xl border border-border/50 overflow-hidden transition-all ${open === i ? 'bg-secondary' : 'bg-card'}`}>
              <button onClick={() => setOpen(i)} className="w-full flex items-center gap-4 p-6 text-left">
                <span className="text-2xl font-bold text-accent">{item.num}</span>
                <span className="flex-1 text-lg font-semibold text-foreground">{item.title}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed pl-12">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StrengthSection;
