import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#05070d] text-white">
      <section className="relative isolate min-h-[calc(100vh-89px)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/dcc-hero.jpg')",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-black/20"
          aria-hidden="true"
        />

        <div className="relative flex min-h-[calc(100vh-89px)] w-full items-end px-6 pb-16 pt-24 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Dunmurry Cricket Club
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              One Club.
              <br />
              One Family.
              <br />
              One DCC.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-200 sm:text-lg">
              Competitive cricket, strong community and opportunities for
              players of varying abilities — all at the heart of Dunmurry.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join-us"
                className="inline-flex items-center justify-center rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110"
              >
                Join DCC
              </Link>

              <Link
                href="/cricket/teams"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white backdrop-blur transition hover:border-dcc-gold hover:text-dcc-gold"
              >
                Explore Our Teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="w-full">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Season Update
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              2026 Season Complete
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-300 sm:text-lg">
  Cricket may be finished for 2026, but there&apos;s always more to come at
  DCC. Thank you to our players, supporters and everyone who made the season
  possible.
</p>
          </div>
        </div>
      </section>
    </main>
  );
}