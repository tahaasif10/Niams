import { Play } from "lucide-react";

const STATS = [
  { value: "500+", label: "Students taught and sharpened" },
  { value: "38%", label: "Average grade improvement" },
  { value: "98%", label: "Would recommend us" },
];

// Splits a stat value like "500+" or "98%" into the number and its
// trailing symbol so the symbol can be highlighted in brass.
function StatValue({ value }: { value: string }) {
  const match = value.match(/^([\d.]+)([%+]?)$/);
  if (!match) return <span>{value}</span>;
  const [, number, symbol] = match;
  return (
    <span>
      {number}
      {symbol && <span className="text-accent-hover">{symbol}</span>}
    </span>
  );
}

export default function Trust() {
  return (
    <section className="bg-surface-alt px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-hover">
            Trust
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">
            Numbers do not lie
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            The record of our work, written in hard figures
          </p>
        </div>

        {/* Stats + Video */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          {/* Stats */}
          <div className="flex flex-col gap-5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-y border-r border-l-4 border-line border-l-accent bg-white p-4 rounded-r-xl shadow-sm"
              >
                <p className="text-4xl font-bold text-primary">
                  <StatValue value={stat.value} />
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="relative h-72 overflow-hidden rounded-2xl border border-line bg-gradient-to-tr from-primary to-primary-hover shadow-md sm:h-96">
            {/* Subtle mesh/pattern overlay for texture */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0, transparent 45%)",
              }}
            />

            {/* Play button */}
            <div className="relative flex h-full items-center justify-center">
              <button
                aria-label="Play video"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent-hover hover:shadow-accent/30"
              >
                <Play className="h-6 w-6 fill-white text-white" />
              </button>
            </div>

            {/* Badge overlay */}
            <div className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 backdrop-blur-sm">
              <p className="text-xs font-medium text-white">
                Watch 1-Min Tour
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}