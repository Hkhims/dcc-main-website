import Image from "next/image";
import Link from "next/link";

export default function JoinUsPage() {
  return (
    <main className="bg-[#05070d] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/join-us-hero.jpeg"
            alt="Dunmurry Cricket Club members together"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
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
              Join DCC
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Your Cricket.
              <br />
              Your Club.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
              Whether you&apos;re an experienced cricketer, returning to the
              game or looking for a new club, there&apos;s a place for you at
              Dunmurry Cricket Club.
            </p>

            <Link
              href="/club/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110"
            >
              Get in Touch
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cricket for Everyone */}
      <section className="border-b border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Play at Dunmurry
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
              A Place for
              <br />
              Every Cricketer.
            </h2>
          </div>

          <div className="max-w-4xl space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              From competitive weekend cricket to the fast-paced midweek game,
              Dunmurry Cricket Club provides opportunities for players across
              different levels of experience.
            </p>

            <p>
              With four weekend teams and two midweek teams, there are plenty
              of opportunities to get involved, compete and enjoy your cricket
              as part of DCC.
            </p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
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
                  Join the Club
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                  Ready to
                  <br />
                  get involved?
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
                  Whether you&apos;re looking to play regularly, return to
                  cricket or simply find out more about joining DCC, we&apos;d
                  love to hear from you.
                </p>
              </div>

              <Link
                href="/club/contact"
                className="inline-flex shrink-0 items-center justify-center self-start rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110 lg:self-auto"
              >
                Contact DCC
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