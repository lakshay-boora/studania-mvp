 'use client';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur sticky top-0 z-50">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-lg font-black tracking-tight">Studania</Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/jee">JEE</Link>
          <Link href="/neet">NEET</Link>
          <Link href="/upsc">UPSC</Link>
          <Link href="/doubts">Doubts</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
