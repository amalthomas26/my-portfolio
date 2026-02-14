import type { Project } from "@/data/projects";

export function extractSkills(projects: Project[]): string[] {
  const set = new Set<string>();

  projects.forEach((project) => {
    project.tech.forEach((tech) => set.add(tech));
  });

  return ["All", ...Array.from(set).sort()];
}

//i derive filter options form data instead of hard coding them
