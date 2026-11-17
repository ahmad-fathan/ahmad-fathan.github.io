// Interactive teaching simulations, organized by course.
//
// URL layout:
//   /teaching/<course slug>               course page, lists its simulations by material
//   /teaching/<course slug>/<sim slug>    one simulation
//
// To add a simulation to an existing course:
//   1. create src/pages/teaching/<course slug>/<sim slug>.astro
//      (put its component in src/components/simulations/)
//   2. add one entry to `simulations` below.
// To give another course its own page, add it to `coursePages` first.
// The Teaching page, the course pages and the sitemap all read these lists.

export interface CoursePage {
  courseId: string; // file name in src/content/teaching (without .md)
  slug: string; // URL segment under /teaching/
}

export interface Simulation {
  slug: string;
  courseId: string; // must match a CoursePage.courseId
  material: string; // course material / topic the simulation belongs to
  title: string;
  summary: string;
  topics: string[];
  updated: string; // YYYY-MM
}

export const coursePages: CoursePage[] = [
  { courseId: "fundamen-sains-data", slug: "data-science-fundamentals" },
];

// Order in which materials are listed on a course page.
// Materials not listed here appear after these, alphabetically.
export const materialOrder: string[] = ["Classification"];

export const simulations: Simulation[] = [
  {
    slug: "naive-bayes",
    courseId: "fundamen-sains-data",
    material: "Classification",
    title: "Naïve Bayes Classifier",
    summary:
      "A guided path in plain words: the theory first (probability, Bayes' theorem, the naive idea), then step-by-step examples (spam, Play Golf, Laplace smoothing, Gaussian NB), then practice questions with hints.",
    topics: ["Bayes' theorem", "Laplace smoothing", "Gaussian NB"],
    updated: "2026-11",
  },
];

export function coursePageFor(courseId: string): CoursePage | undefined {
  return coursePages.find((c) => c.courseId === courseId);
}

export function simulationsFor(courseId: string): Simulation[] {
  return simulations.filter((s) => s.courseId === courseId);
}

export function simulationHref(s: Simulation): string {
  const course = coursePageFor(s.courseId);
  if (!course) throw new Error(`No course page for simulation "${s.slug}" (courseId "${s.courseId}")`);
  return `/teaching/${course.slug}/${s.slug}`;
}

export function groupByMaterial(list: Simulation[]): { material: string; items: Simulation[] }[] {
  const names = [...new Set(list.map((s) => s.material))].sort((a, b) => {
    const ia = materialOrder.indexOf(a), ib = materialOrder.indexOf(b);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
    return a.localeCompare(b);
  });
  return names.map((material) => ({ material, items: list.filter((s) => s.material === material) }));
}
