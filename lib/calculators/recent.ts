export const MAX_RECENT_CALCULATORS = 6;

export type RecentCalculator = {
  category: string;
  slug: string;
  visitedAt: number;
};

export function normalizeRecentCalculators(value: unknown): RecentCalculator[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter(
      (item): item is Record<string, unknown> =>
        Boolean(item) && typeof item === "object" && !Array.isArray(item),
    )
    .filter(
      (item) =>
        typeof item.category === "string" &&
        typeof item.slug === "string" &&
        typeof item.visitedAt === "number" &&
        Number.isFinite(item.visitedAt),
    )
    .map((item) => ({
      category: item.category as string,
      slug: item.slug as string,
      visitedAt: item.visitedAt as number,
    }))
    .slice(0, MAX_RECENT_CALCULATORS);
}
