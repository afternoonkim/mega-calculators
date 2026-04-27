import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return {
    title: isKo ? "문의" : "Contact",
    description: isKo
      ? "계산기 오류, 콘텐츠 수정, 개인정보, 제휴 문의를 한 페이지에서 보내실 수 있습니다."
      : "Reach out about a calculator issue, a correction, a privacy question, or a partnership — all from one page.",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: "/en/contact", ko: "/ko/contact" },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">{isKo ? "편하게 연락 주세요" : "Get in touch"}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{isKo ? "계산기 오류를 발견하셨거나, 콘텐츠 수정을 제안하고 싶으시거나, 개인정보 관련 궁금증이 있으시거나, 제휴·미디어 문의가 있으시다면 이 페이지에서 바로 보내실 수 있어요." : "Whether you spotted a calculator issue, want a correction, have a privacy question, or are exploring a partnership, you can send everything you need from this page."}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "일반 문의" : "General questions"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>Email: <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a></p>
            <p>{isKo ? "결과가 이상해 보이거나, 링크가 깨졌거나, 모바일·데스크톱 어느 한쪽 화면에서만 표시가 잘못된다면, 어떤 계산기에서 일어났는지 알려주세요." : "If a calculator is not behaving as you expected, a link is broken, or something looks off on mobile or desktop, send a quick note with the calculator name and what you saw."}</p>
            <p>{isKo ? "입력하신 값, 기대하신 결과, 사용 중이신 기기나 브라우저를 함께 적어주시면 더 빠르게 확인하고 고쳐드릴 수 있어요." : "Sharing the values you entered, the result you expected, and the device or browser you used helps us track it down and fix it faster for you."}</p>
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "광고·제휴 문의" : "Partnerships and media"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>Email: <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a></p>
            <p>{isKo ? "광고 집행, 파트너십 제안, 콘텐츠 활용, 데이터 라이선스에 대한 이야기를 나누고 싶으시다면 같은 주소로 보내주세요." : "If you'd like to talk about advertising, a partnership idea, content reuse, or data licensing, the same address works."}</p>
            <p>{isKo ? "메일을 보내셨는데 답이 늦다고 느껴지셔도 걱정하지 않으셔도 됩니다. 문의량에 따라 회신이 며칠 걸릴 수 있어요." : "If you don't hear back right away, no need to worry — replies can take a few days depending on volume."}</p>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{isKo ? "보내시기 전에 알아두세요" : "Before you write"}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{isKo ? "이곳에서는 법률, 세무, 금융, 의료 자문을 드릴 수 없습니다. 전문가의 판단이 필요한 주제라면 계산 결과를 일반 참고로만 활용하시고, 공식 자료나 자격을 갖춘 전문가에게 한 번 더 확인하시는 것이 안전해요." : "Please note that legal, tax, financial, and medical advice cannot be offered here. If your question touches a regulated topic, treat any calculator result as general information and verify it with an official source or a qualified professional before acting on it."}</p>
      </section>
    </div>
  );
}
