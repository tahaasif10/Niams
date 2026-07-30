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
    <section className="bg-[#F8FAFC] px-4 py-20 font-sans">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-[#0052C2]">
            Method
          </p>
          <h2 className="mt-2 text-[2.25rem] font-extrabold leading-tight text-[#1A2552]">
            The craft of learning
          </h2>
          <p className="mt-2 text-sm text-[#334155]">
            Three pillars that build a mind ready for anything
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(26,37,82,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0052C2]"
            >
              <div className="flex h-40 items-center justify-center bg-[#F1F5F9]">
                <ImageIcon className="h-10 w-10 text-slate-300" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[#0052C2]">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#1A2552]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-[#334155]">
                  {pillar.description}
                </p>
                <button className="group/cta mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-[#0052C2] transition-colors hover:text-[#F2994A]">
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