import React from "react";
import { BrandLogo } from "./LogoMark";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-dark-deep pt-20 pb-12 text-paper border-t border-paper/10">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 border-b border-paper/10 pb-16 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand Info */}
          <div>
            <a href="#top" className="inline-block">
              <BrandLogo size={28} textColor="text-paper" />
            </a>
            <p className="mt-5 max-w-[320px] font-body text-[0.88rem] leading-relaxed text-paper/60">
              Performance marketing and AI SEO for high-growth companies who report on pipeline, not impressions. We reply within one business day.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-block font-body text-[0.88rem] text-green-soft underline hover:text-green"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Services */}
            <div>
              <p className="eyebrow text-paper/40">Services</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#services" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    AI SEO
                  </a>
                </li>
                <li>
                  <a href="#services" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    Google Ads
                  </a>
                </li>
                <li>
                  <a href="#services" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    Meta Ads
                  </a>
                </li>
                <li>
                  <a href="#services" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    ChatGPT Ads
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="eyebrow text-paper/40">Company</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#work" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    Proof & Case Studies
                  </a>
                </li>
                <li>
                  <a href="#method" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    How We Work
                  </a>
                </li>
                <li>
                  <a href="#faq" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="eyebrow text-paper/40">Get in Touch</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#book" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    Schedule Audit
                  </a>
                </li>
                <li>
                  <a href="#book" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    Request Proposal
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft transition-colors">
                    Partner Inquiry
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="flex flex-col gap-4 py-8 font-body text-[0.8rem] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper/75 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-paper/75 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-paper/75 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
