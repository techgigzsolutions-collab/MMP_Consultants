const logos = [
  { name: "ZenoTech", sub: "Tech Solutions" },
  { name: "FuturEdge", sub: "Digital Realm" },
  { name: "InnoByte", sub: "Digital Solutions" },
  { name: "DigiSphere", sub: "Tech Company" },
  { name: "NeuraTech", sub: "Dummy Logo" },
];

const LogoItem = ({ name, sub }: { name: string; sub: string }) => (
  <div className="flex items-center gap-3 shrink-0 px-8">
    <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round">
        <path d="M4 6l4-2 4 2 4-2 4 2v12l-4 2-4-2-4 2-4-2z" />
      </svg>
    </div>
    <div>
      <p className="text-lg font-bold text-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">{sub}</p>
    </div>
  </div>
);

const ClientLogos = () => (
  <section className="w-full py-12 bg-background overflow-hidden">
    <div className="flex animate-marquee gap-0">
      {[...logos, ...logos, ...logos].map((l, i) => (
        <LogoItem key={i} name={l.name} sub={l.sub} />
      ))}
    </div>
  </section>
);
export default ClientLogos;
