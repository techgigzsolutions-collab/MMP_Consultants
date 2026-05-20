import { ArrowRight, Phone } from "lucide-react";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";
import { Link } from "react-router-dom";

interface CtaSectionProps {
  heading?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
}

const CtaSection = ({
  heading = "Ready To Transform Your Business With Expert IT & Digital Solutions?",
  description = "Get a free consultation with our team. Whether you need custom software, managed IT services, or a digital strategy — MMP Consultants has you covered.",
  primaryButton = "Call (08) 6383 9983",
  secondaryButton = "Get a Free Quote",
}: CtaSectionProps) => {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-14 text-center md:px-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(24 95% 53%), hsl(350 80% 60%))",
        }}
      >
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-primary-foreground md:text-[40px] md:leading-[1.2]">
          {heading}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="tel:+61386839983">
            <CraftButton className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground">
              <CraftButtonLabel>{primaryButton}</CraftButtonLabel>
              <CraftButtonIcon>
                <Phone className="size-4 stroke-2" />
              </CraftButtonIcon>
            </CraftButton>
          </a>
          <Link to="/contact">
            <CraftButton className="bg-primary-foreground text-foreground">
              <CraftButtonLabel>{secondaryButton}</CraftButtonLabel>
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

export default CtaSection;
