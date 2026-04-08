import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function Section({ children, className, id }) {
    return (_jsx("section", { id: id, className: cn("py-20 md:py-28", className), children: children }));
}
