const FORMAT = [
  { value: "8–10", label: "Students per batch, so no one hides" },
  { value: "90 min", label: "Focused sessions, twice a week per course" },
  { value: "1:1", label: "Doubt-clearing available for every student" },
];

export default function ClassFormat() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Class format
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">
            Small enough to actually teach you
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {FORMAT.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-4xl font-bold text-primary">{item.value}</p>
              <p className="mt-1 text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
