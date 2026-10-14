import Link from "next/link";
import { writing, reading, projects } from "@/lib/site";

export default function Landing() {
  const latest = [
    writing[0] && { label: `Writing · ${writing[0].meta}`, ...writing[0] },
    reading[0] && { label: `Reading · ${reading[0].meta}`, ...reading[0] },
    projects[0] && { label: "Project", ...projects[0] },
  ].filter(Boolean) as { label: string; title: string; href?: string }[];

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1a1a1a] font-[family-name:var(--font-sans)] flex flex-col px-6 md:px-24 py-12">
      <nav className="flex justify-between items-center text-[15px]">
        <span className="font-medium">Alkis Lorantos</span>
        <div className="flex gap-7 text-[#555]">
          <Link href="/writing">Writing</Link>
          <Link href="/reading">Reading</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </nav>

      <div className="mt-28 max-w-[820px] flex flex-col gap-5">
        <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl leading-[1.05]">
          [Your sentence.] <i className="text-[#8a3b2b]">[Second thought.]</i>
        </h1>
        <p className="text-lg text-[#555]">Political science at Deree, Athens. Greek, French, English.</p>
      </div>

      <div className="mt-auto pt-16 grid md:grid-cols-3 gap-10 border-t border-[#d6d1c6]">
        {latest.map((x) => (
          <div key={x.label} className="flex flex-col gap-1.5 pt-6">
            <span className="text-[13px] text-[#888]">{x.label}</span>
            <span className="font-[family-name:var(--font-serif)] text-2xl">{x.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
}