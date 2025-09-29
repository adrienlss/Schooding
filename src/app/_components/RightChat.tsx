export default function RightChat() {
  return (
    <aside className="rounded-md border border-[#E0E0E0] bg-white shadow-[0_6px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full min-h-[480px]">
      <div className="bg-[#2E7D32] text-white px-3 py-2 text-sm font-semibold">Chat Enseignant</div>
      <div className="flex-1 overflow-auto p-3 text-sm text-neutral-600"> </div>
      <div className="border-t border-[#E0E0E0] p-2">
        <div className="flex items-center gap-2 mb-2 text-sm">
          <button className="rounded border px-2 py-1">B</button>
          <button className="rounded border px-2 py-1">I</button>
          <button className="rounded border px-2 py-1">U</button>
          <button className="rounded border px-2 py-1">A</button>
        </div>
        <div className="flex items-stretch gap-2">
          <input className="flex-1 rounded border border-[#E0E0E0] px-3 py-2" placeholder="Tapez votre message..." />
          <button className="rounded border px-3">😊</button>
          <button className="bg-[#1976D2] text-white px-3">›</button>
        </div>
      </div>
    </aside>
  );
}


