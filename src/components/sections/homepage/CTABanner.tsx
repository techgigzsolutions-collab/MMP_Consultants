import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary via-accent/70 to-secondary/80 px-8 lg:px-16 py-12 lg:py-16 text-center lg:text-left shadow-2xl shadow-primary/10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
                Ready to strengthen your operations and lead with confidence?
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
            >
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
