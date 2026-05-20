import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Seamless Cloud Migration With Zero Downtime",
    quote:
      "\"After having our first discussion with the MMP Consultants team we felt at ease. They planned and trained us through our entire cloud transition — it was seamless. Thank you.\"",
    name: "Mohith R.",
    role: "Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  },
  {
    title: "Outstanding Marketing Results For Our Business",
    quote:
      "\"Super impressed with the quality of the final product. Very professional, on time, and has amazing ideas for the best marketing message. I can't thank you enough for your help.\"",
    name: "Nick D.",
    role: "Owner, DD Carpet Cleaning",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  },
  {
    title: "A Trusted IT Partner That Goes Above & Beyond",
    quote:
      "\"We invest our time growing the business and the MMP Consultants team handles our IT infrastructure. No more downtime, no messy tech issues — just reliable support whenever we need it.\"",
    name: "Sarah T.",
    role: "Operations Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <span className="badge-outline">Testimonials</span>

        <h2 className="mt-6 text-3xl font-bold leading-tight md:text-[44px] md:leading-[1.15]">
          Transforming Technology Into{" "}
          <span className="text-accent-orange underline-orange">Customer</span> Success
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
          Hear from businesses across Australia who have partnered with MMP Consultants for software development, digital marketing, and managed IT services.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-7 text-left transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <h3 className="mb-3 text-lg font-bold text-card-foreground">{t.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
