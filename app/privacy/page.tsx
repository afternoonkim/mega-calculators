import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Mega Calculators privacy policy covering cookies, analytics, advertising, contact information, and user rights.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-black tracking-tight text-slate-950">Privacy Policy</h1>
      <p className="mt-4 text-sm leading-7 text-slate-500">Last updated: April 2, 2026</p>
      <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600 md:text-base">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">1. Overview</h2>
          <p className="mt-3">Mega Calculators is a free online calculator and content website. This policy explains what information may be collected when you use the site, how that information may be used, and what choices may be available to you.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">2. Information we may collect</h2>
          <div className="mt-3 space-y-3">
            <p>We may collect limited technical and usage information such as browser type, device type, referring pages, pages viewed, and general analytics data.</p>
            <p>We may also collect information you choose to send directly, such as your name, email address, and message contents when you contact us.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">3. Cookies and analytics</h2>
          <div className="mt-3 space-y-3">
            <p>We may use cookies, analytics tools, and similar technologies to understand site performance, improve user experience, measure traffic, and keep the website functioning properly.</p>
            <p>Analytics services may collect information such as pages visited, approximate location, device details, and interaction patterns.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">4. Advertising</h2>
          <div className="mt-3 space-y-3">
            <p>The site may display advertising, including ads served by Google AdSense or similar partners, in the future. Advertising providers may use cookies or similar technologies to deliver ads, measure performance, and personalize content where permitted.</p>
            <p>Google and its partners may use cookies to serve ads based on visits to this site and other websites. Users can learn more about available controls through Google’s advertising and privacy resources.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">5. How information may be used</h2>
          <p className="mt-3">Information may be used to operate the website, respond to messages, improve calculators and content, analyze performance, prevent abuse, and support advertising.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">6. Data sharing</h2>
          <p className="mt-3">We may share data with service providers that help operate the site, such as hosting providers, analytics providers, and advertising partners. We may also disclose information if required by law or to protect the security and integrity of the site.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">7. Data retention</h2>
          <p className="mt-3">We keep information only for as long as reasonably necessary to operate the site, respond to inquiries, meet legal obligations, or support legitimate business needs.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">8. Children’s privacy</h2>
          <p className="mt-3">Mega Calculators is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">9. Your choices</h2>
          <p className="mt-3">You can control cookies through your browser settings and may choose not to send personal information through email or contact messages. Depending on your location, you may also have rights related to access, correction, or deletion of personal information.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">10. Contact</h2>
          <p className="mt-3">For privacy-related questions, contact <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
