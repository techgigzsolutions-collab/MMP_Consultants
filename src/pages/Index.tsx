import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/homepage/Hero";
import DashboardPreview from "@/components/sections/homepage/DashboardPreview";
import FeatureStats from "@/components/sections/homepage/FeatureStats";
import Services from "@/components/sections/homepage/Services";
import SplitFeature from "@/components/sections/homepage/SplitFeature";
import CTABanner from "@/components/sections/homepage/CTABanner";
import ContactPreview from "@/components/sections/homepage/ContactPreview";
import Footer from "@/components/common/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Home");
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <Hero />
            <DashboardPreview />
      <Services />
      <FeatureStats />

      <SplitFeature />
      <CTABanner />
      <ContactPreview />
      <Footer />
    </div>
  );
};

export default Index;
