import HeroSection from "../components/homepage/HeroSection";
import ProgramsSection from "../components/homepage/ProgramsSection";
import HowItWorksSection from "../components/homepage/HowItWorksSection";
import CTASection from "../components/homepage/CTASection";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </>
  );
}
