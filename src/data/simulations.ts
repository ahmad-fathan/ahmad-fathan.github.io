// Interactive teaching simulations.
// To add a new simulation: create its page under src/pages/teaching/simulations/
// and add one entry here. The index page and the Teaching page read this list.

export interface Simulation {
  slug: string; // page path: /teaching/simulations/<slug>
  title: string;
  summary: string;
  course: string; // course name as shown on the Teaching page
  topics: string[];
  updated: string; // YYYY-MM
}

export const simulations: Simulation[] = [
  {
    slug: "naive-bayes",
    title: "Naïve Bayes Classifier",
    summary:
      "A guided path in plain words: the theory first (probability, Bayes' theorem, the naive idea), then step-by-step examples (spam, Play Golf, Laplace smoothing, Gaussian NB), then practice questions with hints.",
    course: "Data Science Fundamentals",
    topics: ["Classification", "Bayes' theorem", "Laplace smoothing", "Gaussian NB"],
    updated: "2026-11",
  },
];
