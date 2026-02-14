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
    const [isPending, startTransition] = useTransition();
    const deferredSkill = useDeferredValue(activeSkill);
    const filteredProjects = deferredSkill === "All"
        ? projects
        : projects.filter((p) => p.tech.includes(deferredSkill));
    function handleSkillChange(skill) {
        startTransition(() => {
            setActiveSkill(skill);
        });
    }
    return (_jsx(Section, { id: "projects", children: _jsxs(Container, { children: [_jsx("h2", { className: "mb-10 text-2xl font-bold", children: "Projects" }), _jsx(SkillFilter, { skills: skills, active: activeSkill, onChange: handleSkillChange }), _jsx("div", { className: `*:grip gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            transition-opacity duration-200
            ${isPending ? "opacity-60" : "opacity-100"}
            `, children: filteredProjects.map((project) => (_jsx(ProjectCard, { project: project }, project.id))) })] }) }));
}
