import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";

interface ThemeCtx {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("pks-theme") || "dark") as Theme;
    }
    return "dark";
  });

  useEffect(() => {
    const saved = (localStorage.getItem("pks-theme") || "dark") as Theme;
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(saved);
    setThemeState(saved);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("pks-theme", next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
