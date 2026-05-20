import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceOffering } from "@/data/serviceCategories";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";

interface ServiceOfferingsProps {
  offerings: ServiceOffering[];
  categoryTitle: string;
}

const ServiceOfferings = ({ offerings, categoryTitle }: ServiceOfferingsProps) => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="sub-heading-pill mb-6 inline-flex">What We Offer</div>
          <h2 className="font-heading text-h2 lg:text-h1 leading-tight mb-4">
            Our{" "}
            <span className="relative inline-block">
              <span className="text-primary italic">Offerings</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-body text-muted-foreground">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                <CheckCircle className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="mb-2 font-heading text-h5 font-bold text-card-foreground">
                {offering.title}
              </h3>
              <p className="text-body-sm leading-relaxed text-muted-foreground">
                {offering.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <CraftButton>
              <CraftButtonLabel>Discuss Your Project</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowRight className="size-4 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
              </CraftButtonIcon>
            </CraftButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
