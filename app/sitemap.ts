import type { MetadataRoute } from "next";
import { calculatorCategories, calculators } from "@/lib/calculators/data";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";

const baseUrl = "https://mega-calculators.com";
const locales = ["en", "ko"] as const;
const staticRoutes = ["", "/about", "/blog", "/calculators", "/contact", "/faq", "/guides", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ko: `${baseUrl}/ko${route}`,
          },
        },
      });
    }

    for (const category of calculatorCategories) {
      entries.push({
        url: `${baseUrl}/${locale}/calculators/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/calculators/${category.slug}`,
            ko: `${baseUrl}/ko/calculators/${category.slug}`,
          },
        },
      });
    }

    for (const calculator of calculators) {
      const path = `/calculators/${calculator.category}/${calculator.slug}`;
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: {
            en: `${baseUrl}/en${path}`,
            ko: `${baseUrl}/ko${path}`,
          },
        },
      });

      for (const subPath of ["/formula", "/guide", "/use-cases"]) {
        entries.push({
          url: `${baseUrl}/${locale}${path}${subPath}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: {
            languages: {
              en: `${baseUrl}/en${path}${subPath}`,
              ko: `${baseUrl}/ko${path}${subPath}`,
            },
          },
        });
      }

      for (const example of getCalculatorExamples(calculator)) {
        const examplePath = `${path}/examples/${example.slug}`;
        entries.push({
          url: `${baseUrl}/${locale}${examplePath}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.6,
          alternates: {
            languages: {
              en: `${baseUrl}/en${examplePath}`,
              ko: `${baseUrl}/ko${examplePath}`,
            },
          },
        });
      }
    }
  }

  return entries;
}
