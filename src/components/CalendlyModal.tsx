"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Clean base URL and append dark/olive theme parameters + email
  const baseUrl = siteConfig.calendlyUrl.split("?")[0];
  const calendlySrc = `${baseUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=202020&text_color=ffffff&primary_color=708238${
    siteConfig.email ? `&email=${encodeURIComponent(siteConfig.email)}` : ""
  }`;

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIframeLoading(true);
    };
    window.addEventListener("open-calendly", handleOpen);
    return () => window.removeEventListener("open-calendly", handleOpen);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-dark/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative z-10 flex h-[680px] max-h-[90vh] w-full max-w-[840px] flex-col overflow-hidden rounded-2xl border border-paper/10 bg-dark-soft shadow-2xl"
          >
            {/* Floating Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-50 focus-ring rounded-full bg-dark-deep/80 p-2 text-paper/70 transition-all duration-200 hover:bg-dark-deep hover:text-paper cursor-pointer border border-paper/10 hover:scale-105 active:scale-95"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Iframe Area */}
            <div className="relative flex-1 bg-dark-soft">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-soft text-paper/60">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-green border-t-transparent" />
                  <p className="mt-4 text-[0.8rem] font-body tracking-wider uppercase text-green-soft">
                    Loading Scheduler...
                  </p>
                </div>
              )}
              <iframe
                src={calendlySrc}
                width="100%"
                height="100%"
                onLoad={() => setIframeLoading(false)}
                className="border-0"
                title="Calendly Scheduler"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
