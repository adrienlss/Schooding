import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schooding",
  description: "Clone UI",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = (headers().get("x-invoke-path") || "").toString();
  const isActive = (href: string) => currentPath.startsWith(href);
  const Item = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={`flex items-center gap-1 rounded px-2 py-0.5 text-sm ${
        isActive(href) ? "bg-[#1f3d07]" : "bg-[#2f550a] hover:bg-[#274707]"
      }`}
    >
      <span className="opacity-90">›</span>
      <span>{label}</span>
      <span className="ml-1 rounded bg-black/20 px-1 text-[10px] leading-4">1pts</span>
    </Link>
  );

  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100 text-neutral-900`}>
        <header className="sticky top-0 z-50 w-full bg-[#3f6f0d] text-white shadow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-12 items-center justify-between">
              <div className="flex items-center gap-2">
                <Item href="/instructions" label="Instructions et Aide" />
                <nav className="hidden md:flex items-center gap-2 text-sm">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Item key={i} href={`/ex${i + 1}`} label={`Ex ${i + 1}`} />
                  ))}
                </nav>
              </div>
              <div className="text-xs opacity-90">Adrien Lassus* · Termine dans : 1h 59m</div>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
