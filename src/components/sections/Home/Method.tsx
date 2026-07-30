import { ArrowRight, Image as ImageIcon } from "lucide-react";

const PILLARS = [
  {
    eyebrow: "Tutors",
    title: "Expert tutors",
    description: "Masters of their subject who teach with clarity and force",
  },
  {
    eyebrow: "Plans",
    title: "Personalized learning plans",
    description: "A map drawn for you alone, aimed at your summit",
  },
];

const RESULT = {
  eyebrow: "Results",
  title: "Proven results that speak with quiet authority",
  description: "Grades climb. Confidence hardens. The work proves itself",
};

export default function Method() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Method
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0B1D3A]">
            The craft of learning
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Three pillars that build a mind ready for anything
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* First two vertical cards */}
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100">
                <ImageIcon className="h-10 w-10 text-gray-300" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-2 text-base font-semibold text-[#0B1D3A]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {pillar.description}
                </p>
                <button className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-[#0B1D3A] hover:gap-2 transition-all">
                  Learn <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Third wide horizontal card */}
          <div className="flex overflow-hidden rounded-xl border border-gray-200 md:col-span-2">
            <div className="flex w-1/2 items-center justify-center bg-gray-100">
              <ImageIcon className="h-10 w-10 text-gray-300" />
            </div>
            <div className="flex w-1/2 flex-col justify-center p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {RESULT.eyebrow}
              </p>
              <h3 className="mt-2 text-base font-semibold text-[#0B1D3A]">
                {RESULT.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {RESULT.description}
              </p>
              <button className="mt-4 flex w-fit items-center gap-1 text-sm font-medium text-[#0B1D3A] hover:gap-2 transition-all">
                Learn <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}