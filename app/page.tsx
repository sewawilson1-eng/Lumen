import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ServicesPillars } from "@/components/ServicesPillars";
import { ScienceGrid } from "@/components/ScienceGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { CandidateQuiz } from "@/components/CandidateQuiz";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SmileGallery } from "@/components/SmileGallery";
import { Location } from "@/components/Location";
import { Pricing } from "@/components/Pricing";
import { ToothGems } from "@/components/ToothGems";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServicesPillars />
        <ScienceGrid />
        <HowItWorks />
        <BeforeAfterSlider />
        <SmileGallery />
        <CandidateQuiz />
        <Location />
        <Pricing />
        <ToothGems />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
