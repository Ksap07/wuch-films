import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { films } from '@/lib/films'

export default function FilmsPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-40 md:px-10">
      <header className="border-b border-border pb-10">
        <p className="text-[10px] uppercase tracking-[.3em] text-muted-foreground">The work</p>
        <h1 className="mt-6 font-serif text-7xl tracking-[-.07em] md:text-[10rem]">Films</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_280px]">
          <p className="max-w-2xl text-xl leading-8 text-muted-foreground md:text-2xl">Stories made with patience, rooted in place, and carried by the people who tell them.</p>
          <p className="text-xs uppercase leading-5 tracking-[.16em] text-muted-foreground">A WUCH FILMS archive<br />of stories in motion</p>
        </div>
      </header>

      <section className="py-12 md:py-20" aria-labelledby="film-list-heading">
        <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
          <h2 id="film-list-heading" className="text-[10px] uppercase tracking-[.3em]">Selected work</h2>
          <span className="text-[10px] uppercase tracking-[.2em] text-muted-foreground">{String(films.length).padStart(2, '0')} films</span>
        </div>
        <div className="grid gap-12">
          {films.map((film) => (
            <Link key={film.slug} href={`/films/${film.slug}`} className="group grid gap-7 md:grid-cols-[minmax(0,1.5fr)_minmax(260px,1fr)] md:items-end">
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <Image src={film.image} alt={`${film.title} film still`} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 70vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[.24em] text-white">{film.status}</span>
              </div>
              <div className="border-t border-border pt-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[.24em] text-muted-foreground">{film.year} · {film.format}</p>
                    <h3 className="mt-4 font-serif text-5xl tracking-[-.06em] md:text-7xl">{film.title}</h3>
                  </div>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">{film.description}</p>
                <p className="mt-8 text-[10px] uppercase tracking-[.2em]">{film.director}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
