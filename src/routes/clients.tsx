import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, BarChart3 } from "lucide-react";
import { INDUSTRY_CLIENTS, INDUSTRIES } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Success Stories — Primera Karya Sinergia" },
      { name: "description", content: "Trusted by organizations across banking, insurance, telecommunications, SOEs, and corporate enterprises across Indonesia." },
      { property: "og:title", content: "Primera — Clients & Success Stories" },
      { property: "og:description", content: "Industries, partners, and learning impact." },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <section className="bg-soft pt-24 pb-16 md:pt-28">
        <div className="container-x max-w-4xl">
          <Reveal>
            <SectionLabel gold>Clients & Success Stories</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl mt-5 leading-[0.98] text-navy font-extrabold text-balance">
              Trusted by organizations across industries
            </h1>
            <p className="mt-6 text-navy/65 text-lg leading-relaxed max-w-2xl">
              Primera partners with leading Indonesian enterprises to build people capability, sales execution, and measurable performance impact.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="partners" className="bg-white py-20">
        <div className="container-x">
          <Reveal>
            <SectionLabel>Our Partners</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl mt-5 text-navy font-extrabold leading-[1.05]">A diverse client portfolio</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRY_CLIENTS.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.05}>
                <div className="rounded-2xl bg-soft border border-navy/10 p-6 h-full hover:border-gold/40 transition">
                  <p className="font-display text-sm uppercase tracking-wider text-gold font-bold">{g.group}</p>
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    {g.names.map((n) => (
                      <span key={n} className="text-sm text-navy/75 font-medium after:content-['·'] after:ml-3 after:text-navy/30 last:after:hidden">{n}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-navy/50">
            Logos and client names are displayed for portfolio and credibility purposes where permitted.
          </p>
        </div>
      </section>

      <section id="industries" className="bg-soft py-20">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>Industries We Serve</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl mt-5 text-navy font-extrabold leading-[1.05]">Built for Indonesian business realities</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.05}>
                <div className="rounded-2xl bg-white border border-navy/10 p-7 h-full hover:border-gold/40 transition">
                  <div className="h-px w-10 bg-gold mb-5" />
                  <h3 className="font-display text-lg text-navy font-bold">{ind.title}</h3>
                  <p className="mt-3 text-sm text-navy/65 leading-relaxed">{ind.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-navy text-white py-20">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-6">
            <SectionLabel gold>Learning Impact</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl mt-5 leading-[1.05] font-extrabold">Measurable through Kirkpatrick Level 1–4</h2>
            <p className="mt-6 text-white/75 leading-relaxed">
              Every Primera engagement is designed with structured evaluation — from reaction and learning to behavior change and business results.
            </p>
            <div className="mt-8 space-y-3">
              {["L1 · Reaction — participant satisfaction and relevance", "L2 · Learning — knowledge and skill acquisition", "L3 · Behavior — workplace application post-training", "L4 · Results — business performance impact"].map((t) => (
                <div key={t} className="flex items-start gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />{t}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="rounded-3xl border border-gold/20 bg-white/[0.04] p-8">
              <BarChart3 className="h-8 w-8 text-gold" />
              <p id="stories" className="mt-6 font-display text-2xl font-bold leading-snug">Success Stories</p>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Detailed case studies with client outcomes are shared confidentially upon request, in line with client confidentiality agreements.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold text-navy px-5 py-2.5 text-sm font-bold hover:bg-cream dark:hover:bg-gold/70 transition">
                Request Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
