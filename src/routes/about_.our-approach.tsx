import { createFileRoute } from "@tanstack/react-router";
import { SubpageHero, SubpageCTA } from "@/components/SubpageHero";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import hero from "@/assets/programs-leadership.jpg";

export const Route = createFileRoute("/about/our-approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Primera Karya Sinergia" },
      { name: "description", content: "Action-oriented, experiential learning designed for measurable behavior change." },
      { property: "og:title", content: "Our Approach — Primera" },
      { property: "og:description", content: "Learning designed for action, reflection, and measurable change." },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  const { lang } = useLang();
  const principles = [
    ["Action Oriented", "Every participant is encouraged to act, experience and commit to applying new skills in daily work."],
    ["Experiential Learning", "We use hands-on methods, allowing participants to learn through experience, reflection, and insight."],
    ["Self Discovery", "Participants identify their strengths and unique potential through guided self-exploration."],
    ["Active Participation", "Sessions are engaging, interactive and respectful — everyone learns and contributes."],
  ];
  const journey = [
    ["Assess", "Diagnose business challenges, role profiles, and performance gaps."],
    ["Design", "Build contextual learning journeys aligned with culture and business goals."],
    ["Deliver", "Facilitate intensive, practical, experiential workshops."],
    ["Accredit", "Build understanding and certify capability through accreditation."],
    ["Reinforce", "Follow-up, coaching cadence, and behavior tracking."],
    ["Evaluate", "Measure impact at all four Kirkpatrick levels."],
  ];
  const eval4 = [
    ["L1", "Reaction", "Participant satisfaction and engagement."],
    ["L2", "Understanding", "Knowledge gain and accreditation."],
    ["L3", "Application", "Behavior change observed in the workplace."],
    ["L4", "Business Impact", "Measurable performance outcomes."],
  ];
  const why = [
    "Participants learn by doing, not just listening.",
    "Leaders gain clearer post-training visibility.",
    "Learning is aligned to performance, not just content.",
    "Follow-up strengthens accountability.",
    "Evaluation connects training to real business results.",
  ];
  return (
    <>
      <SubpageHero
        eyebrow={lang === "id" ? "Pendekatan Kami" : "Our Approach"}
        title={lang === "id" ? <>Pembelajaran dirancang untuk tindakan, refleksi, dan <span className="italic font-serif-italic font-normal text-gold">perubahan terukur.</span></> : <>Learning designed for action, reflection, and <span className="italic font-serif-italic font-normal text-gold">measurable change.</span></>}
        subtitle={lang === "id" ? "Primera menggabungkan pembelajaran berorientasi tindakan, metode experiential, self-discovery, dan partisipasi aktif untuk membantu peserta mengubah wawasan menjadi perilaku kerja." : "Primera combines action-oriented learning, experiential methods, self-discovery, and active participation to help participants turn insight into workplace behavior."}
        image={hero}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>{lang === "id" ? "Gambaran Pendekatan" : "Approach Overview"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-4xl text-navy font-extrabold leading-tight">{lang === "id" ? "Melampaui pembelajaran di kelas." : "Beyond classroom delivery."}</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 text-charcoal leading-relaxed text-base md:text-[17px] space-y-5">
            <p>Primera does not treat training as a one-time classroom activity. We design learning journeys that connect business needs, participant engagement, practical application, and measurable follow-up.</p>
            <p>Every program is built to translate insight into behavior — and behavior into business performance.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>{lang === "id" ? "Empat Prinsip Pembelajaran" : "Four Learning Principles"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold">{lang === "id" ? "Cara orang dewasa belajar." : "How adults actually learn."}</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-white border border-line p-7 lift hover:border-orange/40">
                  <div className="font-display text-3xl text-orange font-extrabold">0{i + 1}</div>
                  <h3 className="mt-4 font-display text-lg text-navy font-bold">{t}</h3>
                  <p className="mt-3 text-sm text-charcoal/85 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>{lang === "id" ? "Perjalanan Pembelajaran ke Kinerja" : "Learning-to-Performance Journey"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold max-w-3xl">{lang === "id" ? "Enam tahap dari diagnosis menuju dampak." : "A six-stage path from diagnosis to impact."}</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            {journey.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full rounded-xl bg-soft border border-line p-5">
                  <div className="text-xs font-bold text-orange">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-base text-navy font-bold">{t}</h3>
                  <p className="mt-2 text-xs text-charcoal/80 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>{lang === "id" ? "Model Evaluasi" : "Evaluation Model"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-extrabold max-w-3xl">Kirkpatrick Levels 1–4.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {eval4.map(([n, t, d]) => (
              <Reveal key={n}>
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="font-display text-4xl font-extrabold text-gold">{n}</div>
                  <h3 className="mt-3 font-display text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-white/80">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>{lang === "id" ? "Mengapa Pendekatan Ini Berhasil" : "Why This Approach Works"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-4xl text-navy font-extrabold leading-tight">{lang === "id" ? "Karena perilaku — bukan konten — yang mendorong hasil." : "Because behavior — not content — drives results."}</h2>
          </Reveal>
          <ul className="lg:col-span-7 space-y-4">
            {why.map((w, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <li className="flex gap-3 border-b border-line pb-4">
                  <CheckCircle2 className="h-5 w-5 text-orange mt-0.5 shrink-0" />
                  <span className="text-charcoal leading-relaxed">{w}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SubpageCTA title={lang === "id" ? "Rancang Perjalanan Pembelajaran Bersama Primera" : "Design a Learning Journey With Primera"} label={lang === "id" ? "Jadwalkan Konsultasi" : "Schedule Consultation"} />
    </>
  );
}
