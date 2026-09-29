import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { films } from '@/lib/films'

export default function FilmsPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-40 md:px-10">
      <header className="border-b border-border pb-16">
        <p className="text-[10px] uppercase tracking-[.3em] text-muted-foreground">The work</p>
        <h1 className="mt-6 font-serif text-7xl tracking-[-.07em] md:text-[8rem]">Films</h1>
      </header>

      <section className="relative min-h-[390px] overflow-hidden md:min-h-[460px]" aria-labelledby="film-list-heading">
        <Image src={films[0].image} alt="Film still from WUCH FILMS" fill priority className="object-cover brightness-[.55] transition duration-700" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15" />
        <div className="relative flex min-h-[390px] flex-col justify-between p-7 text-white md:min-h-[460px] md:p-10">
          <p className="text-[10px] uppercase tracking-[.24em] text-white/75">The archive is being assembled</p>
          <div className="max-w-3xl">
            <h2 id="film-list-heading" className="font-serif text-6xl leading-[.9] tracking-[-.07em] md:text-[6.5rem]">The next story<br />is taking shape.</h2>
            <p className="mt-7 max-w-md text-xs leading-5 text-white/75">No films have been published yet. Verified WUCH FILMS releases will appear when they are ready to be seen.</p>
          </div>
        </div>
      </section>

      <div className="sr-only">
        {films.map((film) => <Link key={film.slug} href={`/films/${film.slug}`}>{film.title}</Link>)}
      </div>
    </main>
  )
}
