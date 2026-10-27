import { GridCross } from "@/components/ui/Icons";

const technicalMatrix = [
  {
    category: "01 / LANGUAGES",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C", "SQL"],
  },
  {
    category: "02 / FRONTEND ARCHITECTURE",
    items: [
      "React.js",
      "Next.js (App Router)",
      "Angular",
      "Tailwind CSS",
      "Radix UI Primitives",
      "CSS Architecture",
    ],
  },
  {
    category: "03 / BACKEND & STREAMS",
    items: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "WebSockets",
      "RESTful API Design",
      "JWT Authentication",
    ],
  },
  {
    category: "04 / DATABASES & TOOLING",
    items: [
      "MongoDB",
      "Supabase (PostgreSQL)",
      "MySQL",
      "Git & GitHub",
      "Postman",
      "Vercel",
      "Cognex VisionPro",
    ],
  },
];

export default function AboutPhilosophy() {
  return (
    <section id="about" className="relative hairline-b">
      {/* Decorative hairline grid cross */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-carbon-border hidden lg:block">
        <GridCross size={16} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 hairline-b mb-12">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-bone-muted tracking-architectural uppercase mb-3">
              <span className="text-vermilion">05 / FOUNDATION</span>
              <span>//</span>
              <span>ENGINEERING PHILOSOPHY & SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone uppercase">
              About & Technical Standards
            </h2>
          </div>
          <div className="font-mono text-xs text-bone-muted tracking-architectural uppercase">
            <span>BACKGROUND: FULL-STACK & INDUSTRIAL AUTOMATION</span>
          </div>
        </div>

        {/* 12-Column Grid: Philosophy vs Technical Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Cols 1-6): Philosophy and Approach */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-bone uppercase tracking-tight">
              Bridging mathematical precision with production reliability.
            </h3>

            <p className="text-sm sm:text-base text-bone-muted leading-relaxed font-normal">
              I am a software engineer focused on architecting resilient, high-performance web applications and clean design systems. Over the course of my career, I have shipped three SaaS products end-to-end into production (Zenith, Test Explorer, and NomadX) while completing my Computer Science degree at Geeta University, where I led technical initiatives as CTO of the coding society.
            </p>

            <p className="text-sm sm:text-base text-bone-muted leading-relaxed font-normal">
              My engineering background combines full-stack web applications with high-reliability industrial automation at Samsung Display, where I developed machine-monitoring and computer-vision pipelines processing continuous equipment telemetry.
            </p>

            <div className="pt-6 hairline-t">
              <span className="font-mono text-xs text-bone tracking-architectural uppercase block mb-3">
                CORE TECHNICAL STANDARDS
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-bone-muted">
                <li className="flex items-start gap-2.5">
                  <span className="text-vermilion font-mono text-xs select-none">+</span>
                  <span>Strict TypeScript with zero loose typing or unsanitized state</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-vermilion font-mono text-xs select-none">+</span>
                  <span>Deterministic layout geometry with zero Cumulative Layout Shift</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-vermilion font-mono text-xs select-none">+</span>
                  <span>Strict WCAG 2.1 AA keyboard accessibility and semantic markup</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (Cols 7-12): Technical Competencies Matrix */}
          <div className="lg:col-span-6 lg:hairline-l lg:pl-12">
            <div className="divide-y divide-carbon-border">
              {technicalMatrix.map((matrix) => (
                <div key={matrix.category} className="py-6 first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-vermilion tracking-architectural uppercase block mb-3">
                    {matrix.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {matrix.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs text-bone px-3 py-1 bg-carbon-surface hairline-all tracking-architectural hover:border-bone-muted transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
