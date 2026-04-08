import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem("theme");
        return stored ?? "light";
    });
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    function toggleTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
}
