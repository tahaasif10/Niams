import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0B1D3A] px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          Enroll now
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Your future is built one hard session at a time
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-300">
          Join a class where discipline is normal and mastery is expected.
          Seats are limited every term.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-[#0B1D3A] hover:bg-gray-100">
            Book a trial class
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:border-white">
            Talk to us
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          No commitment required · Response within 24 hours
        </p>
      </div>
    </section>
  );
}