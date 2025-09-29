'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Item({ href, label }: { href: string; label: string }) {
  const pathname = usePathname() || '';
  const active = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`flex items-center gap-1 rounded px-2 py-0.5 text-sm ${
        active ? 'bg-[#1f3d07]' : 'bg-[#2f550a] hover:bg-[#274707]'
      }`}
    >
      <span className="opacity-90">›</span>
      <span>{label}</span>
      <span className="ml-1 rounded bg-black/20 px-1 text-[10px] leading-4">1pts</span>
    </Link>
  );
}

export default function HeaderNav() {
  return (
    <div className="flex items-center gap-2">
      <Item href="/instructions" label="Instructions et Aide" />
      <nav className="hidden md:flex items-center gap-2 text-sm">
        {Array.from({ length: 8 }).map((_, i) => (
          <Item key={i} href={`/ex${i + 1}`} label={`Ex ${i + 1}`} />
        ))}
      </nav>
    </div>
  );
}


