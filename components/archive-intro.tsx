export function ArchiveIntro() {
  return (
    <section
      className="relative flex min-h-[520px] h-[82vh] items-end overflow-hidden bg-[#080706] text-[#f3eee6]"
      aria-label="WUCH FILMS archive introduction"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .68)), url('https://www.wuchfilms.in/hero-production-still.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,transparent_0%,rgba(0,0,0,.22)_70%)]" />
      <div className="relative z-10 w-full px-5 pb-10 md:px-10 md:pb-12">
        <p className="font-mono text-[10px] uppercase tracking-[.3em] text-[#c6bdb0]">An independent moving image house</p>
        <h1 className="mt-5 max-w-5xl font-serif text-[4.5rem] leading-[.78] tracking-[-.07em] md:text-[9rem]">Stories<br />from the edges.</h1>
      </div>
    </section>
  )
}
