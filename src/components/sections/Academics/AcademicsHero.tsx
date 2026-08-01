import {
  Calculator,
  FlaskConical,
  BookOpen,
  Cpu,
  Code2,
  Sparkles,
} from "lucide-react";

const subjects = [
  { icon: Calculator, label: "Mathematics" },
  { icon: FlaskConical, label: "Science" },
  { icon: BookOpen, label: "English" },
  { icon: Cpu, label: "Artificial Intelligence" },
  { icon: Code2, label: "Computer Science" },
];

export default function AcademicsHero() {
  return (
    <section className="bg-surface-alt px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          Academics
        </p>
        <h1 className="mt-2 text-[48px] font-extrabold leading-tight text-primary">
          Core subjects and modern
          <br />
          technology, taught with rigor
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
          From Math, Science, and English to Artificial Intelligence and
          Computer Science, every course at Niams follows the same standard:
          clear fundamentals, real practice, measurable results.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary-hover">
            Book trial
          </button>
          <button className="rounded-md border border-line px-5 py-2 text-sm font-medium text-primary hover:border-primary">
            View all courses
          </button>
        </div>

        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-400">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Trial classes open on a rolling basis, across every subject below
        </p>
      </div>

      {/* Subject ticker — replaces the image placeholder */}
      <div className="academics-marquee-mask mx-auto mt-10 max-w-4xl overflow-hidden">
        <div className="academics-marquee flex w-max items-stretch gap-3">
          {[...subjects, ...subjects].map(({ icon: Icon, label }, i) => (
            <div
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
            >
              <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .academics-marquee {
          animation: academics-scroll 22s linear infinite;
        }
        .academics-marquee-mask:hover .academics-marquee {
          animation-play-state: paused;
        }
        .academics-marquee-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }
        @keyframes academics-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .academics-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}