import Image from "next/image";
import Link from "next/link";

const teams = [
  "DCC 1 — 1st XI",
  "DCC 2 — 2nd XI",
  "DCC 3 — 3rd XI",
  "DCC 4 — 4th XI",
  "Midweek 1 — 1st XI",
  "Midweek 2 — 2nd XI",
];

const facilities = [
  "Changing rooms",
  "Showers",
  "Clubhouse",
  "Outdoor practice nets",
  "Parking",
];

export default function AboutPage() {
  return (
    <main className="bg-[#05070d] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/dcc-ground.jpg"
            alt="Dunmurry Cricket Club ground"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/40 to-black/20"
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
              The Club
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              About
              <br />
              Dunmurry Cricket Club
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
              A competitive and welcoming cricket club at the heart of
              Dunmurry, bringing players together through cricket, community
              and a shared love of the game.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-b border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Cricket.
              <br />
              Community.
              <br />
              DCC.
            </h2>
          </div>

          <div className="max-w-4xl space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              Dunmurry Cricket Club is a long-established cricket club based in
              Dunmurry, bringing together players from across the community to
              enjoy competitive cricket in a welcoming environment.
            </p>

            <p>
              The club provides opportunities for players of varying abilities,
              from those competing at higher levels of club cricket to those
              simply looking for the chance to play, improve and become part of
              a team.
            </p>

            <p>
              DCC competes within the Northern Cricket Union structure and is
              represented across both weekend and midweek cricket.
            </p>
          </div>
        </div>
      </section>

      {/* Six Teams */}
      <section className="border-b border-white/10 bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="w-full">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
            One Club
          </p>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Six Teams.
              <br />
              One DCC.
            </h2>

            <p className="max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              With four weekend sides and two midweek teams, Dunmurry offers
              cricket across a broad range of levels and competitions.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <div
                key={team}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                  {team}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/cricket/teams"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-dcc-gold transition hover:bg-dcc-gold hover:text-black"
          >
            Explore Our Teams
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Home Ground */}
      <section className="border-b border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 sm:min-h-[460px]">
            <Image
              src="/dcc-ground.jpg"
              alt="Cricket at Dunmurry Cricket Club"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Cricket at Dunmurry
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Our Home.
              <br />
              Our Club.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
              DCC&apos;s home in Dunmurry provides the setting for competitive
              cricket, training and the day-to-day life of the club.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {facilities.map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-dcc-gold"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-semibold text-zinc-200">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Club Culture */}
      <section className="border-b border-white/10 bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="w-full">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
            Club Culture
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
            Competitive on the field.
            <br />
            Welcoming off it.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
            At Dunmurry, cricket is about more than results. It is about
            teammates, friendships, shared experiences and being part of a club
            where people can enjoy the game together.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-dcc-gold">
                Competitive
              </p>

              <p className="mt-3 text-base leading-7 text-zinc-300">
                Cricket played with ambition, commitment and pride in
                representing DCC.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-dcc-gold">
                Welcoming
              </p>

              <p className="mt-3 text-base leading-7 text-zinc-300">
                Opportunities for experienced players and those simply looking
                for somewhere to enjoy their cricket.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-dcc-gold">
                Community
              </p>

              <p className="mt-3 text-base leading-7 text-zinc-300">
                A club built around teammates, supporters and the people who
                make Dunmurry Cricket Club what it is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-3xl border border-dcc-gold/20 bg-[#0a0f1c] p-8 sm:p-10 lg:p-12">
            <div
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-dcc-gold/5 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
                  Become Part of DCC
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                  Your next innings
                  <br />
                  could start here.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                  Whether you&apos;re an experienced player or simply looking
                  for an opportunity to play cricket, we&apos;d be happy to
                  hear from you.
                </p>
              </div>

              <Link
                href="/join-us"
                className="inline-flex shrink-0 items-center justify-center self-start rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110 lg:self-auto"
              >
                Join DCC
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
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