import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { INSIGHTS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Primera Karya Sinergia" },
      { name: "description", content: "Editorial perspectives on leadership, sales performance, talent, AI productivity, and learning evaluation in Indonesian organizations." },
      { property: "og:title", content: "Primera Insights" },
      { property: "og:description", content: "Thought leadership on people development and business performance." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const { lang } = useLang();
  const [openSlug, setOpen] = useState<string | null>(null);
  const article = INSIGHTS.find((a) => a.slug === openSlug) ?? null;
  const [feature, ...rest] = INSIGHTS;

  return (
    <>
      <section className="bg-cream pt-24 pb-12">
        <div className="container-x">
          <Reveal>
            <SectionLabel>{lang === "id" ? "Wawasan" : "Insights"}</SectionLabel>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9] max-w-4xl text-balance">
              {lang === "id" ? "Perspektif editorial untuk pemimpin berbasis SDM" : "Editorial perspectives for people-driven leaders"}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-x">
          <Reveal>
            <button onClick={() => setOpen(feature.slug)} className="group block text-left w-full rounded-3xl bg-ink text-cream p-8 md:p-12 relative overflow-hidden lift">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative">
                <span className="eyebrow text-gold">{feature.category} · Featured</span>
                <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] max-w-3xl">{feature.title}</h2>
                <p className="mt-6 max-w-xl text-cream/75">{feature.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm">{feature.read} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </button>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.05}>
                <button onClick={() => setOpen(a.slug)} className="group text-left block w-full rounded-2xl border border-line bg-white p-6 h-full lift hover:border-ink/30">
                  <span className="inline-block rounded-full bg-cream px-3 py-1 text-[10px] uppercase tracking-wider text-ink/70">{a.category}</span>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-wide leading-tight">{a.title}</h3>
                  <p className="mt-3 text-sm text-ink/65">{a.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-ink/50">
                    <span>{a.read}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition text-ink" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
              Want briefings tailored to your industry? Talk to us. <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Article modal */}
      {article && (
        <div className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in" onClick={() => setOpen(null)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-cream w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl p-8 md:p-12 relative">
            <button onClick={() => setOpen(null)} className="absolute top-4 right-4 h-9 w-9 rounded-full border border-line flex items-center justify-center hover:bg-white" aria-label="Close"><X className="h-4 w-4" /></button>
            <span className="eyebrow text-ink/60">{article.category}</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">{article.title}</h2>
            <p className="mt-4 text-ink/70">{article.excerpt}</p>
            <div className="mt-8 prose prose-sm max-w-none text-ink/75 space-y-4">
              <p>This is a preview of an upcoming Primera editorial piece. Full publication is coming soon — request the briefing directly and we'll send the executive summary to your inbox.</p>
              <p>Our editorial perspectives translate global research into the Indonesian operating reality — for leaders making decisions about people, sales, and capability today.</p>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-sm">Request the full briefing <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      )}
    </>
  );
}
