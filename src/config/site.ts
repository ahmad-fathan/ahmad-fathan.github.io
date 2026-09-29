// Central site configuration.
// Single source of truth for stable academic/profile facts.
// Keep profile URLs here - do not hardcode them in components.

export const site = {
  name: "Ahmad Fathan Hidayatullah",
  shortName: "Fathan",
  monogram: "AFH",
  title: "Assistant Professor of Computer Science",
  affiliation: "Department of Informatics, Universitas Islam Indonesia",
  tagline: {
    en: "Assistant Professor · NLP & Data Science",
    id: "Lektor · NLP & Sains Data",
  },
  intro: {
    en: "I am an Assistant Professor at the Department of Informatics, Universitas Islam Indonesia. My work spans natural language processing, text mining, and data science — with a focus on code-mixed and low-resource language settings.",
    id: "Saya Lektor di Jurusan Informatika, Universitas Islam Indonesia. Bidang kerja saya meliputi pemrosesan bahasa alami, penambangan teks, dan sains data — dengan fokus pada teks campur kode dan bahasa dengan sumber daya terbatas.",
  },
  url: "https://ahmad-fathan.github.io",
  location: "Yogyakarta, Indonesia",
  cvPath: "/files/cv.pdf",
} as const;

export const profiles: {
  github: string;
  email: string;
  googleScholar: string;
  orcid: string;
  scopus: string;
  linkedin: string;
} = {
  github: "https://github.com/ahmad-fathan",
  email: "fathan@uii.ac.id",
  googleScholar: "https://scholar.google.com/citations?user=24pU2eQAAAAJ",
  orcid: "https://orcid.org/0000-0002-3755-2648",
  scopus: "https://www.scopus.com/authid/detail.uri?authorId=57188832335",
  linkedin: "https://www.linkedin.com/in/ahmad-fathan-hidayatullah-33b54711b/",
};

export const researchInterests = [
  "Natural Language Processing",
  "Large Language Models",
  "Text Mining",
  "Data Science",
  "Code-Mixed Text Processing",
  "Sentiment Analysis",
  "Language Identification",
] as const;
