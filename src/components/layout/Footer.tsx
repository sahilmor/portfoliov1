"use client";

import { ArrowUpRight } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-carbon hairline-t">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 hairline-b items-start">
          {/* Identity & Coordinates */}
          <div className="md:col-span-4">
            <span className="text-base font-bold tracking-tight text-bone uppercase block">
              Sahil Mor
            </span>
            <span className="font-mono text-xs text-bone-muted tracking-architectural uppercase mt-1 block">
              Frontend Engineer & UI/UX Specialist
            </span>
            <div className="mt-4 font-mono text-[11px] text-bone-muted leading-relaxed">
              <span>COORDINATES: 29.1384° N, 76.6974° E</span>
              <br />
              <span>GOHANA, HARYANA, INDIA (UTC+05:30)</span>
            </div>
          </div>

          {/* System Specifications */}
          <div className="md:col-span-5 font-mono text-xs text-bone-muted space-y-1.5">
            <span className="text-vermilion tracking-architectural uppercase block mb-2">
              BUILD SPECIFICATION
            </span>
            <p>ARCHITECTURE: NEXT.JS 15 // REACT 19 // TYPESCRIPT</p>
            <p>DESIGN SYSTEM: SWISS ARCHITECTURAL GRID // 1PX HAIRLINE</p>
            <p>TYPOGRAPHY: SWITZER & JETBRAINS MONO</p>
            <p>ASSETS: CUSTOM HAND-CRAFTED SVG VECTORS</p>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-carbon-surface hairline-all text-xs font-mono tracking-architectural uppercase text-bone hover:border-bone transition-colors"
            >
              <span>Back to Top [00]</span>
              <ArrowUpRight size={14} className="-rotate-45" />
            </button>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-bone-muted tracking-architectural uppercase">
          <span>SAHIL MOR (C) 2026 // ALL RIGHTS RESERVED</span>
          <span>ENGINEERED FOR PRODUCTION SPEED & RESILIENCE</span>
        </div>
      </div>
    </footer>
  );
}
