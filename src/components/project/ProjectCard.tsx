import type { Project } from "@/data/projects";
import { GlassCard } from "@/components/glass/GlassCard";
import { skillColorMap } from "@/lib/skill-colors";
import { cn } from "@/lib/utils";
import { LaptopPreview } from "./LaptopPreview";
import { Github } from "lucide-react";
import { useHasHover } from "@/hooks/useHasHover";

type Props = {
  project: Project;
  isActive: boolean;
  onActivate: () => void;
};

export function ProjectCard({ project, isActive, onActivate }: Props) {
  const hasHover = useHasHover();

  return (
    <GlassCard
      onClick={() => {
        if (!hasHover) {
          onActivate();
        }
      }}
      className={cn(
        "group relative flex h-full flex-col p-6 transition-all duration-300 cursor-pointer",
        hasHover
          ? "hover:-translate-y-1 hover:shadow-xl"
          : isActive
          ? "-translate-y-1 shadow-xl"
          : ""
      )}
    >
      <h3 className="text-lg font-semibold">
        {project.title}
      </h3>

      <p className="mt-2 text-sm text-zinc-700 dark:text-white">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-md px-2 py-1 text-xs font-medium transition-colors",
              skillColorMap[tech] ?? "bg-zinc-100 text-zinc-600"
            )}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <LaptopPreview isActive={!hasHover && isActive} />

        {project.github && (
          <div className="mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                `
                  inline-flex items-center gap-2
                  rounded-md px-3 py-1.5
                  text-sm font-medium
                  bg-white/60 backdrop-blur
                  border border-black/10
                  text-zinc-700
                  transition-all duration-300
                `,
                hasHover
                  ? "hover:bg-zinc-900 hover:text-white"
                  : isActive
                  ? "bg-zinc-900 text-white"
                  : ""
              )}
            >
              <Github
                className={cn(
                  "size-4 transition-transform duration-300",
                  hasHover
                    ? "group-hover:translate-x-1"
                    : isActive
                    ? "translate-x-1"
                    : ""
                )}
              />
              View Source
            </a>
          </div>
        )}
      </div>
    </GlassCard>
  );
}
