import React from "react";
import { Reveal, RevealWords } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-40 pb-24 lg:pt-48 lg:pb-32">
      {/* Background ambient glow orbs */}
      <div
        className="glow-orb slow"
        style={{
          width: "420px",
          height: "420px",
          top: "-100px",
          left: "-100px",
          background: "#89BC30",
        }}
        aria-hidden="true"
      />
      <div
        className="glow-orb reverse"
        style={{
          width: "360px",
          height: "360px",
          top: "60px",
          right: "-80px",
          background: "#A5DC3C",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1160px] px-6 lg:px-10">
        {/* Eyebrow */}
        <Reveal>
          <p className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-green/20 bg-green-light/40 px-3.5 py-1.5 text-green-deep backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green animate-pulse"></span>
            For businesses tired of being invisible when buyers search for what you do
          </p>
        </Reveal>

        {/* Hero Title */}
        <h1 className="max-w-[860px] font-display text-[2.7rem] font-bold leading-[1.06] text-dark lg:text-[4.0rem]">
          <RevealWords text="When buyers ask AI who to trust, make" />{" "}
          <span className="text-green-deep">
            <RevealWords
              text="sure your name is part of the answer."
              delay={0.3}
            />
          </span>
        </h1>

        {/* Lead Paragraphs */}
        <Reveal delay={0.45}>
          <div className="mt-7 max-w-[640px] font-body text-[1.08rem] leading-relaxed text-dark/75 space-y-4">
            <p>
              Buyers are no longer only typing into Google. They ask ChatGPT, Perplexity, Gemini and Google AI Overviews who to trust, what to buy and which option makes sense.
            </p>
            <p>
              If your business is missing from those conversations, somebody else is getting the shortlist.
            </p>
            <p className="font-medium text-dark/90">
              Vereen Digital helps you earn that visibility. Then turns it into qualified demand with AI SEO, Google Ads, Meta Ads and ChatGPT Ads.
            </p>
          </div>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.55}>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#book"
              className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-green px-7 py-4 font-body text-[0.95rem] font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-deep hover:shadow-lg active:scale-95"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="focus-ring group inline-flex items-center gap-2 font-body text-[0.95rem] font-semibold text-dark transition-colors hover:text-green-deep"
            >
              <span className="border-b-2 border-dark/20 pb-0.5 transition-colors group-hover:border-green-deep">
                See the Proof
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Reveal>

        {/* Key Metrics Grid */}
        <Reveal delay={0.65}>
          <div className="mt-16 grid max-w-[840px] grid-cols-2 gap-8 border-t border-dark/10 pt-8 sm:grid-cols-4">
            <div>
              <p className="tabular font-display text-[1.6rem] font-bold text-dark leading-none">
                40+
              </p>
              <p className="mt-2.5 font-body text-[0.8rem] font-medium leading-snug text-dark/55">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="tabular font-display text-[1.6rem] font-bold text-dark leading-none">
                7+
              </p>
              <p className="mt-2.5 font-body text-[0.8rem] font-medium leading-snug text-dark/55">
                AI SEO Engagements
              </p>
            </div>
            <div>
              <p className="tabular font-display text-[1.6rem] font-bold text-dark leading-none text-green-deep">
                ~25%
              </p>
              <p className="mt-2.5 font-body text-[0.8rem] font-medium leading-snug text-dark/55">
                Average Enquiry Increase
              </p>
            </div>
            <div>
              <p className="tabular font-display text-[1.15rem] sm:text-[1.3rem] lg:text-[1.45rem] font-bold text-dark leading-none whitespace-nowrap">
                Under 5 Months
              </p>
              <p className="mt-2.5 font-body text-[0.8rem] font-medium leading-snug text-dark/55">
                To First AI Citation
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
