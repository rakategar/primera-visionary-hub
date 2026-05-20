import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const images = import.meta.glob<{ default: string }>("/src/assets/logos/*.png", { eager: true });

const allLogos = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, m]) => ({ src: m.default, name: formatName(path) }));

function formatName(path: string): string {
  const base = path.split("/").pop()?.replace(".png", "") ?? "";
  return base.replace(/([A-Z0-9])(?=[A-Z][a-z])|([a-z])(?=[A-Z])/g, "$1$2 ").trim();
}

const third = Math.ceil(allLogos.length / 3);
const ROWS = [
  allLogos.slice(0, third),
  allLogos.slice(third, third * 2),
  allLogos.slice(third * 2),
];

function LogoModal({ src, name, onClose }: { src: string; name: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy/60 dark:bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-[#1a1a1a] rounded-2xl p-10 shadow-2xl flex flex-col items-center gap-5 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal/50 dark:text-cream/40 hover:text-navy dark:hover:text-cream transition"
          aria-label="Tutup"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="h-28 w-full flex items-center justify-center">
          <img src={src} alt={name} className="max-h-full max-w-full object-contain dark:brightness-90" />
        </div>
        <p className="text-sm font-semibold text-navy dark:text-cream text-center">{name}</p>
      </div>
    </div>
  );
}

function MarqueeRow({
  logos, reverse = false, duration, onLogoClick,
}: {
  logos: typeof allLogos;
  reverse?: boolean;
  duration: number;
  onLogoClick: (logo: { src: string; name: string }) => void;
}) {
  const doubled = [...logos, ...logos];
  return (
    <div
      className="overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div
        className={reverse ? "marquee-reverse flex gap-4" : "marquee flex gap-4"}
        style={{ animationDuration: `${duration}s`, width: "max-content" }}
      >
        {doubled.map((logo, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onLogoClick(logo)}
            className="flex-none h-14 w-[7.5rem] rounded-xl border border-navy/8 dark:border-white/8 bg-white dark:bg-[#1c1c1c] flex items-center justify-center p-3 shadow-sm hover:border-gold/50 hover:shadow-md transition cursor-pointer"
            title={logo.name}
          >
            <img src={logo.src} alt={logo.name} className="h-full w-full object-contain dark:brightness-90" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const [selected, setSelected] = useState<{ src: string; name: string } | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="marquee-track space-y-4">
        <MarqueeRow logos={ROWS[0]} duration={38} onLogoClick={setSelected} />
        <MarqueeRow logos={ROWS[1]} reverse duration={50} onLogoClick={setSelected} />
        <MarqueeRow logos={ROWS[2]} duration={43} onLogoClick={setSelected} />
      </div>
      {selected && <LogoModal src={selected.src} name={selected.name} onClose={close} />}
    </>
  );
}
