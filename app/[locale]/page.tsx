import type { Metadata } from "next";
import Link from "next/link";
import { calculatorCategories, calculators, getCalculator } from "@/lib/calculators/data";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import { localizeCalculatorDefinition, localizeCategoryName } from "@/lib/calculators/localization";
import { getBlogPosts, getGuides } from "@/lib/editorial";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";
  return {
    title: isKo ? "무료 온라인 계산기 모음" : "Free Online Calculators and Converters",
    description: isKo
      ? "대출, 복리, BMI, 나이, 퍼센트, 단위 변환까지 한국어로 바로 계산할 수 있는 무료 온라인 계산기 모음입니다."
      : "Mega Calculators offers free online calculators and converters for finance, health, time, math, unit conversion, and everyday life.",
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ko: "/ko" },
    },
  };
}

const featuredCalculators = [
  { category: "finance", slug: "compound-interest-calculator", tag: "Investing", tagKo: "투자" },
  { category: "finance", slug: "mortgage-calculator", tag: "Home", tagKo: "주택" },
  { category: "health", slug: "bmi-calculator", tag: "Health", tagKo: "건강" },
  { category: "life", slug: "concrete-calculator", tag: "Projects", tagKo: "공사" },
  { category: "time", slug: "age-calculator", tag: "Time", tagKo: "시간" },
  { category: "math", slug: "kinetic-energy-calculator", tag: "Science", tagKo: "과학" },
  { category: "unit-converters", slug: "base-converter", tag: "Conversion", tagKo: "변환" },
  { category: "unit-converters", slug: "cups-to-tablespoons-converter", tag: "Kitchen", tagKo: "주방" },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";
  const totalCalculators = calculators.length;
  const categoryCards = calculatorCategories.map((category) => ({
    ...category,
    name: localizeCategoryName(category.slug, locale),
    items: calculators.filter((item) => item.category === category.slug),
  }));
  const blogPosts = getBlogPosts(locale).slice(0, 3);
  const guides = getGuides(locale).slice(0, 3);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mega Calculators",
    url: `https://mega-calculators.com/${locale}`,
    inLanguage: locale,
  };

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <section className="rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-sm md:px-10 md:py-16">
        <div className="max-w-5xl">
          <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{isKo ? "무료 온라인 도구" : "Free online tools"}</div>
          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">{isKo ? "대출, 복리, BMI, 날짜, 퍼센트, 단위 변환까지 한 번에 계산하세요" : "Free calculators for money, health, dates, conversions, and daily tasks"}</h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">{isKo ? "Mega Calculators는 금융, 건강, 시간, 수학, 단위 변환, 생활 계산을 빠르게 처리할 수 있는 무료 온라인 계산기 사이트입니다. 필요한 계산기를 먼저 찾고, 설명 글과 가이드로 결과 해석까지 이어서 확인할 수 있습니다." : "Mega Calculators helps you solve common questions faster with clean, easy-to-use online calculators. Find the tool you need first, then use practical articles and guides when you want more context."}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={withLocale(locale, "/calculators")} className="rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">{isKo ? "전체 계산기 보기" : "Browse all calculators"}</Link>
            <Link href={withLocale(locale, "/faq")} className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">{isKo ? "자주 묻는 질문" : "Read site FAQ"}</Link>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <StatCard label={isKo ? "전체 계산기" : "Total calculators"} value={`${totalCalculators}`} />
          <StatCard label={isKo ? "주요 카테고리" : "Main categories"} value={`${categoryCards.length}`} />
          <StatCard label={isKo ? "자주 쓰는 분야" : "Popular uses"} value={isKo ? "금융, 건강, 생활" : "Finance, health, projects"} />
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{isKo ? "인기 계산기" : "Popular tools"}</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{isKo ? "많이 찾는 계산기부터 시작해보세요" : "Start with the calculators people use most"}</h2>
          </div>
          <Link href={withLocale(locale, "/calculators")} className="text-sm font-semibold text-blue-700">{isKo ? "전체 보기 →" : "View all calculators →"}</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredCalculators.map((item) => {
            const match = getCalculator(item.category, item.slug);
            if (!match) return null;
            const localized = localizeCalculatorDefinition(match, locale);
            return (
              <Link key={item.slug} href={withLocale(locale, `/calculators/${item.category}/${item.slug}`)} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{isKo ? item.tagKo : item.tag}</div>
                <div className="mt-3 text-lg font-bold text-slate-950">{localized.name}</div>
                <div className="mt-2 text-sm text-slate-600">{isKo ? "계산기 열기 →" : "Open calculator →"}</div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{isKo ? "카테고리" : "Categories"}</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{isKo ? "주제별로 계산기 찾아보기" : "Explore calculators by category"}</h2>
          </div>
          <Link href={withLocale(locale, "/calculators")} className="text-sm font-semibold text-blue-700">{isKo ? "전체 카테고리 →" : "View all categories →"}</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categoryCards.map((category) => (
            <Link key={category.slug} href={withLocale(locale, `/calculators/${category.slug}`)} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{category.items.length} {isKo ? "개 도구" : "tools"}</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{category.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{isKo ? `${category.name} 관련 계산기를 한 곳에서 빠르게 찾아볼 수 있습니다. 한국어 설명과 함께 바로 계산을 시작해보세요.` : `Find calculators in ${category.name.toLowerCase()} for quick answers, simple comparisons, and everyday planning.`}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{isKo ? "블로그" : "Blog"}</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{isKo ? "계산기와 함께 읽으면 좋은 글" : "Articles that make calculators easier to use"}</h2>
          </div>
          <Link href={withLocale(locale, "/blog")} className="text-sm font-semibold text-blue-700">{isKo ? "블로그 전체 보기 →" : "View all blog posts →"}</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{post.updatedAt}</div>
              <h3 className="mt-3 text-xl font-bold text-slate-950">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
              <div className="mt-5">
                <Link href={withLocale(locale, `/blog/${post.slug}`)} className="text-sm font-semibold text-blue-700">{isKo ? "자세히 보기 →" : "Read article →"}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{isKo ? "가이드" : "Guides"}</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{isKo ? "결과를 읽는 법까지 정리한 가이드" : "Step-by-step guides for common calculator questions"}</h2>
          </div>
          <Link href={withLocale(locale, "/guides")} className="text-sm font-semibold text-blue-700">{isKo ? "가이드 전체 보기 →" : "View all guides →"}</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{guide.updatedAt}</div>
              <h3 className="mt-3 text-xl font-bold text-slate-950">{guide.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
              <div className="mt-5">
                <Link href={withLocale(locale, `/guides/${guide.slug}`)} className="text-sm font-semibold text-blue-700">{isKo ? "가이드 보기 →" : "Open guide →"}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{isKo ? "왜 Mega Calculators인가" : "Why people use Mega Calculators"}</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{isKo ? "복잡하지 않게, 필요한 계산만 빠르게" : "A calculator site built to be practical"}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{isKo ? "불필요하게 복잡한 화면 대신 입력과 결과가 명확하게 보이도록 구성했습니다. 계산기뿐 아니라 설명 글과 가이드를 함께 제공해 숫자를 실제 판단에 연결하기 쉽게 만들었습니다." : "Some calculator sites feel crowded or confusing. Mega Calculators keeps things simple with clear forms, readable results, and short explanations that help you use the answer right away."}</p>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <InfoCard title={isKo ? "바로 계산" : "Fast answers"} description={isKo ? "숫자만 입력하면 핵심 결과와 보조 수치를 즉시 확인할 수 있습니다." : "Open a calculator, enter your numbers, and get a clear result without digging through cluttered screens."} />
          <InfoCard title={isKo ? "읽기 쉬운 설명" : "Useful explanations"} description={isKo ? "한국어 안내 문구와 활용 예시로 계산 결과를 이해하기 쉽도록 만들었습니다." : "Each tool includes a short explanation, simple usage steps, and an example so the result is easier to understand."} />
          <InfoCard title={isKo ? "넓은 주제 범위" : "Everyday coverage"} description={isKo ? "금융, 건강, 날짜, 수학, 단위 변환, 생활 계산 등 자주 찾는 주제를 폭넓게 다룹니다." : "Use Mega Calculators for money, health, dates, home projects, cooking, schoolwork, and common conversion tasks."} />
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return <div className="rounded-3xl bg-white/5 p-5 backdrop-blur"><div className="text-sm text-slate-300">{label}</div><div className="mt-2 text-3xl font-black text-white">{value}</div></div>;
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></article>;
}
