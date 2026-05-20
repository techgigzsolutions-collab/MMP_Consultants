const FeatureStats = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="sub-heading-pill mb-4 inline-flex">Our Performance</div>
          <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-4">
            Measurable Results With <span className="text-primary">Proven</span> Technology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Strategic Planning with Clarity",
              description:
                "We help leaders define clear priorities, simplify decisions, and build execution plans that drive measurable progress.",
            },
            {
              title: "Operational Excellence",
              description:
                "Process improvement, governance and operational models designed to reduce friction and increase consistency across teams.",
            },
            {
              title: "Sustainable Support",
              description:
                "Practical ongoing guidance and documentation that keeps your business stable, compliant, and ready to scale.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-card rounded-2xl border border-border/60 p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-primary mb-5" />
              <h3 className="font-heading text-h5 text-foreground mb-3">{card.title}</h3>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
