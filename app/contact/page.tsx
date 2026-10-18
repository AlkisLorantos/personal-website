import PlainPage from "@/components/PlainPage";
import { links } from "@/lib/site";

export default function Contact() {
  return (
    <PlainPage title="Contact">
      <p className="text-lg leading-relaxed text-[#333]">The easiest way to reach me is by email.</p>
      <div className="flex flex-col gap-2 text-lg">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="underline decoration-[#bbb] underline-offset-4 hover:decoration-[#1a1a1a] w-fit">
            {l.label}
          </a>
        ))}
      </div>
    </PlainPage>
  );
}