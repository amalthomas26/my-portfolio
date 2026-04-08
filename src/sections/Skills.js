import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState } from "react";
import { useHasHover } from "@/hooks/useHasHover";
const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "GraphQL",
    "Docker",
    "CI/CD using GitHub Actions",
    "AWS",
];
export function Skills() {
    const hasHover = useHasHover();
    const [active, setActive] = useState(null);
    function handleClick(skill) {
        if (!hasHover) {
            setActive((prev) => (prev === skill ? null : skill));
        }
    }
    return (_jsxs("section", { id: "skills", className: "relative py-28 md:py-36 overflow-hidden bg-white dark:bg-zinc-950", children: [_jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_40%)]" }), _jsxs("div", { className: "container mx-auto px-6 max-w-5xl", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-14", children: "Skills & Technologies" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6", children: skills.map((skill, index) => {
                            const isActive = active === skill;
                            return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.05 }, viewport: { once: true }, onClick: () => handleClick(skill), className: "group relative rounded-2xl p-[2px] cursor-pointer", children: [_jsx("div", { className: `
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500
                    transition-opacity duration-300
                    ${hasHover
                                            ? "opacity-0 group-hover:opacity-100"
                                            : isActive
                                                ? "opacity-100"
                                                : "opacity-0"}
                  ` }), _jsx("div", { className: `
                    relative rounded-2xl
                    bg-white dark:bg-zinc-900
                    border border-black/10 dark:border-white/10
                    p-6 text-center
                    text-zinc-800 dark:text-zinc-200
                    transition-all duration-300
                    ${hasHover
                                            ? "group-hover:-translate-y-2 group-hover:shadow-xl"
                                            : isActive
                                                ? "-translate-y-2 shadow-xl"
                                                : ""}
                  `, children: _jsx("span", { className: "font-medium tracking-wide", children: skill }) })] }, skill));
                        }) })] })] }));
}
