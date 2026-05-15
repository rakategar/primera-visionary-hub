import { createFileRoute } from "@tanstack/react-router";
import { SubpageHero, SubpageCTA } from "@/components/SubpageHero";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { useLang } from "@/lib/i18n";
import hero from "@/assets/hero-consulting.jpg";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Primera Karya Sinergia" },
      { name: "description", content: "Guided by purpose. Built for sustainable growth — Primera's vision and mission." },
      { property: "og:title", content: "Vision & Mission — Primera" },
      { property: "og:description", content: "Empower people, deliver innovative solutions, build a culture of excellence." },
    ],
  }),
  component: VMPage,
});

function VMPage() {
  const { lang } = useLang();
  const missions = [
    "Empower people and organizations to unlock their highest potential and achieve sustainable growth.",
    "Deliver innovative learning and consulting solutions that create measurable business impact.",
    "Build a culture of excellence and integrity that inspires continuous improvement and long-term success.",
  ];
  const practice = [
    ["Diagnose Real Business Needs", "Understand role profiles, performance gaps, and strategic priorities."],
    ["Design Contextual Learning Journeys", "Map programs to culture, business reality, and audience maturity."],
    ["Facilitate Practical Experiences", "Action-oriented and experiential — built for application."],
    ["Reinforce & Evaluate Behavior", "Follow-up, coaching cadence, and impact measurement."],
  ];
  return (
    <>
      <SubpageHero
        eyebrow={lang === "id" ? "Visi & Misi" : "Vision & Mission"}
        title={lang === "id" ? <>Dipandu oleh tujuan. <span className="italic font-serif-italic font-normal text-gold">Dibangun untuk pertumbuhan berkelanjutan.</span></> : <>Guided by purpose. <span className="italic font-serif-italic font-normal text-gold">Built for sustainable growth.</span></>}
        subtitle={lang === "id" ? "Primera hadir untuk membantu orang dan organisasi membuka potensi, menciptakan dampak bisnis terukur, dan membangun budaya keunggulan serta integritas." : "Primera exists to help people and organizations unlock potential, create measurable business impact, and build a culture of excellence and integrity."}
        image={hero}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <SectionLabel>{lang === "id" ? "Visi Kami" : "Our Vision"}</SectionLabel>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="font-display text-2xl md:text-4xl text-navy font-extrabold leading-tight">
              "To be the most trusted strategic partner in developing people and accelerating business growth — through excellence, innovation and impactful execution."
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>{lang === "id" ? "Misi Kami" : "Our Mission"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold">{lang === "id" ? "Tiga komitmen yang memandu setiap keterlibatan." : "Three commitments that guide every engagement."}</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {missions.map((m, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="h-full rounded-2xl bg-white border border-line p-7 lift hover:border-orange/40">
                  <div className="font-display text-5xl text-orange font-extrabold">0{i + 1}</div>
                  <p className="mt-5 text-charcoal leading-relaxed">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>{lang === "id" ? "Misi Kami dalam Praktik" : "How Our Mission Works in Practice"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold max-w-3xl">{lang === "id" ? "Tujuan yang diterjemahkan ke dalam pelaksanaan sehari-hari." : "Purpose translated into daily delivery."}</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {practice.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-soft border border-line p-7">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange">Step 0{i + 1}</p>
                  <h3 className="mt-3 font-display text-lg text-navy font-bold">{t}</h3>
                  <p className="mt-3 text-sm text-charcoal/85 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubpageCTA title={lang === "id" ? "Diskusikan Agenda Pertumbuhan Organisasi Anda" : "Discuss Your Organization's Growth Agenda"} label={lang === "id" ? "Jadwalkan Konsultasi" : "Schedule Consultation"} />
    </>
  );
}
