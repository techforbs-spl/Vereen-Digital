"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { X } from "lucide-react";

export function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Clean base URL and append dark theme parameters + email
  const baseUrl = siteConfig.calendlyUrl.split("?")[0];
  const calendlySrc = `${baseUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=111612&text_color=ffffff&primary_color=89BC30${
    siteConfig.email ? `&email=${encodeURIComponent(siteConfig.email)}` : ""
  }`;

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIframeLoading(true);
    };

    window.addEventListener("open-calendly", handleOpen);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href="#book"]');
      if (target) {
        // Optional: uncomment if direct modal is preferred over scrolling
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("open-calendly", handleOpen);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative flex flex-col h-full max-h-[750px] w-full max-w-4xl overflow-hidden rounded-3xl border border-paper/10 bg-dark shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-paper/10 px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-bold text-paper">
                  Schedule a Consultation
                </h3>
                <p className="font-body text-xs text-paper/60">
                  Select a convenient time for a 30-minute growth discussion.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="focus-ring rounded-full p-2 text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex-1 w-full bg-dark">
              {iframeLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-green border-t-transparent" />
                </div>
              )}
              <iframe
                src={calendlySrc}
                width="100%"
                height="100%"
                onLoad={() => setIframeLoading(false)}
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default CalendlyModal;
