import { Image as ImageIcon } from "lucide-react";

const CARDS = [
  {
    eyebrow: "Mission",
    title: "Teach skills that outlast the exam",
    description:
      "We prepare students not just to pass a test but to think clearly, solve real problems, and walk into AI and CS careers with genuine ability.",
  },
  {
    eyebrow: "Vision",
    title: "A center known for rigor, not shortcuts",
    description:
      "We want Niams to be the place students choose when they are serious about mastering their subject, from core academics to modern technology.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-surface-alt px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            What drives us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">
            Mission &amp; vision
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.eyebrow}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-white"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100">
                <ImageIcon className="h-10 w-10 text-gray-300" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {card.eyebrow}
                </p>
                <h3 className="mt-2 text-base font-semibold text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
