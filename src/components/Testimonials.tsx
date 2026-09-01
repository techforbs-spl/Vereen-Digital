import React from "react";
import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-paper lg:py-32">
      <div
        className="glow-orb slow reverse"
        style={{
          width: 320,
          height: 320,
          top: -60,
          right: "10%",
          background: "#A5DC3C",
          opacity: 0.12,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[840px] px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-soft">In their words</p>
        </Reveal>

        <div className="mt-8">
          <Reveal delay={0.1}>
            <blockquote className="relative">
              <Quote className="mx-auto h-10 w-10 text-green/30 mb-6" />
              <p className="font-display text-[1.6rem] font-medium leading-[1.38] text-paper lg:text-[2.0rem]">
                “Vereen Digital took us from being practically invisible in AI search to ranking as the primary recommended solution. In under five months, qualified inbound pipeline jumped by over 25%.”
              </p>
              <footer className="mt-8 flex flex-col items-center justify-center gap-3">
                <span
                  className="h-12 w-12 rounded-full border-2 border-green/30 flex items-center justify-center font-bold text-green-soft text-lg"
                  style={{ background: "#1A231C" }}
                  aria-hidden="true"
                >
                  VD
                </span>
                <div>
                  <p className="font-body text-[1.0rem] font-semibold text-paper">
                    Managing Director
                  </p>
                  <p className="font-body text-[0.84rem] text-paper/55">
                    B2B Professional Services Firm, APAC & North America
                  </p>
                </div>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
