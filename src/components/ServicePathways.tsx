import React from "react";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Sparkles, Target, Layers, Bot } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  badge: "Primary" | "Secondary";
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "ai-seo",
    title: "AI SEO",
    badge: "Primary",
    tagline: "Your buyers are asking questions. Make sure you are part of the answer.",
    description:
      "Search has changed. Buyers research across Google, ChatGPT, Perplexity, Gemini and Google AI Overviews. We help your business become easier to discover, easier to understand and easier to trust wherever that research starts. Technical foundations, source-worthy content, entity signals and visibility tracking across every AI platform that matters.",
    icon: <Sparkles className="h-6 w-6 text-green-deep" />,
  },
  {
    id: "google-ads",
    title: "Google Ads",
    badge: "Secondary",
    tagline: "Google Ads should create customers. Not a very expensive habit.",
    description:
      "If cost per lead keeps rising or branded traffic eats the budget, you need tighter intent mapping, better tracking and weekly decisions based on what is actually making money. Not another round of random optimisations.",
    icon: <Target className="h-6 w-6 text-green-deep" />,
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    badge: "Secondary",
    tagline: "Stop paying for attention your sales team cannot use.",
    description:
      "Meta Ads can build demand before someone knows exactly what they are searching for. We combine clear ICP targeting, creative testing and real sales feedback so the platform learns what a valuable prospect looks like, not just what gets a quick click.",
    icon: <Layers className="h-6 w-6 text-green-deep" />,
  },
  {
    id: "chatgpt-ads",
    title: "ChatGPT Ads",
    badge: "Secondary",
    tagline: "Your next customer may ask ChatGPT before they ask Google.",
    description:
      "Buyers use AI to research problems and shortlist options before they ever fill out a form. We help you build a practical plan for that shift, with clear measurement and a conversion path behind it. No science-fiction promises. Just a clear way to test where AI-led discovery creates a real commercial advantage.",
    icon: <Bot className="h-6 w-6 text-green-deep" />,
  },
];

export function ServicePathways() {
  return (
    <section id="services" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="max-w-[800px]">
          <Reveal>
            <p className="eyebrow text-green-deep">Pick the problem. The channel comes second.</p>
            <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.15] text-dark lg:text-[2.7rem]">
              One visibility engine. More ways to turn it into customers.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[620px] font-body text-[1rem] leading-relaxed text-dark/75">
              Buyers begin with questions. The question might land in Google, an AI Overview, ChatGPT, Perplexity, Gemini or Copilot. Your visibility needs to meet them there.
              <br /><br />
              We will tell you if a channel is not the answer. It is cheaper than pretending otherwise.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, idx) => (
            <Reveal key={svc.id} delay={idx * 0.08}>
              <a
                href="#book"
                className="focus-ring group flex h-full flex-col rounded-3xl border border-dark/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:border-green/50 hover:shadow-[0_20px_40px_-20px_rgba(137,188,48,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-green-light/60">
                    {svc.icon}
                  </div>
                  <span className={`eyebrow px-2.5 py-1 rounded-full ${
                    svc.badge === "Primary" 
                      ? "bg-green/15 text-green-deep font-bold" 
                      : "bg-dark/5 text-dark/50"
                  }`}>
                    {svc.badge}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[1.25rem] font-bold text-dark group-hover:text-green-deep transition-colors">
                  {svc.title}
                </h3>

                <p className="mt-3 font-body text-[0.88rem] font-medium leading-relaxed text-dark/75 min-h-[50px]">
                  {svc.tagline}
                </p>

                <p className="mt-5 border-t border-dark/10 pt-4 font-body text-[0.82rem] leading-relaxed text-dark/60 flex-1">
                  {svc.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 font-body text-[0.86rem] font-semibold text-green-deep transition-all group-hover:translate-x-1">
                  Explore {svc.title}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
