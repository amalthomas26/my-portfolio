import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useHasHover } from "@/hooks/useHasHover";
export function Contact() {
    const [active, setActive] = useState(null);
    return (_jsx("section", { id: "contact", className: "bg-zinc-50 py-24 dark:bg-zinc-900", children: _jsxs("div", { className: "container mx-auto max-w-2xl px-6", children: [_jsx("h2", { className: "text-3xl font-bold text-zinc-900 dark:text-white", children: "Let\u2019s Connect" }), _jsx("p", { className: "mt-3 text-zinc-600 dark:text-zinc-300", children: "Actively seeking full-time opportunities." }), _jsxs("div", { className: "mt-12 space-y-6", children: [_jsx(ContactCard, { id: "email", active: active, setActive: setActive, href: "mailto:amalthomaschennattu@gmail.com", icon: _jsx(Mail, { className: "size-5 text-indigo-600" }), label: "amalthomaschennattu@gmail.com" }), _jsx(ContactCard, { id: "phone", active: active, setActive: setActive, href: "tel:+919895114935", icon: _jsx(Phone, { className: "size-5 text-emerald-600" }), label: "+91 98951 14935" }), _jsx(ContactCard, { id: "linkedin", active: active, setActive: setActive, href: "https://www.linkedin.com/in/amalthomas26/", icon: _jsx(Linkedin, { className: "size-5 text-blue-600" }), label: "LinkedIn Profile", external: true }), _jsx(ContactCard, { id: "github", active: active, setActive: setActive, href: "https://github.com/amalthomas26", icon: _jsx(Github, { className: "size-5 text-zinc-800 dark:text-white" }), label: "github.com/amalthomas26", external: true })] })] }) }));
}
function ContactCard({ id, active, setActive, href, icon, label, external = false, }) {
    const hasHover = useHasHover();
    const isActive = active === id;
    function handleClick() {
        if (!hasHover) {
            setActive((prev) => (prev === id ? null : id));
        }
    }
    return (_jsxs("a", { href: href, target: external ? "_blank" : undefined, rel: external ? "noopener noreferrer" : undefined, onClick: handleClick, className: "group relative block rounded-2xl p-px transition-transform duration-200 active:scale-[0.98]", "aria-label": label, children: [_jsx("div", { className: `
          absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-500 via-fuchsia-500 to-cyan-500
          transition-opacity duration-300
          ${hasHover
                    ? "opacity-0 group-hover:opacity-100"
                    : isActive
                        ? "opacity-100"
                        : "opacity-0"}
        ` }), _jsxs("div", { className: `
          relative z-10 flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5
          transition-all duration-300 dark:border-white/10 dark:bg-zinc-800
          ${hasHover
                    ? "group-hover:-translate-y-1 group-hover:shadow-xl"
                    : isActive
                        ? "-translate-y-1 shadow-xl"
                        : ""}
        `, children: [_jsx("span", { className: "shrink-0", children: icon }), _jsx("span", { className: "break-all font-medium text-zinc-800 dark:text-white", children: label })] })] }));
}
