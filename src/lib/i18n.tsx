import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "id" | "en";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const T: Record<Lang, Record<string, string>> = {
  id: {
    // Nav
    "nav./": "Beranda",
    "nav./about": "Tentang Kami",
    "nav./services": "Layanan Kami",
    "nav./products": "Produk",
    "nav./clients": "Klien & Cerita",
    "nav./insights": "Wawasan",
    "nav./contact": "Hubungi Kami",

    // Submenus — About
    "sub./about.0": "Tentang Kami",
    "sub./about.0.desc": "Identitas dan nilai perusahaan",
    "sub./about.1": "Visi & Misi",
    "sub./about.1.desc": "Tujuan dan arah strategis",
    "sub./about.2": "Nilai-Nilai Kami",
    "sub./about.2.desc": "Nilai-nilai PRIMERA",
    "sub./about.3": "Pendekatan Kami",
    "sub./about.3.desc": "Metodologi pembelajaran",
    "sub./about.4": "Kepemimpinan & Fasilitator",
    "sub./about.4.desc": "Penasihat dan para ahli",
    "sub./about.5": "Perjalanan Kami",
    "sub./about.5.desc": "Cerita pertumbuhan dan pencapaian",

    // Submenus — Services
    "sub./services.0": "Kepemimpinan & Manajerial",
    "sub./services.0.desc": "Membangun kemampuan kepemimpinan",
    "sub./services.1": "Soft Skills",
    "sub./services.1.desc": "Perkuat komunikasi dan perilaku",
    "sub./services.2": "Kemampuan Penjualan",
    "sub./services.2.desc": "Tingkatkan produktivitas penjualan",
    "sub./services.3": "Penilaian Bakat",
    "sub./services.3.desc": "Pilih dan petakan talenta yang tepat",
    "sub./services.4": "Fasilitator & Pembelajaran Digital",
    "sub./services.4.desc": "Kembangkan kemampuan pembelajaran modern",
    "sub./services.5": "Konsultasi Bisnis",
    "sub./services.5.desc": "Tingkatkan eksekusi dan kinerja",

    // Submenus — Products
    "sub./products.0": "CRM ACT",
    "sub./products.0.desc": "Eksekusi penjualan perbankan berbasis AI",
    "sub./products.1": "Pembelajaran-ke-Performa",
    "sub./products.1.desc": "Alat dampak pelatihan",
    "sub./products.2": "Alat Penilaian",
    "sub./products.2.desc": "Penilaian kemampuan dan bakat",

    // Submenus — Clients
    "sub./clients.0": "Mitra Kami",
    "sub./clients.0.desc": "Portofolio klien terpercaya",
    "sub./clients.1": "Industri yang Kami Layani",
    "sub./clients.1.desc": "Keahlian spesifik per sektor",
    "sub./clients.2": "Kisah Sukses",
    "sub./clients.2.desc": "Contoh berbasis hasil nyata",
    "sub./clients.3": "Dampak Pembelajaran",
    "sub./clients.3.desc": "Pengukuran dan evaluasi",

    // Submenus — Insights
    "sub./insights.0": "Artikel",
    "sub./insights.0.desc": "Pemikiran praktis untuk pemimpin",
    "sub./insights.1": "Whitepapers",
    "sub./insights.1.desc": "Riset dan panduan eksekutif",
    "sub./insights.2": "Webinar",
    "sub./insights.2.desc": "Sesi pembelajaran dan briefing",
    "sub./insights.3": "Berita",
    "sub./insights.3.desc": "Pembaruan Primera",

    // Header
    "header.cta": "Jadwalkan Konsultasi",
    "header.positioning": "Perusahaan Konsultasi Manajemen Bisnis & Pengembangan SDM",

    // Footer
    "footer.tagline": "Perusahaan konsultasi manajemen bisnis dan pengembangan SDM yang membantu organisasi bertumbuh melalui talenta mereka — sejak",
    "footer.col.about": "Tentang Kami",
    "footer.col.services": "Layanan Kami",
    "footer.col.products": "Produk",
    "footer.col.resources": "Sumber Daya",
    "footer.link.who": "Tentang Kami",
    "footer.link.vm": "Visi & Misi",
    "footer.link.values": "Nilai-Nilai Kami",
    "footer.link.leadership": "Kepemimpinan",
    "footer.link.journey": "Perjalanan Kami",
    "footer.link.lm": "Kepemimpinan & Manajerial",
    "footer.link.soft": "Soft Skills",
    "footer.link.sales": "Kemampuan Penjualan",
    "footer.link.talent": "Penilaian Bakat",
    "footer.link.facilitator": "Pengembangan Fasilitator",
    "footer.link.crm": "CRM ACT",
    "footer.link.l2p": "Pembelajaran-ke-Performa",
    "footer.link.assessment": "Alat Penilaian",
    "footer.link.clients": "Klien & Cerita",
    "footer.link.insights": "Wawasan",
    "footer.link.contact": "Hubungi Kami",
    "footer.cta": "Jadwalkan Konsultasi",
    "footer.rights": "Hak cipta dilindungi.",
    "footer.taglineBottom": "Memberdayakan Orang. Meningkatkan Kinerja.",
    "footer.privacy": "Privasi",
    "footer.terms": "Ketentuan",

    // Homepage — Hero
    "home.hero.badge": "Konsultasi Manajemen Bisnis & Pengembangan SDM",
    "home.hero.h1a": "Memberdayakan",
    "home.hero.h1b": "Orang.",
    "home.hero.h1c": "Meningkatkan Kinerja.",
    "home.hero.body": "Primera Karya Sinergia membantu organisasi bertumbuh melalui pengalaman pembelajaran yang praktis, relevan dan berdampak — dari kepemimpinan dan soft skills hingga kemampuan penjualan, pengembangan bakat dan transformasi kinerja berbasis digital.",
    "home.hero.cta1": "Jadwalkan Konsultasi Strategis",
    "home.hero.cta2": "Jelajahi Layanan Kami",
    "home.hero.strip": "Kepemimpinan · Kemampuan Penjualan · Pengembangan Bakat · Pembelajaran Digital · CRM ACT",

    // Homepage — WhatWeDo
    "home.whatwedo.label": "Yang Kami Lakukan",
    "home.whatwedo.h2": "Solusi pembelajaran dan konsultasi yang praktis",
    "home.whatwedo.body": "Dirancang untuk membangun kemampuan SDM, meningkatkan kinerja dan menciptakan dampak bisnis terukur — di enam area praktik terintegrasi.",
    "home.whatwedo.cta": "Lihat Program",

    // Homepage — Problems
    "home.problems.label": "Masalah yang Kami Selesaikan",
    "home.problems.h2": "Pembelajaran yang menyelesaikan tantangan kinerja nyata",
    "home.problems.body": "Organisasi tidak butuh pelatihan demi pelatihan semata. Mereka butuh solusi yang mendorong kemajuan bisnis.",
    "home.problems.approach": "Pendekatan Kami",

    // Homepage — HowWeDeliver
    "home.deliver.label": "Cara Kami Memberikan Dampak",
    "home.deliver.h2a": "Dari pembelajaran ke",
    "home.deliver.h2b": "dampak kinerja",
    "home.deliver.body": "Proses pembelajaran terstruktur sebelum, selama dan sesudah pelatihan — dengan evaluasi komprehensif untuk memastikan dampak kinerja yang terukur.",
    "home.deliver.cta": "Lihat Metodologi",
    "home.deliver.kirkpatrick": "Reaksi → Pembelajaran → Perilaku → Hasil Bisnis",

    // Homepage — WhyPrimera
    "home.why.label": "Mengapa Pilih Primera",
    "home.why.h2": "Dibangun di atas tiga pilar kepercayaan",
    "home.why.p0t": "Solusi Menyeluruh",
    "home.why.p0d": "Dari rekrutmen hingga pengembangan kemampuan berkelanjutan — Primera memberikan proses pembelajaran terstruktur sebelum, selama dan sesudah pelatihan, lengkap dengan evaluasi komprehensif untuk memastikan dampak kinerja yang terukur.",
    "home.why.p1t": "Tim Bersertifikat",
    "home.why.p1d": "Profesional berlisensi dengan CFP®, Manajemen Kekayaan dan praktisi soft skills bersertifikat — didukung pengalaman mendalam di BFSI dan konsultasi.",
    "home.why.p2t": "Fleksibel & Adaptif",
    "home.why.p2d": "Program yang dapat dikustomisasi sesuai budaya organisasi dan kebutuhan bisnis terkini — praktis, relevan dan langsung dapat diterapkan.",

    // Homepage — FeaturedPrograms
    "home.programs.label": "Program Unggulan",
    "home.programs.h2": "50+ program di lima seri terintegrasi",
    "home.programs.cta": "Lihat Semua Program",
    "home.programs.seriesCta": "Lihat Seri Lengkap",

    // Homepage — CRM ACT
    "home.crm.label": "Solusi Digital Unggulan",
    "home.crm.desc": "CRM ACT membantu bank mengontrol eksekusi penjualan dari aktivitas harian di lapangan hingga keputusan manajemen melalui metodologi ACT, visibilitas mobile dan kecerdasan AI yang terkelola.",
    "home.crm.cta1": "Jelajahi CRM ACT",
    "home.crm.cta2": "Minta Demo",
    "home.crm.f0": "Kontrol eksekusi penjualan perbankan — dari aktivitas harian hingga dashboard eksekutif",
    "home.crm.f1": "Visibilitas lapangan-ke-dewan direksi berbasis mobile untuk penjualan, pemimpin dan eksekutif",
    "home.crm.f2": "Rekomendasi AI yang terkelola — manusia menyetujui. RBAC, log audit, masking, siap SSO",
    "home.crm.f3": "Adopsi bertahap: discovery → prototipe → pilot → MVP → peluncuran",

    // Homepage — Clients
    "home.clients.label": "Klien & Mitra",
    "home.clients.h2": "Dipercaya oleh berbagai industri",
    "home.clients.body": "Dari perbankan dan asuransi hingga telekomunikasi, BUMN dan perusahaan korporat di seluruh Indonesia.",
    "home.clients.note": "Logo dan nama klien ditampilkan untuk portofolio dan kredibilitas sesuai izin yang berlaku.",

    // Homepage — Leadership
    "home.leadership.label": "Kepemimpinan & Fasilitator",
    "home.leadership.h2": "Dipimpin oleh praktisi dan penasihat berpengalaman",
    "home.leadership.cta": "Kenali Tim Kami",

    // Homepage — Insights
    "home.insights.label": "Wawasan Terkini",
    "home.insights.h2": "Kepemimpinan pemikiran untuk pertumbuhan berbasis SDM",
    "home.insights.cta": "Semua Wawasan",
    "home.insights.readmore": "Baca Selengkapnya",

    // Homepage — FinalCta
    "home.cta.label": "Mari Mulai",
    "home.cta.h2a": "Siap meningkatkan",
    "home.cta.h2b": "kinerja SDM Anda?",
    "home.cta.body": "Mari rancang solusi pembelajaran yang praktis, relevan dan terukur untuk organisasi Anda.",
    "home.cta.primary": "Jadwalkan Konsultasi Strategis",
    "home.cta.secondary": "WhatsApp Primera",
    "home.cta.note": "Respons tipikal dalam dua jam kerja",
  },

  en: {
    // Nav
    "nav./": "Home",
    "nav./about": "About Us",
    "nav./services": "What We Do",
    "nav./products": "Products",
    "nav./clients": "Clients & Stories",
    "nav./insights": "Insights",
    "nav./contact": "Contact Us",

    // Submenus — About
    "sub./about.0": "Who We Are",
    "sub./about.0.desc": "Company identity and belief",
    "sub./about.1": "Vision & Mission",
    "sub./about.1.desc": "Purpose and strategic direction",
    "sub./about.2": "Core Values",
    "sub./about.2.desc": "PRIMERA values",
    "sub./about.3": "Our Approach",
    "sub./about.3.desc": "Learning methodology",
    "sub./about.4": "Leadership & Facilitators",
    "sub./about.4.desc": "Advisors and experts",
    "sub./about.5": "Our Journey",
    "sub./about.5.desc": "Growth story and milestones",

    // Submenus — Services
    "sub./services.0": "Leadership & Managerial",
    "sub./services.0.desc": "Build leadership capability",
    "sub./services.1": "Soft Skills",
    "sub./services.1.desc": "Strengthen communication and behavior",
    "sub./services.2": "Sales Capability",
    "sub./services.2.desc": "Improve sales productivity and advisory",
    "sub./services.3": "Talent Assessment",
    "sub./services.3.desc": "Select and map the right talents",
    "sub./services.4": "Facilitator & Digital Learning",
    "sub./services.4.desc": "Develop modern learning capability",
    "sub./services.5": "Business Consulting",
    "sub./services.5.desc": "Improve execution and performance",

    // Submenus — Products
    "sub./products.0": "CRM ACT",
    "sub./products.0.desc": "AI-powered banking sales execution",
    "sub./products.1": "Learning-to-Performance",
    "sub./products.1.desc": "Training impact tools",
    "sub./products.2": "Assessment Tools",
    "sub./products.2.desc": "Capability and talent assessment",

    // Submenus — Clients
    "sub./clients.0": "Our Partners",
    "sub./clients.0.desc": "Trusted client portfolio",
    "sub./clients.1": "Industries We Serve",
    "sub./clients.1.desc": "Sector-specific expertise",
    "sub./clients.2": "Success Stories",
    "sub./clients.2.desc": "Outcome-driven examples",
    "sub./clients.3": "Learning Impact",
    "sub./clients.3.desc": "Measurement and evaluation",

    // Submenus — Insights
    "sub./insights.0": "Articles",
    "sub./insights.0.desc": "Practical thinking for leaders",
    "sub./insights.1": "Whitepapers",
    "sub./insights.1.desc": "Executive research and guides",
    "sub./insights.2": "Webinars",
    "sub./insights.2.desc": "Learning and briefing sessions",
    "sub./insights.3": "News",
    "sub./insights.3.desc": "Primera updates",

    // Header
    "header.cta": "Schedule Consultation",
    "header.positioning": "Business Management & People Development Consulting Firm",

    // Footer
    "footer.tagline": "A business management and people development consulting firm helping organizations grow through their people — since",
    "footer.col.about": "About Us",
    "footer.col.services": "What We Do",
    "footer.col.products": "Products",
    "footer.col.resources": "Resources",
    "footer.link.who": "Who We Are",
    "footer.link.vm": "Vision & Mission",
    "footer.link.values": "Core Values",
    "footer.link.leadership": "Leadership",
    "footer.link.journey": "Our Journey",
    "footer.link.lm": "Leadership & Managerial",
    "footer.link.soft": "Soft Skills",
    "footer.link.sales": "Sales Capability",
    "footer.link.talent": "Talent Assessment",
    "footer.link.facilitator": "Facilitator Development",
    "footer.link.crm": "CRM ACT",
    "footer.link.l2p": "Learning-to-Performance",
    "footer.link.assessment": "Assessment Tools",
    "footer.link.clients": "Clients & Stories",
    "footer.link.insights": "Insights",
    "footer.link.contact": "Contact Us",
    "footer.cta": "Schedule Consultation",
    "footer.rights": "All rights reserved.",
    "footer.taglineBottom": "Empowering People. Elevating Performance.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",

    // Homepage — Hero
    "home.hero.badge": "Business Management & People Development Consulting",
    "home.hero.h1a": "Empowering",
    "home.hero.h1b": "People.",
    "home.hero.h1c": "Elevating Performance.",
    "home.hero.body": "Primera Karya Sinergia helps organizations grow through practical, relevant, and impactful learning experiences — from leadership and soft skills to sales capability, talent development, and digital-supported performance transformation.",
    "home.hero.cta1": "Schedule Strategic Consultation",
    "home.hero.cta2": "Explore What We Do",
    "home.hero.strip": "Leadership · Sales Capability · Talent Development · Digital Learning · CRM ACT",

    // Homepage — WhatWeDo
    "home.whatwedo.label": "What We Do",
    "home.whatwedo.h2": "Practical learning and consulting solutions",
    "home.whatwedo.body": "Designed to build people capability, improve performance, and create measurable business impact — across six integrated practice areas.",
    "home.whatwedo.cta": "View Programs",

    // Homepage — Problems
    "home.problems.label": "Problems We Solve",
    "home.problems.h2": "Learning that solves real performance challenges",
    "home.problems.body": "Organizations don't need training for the sake of training. They need solutions that move the business forward.",
    "home.problems.approach": "Our Approach",

    // Homepage — HowWeDeliver
    "home.deliver.label": "How We Deliver Impact",
    "home.deliver.h2a": "From learning to",
    "home.deliver.h2b": "performance impact",
    "home.deliver.body": "A structured learning process before, during, and after training — with comprehensive evaluation to ensure measurable performance impact.",
    "home.deliver.cta": "See Methodology",
    "home.deliver.kirkpatrick": "Reaction → Learning → Behavior → Business Results",

    // Homepage — WhyPrimera
    "home.why.label": "Why Choose Primera",
    "home.why.h2": "Built on three pillars of trust",
    "home.why.p0t": "End-to-End Solution",
    "home.why.p0d": "From recruitment to continuous capability development — Primera delivers a structured learning process before, during, and after training, complete with comprehensive evaluation to ensure measurable impact on performance.",
    "home.why.p1t": "Certified Team",
    "home.why.p1d": "Licensed professionals with CFP®, Wealth Management, and certified soft skills practitioners — backed by deep BFSI and consulting experience.",
    "home.why.p2t": "Flexible & Adaptive",
    "home.why.p2d": "Customizable programs that align with organizational culture and current business needs — practical, relevant, and immediately applicable.",

    // Homepage — FeaturedPrograms
    "home.programs.label": "Featured Programs",
    "home.programs.h2": "50+ programs across five integrated series",
    "home.programs.cta": "View All Programs",
    "home.programs.seriesCta": "View Full Series",

    // Homepage — CRM ACT
    "home.crm.label": "Featured Digital Solution",
    "home.crm.desc": "CRM ACT helps banks control sales execution from daily field activity to management decision through ACT methodology, mobile visibility, and governed AI intelligence.",
    "home.crm.cta1": "Explore CRM ACT",
    "home.crm.cta2": "Request Demo",
    "home.crm.f0": "Banking sales execution control — from daily activity to executive dashboard",
    "home.crm.f1": "Mobile-first field-to-boardroom visibility for sales, leaders, and executives",
    "home.crm.f2": "Governed AI recommendations — humans approve. RBAC, audit log, masking, SSO-ready",
    "home.crm.f3": "Phased adoption: discovery → prototype → pilot → MVP → rollout",

    // Homepage — Clients
    "home.clients.label": "Clients & Partners",
    "home.clients.h2": "Trusted by organizations across industries",
    "home.clients.body": "From banking and insurance to telecommunications, SOEs, and corporate enterprises across Indonesia.",
    "home.clients.note": "Logos and client names are displayed for portfolio and credibility purposes where permitted.",

    // Homepage — Leadership
    "home.leadership.label": "Leadership & Facilitators",
    "home.leadership.h2": "Led by experienced practitioners and advisors",
    "home.leadership.cta": "Meet Our Team",

    // Homepage — Insights
    "home.insights.label": "Latest Insights",
    "home.insights.h2": "Thought leadership for people-driven growth",
    "home.insights.cta": "All Insights",
    "home.insights.readmore": "Read More",

    // Homepage — FinalCta
    "home.cta.label": "Let's Begin",
    "home.cta.h2a": "Ready to elevate your",
    "home.cta.h2b": "people performance?",
    "home.cta.body": "Let's design a practical, relevant, and measurable learning solution for your organization.",
    "home.cta.primary": "Schedule Strategic Consultation",
    "home.cta.secondary": "WhatsApp Primera",
    "home.cta.note": "Typical response within two business hours",
  },
};

const LanguageContext = createContext<LangCtx>({
  lang: "id",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pks-lang") as Lang | null;
      if (saved === "id" || saved === "en") return saved;
    }
    return "id";
  });

  useEffect(() => {
    const saved = localStorage.getItem("pks-lang") as Lang | null;
    if (saved === "id" || saved === "en") {
      setLangState(saved);
    } else {
      localStorage.setItem("pks-lang", "id");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("pks-lang", l);
  };

  const t = (key: string): string => T[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
