import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeatureStrip } from "@/components/FeatureStrip";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ScienceGrid } from "@/components/ScienceGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { CandidateQuiz } from "@/components/CandidateQuiz";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Location } from "@/components/Location";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureStrip />
<ProductShowcase />
        <ScienceGrid />
        <HowItWorks />
        <BeforeAfterSlider />
        <CandidateQuiz />
        <Location />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
