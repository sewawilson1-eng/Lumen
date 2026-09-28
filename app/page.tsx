import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OwnLane } from "@/components/OwnLane";
import { ScienceGrid } from "@/components/ScienceGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { CandidateQuiz } from "@/components/CandidateQuiz";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SmileGallery } from "@/components/SmileGallery";
import { Testimonials } from "@/components/Testimonials";
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
        <Testimonials />
        <CandidateQuiz />
        <Location />
        <Pricing />
        <OwnLane />
        <FAQ />
        <AreasServed />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
