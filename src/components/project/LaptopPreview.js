import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function LaptopPreview({ isActive }) {
    return (_jsx(motion.div, { className: "relative mt-6 flex justify-center", children: _jsxs("svg", { width: "140", height: "90", viewBox: "0 0 200 130", className: "transition-all duration-300", children: [_jsx("rect", { x: "20", y: "10", width: "160", height: "90", rx: "6", className: cn("fill-zinc-800 transition-all duration-300", isActive
                        ? "fill-zinc-900"
                        : "group-hover:fill-zinc-900") }), _jsx("rect", { x: "28", y: "18", width: "144", height: "74", rx: "4", className: cn("fill-zinc-900 transition-all duration-300", isActive
                        ? "fill-indigo-500 drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                        : "group-hover:fill-indigo-500 group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]") }), _jsx("rect", { x: "10", y: "100", width: "180", height: "12", rx: "6", className: "fill-zinc-400" })] }) }));
}
