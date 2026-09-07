import Image from "next/image";
import Link from "next/link";

type Team = {
  name: string;
  xi: string;
  league?: string;
  achievement?: string;
  description: string;
  image: string;
  imageAlt: string;
  performanceUrl: string;
  imageCaption?: string;
};

const weekendTeams: Team[] = [
  {
    name: "DCC 1",
    xi: "1st XI",
    league: "2027 • Senior Men's Section 2",
    description:
      "DCC 1 is Dunmurry Cricket Club's 1st XI, representing DCC at the highest level of senior cricket.",
    image: "/dcc-1-team.png",
    imageAlt: "DCC 1 team",
    performanceUrl:
      "https://dcc-performance-centre.vercel.app/teams/T01",
  },
  {
    name: "DCC 2",
    xi: "2nd XI",
    league: "2027 • Junior League Section 5",
    achievement: "2026 Junior League Section 6 Champions",
    description:
      "DCC 2 is Dunmurry Cricket Club's 2nd XI, competing in the NCU Junior League and continuing its progression following a championship-winning 2026 season.",
    image: "/dcc-2-team.png",
    imageAlt: "DCC 2 team",
    performanceUrl:
      "https://dcc-performance-centre.vercel.app/teams/T02",
  },
  {
    name: "DCC 3",
    xi: "3rd XI",
    league: "2027 • Junior League Section 6",
    achievement: "2026 Junior League Section 7 — Promoted",
    description:
      "DCC 3 is Dunmurry Cricket Club's 3rd XI, competing in the NCU Junior League and stepping up to Section 6 following promotion in 2026.",
    image: "/dcc-3-team.png",
    imageAlt: "DCC 3 team",
    performanceUrl:
      "https://dcc-performance-centre.vercel.app/teams/T03",
  },
  {
    name: "DCC 4",
    xi: "4th XI",
    description:
      "DCC 4 is Dunmurry Cricket Club's 4th XI, providing another competitive pathway within DCC's senior cricket structure.",
    image: "/dcc-4-team.png",
    imageAlt: "DCC 3 and DCC 4 together following their cup match",
    performanceUrl:
      "https://dcc-performance-centre.vercel.app/teams/T04",
    imageCaption: "DCC 3 & DCC 4 following their 2026 cup meeting",
  },
];

const midweekTeams: Team[] = [
  {
    name: "Midweek 1",
    xi: "1st XI",
    league: "2027 • Midweek League",
    description:
      "Midweek 1 is Dunmurry Cricket Club's 1st XI in the Midweek League, offering competitive cricket in the shorter midweek format.",
    image: "/midweek-1-team.png",
    imageAlt: "DCC Midweek 1 team",
    performanceUrl:
      "https://dcc-performance-centre.vercel.app/teams/T05",
  },
  {
    name: "Midweek 2",
    xi: "2nd XI",
    league: "2027 • Midweek League",
    achievement:
      "Back-to-Back Midweek League Champions — 2025 & 2026",
    description:
      "Midweek 2 is Dunmurry Cricket Club's 2nd XI in the Midweek League, entering 2027 as back-to-back champions after consecutive title-winning seasons in 2025 and 2026.",
    image: "/midweek-2-team.png",
    imageAlt: "DCC Midweek 2 team celebrating",
    performanceUrl:
      "https://dcc-performance-centre.vercel.app/teams/T06",
  },
];

function TeamFeature({
  team,
  reverse = false,
}: {
  team: Team;
  reverse?: boolean;
}) {
  return (
    <article
      className={`grid gap-8 border-t border-white/10 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <Image
            src={team.image}
            alt={team.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {team.imageCaption ? (
          <p className="mt-3 text-xs leading-5 text-zinc-500">
            {team.imageCaption}
          </p>
        ) : null}
      </div>

      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-dcc-gold">
          {team.xi}
        </p>

        <h3 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
          {team.name}
        </h3>

        {team.league ? (
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-zinc-200 sm:text-base">
            {team.league}
          </p>
        ) : (
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-zinc-500 sm:text-base">
            2027 League Placement To Be Confirmed
          </p>
        )}

        {team.achievement ? (
          <div className="mt-5 inline-flex rounded-full border border-dcc-gold/30 bg-dcc-gold/10 px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-dcc-gold sm:text-sm">
              🏆 {team.achievement}
            </span>
          </div>
        ) : null}

        <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
          {team.description}
        </p>

        <a
          href={team.performanceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-dcc-gold transition hover:bg-dcc-gold hover:text-black"
        >
          Explore in Performance Centre
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

export default function TeamsPage() {
  return (
    <main className="bg-[#05070d] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/teams-hero.jpeg"
            alt="Cricket being played at Dunmurry Cricket Club"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/35 to-black/8"
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
              Cricket at
              <br />
              Dunmurry
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
              Dunmurry Cricket Club fields six senior teams across league and
              midweek cricket, providing opportunities to compete throughout
              the season.
            </p>
          </div>
        </div>
      </section>

      {/* Weekend Teams */}
      <section className="border-b border-white/10 bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="w-full">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
                Weekend Cricket
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                Four Teams.
                <br />
                One Club.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              DCC is represented by four senior sides across the Northern
              Cricket Union league structure.
            </p>
          </div>

          <div className="mt-12">
            {weekendTeams.map((team, index) => (
              <TeamFeature
                key={team.name}
                team={team}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Midweek Cricket */}
      <section className="border-b border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="w-full">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
                Midweek Cricket
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                Cricket through
                <br />
                the week.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              DCC fields two teams in the Midweek League, where teams compete
              through a group stage before the leading sides progress to the
              play-offs.
            </p>
          </div>

          <div className="mt-12">
            {midweekTeams.map((team, index) => (
              <TeamFeature
                key={team.name}
                team={team}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Centre CTA */}
      <section className="bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-3xl border border-dcc-gold/20 bg-[#0a0f1c] p-8 sm:p-10 lg:p-12">
            <div
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-dcc-gold/5 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
                  DCC Performance Centre
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                  Want the
                  <br />
                  full picture?
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
                  Explore team standings, squads, match history, player
                  statistics and season performance in the DCC Performance
                  Centre.
                </p>
              </div>

              <a
                href="https://dcc-performance-centre.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center self-start rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110 lg:self-auto"
              >
                Visit Performance Centre
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
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