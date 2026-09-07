import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#05070d] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/dcc-ground.jpg"
            alt="Dunmurry Cricket Club at Fullerton Park"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35"
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-black/20"
            aria-hidden="true"
          />
        </div>

        <div className="relative flex min-h-[55vh] items-end px-6 py-16 sm:py-20 lg:min-h-[60vh] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Get in Touch
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Contact
              <br />
              DCC
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
              Whether you&apos;re looking to play, visiting for a fixture or
              simply want to get in touch, you&apos;ll find the information you
              need here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact + Location */}
      <section className="border-b border-white/10 bg-[#05070d] px-6 py-16 sm:py-20">
        <div className="grid w-full gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Contact DCC
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Get in touch
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              For club enquiries, fixtures or general information, contact
              Dunmurry Cricket Club by email.
            </p>

            <a
              href="mailto:Dunsmatchsec@gmail.com"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:brightness-110"
            >
              Email DCC
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <p className="mt-5 break-all text-sm text-zinc-400">
              Dunsmatchsec@gmail.com
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#080b12] p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
              Find Us
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Fullerton Park
            </h2>

            <address className="mt-5 not-italic text-base leading-8 text-zinc-300 sm:text-lg">
              Fullerton Park
              <br />
              Dunmurry Lane
              <br />
              Dunmurry
              <br />
              BT17 9RR
            </address>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Fullerton+Park+Dunmurry+Lane+Dunmurry+BT17+9RR"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-dcc-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-dcc-gold transition hover:bg-dcc-gold hover:text-black"
            >
              Get Directions
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Visiting DCC */}
      <section className="border-b border-white/10 bg-[#080b12] px-6 py-16 sm:py-20">
        <div className="w-full">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-dcc-gold">
            Visiting DCC
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
            Before You
            <br />
            Arrive.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
            A few useful details for players, officials and visitors coming to
            Dunmurry Cricket Club.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-dcc-gold">
                Parking
              </p>

              <p className="mt-3 text-base leading-7 text-zinc-300">
                Parking is available for players, officials and visitors.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-dcc-gold">
                Changing Facilities
              </p>

              <p className="mt-3 text-base leading-7 text-zinc-300">
                Changing rooms and shower facilities are available at the
                ground.
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
                  Want to Play?
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                  Become part
                  <br />
                  of DCC.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                  If you&apos;re interested in playing cricket at Dunmurry,
                  visit our Join Us page to learn more.
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