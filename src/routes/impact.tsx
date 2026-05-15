import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import impactImg from "@/assets/impact-workshop.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Primera Karya Sinergia" },
      { name: "description", content: "Learning-to-performance impact: Kirkpatrick Level 1–4 evaluation, behavior change, and measurable business outcomes." },
      { property: "og:title", content: "Primera Impact" },
      { property: "og:description", content: "Learning connected to business performance." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  const { lang } = useLang();
  const levels = [
    { l: "L1", t: "Reaction", d: "How participants respond to the learning experience." },
    { l: "L2", t: "Learning", d: "What participants now know — verified through accreditation programs." },
    { l: "L3", t: "Behavior", d: "How behavior changes on the job — coached and tracked." },
    { l: "L4", t: "Results", d: "What changes in the business — outcomes against KPIs." },
  ];

  return (
    <>
      <section className="bg-cream pt-24 pb-16">
        <div className="container-x">
          <Reveal>
            <SectionLabel>{lang === "id" ? "Dampak" : "Impact"}</SectionLabel>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9] max-w-4xl text-balance">
              {lang === "id" ? "Pembelajaran yang menjadi kinerja" : "Learning that becomes performance"}
            </h1>
            <p className="mt-8 max-w-2xl text-ink/70 leading-relaxed">
              Training is not a finish line — it's the start of a behavior journey. We design every engagement to evaluate impact up to Level 4 (Kirkpatrick).
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={impactImg} alt="Indonesian leadership workshop" className="w-full h-[55vh] object-cover" loading="lazy" />
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {levels.map((lv, i) => (
              <Reveal key={lv.l} delay={i * 0.06}>
                <div className="rounded-2xl border border-line bg-white p-7 h-full lift">
                  <div className="font-display text-5xl text-gold leading-none">{lv.l}</div>
                  <h3 className="mt-5 font-display text-xl uppercase tracking-wide">{lv.t}</h3>
                  <p className="mt-3 text-sm text-ink/65">{lv.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>{lang === "id" ? "Model Pembelajaran ke Kinerja" : "Learning-to-Performance Model"}</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl mt-6 max-w-3xl leading-tight">{lang === "id" ? "Dari kelas ke hasil bisnis — tanpa jarak." : "From classroom to business outcome — without the gap."}</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-cream/10 rounded-2xl overflow-hidden border border-cream/10">
            {[
              ["Before", "Diagnose role profiles, performance gaps, and target behaviors."],
              ["During", "Deliver intensive workshops + accreditation to lock learning."],
              ["After", "Coach, track activity, and review against business KPIs."],
            ].map(([t, d]) => (
              <div key={t as string} className="bg-ink p-8">
                <p className="eyebrow text-gold">{t}</p>
                <p className="mt-4 text-cream/80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>{lang === "id" ? "Tema Hasil" : "Outcome Themes"}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-6 max-w-3xl">{lang === "id" ? "Di mana keterlibatan biasanya menciptakan nilai" : "Where engagements typically create value"}</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["Sales productivity", "Stronger pipeline discipline and consistent follow-up cadence."],
              ["Leadership pipeline", "First-time managers and senior leaders ready to lead change."],
              ["Sales advisory quality", "Wealth and bancassurance advisors aligned with client outcomes."],
              ["Talent decisions", "Better hiring and role-fit decisions through structured assessment."],
              ["Facilitator capability", "L&D teams able to design and run modern learning experiences."],
              ["Behavior change", "On-the-job application reinforced through coaching and review."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-line bg-white p-6 lift">
                <div className="h-px w-10 bg-gold mb-4" />
                <h3 className="font-display text-xl uppercase tracking-wide">{t}</h3>
                <p className="mt-2 text-sm text-ink/65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl">{lang === "id" ? "Mari ukur yang benar-benar penting." : "Let's measure what matters."}</h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream transition">
              {lang === "id" ? "Rancang kerangka evaluasi" : "Design an evaluation framework"} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
