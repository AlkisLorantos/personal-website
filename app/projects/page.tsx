import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const projects = [
  {
    title: "Water Polo Stats",
    description:
      "Full-stack statistics application for water polo. Built with Next.js, Express, Prisma, and Supabase. Features shot tracking, game management, and player analytics.",
    tags: ["Next.js", "TypeScript", "Express", "Supabase"],
    status: "In Progress",
  },
  {
    title: "Political Analysis Blog",
    description:
      "A public writing platform focused on power, politics, and human nature. Built with Next.js and Sanity CMS, with self-hosted analytics.",
    tags: ["Next.js", "Sanity", "Vercel"],
    status: "Live",
  },
  {
    title: "Rust Explorations",
    description:
      "A collection of progressively complex Rust projects — from ciphers and word counters to social simulations and ideology drift modeling.",
    tags: ["Rust", "Systems", "Simulation"],
    status: "Ongoing",
  },
  {
    title: "OSINT Network Explorer",
    description:
      "Corporate ownership network analysis tool using ICIJ Offshore Leaks data. Link analysis, fraud detection, and PEP cross-referencing.",
    tags: ["Python", "Graph Analysis", "OSINT"],
    status: "Planned",
  },
  {
    title: "Analytics Service",
    description:
      "Python FastAPI service for advanced water polo analytics — possession tracking, expected goals modeling, heatmaps, and a future computer vision pipeline.",
    tags: ["FastAPI", "Python", "SQLAlchemy"],
    status: "Planned",
  },
  {
    title: "More Coming Soon",
    description:
      "Always building. Check back for new projects or reach out if you want to collaborate.",
    tags: [],
    status: "",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 px-8 md:px-20 lg:px-32 pt-20 md:pt-28 pb-24">
        <h1
          className={`${instrumentSerif.className} text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight`}
        >
          Projects
        </h1>
        <p className="mt-6 text-lg text-[#6B6B6B] max-w-xl">
          My coding projects.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-[#D4CFC7] rounded-sm p-6 hover:border-[#B8860B] transition-colors duration-200"
            >
              <div className="flex justify-between items-start">
                <h2 className={`${instrumentSerif.className} text-2xl`}>
                  {project.title}
                </h2>
                {project.status && (
                  <span className="text-xs tracking-wide uppercase text-[#6B6B6B] border border-[#D4CFC7] px-2 py-1 rounded-sm shrink-0 ml-4">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="mt-3 text-[#6B6B6B] leading-relaxed">
                {project.description}
              </p>
              {project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#6B6B6B] bg-[#EBE7E0] px-2 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}