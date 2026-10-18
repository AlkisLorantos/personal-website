
import Link from "next/link";

export default function PlainPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#fcfcfa] text-[#1a1a1a] font-[family-name:var(--font-body)] flex justify-center px-6 py-16 md:py-20">
      <div className="w-full max-w-[600px] flex flex-col gap-9">
        <Link href="/" className="text-base text-[#888] hover:text-[#1a1a1a]">← Alkis Lorantos</Link>
        <h1 className="text-3xl font-semibold">{title}</h1>
        {children}
      </div>
    </main>
  );
}