import React from "react";
import { Reveal, RevealWords } from "./Reveal";
import { Briefcase, Brain, TrendingUp, CalendarCheck } from "lucide-react";
import { PrimaryCTA, SecondaryCTA } from "./CTA";

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
          <p className="eyebrow mb-5 sm:mb-6 flex items-center justify-center gap-2 text-green-deep text-center !text-[0.78rem] sm:!text-[0.92rem] !tracking-[0.06em]">
            <span className="h-[5px] w-[5px] sm:h-[6px] sm:w-[6px] rounded-full bg-green-soft" />
            For businesses tired of being invisible when buyers search for what you do
          </p>
        </Reveal>

        {/* Hero Title */}
        <h1 className="mx-auto max-w-[860px] text-center font-display text-[1.95rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4.0rem] font-bold leading-[1.12] text-dark lg:font-extrabold">
          <span className="block">When buyers ask AI</span>
          <span className="block">who to trust, make sure</span>
          <span className="block text-green-deep">your name is part of the answer.</span>
        </h1>

        {/* Lead Paragraphs */}
        <Reveal delay={0.45}>
          <div className="mx-auto mt-6 sm:mt-8 max-w-[700px] text-center font-body text-[0.96rem] sm:text-[1.08rem] leading-relaxed text-dark/75 space-y-2.5 sm:space-y-3">
            <p>Buyers are no longer only typing into Google.</p>
            <p>
              They ask ChatGPT, Perplexity, Gemini and Google AI Overviews<br className="hidden sm:inline" />{" "}
              who to trust, what to buy and which option makes sense.
            </p>
            <p>
              If your business is missing from those conversations, somebody else is getting the shortlist.
            </p>
            <p className="font-semibold text-dark/90">
              Vereen Digital helps you earn that visibility. Then turns it into qualified demand with AI SEO, Google Ads, Meta Ads and ChatGPT Ads.
            </p>
          </div>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.55}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <PrimaryCTA href="#book">Get in Touch</PrimaryCTA>
            <SecondaryCTA href="#work">See the Proof</SecondaryCTA>
          </div>
        </Reveal>

        {/* Key Metrics Grid */}
        <Reveal delay={0.7}>
          <div className="mx-auto mt-20 max-w-[940px] border-t border-dark/12 pt-10">
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-dark/12">
              <Stat icon={Briefcase} value="40+" label="Projects Delivered" />
              <Stat icon={Brain} value="7+" label="AI SEO Engagements" />
              <Stat icon={TrendingUp} value="~25%" label="Average Enquiry Increase" />
              <Stat icon={CalendarCheck} value="Under 5 Months" label="To First AI Citation" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  value: string;
  label: string;
}) {
  const isLong = value.length > 8;
  return (
    <div className="flex flex-col items-center text-center px-3 sm:px-4">
      <div className="mb-3 text-green-deep">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <p
        className={`tabular font-display font-extrabold text-dark leading-none ${
          isLong
            ? "text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] whitespace-nowrap"
            : "text-[2rem] lg:text-[2.3rem]"
        }`}
      >
        {value}
      </p>
      <p className="mt-2.5 max-w-[160px] font-body text-[0.82rem] leading-snug text-dark/60">
        {label}
      </p>
    </div>
  );
}

export default Hero;
