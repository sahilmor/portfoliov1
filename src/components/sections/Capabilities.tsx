import { capabilitiesData } from "@/data/capabilities";
import { ArrowUpRight, GridCross } from "@/components/ui/Icons";

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative hairline-b">
      {/* Decorative hairline grid cross */}
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-carbon-border hidden lg:block">
        <GridCross size={16} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 hairline-b mb-12">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-bone-muted tracking-architectural uppercase mb-3">
              <span className="text-vermilion">04 / SPECIFICATION</span>
              <span>//</span>
              <span>TECHNICAL CAPABILITIES & SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone uppercase">
              Ways to Collaborate
            </h2>
          </div>
          <div className="font-mono text-xs text-bone-muted tracking-architectural uppercase">
            <span>ENGAGEMENT: CONTRACT, FREELANCE & FULL-TIME</span>
          </div>
        </div>

        {/* Spec Sheet Grid: 2 Columns of Detailed Architectural Sheets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilitiesData.map((spec) => (
            <div
              key={spec.specNumber}
              className="bg-carbon-surface hairline-all p-8 flex flex-col justify-between group hover:border-bone-muted transition-colors"
            >
              <div>
                {/* Spec Number and Focus Tag */}
                <div className="flex items-center justify-between pb-4 hairline-b">
                  <span className="font-mono text-xs text-vermilion tracking-architectural uppercase tabular-nums">
                    SPEC {spec.specNumber}
                  </span>
                  <span className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase">
                    {spec.focusArea}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-bone uppercase tracking-tight mt-6 group-hover:text-vermilion transition-colors">
                  {spec.title}
                </h3>

                {/* Deliverables List */}
                <div className="mt-6">
                  <span className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-3">
                    CORE DELIVERABLES
                  </span>
                  <ul className="space-y-2.5">
                    {spec.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-bone-muted flex items-start gap-2.5"
                      >
                        <span className="text-vermilion font-mono text-xs shrink-0 select-none">
                          +
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Alignment Footer */}
              <div className="mt-8 pt-6 hairline-t">
                <span className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-2">
                  PRIMARY TECH ALIGNMENT
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {spec.techAlignment.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-bone px-2 py-0.5 bg-carbon hairline-all tracking-architectural"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 pt-8 hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-sm text-bone-muted max-w-xl">
            Have a custom frontend engineering requirement or looking for an experienced full-stack engineer? Let us review the technical scope.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-vermilion text-bone text-xs font-mono tracking-architectural uppercase hover:bg-vermilion-hover transition-colors shrink-0"
          >
            <span>Initiate Project Brief</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
