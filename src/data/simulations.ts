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
  { courseId: "fundamen-matematika", slug: "fundamentals-of-mathematics" },
];

// Order in which materials are listed on a course page.
// Materials not listed here appear after these, alphabetically.
export const materialOrder: string[] = ["Classification", "Regression", "Evaluation", "Set Theory"];

export const simulations: Simulation[] = [
  {
    slug: "naive-bayes",
    courseId: "fundamen-sains-data",
    material: "Classification",
    title: "Naïve Bayes Classifier",
    summary:
      "The theory in plain words, then worked examples (spam, Play Golf, Laplace smoothing, Gaussian NB), then practice with hints.",
    topics: ["Bayes' theorem", "Laplace smoothing", "Gaussian NB"],
    updated: "2026-11",
  },
  {
    slug: "svm",
    courseId: "fundamen-sains-data",
    material: "Classification",
    title: "Support Vector Machine",
    summary:
      "Find the widest street between two groups yourself, solve a small SVM by hand, turn the C dial, and see how a kernel turns a straight cut into a circle.",
    topics: ["Margin & support vectors", "Soft margin (C)", "Kernels"],
    updated: "2026-11",
  },
  {
    slug: "regression",
    courseId: "fundamen-sains-data",
    material: "Regression",
    title: "Regression, Cost and Gradient Descent",
    summary:
      "Fit a line with OLS, score it with a cost function, walk downhill with gradient descent, then predict pass/fail.",
    topics: ["Linear regression", "Cost function", "Gradient descent", "Logistic regression"],
    updated: "2026-11",
  },
  {
    slug: "model-evaluation",
    courseId: "fundamen-sains-data",
    material: "Evaluation",
    title: "Model Evaluation Practice",
    summary:
      "Three guess-first exercises: confusion matrix metrics, choosing the right metric, and diagnosing overfitting.",
    topics: ["Confusion matrix", "Precision & recall", "F1-score", "Cross-validation"],
    updated: "2026-11",
  },
  {
    slug: "sets",
    courseId: "fundamen-matematika",
    material: "Set Theory",
    title: "Sets and Set Operations",
    summary:
      "Click through five worked examples on a Venn diagram: union, intersection, complement and difference, the symmetric difference two ways, a combined expression, and counting with Inclusion-Exclusion for two and three sets.",
    topics: ["Venn diagrams", "Set operations", "Inclusion-Exclusion"],
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
