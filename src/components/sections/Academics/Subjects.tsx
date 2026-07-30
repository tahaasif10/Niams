import { ArrowRight, Image as ImageIcon } from "lucide-react";

const SUBJECTS = [
  {
    subject: "Mathematics",
    tag: "Core discipline",
    title: "Advanced calculus and the elegance of pure number",
    description:
      "From first principles to complex proofs, build unshakeable logic.",
  },
  {
    subject: "Science",
    tag: "Core discipline",
    title: "Physics, chemistry, and the laws of the real",
    description:
      "Understand the forces that shape the world and write the future.",
  },
  {
    subject: "English",
    tag: "Core discipline",
    title: "Writing with the clean precision of a sharpened blade",
    description: "Craft arguments that stand. Write sentences that last.",
  },
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
];

export default function Subjects() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Courses
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">
            Every subject we teach
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Core academics and technology courses, taught with the same
            discipline and clarity
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SUBJECTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-xl border border-line"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100">
                <ImageIcon className="h-10 w-10 text-gray-300" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {item.subject}
                  </span>
                  <span
                    className={
                      item.tag === "Technology track"
                        ? "rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent-hover"
                        : "rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    }
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
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
