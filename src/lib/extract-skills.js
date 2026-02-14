export function extractSkills(projects) {
    const set = new Set();
    projects.forEach((project) => {
        project.tech.forEach((tech) => set.add(tech));
    });
    return ["All", ...Array.from(set).sort()];
}
//i derive filter options form data instead of hard coding them
