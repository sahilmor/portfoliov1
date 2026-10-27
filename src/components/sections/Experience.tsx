import { experienceData } from "@/data/experience";
import { GridCross } from "@/components/ui/Icons";

export default function Experience() {
  return (
    <section id="experience" className="relative hairline-b">
      {/* Decorative hairline grid cross */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-carbon-border hidden lg:block">
        <GridCross size={16} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 hairline-b mb-12">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-bone-muted tracking-architectural uppercase mb-3">
              <span className="text-vermilion">03 / TRACK RECORD</span>
              <span>//</span>
              <span>PROFESSIONAL ROLES & EDUCATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone uppercase">
              Experience
            </h2>
          </div>
          <div className="font-mono text-xs text-bone-muted tracking-architectural uppercase">
            <span>STATUS: COMPLETED SAMSUNG DISPLAY // OPEN TO WORK</span>
          </div>
        </div>

        {/* Experience List */}
        <div className="divide-y divide-carbon-border">
          {experienceData.map((exp, idx) => (
            <article
              key={`${exp.company}-${idx}`}
              className="py-10 lg:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start group hover:bg-carbon-surface/20 transition-colors"
            >
              {/* Period Column */}
              <div className="md:col-span-3">
                <span className="font-mono text-xs text-bone-muted tracking-architectural uppercase tabular-nums block">
                  {exp.period}
                </span>
                <span className="font-mono text-[10px] text-vermilion tracking-architectural uppercase mt-1 block">
                  ROLE 0{idx + 1}
                </span>
              </div>

              {/* Company & Role Details */}
              <div className="md:col-span-9">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-bold text-bone tracking-tight uppercase group-hover:text-vermilion transition-colors">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-xs text-bone-muted tracking-architectural uppercase">
                    {exp.role}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 max-w-3xl">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="text-sm text-bone-muted leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-vermilion font-mono text-xs shrink-0 select-none">
                        +
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {/* Education Row */}
          <article className="py-10 lg:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start group hover:bg-carbon-surface/20 transition-colors">
            <div className="md:col-span-3">
              <span className="font-mono text-xs text-bone-muted tracking-architectural uppercase tabular-nums block">
                2022 - 2026
              </span>
              <span className="font-mono text-[10px] text-vermilion tracking-architectural uppercase mt-1 block">
                ACADEMICS
              </span>
            </div>

            <div className="md:col-span-9">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-2xl font-bold text-bone tracking-tight uppercase group-hover:text-vermilion transition-colors">
                  Geeta University, Panipat
                </h3>
                <span className="font-mono text-xs text-bone-muted tracking-architectural uppercase">
                  B.Tech, Computer Science and Engineering
                </span>
              </div>

              <div className="mt-6 text-sm text-bone-muted leading-relaxed max-w-3xl flex items-start gap-3">
                <span className="text-vermilion font-mono text-xs shrink-0 select-none">
                  +
                </span>
                <span>
                  Served as CTO of the University Coding Society, spearheading technical workshops, hackathons, and institutional web initiatives. Rigorous grounding in Data Structures, Algorithms, and Distributed Systems.
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
