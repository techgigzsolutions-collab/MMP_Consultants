import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="w-full py-24 px-6 lg:px-16 bg-background">
    <div className="mx-auto max-w-[1280px] rounded-3xl p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-10"
      style={{ background: 'linear-gradient(135deg, hsl(220 20% 10%), hsl(220 20% 14%))' }}>
      <div className="flex-1 space-y-5">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'hsl(30 33% 98%)' }}>
          Ready to Modernise Your Business with Smarter IT?
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 10% 60%)' }}>
          Book a free consultation with the MMP Consultants team and get a tailored technology plan that fits your goals and budget.
        </p>
      </div>
      <a href="https://wa.me/61403499150?text=Hi%20MMP%20Consultants%2C%20I%20would%20like%20to%20have%20a%20conversation%20about%20my%20technology%20needs.%20Please%20get%20in%20touch%20with%20me%20soon." className="flex items-center gap-3 pl-2 pr-8 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
        style={{ background: 'hsl(30 33% 98%)', color: 'hsl(220 20% 10%)' }}>
        <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'hsl(220 20% 14%)' }}>
          <ArrowRight className="w-4 h-4" style={{ color: 'hsl(30 33% 98%)' }} />
        </span>
        Book A Call
      </a>
    </div>
  </section>
);
export default CTASection;
