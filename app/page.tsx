import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m Alkis 👋</h1>
      <p className="text-lg mb-8">Developer and programmer building awesome things.</p>
      <nav className="space-x-4">
        <a href="/aboutme" className="text-blue-500 hover:underline">About Me</a>
        <a href="/projects" className="text-blue-500 hover:underline">Projects</a>
        <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
        <a href="/blog" className="text-blue-500 hover:underline">Blog</a>
      </nav>
    </main>
  );
}
