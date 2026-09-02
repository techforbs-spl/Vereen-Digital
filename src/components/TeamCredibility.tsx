import Reveal from "./Reveal";

const TEAM = [
  { name: "Dana Okafor", role: "Head of Search & AI Visibility", note: "Led SEO for a Series C fintech through its shift to AI-answer search.", accent: "var(--green)" },
  { name: "Mateo Reyes", role: "Head of Paid Media", note: "Built the paid demand engine at two logistics scale-ups since 2019.", accent: "var(--green-soft)" },
  { name: "Selin Aydın", role: "Director of Web Systems", note: "Ships conversion rebuilds; previously in-house product design.", accent: "var(--dark)" },
];

export default function TeamCredibility() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">Who's actually on the account</p>
          <h2 className="mt-5 max-w-[560px] font-display text-[2rem] font-semibold leading-[1.15] text-dark lg:text-[2.5rem]">
            Senior specialists, not an anonymous production line.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {TEAM.map((p, i) => (
            <Reveal key={p.name} delay={0.07 * i}>
              <div>
                <Portrait accent={p.accent} seed={i} />
                <p className="mt-6 font-body text-[1.15rem] font-semibold text-dark">{p.name}</p>
                <p className="mt-1 font-body text-[0.85rem] text-green-deep">{p.role}</p>
                <p className="mt-3 font-body text-[0.88rem] leading-relaxed text-dark/60">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portrait({ accent, seed }: { accent: string; seed: number }) {
  const shift = seed * 12;
  return (
    <svg viewBox="0 0 200 220" className="aspect-[10/11] w-full rounded-[28px]" aria-hidden="true">
      <rect width="200" height="220" rx="28" fill="var(--paper-deep)" />
      <circle cx={100 + shift * 0.2} cy="92" r="42" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.85" />
      <path
        d={`M46 200 C 46 ${156 - shift}, 74 138, 100 138 C 126 138, 154 ${156 - shift}, 154 200`}
        fill="none"
        stroke={accent}
        strokeWidth="1.4"
      />
      <circle cx={82 - shift * 0.3} cy="86" r="2" fill={accent} />
      <circle cx={118 + shift * 0.3} cy="86" r="2" fill={accent} />
      <path d="M87 108 Q100 115 113 108" stroke={accent} strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
