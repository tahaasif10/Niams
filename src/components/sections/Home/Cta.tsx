import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-hover px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          Enroll now
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Your future is built one hard session at a time
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
          Join a class where discipline is normal and mastery is expected.
          Seats are limited every term.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover">
            Book a trial class
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-md bg-white px-6 py-3 text-sm font-medium text-primary hover:bg-white/90">
            Talk to us
          </button>
        </div>

        <p className="mt-6 text-xs text-white/50">
          No commitment required · Response within 24 hours
        </p>
      </div>
    </section>
  );
}