import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ScienceGrid } from "@/components/ScienceGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { CandidateQuiz } from "@/components/CandidateQuiz";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SmileGallery } from "@/components/SmileGallery";
import { Location } from "@/components/Location";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { AreasServed } from "@/components/AreasServed";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileBookBar } from "@/components/MobileBookBar";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ScienceGrid />
        <HowItWorks />
        <BeforeAfterSlider />
        <SmileGallery />
        <CandidateQuiz />
        <Location />
        <Pricing />
        <FAQ />
        <AreasServed />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
