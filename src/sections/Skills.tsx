import { motion } from "framer-motion";
import { useState } from "react";

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
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 overflow-hidden bg-white dark:bg-zinc-950"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-14">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const isActive = active === skill;

            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() =>
                  setActive((prev) => (prev === skill ? null : skill))
                }
                className="group relative rounded-2xl p-[2px] cursor-pointer"
              >
          
                <div
                  className={`
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500
                    transition-opacity duration-300
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 md:group-hover:opacity-100"
                    }
                  `}
                />

             
                <div
                  className={`
                    relative rounded-2xl
                    bg-white dark:bg-zinc-900
                    border border-black/10 dark:border-white/10
                    p-6 text-center
                    text-zinc-800 dark:text-zinc-200
                    transition-all duration-300
                    ${
                      isActive
                        ? "-translate-y-2 shadow-xl"
                        : "md:group-hover:-translate-y-2 md:group-hover:shadow-xl"
                    }
                  `}
                >
                  <span className="font-medium tracking-wide">
                    {skill}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
