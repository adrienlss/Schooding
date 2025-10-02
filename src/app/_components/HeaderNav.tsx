'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function InstructionsItem({ href }: { href: string }) {
  const pathname = usePathname() || '';
  const active = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`flex flex-col items-center px-4 py-2 text-white text-sm transition-colors ${
        active ? 'bg-[#1f3d07]' : 'hover:bg-[#1f3d07]'
      }`}
    >
      <span className="text-xs font-medium">Instructions</span>
      <span className="text-xs opacity-90">et Aide</span>
    </Link>
  );
}

function ExerciseItem({ href, number }: { href: string; number: number }) {
  const pathname = usePathname() || '';
  const active = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`flex flex-col items-center px-3 py-2 text-white text-sm transition-colors relative ${
        active ? 'bg-[#1f3d07]' : 'hover:bg-[#1f3d07]'
      }`}
    >
      <span className="text-xs font-medium">Ex {number}</span>
      <span className="text-xs opacity-90">1pts</span>
      {number === 1 && (
        <div className="absolute right-1 top-1 w-3 h-3 flex items-center justify-center">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </div>
      )}
    </Link>
  );
}

export default function HeaderNav() {
  return (
    <div className="bg-[#2a7e1f] border-t border-gray-600 border-b border-gray-300">
      <div className="flex items-stretch">
        <InstructionsItem href="/instructions" />
        <div className="flex">
          {Array.from({ length: 9 }).map((_, i) => (
            <ExerciseItem key={i} href={`/ex${i + 1}`} number={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}


