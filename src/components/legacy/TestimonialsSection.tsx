import { Star } from "lucide-react";

const AccentUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block text-accent">
    {children}
    <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
      <path d="M2 8C20 4 50 2 100 5C150 8 175 5 198 7" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </span>
);

const testimonials = [
  { title: "Transformed Our IT Infrastructure Completely", name: "Sarah Mitchell", role: "Operations Director, Perth", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face", quote: "MMP Consultants migrated our entire server setup to the cloud with zero downtime. Their team is knowledgeable, responsive, and genuinely care about outcomes." },
  { title: "Our Go-To Technology Partner Since Day One", name: "David Nguyen", role: "CEO, WA SME", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", quote: "From building our customer portal to ongoing IT support, MMP Consultants has been exceptional. They understand our business and always deliver on time." },
  { title: "Outstanding Digital Marketing Results", name: "Emma Lawson", role: "Marketing Manager, Bentley", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", quote: "Our online leads tripled within three months of MMP Consultants launching our new digital strategy. Highly recommend them to any Perth business." },
];

const TestimonialsSection = () => (
  <section className="w-full py-24 px-6 lg:px-16" style={{ background: 'hsl(220 20% 10%)' }}>
    <div className="mx-auto max-w-[1280px]">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-block px-5 py-2.5 rounded-full border border-border/30 text-sm font-medium mb-6" style={{ color: 'hsl(30 33% 98%)' }}>Testimonials</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: 'hsl(30 33% 98%)' }}>
          Transforming Technology Into<br />Customer <AccentUnderline>Success</AccentUnderline>
        </h2>
        <p className="max-w-lg" style={{ color: 'hsl(220 10% 60%)' }}>Don't just take our word for it — here's what Perth businesses say about working with MMP Consultants.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl p-8 flex flex-col gap-5" style={{ background: 'hsl(220 15% 14%)' }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'hsl(30 33% 98%)' }}>{t.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 10% 60%)' }}>"{t.quote}"</p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t" style={{ borderColor: 'hsl(220 15% 20%)' }}>
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold" style={{ color: 'hsl(30 33% 98%)' }}>{t.name}</p>
                <p className="text-xs" style={{ color: 'hsl(220 10% 60%)' }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default TestimonialsSection;
