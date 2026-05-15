import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Lightbulb, Compass, Target, Briefcase, Cpu } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Primera Karya Sinergia" },
      { name: "description", content: "Recruitment, training, leadership development, sales capability, business consulting, and AI-supported digital learning." },
      { property: "og:title", content: "Primera Services" },
      { property: "og:description", content: "End-to-end people development services for Indonesian enterprises." },
    ],
  }),
  component: ServicesPage,
});

const ICONS = [Users, Lightbulb, Compass, Target, Briefcase, Cpu];

function ServicesPage() {
  const { lang } = useLang();
  return (
    <>
      <section className="bg-cream pt-24 pb-16">
        <div className="container-x">
          <Reveal>
            <SectionLabel>{lang === "id" ? "Layanan Kami" : "Services"}</SectionLabel>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9] max-w-4xl text-balance">
              {lang === "id" ? "Layanan terpadu untuk kinerja berbasis SDM" : "Integrated services for people-driven performance"}
            </h1>
            <p className="mt-8 max-w-2xl text-ink/70 leading-relaxed">
              {lang === "id" ? "Kami merancang dan memberikan solusi menyeluruh di bidang rekrutmen, pelatihan, kepemimpinan, kemampuan penjualan, konsultasi, dan pembelajaran digital — dirancang untuk menciptakan dampak bisnis terukur." : "We design and deliver end-to-end solutions across recruitment, training, leadership, sales capability, consulting, and digital learning — built to create measurable business impact."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-x grid md:grid-cols-2 gap-px bg-line border border-line rounded-3xl overflow-hidden">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <div className="group bg-white p-8 md:p-10 h-full lift hover:bg-cream/60">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-ink text-cream flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition"><Icon className="h-5 w-5" /></div>
                    <span className="eyebrow text-ink/40">0{i + 1}</span>
                  </div>
                  <h2 className="mt-6 font-display text-2xl md:text-3xl uppercase tracking-wide">{s.title}</h2>
                  <p className="mt-3 text-ink/70 leading-relaxed">{s.body}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4">{lang === "id" ? "Diskusikan layanan ini" : "Discuss this service"} <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ink text-cream py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl">{lang === "id" ? "Siap merancang keterlibatan Anda?" : "Ready to design your engagement?"}</h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream transition">
              {lang === "id" ? "Jadwalkan sesi discovery" : "Schedule a discovery call"} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
