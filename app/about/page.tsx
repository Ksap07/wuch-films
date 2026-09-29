import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-5 pb-24 pt-40 md:px-10">
      <p className="text-[10px] uppercase tracking-[.3em] text-muted-foreground">About WUCH</p>
      <h1 className="mt-6 max-w-5xl font-serif text-7xl leading-[.88] tracking-[-.07em] md:text-[9rem]">A house for stories at the edges.</h1>
      <div className="mt-20 grid gap-12 border-t border-border pt-8 md:grid-cols-[1fr_1.5fr] md:gap-20">
        <p className="text-[10px] uppercase tracking-[.25em] text-muted-foreground">Independent moving image</p>
        <div className="max-w-2xl text-lg leading-8 text-muted-foreground">
          <p>WUCH FILMS is an independent film house founded by Ankit Wali and Siddarth Koul.</p>
          <p className="mt-6">We make space for considered stories, memory, people, place and cinema — from the first note to the final frame.</p>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-2 text-[10px] uppercase tracking-[.2em] text-foreground">Start a conversation <ArrowUpRight size={13} /></Link>
        </div>
      </div>
    </main>
  )
}
