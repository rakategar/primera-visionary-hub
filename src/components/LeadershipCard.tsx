import { Reveal } from "./Reveal";

export type Leader = {
  name: string;
  role: string;
  credentials: string;
  expertise: string;
  photo?: string;
};

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export function LeadershipCard({ leader, delay = 0 }: { leader: Leader; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group h-full overflow-hidden rounded-2xl bg-white dark:bg-[#141414] border border-line shadow-[0_4px_24px_-12px_rgba(0,45,98,0.18)] dark:shadow-[0_4px_24px_-12px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_-18px_rgba(201,162,39,0.35)] hover:border-gold/40">
        {/* Photo area — vertical 4:5 */}
        <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-navy via-navy to-charcoal overflow-hidden">
          {leader.photo ? (
            <img src={leader.photo} alt={leader.name} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-display text-7xl md:text-8xl text-white/15 font-bold tracking-tight">
                {initials(leader.name)}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            </div>
          )}
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange to-gold" />
        </div>

        <div className="p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange">{leader.role}</p>
          <h3 className="mt-2 font-display text-lg text-navy dark:text-cream font-bold leading-tight">{leader.name}</h3>
          <p className="mt-3 text-[11px] text-charcoal/70 dark:text-cream/50 uppercase tracking-wider font-semibold">{leader.credentials}</p>
          <p className="mt-3 text-sm text-charcoal dark:text-cream/75 leading-relaxed">{leader.expertise}</p>
        </div>
      </article>
    </Reveal>
  );
}
