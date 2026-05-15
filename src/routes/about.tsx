import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-leadership.jpg";
import { VALUES, LEADERSHIP, CREDENTIALS, SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { LeadershipCard } from "@/components/LeadershipCard";
import teamWismanImg from "@/assets/team-wisman.png";
import advisorJismanImg from "@/assets/team/advisor-jisman.jpg";
import advisorPaulaImg from "@/assets/team/advisor-paula.jpg";
import advisorKartonoImg from "@/assets/team/advisor-kartono.jpg";
import advisorArikeImg from "@/assets/team/advisor-arike.jpg";

const ABOUT_PHOTOS: Record<string, string> = {
  "Oki T. Wikan": teamWismanImg,
  "Dr. Jisman M. Lubis": advisorJismanImg,
  "Ir. Paula Sembiring": advisorPaulaImg,
  "Kartono": advisorKartonoImg,
  "Arike Agung Widjaja": advisorArikeImg,
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Primera Karya Sinergia" },
      { name: "description", content: "A premium Indonesian people development consulting firm helping organizations grow through their people since 2021." },
      { property: "og:title", content: "About Primera Karya Sinergia" },
      { property: "og:description", content: "We grow people — because when people grow, everything else follows." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const approach = [
    ["Action Oriented", "Every participant is encouraged to act, experience, and commit to applying new skills."],
    ["Experiential Learning", "Hands-on methods — learning through experience, reflection, and insight."],
    ["Self Discovery", "Participants identify their strengths and unique potential through guided exploration."],
    ["Active Participation", "Sessions are engaging, interactive, and respectful — everyone learns and contributes."],
  ];
  const why = [
    ["End-to-End Solution", "From recruitment to capability development with Level 1–4 evaluation."],
    ["Certified Team", "CFP®, QWM, CRGP-certified practitioners with deep BFSI experience."],
    ["Flexible & Adaptive", "Customizable programs aligned with your culture and business needs."],
    ["Learning-to-Performance", "We connect classroom learning to behavior change and business results."],
  ];

  return (
    <>
      <section className="bg-cream pt-20 pb-16 md:pt-28">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel>About</SectionLabel>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9] text-balance">
              We grow people — <span className="italic font-serif-italic font-normal text-ink/70">because when people grow, everything else follows.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-ink/70 leading-relaxed">
              {SITE.name} is a business management and people development consulting firm delivering integrated solutions in recruitment, training, distribution, and business strategy. Since {SITE.founded}, we've helped organizations build high-performing teams and develop future-ready professionals — originally rooted in financial and insurance sectors and now expanded across industries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={aboutImg} alt="Indonesian executive team" className="w-full h-[60vh] object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream py-24">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <Reveal>
            <SectionLabel gold>Our Vision</SectionLabel>
            <p className="mt-6 font-display text-3xl md:text-4xl leading-tight">
              To be the most trusted strategic partner in developing people and accelerating business growth — through excellence, innovation, and impactful execution.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel gold>Our Mission</SectionLabel>
            <ol className="mt-6 space-y-4 text-cream/80">
              <li className="flex gap-3"><span className="font-display text-gold">01</span>Empower people and organizations to unlock their highest potential and achieve sustainable growth.</li>
              <li className="flex gap-3"><span className="font-display text-gold">02</span>Deliver innovative learning and consulting solutions that create measurable business impact.</li>
              <li className="flex gap-3"><span className="font-display text-gold">03</span>Build a culture of excellence and integrity that inspires continuous improvement.</li>
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[0.95]">P · R · I · M · E · R · A</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.04}>
                <div className="rounded-2xl border border-line bg-white p-6 h-full lift hover:border-ink/30">
                  <div className="font-display text-6xl text-gold leading-none">{v.letter}</div>
                  <h3 className="mt-4 font-display text-lg uppercase tracking-wide">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink/65">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionLabel gold>Our Approach</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-6">How we design learning</h2>
            <ul className="mt-8 space-y-5">
              {approach.map(([t, d]) => (
                <li key={t} className="border-b border-cream/10 pb-5">
                  <p className="font-display text-xl uppercase tracking-wide text-gold">{t}</p>
                  <p className="mt-2 text-cream/75">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionLabel gold>Why Choose Us</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-6">What sets Primera apart</h2>
            <ul className="mt-8 space-y-5">
              {why.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-display text-xl uppercase tracking-wide">{t}</p>
                    <p className="mt-1 text-cream/75">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl mt-6 max-w-3xl">Senior advisors with board-level experience</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP.map((p, i) => (
              <LeadershipCard key={p.name} leader={{ ...p, photo: ABOUT_PHOTOS[p.name] }} delay={i * 0.05} />
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-2">
              {CREDENTIALS.map((c) => (
                <span key={c} className="rounded-full border border-ink/20 bg-white px-4 py-1.5 text-xs">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream py-20">
        <div className="container-x text-center">
          <Reveal>
            <p className="font-serif-italic text-3xl md:text-5xl text-cream/90 max-w-3xl mx-auto leading-snug">
              "When you think BIG, feel BIG and affirm BIG, BIG things happen."
            </p>
            <p className="mt-6 eyebrow text-gold">— PRIMERA</p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream transition">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
