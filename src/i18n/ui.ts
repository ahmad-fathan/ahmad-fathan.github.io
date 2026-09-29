// Central translation dictionary for shared interface strings.
// The public site ships English only, but the dictionary keeps the `en`/`id`
// shape so components can stay language-agnostic if a mirror is added later.

export const languages = {
  en: "English",
  id: "Indonesia",
} as const;

export type Language = keyof typeof languages;
export type UIKey = keyof typeof ui.en;

export const ui = {
  en: {
    "site.title": "Ahmad Fathan Hidayatullah — Assistant Professor",
    "site.description":
      "Ahmad Fathan Hidayatullah — Assistant Professor of Computer Science at Universitas Islam Indonesia, working on natural language processing, text mining, and data science.",
    "site.author": "Ahmad Fathan Hidayatullah",

    "nav.home": "Home",
    "nav.publications": "Publications",
    "nav.research": "Research",
    "nav.teaching": "Teaching",
    "nav.talks": "Talks",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "nav.skip": "Skip to content",

    "footer.tagline":
      "Assistant Professor at Universitas Islam Indonesia, working on natural language processing, text mining, and data science.",
    "footer.quickLinks": "Quick Links",
    "footer.profile": "Profiles",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Astro & Tailwind CSS",

    "cta.viewAll": "View all",
    "cta.readMore": "Read more",
    "cta.allPublications": "All publications",
    "cta.downloadCv": "Download CV (PDF)",
    "cta.inviteSpeak": "Invite me to speak",
    "cta.emailMe": "Email me",

    "home.focus": "Research Interests",
    "home.recentPublications": "Recent Publications",
    "home.teaching": "Teaching",
    "home.talks": "Recent Talks",
    "home.contact": "Get in Touch",

    "empty.title": "Content coming soon",
  },
  id: {
    "site.title": "Ahmad Fathan Hidayatullah — Lektor",
    "site.description":
      "Ahmad Fathan Hidayatullah — Lektor Ilmu Komputer di Universitas Islam Indonesia, meneliti pemrosesan bahasa alami, penambangan teks, dan sains data.",
    "site.author": "Ahmad Fathan Hidayatullah",

    "nav.home": "Beranda",
    "nav.publications": "Publikasi",
    "nav.research": "Riset",
    "nav.teaching": "Pengajaran",
    "nav.talks": "Berbicara",
    "nav.cv": "CV",
    "nav.contact": "Kontak",
    "nav.skip": "Langsung ke konten",

    "footer.tagline":
      "Lektor di Universitas Islam Indonesia, meneliti pemrosesan bahasa alami, penambangan teks, dan sains data.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.profile": "Profil",
    "footer.rights": "Hak cipta dilindungi.",
    "footer.built": "Dibangun dengan Astro & Tailwind CSS",

    "cta.viewAll": "Lihat semua",
    "cta.readMore": "Baca selengkapnya",
    "cta.allPublications": "Semua publikasi",
    "cta.downloadCv": "Unduh CV (PDF)",
    "cta.inviteSpeak": "Undang saya berbicara",
    "cta.emailMe": "Kirim surel",

    "home.focus": "Minat Riset",
    "home.recentPublications": "Publikasi Terbaru",
    "home.teaching": "Pengajaran",
    "home.talks": "Kegiatan Terbaru",
    "home.contact": "Hubungi",

    "empty.title": "Konten segera hadir",
  },
} as const;

export function t(lang: Language, key: UIKey): string {
  return ui[lang][key];
}
