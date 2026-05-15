import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Users, Lightbulb, Compass, Target, Briefcase, Cpu,
  CheckCircle2, ExternalLink, Phone, Calendar, BarChart3, Shield, Sparkles,
  ChevronRight, ChevronDown, MessageCircle, Award, Zap,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-corporate.jpg";
import impactImg from "@/assets/impact-workshop.jpg";
import programsImg from "@/assets/programs-leadership.jpg";
import teamWismanImg from "@/assets/team-wisman.png";
import advisorJismanImg from "@/assets/team/advisor-jisman.jpg";
import advisorPaulaImg from "@/assets/team/advisor-paula.jpg";
import advisorKartonoImg from "@/assets/team/advisor-kartono.jpg";
import advisorArikeImg from "@/assets/team/advisor-arike.jpg";

const TEAM_PHOTOS: Record<string, string> = {
  "Oki T. Wikan": teamWismanImg,
  "Dr. Jisman M. Lubis": advisorJismanImg,
  "Ir. Paula Sembiring": advisorPaulaImg,
  "Kartono": advisorKartonoImg,
  "Arike Agung Widjaja": advisorArikeImg,
};
import {
  SITE, SERVICES, PROBLEMS, IMPACT_STEPS, PROGRAM_CATEGORIES, INDUSTRY_CLIENTS,
  LEADERSHIP, CREDENTIALS, INSIGHTS,
} from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { LeadershipCard } from "@/components/LeadershipCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Primera Karya Sinergia | People Development & Business Consulting" },
      { name: "description", content: "Primera Karya Sinergia helps organizations grow through practical, relevant, and impactful learning experiences in leadership, sales capability, talent development, digital learning, and performance transformation." },
      { property: "og:title", content: "Primera Karya Sinergia — Empowering People. Elevating Performance." },
      { property: "og:description", content: "Premium Indonesian people development and business consulting firm." },
    ],
  }),
  component: HomePage,
});

const SERVICE_ICONS = [Users, Sparkles, Target, Compass, Briefcase, Cpu];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <ProblemsWeSolve />
      <HowWeDeliver />
      <WhyPrimera />
      <FeaturedPrograms />
      <CrmAct />
      <ClientsPartners />
      <LeadershipPreview />
      <Insights />
      <FinalCta />
    </>
  );
}

/* ============ SECTION 1: HERO ============ */
function Hero() {
  const { t } = useLang();
  return (
    <section className="relative isolate overflow-hidden min-h-[88vh] md:min-h-[92vh] flex items-center pt-32 md:pt-36 pb-20 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Primera Karya Sinergia consulting team in a Jakarta strategic leadership session"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/40" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute -bottom-24 left-0 h-72 w-[40rem] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="max-w-3xl text-white">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-[10px] uppercase tracking-[0.24em] text-white/90 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {t("home.hero.badge")}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-7 leading-[1.02] text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold">
              {t("home.hero.h1a")} <span className="text-gold">{t("home.hero.h1b")}</span>
              <br />
              {t("home.hero.h1c")}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 text-white/80 leading-relaxed max-w-2xl text-base md:text-lg">
              {t("home.hero.body")}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold text-navy px-6 py-3.5 text-sm font-bold hover:bg-cream dark:hover:bg-gold/70 hover:-translate-y-0.5 transition shadow-xl shadow-gold/25">
                {t("home.hero.cta1")} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 backdrop-blur text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/20 dark:hover:bg-white/15 transition">
                {t("home.hero.cta2")} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-10 text-[11px] tracking-[0.22em] uppercase text-white/55 font-semibold">
              {t("home.hero.strip")}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </section>
  );
}

function TrustStrip() {
  const { lang } = useLang();
  const items = lang === "id"
    ? ["Pengembangan SDM Menyeluruh", "Fasilitator & Penasihat Bersertifikat", "BFSI, Asuransi & Kinerja Penjualan", "Dampak Terukur (Evaluasi Level 1–4)", "Pembelajaran Digital & AI-Supported"]
    : ["End-to-End People Development", "Certified Facilitators & Advisors", "BFSI, Insurance & Sales Performance", "Measurable Impact (Evaluation Level 1–4)", "AI-Supported Learning & Digital Enablement"];
  return (
    <section className="bg-navy text-white py-5 border-y border-gold/20 overflow-hidden">
      <div className="flex gap-12 marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="eyebrow text-white/80 flex items-center gap-12">
            {item}<span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ============ SECTION 2: WHAT WE DO ============ */
function WhatWeDo() {
  const { t } = useLang();
  return (
    <section id="what-we-do" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionLabel gold>{t("home.whatwedo.label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-navy font-extrabold">
              {t("home.whatwedo.h2")}
            </h2>
            <p className="mt-6 text-navy/65 leading-relaxed text-lg">
              {t("home.whatwedo.body")}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link to="/services" className="group relative block rounded-2xl bg-white border border-navy/10 p-7 h-full lift hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5 overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gold/0 group-hover:bg-gold/10 blur-2xl transition-all duration-500" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-soft border border-navy/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition">
                      <Icon className="h-5 w-5 text-navy" />
                    </div>
                    <h3 className="mt-5 font-display text-lg text-navy font-bold leading-snug">{s.title}</h3>
                    <p className="mt-3 text-sm text-navy/65 leading-relaxed">{s.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold">
                      {t("home.whatwedo.cta")} <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 3: PROBLEMS WE SOLVE ============ */
function ProblemsWeSolve() {
  const { t } = useLang();
  return (
    <section className="bg-soft py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>{t("home.problems.label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-navy font-extrabold">
              {t("home.problems.h2")}
            </h2>
            <p className="mt-6 text-navy/65 leading-relaxed text-lg">
              {t("home.problems.body")}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.p} delay={i * 0.05}>
              <div className="group rounded-2xl bg-white border border-navy/10 p-7 h-full lift hover:border-gold/50">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1 font-display text-gold text-2xl font-extrabold w-9">0{i + 1}</div>
                  <div>
                    <p className="font-display text-base md:text-lg text-navy font-bold leading-snug">{p.p}</p>
                    <div className="mt-3 pt-3 border-t border-dashed border-navy/15">
                      <p className="text-[10px] uppercase tracking-wider text-gold font-semibold mb-2">{t("home.problems.approach")}</p>
                      <p className="text-sm text-navy/70 leading-relaxed">{p.s}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 4: HOW WE DELIVER IMPACT ============ */
function HowWeDeliver() {
  const { t } = useLang();
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel gold>{t("home.deliver.label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] font-extrabold">
              {t("home.deliver.h2a")} <span className="text-gold">{t("home.deliver.h2b")}</span>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed text-lg">
              {t("home.deliver.body")}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {IMPACT_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 hover:border-gold/40 hover:bg-white/[0.07] transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-display text-gold text-xl font-extrabold">{s.n}</span>
                  {i < IMPACT_STEPS.length - 1 && <ChevronRight className="h-4 w-4 text-gold/40 hidden xl:block" />}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide">{s.t}</h3>
                <p className="mt-2 text-xs text-white/65 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-6 flex flex-wrap items-center gap-4">
            <BarChart3 className="h-6 w-6 text-gold shrink-0" />
            <div className="flex-1 min-w-[240px]">
              <p className="font-display text-base font-bold">Kirkpatrick Evaluation Level 1–4</p>
              <p className="text-sm text-white/70">{t("home.deliver.kirkpatrick")}</p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-white transition">
              {t("home.deliver.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SECTION 5: WHY PRIMERA ============ */
function WhyPrimera() {
  const { t } = useLang();
  const why = [
    { icon: Compass, tk: "home.why.p0t", dk: "home.why.p0d" },
    { icon: Award,   tk: "home.why.p1t", dk: "home.why.p1d" },
    { icon: Zap,     tk: "home.why.p2t", dk: "home.why.p2d" },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>{t("home.why.label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-navy font-extrabold">
              {t("home.why.h2")}
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {why.map((w, i) => (
            <Reveal key={w.tk} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-soft to-white border border-navy/10 p-8 lift hover:border-gold/40 overflow-hidden">
                <div className="absolute top-0 right-0 h-1 w-16 bg-gold rounded-bl-full" />
                <div className="h-14 w-14 rounded-2xl bg-navy text-gold flex items-center justify-center">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl text-navy font-bold">{t(w.tk)}</h3>
                <p className="mt-3 text-navy/70 leading-relaxed text-sm">{t(w.dk)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-2 justify-center">
            {CREDENTIALS.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full bg-soft border border-navy/10 px-4 py-2 text-xs text-navy font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />{c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SECTION 6: FEATURED PROGRAMS (TABS) ============ */
function FeaturedPrograms() {
  const { t } = useLang();
  const [tab, setTab] = useState(0);
  const cat = PROGRAM_CATEGORIES[tab];
  return (
    <section className="bg-soft py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <SectionLabel gold>{t("home.programs.label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-navy dark:text-cream font-extrabold">
              {t("home.programs.h2")}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:text-right">
            <Link to="/programs" className="inline-flex items-center gap-2 rounded-full bg-navy text-white dark:bg-gold dark:text-navy px-5 py-3 text-sm font-semibold hover:bg-charcoal dark:hover:bg-gold/80 transition">
              {t("home.programs.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {PROGRAM_CATEGORIES.map((c, i) => (
            <button
              key={c.slug}
              onClick={() => setTab(i)}
              className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition ${
                tab === i
                  ? "bg-navy text-white dark:bg-gold dark:text-navy shadow-lg shadow-navy/20"
                  : "bg-white dark:bg-[#1e1e1e] border border-navy/10 dark:border-white/10 text-navy/70 dark:text-cream/60 hover:border-navy/30 dark:hover:border-white/30 hover:text-navy dark:hover:text-cream"
              }`}
            >
              {c.title.replace(" Series", "")}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-8 rounded-3xl bg-white dark:bg-[#141414] border border-navy/10 dark:border-white/10 p-8 md:p-10 shadow-xl shadow-navy/5 dark:shadow-black/30"
        >
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p className="font-serif-italic text-navy/60 dark:text-cream/50 text-base">{cat.tagline}</p>
              <h3 className="mt-4 font-display text-2xl md:text-3xl text-navy dark:text-cream font-extrabold leading-tight">{cat.title}</h3>
              <Link to="/programs" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-navy dark:hover:text-cream transition">
                {t("home.programs.seriesCta")} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {cat.items.slice(0, 6).map((it) => (
                <div key={it} className="flex items-start gap-2.5 py-1.5 border-b border-navy/5 dark:border-white/8">
                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-navy/80 dark:text-cream/80">{it}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============ SECTION 7: CRM ACT ============ */
function CrmAct() {
  const { t } = useLang();
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-navy to-charcoal text-white py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 right-0 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel gold>{t("home.crm.label")}</SectionLabel>
              <h2 className="font-display mt-5 text-5xl md:text-7xl leading-[0.95] font-extrabold">
                CRM <span className="text-gold">ACT</span>
              </h2>
              <p className="mt-4 text-base md:text-lg font-semibold tracking-wide text-white/85 uppercase">
                AI-Powered Mobile Banking Sales Execution CRM
              </p>
              <p className="mt-6 text-white/75 leading-relaxed max-w-xl">
                {t("home.crm.desc")}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["A", "Action Daily"],
                  ["C", "Control Activity"],
                  ["T", "Track Progress"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-gold/20 bg-white/[0.04] p-4 text-center">
                    <div className="font-display text-3xl text-gold font-extrabold">{k}</div>
                    <p className="text-[10px] mt-1 text-white/70 uppercase tracking-wider font-semibold">{v}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-2.5 text-sm text-white/80">
                {(["home.crm.f0", "home.crm.f1", "home.crm.f2", "home.crm.f3"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />{t(key)}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/products/crm-act" className="group inline-flex items-center gap-2 rounded-full bg-gold text-navy px-6 py-3.5 text-sm font-bold hover:bg-cream dark:hover:bg-gold/70 transition">
                  {t("home.crm.cta1")} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <a href={SITE.crmDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold hover:border-gold hover:text-gold transition">
                  {t("home.crm.cta2")} <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <DashboardMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const cards = [
    { t: "Today Action", v: "12 / 18", sub: "Visits scheduled" },
    { t: "Pipeline Health", v: "Rp 4.2 B", sub: "Hot · Warm · Cold" },
    { t: "Follow-Up Due", v: "7", sub: "Past SLA" },
    { t: "Coaching Queue", v: "5 RM", sub: "This week" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 via-transparent to-orange/10 rounded-[2rem] blur-2xl" />
      <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">Command Center</p>
            <p className="font-display text-lg mt-1 font-bold">Branch Performance · Today</p>
          </div>
          <Shield className="h-5 w-5 text-gold" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl bg-navy/60 border border-white/10 p-4"
            >
              <p className="text-[10px] uppercase tracking-wider text-white/55 font-semibold">{c.t}</p>
              <p className="mt-2 font-display text-2xl text-white font-bold">{c.v}</p>
              <p className="text-[11px] text-white/55 mt-0.5">{c.sub}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-navy/60 border border-white/10 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-wider text-white/55 font-semibold">Pipeline Movement</p>
            <p className="text-[10px] text-gold font-semibold">AI Insight</p>
          </div>
          <div className="mt-3 flex gap-1 h-12 items-end">
            {[40, 65, 35, 80, 55, 90, 70, 60, 85, 75, 95, 50].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-gold/30 to-gold" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="mt-3 rounded-xl bg-navy/60 border border-white/10 p-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gold/20 text-gold flex items-center justify-center text-[10px] font-bold">AI</div>
          <p className="text-xs text-white/80 flex-1">Recommend coaching for 3 RMs · Pending leader approval · Dummy data</p>
        </div>
      </div>
    </div>
  );
}

/* ============ SECTION 8: CLIENTS & PARTNERS ============ */
function ClientsPartners() {
  const { t } = useLang();
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionLabel>{t("home.clients.label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-navy dark:text-cream font-extrabold">
              {t("home.clients.h2")}
            </h2>
            <p className="mt-6 text-navy/65 dark:text-cream/55 leading-relaxed text-lg">
              {t("home.clients.body")}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRY_CLIENTS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.05}>
              <div className="rounded-2xl bg-soft dark:bg-[#1a1a1a] border border-navy/10 dark:border-white/10 p-6 h-full hover:border-gold/40 transition">
                <p className="font-display text-sm uppercase tracking-wider text-gold font-bold">{g.group}</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                  {g.names.map((n) => (
                    <span key={n} className="text-sm text-navy/75 dark:text-cream/75 font-medium after:content-['·'] after:ml-3 after:text-navy/30 dark:after:text-cream/30 last:after:hidden">{n}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-xs text-navy/50 dark:text-cream/40">{t("home.clients.note")}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SECTION 9: LEADERSHIP PREVIEW ============ */
function LeadershipPreview() {
  const { t } = useLang();
  const director = LEADERSHIP[0];
  const advisors = LEADERSHIP.slice(1, 5);
  return (
    <section className="bg-soft py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <SectionLabel gold>{t("home.leadership.label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-navy dark:text-cream font-extrabold">
              {t("home.leadership.h2")}
            </h2>
          </Reveal>
        </div>

        {/* Director — centered single card */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-[240px]">
            <LeadershipCard leader={{ ...director, photo: TEAM_PHOTOS[director.name] }} />
          </div>
        </div>

        {/* Advisors — 4-column grid */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advisors.map((p, i) => (
            <LeadershipCard key={p.name} leader={{ ...p, photo: TEAM_PHOTOS[p.name] }} delay={i * 0.06} />
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/about/leadership-facilitators"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 dark:border-white/15 bg-white dark:bg-[#1e1e1e] text-navy dark:text-cream px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold transition-all"
          >
            <ChevronDown className="h-4 w-4" /> {t("home.leadership.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 11: INSIGHTS ============ */
function Insights() {
  const { t } = useLang();
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <SectionLabel>{t("home.insights.label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-navy font-extrabold">
              {t("home.insights.h2")}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:text-right">
            <Link to="/insights" className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-5 py-3 text-sm font-semibold hover:bg-charcoal transition">
              {t("home.insights.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {INSIGHTS.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.07}>
              <Link to="/insights" className="group block rounded-2xl bg-soft border border-navy/10 p-7 h-full lift hover:border-gold/40">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gold">{a.category}</span>
                  <span className="text-navy/30">·</span>
                  <span className="text-[10px] uppercase tracking-wider text-navy/50">{a.read}</span>
                </div>
                <h3 className="mt-4 font-display text-xl text-navy font-bold leading-snug group-hover:text-gold transition">{a.title}</h3>
                <p className="mt-3 text-sm text-navy/65 leading-relaxed">{a.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
                  {t("home.insights.readmore")} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 12: FINAL CTA ============ */
function FinalCta() {
  const { t } = useLang();
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative text-center max-w-3xl mx-auto">
        <Reveal>
          <SectionLabel gold>{t("home.cta.label")}</SectionLabel>
          <h2 className="font-display mt-5 text-5xl md:text-7xl leading-[0.98] font-extrabold text-balance">
            {t("home.cta.h2a")} <span className="text-gold">{t("home.cta.h2b")}</span>
          </h2>
          <p className="mt-6 text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
            {t("home.cta.body")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold text-navy px-7 py-4 text-sm font-bold hover:bg-cream dark:hover:bg-gold/70 transition">
              <Calendar className="h-4 w-4" /> {t("home.cta.primary")}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold hover:border-gold hover:text-gold transition">
              <MessageCircle className="h-4 w-4" /> {t("home.cta.secondary")}
            </a>
          </div>
          <p className="mt-8 text-xs text-white/50">{t("home.cta.note")}</p>
        </Reveal>
      </div>
    </section>
  );
}

// keep unused imports quiet
void Phone; void Lightbulb; void impactImg; void programsImg;
