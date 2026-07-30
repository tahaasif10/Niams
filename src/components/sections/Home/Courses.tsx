import { ArrowRight, Image as ImageIcon } from "lucide-react";

const COURSES = [
  {
    subject: "Math",
    tag: "Core discipline",
    title: "Advanced calculus and the elegance of pure number",
    description:
      "From first principles to complex proofs, build unshakeable logic",
  },
  {
    subject: "Science",
    tag: "Core discipline",
    title: "Physics, chemistry, and the laws of the real",
    description:
      "Understand the forces that shape the world and write the future",
  },
  {
    subject: "English",
    tag: "Core discipline",
    title: "Writing with the clean precision of a sharpened blade",
    description: "Craft arguments that stand. Write sentences that last",
  },
];

export default function Courses() {
  return (
    <section className="bg-surface-alt px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-hover">
            Courses
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-primary md:text-4xl">
            Sharpen your mind
          </h2>
          <p className="mt-3 text-base text-gray-500">
            The tools you need, taught with discipline and clarity
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 before:absolute before:top-0 before:left-0 before:h-1 before:w-full before:bg-accent before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:before:opacity-100"
            >
              {/* Image placeholder */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-line bg-gray-100 transition-colors group-hover:bg-gray-200/70">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm">
                  <ImageIcon className="h-6 w-6 text-primary/40" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-accent/20 bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-hover">
                    {course.subject}
                  </span>
                  <span className="rounded-full border border-line bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                    {course.tag}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold leading-snug text-primary">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {course.description}
                </p>

                <button className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-accent-hover">
                  View course
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-7 py-3 text-sm font-bold text-primary shadow-sm transition-all duration-200 hover:bg-primary hover:text-white">
            View all courses
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}