import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ExamCard } from '@/components/exam-card';
import { SearchBox } from '@/components/search-box';

export default function Home() {
  return <main>
    <section className="container pt-12 pb-10 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-bold"><CheckCircle2 size={15} className="text-[var(--green)]"/> Free. Curated. No forced login.</div>
        <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">Everything you need to <span className="text-[var(--primary)]">prepare better.</span></h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">Studania organises trustworthy free notes, formulas, lectures, previous year papers, practice material and doubts in one fast place.</p>
        <div className="mx-auto mt-8 max-w-2xl"><SearchBox /></div>
      </div>
    </section>
    <section className="container pb-8 md:pb-14"><h2 className="mb-5 text-xl font-bold">Choose your exam</h2><div className="grid gap-4 md:grid-cols-3"><ExamCard id="jee"/><ExamCard id="neet"/><ExamCard id="upsc"/></div></section>
    <section className="container py-10"><div className="grid gap-4 md:grid-cols-4">{[['Notes','Clear theory, linked to trusted sources.'],['Formulas','Fast one-page revision.'],['Lectures','Free videos with attribution.'],['PYQs','Official-first past papers.']].map(([t,d]) => <div key={t} className="card p-5"><p className="font-bold">{t}</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{d}</p></div>)}</div></section>
    <section className="container pb-16"><div className="card overflow-hidden p-8 md:p-10"><div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-bold text-[var(--primary)]">Student community</p><h2 className="mt-2 text-3xl font-black">Stuck? Ask a doubt.</h2><p className="mt-2 max-w-xl leading-7 text-[var(--muted)]">Read recent questions without an account, or post yours in the Doubt Hub.</p></div><Link href="/doubts" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-5 py-3 font-bold text-[var(--background)]">Open Doubt Hub <ArrowRight size={17}/></Link></div></div></section>
  </main>;
}
