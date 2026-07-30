const STATS = [
  { value: "500+", label: "Students taught across all programs" },
  { value: "50+", label: "AI & CS students trained" },
  { value: "98%", label: "Would recommend us" },
];

export default function Milestones() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Track record
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">
            Growing, one batch at a time
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
