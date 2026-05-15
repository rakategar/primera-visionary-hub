import { createFileRoute } from "@tanstack/react-router";
import { SubpageHero, SubpageCTA } from "@/components/SubpageHero";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import hero from "@/assets/hero-corporate.jpg";

export const Route = createFileRoute("/about_/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — Primera Karya Sinergia" },
      { name: "description", content: "A people development partner built for measurable business growth across Indonesian enterprises." },
      { property: "og:title", content: "Who We Are — Primera Karya Sinergia" },
      { property: "og:description", content: "Integrated people development, recruitment, training, and business strategy since 2021." },
    ],
  }),
  component: WhoWeArePage,
});

function WhoWeArePage() {
  const { lang } = useLang();
  const helps = [
    ["Stronger Leadership Capability", "Build leaders who can think strategically, coach intentionally, and drive performance."],
    ["Better Sales Performance", "Develop consultative selling, advisory mindset, and pipeline discipline."],
    ["Smarter Talent Decisions", "Hire, map, and develop the right people with assessment-driven insight."],
    ["Sustainable Learning Culture", "Embed practical learning into daily work and long-term growth."],
  ];
  const trust = [
    "Structured end-to-end learning process",
    "Certified facilitators and senior advisors",
    "BFSI, insurance, sales, and leadership expertise",
    "Practical, relevant, measurable learning design",
  ];
  return (
    <>
      <SubpageHero
        eyebrow={lang === "id" ? "Tentang Kami" : "Who We Are"}
        title={lang === "id" ? <>Mitra pengembangan SDM untuk <span className="italic font-serif-italic font-normal text-gold">pertumbuhan bisnis yang terukur.</span></> : <>A people development partner built for <span className="italic font-serif-italic font-normal text-gold">measurable business growth.</span></>}
        subtitle={lang === "id" ? "Primera Karya Sinergia adalah perusahaan konsultasi manajemen bisnis dan pengembangan SDM yang membantu organisasi membangun tim berkinerja tinggi, profesional siap masa depan, dan kinerja berkelanjutan melalui solusi pembelajaran praktis, pelatihan, rekrutmen, distribusi, dan strategi bisnis." : "Primera Karya Sinergia is a business management and people development consulting firm helping organizations build high-performing teams, future-ready professionals, and sustainable performance through practical learning, coaching, recruitment, distribution, and business strategy solutions."}
        image={hero}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>{lang === "id" ? "Pengenalan Perusahaan" : "Company Introduction"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-4xl text-navy font-extrabold leading-tight">{lang === "id" ? "Solusi terpadu untuk SDM dan kinerja." : "Integrated solutions for people and performance."}</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 text-charcoal leading-relaxed text-base md:text-[17px] space-y-5">
            <p>Primera Karya Sinergia is a business management and people development consulting firm committed to delivering integrated solutions in recruitment, training, distribution and business strategy.</p>
            <p>Since its establishment in 2021, Primera has been dedicated to helping organizations build high-performing teams and develop future-ready professionals through tailored programs in training, coaching and strategic learning.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>{lang === "id" ? "Keyakinan Kami" : "Our Belief"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold max-w-4xl leading-tight">
              Every transformation begins with people — mindset, courage, willingness to learn, and the ability to turn learning into real business behavior.
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>{lang === "id" ? "Yang Kami Bantu Capai" : "What We Help Organizations Achieve"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold">{lang === "id" ? "Hasil yang penting bagi bisnis." : "Outcomes that matter to the business."}</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {helps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white border border-line p-7 lift hover:border-orange/40">
                  <div className="h-10 w-10 rounded-lg bg-orange/10 text-orange flex items-center justify-center font-display font-bold">{i + 1}</div>
                  <h3 className="mt-5 font-display text-lg text-navy font-bold">{t}</h3>
                  <p className="mt-3 text-sm text-charcoal/85 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel gold>{lang === "id" ? "Mengapa Perusahaan Mempercayai Primera" : "Why Companies Trust Primera"}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-extrabold leading-tight">{lang === "id" ? "Dipimpin praktisi. Berorientasi hasil." : "Practitioner-led. Outcome-driven."}</h2>
          </Reveal>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {trust.map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <li className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-white/90 leading-relaxed">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SubpageCTA title={lang === "id" ? "Mulai Percakapan Strategis" : "Start a Strategic Conversation"} body={lang === "id" ? "Ceritakan tujuan SDM dan kinerja Anda — kami akan menunjukkan apa yang mungkin dicapai." : "Tell us about your people and performance goals — we'll show you what's possible."} label={lang === "id" ? "Jadwalkan Konsultasi" : "Schedule Consultation"} />
    </>
  );
}
