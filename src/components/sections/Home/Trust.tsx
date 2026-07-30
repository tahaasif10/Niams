import { Play } from "lucide-react";

const STATS = [
  { value: "500+", label: "Students taught and sharpened" },
  { value: "38%", label: "Average grade improvement" },
  { value: "98%", label: "Would recommend us" },
];

export default function Trust() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Trust
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0B1D3A]">
            Numbers do not lie
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            The record of our work, written in hard figures
          </p>
        </div>

        {/* Stats + Video */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          {/* Stats */}
          <div className="flex flex-col gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-[#0B1D3A]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="relative flex h-72 items-center justify-center rounded-xl bg-gray-400 sm:h-96">
            <button
              aria-label="Play video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-600/80 hover:bg-[#0B1D3A]"
            >
              <Play className="h-6 w-6 fill-white text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}