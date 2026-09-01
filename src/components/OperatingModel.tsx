import React from "react";
import { Reveal } from "./Reveal";

interface ModelPillar {
  tag: string;
  title: string;
  description: string;
}

const pillars: ModelPillar[] = [
  {
    tag: "Governance",
    title: "One definition of a good lead. Before anyone starts spending.",
    description:
      "Marketing and sales agree on what a qualified lead looks like before the work starts. No debating the scorecard after the fact.",
  },
  {
    tag: "Access",
    title: "The person who shaped the strategy stays in the room.",
    description:
      "No polished sales call followed by a mystery hand-off. Senior people stay close enough to explain the work, defend the trade-offs and make the next decision with you.",
  },
  {
    tag: "Cadence",
    title: "Every test leaves a paper trail.",
    description:
      "We log the hypothesis, the result and the next action. Wins are useful. Failed tests are useful too, especially when they stop you repeating the same bad assumption next quarter.",
  },
  {
    tag: "Transparency",
    title: "The source data stays yours.",
    description:
      "Your accounts, your analytics, your CRM. The reporting should make the truth easier to see, not lock it inside somebody else's slide deck.",
  },
];

export function OperatingModel() {
  return (
    <section id="method" className="relative bg-dark py-24 text-paper lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{
          width: 380,
          height: 380,
          bottom: -100,
          left: "40%",
          background: "#89BC30",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          {/* Sticky left */}
          <div className="lg:sticky lg:top-24 lg:min-h-[50vh] lg:flex lg:flex-col lg:justify-center">
            <Reveal>
              <p className="eyebrow text-green-soft">Why not just hire in-house</p>
              <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.15] text-paper lg:text-[2.6rem]">
                Because &quot;data-driven&quot; means nothing if nobody can explain the next decision.
              </h2>
            </Reveal>
          </div>

          {/* Right Column List */}
          <div className="flex flex-col">
            <Reveal delay={0.1}>
              <p className="mb-10 font-body text-[1.05rem] leading-relaxed text-paper/75">
                You have heard the usual lines before. Strategic. Transparent. Results-focused. Often followed by a monthly report that tells you everything except what happened to the budget. Here is what working properly looks like.
              </p>
            </Reveal>

            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.tag} delay={0.1 + idx * 0.08}>
                <div className="grid grid-cols-1 gap-4 border-t border-paper/12 py-8 sm:grid-cols-[130px_1fr]">
                  <span className="eyebrow text-green-soft pt-1">{pillar.tag}</span>
                  <div>
                    <p className="font-display text-[1.15rem] font-semibold leading-snug text-paper">
                      {pillar.title}
                    </p>
                    <p className="mt-3 max-w-[500px] font-body text-[0.92rem] leading-relaxed text-paper/65">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-paper/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
