import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { journal } from '@/lib/films'

export default function JournalPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-5 pb-24 pt-40 md:px-10">
      <p className="text-[10px] uppercase tracking-[.3em] text-muted-foreground">Notes from the studio</p>
      <h1 className="mt-6 font-serif text-7xl tracking-[-.07em] md:text-[10rem]">Journal</h1>

      <section className="group relative mt-16 min-h-[420px] overflow-hidden rounded-sm bg-[#171412] text-[#f4eee7] md:min-h-[500px]">
        <Image src="/journal-still.jpeg" alt="A quiet behind-the-scenes moment from the studio" fill priority className="object-cover object-center opacity-75 transition duration-700 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 1100px" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/95 via-[#171412]/35 to-[#171412]/10" />
        <div className="relative flex min-h-[420px] flex-col justify-end p-7 md:min-h-[500px] md:p-12">
          <p className="text-[10px] uppercase tracking-[.3em] text-[#c8a98c]">Studio still / 01</p>
          <h2 className="mt-5 max-w-md font-serif text-4xl leading-[.95] tracking-[-.05em] md:text-6xl">The spaces between the scenes.</h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-[#c9c0b8]">A glimpse into the quiet rituals, rough edges, and considered details that shape the work before it reaches the screen.</p>
        </div>
      </section>

      <div className="mt-20">{journal.map((entry) => <Link href={`/journal/${entry.slug}`} key={entry.slug} className="group grid gap-4 border-t border-border py-8 md:grid-cols-[120px_1fr_40px]"><p className="text-xs text-muted-foreground">{entry.date}</p><div><p className="text-[10px] uppercase tracking-[.2em] text-accent">{entry.category}</p><h2 className="mt-3 font-serif text-4xl tracking-[-.05em]">{entry.title}</h2><p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{entry.excerpt}</p></div><ArrowUpRight className="text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>)}</div>
    </main>
  )
}
