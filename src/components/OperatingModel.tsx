import { Handshake, UserCheck, LineChart, Eye } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: Handshake,
    title: "One definition of a good lead. Before anyone starts spending.",
    body: "Marketing and sales agree on what a qualified lead looks like before the work starts. No debating the scorecard after the fact.",
  },
  {
    icon: UserCheck,
    title: "The person who shaped the strategy stays in the room.",
    body: "No polished sales call followed by a mystery hand-off. Senior people stay close enough to explain the work, defend the trade-offs and make the next decision with you.",
  },
  {
    icon: LineChart,
    title: "Every test leaves a paper trail.",
    body: "We log the hypothesis, the result and the next action. Wins are useful. Failed tests are useful too, especially when they stop you repeating the same bad assumption next quarter.",
  },
  {
    icon: Eye,
    title: "The source data stays yours.",
    body: "Your accounts, your analytics, your CRM. The reporting should make the truth easier to see, not lock it inside somebody else's slide deck.",
  },
];

export default function OperatingModel() {
  return (
    <section id="method" className="relative bg-dark py-24 text-paper lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="glow-orb"
          style={{ width: 300, height: 300, bottom: -100, left: "40%", background: "var(--green)" }}
        />
      </div>
      <div className="relative mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24 lg:h-[70vh] lg:flex lg:flex-col lg:justify-center">
            <Reveal>
              <p className="eyebrow text-green-soft text-center lg:text-left">Why not just hire in-house</p>
              <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.18] lg:text-[2.5rem] lg:font-extrabold text-center lg:text-left">
                <span className="block">Because</span>
                <span className="block text-green-soft">&ldquo;Data-driven&rdquo;</span>
                <span className="block">means nothing</span>
                <span className="block">if nobody can explain</span>
                <span className="block">the next decision.</span>
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col">
            <Reveal delay={0.06}>
              <p className="mb-10 font-body text-[1rem] leading-relaxed text-paper/70">
                You have heard the usual lines before. Strategic. Transparent. Results-focused. Often followed by a monthly report that tells you everything except what happened to the budget. Here is what working properly looks like.
              </p>
            </Reveal>

            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={0.06 * (i + 1)}>
                  <div className="grid grid-cols-1 gap-4 border-t border-paper/12 py-8 sm:grid-cols-[56px_1fr] items-start">
                    <div className="text-green-soft pt-0.5">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-body text-[1.1rem] font-semibold leading-snug text-paper">
                        {p.title}
                      </p>
                      <p className="mt-3 max-w-[480px] font-body text-[0.9rem] leading-relaxed text-paper/60">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <div className="border-t border-paper/12" />
          </div>
        </div>
      </div>
    </section>
  );
}
