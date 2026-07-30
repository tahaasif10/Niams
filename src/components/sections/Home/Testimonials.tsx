import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "They didn't just teach me the material. They taught me how to attack a problem and not quit until it broke.",
    name: "Aisha Khan",
    role: "Medical student, Cambridge",
  },
  {
    quote:
      "My son stopped fearing exams. He walked in quiet and ready. The change was absolute.",
    name: "Robert Miller",
    role: "Parent of student",
  },
  {
    quote:
      "The small class meant no hiding. I had to be good. And then I was.",
    name: "David Chen",
    role: "Engineering student, Imperial",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0B1D3A]">Testimonials</h2>
          <p className="mt-2 text-sm text-gray-500">
            The work speaks through those who did it
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col items-center text-center">
              <Quote className="h-6 w-6 text-[#0B1D3A]" />
              <p className="mt-4 text-sm text-gray-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 h-10 w-10 rounded-full bg-gray-200" />
              <p className="mt-3 text-sm font-semibold text-[#0B1D3A]">
                {testimonial.name}
              </p>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}