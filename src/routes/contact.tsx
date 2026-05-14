import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import contactImg from "@/assets/contact-meeting.jpg";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const search = z.object({ interest: z.string().optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Contact — Primera Karya Sinergia" },
      { name: "description", content: "Schedule a strategic consultation with Primera Karya Sinergia. Office in Kebayoran Lama, Jakarta Selatan." },
      { property: "og:title", content: "Contact Primera" },
      { property: "og:description", content: "Schedule a strategic consultation." },
    ],
  }),
  component: ContactPage,
});

const INTERESTS = ["Training & Workshop", "Leadership Development", "Sales Capability", "Talent Assessment", "Facilitator Development", "CRM ACT", "Business Consulting", "Other"];

function ContactPage() {
  const { interest } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", role: "",
    interest: interest ?? "Training & Workshop", date: "", message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    try {
      const list = JSON.parse(localStorage.getItem("primera_leads") || "[]");
      list.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem("primera_leads", JSON.stringify(list));
    } catch {}
    setSubmitted(true);
  };

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(`Consultation: ${form.interest}`)}&body=${encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nRole: ${form.role}\nPhone: ${form.phone}\nPreferred date: ${form.date}\n\n${form.message}`)}`;

  return (
    <>
      <section className="bg-cream pt-24 pb-12">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9] text-balance">Let's design your next chapter.</h1>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-ink/70 leading-relaxed">
              Tell us about your people goals — leadership, sales, talent, or digital execution. We typically respond within two business hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl bg-white border border-line p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
                {submitted ? (
                  <div className="relative text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-gold mx-auto" />
                    <h2 className="mt-6 font-display text-3xl uppercase tracking-wide">Thank you</h2>
                    <p className="mt-3 text-ink/70 max-w-md mx-auto">Your request has been received. A Primera advisor will respond within two business hours.</p>
                    <div className="mt-8 flex flex-wrap gap-3 justify-center">
                      <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Primera, I just submitted a consultation request.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-sm">
                        <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
                      </a>
                      <button onClick={() => { setSubmitted(false); setForm({ ...form, message: "" }); }} className="text-sm underline underline-offset-4">Send another</button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="relative grid gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Name *" v={form.name} on={(v) => setForm({ ...form, name: v })} required />
                      <Field label="Email *" type="email" v={form.email} on={(v) => setForm({ ...form, email: v })} required />
                      <Field label="Phone / WhatsApp" v={form.phone} on={(v) => setForm({ ...form, phone: v })} />
                      <Field label="Company" v={form.company} on={(v) => setForm({ ...form, company: v })} />
                      <Field label="Role" v={form.role} on={(v) => setForm({ ...form, role: v })} />
                      <div>
                        <label className="text-xs uppercase tracking-wider text-ink/60">Service Interest</label>
                        <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm focus:border-ink outline-none">
                          {INTERESTS.map((i) => <option key={i}>{i}</option>)}
                        </select>
                      </div>
                    </div>
                    <Field label="Preferred Date" type="date" v={form.date} on={(v) => setForm({ ...form, date: v })} />
                    <div>
                      <label className="text-xs uppercase tracking-wider text-ink/60">Challenge / Message *</label>
                      <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm focus:border-ink outline-none resize-none" placeholder="Tell us about your people development priorities…" />
                    </div>
                    <p className="text-[11px] text-ink/50">By submitting, you agree to our <a href="/privacy" className="underline">privacy policy</a>. We never share your details.</p>
                    <div className="flex flex-wrap gap-3">
                      <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium hover:bg-charcoal transition">
                        Send Request <ArrowRight className="h-4 w-4" />
                      </button>
                      <a href={mailto} className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm hover:border-ink transition">
                        <Mail className="h-4 w-4" /> Email instead
                      </a>
                      <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm hover:border-ink transition">
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5 space-y-5">
            <div className="overflow-hidden rounded-3xl">
              <img src={contactImg} alt="Indonesian consultation meeting" className="w-full h-64 object-cover" loading="lazy" />
            </div>
            <div className="rounded-3xl bg-ink text-cream p-8 space-y-5">
              <div>
                <SectionLabel gold>Office</SectionLabel>
                <p className="mt-3 text-cream/80 text-sm leading-relaxed">{SITE.address}</p>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm underline underline-offset-4 text-gold">
                  <MapPin className="h-4 w-4" /> Open in Maps
                </a>
              </div>
              <div className="border-t border-cream/10 pt-5 space-y-3 text-sm">
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-gold"><Mail className="h-4 w-4 text-gold" />{SITE.email}</a>
                <a href={`tel:${SITE.phone.replace(/\s/g,"")}`} className="flex items-center gap-3 hover:text-gold"><Phone className="h-4 w-4 text-gold" />{SITE.phone}</a>
                <a href={`tel:${SITE.phoneOki.replace(/\s/g,"")}`} className="flex items-center gap-3 hover:text-gold"><Phone className="h-4 w-4 text-gold" />{SITE.phoneOki} <span className="text-cream/45 text-xs">(Director)</span></a>
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold"><MessageCircle className="h-4 w-4 text-gold" />WhatsApp Business</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, v, on, type = "text", required }: { label: string; v: string; on: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-ink/60">{label}</label>
      <input type={type} value={v} onChange={(e) => on(e.target.value)} required={required} className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm focus:border-ink outline-none" />
    </div>
  );
}
