"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import {
  CopyIcon,
  CheckIcon,
  ArrowUpRight,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MailIcon,
  GridCross,
} from "@/components/ui/Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    scope: "Full-Time Role",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        scope: "Full-Time Role",
        message: "",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative hairline-b">
      {/* Decorative hairline grid cross */}
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-carbon-border hidden lg:block">
        <GridCross size={16} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 hairline-b mb-12">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-bone-muted tracking-architectural uppercase mb-3">
              <span className="text-vermilion">06 / ENGAGEMENT</span>
              <span>//</span>
              <span>INITIATE DIRECT COMMUNICATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone uppercase">
              Initiate Contact
            </h2>
          </div>
          <div className="font-mono text-xs text-bone-muted tracking-architectural uppercase">
            <span>RESPONSE WINDOW: WITHIN 24 HOURS</span>
          </div>
        </div>

        {/* 12-Column Grid: Contact Information vs Inquiry Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (Cols 1-5): Direct Channels & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon-surface hairline-all mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
                <span className="font-mono text-[10px] text-bone tracking-architectural uppercase">
                  Open for Engineering Roles & Projects
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-bone tracking-tight uppercase leading-snug">
                Let us build high-performance software together.
              </h3>

              <p className="mt-4 text-sm text-bone-muted leading-relaxed">
                Whether you are seeking a full-stack engineer to lead frontend architecture, or a specialist to design and ship your SaaS MVP, my inbox is open.
              </p>

              {/* One-click copy email button */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="group flex items-center justify-between w-full max-w-md p-4 bg-carbon-surface hairline-all hover:border-bone-muted transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <MailIcon size={16} className="text-vermilion" />
                    <div>
                      <span className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block">
                        DIRECT EMAIL
                      </span>
                      <span className="text-sm font-mono text-bone tracking-tight">
                        {profileData.socials.email}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-bone-muted uppercase">
                    <span>{copied ? "COPIED" : "COPY"}</span>
                    {copied ? (
                      <CheckIcon size={14} className="text-vermilion" />
                    ) : (
                      <CopyIcon size={14} />
                    )}
                  </div>
                </button>
              </div>

              {/* Social Channels List */}
              <div className="mt-8 pt-8 hairline-t">
                <span className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-4">
                  VERIFIED CHANNELS
                </span>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={profileData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2 text-xs font-mono tracking-architectural uppercase text-bone hover:text-vermilion transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <GitHubIcon size={16} />
                        <span>github.com/sahilmor</span>
                      </span>
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={profileData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2 text-xs font-mono tracking-architectural uppercase text-bone hover:text-vermilion transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <LinkedInIcon size={16} />
                        <span>linkedin.com/in/sahilmor</span>
                      </span>
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={profileData.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2 text-xs font-mono tracking-architectural uppercase text-bone hover:text-vermilion transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <XIcon size={16} />
                        <span>x.com/sahilmor05</span>
                      </span>
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Geographic anchor */}
            <div className="pt-6 hairline-t font-mono text-xs text-bone-muted">
              <span>LOCATION: GOHANA, HARYANA, INDIA (UTC+05:30)</span>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Architectural Inquiry Brief Form */}
          <div className="lg:col-span-7 lg:hairline-l lg:pl-12">
            <div className="bg-carbon-surface hairline-all p-8 sm:p-10">
              <div className="pb-6 hairline-b mb-6">
                <span className="font-mono text-[11px] text-vermilion tracking-architectural uppercase block mb-1">
                  COMMUNICATION BRIEF
                </span>
                <h4 className="text-xl font-bold text-bone uppercase tracking-tight">
                  Send a Structured Inquiry
                </h4>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-carbon hairline-all text-vermilion">
                    <CheckIcon size={20} />
                  </div>
                  <h5 className="text-xl font-bold text-bone uppercase tracking-tight">
                    Dispatch Confirmed
                  </h5>
                  <p className="text-xs sm:text-sm text-bone-muted max-w-md mx-auto leading-relaxed">
                    Your communication brief has been transmitted directly to mor.sahil05.28@gmail.com. You will receive a response within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-carbon hairline-all text-xs font-mono tracking-architectural uppercase text-bone hover:border-bone transition-colors"
                  >
                    Send Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-carbon hairline-all border-vermilion text-xs font-mono text-bone leading-relaxed">
                      <span className="text-vermilion uppercase block mb-1">
                        DISPATCH NOTICE:
                      </span>
                      <span>{errorMessage}</span>
                      <div className="mt-3 pt-2 hairline-t text-bone-muted">
                        Fallback: You can reach me directly at{" "}
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="text-vermilion underline font-mono"
                        >
                          mor.sahil05.28@gmail.com
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full bg-carbon hairline-all px-4 py-3 text-sm text-bone font-mono placeholder:text-bone-muted/40 focus:outline-none focus:border-vermilion transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full bg-carbon hairline-all px-4 py-3 text-sm text-bone font-mono placeholder:text-bone-muted/40 focus:outline-none focus:border-vermilion transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-2">
                      PROJECT SCOPE / ROLE TYPE *
                    </label>
                    <select
                      value={formState.scope}
                      onChange={(e) =>
                        setFormState({ ...formState, scope: e.target.value })
                      }
                      className="w-full bg-carbon hairline-all px-4 py-3 text-sm text-bone font-mono focus:outline-none focus:border-vermilion transition-colors cursor-pointer"
                    >
                      <option value="Full-Time Role">Full-Time Software Engineer Role</option>
                      <option value="Contract Engineering">Contract / Freelance Engineering</option>
                      <option value="SaaS Architecture">SaaS MVP Build from Scratch</option>
                      <option value="Performance & Design System">Design System or Performance Audit</option>
                      <option value="Other Technical Query">Other Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-2">
                      PROJECT BRIEF / MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the product scope, tech stack requirements, and timeline."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-carbon hairline-all px-4 py-3 text-sm text-bone font-mono placeholder:text-bone-muted/40 focus:outline-none focus:border-vermilion transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-vermilion text-bone text-xs font-mono tracking-architectural uppercase hover:bg-vermilion-hover disabled:opacity-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {isSubmitting
                        ? "TRANSMITTING BRIEF..."
                        : "DISPATCH INQUIRY BRIEF"}
                    </span>
                    <ArrowUpRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
