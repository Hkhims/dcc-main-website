import Link from "next/link";

const teams = [
  {
    name: "DCC 1",
    label: "1ST XI",
    href: "/cricket/teams/dcc-1",
  },
  {
    name: "DCC 2",
    label: "2ND XI",
    href: "/cricket/teams/dcc-2",
  },
  {
    name: "DCC 3",
    label: "3RD XI",
    href: "/cricket/teams/dcc-3",
  },
  {
    name: "DCC 4",
    label: "4TH XI",
    href: "/cricket/teams/dcc-4",
  },
  {
    name: "MIDWEEK 1",
    label: "1ST XI",
    href: "/cricket/teams/midweek-1",
  },
  {
    name: "MIDWEEK 2",
    label: "2ND XI",
    href: "/cricket/teams/midweek-2",
  },
];

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
              The 2026 cricket season may be over, but there&apos;s always more to
              come at DCC. Thank you to our players, supporters and everyone who
              made the season possible.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="w-full">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Cricket at DCC
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Our Teams
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <Link
                key={team.name}
                href={team.href}
                className="group flex min-h-44 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-dcc-gold/60 hover:bg-white/[0.05]"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-dcc-gold">
                    {team.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
                    {team.name}
                  </h3>
                </div>

                <div className="mt-10 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300 transition group-hover:text-dcc-gold">
                  View Team
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
            <section className="border-t border-white/10 bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-dcc-gold/20 bg-[#0a0f1c] p-8 sm:p-10 lg:p-12">
          <div
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-dcc-gold/5 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute bottom-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-950/20 to-transparent"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              DCC Performance Centre
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Your 2026 Season.
              <br />
              In Numbers.
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-300 sm:text-lg">
              Explore player profiles, match scorecards, team performances,
              leaderboards and season statistics from across Dunmurry Cricket
              Club.
            </p>

            <a
              href="https://dcc-performance-centre.vercel.app/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110"
            >
              Explore Performance Centre
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
            <section className="border-t border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Join DCC
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Looking for a cricket club?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
              Whether you&apos;re an experienced player or simply looking for
              an opportunity to play, there&apos;s a place for you at Dunmurry
              Cricket Club.
            </p>
          </div>

          <Link
            href="/join-us"
            className="inline-flex shrink-0 items-center justify-center self-start rounded-full border border-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-dcc-gold transition hover:bg-dcc-gold hover:text-black lg:self-auto"
          >
            Join DCC
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
            <section className="border-t border-white/10 bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Proudly Supported By
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Indian Curry Point
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://indiancurrypoint.sumupstore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110"
              >
                Visit Website
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="https://www.instagram.com/indiancurrypoint?igsi=MW12b2g4NjRudWhsaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-dcc-gold hover:text-dcc-gold"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-xs items-center justify-center rounded-3xl bg-white p-5 sm:p-6">
            <img
              src="/indian-curry-point-logo.png"
              alt="Indian Curry Point logo"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
            <footer className="border-t border-white/10 bg-[#03050a] px-6 py-10">
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
      </footer>
    </main>
  );
}