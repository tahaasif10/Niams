import { Image as ImageIcon } from "lucide-react";

export default function Story() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Image placeholder */}
          <div className="order-2 flex h-72 w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-gray-100 sm:h-96 md:order-1">
            <ImageIcon className="h-14 w-14 text-gray-300" />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Our story
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary">
              Built on a simple idea
            </h2>
            <p className="mt-4 text-sm text-gray-500">
              Niams Coaching Center started with a straightforward belief:
              students learn best in small rooms, taught by people who know
              their subject inside out. What began as a handful of focused
              classes has grown into a full institute, now home to dedicated
              tracks in Artificial Intelligence and Computer Science
              alongside our core academic programs.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Every course we run is built the same way &mdash; clear
              fundamentals, real projects, and instructors who push students
              to actually understand the material, not just pass a test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
