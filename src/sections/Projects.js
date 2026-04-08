import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const [activeProject, setActiveProject] = useState(null);
    const [isPending, startTransition] = useTransition();
    const deferredSkill = useDeferredValue(activeSkill);
    const filteredProjects = deferredSkill === "All"
        ? projects
        : projects.filter((p) => p.tech.includes(deferredSkill));
    function handleSkillChange(skill) {
        startTransition(() => {
            setActiveSkill(skill);
            setActiveProject(null);
        });
    }
    function handleProjectActivate(id) {
        setActiveProject((prev) => (prev === id ? null : id));
    }
    return (_jsx(Section, { id: "projects", children: _jsxs(Container, { children: [_jsx("h2", { className: "mb-10 text-2xl font-bold dark:text-white", children: "Projects" }), _jsx(SkillFilter, { skills: skills, active: activeSkill, onChange: handleSkillChange }), _jsx("div", { className: `
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            transition-opacity duration-200
            ${isPending ? "opacity-60" : "opacity-100"}
          `, children: filteredProjects.map((project) => (_jsx(ProjectCard, { project: project, isActive: activeProject === project.id, onActivate: () => handleProjectActivate(project.id) }, project.id))) })] }) }));
}
