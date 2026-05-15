import { createFileRoute } from "@tanstack/react-router";
import { SubpageHero, SubpageCTA } from "@/components/SubpageHero";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { useLang } from "@/lib/i18n";
import hero from "@/assets/impact-workshop.jpg";

const VALUES = [
  { letter: "P", title: "Potential Unlocking", body: "We believe everyone has great potential ready to grow and create extraordinary impact.", practical: "We help people discover strengths, shift mindset, and apply capability in real work." },
  { letter: "R", title: "Result with Integrity", body: "Results matter, but integrity in every process defines who we are.", practical: "We pursue business outcomes without compromising ethics, trust, and professionalism." },
  { letter: "I", title: "Impactful Learning", body: "We design learning experiences that go beyond classrooms — inspiring mindset and behavioral change.", practical: "Training must lead to practical application, not only attendance." },
  { letter: "M", title: "Meaningful Collaboration", body: "We thrive on authentic teamwork, mutual support and shared inspiration.", practical: "We work as partners with clients, leaders, participants, and stakeholders." },
  { letter: "E", title: "Excellence in Execution", body: "We strive for lasting impact — building capabilities that drive personal, organizational, and social growth.", practical: "We pay attention to detail, delivery quality, follow-up, and measurable improvement." },
  { letter: "R", title: "Relevant Innovation", body: "We continuously innovate with contextual, industry-relevant approaches.", practical: "We adapt methods, tools, and digital support to fit modern business realities." },
  { letter: "A", title: "Adaptive Mindset", body: "We foster agility and continuous learning in the face of change.", practical: "We help people and organizations stay resilient, flexible, and ready for transformation." },
];

export const Route = createFileRoute("/about/core-values")({
  head: () => ({
    meta: [
      { title: "Core Values — Primera Karya Sinergia" },
      { name: "description", content: "PRIMERA values shape how we design learning, work with clients, and deliver measurable impact." },
      { property: "og:title", content: "Core Values — PRIMERA" },
      { property: "og:description", content: "Potential, Result, Impact, Meaningful, Excellence, Relevant, Adaptive." },
    ],
  }),
  component: ValuesPage,
});

function ValuesPage() {
  const { lang } = useLang();
  return (
    <>
      <SubpageHero
        eyebrow={lang === "id" ? "Nilai-Nilai Kami" : "Core Values"}
        title={lang === "id" ? <>Nilai-nilai di balik <span className="italic font-serif-italic font-normal text-gold">cara kami mengembangkan orang.</span></> : <>The values behind <span className="italic font-serif-italic font-normal text-gold">the way we grow people.</span></>}
        subtitle={lang === "id" ? "Nilai-nilai PRIMERA membentuk cara kami merancang pembelajaran, bekerja dengan klien, memfasilitasi transformasi, dan memberikan dampak terukur." : "PRIMERA values shape how we design learning, work with clients, facilitate transformation, and deliver measurable impact."}
        image={hero}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>P · R · I · M · E · R · A</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold max-w-3xl">{lang === "id" ? "Tujuh nilai. Satu filosofi operasional." : "Seven values. One operating philosophy."}</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className={`h-full rounded-2xl border border-line p-8 lift hover:border-orange/40 ${i % 2 === 0 ? "bg-white" : "bg-soft"}`}>
                  <div className="flex items-start gap-6">
                    <div className="font-display text-6xl md:text-7xl text-orange font-extrabold leading-none shrink-0">{v.letter}</div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-navy font-bold uppercase tracking-wide">{v.title}</h3>
                      <p className="mt-3 text-charcoal leading-relaxed">{v.body}</p>
                      <p className="mt-4 text-sm text-charcoal/75 italic border-l-2 border-orange/40 pl-4">
                        <span className="not-italic font-bold text-navy/80">In practice: </span>{v.practical}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubpageCTA title={lang === "id" ? "Bangun Budaya Pembelajaran Berbasis Nilai" : "Build a Values-Driven Learning Culture"} label={lang === "id" ? "Hubungi Kami" : "Talk to Us"} />
    </>
  );
}
