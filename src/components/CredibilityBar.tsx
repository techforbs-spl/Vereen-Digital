import React from "react";
import { Reveal } from "./Reveal";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function CredibilityBar() {
  return (
    <section id="credibility" className="border-y border-dark/10 bg-paper-deep/60 py-8">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-[1.05rem] font-medium leading-relaxed text-dark/80 text-center md:text-left flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-deep shrink-0" />
              <span>Trusted by high-growth businesses in professional services, healthcare, e-commerce and B2B.</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[0.82rem] font-semibold text-dark/60">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-green" /> Australia & Canada</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-green" /> United States</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-green" /> UAE & Middle East</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
