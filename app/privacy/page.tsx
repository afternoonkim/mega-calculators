import type { Metadata } from "next";
import AdSlot from "@/components/ads/AdSlot";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Mega Calculators privacy policy covering cookies, analytics, advertising, contact information, and user rights.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-black tracking-tight text-slate-950">Privacy Policy</h1>
      <p className="mt-4 text-sm leading-7 text-slate-500">Last updated: March 16, 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600 md:text-base">
        <AdSlot slotKey="contentMid" label="Policy page ad" minHeightClass="min-h-[140px]" />
        <section>
          <h2 className="text-2xl font-bold text-slate-900">1. Overview</h2>
          <p className="mt-3">
            Mega Calculators is a free online calculator and converter website. This privacy policy explains what information may be collected when you use the site,
            how that information may be used, and what choices you may have.
          </p>
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
            <p>
              Mega Calculators may use cookies, analytics tools, and similar technologies to understand site performance, improve the user experience,
              measure traffic, and keep the site functioning properly.
            </p>
            <p>
              Analytics services may collect information such as pages visited, approximate location information, device details, and interaction patterns.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">4. Advertising</h2>
          <div className="mt-3 space-y-3">
            <p>
              Mega Calculators may display advertising, including ads served by Google AdSense or similar advertising partners.
              Advertising providers may use cookies or similar technologies to deliver ads, measure performance, and personalize content where permitted.
            </p>
            <p>
              Google and its partners may use cookies to serve ads based on your visit to this site and other sites on the internet.
              Users can learn more about Google advertising practices and available controls through Google&apos;s advertising and privacy resources.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">5. How information may be used</h2>
          <div className="mt-3 space-y-3">
            <p>Information may be used to operate the website, respond to messages, improve calculators and content, analyze performance, prevent abuse, and support advertising.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">6. Data sharing</h2>
          <div className="mt-3 space-y-3">
            <p>
              We may share data with service providers that help operate the site, such as hosting providers, analytics providers, and advertising partners.
              We may also disclose information if required by law or to protect the security and integrity of the site.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">7. Data retention</h2>
          <p className="mt-3">
            We keep information only for as long as reasonably necessary to operate the site, respond to inquiries, meet legal obligations, or support legitimate business needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">8. Children&apos;s privacy</h2>
          <p className="mt-3">
            Mega Calculators is not directed to children under 13, and we do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">9. Your choices</h2>
          <p className="mt-3">
            You can control cookies through your browser settings and may choose not to send personal information through email or contact messages.
            Depending on your location, you may also have rights related to access, correction, or deletion of personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">10. Contact</h2>
          <p className="mt-3">
            For privacy-related questions, contact <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">11. Policy updates</h2>
          <p className="mt-3">
            We may update this policy from time to time. When we do, the updated version will be posted on this page with a revised effective date.
          </p>
        </section>

        <AdSlot slotKey="contentBottom" label="Bottom content ad" minHeightClass="min-h-[140px]" />
      </div>
    </div>
  );
}
