const logos = [
  {
    name: "ZenoTech",
    subtitle: "Tech Solutions",
    logo:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "FutureEdge",
    subtitle: "Digital Realm",
    logo:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "InnoByte",
    subtitle: "Digital Solutions",
    logo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "DigiSphere",
    subtitle: "Tech Company",
    logo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "NeuraTech",
    subtitle: "AI Solutions",
    logo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "DataFlow",
    subtitle: "Analytics",
    logo:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=160&q=80",
  },
];

const TrustedBy = () => {
  return (
    <section className="py-16 lg:py-20 overflow-hidden">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-h3 lg:text-h2 text-foreground">
            Technology Support For Modern Australian Businesses
          </h2>
        </div>

        {/* Logo Scroller with white fade effect */}
        <div className="relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex gap-8 lg:gap-12 animate-marquee py-4">
              {/* Original set */}
              {logos.map((company, idx) => (
                <div
                  key={`original-${idx}`}
                  className="flex flex-col items-center gap-3 min-w-max group cursor-pointer"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl object-cover bg-muted/50 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="text-body-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {company.name}
                    </p>
                    <p className="text-caption text-muted-foreground">
                      {company.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {logos.map((company, idx) => (
                <div
                  key={`duplicate-${idx}`}
                  className="flex flex-col items-center gap-3 min-w-max group cursor-pointer"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl object-cover bg-muted/50 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <p className="text-body-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {company.name}
                    </p>
                    <p className="text-caption text-muted-foreground">
                      {company.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
