import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemFuturePacing from "@/components/ProblemFuturePacing";
import ProductIntroParadigm from "@/components/ProductIntroParadigm";
import FeaturesGrid from "@/components/FeaturesGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemFuturePacing />
      <ProductIntroParadigm />
      <FeaturesGrid />
    </div>
  );
};

export default Index;
