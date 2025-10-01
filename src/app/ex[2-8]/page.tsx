'use client';

import { usePathname } from 'next/navigation';

export default function Placeholder() {
  const pathname = usePathname();
  const exNum = pathname?.match(/ex(\d+)/)?.[1];
  
  // Map exercise numbers to their HTML files
  const exFiles: Record<string, string> = {
    '2': '/exam-ex2.html',
    // Add more exercises as they're created
  };
  
  const src = exFiles[exNum || ''] || '/exam-mock.html';
  
  return (
    <iframe
      src={src}
      title="Examen"
      style={{ width: '100vw', height: '100vh', border: 'none', minWidth: '1280px' }}
    />
  );
}
