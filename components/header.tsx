import Link from 'next/link';
import { Search } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_92%,transparent)] backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight text-xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)] text-white">S</span>
          Studania
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold md:flex">
          <Link href="/jee">JEE</Link><Link href="/neet">NEET</Link><Link href="/upsc">UPSC</Link><Link href="/doubts">Doubt Hub</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] hover:opacity-80"><Search size={18}/></Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
