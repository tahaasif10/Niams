import { Image as ImageIcon } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-surface-alt px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          About Niams
        </p>
        <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
          Where discipline meets
          <br />
          modern technology education
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
          Niams Coaching Center trains students in Artificial Intelligence and
          Computer Science with the same rigor and clarity we bring to every
          subject we teach.
        </p>
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
