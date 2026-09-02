"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { SecondaryCTA } from "./CTA";

export default function CaseStudies() {
  return (
    <section id="work" className="bg-paper-deep/50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="text-center max-w-[780px] mx-auto">
          <Reveal>
            <p className="eyebrow text-green-deep text-center">The work speaks louder than the pitch</p>
            <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.15] text-dark lg:text-[2.5rem] lg:font-extrabold text-center">
              Different businesses. Different starting points. One goal: get growth moving and keep it moving.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-6 flex justify-center">
              <SecondaryCTA href="#book">See the proof</SecondaryCTA>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <TiltCard className="flex flex-col justify-between rounded-3xl bg-dark p-9 text-paper">
                <FeaturedContent />
              </TiltCard>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.08}>
              <TiltCard className="flex flex-col justify-between rounded-3xl border border-dark/10 bg-paper p-7">
                <CompactContent
                  tag="Home and Housing E-commerce · Collection Page SEO · US and Australia"
                  imageSrc="/case-studies/shopify-revenue.png"
                  imageAlt="Shopify revenue growth graph"
                  problem="A US-based home and housing products brand had collection pages that had been live for years and were contributing almost nothing to organic traffic. Faceted navigation was creating duplicate URLs without canonical handling. No internal linking connected editorial content to commercial pages. Keyword cannibalization was suppressing every collection page at the same time."
                  fixes={[
                    "Collection page content rebuilt around commercial buyer intent",
                    "Canonical tags implemented across all filtered URL variants",
                    "Internal linking matrix from editorial content to collection pages",
                    "Full cannibalization audit with page consolidation and redirects",
                    "Breadcrumb and Product Collection schema added"
                  ]}
                  outcome="18% year-on-year revenue growth. Sessions trending from 28,000 to 57,000 per month in twelve months."
                />
              </TiltCard>
            </Reveal>
            <Reveal delay={0.14}>
              <TiltCard className="flex flex-col justify-between rounded-3xl border border-dark/10 bg-paper p-7">
                <CompactContent
                  tag="On-demand Home Healthcare · Technical SEO + AI SEO + Google Ads · Dubai, UAE"
                  imageSrc="/case-studies/healthcare-dubai.png"
                  imageAlt="Google Search Console impressions and Google AI Overview rank"
                  problem="An on-demand home healthcare service in Dubai was sitting at an average search position of 13.1 across its highest-value queries. 726,000 impressions in six months but a 0.5% CTR because it was ranking page two on every term that mattered. The site had no medical schema, no structured credential signals and no content built for how Google constructs AI Overview recommendations."
                  fixes={[
                    "MedicalBusiness, Physician and LocalBusiness schema implemented",
                    "DHA licensing and doctor credentials structured and citable within page content",
                    "Answer-first content built around the exact query structures used in Google AI Overviews",
                    "Technical crawl issues resolved and Core Web Vitals improved for mobile-first Dubai audience",
                    "Google Ads running in parallel to capture immediate demand while organic authority built"
                  ]}
                  outcome="First recommendation in Google AI Overview for the category's highest-value query. 726,000 impressions in six months with an unbroken upward trajectory from the month work started."
                />
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState({});

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateZ(6px)`,
    });
  };

  return (
    <a
      ref={ref}
      href="#book"
      onMouseMove={onMove}
      onMouseLeave={() => setStyle({ transform: "perspective(900px) rotateX(0) rotateY(0)" })}
      style={style}
      className={`tilt-card focus-ring block ${className}`}
    >
      {children}
    </a>
  );
}

function FeaturedContent() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <span className="eyebrow text-green-soft">Outsourced Accounting and Bookkeeping · Technical SEO + AI SEO · Australia and Canada</span>
        </div>

        <div className="mt-5 max-w-[460px] overflow-hidden rounded-xl border border-paper/15 bg-black/40 shadow-sm">
          <img
            src="/case-studies/accounting-canada.png"
            alt="AI Search recommendation showing Outsourced Accounting client in Canada"
            className="w-full max-h-[170px] sm:max-h-[200px] object-cover object-top"
            loading="lazy"
          />
        </div>

        <p className="mt-5 max-w-[520px] font-body text-[0.95rem] leading-relaxed text-paper/75">
          An outsourced accounting and bookkeeping firm serving Australian and Canadian markets came with a site search engines could barely crawl. Pages were not indexed. Internal linking did not exist. And the business was completely absent from every AI search tool buyers were using to find providers.
        </p>
        <div className="mt-5">
          <p className="eyebrow text-green-soft text-[0.75rem]">What we fixed:</p>
          <ul className="mt-3 space-y-1.5 font-body text-[0.85rem] leading-relaxed text-paper/60 list-disc list-inside">
            <li>Crawlability and indexation gaps across all service pages</li>
            <li>Internal linking architecture connecting service pages, location pages and supporting content</li>
            <li>Organisation and Service schema so AI systems could identify and trust the business as a real entity</li>
            <li>Comparison content targeting the exact queries buyers type into ChatGPT, Gemini and Google AI Overviews</li>
            <li>Regional credibility signals for Australian and Canadian markets</li>
          </ul>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 border-t border-paper/10 pt-5">
          <div>
            <p className="tabular font-display text-[1.8rem] font-extrabold text-green-soft">Under 5</p>
            <p className="mt-1 font-body text-[0.8rem] text-paper/55">Months to first AI citation</p>
          </div>
          <div>
            <p className="tabular font-display text-[1.8rem] font-extrabold text-green-soft">~25%</p>
            <p className="mt-1 font-body text-[0.8rem] text-paper/55">Increase in inbound enquiries after AI visibility</p>
          </div>
        </div>
      </div>
      <span className="mt-7 inline-flex items-center gap-2 font-body text-[0.9rem] font-medium text-green-soft">
        See how AI visibility gets built ↗
      </span>
    </>
  );
}

function CompactContent({
  tag,
  imageSrc,
  imageAlt,
  problem,
  fixes,
  outcome,
}: {
  tag: string;
  imageSrc?: string;
  imageAlt?: string;
  problem: string;
  fixes: string[];
  outcome: string;
}) {
  return (
    <>
      <div>
        <span className="eyebrow text-green-deep">{tag}</span>

        {imageSrc && (
          <div className="mt-4 max-w-[420px] overflow-hidden rounded-xl border border-dark/10 bg-paper-deep/60 shadow-xs">
            <img
              src={imageSrc}
              alt={imageAlt || tag}
              className="w-full max-h-[145px] sm:max-h-[165px] object-cover object-top"
              loading="lazy"
            />
          </div>
        )}

        <p className="mt-4 font-body text-[0.92rem] leading-relaxed text-dark/70">{problem}</p>
        
        <div className="mt-4">
          <p className="eyebrow text-green-deep text-[0.75rem]">What we fixed:</p>
          <ul className="mt-2 space-y-1 font-body text-[0.82rem] leading-relaxed text-dark/65 list-disc list-inside">
            {fixes.map((fix, idx) => (
              <li key={idx}>{fix}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-5 border-t border-dark/10 pt-3.5 font-body text-[0.88rem] leading-relaxed text-green-deep">
        <strong>Result:</strong> {outcome} ↗
      </p>
    </>
  );
}
