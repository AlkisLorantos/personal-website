import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-20 lg:px-32 py-6">
      <Link
        href="/"
        className="font-[family-name:var(--font-serif)] text-xl hover:text-[#B8860B] transition-colors duration-200"
      >
        A.L.
      </Link>
      <div className="flex gap-8">
        <Link href="/projects" className="relative text-sm tracking-wide uppercase text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-[#B8860B] after:transition-all after:duration-200 hover:after:w-full">Projects</Link>
        <Link href="/about" className="relative text-sm tracking-wide uppercase text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-[#B8860B] after:transition-all after:duration-200 hover:after:w-full">About</Link>
        <Link href="/contact" className="relative text-sm tracking-wide uppercase text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-[#B8860B] after:transition-all after:duration-200 hover:after:w-full">Contact</Link>
      </div>
    </nav>
  );
}