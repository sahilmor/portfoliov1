"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { CopyIcon, CheckIcon, ArrowUpRight, GridCross } from "@/components/ui/Icons";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative hairline-b">
      {/* Decorative hairline grid crosses at perimeter intersections */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-carbon-border hidden lg:block">
        <GridCross size={16} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (Cols 1-8): Architectural Headline & Statement */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-bone-muted tracking-architectural uppercase mb-8">
                <span className="text-vermilion">01 / ARCHITECTURE</span>
                <span>//</span>
                <span>FRONTEND & SYSTEM CRAFT</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bone leading-[1.05] uppercase max-w-4xl">
                Building high-fidelity digital interfaces with mathematical precision.
              </h1>

              <p className="mt-8 text-base sm:text-lg text-bone-muted leading-relaxed max-w-2xl font-normal">
                {profileData.subStatement}
              </p>
            </div>

            {/* Action Row */}
            <div className="mt-12 pt-8 hairline-t flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex items-center gap-3 px-4 py-2.5 bg-carbon-surface hairline-all hover:border-bone-muted transition-colors text-xs font-mono tracking-architectural uppercase text-bone"
              >
                <span>{copied ? "COPIED TO CLIPBOARD" : profileData.socials.email}</span>
                {copied ? (
                  <CheckIcon size={14} className="text-vermilion" />
                ) : (
                  <CopyIcon size={14} className="text-bone-muted group-hover:text-bone transition-colors" />
                )}
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-architectural uppercase text-bone hover:text-vermilion transition-colors"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-architectural uppercase text-bone-muted hover:text-bone transition-colors ml-auto"
              >
                <span>Initiate Discussion</span>
              </a>
            </div>
          </div>

          {/* Right Column (Cols 9-12): Structural Metric Blocks */}
          <div className="lg:col-span-4 lg:hairline-l flex flex-col justify-between lg:pl-12 space-y-8 lg:space-y-0">
            <div className="hairline-b pb-8">
              <span className="font-mono text-[11px] text-bone-muted tracking-architectural uppercase block mb-2">
                PRODUCTION TRACK RECORD
              </span>
              <div className="text-4xl lg:text-5xl font-bold text-bone tracking-tight tabular-nums">
                3 LIVE SAAS
              </div>
              <p className="mt-2 text-xs text-bone-muted leading-relaxed">
                Shipped end-to-end into production with active users (Zenith, Test Explorer, NomadX).
              </p>
            </div>

            <div className="hairline-b pb-8">
              <span className="font-mono text-[11px] text-bone-muted tracking-architectural uppercase block mb-2">
                ENGINEERING PEDIGREE
              </span>
              <div className="text-4xl lg:text-5xl font-bold text-bone tracking-tight tabular-nums">
                EX-SAMSUNG
              </div>
              <p className="mt-2 text-xs text-bone-muted leading-relaxed">
                Assistant Engineer at Samsung Display. Machine monitoring, telemetry pipelines, and automation.
              </p>
            </div>

            <div className="pb-2">
              <span className="font-mono text-[11px] text-bone-muted tracking-architectural uppercase block mb-2">
                PERFORMANCE STANDARD
              </span>
              <div className="text-4xl lg:text-5xl font-bold text-vermilion tracking-tight tabular-nums">
                100%
              </div>
              <p className="mt-2 text-xs text-bone-muted leading-relaxed">
                Obsession with sub-second LCP, zero Cumulative Layout Shift, and rigorous type safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
