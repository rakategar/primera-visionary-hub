import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Phone, Mail, Sun, Moon } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logo from "@/assets/primera-logo.png";

const SUBMENUS: Record<string, { label: string; to: string; desc?: string }[]> = {
  "/about": [
    { label: "Who We Are", to: "/about/who-we-are", desc: "Company identity and belief" },
    { label: "Vision & Mission", to: "/about/vision-mission", desc: "Purpose and strategic direction" },
    { label: "Core Values", to: "/about/core-values", desc: "PRIMERA values" },
    { label: "Our Approach", to: "/about/our-approach", desc: "Learning methodology" },
    { label: "Leadership & Facilitators", to: "/about/leadership-facilitators", desc: "Advisors and experts" },
    { label: "Our Journey", to: "/about/our-journey", desc: "Growth story and milestones" },
  ],
  "/services": [
    { label: "Leadership & Managerial", to: "/services/leadership-managerial", desc: "Build leadership capability" },
    { label: "Soft Skills", to: "/services/soft-skills", desc: "Strengthen communication and behavior" },
    { label: "Sales Capability", to: "/services/sales-capability", desc: "Improve sales productivity and advisory" },
    { label: "Talent Assessment", to: "/services/talent-assessment", desc: "Select and map the right talents" },
    { label: "Facilitator & Digital Learning", to: "/services/facilitator-digital-learning", desc: "Develop modern learning capability" },
    { label: "Business Consulting", to: "/services/business-consulting", desc: "Improve execution and performance" },
  ],
  "/products": [
    { label: "CRM ACT", to: "/products/crm-act", desc: "AI-powered banking sales execution" },
    { label: "Learning-to-Performance", to: "/products/learning-to-performance", desc: "Training impact tools" },
    { label: "Assessment Tools", to: "/products/assessment-tools", desc: "Capability and talent assessment" },
  ],
  "/clients": [
    { label: "Our Partners", to: "/clients/partners", desc: "Trusted client portfolio" },
    { label: "Industries We Serve", to: "/clients/industries", desc: "Sector-specific expertise" },
    { label: "Success Stories", to: "/clients/success-stories", desc: "Outcome-driven examples" },
    { label: "Learning Impact", to: "/clients/learning-impact", desc: "Measurement and evaluation" },
  ],
  "/insights": [
    { label: "Articles", to: "/insights/articles", desc: "Practical thinking for leaders" },
    { label: "Whitepapers", to: "/insights/whitepapers", desc: "Executive research and guides" },
    { label: "Webinars", to: "/insights/webinars", desc: "Learning and briefing sessions" },
    { label: "News", to: "/insights/news", desc: "Primera updates" },
  ],
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const loc = useLocation();
  const isHome = loc.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const saved = localStorage.getItem("pks-theme") || "dark";
    setTheme(saved as "dark" | "light");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setHover(null); }, [loc.pathname]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("pks-theme", next);
  };

  const linkColor = transparent
    ? "text-white/90 hover:text-white"
    : "text-navy dark:text-cream/85 hover:text-gold dark:hover:text-gold";
  const wordmarkColor = transparent ? "text-white" : "text-navy dark:text-cream";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-md border-b border-line shadow-[0_2px_24px_-12px_rgba(10,22,40,0.18)]"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setHover(null)}
    >
      {/* Top contact strip */}
      <div className={`hidden md:block border-b transition-colors ${transparent ? "border-white/15" : "border-line/70"}`}>
        <div className="container-x flex items-center justify-between h-9 text-[11px]">
          <div className={`flex items-center gap-5 ${transparent ? "text-white/75" : "text-navy/70 dark:text-cream/60"}`}>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-gold transition">
              <Mail className="h-3 w-3" /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g,"")}`} className="inline-flex items-center gap-1.5 hover:text-gold transition">
              <Phone className="h-3 w-3" /> {SITE.phone}
            </a>
          </div>
          <div className={`tracking-[0.22em] uppercase font-semibold ${transparent ? "text-white/60" : "text-navy/55 dark:text-cream/50"}`}>
            <span className="text-gold">●</span> {SITE.positioning}
          </div>
        </div>
      </div>

      <div className="container-x flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label={SITE.name}>
          <img
            src={logo}
            alt={`${SITE.short} logo`}
            className={`h-9 md:h-11 w-auto object-contain transition ${transparent ? "brightness-0 invert" : "dark:brightness-0 dark:invert"}`}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={`font-display text-[13px] tracking-[0.16em] uppercase font-bold ${wordmarkColor}`}>Primera Karya Sinergia</span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-gold font-semibold">Empowering · Elevating</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center" aria-label="Primary">
          {NAV.map((n) => {
            const sub = SUBMENUS[n.to];
            const isTrigger = !!sub;
            return (
              <div key={n.to} className="relative" onMouseEnter={() => setHover(n.to)}>
                {isTrigger ? (
                  <button
                    type="button"
                    onClick={() => setHover(hover === n.to ? null : n.to)}
                    aria-haspopup="menu"
                    aria-expanded={hover === n.to}
                    className={`px-3.5 py-2 text-[13px] font-medium transition-colors gold-underline ${linkColor}`}
                  >
                    {n.label}
                  </button>
                ) : (
                  <Link
                    to={n.to}
                    className={`px-3.5 py-2 text-[13px] font-medium transition-colors gold-underline ${linkColor}`}
                    activeProps={{ className: `font-semibold text-gold` }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                )}
                {sub && hover === n.to && (
                  <div className="absolute top-full left-0 pt-3 w-80 z-50">
                    <div className="rounded-xl bg-white dark:bg-[#1e1e1e] border border-line shadow-2xl p-2">
                      {sub.map((s) => (
                        <a key={s.to} href={s.to} className="block px-3 py-2.5 rounded-lg hover:bg-soft dark:hover:bg-[#2a2a2a] transition group">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-navy dark:text-cream group-hover:text-gold transition">{s.label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-gold opacity-0 group-hover:opacity-100 transition" />
                          </div>
                          {s.desc && <p className="text-[11px] text-charcoal/70 dark:text-cream/50 mt-0.5">{s.desc}</p>}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`h-9 w-9 inline-flex items-center justify-center rounded-full border transition-colors ${
              transparent
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-line text-navy dark:text-cream hover:bg-soft dark:hover:bg-[#1e1e1e]"
            }`}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            to="/contact"
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 md:px-5 py-2.5 text-xs md:text-[13px] font-semibold transition-all border ${
              transparent
                ? "bg-gold text-navy border-gold hover:bg-white hover:border-white"
                : "bg-gradient-to-r from-navy to-charcoal dark:from-gold dark:to-gold/80 text-white dark:text-navy border-gold/30 hover:shadow-lg hover:-translate-y-0.5"
            }`}
          >
            Schedule Consultation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border transition ${
              transparent ? "border-white/40 text-white" : "border-line text-navy dark:text-cream"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-[#0f0f0f] border-b border-line`}
      >
        <div className="container-x py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {NAV.map((n) => {
            const sub = SUBMENUS[n.to];
            if (sub) {
              const isOpen = hover === n.to;
              return (
                <div key={n.to} className="border-b border-line/60">
                  <button
                    type="button"
                    onClick={() => setHover(isOpen ? null : n.to)}
                    className="w-full flex items-center justify-between py-3 text-base font-display tracking-wide text-navy dark:text-cream/85"
                    aria-expanded={isOpen}
                  >
                    {n.label}
                    <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  {isOpen && (
                    <div className="pb-3 pl-3 flex flex-col gap-1">
                      {sub.map((s) => (
                        <a key={s.to} href={s.to} className="py-2 text-sm text-charcoal dark:text-cream/70 hover:text-gold transition">
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={n.to}
                to={n.to}
                className="py-3 text-base font-display tracking-wide text-navy dark:text-cream/85 hover:text-gold border-b border-line/60"
                activeProps={{ className: "text-gold font-semibold" }}
              >
                {n.label}
              </Link>
            );
          })}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gold text-navy px-5 py-3 text-xs font-semibold">
              Consultation <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gold/40 text-navy dark:text-cream px-5 py-3 text-xs font-semibold">
              <Phone className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
          {/* Mobile theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="mt-2 flex items-center gap-2 py-2.5 text-sm text-charcoal dark:text-cream/70 hover:text-gold transition"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
