export default function LeftPanel({ children }: { children: React.ReactNode }) {
  return (
    <aside className="relative">
      <div className="rounded-md border border-[#E0E0E0] bg-white shadow-[0_6px_12px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="bg-[#1976D2] text-white px-3 py-2 text-sm font-semibold">Énoncé</div>
        <div className="p-4 text-sm">{children}</div>
      </div>
      <div className="hidden lg:block absolute -left-8 top-10 select-none">
        <div className="rotate-[-90deg] origin-left translate-x-[-8px]">
          <div className="bg-[#1976D2] text-white text-sm font-semibold px-3 py-1 rounded-t-md shadow">
            Énoncé
          </div>
        </div>
      </div>
    </aside>
  );
}


