import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "Honestly did not think something like this was possible for a business our size. Started getting leads from ChatGPT searches within a few months. People finding us that we never would have reached through normal marketing.",
    role: "Founder",
    industry: "Outsourced Accounting",
    location: "Australia",
  },
  {
    quote:
      "Tried a couple of agencies before this. Always the same monthly report, always the same excuses. These guys actually found the real issue, something with how the collection pages were set up that search engines basically could not read. Fixed it properly and the traffic started moving. Revenue went up 18 percent over the year, which honestly was not what we expected from just sorting out the technical side.",
    role: "Director",
    industry: "Home and Housing Products",
    location: "United States",
  },
  {
    quote:
      "First agency that actually explained what the problem was instead of just promising rankings. We are now the first result when someone in Dubai searches for a doctor on call. That result alone made the whole thing worth it.",
    role: "Operations Director",
    industry: "Healthcare Services",
    location: "Dubai, UAE",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-paper lg:py-32">
      <div
        className="glow-orb slow reverse pointer-events-none"
        style={{ width: 340, height: 340, top: -60, right: "10%", background: "var(--green-soft)" }}
        aria-hidden="true"
      />
      <div
        className="glow-orb slow pointer-events-none"
        style={{ width: 280, height: 280, bottom: -40, left: "5%", background: "var(--green)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="text-center max-w-[750px] mx-auto">
          <Reveal>
            <p className="eyebrow text-green-soft text-center">In their words</p>
            <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.15] text-paper lg:text-[2.5rem] lg:font-extrabold text-center">
              What founders and leaders say when growth starts moving.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.role + r.location} delay={0.08 * i}>
              <div className="group flex h-full flex-col justify-between rounded-3xl border border-paper/12 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-paper/25 hover:bg-white/[0.05] hover:-translate-y-1">
                <div>
                  <div className="text-green-soft mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Quote className="h-7 w-7" />
                  </div>
                  <p className="font-body text-[0.94rem] leading-relaxed text-paper/80">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 border-t border-paper/10 pt-6">
                  <p className="font-display text-[1rem] font-bold text-paper">
                    {r.role}
                  </p>
                  <p className="mt-1 font-body text-[0.8rem] text-green-soft font-medium">
                    {r.industry} · {r.location}
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
