import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#05070d]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/dcc-logo.png"
            alt="Dunmurry Cricket Club crest"
            width={56}
            height={74}
            priority
            className="h-auto w-12"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Dunmurry Cricket Club
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-dcc-gold">
              One Club. One Family. One DCC.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:text-dcc-gold"
          >
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:text-dcc-gold"
            >
              Club

              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] p-2 shadow-2xl shadow-black/40">
                <Link
                  href="/club/about"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-dcc-gold"
                >
                  About DCC
                </Link>

                <Link
                  href="/club/committee"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-dcc-gold"
                >
                  Committee
                </Link>

                <Link
                  href="/club/gallery"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-dcc-gold"
                >
                  Gallery
                </Link>

                <Link
                  href="/club/contact"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-dcc-gold"
                >
                  Contact & Find Us
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:text-dcc-gold"
            >
              Cricket

              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] p-2 shadow-2xl shadow-black/40">
                <Link
                  href="/cricket/teams"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-dcc-gold"
                >
                  Teams
                </Link>

                <Link
                  href="/cricket/fixtures"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-dcc-gold"
                >
                  Fixtures & Results
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/join-us"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:text-dcc-gold"
          >
            Join Us
          </Link>

          <a
            href="https://dcc-performance-centre.vercel.app/"
            className="rounded-full border border-dcc-gold px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-dcc-gold transition hover:bg-dcc-gold hover:text-black"
          >
            Performance Centre
          </a>
        </nav>
      </div>
    </header>
  );
}