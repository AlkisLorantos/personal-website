import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className="px-8 md:px-20 lg:px-32 py-8 border-t border-[#D4CFC7]">
      <div className="flex justify-between items-center">
        <span className={`${instrumentSerif.className} text-xl text-[#6B6B6B]`}>A.L.</span>
        <div className="flex gap-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200">LinkedIn</a>
          <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200">Blog</a>
        </div>
      </div>
    </footer>
  );
}