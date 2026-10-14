import Link from "next/link";
import { intro, writing, reading, projects, links, type Item } from "@/lib/site";

function Section({ title, items }: { title: string; items: Item[] }) {
  if (items.length === 0) return null;
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-sm font-semibold tracking-wider uppercase text-[#888]">{title}</h2>
      {items.map((it) => (
        <div key={it.title} className="flex justify-between gap-6 text-lg">
          {it.href ? (
            <Link href={it.href} className="underline decoration-[#bbb] underline-offset-4 hover:decoration-[#1a1a1a]">
              {it.title}
            </Link>
          ) : (
            <span>{it.title}</span>
          )}
          <span className="text-[#999] shrink-0">{it.meta}</span>
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfa] text-[#1a1a1a] font-[family-name:var(--font-body)] flex justify-center px-6 py-16 md:py-20">
      <div className="w-full max-w-[600px] flex flex-col gap-9">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Alkis Lorantos</h1>
          <p className="text-lg leading-relaxed text-[#333]">{intro}</p>
        </div>

        <Section title="Writing" items={writing} />
        <Section title="Reading" items={reading} />
        <Section title="Projects" items={projects} />

        <footer className="mt-8 flex gap-5 text-base">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-[#888] hover:text-[#1a1a1a]">
              {l.label}
            </a>
          ))}
        </footer>
      </div>
    </main>
  );
}