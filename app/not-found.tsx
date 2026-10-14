import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8">
      <h1 className="font-[family-name:var(--font-serif)] text-8xl md:text-9xl tracking-tight">
        404
      </h1>
      <p className="mt-4 text-lg text-[#6B6B6B]">
        This page doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm tracking-wide uppercase text-[#6B6B6B] hover:text-[#B8860B] transition-colors duration-200"
      >
        ← Back home
      </Link>
    </main>
  );
}