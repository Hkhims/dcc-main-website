import Image from "next/image";
import Link from "next/link";

const seasonHighlights = [
  {
    label: "DCC 2",
    title: "Junior League Section 6 Champions",
    note: "A title-winning 2026 season secured promotion into Junior League Section 5 for 2027.",
  },
  {
    label: "DCC 3",
    title: "Promoted from Junior League Section 7",
    note: "DCC 3 earned promotion in 2026 and will compete in Junior League Section 6 in 2027.",
  },
  {
    label: "Midweek 2",
    title: "Back-to-Back Midweek League Champions",
    note: "Midweek 2 retained the Midweek League title in 2026 after also winning the competition in 2025.",
  },
];

export default function FixturesPage() {
  return (
    <main className="bg-[#05070d] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/fixtures-hero.webp"
            alt="Dunmurry Cricket Club player celebrating with a trophy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_center] lg:object-center"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-black/20"
            aria-hidden="true"
          />
        </div>

        <div className="relative flex min-h-[62vh] items-end px-6 py-16 sm:py-20 lg:min-h-[68vh] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Cricket
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Fixtures
              <br />
              & Results
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
              Follow DCC throughout the season, from upcoming fixtures to the
              latest results across our weekend and midweek teams.
            </p>
          </div>
        </div>
      </section>

      {/* Season Complete */}
      <section className="border-b border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              2026 Season
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Season
              <br />
              Complete.
            </h2>
          </div>

          <div className="max-w-4xl space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              The 2026 season has now concluded across DCC&apos;s weekend and
              midweek cricket.
            </p>

            <p>
              Full match history, scorecards, team journeys and player
              performance information remain available through the DCC
              Performance Centre.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Recap */}
      <section className="border-b border-white/10 bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="w-full">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
            2026 at DCC
          </p>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              A season to
              <br />
              remember.
            </h2>

            <p className="max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              A small look back at some of the club&apos;s major team
              achievements from the 2026 season.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {seasonHighlights.map((highlight) => (
              <article
                key={highlight.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-dcc-gold">
                  {highlight.label}
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
                  {highlight.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-zinc-300">
                  {highlight.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Centre */}
      <section className="border-b border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-3xl border border-dcc-gold/20 bg-[#0a0f1c] p-8 sm:p-10 lg:p-12">
            <div
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-dcc-gold/5 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
                  2026 Match Archive
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                  Explore the
                  <br />
                  full season.
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
                  Visit the DCC Performance Centre for complete match history,
                  scorecards, team standings, player statistics and season
                  performance.
                </p>
              </div>

              <a
                href="https://dcc-performance-centre.vercel.app/matches"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center self-start rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110 lg:self-auto"
              >
                View 2026 Matches
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Looking Ahead
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              2027
              <br />
              awaits.
            </h2>
          </div>

          <div className="max-w-4xl space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              DCC&apos;s 2027 fixtures will be added here once the new season
              schedule has been confirmed.
            </p>

            <p>
              Until then, explore the Performance Centre to revisit the 2026
              season across all six DCC teams.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#03050a] px-6 py-10">
        <div className="w-full">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Dunmurry Cricket Club
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-dcc-gold">
                One Club. One Family. One DCC.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8">
              <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-300">
                <Link href="/" className="transition hover:text-dcc-gold">
                  Home
                </Link>

                <Link
                  href="/club/about"
                  className="transition hover:text-dcc-gold"
                >
                  Club
                </Link>

                <Link
                  href="/cricket/teams"
                  className="transition hover:text-dcc-gold"
                >
                  Cricket
                </Link>

                <Link
                  href="/join-us"
                  className="transition hover:text-dcc-gold"
                >
                  Join Us
                </Link>

                <a
                  href="https://dcc-performance-centre.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-dcc-gold"
                >
                  Performance Centre
                </a>
              </nav>

              <div className="flex gap-4 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-300">
                <a
                  href="https://www.facebook.com/dunmurrycc?locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-dcc-gold"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/dunmurrycc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-dcc-gold"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-zinc-500">
            © 2026 Dunmurry Cricket Club
          </div>
        </div>
      </footer>
    </main>
  );
}