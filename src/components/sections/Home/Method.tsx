import { ArrowRight, Image as ImageIcon } from "lucide-react";

const PILLARS = [
  {
    eyebrow: "Tutors",
    title: "Expert tutors",
    description: "Masters of their subject who teach with clarity and force",
    cta: "Meet Faculty",
  },
  {
    eyebrow: "Plans",
    title: "Personalized learning plans",
    description: "A map drawn for you alone, aimed at your summit",
    cta: "View Curriculums",
  },
  {
    eyebrow: "Results",
    title: "Proven results that speak with quiet authority",
    description: "Grades climb. Confidence hardens. The work proves itself",
    cta: "See Student Stories",
  },
];

export default function Method() {
  return (
    <section className="bg-surface-alt px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-accent-hover">
            Method
          </p>
          <h2 className="mt-2 text-[2.25rem] font-extrabold leading-tight text-primary">
            The Craft Of Learning
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Three pillars that build a mind ready for anything
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_4px_20px_rgba(11,29,58,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100">
                <ImageIcon className="h-10 w-10 text-gray-300" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-hover">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-bold text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-gray-500">
                  {pillar.description}
                </p>
                <button className="group/cta mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-primary transition-colors hover:text-accent-hover">
                  {pillar.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}