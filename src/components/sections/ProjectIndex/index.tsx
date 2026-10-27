"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import IndexTable from "./IndexTable";
import ProjectViewport from "./ProjectViewport";
import { GridCross } from "@/components/ui/Icons";

export default function ProjectIndex() {
  const [activeProjectId, setActiveProjectId] = useState<string>(
    projectsData[0].id
  );

  const activeProject =
    projectsData.find((p) => p.id === activeProjectId) || projectsData[0];

  return (
    <section id="projects" className="relative hairline-b">
      {/* Decorative hairline grid cross */}
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-carbon-border hidden lg:block">
        <GridCross size={16} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 hairline-b mb-10">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-bone-muted tracking-architectural uppercase mb-3">
              <span className="text-vermilion">02 / CATALOG</span>
              <span>//</span>
              <span>INDEX OF SHIPPED SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone uppercase">
              Selected Works
            </h2>
          </div>
          <div className="font-mono text-xs text-bone-muted tracking-architectural uppercase">
            <span>CHRONOLOGY: 2024 - 2026</span>
          </div>
        </div>

        {/* 12-Column Grid: Index Table + Sticky Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (Cols 1-7): Architectural Data Table */}
          <div className="lg:col-span-7">
            <IndexTable
              projects={projectsData}
              activeProjectId={activeProjectId}
              onSelectProject={setActiveProjectId}
            />
          </div>

          {/* Right Column (Cols 8-12): Dynamic Viewport */}
          <div className="hidden lg:block lg:col-span-5">
            <ProjectViewport project={activeProject} />
          </div>
        </div>
      </div>
    </section>
  );
}
