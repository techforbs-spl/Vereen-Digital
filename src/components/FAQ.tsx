"use client";

import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kind of businesses do you work best with?",
    answer:
      "We work best with businesses that have a real growth target, a product or service people already buy and the willingness to look honestly at the numbers. If we are not the right fit, we will tell you on the first conversation. It saves everyone a lot of time.",
  },
  {
    question: "What is the minimum engagement?",
    answer:
      "For AI SEO, we work on a minimum 4-month engagement. That is the realistic window to fix the technical foundation, build the content and entity signals, and see meaningful citation movement across AI systems and search. For Google Ads and Meta Ads, a minimum 3-month term. We will tell you the right timeframe on the first call, before you commit to anything.",
  },
  {
    question: "Do you guarantee rankings or results?",
    answer:
      "No. Anyone promising a specific result before understanding your account, market, offer and sales process is guessing with confidence. We commit to a clear plan, transparent measurement, proper testing and an honest view of what the numbers say.",
  },
  {
    question: "Who owns the accounts and data?",
    answer:
      "You do. Advertising accounts, analytics and CRM access stay under your ownership from day one. You are hiring expertise, not renting access to your own growth engine.",
  },
  {
    question: "How much time will you need from our team?",
    answer:
      "Month one is typically 3 to 4 hours a week while we work through onboarding, access and the initial brief. From month two onward, it drops to 1 to 2 hours a week for approvals, reviews and feedback. We will not ask for time we do not have a clear reason for using.",
  },
  {
    question: "What if we are already working with another agency or running our own ads?",
    answer:
      "That is a common starting point. We can review what is already running and give you an honest read on what is working, what is not and where the biggest opportunity sits. There is no obligation to change anything until it makes sense to.",
  },
  {
    question: "Can you work alongside our in-house marketer or sales team?",
    answer:
      "Yes. Most of our engagements involve an in-house team. We run specialist channel work while your team keeps ownership of brand, customers and internal priorities. That combination usually produces the best results.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[860px] px-6 lg:px-10">
        <Reveal className="text-center flex flex-col items-center">
          <p className="eyebrow text-green-deep">Before you reach out</p>
          <h2 className="mt-5 mx-auto max-w-[620px] font-display text-[2rem] font-bold leading-[1.15] text-dark lg:text-[2.5rem]">
            Straight answers are more useful than a big sales pitch.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 0.04}>
                <div
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-green/50 bg-white shadow-sm"
                      : "border-dark/10 bg-white/50 hover:border-dark/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="focus-ring flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[1.05rem] font-bold text-dark">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 rounded-full border p-1 transition-all duration-300 ${
                        isOpen
                          ? "border-green-deep bg-green-light text-green-deep rotate-180"
                          : "border-dark/20 text-dark/60"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 font-body text-[0.92rem] leading-relaxed text-dark/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 font-body text-[0.9rem] text-dark/60 text-center">
            Something else on your mind?{" "}
            <a href="#book" className="font-semibold text-green-deep underline hover:text-green-dark">
              Ask it when you reach out
            </a>{" "}
            — there is no pitch deck waiting on the other side.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
