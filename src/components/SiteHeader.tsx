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

          <Link
            href="/club"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:text-dcc-gold"
          >
            Club
          </Link>

          <Link
            href="/cricket"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:text-dcc-gold"
          >
            Cricket
          </Link>

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