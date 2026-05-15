import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from "lucide-react";
import { SITE } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import logo from "@/assets/primera-logo.png";

export function Footer() {
  const { t, lang, setLang } = useLang();

  const cols = [
    {
      titleKey: "footer.col.about",
      links: [
        ["footer.link.who", "/about"],
        ["footer.link.vm", "/about#vm"],
        ["footer.link.values", "/about#values"],
        ["footer.link.leadership", "/about#leadership"],
        ["footer.link.journey", "/about#journey"],
      ] as const,
    },
    {
      titleKey: "footer.col.services",
      links: [
        ["footer.link.lm", "/services#leadership"],
        ["footer.link.soft", "/services#soft-skills"],
        ["footer.link.sales", "/services#sales"],
        ["footer.link.talent", "/services#talent"],
        ["footer.link.facilitator", "/services#facilitator"],
      ] as const,
    },
    {
      titleKey: "footer.col.products",
      links: [
        ["footer.link.crm", "/products/crm-act"],
        ["footer.link.l2p", "/products#l2p"],
        ["footer.link.assessment", "/products#assessment"],
      ] as const,
    },
    {
      titleKey: "footer.col.resources",
      links: [
        ["footer.link.clients", "/clients"],
        ["footer.link.insights", "/insights"],
        ["footer.link.contact", "/contact"],
      ] as const,
    },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt={SITE.short} className="h-10 w-auto brightness-0 invert" />
              <div>
                <p className="font-display text-sm tracking-[0.16em] uppercase font-bold">Primera Karya Sinergia</p>
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">Empowering · Elevating</p>
              </div>
            </div>
            <p className="mt-6 text-white/70 text-sm leading-relaxed max-w-sm">
              {t("footer.tagline")} {SITE.founded}.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/75">
              <div className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{SITE.address}</span></div>
              <a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-gold transition"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />{SITE.email}</a>
              <a href={`tel:${SITE.phoneOki.replace(/\s/g,"")}`} className="flex gap-3 hover:text-gold transition"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />{SITE.phoneOki}</a>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-gold text-navy px-5 py-2.5 text-xs font-semibold hover:bg-cream dark:hover:bg-gold/70 transition">
              {t("footer.cta")} <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.titleKey}>
                <h4 className="font-display text-[12px] tracking-[0.18em] uppercase text-gold font-semibold mb-4">{t(c.titleKey)}</h4>
                <ul className="space-y-2.5">
                  {c.links.map(([key, to]) => (
                    <li key={key}>
                      <a href={to} className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 inline-block transition">{t(key)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© 2026 {SITE.name}. {t("footer.rights")}</p>
          <p className="font-serif-italic text-white/70">{t("footer.taglineBottom")}</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">{t("footer.privacy")}</Link>
            <Link to="/terms" className="hover:text-white">{t("footer.terms")}</Link>
            {/* Language toggle */}
            <button
              type="button"
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold text-white/70 hover:border-gold hover:text-gold transition"
            >
              <Globe className="h-3 w-3" />
              {lang === "id" ? "EN" : "ID"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
