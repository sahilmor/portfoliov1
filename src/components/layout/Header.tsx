"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTimeStr(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-carbon/95 backdrop-blur-none hairline-b">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Left: Identity and Status */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-bold tracking-tight text-bone hover:text-vermilion transition-colors uppercase"
          >
            Sahil Mor
          </Link>
          <div className="hidden sm:flex items-center gap-2 pl-4 hairline-l">
            <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
            <span className="font-mono text-[11px] text-bone-muted tracking-architectural uppercase">
              Open to Work / Ex-Samsung
            </span>
          </div>
        </div>

        {/* Center: Live Time Zone Ticker */}
        <div className="hidden md:flex items-center gap-2">
          <span className="font-mono text-[11px] text-bone-muted tracking-architectural uppercase">
            Gohana, IN:
          </span>
          <span className="font-mono text-[11px] text-bone tabular-nums">
            {timeStr || "--:--:-- IST"}
          </span>
        </div>

        {/* Right: Numeric Navigation Index */}
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-6 lg:gap-8 font-mono text-[11px] tracking-architectural uppercase">
            <li>
              <a
                href="#projects"
                className="text-bone-muted hover:text-bone transition-colors"
              >
                01 Work
              </a>
            </li>
            <li className="hidden sm:inline-block">
              <a
                href="#experience"
                className="text-bone-muted hover:text-bone transition-colors"
              >
                02 Experience
              </a>
            </li>
            <li className="hidden md:inline-block">
              <a
                href="#capabilities"
                className="text-bone-muted hover:text-bone transition-colors"
              >
                03 Capabilities
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-bone-muted hover:text-bone transition-colors"
              >
                04 About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-vermilion hover:text-bone transition-colors"
              >
                05 Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
