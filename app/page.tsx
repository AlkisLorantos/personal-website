import Link from "next/link";
import ItemList from "@/components/ItemList";
import { intro, writing, reading, projects, links, type Item } from "@/lib/site";

function Section({ title, href, items }: { title: string; href: string; items: Item[] }) {
  return (
    <section className="flex flex-col gap-2">
      <Link
        href={href}
        className="text-sm font-semibold tracking-wider uppercase text-[#888] hover:text-[#1a1a1a] w-fit"
      >
        {title} →
      </Link>
      {items.length > 0 && <ItemList items={items.slice(0, 3)} />}
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

        <Section title="Writing" href="/writing" items={writing} />
        <Section title="Reading" href="/reading" items={reading} />
        <Section title="Projects" href="/projects" items={projects} />

        <footer className="mt-8 flex gap-5 text-base">
          <Link href="/contact" className="text-[#888] hover:text-[#1a1a1a]">
            Contact
          </Link>
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