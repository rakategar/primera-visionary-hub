import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useLang } from "@/lib/i18n";

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();

  const base = "inline-flex items-center justify-center rounded-full border transition-all duration-300";
  const dark = "border-white/25 text-white/85 bg-black/25 hover:bg-white/20 backdrop-blur-sm";
  const light = "border-navy/20 text-navy bg-white/92 hover:bg-soft shadow-sm";
  const style = theme === "dark" ? dark : light;

  return (
    <div className="fixed top-1 right-3 z-[60] hidden md:flex items-center gap-1">
      {/* Language toggle — left of theme toggle */}
      <button
        type="button"
        onClick={() => setLang(lang === "id" ? "en" : "id")}
        aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
        className={`${base} ${style} h-7 px-2.5 gap-1 text-[10px] font-bold tracking-wider`}
      >
        <Globe className="h-3 w-3" />
        {lang === "id" ? "EN" : "ID"}
      </button>

      {/* Theme toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className={`${base} ${style} h-7 w-7`}
      >
        {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
