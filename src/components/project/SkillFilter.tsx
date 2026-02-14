import { useLayoutEffect, useRef, useState, useCallback } from "react";

type Props = {
  skills: string[];
  active: string;
  onChange: (skill: string) => void;
};

export function SkillFilter({ skills, active, onChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    top: 0,
  });

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const activeBtn = buttonRefs.current[active];

    if (!container || !activeBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    setIndicator({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
      top: btnRect.bottom - containerRect.top - 2,
    });
  }, [active]);

  useLayoutEffect(() => {
    updateIndicator();

    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  return (
    <div ref={containerRef} className="relative mb-8 flex flex-wrap gap-2">
      <span
        className="
          absolute bottom-0
          h-0.5
          rounded-full
          bg-zinc-900
          transition-all duration-300 ease-out
        "
        style={{
          left: indicator.left,
          width: indicator.width,
          top: indicator.top,
        }}
      />

      {skills.map((skill) => (
        <button
          key={skill}
          ref={(el) => {
            buttonRefs.current[skill] = el;
          }}
          onClick={() => onChange(skill)}
          className={`
            relative px-3 py-1
            text-sm font-medium
            transition-colors
            ${
              active === skill
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-500 dark:text-=white hover:text-zinc-900 dark:text-white "
            }
          `}
        >
          {skill}
        </button>
      ))}
    </div>
  );
}
