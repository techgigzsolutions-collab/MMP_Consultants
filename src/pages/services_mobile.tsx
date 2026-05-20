import DiscountBanner from "@/components/legacy/DiscountBanner";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/legacy/HeroSection";
import ClientLogos from "@/components/legacy/ClientLogos";
import FeaturesSection from "@/components/legacy/FeaturesSection";
import AboutSection from "@/components/legacy/AboutSection";
import HowItWorksSection from "@/components/legacy/HowItWorksSection";
import SuccessSection from "@/components/legacy/SuccessSection";
import StatsSection from "@/components/legacy/StatsSection";
import MissionSection from "@/components/legacy/MissionSection";
import StrengthSection from "@/components/legacy/StrengthSection";
import CTASection from "@/components/legacy/CTASection";

const Service_mobile_Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <DiscountBanner />
      <Header />
      <HeroSection />
      <ClientLogos />
      <FeaturesSection />
      <AboutSection />
      <HowItWorksSection />
      <SuccessSection />
      <StatsSection />
      <MissionSection />
      <StrengthSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Service_mobile_Page;
