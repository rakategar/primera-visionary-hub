const images = import.meta.glob<{ default: string }>("/src/assets/logos/*.png", { eager: true });

const allLogos = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, m]) => m.default);

const third = Math.ceil(allLogos.length / 3);
const ROWS: [string[], string[], string[]] = [
  allLogos.slice(0, third),
  allLogos.slice(third, third * 2),
  allLogos.slice(third * 2),
];

function MarqueeRow({ logos, reverse = false, duration }: { logos: string[]; reverse?: boolean; duration: number }) {
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
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-none h-14 w-[7.5rem] rounded-xl border border-navy/8 dark:border-white/8 bg-white dark:bg-[#1c1c1c] flex items-center justify-center p-3 shadow-sm"
          >
            <img src={src} alt="" className="h-full w-full object-contain dark:brightness-90" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div className="marquee-track space-y-4">
      <MarqueeRow logos={ROWS[0]} duration={38} />
      <MarqueeRow logos={ROWS[1]} reverse duration={50} />
      <MarqueeRow logos={ROWS[2]} duration={43} />
    </div>
  );
}
