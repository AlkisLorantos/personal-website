import Link from "next/link";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { devProjects, type Project } from "@/lib/site";

const sans = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

const c = {
  bg: "#0b0f19",
  text: "#f2ede3",
  body: "#c0c4ce",
  muted: "#858c9c",
  line: "#1f2536",
  accent: "#e3b261",
};

const statusDot: Record<Project["status"], string> = {
  live: "#8fc9a3",
  "in progress": c.accent,
  paused: "#858c9c",
  idea: "#7f9cc9",
};

export default function Projects() {
  return (
    <main className={`${sans.className} min-h-screen flex justify-center px-6 py-16 md:py-20`} style={{ background: c.bg, color: c.text }}>
      <div className="w-full max-w-[760px] flex flex-col gap-11">
        <div className="flex justify-between items-baseline gap-6">
          <h1 className="text-3xl md:text-[34px] font-semibold tracking-tight">Projects</h1>
          <Link href="/" className={`${mono.className} text-[13px] hover:opacity-80`} style={{ color: c.muted }}>
            Alkis Lorantos
          </Link>
        </div>

        <div className="flex flex-col" style={{ borderBottom: `1px solid ${c.line}` }}>
          {devProjects.map((p) => (
            <article
              key={p.name}
              className="grid md:grid-cols-[150px_1fr] gap-x-10 gap-y-3 py-7"
              style={{ borderTop: `1px solid ${c.line}` }}
            >
              <div className={`${mono.className} flex md:flex-col gap-3 md:gap-1.5 text-[13px]`} style={{ color: c.muted }}>
                <span>{p.date}</span>
                <span style={{ color: c.accent }}>{p.version}</span>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h2 className="text-[22px] font-semibold">{p.name}</h2>
                  <div className={`${mono.className} flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-wider`} style={{ color: c.muted }}>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusDot[p.status] }} />
                      {p.status}
                    </span>
                    {p.tags?.map((t) => <span key={t}>· {t}</span>)}
                  </div>
                </div>

                <p className="text-[17px] leading-relaxed" style={{ color: c.body }}>
                  {p.description}
                  {p.latest && <> Latest: {p.latest}</>}
                </p>

                <p className={`${mono.className} text-[13px]`} style={{ color: c.muted }}>
                  {p.stack.join(" / ")}
                  {p.repo && <> · <a href={p.repo} className="hover:underline underline-offset-4" style={{ color: c.text }}>source</a></>}
                  {p.url && <> · <a href={p.url} className="hover:underline underline-offset-4" style={{ color: c.text }}>live</a></>}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}