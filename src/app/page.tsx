import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <Image
            src="/dcc-logo.png"
            alt="Dunmurry Cricket Club crest"
            width={240}
            height={320}
            priority
            className="h-auto w-[180px] sm:w-[220px]"
          />

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Dunmurry Cricket Club
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            One Club. One Family. One DCC.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            The new Dunmurry Cricket Club website is now in development.
          </p>
        </div>
      </section>
    </main>
  );
}