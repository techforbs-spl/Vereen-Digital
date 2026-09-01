"use client";

import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

interface MetricItem {
  value: string;
  label: string;
  subtext: string;
  fillPercentage: number;
}

const metrics: MetricItem[] = [
  {
    value: "~25%",
    label: "More inbound enquiries",
    subtext:
      "AI SEO clients, after citation visibility established in ChatGPT, Gemini and Google AI Overviews",
    fillPercentage: 85,
  },
  {
    value: "18%",
    label: "Year-on-year revenue growth",
    subtext:
      "Home and housing e-commerce brand, 12-month organic SEO engagement, US market",
    fillPercentage: 72,
  },
  {
    value: "7+",
    label: "Businesses now cited in AI search",
    subtext:
      "Appearing in ChatGPT, Gemini, Perplexity and Google AI Overviews for high-intent queries in their category",
    fillPercentage: 90,
  },
  {
    value: "Under 5 mos",
    label: "To First AI Citation",
    subtext:
      "From technical overhaul to first AI citation. Outsourced professional services brand, Australia and Canada",
    fillPercentage: 78,
  },
];

export function ResultsSnapshot() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">The numbers that actually matter</p>
          <h2 className="mt-5 max-w-[600px] font-display text-[2rem] font-bold leading-[1.15] text-dark lg:text-[2.5rem]">
            You cannot pay salaries with impressions.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col justify-between h-full group p-5 rounded-2xl transition-all duration-300 hover:bg-paper-deep/50">
                <div>
                  <p className="tabular font-display text-[2.4rem] font-extrabold leading-none text-dark group-hover:text-green-deep transition-colors">
                    {item.value}
                  </p>
                  
                  {/* Progress Fill Bar */}
                  <div className="fill-bar mt-5">
                    <div
                      className="fill-bar__inner"
                      style={{
                        width: animated ? `${item.fillPercentage}%` : "0%",
                      }}
                    />
                  </div>

                  <p className="mt-4 font-body text-[0.98rem] font-semibold leading-snug text-dark/85">
                    {item.label}
                  </p>
                </div>

                <p className="mt-3 font-body text-[0.8rem] leading-relaxed text-dark/55">
                  {item.subtext}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-14 max-w-[600px] font-body text-[0.88rem] leading-relaxed text-dark/60 border-l-2 border-green pl-4">
            Every number has a context. Every context has a method. We will show you both before you sign anything.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
