import Reveal from "./Reveal";

export default function CredibilityBar() {
  return (
    <section id="credibility" className="border-y border-dark/10 bg-paper-deep/50">
      <div className="mx-auto max-w-[1160px] px-6 py-10 lg:px-10">
        <Reveal>
          <p className="font-body text-[1.05rem] leading-relaxed text-dark/70 text-center lg:text-left">
            Trusted by businesses in professional services, healthcare, e-commerce and B2B.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
