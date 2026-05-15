import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Primera Karya Sinergia" }, { name: "description", content: "How Primera Karya Sinergia handles your data." }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="bg-cream py-24 min-h-screen">
      <div className="container-x max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl mt-6">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ink/55">Last updated: 1 May 2026</p>
        <div className="mt-10 space-y-6 text-ink/75 leading-relaxed">
          <p>Primera Karya Sinergia ("Primera", "we", "us") respects your privacy and is committed to protecting your personal data.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">Information We Collect</h2>
          <p>We collect information you provide via our consultation form, email, or WhatsApp — including name, contact details, company, role, and the message you send.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">How We Use Your Information</h2>
          <p>To respond to your enquiry, schedule consultations, and share relevant insights you have requested. We do not sell your data to third parties.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">Storage</h2>
          <p>Form submissions are stored securely and only accessible to the Primera advisory team. You may request deletion at any time by emailing info@primerasinergia.co.id.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">Cookies & Analytics</h2>
          <p>We may use privacy-friendly analytics to understand site performance. No personally identifying information is shared with third-party advertisers.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">Contact</h2>
          <p>For privacy questions, contact info@primerasinergia.co.id.</p>
        </div>
        <Link to="/" className="mt-12 inline-flex text-sm underline underline-offset-4">← Back home</Link>
      </div>
    </section>
  );
}
