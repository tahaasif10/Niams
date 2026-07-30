import { ArrowRight, Image as ImageIcon } from "lucide-react";

const PROGRAMS = [
  {
    subject: "Artificial Intelligence",
    tag: "Technology track",
    title: "Machine learning and AI, taught from the ground up",
    description:
      "Python, data, and the core ideas behind modern AI systems, built through hands-on projects.",
  },
  {
    subject: "Computer Science",
    tag: "Technology track",
    title: "Programming and computing fundamentals that last",
    description:
      "Data structures, algorithms, and software development taught with real discipline.",
  },
  {
    subject: "Core Academics",
    tag: "Foundation track",
    title: "Math, science, and English for a strong base",
    description:
      "The fundamentals every student needs before specializing further.",
  },
];

export default function Programs() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Programs
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">
            Courses we are known for
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Alongside our core academics, Niams runs dedicated AI and
            Computer Science courses for students building a future in tech
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="flex flex-col overflow-hidden rounded-xl border border-line"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100">
                <ImageIcon className="h-10 w-10 text-gray-300" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {program.subject}
                  </span>
                  <span
                    className={
                      program.tag === "Technology track"
                        ? "rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent-hover"
                        : "rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    }
                  >
                    {program.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-primary">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {program.description}
                </p>
                <button className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-primary transition-all hover:gap-2">
                  View course <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
