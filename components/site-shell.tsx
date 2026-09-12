import type { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

export function SiteShell({ children }: { children: ReactNode }) {
  return <><Header />{children}<Footer /></>;
}
