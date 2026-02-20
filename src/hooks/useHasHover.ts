import { useState, useEffect } from "react";

export function useHasHover() {
  const [hasHover, setHasHover] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");

    const handleChange = () => {
      setHasHover(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return hasHover;
}
