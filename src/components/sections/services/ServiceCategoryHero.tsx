import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceCategory } from "@/data/serviceCategories";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";

interface ServiceCategoryHeroProps {
  category: ServiceCategory;
}

const ServiceCategoryHero = ({ category }: ServiceCategoryHeroProps) => {
  const Icon = category.icon;

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="section-container relative">
        <div className="max-w-3xl">
          <div className="sub-heading-pill mb-6 inline-flex">
            <Icon className="h-4 w-4" />
            {category.shortTitle}
          </div>

          <h1 className="font-heading text-h1 lg:text-display leading-tight mb-6">
            {category.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="relative inline-block">
              <span className="text-primary italic">{category.title.split(" ").pop()}</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-body text-muted-foreground mb-8 max-w-xl leading-relaxed">
            {category.heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact">
              <CraftButton>
                <CraftButtonLabel>Get Started</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowRight className="size-4 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
                </CraftButtonIcon>
              </CraftButton>
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 text-body-sm font-semibold text-foreground hover:text-primary transition-colors">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoryHero;
