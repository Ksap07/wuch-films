import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ArchiveIntro } from '@/components/archive-intro'
import { founders } from '@/lib/films'

export default function Page() {
  return <main>
    <ArchiveIntro />
    <section className="cinema-section cinema-section--note relative isolate mx-auto max-w-[1440px] overflow-hidden border-t border-border/40 px-5 py-24 md:px-10 md:py-40" style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC04758.JPG-VYIvNdtYIaRHqRHu9CnZi7PR6Rgjdu.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <div className="relative z-10 grid gap-12 text-white md:grid-cols-[1fr_2fr] md:gap-20">
        <p className="text-[10px] uppercase tracking-[.3em] text-muted-foreground">A note from the studio</p>
        <div><h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-.05em] md:text-6xl">A house for stories, memory, people, place and cinema.</h2><p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground">WUCH FILMS is an independent film house founded by Ankit Wali and Siddarth Koul.</p><Link href="/about" className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-2 text-[10px] uppercase tracking-[.2em]">About WUCH <ArrowUpRight size={13} /></Link></div>
      </div>
    </section>
    <section className="cinema-section cinema-section--founders relative isolate mx-auto max-w-[1440px] overflow-hidden border-t border-border/40 px-5 py-24 md:px-10 md:py-40" style={{ backgroundImage: "linear-gradient(rgba(10, 10, 10, .52), rgba(10, 10, 10, .72)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC04804.JPG-QcOuYp6hmbi3myzl6FM8nVdICWZZ99.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}><div className="relative z-10 text-white"><div className="mb-12 flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.3em] text-muted-foreground">The filmmakers</p><h2 className="mt-5 font-serif text-5xl tracking-[-.06em] md:text-7xl">Founders</h2></div><Link href="/founders" className="hidden text-[10px] uppercase tracking-[.2em] md:block">Meet them ↗</Link></div><div className="grid gap-10 md:grid-cols-2">{founders.map((person) => <Link key={person.slug} href={`/founders/${person.slug}`} className="group border-t border-border pt-5"><p className="text-[10px] uppercase tracking-[.2em] text-muted-foreground">{person.role}</p><h3 className="mt-8 font-serif text-5xl tracking-[-.06em] transition group-hover:translate-x-2 md:text-7xl">{person.name}</h3><span className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.2em]">Meet <ArrowUpRight size={14} /></span></Link>)}</div></div></section>
  </main>
}
