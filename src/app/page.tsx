import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CredibilityBar } from "@/components/CredibilityBar";
import { ResultsSnapshot } from "@/components/ResultsSnapshot";
import { CaseStudies } from "@/components/CaseStudies";
import { ServicePathways } from "@/components/ServicePathways";
import { OperatingModel } from "@/components/OperatingModel";
import { ProcessJourney } from "@/components/ProcessJourney";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper text-dark overflow-x-hidden selection:bg-green selection:text-white">
      <Header />
      <main>
        <Hero />
        <CredibilityBar />
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
    </div>
  );
}
