import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState, useCallback } from "react";
export function SkillFilter({ skills, active, onChange }) {
    const containerRef = useRef(null);
    const buttonRefs = useRef({});
    const [indicator, setIndicator] = useState({
        left: 0,
        width: 0,
        top: 0,
    });
    const updateIndicator = useCallback(() => {
        const container = containerRef.current;
        const activeBtn = buttonRefs.current[active];
        if (!container || !activeBtn)
            return;
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
    return (_jsxs("div", { ref: containerRef, className: "relative mb-8 flex flex-wrap gap-2", children: [_jsx("span", { className: "\r\n          absolute bottom-0\r\n          h-0.5\r\n          rounded-full\r\n          bg-zinc-900\r\n          transition-all duration-300 ease-out\r\n        ", style: {
                    left: indicator.left,
                    width: indicator.width,
                    top: indicator.top,
                } }), skills.map((skill) => (_jsx("button", { ref: (el) => {
                    buttonRefs.current[skill] = el;
                }, onClick: () => onChange(skill), className: `
            relative px-3 py-1
            text-sm font-medium
            transition-colors
            ${active === skill
                    ? "text-zinc-900 dark:text-white"
                    : "text-zinc-500 dark:text-=white hover:text-zinc-900 dark:text-white "}
          `, children: skill }, skill)))] }));
}
