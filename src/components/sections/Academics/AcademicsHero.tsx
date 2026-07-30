import { Image as ImageIcon } from "lucide-react";

export default function AcademicsHero() {
  return (
    <section className="bg-surface-alt px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          Academics
        </p>
        <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
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
      </div>

      {/* Hero image placeholder */}
      <div className="mx-auto mt-10 max-w-4xl">
        <div className="flex h-72 w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-gray-100 sm:h-96">
          <ImageIcon className="h-16 w-16 text-gray-300" />
        </div>
      </div>
    </section>
  );
}
