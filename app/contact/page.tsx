import { Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 px-8 md:px-20 lg:px-32 pt-20 md:pt-28 pb-24">
        <h1
          className={`${instrumentSerif.className} text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight`}
        >
          Contact
        </h1>
        <p className="mt-6 text-lg text-[#6B6B6B] max-w-xl">
          Want to work together, talk about a project, or just say hello? Reach out.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className={`${instrumentSerif.className} text-2xl mb-6`}>
              Send a message
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border border-[#D4CFC7] rounded-sm px-4 py-3 text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#B8860B] transition-colors duration-200"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-[#D4CFC7] rounded-sm px-4 py-3 text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#B8860B] transition-colors duration-200"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="bg-transparent border border-[#D4CFC7] rounded-sm px-4 py-3 text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#B8860B] transition-colors duration-200 resize-none"
              />
              <button
                type="submit"
                className="self-start mt-2 px-6 py-3 bg-[#1A1A1A] text-[#F5F2ED] text-sm tracking-wide uppercase hover:bg-[#B8860B] transition-colors duration-200 rounded-sm"
              >
                Send
              </button>
            </form>
          </div>

          <div>
            <h2 className={`${instrumentSerif.className} text-2xl mb-6`}>
              Find me elsewhere
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:your@email.com"
                className="text-[#1A1A1A] hover:text-[#B8860B] transition-colors duration-200"
              >
                your@email.com
              </a>
              <a href="https://github.com/AlkisLorantos" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200">
                GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200">
                LinkedIn
              </a>
              <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200">
                Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}