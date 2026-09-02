import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResultsSnapshot from "@/components/ResultsSnapshot";
import CaseStudies from "@/components/CaseStudies";
import ServicePathways from "@/components/ServicePathways";
import OperatingModel from "@/components/OperatingModel";
import ProcessJourney from "@/components/ProcessJourney";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ResultsSnapshot />
        <CaseStudies />
        <ServicePathways />
        <OperatingModel />
        <ProcessJourney />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CalendlyModal />
    </>
  );
}
