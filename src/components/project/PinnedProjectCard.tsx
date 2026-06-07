import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2, Pin } from "lucide-react";
import { cn } from "@/lib/utils";
import { skillColorMap } from "@/lib/skill-colors";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function PinnedProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-12 rounded-3xl p-[1.5px] overflow-hidden group"
      style={{
        background:
          "linear-gradient(135deg, #6366f1 0%, #a855f7 40%, #06b6d4 100%)",
      }}
    >
      {/* Glow pulse behind the card */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse at 60% 30%, rgba(99,102,241,0.45) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Inner card surface */}
      <div className="relative rounded-[calc(1.5rem-1.5px)] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl p-8 lg:p-10">

        {/* Pin badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-700 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-5">
          <Pin className="size-3" />
          Pinned Project
        </span>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* ── Left column ── */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3
              className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)",
              }}
            >
              {project.title}
            </h3>

            {/* Tagline */}
            {project.tagline && (
              <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {project.tagline}
              </p>
            )}

            {/* Description */}
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeOut" }}
                    className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-500" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Tech badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold border border-transparent transition-all duration-200 hover:scale-105",
                    skillColorMap[tech] ?? "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right column — CTA links ── */}
          <div className="mt-8 lg:mt-0 flex flex-row lg:flex-col gap-3 lg:shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "rounded-xl px-5 py-2.5",
                  "text-sm font-semibold text-white",
                  "shadow-lg shadow-indigo-500/30",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
                )}
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #a855f7 60%, #06b6d4 100%)",
                }}
              >
                <ExternalLink className="size-4" />
                Live App
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "rounded-xl px-5 py-2.5",
                  "text-sm font-semibold",
                  "bg-zinc-100 dark:bg-zinc-800",
                  "text-zinc-700 dark:text-zinc-200",
                  "border border-zinc-200 dark:border-zinc-700",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900"
                )}
              >
                <Github className="size-4" />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Decorative dots grid — bottom-right */}
        <div
          className="pointer-events-none absolute bottom-4 right-6 opacity-10 dark:opacity-20"
          aria-hidden
        >
          <svg width="80" height="56" viewBox="0 0 80 56" fill="currentColor" className="text-indigo-500">
            {Array.from({ length: 4 }).map((_, row) =>
              Array.from({ length: 6 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 14 + 7}
                  cy={row * 14 + 7}
                  r="2"
                />
              ))
            )}
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
