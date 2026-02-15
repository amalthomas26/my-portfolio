import { useState, useTransition, useDeferredValue } from "react";
import { extractSkills } from "@/lib/extract-skills";
import { SkillFilter } from "@/components/project/SkillFilter";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";

export function Projects() {
  const skills = extractSkills(projects);

  
  const [activeSkill, setActiveSkill] = useState("All");

  
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const deferredSkill = useDeferredValue(activeSkill);

  const filteredProjects =
    deferredSkill === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(deferredSkill));

  function handleSkillChange(skill: string) {
    startTransition(() => {
      setActiveSkill(skill);
      setActiveProject(null)
    });
  }

  function handleProjectActivate(id: string) {
    setActiveProject((prev) => (prev === id ? null : id));
  }

  return (
    <Section id="projects">
      <Container>
        <h2 className="mb-10 text-2xl font-bold dark:text-white">
          Projects
        </h2>

        <SkillFilter
          skills={skills}
          active={activeSkill}
          onChange={handleSkillChange}
        />

        <div
          className={`
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            transition-opacity duration-200
            ${isPending ? "opacity-60" : "opacity-100"}
          `}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onActivate={() => handleProjectActivate(project.id)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
