import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ServiceCategoryHero from "@/components/sections/services/ServiceCategoryHero";
import ServiceOfferings from "@/components/sections/services/ServiceOfferings";
import CtaSection from "@/components/sections/shared/CtaSection";
import { serviceCategories } from "@/data/serviceCategories";
import usePageTitle from "@/hooks/usePageTitle";
import AnnouncementBar from "@/components/sections/global/AnnouncementBar";

const ServiceCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) return <Navigate to="/services" replace />;

  usePageTitle(category.shortTitle);

  return (
    <div className="min-h-screen bg-background">
            <AnnouncementBar />
      <Header />
      <ServiceCategoryHero category={category} />
      <ServiceOfferings offerings={category.offerings} categoryTitle={category.title} />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="sub-heading-pill mb-6 inline-flex">Why Choose Us</div>
              <h2 className="font-heading text-h2 leading-tight mb-6">
                Delivering Excellence In{" "}
                <span className="text-primary italic">{category.shortTitle}</span>
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed mb-8">
                {category.description} We focus on practical delivery, clear communication, and solutions that fit the way your business already works.
              </p>
              <div className="space-y-4">
                {['Tailored implementation', 'Clear project communication', 'Business-first planning', 'Ongoing advisory support'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-body font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our team at work"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card border border-border p-5 shadow-card">
                <p className="text-h5 font-heading font-bold text-primary">Business-focused</p>
                <p className="text-body-sm text-muted-foreground">Built around your workflow and goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default ServiceCategoryPage;
