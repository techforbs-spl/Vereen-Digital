import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: <IconRadar />,
    name: "AI SEO",
    problem: "Your buyers are asking questions. Make sure you are part of the answer.",
    deliverable: "Search has changed. Buyers research across Google, ChatGPT, Perplexity, Gemini and Google AI Overviews. We help your business become easier to discover, easier to understand and easier to trust wherever that research starts. Technical foundations, source-worthy content, entity signals and visibility tracking across every AI platform that matters.",
    cta: "Explore AI SEO",
  },
  {
    icon: <IconTarget />,
    name: "Google Ads",
    problem: "Google Ads should create customers. Not a very expensive habit.",
    deliverable: "If cost per lead keeps rising or branded traffic eats the budget, you need tighter intent mapping, better tracking and weekly decisions based on what is actually making money. Not another round of random optimisations.",
    cta: "Explore Google Ads",
  },
  {
    icon: <IconLayers />,
    name: "Meta Ads",
    problem: "Stop paying for attention your sales team cannot use.",
    deliverable: "Meta Ads can build demand before someone knows exactly what they are searching for. We combine clear ICP targeting, creative testing and real sales feedback so the platform learns what a valuable prospect looks like, not just what gets a quick click.",
    cta: "Explore Meta Ads",
  },
  {
    icon: <IconFrame />,
    name: "ChatGPT Ads",
    problem: "Your next customer may ask ChatGPT before they ask Google.",
    deliverable: "Buyers use AI to research problems and shortlist options before they ever fill out a form. We help you build a practical plan for that shift, with clear measurement and a conversion path behind it. No science-fiction promises. Just a clear way to test where AI-led discovery creates a real commercial advantage.",
    cta: "Explore ChatGPT Ads",
  },
];

export default function ServicePathways() {
  return (
    <section id="services" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="text-center max-w-[850px] mx-auto">
          <Reveal>
            <p className="eyebrow text-green-deep text-center">Pick the problem. The channel comes second.</p>
            <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.15] text-dark lg:text-[2.7rem] lg:font-extrabold text-center">
              One visibility engine. More ways to turn it into customers.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-6 max-w-[660px] mx-auto text-center font-body text-[1rem] leading-relaxed text-dark/75 space-y-3">
              <p>
                Buyers begin with questions.<br />
                The question might land in Google, an AI Overview,<br />
                ChatGPT, Perplexity, Gemini or Copilot.<br />
                Your visibility needs to meet them there.
              </p>
              <p>
                We will tell you if a channel is not the answer. It is cheaper than pretending otherwise.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={0.06 * i}>
              <a
                href="#book"
                className="focus-ring group flex h-full flex-col rounded-3xl border border-dark/10 bg-white/40 p-7 transition-all hover:-translate-y-1.5 hover:bg-white/70 hover:shadow-[0_25px_50px_-25px_rgba(43,31,46,0.25)]"
              >
                <div className="flex items-center text-green-deep">
                  {s.icon}
                </div>
                <h3 className="mt-6 font-body text-[1.2rem] font-semibold text-dark">{s.name}</h3>
                <p className="mt-3 font-body text-[0.87rem] leading-relaxed text-dark/65 min-h-[50px]">{s.problem}</p>
                <p className="mt-5 border-t border-dark/10 pt-4 font-body text-[0.8rem] leading-relaxed text-dark/60 flex-1">
                  {s.deliverable}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-body text-[0.85rem] font-medium text-green-deep transition-all group-hover:translate-x-1">
                  {s.cta} ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconRadar() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="1.4" fill="currentColor" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M13 3.5v6M13 16.5v6M22.5 13h-6M9.5 13h-6" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="13" cy="13" r="2" fill="currentColor" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <path d="M13 2 23 8l-10 6L3 8l10-6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M3 13l10 6 10-6M3 18l10 6 10-6" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}
function IconFrame() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <rect x="2.5" y="4.5" width="21" height="17" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 9h21" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
