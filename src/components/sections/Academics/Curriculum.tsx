import { ArrowRight, Image as ImageIcon } from "lucide-react";

const STAGES = [
  {
    eyebrow: "Stage 1",
    title: "Foundations first",
    description:
      "Every course starts with the fundamentals, no gaps left for later.",
  },
  {
    eyebrow: "Stage 2",
    title: "Deliberate practice",
    description:
      "Problem sets, projects, and past papers, worked through with feedback.",
  },
];

const MASTERY = {
  eyebrow: "Stage 3",
  title: "Mastery through real work",
  description:
    "Students finish each course with a portfolio piece or exam-ready command of the subject, not just a completion certificate.",
};

export default function Curriculum() {
  return (
    <section className="bg-surface-alt px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Curriculum
          </p>
          <h2 className="mt-2 text-[48px] font-extrabold leading-tight text-primary">
            How each course is built
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            The same three-stage structure, whether it is calculus or code
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {STAGES.map((stage) => (
            <div
              key={stage.title}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-white"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100">
                <ImageIcon className="h-10 w-10 text-gray-300" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {stage.eyebrow}
                </p>
                <h3 className="mt-2 text-base font-semibold text-primary">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {stage.description}
                </p>
                <button className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-primary transition-all hover:gap-2">
                  Learn <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Wide mastery card */}
          <div className="flex overflow-hidden rounded-xl border border-line bg-white md:col-span-2">
            <div className="flex w-1/2 items-center justify-center bg-gray-100">
              <ImageIcon className="h-10 w-10 text-gray-300" />
            </div>
            <div className="flex w-1/2 flex-col justify-center p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {MASTERY.eyebrow}
              </p>
              <h3 className="mt-2 text-base font-semibold text-primary">
                {MASTERY.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {MASTERY.description}
              </p>
              <button className="mt-4 flex w-fit items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2">
                Learn <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
