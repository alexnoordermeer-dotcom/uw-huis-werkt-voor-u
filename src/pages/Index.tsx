import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemFuturePacing from "@/components/ProblemFuturePacing";
import ProductIntroParadigm from "@/components/ProductIntroParadigm";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import ResultsComparison from "@/components/ResultsComparison";
import ValueStack from "@/components/ValueStack";
import MarketTimingTestimonials from "@/components/MarketTimingTestimonials";
import PricingToegang from "@/components/PricingToegang";
import CreatorInfo from "@/components/CreatorInfo";
import FAQ from "@/components/FAQ";
import FinalCTAFooter from "@/components/FinalCTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemFuturePacing />
      <ProductIntroParadigm />
      <FeaturesGrid />
      <HowItWorks />
      <ResultsComparison />
      <ValueStack />
      <MarketTimingTestimonials />
      <PricingToegang />
      <CreatorInfo />
      <FAQ />
      <FinalCTAFooter />
    </div>
  );
};

export default Index;
