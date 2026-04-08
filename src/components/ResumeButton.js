import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Download } from "lucide-react";
export function ResumeButton() {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const handleDownload = () => {
        if (loading)
            return;
        setLoading(true);
        setProgress(0);
        const link = document.createElement("a");
        link.href = "/resume-backend.pdf";
        link.download = "Amal_Thomas_Resume.pdf";
        link.click();
        let value = 0;
        const interval = setInterval(() => {
            value += Math.random() * 18;
            if (value >= 100) {
                value = 100;
                clearInterval(interval);
                setTimeout(() => {
                    setLoading(false);
                    setProgress(0);
                }, 500);
            }
            setProgress(value);
        }, 100);
    };
    return (_jsxs("button", { onClick: handleDownload, "aria-label": "Download Resume", title: "Download Resume", className: "relative group flex items-center justify-center overflow-hidden rounded-xl px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white active:scale-95 transition", children: [_jsx("div", { className: "absolute inset-0 bg-linear-to-r from-violet-600 to-blue-500" }), _jsx("div", { className: "absolute inset-0 bg-linear-to-r from-violet-700 to-blue-600 transition-all duration-200", style: { width: `${progress}%` } }), _jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-linear-to-r from-violet-500 to-blue-500 transition" }), _jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [_jsx(Download, { className: "size-4" }), _jsx("span", { className: "hidden sm:inline", children: loading ? "Downloading..." : "Resume" })] })] }));
}
