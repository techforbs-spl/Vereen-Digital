"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PrimaryCTA } from "./CTA";
import { LogoMark } from "./LogoMark";
import { siteConfig } from "@/config/site";

const NAV = [
  { label: "AI SEO", href: "#services" },
  { label: "Google Ads and Meta Ads", href: "#services" },
  { label: "ChatGPT Ads", href: "#services" },
  { label: "Proof", href: "#work" },
  { label: "How We Work", href: "#method" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1160px] items-center justify-between rounded-full px-6 py-3 transition-all duration-500 lg:px-8 ${
          scrolled
            ? "border border-dark/10 bg-paper/85 shadow-[0_8px_30px_-15px_rgba(43,31,46,0.25)] backdrop-blur-md"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link
          href="#top"
          className="focus-ring flex items-center gap-2.5 font-display text-[1.05rem] font-bold text-dark"
        >
          <LogoMark size={28} />
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="focus-ring group relative font-body text-[0.9rem] font-medium text-dark/75"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-green transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryCTA href="#book" className="!px-5 !py-2.5 text-[0.85rem]">
            Get in Touch
          </PrimaryCTA>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="focus-ring flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-[1.5px] w-5 bg-dark transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-5 bg-dark transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-dark/10 bg-paper px-6 py-6 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body text-base text-dark/85"
              >
                {item.label}
              </Link>
            ))}
            <PrimaryCTA href="#book" className="mt-2 w-fit">Get in Touch</PrimaryCTA>
          </div>
        </div>
      )}
    </header>
  );
}
