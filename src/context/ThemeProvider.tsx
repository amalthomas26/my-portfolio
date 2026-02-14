import { useEffect, useState, ReactNode } from "react"
import { ThemeContext, Theme } from "./ThemeContext"

export function ThemeProvider({
  children,
}: {
  children: ReactNode
}) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    )
  }, [theme])

  function toggleTheme() {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
