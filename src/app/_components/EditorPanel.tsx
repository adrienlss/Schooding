export default function EditorPanel({ code }: { code: string }) {
  return (
    <section className="rounded-md border border-[#E0E0E0] bg-white shadow-[0_6px_12px_rgba(0,0,0,0.08)] p-3">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <button className="rounded border px-2 py-1 bg-neutral-100">Snippets ▾</button>
        <button className="rounded border px-2 py-1">+</button>
        <div className="ml-auto flex items-center gap-2">
          <span>Theme</span>
          <button className="rounded border px-2 py-1">Eclipse ▾</button>
          <button className="rounded border px-2 py-1">-</button>
          <button className="rounded border px-2 py-1">+</button>
          <button className="rounded border px-2 py-1">⤢</button>
        </div>
      </div>
      <div className="mt-3 rounded-md border border-[#E0E0E0] bg-[#fbfbfb] overflow-hidden">
        <pre className="text-[13px] leading-6 p-3 whitespace-pre overflow-auto font-mono" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Source Code Pro", monospace'}}>
{code}
        </pre>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <button className="inline-flex items-center rounded bg-[#0D47A1] px-3 py-1.5 text-white text-sm">▶ Exécuter</button>
        <span className="text-xs text-neutral-500">Console:</span>
      </div>
    </section>
  );
}


