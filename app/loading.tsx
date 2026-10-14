export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#D4CFC7] border-t-[#B8860B] rounded-full animate-spin" />
        <p className="text-sm text-[#6B6B6B] animate-pulse">Loading...</p>
      </div>
    </main>
  );
}