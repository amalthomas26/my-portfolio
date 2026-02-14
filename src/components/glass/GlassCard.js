import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function GlassCard({ children, className }) {
    return (_jsx("div", { className: cn("rounded-2xl bg-white/10 backdrop-blur-[16px] border border-white/20 shadow-xl", className), children: children }));
}
