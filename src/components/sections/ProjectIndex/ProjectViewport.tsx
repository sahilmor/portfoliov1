import { Project } from "@/types";
import { ArrowUpRight, GitHubIcon } from "@/components/ui/Icons";

interface ProjectViewportProps {
  project: Project;
}

export default function ProjectViewport({ project }: ProjectViewportProps) {
  return (
    <div className="bg-carbon-surface hairline-all p-6 lg:p-8 flex flex-col justify-between h-full sticky top-24">
      <div>
        {/* Architectural metadata header */}
        <div className="flex items-center justify-between pb-4 hairline-b">
          <div className="font-mono text-[11px] text-bone-muted tracking-architectural uppercase">
            <span>PREVIEW // </span>
            <span className="text-vermilion">SPEC {project.number}</span>
          </div>
          <span className="font-mono text-[11px] text-bone-muted tracking-architectural uppercase">
            {project.category}
          </span>
        </div>

        {/* Project Title and Role */}
        <div className="pt-6">
          <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-bone uppercase">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-bone-muted tracking-architectural uppercase">
            {project.role}
          </p>
        </div>

        {/* Impact Metric Banner */}
        <div className="mt-6 p-4 bg-carbon hairline-all">
          <span className="font-mono text-[10px] text-vermilion tracking-architectural uppercase block mb-1">
            KEY PRODUCTION IMPACT
          </span>
          <p className="text-xs sm:text-sm font-medium text-bone leading-relaxed">
            {project.impactMetric}
          </p>
        </div>

        {/* Detailed Summary */}
        <div className="mt-6">
          <span className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-2">
            ENGINEERING SUMMARY
          </span>
          <p className="text-xs sm:text-sm text-bone-muted leading-relaxed font-normal">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack List */}
        <div className="mt-6">
          <span className="font-mono text-[10px] text-bone-muted tracking-architectural uppercase block mb-2">
            CORE TECHNOLOGIES
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-bone px-2.5 py-1 bg-carbon hairline-all tracking-architectural"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="pt-8 mt-8 hairline-t flex flex-wrap items-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-vermilion text-bone text-xs font-mono tracking-architectural uppercase hover:bg-vermilion-hover transition-colors"
          >
            <span>Live Production Site</span>
            <ArrowUpRight size={14} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-carbon text-bone hairline-all text-xs font-mono tracking-architectural uppercase hover:border-bone transition-colors"
          >
            <GitHubIcon size={14} />
            <span>Source Code</span>
          </a>
        )}
      </div>
    </div>
  );
}
