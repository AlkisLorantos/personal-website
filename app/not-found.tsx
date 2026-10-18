import Link from "next/link";
import PlainPage from "@/components/PlainPage";

export default function NotFound() {
  return (
    <PlainPage title="Not found">
      <p className="text-lg leading-relaxed text-[#333]">
        This page doesn't exist, or it has moved.
      </p>
      <Link
        href="/"
        className="text-lg underline decoration-[#bbb] underline-offset-4 hover:decoration-[#1a1a1a] w-fit"
      >
        Back to the home page
      </Link>
    </PlainPage>
  );
}