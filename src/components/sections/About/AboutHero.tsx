export default function AboutHero() {
  return (
    <section className="bg-surface-alt px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#1A2552_0%,#0052C2_100%)] px-6 py-14 text-center shadow-xl sm:px-12 sm:py-20">
          {/* decorative background accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-[#F2994A]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:32px_32px]"
          />

          {/* content */}
          <div className="relative">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              About Niams
            </span>

            <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">
              Where Future Leaders Are Built
              <br />
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm text-white/80 sm:text-base">
              Niams Coaching Center trains students in Artificial Intelligence
              and Computer Science with the same rigor and clarity we bring to
              every subject we teach.
            </p>

            <div
              aria-hidden="true"
              className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#F2994A]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}