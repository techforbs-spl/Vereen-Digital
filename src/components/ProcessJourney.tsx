import React from "react";
import { Reveal } from "./Reveal";

interface StepItem {
  num: string;
  timeline: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    num: "01",
    timeline: "Weeks 1–2",
    title: "Discovery and Audit",
    description:
      "We look at your past campaigns, current reporting and account data before touching anything. Understanding the real problem comes before the plan.",
  },
  {
    num: "02",
    timeline: "Week 3",
    title: "Plan and Baseline",
    description:
      "A written plan with agreed definitions, target outcomes and a realistic first-phase scope. No fantasy forecasts.",
  },
  {
    num: "03",
    timeline: "Weeks 4–6",
    title: "Build and Launch",
    description:
      "Campaigns and content go live in stages. When something moves, we know exactly why it moved.",
  },
  {
    num: "04",
    timeline: "Ongoing",
    title: "Optimise",
    description:
      "We test, cut what is not earning its place and build on what is. Every decision is logged.",
  },
  {
    num: "05",
    timeline: "Quarterly",
    title: "Review and Re-plan",
    description:
      "We step back, look at the commercial outcome and decide what scales, what stops and what needs a different approach.",
  },
];

export function ProcessJourney() {
  return (
    <section className="bg-paper-deep/60 py-24 lg:py-32 border-t border-dark/10">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">What happens after you reach out</p>
          <h2 className="mt-5 max-w-[620px] font-display text-[2rem] font-bold leading-[1.15] text-dark lg:text-[2.5rem]">
            No black box. No &quot;leave it with us&quot; and hope for the best.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-5">
          {steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.07}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-dark/10 bg-paper p-6 shadow-sm transition-all duration-300 hover:border-green/50 hover:shadow-md">
                <div>
                  <span className="tabular flex h-9 w-9 items-center justify-center rounded-full bg-green text-[0.85rem] font-bold text-white shadow-sm">
                    {step.num}
                  </span>
                  <div className="mt-6">
                    <p className="font-body text-[0.74rem] uppercase font-bold tracking-wider text-dark/45">
                      {step.timeline}
                    </p>
                    <p className="mt-2 font-display text-[1.1rem] font-bold text-dark">
                      {step.title}
                    </p>
                    <p className="mt-3 font-body text-[0.84rem] leading-relaxed text-dark/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
