import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LeadershipCard } from "@/components/LeadershipCard";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

/* ─── Photo imports ─────────────────────────────────────────────── */
import okiPhoto from "@/assets/team-wisman.png";          // confirmed correct

import advisorJismanPhoto from "@/assets/team/advisor-jisman.jpg";
import advisorPaulaPhoto from "@/assets/team/advisor-paula.jpg";
import advisorKartonoPhoto from "@/assets/team/advisor-kartono.jpg";
import advisorArikePhoto from "@/assets/team/advisor-arike.jpg";

import assocIkkePhoto from "@/assets/team/assoc-ikke.jpg";
import assocDhaniPhoto from "@/assets/team/assoc-dhani.jpg";
import assocClaudiaPhoto from "@/assets/team/assoc-claudia.jpg";
import assocTediPhoto from "@/assets/team/assoc-tedi.jpg";
import assocDeckyPhoto from "@/assets/team/assoc-decky.jpg";
import assocDhetaPhoto from "@/assets/team/assoc-dheta.jpg";
import assocRastitiPhoto from "@/assets/team/assoc-rastiti.jpg";
import assocRenovanPhoto from "@/assets/team/assoc-renovan.jpg";
import assocFaisalPhoto from "@/assets/team/assoc-faisal.jpg";
import assocJoePhoto from "@/assets/team/assoc-joe.jpg";
import assocDedePhoto from "@/assets/team/assoc-dede.jpg";

/* ─── Data ──────────────────────────────────────────────────────── */
type Leader = { name: string; role: string; credentials: string; expertise: string; photo: string };

const DIRECTOR: Leader[] = [
  { name: "Oki T. Wikan", role: "Director", credentials: "CFP, QWM, CPBC", expertise: "Leadership Coach · Wealth Planner · Sales Productivity Specialist", photo: okiPhoto },
];

const ADVISORS: Leader[] = [
  { name: "Dr. Jisman M. Lubis", role: "Senior Advisor", credentials: "CFP, CRGP, ANZIIF, AAAIK, MM, MBA", expertise: "Finance · Strategy · Insurance & Wealth Management", photo: advisorJismanPhoto },
  { name: "Ir. Paula Sembiring",  role: "Senior Advisor", credentials: "QRGP, CFP, LPCP, AIIS, AAAIJ, ACS, LUTCF, MM", expertise: "Insurance Governance · Leadership Development", photo: advisorPaulaPhoto },
  { name: "Kartono",              role: "Senior Advisor", credentials: "Banking & Insurance Operations", expertise: "Marketing & Operations Leadership", photo: advisorKartonoPhoto },
  { name: "Arike Agung Widjaja", role: "Senior Advisor", credentials: "Leadership Coach · Wealth Planner", expertise: "Professional Trainer · Public Speaking · Financial Modules", photo: advisorArikePhoto },
];

const ASSOCIATES: Leader[] = [
  { name: "Ikke Harjono, CPC",      role: "Associate Facilitator", credentials: "Brain-Based Coaching · ICF Certified Coach",             expertise: "Coaching · Leadership Development",              photo: assocIkkePhoto },
  { name: "Dhani A. Widodo",        role: "Associate Facilitator", credentials: "Certified Trainer BNSP · Leadership Charisma",           expertise: "L&D · Millennial Training",                      photo: assocDhaniPhoto },
  { name: "Claudia Tomasoa",        role: "Associate Facilitator", credentials: "S.Pd. M.IKom · High Impact Facilitating · 7 Habits",     expertise: "Facilitating · Soft Skills · Communication",     photo: assocClaudiaPhoto },
  { name: "Tedi Irawan",            role: "Associate Facilitator", credentials: "25 Years L&D · Happiness Enthusiast",                    expertise: "Train the Trainer · Experiential Learning",      photo: assocTediPhoto },
  { name: "Decky Soegito, CPHRM",   role: "Associate",             credentials: "CPHRM · Certified Performance Coach",                    expertise: "HR Management · Coaching & Wellness",            photo: assocDeckyPhoto },
  { name: "Dheta Arlinta, EPC",     role: "Associate",             credentials: "Ericson Coach (ICF) · TASC Certified",                   expertise: "Coaching · Personal Development",                photo: assocDhetaPhoto },
  { name: "Rastiti Yulinda, CGHCM", role: "Associate",             credentials: "CGHCM · Coach Certification · Trainer BNSP",             expertise: "Human Resources · Coaching · Training",          photo: assocRastitiPhoto },
  { name: "Renovan Nache",          role: "Associate",             credentials: "Impactful Communication · Charming Business Attitude",   expertise: "Communication · L&D",                           photo: assocRenovanPhoto },
  // last 3 — Faisal, Joe, Dede
  { name: "Faisal Maulana",         role: "Associate Facilitator", credentials: "Certified Master Trainer · ADDIE · Kirkpatrick L1–4",    expertise: "Training Design · Learning Evaluation",          photo: assocFaisalPhoto },
  { name: "Joe Yudha",              role: "Associate",             credentials: "Ericson Coach (ICF) · TASC Certified",                   expertise: "Coaching · Personal Development",                photo: assocJoePhoto },
  { name: "Dede Dermawan",          role: "Associate",             credentials: "Digital Transformation & AI Enablement",                 expertise: "Digital Innovation · Business Automation",       photo: assocDedePhoto },
];

/* ─── Tier divider label ─────────────────────────────────────────── */
function TierDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-gold/35 via-line to-transparent" />
      <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-gold shrink-0">{label}</span>
      <div className="h-px flex-1 bg-gradient-to-l from-gold/35 via-line to-transparent" />
    </div>
  );
}

/* ─── Director featured card (horizontal) ───────────────────────── */
function DirectorCard({ leader }: { leader: Leader }) {
  return (
    <Reveal>
      <article className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#141414] border border-gold/30 shadow-[0_4px_32px_-12px_rgba(201,162,39,0.22)] flex flex-col sm:flex-row max-w-2xl mx-auto">
        {/* Accent top line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        {/* Photo */}
        <div className="sm:w-52 w-full aspect-[3/2] sm:aspect-auto shrink-0 bg-gradient-to-br from-navy via-navy to-charcoal relative overflow-hidden">
          <img src={leader.photo} alt={leader.name} className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange to-gold" />
        </div>
        {/* Info */}
        <div className="p-7 flex flex-col justify-center gap-2">
          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-orange">{leader.role}</p>
          <h3 className="font-display text-2xl md:text-3xl text-navy dark:text-cream font-bold leading-tight">{leader.name}</h3>
          <p className="text-[11px] text-charcoal/65 dark:text-cream/50 uppercase tracking-wider font-semibold">{leader.credentials}</p>
          <p className="text-sm text-charcoal dark:text-cream/75 leading-relaxed">{leader.expertise}</p>
        </div>
      </article>
    </Reveal>
  );
}

/* ─── Main exported component ───────────────────────────────────── */
export function LeadershipTieredSection() {
  const [showAssociates, setShowAssociates] = useState(false);
  const { lang } = useLang();

  const labelDirector   = lang === "id" ? "Pimpinan"               : "Leadership";
  const labelAdvisor    = lang === "id" ? "Senior Advisor"          : "Senior Advisors";
  const labelAssociate  = lang === "id" ? "Fasilitator & Konsultan" : "Facilitators & Consultants";
  const btnExpand       = lang === "id" ? "Lihat Semua Fasilitator"  : "See All Facilitators";
  const btnCollapse     = lang === "id" ? "Tutup"                   : "Collapse";

  return (
    <div className="space-y-10">
      {/* ── Tier 1: Director ── */}
      <div className="space-y-6">
        <TierDivider label={labelDirector} />
        <DirectorCard leader={DIRECTOR[0]} />
      </div>

      {/* ── Tier 2: Senior Advisors ── */}
      <div className="space-y-6">
        <TierDivider label={labelAdvisor} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADVISORS.map((p, i) => (
            <LeadershipCard key={p.name} leader={p} delay={i * 0.06} />
          ))}
        </div>
      </div>

      {/* ── Tier 3: Associates (collapsible) ── */}
      {showAssociates && (
        <div className="space-y-6">
          <TierDivider label={labelAssociate} />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {ASSOCIATES.map((p, i) => (
              <LeadershipCard key={p.name} leader={p} delay={i * 0.04} />
            ))}
          </div>
        </div>
      )}

      {/* ── See More / Collapse button ── */}
      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={() => setShowAssociates((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 dark:border-white/15 bg-white dark:bg-[#1e1e1e] px-6 py-3 text-sm font-semibold text-navy dark:text-cream hover:border-gold hover:text-gold transition-all"
        >
          {showAssociates
            ? <><ChevronUp className="h-4 w-4" /> {btnCollapse}</>
            : <><ChevronDown className="h-4 w-4" /> {btnExpand}</>
          }
        </button>
      </div>
    </div>
  );
}
