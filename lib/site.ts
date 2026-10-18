export type Item = { title: string; meta: string; href?: string };

export const intro =
  "I study political science at Deree in Athens, play water polo, write, and build things with code. This is where I keep what I'm reading, thinking about and making.";

export const writing: Item[] = [
];

export const reading: Item[] = [
  { title: "Lettres à un jeune poète, Rilke", meta: "now" },
  { title: "Heart of Darkness, Conrad", meta: "Oct 2026" },
];

export type Project = {
  name: string;
  date: string;      
  version: string;   
  status: "live" | "archived" | "in progress" | "paused" | "idea";
  tags?: string[];
  description: string;
  latest?: string;   
  stack: string[];
  repo?: string;
  url?: string;
};

export const devProjects: Project[] = [
  {
    name: "wp-stats",
    date: "Oct 2026",
    version: "v0.3",
    status: "in progress",
    description: "[What it does.]",
    latest: "[What changed in this version.]",
    stack: ["[tech]", "[tech]"],
  },
  {
    name: "personal-website",
    date: "Oct 2026",
    version: "v2.0",
    status: "live",
    description: "This site.",
    latest: "Rebuilt from scratch as one plain column, with each section in its own register.",
    stack: ["Next.js", "Tailwind"],
    repo: "https://github.com/AlkisLorantos/personal-website",
  },
];

export const projects: Item[] = devProjects.map((p) => ({ title: p.name, meta: p.version }));
export const links = [
  { label: "Email", href: "mailto:YOUR_EMAIL" },
  { label: "GitHub", href: "https://github.com/AlkisLorantos" },
  { label: "CV", href: "/cv.pdf" },
];