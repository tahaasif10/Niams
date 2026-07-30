import { User } from "lucide-react";

const FACULTY = [
  {
    name: "Faculty Name",
    role: "Head of AI & Computer Science",
  },
  {
    name: "Faculty Name",
    role: "Senior Math Instructor",
  },
  {
    name: "Faculty Name",
    role: "Science Faculty",
  },
  {
    name: "Faculty Name",
    role: "English Faculty",
  },
];

export default function Faculty() {
  return (
    <section className="bg-surface-alt px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Our people
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">
            The faculty behind the results
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Instructors chosen for subject mastery and the ability to teach
            it clearly
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {FACULTY.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-line bg-gray-100">
                <User className="h-10 w-10 text-gray-300" />
              </div>
              <p className="mt-4 text-sm font-semibold text-primary">
                {member.name}
              </p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
