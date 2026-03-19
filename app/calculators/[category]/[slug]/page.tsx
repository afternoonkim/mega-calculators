import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CalculatorEngine from "@/components/calculators/CalculatorEngine";
import { calculators, getCalculator, getRelatedCalculators } from "@/lib/calculators/data";
import { getProgrammaticHubLinks } from "@/lib/calculators/programmatic";

export function generateStaticParams() {
  return calculators.map((calculator) => ({
    category: calculator.category,
    slug: calculator.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) return {};

  return {
    title: `${calculator.name} - Free Online Calculator`,
    description: calculator.description,
    keywords: [
      calculator.name,
      `${calculator.name} online`,
      `${calculator.name} free`,
      `${calculator.categoryName.toLowerCase()}`,
    ],
    alternates: {
      canonical: `/calculators/${calculator.category}/${calculator.slug}`,
    },
    openGraph: {
      title: `${calculator.name} - Mega Calculators`,
      description: calculator.description,
      url: `https://mega-calculators.com/calculators/${calculator.category}/${calculator.slug}`,
      siteName: "Mega Calculators",
      type: "website",
    },
  };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) notFound();

  const calculatorData = calculator;

  const related = getRelatedCalculators(calculatorData.relatedSlugs).map((item) => ({
    name: item.name,
    href: `/calculators/${item.category}/${item.slug}`,
  }));

  const hubLinks = getProgrammaticHubLinks(calculatorData);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: calculatorData.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: calculatorData.name,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    description: calculatorData.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: `https://mega-calculators.com/calculators/${calculatorData.category}/${calculatorData.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mega-calculators.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculators",
        item: "https://mega-calculators.com/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: calculatorData.categoryName,
        item: `https://mega-calculators.com/calculators/${calculatorData.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: calculatorData.name,
        item: `https://mega-calculators.com/calculators/${calculatorData.category}/${calculatorData.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/calculators">Calculators</Link>
        <span className="mx-2">/</span>
        <Link href={`/calculators/${calculatorData.category}`}>
          {calculatorData.categoryName}
        </Link>
      </nav>

      <CalculatorEngine
        locale="en"
        definition={calculatorData}
        relatedLinks={related}
        hubLinks={hubLinks}
      />
    </div>
  );
}