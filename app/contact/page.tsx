import type { Metadata } from "next";
import AdSlot from "@/components/ads/AdSlot";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mega Calculators for support, corrections, calculator issues, privacy questions, or business inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Contact Mega Calculators</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
          Use this page to report calculator issues, request content corrections, ask privacy questions, or contact us about partnerships and advertising.
        </p>
      </section>

      <AdSlot slotKey="contentMid" label="Content ad" minHeightClass="min-h-[140px]" />

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">General support</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>Email: <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a></p>
            <p>
              Contact us if a calculator is not working correctly, if a page has incorrect content, or if you notice a broken link or formatting issue on mobile or desktop.
            </p>
            <p>
              For faster help, include the calculator name, the values you entered, the result you expected, and the device or browser you used.
            </p>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Business and media inquiries</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>Email: <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a></p>
            <p>
              Use this address for advertising questions, partnership ideas, data or content licensing discussions, or other business-related requests.
            </p>
            <p>
              We aim to respond within a reasonable timeframe, but response times can vary depending on request volume.
            </p>
          </div>
        </article>
      </section>

      <AdSlot slotKey="contentBottom" label="Bottom content ad" minHeightClass="min-h-[140px]" />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Important note</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          Mega Calculators does not provide legal, tax, financial, or medical advice. If your message relates to a regulated or professional topic,
          calculator outputs should be treated as general information only and verified with an appropriate professional or official source.
        </p>
      </section>
    </div>
  );
}
