"use client";

import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowUpRight, CheckCircle, Mail, Send } from "lucide-react";

export function FinalCTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    whatToGrow: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="book" className="relative overflow-hidden bg-dark py-20 text-paper lg:py-28">
      {/* Glow orb */}
      <div
        className="glow-orb slow"
        style={{
          width: 480,
          height: 480,
          top: "10%",
          left: "50%",
          marginLeft: "-240px",
          background: "#89BC30",
          opacity: 0.18,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[850px] px-6 lg:px-10">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow text-green-soft">Tell us about your growth challenge</p>
            <h2 className="mt-4 font-display text-[2.1rem] font-bold leading-[1.15] lg:text-[2.8rem]">
              Bring us the problem you are tired of pretending will sort itself out.
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] font-body text-[0.95rem] leading-relaxed text-paper/70">
              Fill in the form and a senior partner will come back within one business day to understand your brief. If it looks like a fit, we will set up a proper working conversation. No pitch deck. No obligation.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-3xl border border-paper/10 bg-dark-soft/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                <div className="h-16 w-16 rounded-full bg-green/20 border border-green text-green-soft flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-soft" />
                </div>
                <h3 className="font-display text-2xl font-bold text-paper">
                  Thank you, {formState.name || "there"}!
                </h3>
                <p className="mt-2 max-w-[420px] font-body text-paper/70 text-[0.95rem]">
                  We have received your growth brief. A senior member of the Vereen Digital team will review your details and respond to <span className="text-green-soft font-semibold">{formState.email}</span> within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", website: "", whatToGrow: "" });
                  }}
                  className="mt-6 font-body text-sm font-semibold text-green-soft hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="eyebrow text-paper/50">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper placeholder-paper/25 outline-none transition-colors focus:border-green focus:bg-paper/10"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="eyebrow text-paper/50">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper placeholder-paper/25 outline-none transition-colors focus:border-green focus:bg-paper/10"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="website" className="eyebrow text-paper/50">
                      Business / Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      value={formState.website}
                      onChange={(e) =>
                        setFormState({ ...formState, website: e.target.value })
                      }
                      className="w-full rounded-xl border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper placeholder-paper/25 outline-none transition-colors focus:border-green focus:bg-paper/10"
                      placeholder="https://company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="whatToGrow" className="eyebrow text-paper/50">
                    What do you want to grow? *
                  </label>
                  <textarea
                    id="whatToGrow"
                    rows={4}
                    required
                    value={formState.whatToGrow}
                    onChange={(e) =>
                      setFormState({ ...formState, whatToGrow: e.target.value })
                    }
                    className="w-full rounded-xl border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper placeholder-paper/25 outline-none transition-colors focus:border-green focus:bg-paper/10 resize-y"
                    placeholder="Tell us about what you want to grow, your AI SEO or pipeline challenges, and your commercial target..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="focus-ring mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-green px-6 py-4 font-body text-[1.0rem] font-bold text-white cursor-pointer transition-all duration-200 hover:bg-green-deep hover:shadow-lg active:scale-98 disabled:opacity-70"
                >
                  {loading ? (
                    <span>Sending Brief...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowUpRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center">
            <p className="font-body text-[0.85rem] text-paper/60 flex items-center gap-2">
              <Mail className="h-4 w-4 text-green-soft" />
              <span>Direct inquiries: <a href="mailto:hello@vereendigital.com" className="text-green-soft underline hover:text-green">hello@vereendigital.com</a></span>
            </p>
            <p className="font-body text-[0.78rem] text-paper/40">
              We respect your privacy and reply within one business day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
