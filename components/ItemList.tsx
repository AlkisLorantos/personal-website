import Link from "next/link";
import type { Item } from "@/lib/site";

export default function ItemList({ items, empty = "Nothing here yet." }: { items: Item[]; empty?: string }) {
  if (items.length === 0) return <p className="text-lg text-[#999]">{empty}</p>;
  return (
    <div className="flex flex-col gap-2">
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
    </div>
  );
}