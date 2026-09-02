import React from "react";
import { Reveal } from "./Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="work" className="bg-paper-deep/60 py-24 lg:py-32 border-t border-dark/10">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <p className="eyebrow text-green-deep">The work speaks louder than the pitch</p>
            <h2 className="mt-5 max-w-[620px] font-display text-[2rem] font-bold leading-[1.15] text-dark lg:text-[2.5rem]">
              Different businesses. Different starting points. One goal: get growth moving and keep it moving.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#book"
              className="focus-ring group inline-flex items-center gap-2 font-body text-[0.95rem] font-semibold text-dark transition-colors hover:text-green-deep"
            >
              <span className="border-b-2 border-dark/20 pb-0.5 group-hover:border-green-deep">
                See all case studies
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
          {/* Sticky Left Dark Card */}
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <div className="tilt-card block flex flex-col justify-between rounded-3xl bg-dark p-8 sm:p-10 text-paper shadow-xl border border-paper/10 relative overflow-hidden">
                <div
                  className="glow-orb"
                  style={{
                    width: 200,
                    height: 200,
                    top: -50,
                    right: -50,
                    background: "#89BC30",
                  }}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-green-soft">
                      Outsourced Accounting and Bookkeeping · Technical SEO + AI SEO · Australia and Canada
                    </span>
                  </div>

                  {/* Case Study Image */}
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

                  {/* Impact Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-6 border-t border-paper/10 pt-5">
                    <div>
                      <p className="tabular font-display text-[1.8rem] font-extrabold text-green-soft">
                        Under 5
                      </p>
                      <p className="mt-1 font-body text-[0.8rem] text-paper/55">
                        Months to first AI citation
                      </p>
                    </div>
                    <div>
                      <p className="tabular font-display text-[1.8rem] font-extrabold text-green-soft">
                        ~25%
                      </p>
                      <p className="mt-1 font-body text-[0.8rem] text-paper/55">
                        Increase in inbound enquiries after AI visibility
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#book"
                  className="mt-7 inline-flex items-center gap-2 font-body text-[0.9rem] font-medium text-green-soft hover:underline"
                >
                  See how AI visibility gets built ↗
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column Light Cards */}
          <div className="flex flex-col gap-8">
            {/* Light Card 1 */}
            <Reveal delay={0.15}>
              <div className="tilt-card block rounded-3xl border border-dark/10 bg-paper p-7 shadow-xs hover:border-green/50">
                <span className="eyebrow text-green-deep">
                  Home and Housing E-commerce · Collection Page SEO · US and Australia
                </span>

                <div className="mt-4 max-w-[420px] overflow-hidden rounded-xl border border-dark/10 bg-paper-deep/60 shadow-xs">
                  <img
                    src="/case-studies/shopify-revenue.png"
                    alt="Home and housing ecommerce growth"
                    className="w-full max-h-[145px] sm:max-h-[165px] object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <p className="mt-4 font-body text-[0.92rem] leading-relaxed text-dark/70">
                  A US-based home and housing products brand had collection pages that had been live for years and were contributing almost nothing to organic traffic. Faceted navigation was creating duplicate URLs without canonical handling. Keyword cannibalization was suppressing every collection page.
                </p>

                <div className="mt-4">
                  <p className="eyebrow text-green-deep text-[0.75rem]">What we fixed:</p>
                  <ul className="mt-2 space-y-1 font-body text-[0.82rem] leading-relaxed text-dark/65 list-disc list-inside">
                    <li>Collection page content rebuilt around commercial buyer intent</li>
                    <li>Canonical tags implemented across all filtered URL variants</li>
                    <li>Internal linking matrix from editorial content to collection pages</li>
                    <li>Full cannibalization audit with page consolidation and redirects</li>
                    <li>Breadcrumb and Product Collection schema added</li>
                  </ul>
                </div>

                <p className="mt-5 border-t border-dark/10 pt-3.5 font-body text-[0.88rem] leading-relaxed text-green-deep">
                  <strong>Result:</strong> 18% year-on-year revenue growth. Sessions trending from 28,000 to 57,000 per month in twelve months. ↗
                </p>
              </div>
            </Reveal>

            {/* Light Card 2 */}
            <Reveal delay={0.25}>
              <div className="tilt-card block rounded-3xl border border-dark/10 bg-paper p-7 shadow-xs hover:border-green/50">
                <span className="eyebrow text-green-deep">
                  On-demand Home Healthcare · Technical SEO + AI SEO + Google Ads · Dubai, UAE
                </span>

                <div className="mt-4 max-w-[420px] overflow-hidden rounded-xl border border-dark/10 bg-paper-deep/60 shadow-xs">
                  <img
                    src="/case-studies/healthcare-dubai.png"
                    alt="On-demand home healthcare AI SEO case study in Dubai"
                    className="w-full max-h-[145px] sm:max-h-[165px] object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <p className="mt-4 font-body text-[0.92rem] leading-relaxed text-dark/70">
                  An on-demand home healthcare service in Dubai was sitting at an average search position of 13.1 across its highest-value queries. 726,000 impressions in six months but a 0.5% CTR because it was ranking page two on every term that mattered.
                </p>

                <div className="mt-4">
                  <p className="eyebrow text-green-deep text-[0.75rem]">What we fixed:</p>
                  <ul className="mt-2 space-y-1 font-body text-[0.82rem] leading-relaxed text-dark/65 list-disc list-inside">
                    <li>MedicalBusiness, Physician and LocalBusiness schema implemented</li>
                    <li>DHA licensing and doctor credentials structured and citable within page content</li>
                    <li>Answer-first content built around the exact query structures used in Google AI Overviews</li>
                    <li>Technical crawl issues resolved and Core Web Vitals improved for mobile-first Dubai audience</li>
                    <li>Google Ads running in parallel to capture immediate demand while organic authority built</li>
                  </ul>
                </div>

                <p className="mt-5 border-t border-dark/10 pt-3.5 font-body text-[0.88rem] leading-relaxed text-green-deep">
                  <strong>Result:</strong> First recommendation in Google AI Overview for the category&apos;s highest-value query. 726,000 impressions in six months with an unbroken upward trajectory. ↗
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
