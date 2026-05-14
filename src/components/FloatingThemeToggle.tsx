import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`fixed top-3 right-4 z-[60] h-9 w-9 inline-flex items-center justify-center rounded-full border transition-all duration-300 shadow-md ${
        theme === "dark"
          ? "border-white/30 text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          : "border-navy/20 text-navy bg-white/95 hover:bg-soft shadow-sm"
      }`}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
