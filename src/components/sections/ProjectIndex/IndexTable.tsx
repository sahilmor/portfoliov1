import { Project } from "@/types";
import { ArrowUpRight } from "@/components/ui/Icons";

interface IndexTableProps {
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (id: string) => void;
}

export default function IndexTable({
  projects,
  activeProjectId,
  onSelectProject,
}: IndexTableProps) {
  return (
    <div className="w-full">
      {/* Table Headers */}
      <div className="hidden md:grid grid-cols-12 gap-4 pb-4 hairline-b font-mono text-[11px] text-bone-muted tracking-architectural uppercase">
        <div className="col-span-2">ID / STATUS</div>
        <div className="col-span-4">PROJECT</div>
        <div className="col-span-3">ROLE & SCOPE</div>
        <div className="col-span-2">YEAR</div>
        <div className="col-span-1 text-right">VIEW</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-carbon-border">
        {projects.map((project) => {
          const isActive = project.id === activeProjectId;

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              onMouseEnter={() => onSelectProject(project.id)}
              className={`group cursor-pointer py-5 md:py-6 transition-colors ${
                isActive ? "bg-carbon-surface/60" : "hover:bg-carbon-surface/30"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
                {/* ID & Status indicator */}
                <div className="col-span-2 flex items-center gap-3">
                  <span className="font-mono text-xs text-bone-muted tabular-nums">
                    {project.number} /
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
                  )}
                  {project.featured && (
                    <span className="font-mono text-[10px] tracking-architectural uppercase text-vermilion">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <div className="col-span-4">
                  <h4 className="text-lg md:text-xl font-bold tracking-tight text-bone uppercase group-hover:text-vermilion transition-colors">
                    {project.title}
                  </h4>
                  <p className="md:hidden font-mono text-xs text-bone-muted mt-1">
                    {project.role}
                  </p>
                </div>

                {/* Role & Scope */}
                <div className="hidden md:block col-span-3">
                  <span className="text-xs text-bone-muted font-normal block truncate">
                    {project.role}
                  </span>
                </div>

                {/* Year */}
                <div className="hidden md:block col-span-2">
                  <span className="font-mono text-xs text-bone-muted tabular-nums">
                    {project.year}
                  </span>
                </div>

                {/* View link indicator */}
                <div className="col-span-1 flex justify-end">
                  <div
                    className={`w-7 h-7 flex items-center justify-center hairline-all transition-colors ${
                      isActive
                        ? "border-vermilion text-vermilion bg-carbon"
                        : "border-carbon-border text-bone-muted group-hover:text-bone group-hover:border-bone-muted"
                    }`}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Mobile preview summary */}
              <div className="md:hidden mt-3 pt-3 hairline-t text-xs text-bone-muted">
                <p>{project.summary}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 bg-carbon hairline-all text-bone"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
