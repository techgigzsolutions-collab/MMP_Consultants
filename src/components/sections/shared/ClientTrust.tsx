const logos = [
  { name: "Layers", style: "font-bold" },
  { name: "Sisyphus", style: "font-light tracking-widest" },
  { name: "Circooles", style: "font-bold" },
  { name: "Catalog", style: "font-medium tracking-wide" },
  { name: "Quotient", style: "font-bold italic" },
];

const ClientTrust = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 md:justify-between">
          {/* Stats */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-accent">MMP Consultants</p>
            <p className="mt-0.5 text-sm text-muted-foreground">Custom technology, strategy, and support</p>
          </div>

          {/* Divider */}
          <div className="hidden h-12 w-px bg-border md:block" />

          {/* Logo placeholders */}
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`text-xl text-muted-foreground/30 ${logo.style}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTrust;
