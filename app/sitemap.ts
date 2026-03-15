import type { MetadataRoute } from "next";
import { calculatorCategories, calculators } from "@/lib/calculators/data";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mega-calculators.com";
  const staticPages = ["", "/calculators", "/faq", "/about", "/contact", "/privacy"];

  const categoryPages = calculatorCategories.map((category) => ({
    url: `${baseUrl}/calculators/${category.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const calculatorPages = calculators.flatMap((calculator) => {
    const base = `${baseUrl}/calculators/${calculator.category}/${calculator.slug}`;
    const examples = getCalculatorExamples(calculator).map((example) => ({
      url: `${base}/examples/${example.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.72,
    }));

    return [
      {
        url: base,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      {
        url: `${base}/formula`,
        changeFrequency: "monthly" as const,
        priority: 0.68,
      },
      {
        url: `${base}/guide`,
        changeFrequency: "monthly" as const,
        priority: 0.68,
      },
      {
        url: `${base}/use-cases`,
        changeFrequency: "monthly" as const,
        priority: 0.67,
      },
      ...examples,
    ];
  });

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...categoryPages,
    ...calculatorPages,
  ];
}
