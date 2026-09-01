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
                <div className="glow-orb" style={{ width: 200, height: 200, top: -50, right: -50, background: "#89BC30" }} />
                
                <div>
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-green-soft">
                      Outsourced Accounting & Bookkeeping · Technical SEO + AI SEO · Australia & Canada
                    </span>
                  </div>

                  <p className="mt-6 font-body text-[0.95rem] leading-relaxed text-paper/80">
                    An outsourced accounting firm serving Australian and Canadian markets came with a site search engines could barely crawl. Pages were not indexed. Internal linking did not exist. And the business was completely absent from every AI search tool buyers were using to find providers.
                  </p>

                  <div className="mt-6">
                    <p className="eyebrow text-green-soft text-[0.76rem]">What we fixed:</p>
                    <ul className="mt-3.5 space-y-2 font-body text-[0.86rem] leading-relaxed text-paper/70">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-soft shrink-0 mt-0.5" />
                        <span>Crawlability and indexation gaps across all service pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-soft shrink-0 mt-0.5" />
                        <span>Internal linking architecture connecting service, location and content pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-soft shrink-0 mt-0.5" />
                        <span>Organisation and Service schema so AI systems trust the business entity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-soft shrink-0 mt-0.5" />
                        <span>Comparison content targeting queries typed into ChatGPT & Perplexity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-soft shrink-0 mt-0.5" />
                        <span>Regional credibility signals for Australian and Canadian markets</span>
                      </li>
                    </ul>
                  </div>

                  {/* Impact Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-6 border-t border-paper/10 pt-6">
                    <div>
                      <p className="tabular font-display text-[1.9rem] font-bold text-green-soft leading-none">
                        Under 5
                      </p>
                      <p className="mt-1.5 font-body text-[0.82rem] text-paper/60">
                        Months to first AI citation
                      </p>
                    </div>
                    <div>
                      <p className="tabular font-display text-[1.9rem] font-bold text-green-soft leading-none">
                        ~25%
                      </p>
                      <p className="mt-1.5 font-body text-[0.82rem] text-paper/60">
                        Increase in inbound enquiries
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#book"
                  className="mt-8 inline-flex items-center gap-2 font-body text-[0.92rem] font-semibold text-green-soft hover:underline"
                >
                  See how AI visibility gets built
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column Light Cards */}
          <div className="flex flex-col gap-8">
            {/* Light Card 1 */}
            <Reveal delay={0.15}>
              <div className="tilt-card block rounded-3xl border border-dark/10 bg-paper p-8 shadow-sm hover:border-green/50">
                <span className="eyebrow text-green-deep">
                  Home and Housing E-commerce · Collection Page SEO · US and Australia
                </span>
                <p className="mt-4 font-body text-[0.93rem] leading-relaxed text-dark/75">
                  A US-based home and housing products brand had collection pages that had been live for years and were contributing almost nothing to organic traffic. Faceted navigation was creating duplicate URLs without canonical handling. Keyword cannibalization was suppressing every collection page.
                </p>

                <div className="mt-5">
                  <p className="eyebrow text-green-deep text-[0.76rem]">What we fixed:</p>
                  <ul className="mt-2.5 space-y-1.5 font-body text-[0.85rem] leading-relaxed text-dark/70">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                      <span>Collection page content rebuilt around commercial buyer intent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                      <span>Canonical tags implemented across all filtered URL variants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                      <span>Internal linking matrix from editorial content to commercial collections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                      <span>Full cannibalization audit with page consolidation and redirects</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 border-t border-dark/10 pt-4">
                  <p className="font-body text-[0.9rem] leading-relaxed text-green-deep font-semibold">
                    Result: 18% year-on-year revenue growth. Sessions trending from 28,000 to 57,000 per month in twelve months. ↗
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Light Card 2 */}
            <Reveal delay={0.25}>
              <div className="tilt-card block rounded-3xl border border-dark/10 bg-paper p-8 shadow-sm hover:border-green/50">
                <span className="eyebrow text-green-deep">
                  On-demand Home Healthcare · Technical SEO + AI SEO + Google Ads · Dubai, UAE
                </span>
                <p className="mt-4 font-body text-[0.93rem] leading-relaxed text-dark/75">
                  An on-demand home healthcare service in Dubai was sitting at an average search position of 13.1 across its highest-value queries. 726,000 impressions in six months but a 0.5% CTR because it was ranking page two. The site had no medical schema or structured credential signals.
                </p>

                <div className="mt-5">
                  <p className="eyebrow text-green-deep text-[0.76rem]">What we fixed:</p>
                  <ul className="mt-2.5 space-y-1.5 font-body text-[0.85rem] leading-relaxed text-dark/70">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                      <span>MedicalBusiness, Physician and LocalBusiness schema implemented</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                      <span>DHA licensing and doctor credentials structured and citable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                      <span>Answer-first content built around exact queries in Google AI Overviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                      <span>Google Ads running in parallel to capture immediate demand while organic authority built</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 border-t border-dark/10 pt-4">
                  <p className="font-body text-[0.9rem] leading-relaxed text-green-deep font-semibold">
                    Result: First recommendation in Google AI Overview for highest-value query. 726k impressions with an unbroken upward trajectory. ↗
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
