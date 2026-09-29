import type { Language } from "../i18n/ui";

export function readTime(body: string | undefined, wpm = 200): number {
  const text = body ?? "";
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}

export function formatDate(date: Date, lang: Language): string {
  return date.toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function categoryLabel(category: string, lang: Language): string {
  const labels: Record<string, { en: string; id: string }> = {
    technology: { en: "Technology", id: "Teknologi" },
    academic: { en: "Academic", id: "Akademik" },
    islam: { en: "Islam", id: "Islam" },
    life: { en: "Life", id: "Kehidupan" },
  };
  return labels[category]?.[lang] ?? category;
}

export const categories = ["technology", "academic", "islam", "life"] as const;

export function prefix(lang: Language): string {
  return lang === "en" ? "" : "/id";
}

export function writingUrl(lang: Language, category: string, slug: string): string {
  return `${prefix(lang)}/writing/${category}/${slug}`;
}

export function courseUrl(lang: Language, slug: string): string {
  return `${prefix(lang)}/courses/${slug}`;
}
