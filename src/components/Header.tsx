"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./LogoMark";
import { Menu, X } from "lucide-react";
import { PrimaryCTA } from "./CTA";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "AI SEO", href: "#services" },
    { label: "Google & Meta Ads", href: "#services" },
    { label: "ChatGPT Ads", href: "#services" },
    { label: "Proof", href: "#work" },
    { label: "How We Work", href: "#method" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "pt-3" : "pt-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1160px] items-center justify-between rounded-full px-6 py-3 transition-all duration-500 lg:px-8 ${
          isScrolled
            ? "border border-dark/10 bg-paper/85 backdrop-blur-md shadow-sm"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="focus-ring flex items-center gap-2">
          <BrandLogo size={28} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="focus-ring group relative font-body text-[0.9rem] font-medium text-dark/75 transition-colors hover:text-dark"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <PrimaryCTA href="#book" className="!px-5 !py-2.5 !text-[0.88rem]">
            Get in Touch
          </PrimaryCTA>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-dark/10 bg-paper/80 text-dark lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-4 mt-2 rounded-3xl border border-dark/10 bg-paper/95 p-6 shadow-xl backdrop-blur-xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body text-[1.05rem] font-semibold text-dark/85 transition-colors hover:text-green-deep"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-dark/10">
              <PrimaryCTA
                href="#book"
                className="w-full justify-center"
              >
                Get in Touch
              </PrimaryCTA>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
