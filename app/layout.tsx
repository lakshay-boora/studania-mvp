import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StudaniaThemeProvider } from '@/components/theme-provider';
import { SiteShell } from '@/components/site-shell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Studania — Free resources for JEE, NEET & UPSC',
  description: 'A fast, organised, student-first resource hub for competitive exams.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={inter.className}><StudaniaThemeProvider><SiteShell>{children}</SiteShell></StudaniaThemeProvider></body></html>;
}
