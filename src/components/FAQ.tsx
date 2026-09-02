"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  { q: "What kind of businesses do you work best with?", a: "We work best with businesses that have a real growth target, a product or service people already buy and the willingness to look honestly at the numbers. If we are not the right fit, we will tell you on the first conversation. It saves everyone a lot of time." },
  { q: "What is the minimum engagement?", a: "For AI SEO, we work on a minimum 4-month engagement. That is the realistic window to fix the technical foundation, build the content and entity signals, and see meaningful citation movement across AI systems and search. For Google Ads and Meta Ads, a minimum 3-month term. We will tell you the right timeframe on the first call, before you commit to anything." },
  { q: "Do you guarantee rankings or results?", a: "No. Anyone promising a specific result before understanding your account, market, offer and sales process is guessing with confidence. We commit to a clear plan, transparent measurement, proper testing and an honest view of what the numbers say." },
  { q: "Who owns the accounts and data?", a: "You do. Advertising accounts, analytics and CRM access stay under your ownership from day one. You are hiring expertise, not renting access to your own growth engine." },
  { q: "How much time will you need from our team?", a: "Month one is typically 3 to 4 hours a week while we work through onboarding, access and the initial brief. From month two onward, it drops to 1 to 2 hours a week for approvals, reviews and feedback. We will not ask for time we do not have a clear reason for using." },
  { q: "What if we are already working with another agency or running our own ads?", a: "That is a common starting point. We can review what is already running and give you an honest read on what is working, what is not and where the biggest opportunity sits. There is no obligation to change anything until it makes sense to." },
  { q: "Can you work alongside our in-house marketer or sales team?", a: "Yes. Most of our engagements involve an in-house team. We run specialist channel work while your team keeps ownership of brand, customers and internal priorities. That combination usually produces the best results." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[860px] px-6 lg:px-10">
        <Reveal className="text-center flex flex-col items-center">
          <p className="eyebrow text-green-deep text-center">Before you reach out</p>
          <h2 className="mt-5 mx-auto max-w-[620px] font-display text-[2rem] font-bold leading-[1.15] text-dark lg:text-[2.4rem] lg:font-extrabold text-center">
            Straight answers are more useful than a big sales pitch.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-colors ${open ? "border-green/30 bg-white/60" : "border-dark/10"}`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="focus-ring flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-body text-[1.02rem] font-semibold text-dark">{item.q}</span>
                  <span
                    className={`shrink-0 rounded-full border border-dark/20 p-1 text-dark transition-transform duration-300 ${open ? "rotate-45 border-green-deep text-green-deep" : ""}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300"
                  style={{ maxHeight: open ? "220px" : "0px" }}
                >
                  <p className="px-6 pb-6 font-body text-[0.92rem] leading-relaxed text-dark/65">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-10 font-body text-[0.88rem] text-dark/55 text-center sm:text-left">
            Something else on your mind?{" "}
            <a href="#book" className="underline decoration-dark/30 hover:text-green-deep">
              Ask it when you reach out
            </a>{" "}
            — there is no pitch deck waiting on the other side.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
