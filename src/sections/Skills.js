import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
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
    return (_jsxs("section", { id: "skills", className: "\r\n        relative py-28 md:py-36 overflow-hidden\r\n        bg-white dark:bg-zinc-950\r\n        transition-colors duration-300\r\n      ", children: [_jsx("div", { className: "\r\n          absolute inset-0 -z-10\r\n          bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_40%)]\r\n        " }), _jsxs("div", { className: "container mx-auto px-6 max-w-5xl", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-14", children: "Skills & Technologies" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6", children: skills.map((skill, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.05 }, viewport: { once: true }, className: "\r\n                group relative rounded-2xl\r\n                p-[2px]                       /* exposes gradient clearly */\r\n                transition-all duration-300\r\n              ", children: [_jsx("div", { className: "\r\n                  absolute inset-0 rounded-2xl\r\n                  bg-gradient-to-r\r\n                  from-indigo-500\r\n                  via-fuchsia-500\r\n                  to-cyan-500\r\n                  opacity-0\r\n                  group-hover:opacity-100\r\n                  transition-opacity duration-300\r\n                " }), _jsx("div", { className: "\r\n                  relative rounded-2xl\r\n                  bg-white\r\n                  dark:bg-zinc-900\r\n\r\n                  border border-black/10\r\n                  dark:border-white/10\r\n\r\n                  p-6 text-center\r\n\r\n                  text-zinc-800\r\n                  dark:text-zinc-200\r\n\r\n                  shadow-sm\r\n                  transition-all duration-300\r\n\r\n                  group-hover:-translate-y-2\r\n                  group-hover:shadow-xl\r\n                ", children: _jsx("span", { className: "font-medium tracking-wide", children: skill }) })] }, skill))) })] })] }));
}
