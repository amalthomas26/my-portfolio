import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
export function ThemeProvider({ children, }) {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
    function toggleTheme() {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    }
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
}
