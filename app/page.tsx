import { Instrument_Serif, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${dmSans.className} min-h-screen bg-[#F5F2ED] text-[#1A1A1A] flex flex-col`}>
      <Navbar />

      <section className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 pb-24">
        <h1 className={`${instrumentSerif.className} text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight`}>
          Alkis
        </h1>
        <p className="mt-6 text-lg text-[#6B6B6B]">
          Mathematics & Computer Science · Paris
        </p>
        <p className="mt-12 text-xl md:text-2xl max-w-2xl leading-relaxed">
          I build things, write, and play water polo
          professionally. Currently living in Paris.
        </p>
      </section>

      <Footer />
    </main>
  );
}