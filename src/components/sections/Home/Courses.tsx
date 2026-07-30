import { ArrowRight, Image as ImageIcon } from "lucide-react";

const COURSES = [
  {
    subject: "Math",
    tag: "Core discipline",
    title: "Advanced calculus and the elegance of pure number",
    description: "From first principles to complex proofs, build unshakeable logic",
  },
  {
    subject: "Science",
    tag: "Core discipline",
    title: "Physics, chemistry, and the laws of the real",
    description: "Understand the forces that shape the world and write the future",
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
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Courses
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0B1D3A]">
            Sharpen your mind
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            The tools you need, taught with discipline and clarity
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100">
                <ImageIcon className="h-10 w-10 text-gray-300" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex gap-2">
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {course.subject}
                  </span>
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {course.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-[#0B1D3A]">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {course.description}
                </p>
                <button className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-[#0B1D3A] hover:gap-2 transition-all">
                  View course <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-[#0B1D3A] hover:border-[#0B1D3A]">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}