import { createFileRoute } from "@tanstack/react-router";
import { SubpageHero, SubpageCTA } from "@/components/SubpageHero";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { LeadershipTieredSection } from "@/components/LeadershipTieredSection";
import { CREDENTIALS } from "@/lib/site";
import hero from "@/assets/about-leadership.jpg";

export const Route = createFileRoute("/about/leadership-facilitators")({
  head: () => ({
    meta: [
      { title: "Leadership & Facilitators — Primera Karya Sinergia" },
      { name: "description", content: "Senior practitioners and certified experts in leadership, BFSI, sales, governance and learning." },
      { property: "og:title", content: "Leadership & Facilitators — Primera" },
      { property: "og:description", content: "Practitioner-led learning that resonates with real business reality." },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  const expertise = [
    "Leadership Development", "Sales Productivity", "Wealth Management",
    "Financial Services", "Insurance", "Governance", "Coaching",
    "Talent Development", "Digital Learning",
  ];
  const why = [
    ["Contextual Facilitation", "Real cases, real industries, real decisions."],
    ["Stronger Credibility", "Practitioners who've operated where participants work."],
    ["Practical Examples", "Frameworks tested in live business environments."],
    ["Better Business Alignment", "Programs that speak the language of leaders."],
    ["Easier Implementation", "Application support after the workshop ends."],
  ];
  return (
    <>
      <SubpageHero
        eyebrow="Leadership & Facilitators"
        title={<>Led by experienced practitioners, advisors, and <span className="italic font-serif-italic font-normal text-gold">certified experts.</span></>}
        subtitle="Primera is supported by professionals with deep experience in leadership, financial services, insurance, sales productivity, coaching, governance, and organizational performance."
        image={hero}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Leadership Philosophy</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-4xl text-navy font-extrabold leading-tight">Practitioners who understand business reality — not only classroom theory.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 text-charcoal leading-relaxed text-base md:text-[17px] space-y-5">
            <p>Our advisors and facilitators have led teams, closed deals, built distribution networks, governed financial institutions, and developed talent across Indonesia's most demanding industries.</p>
            <p>That perspective shapes every learning experience we design — making it credible, contextual, and immediately applicable.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft dark:bg-[#111111] py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>Tim Kami</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy dark:text-cream font-extrabold max-w-3xl">Praktisi berpengalaman, advisor senior, dan fasilitator bersertifikat.</h2>
          </Reveal>
          <div className="mt-12">
            <LeadershipTieredSection />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>Expertise Coverage</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold max-w-3xl">Deep capability across industries.</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {expertise.map((e) => (
              <span key={e} className="rounded-full border border-orange/30 bg-orange/5 text-navy px-5 py-2.5 text-sm font-semibold">{e}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {CREDENTIALS.map((c) => (
              <span key={c} className="rounded-full border border-line bg-soft text-charcoal px-4 py-1.5 text-xs font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>Why Practitioner-Led Learning Matters</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-extrabold max-w-3xl">Five reasons participants and sponsors trust our facilitators.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {why.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="h-full rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="font-display text-2xl font-extrabold text-gold">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-base font-bold">{t}</h3>
                  <p className="mt-2 text-xs text-white/80 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubpageCTA title="Meet the Right Facilitator for Your Organization" label="Talk to Us" />
    </>
  );
}
