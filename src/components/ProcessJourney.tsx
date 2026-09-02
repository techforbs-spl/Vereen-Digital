import Reveal from "./Reveal";

const STAGES = [
  {
    n: "01",
    when: "Weeks 1–2",
    title: "Discovery and Audit",
    body: "We look at your past campaigns and reporting before touching anything.",
  },
  {
    n: "02",
    when: "Week 3",
    title: "Plan and Baseline",
    body: "A written plan with agreed outcomes and a realistic first-phase scope.",
  },
  {
    n: "03",
    when: "Weeks 4–6",
    title: "Build and Launch",
    body: "Campaigns and content go live in stages. When something moves, we know why.",
  },
  {
    n: "04",
    when: "Ongoing",
    title: "Optimise",
    body: "We test, cut what is not working and build on what is. Every decision is logged.",
  },
  {
    n: "05",
    when: "Quarterly",
    title: "Review and Re-plan",
    body: "We step back, look at outcomes and decide what scales, what stops, what changes.",
  },
];

export default function ProcessJourney() {
  return (
    <section className="relative overflow-hidden bg-paper-deep/50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="text-center max-w-[780px] mx-auto">
          <Reveal>
            <p className="eyebrow text-green-deep text-center">What happens after you reach out</p>
            <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.15] text-dark lg:text-[2.5rem] lg:font-extrabold text-center">
              No black box. No "leave it with us" and hope for the best.
            </h2>
          </Reveal>
        </div>

        {/* Horizontal Visual Roadmap (Desktop) */}
        <div className="relative mt-20 hidden lg:block">
          {/* Continuous connecting timeline track */}
          <div
            className="absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-dark/15 pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-full w-full bg-gradient-to-r from-green via-green-soft to-green-deep opacity-60" />
          </div>

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {STAGES.map((s, i) => (
              <Reveal key={s.n} delay={0.08 * i}>
                <div className="group flex flex-col items-center text-center">
                  {/* Milestone Node */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-green/40 bg-paper shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-green group-hover:shadow-lg">
                    <span className="font-display text-[1.1rem] font-extrabold text-dark tabular">
                      {s.n}
                    </span>
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green ring-4 ring-paper" />
                  </div>

                  {/* Timing Badge */}
                  <span className="mt-6 inline-flex items-center rounded-full bg-green/10 px-3 py-1 font-body text-[0.72rem] font-semibold uppercase tracking-wider text-green-deep">
                    {s.when}
                  </span>

                  {/* Stage Title */}
                  <h3 className="mt-3 font-display text-[1.1rem] font-bold text-dark leading-snug">
                    {s.title}
                  </h3>

                  {/* Short Copy */}
                  <p className="mt-2.5 font-body text-[0.85rem] leading-relaxed text-dark/65">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Vertical Connected Roadmap (Mobile & Tablet) */}
        <div className="relative mt-14 space-y-8 pl-4 sm:pl-6 lg:hidden">
          {/* Vertical Connecting Line */}
          <div
            className="absolute top-4 bottom-4 left-[26px] sm:left-[27px] w-[2px] bg-gradient-to-b from-green via-green-soft to-green-deep opacity-40"
            aria-hidden="true"
          />

          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={0.06 * i}>
              <div className="relative flex items-start gap-5">
                {/* Milestone Node */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-green/40 bg-paper shadow-sm">
                  <span className="font-display text-[0.95rem] font-extrabold text-dark tabular">
                    {s.n}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl border border-dark/10 bg-paper p-5 shadow-xs">
                  <span className="inline-block rounded-full bg-green/10 px-2.5 py-0.5 font-body text-[0.7rem] font-semibold uppercase tracking-wider text-green-deep">
                    {s.when}
                  </span>
                  <h3 className="mt-2 font-display text-[1.05rem] font-bold text-dark">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 font-body text-[0.85rem] leading-relaxed text-dark/65">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
