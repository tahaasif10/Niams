import { GraduationCap, ShieldCheck, TrendingUp } from "lucide-react";

const STATS = [
  {
    value: "500+",
    label: "Students taught and sharpened",
    note: "and counting",
    icon: GraduationCap,
  },
  {
    value: "38%",
    label: "Average grade improvement",
    note: "measured across one full term",
    icon: TrendingUp,
  },
  {
    value: "98%",
    label: "Would recommend us",
    note: "surveyed after final exams",
    icon: ShieldCheck,
  },
];

// Splits a stat value like "500+" or "98%" into the number and its
// trailing symbol so the symbol can be highlighted in brass.
function StatValue({ value }: { value: string }) {
  const match = value.match(/^([\d.]+)([%+]?)$/);
  if (!match) return <span>{value}</span>;
  const [, number, symbol] = match;
  return (
    <span className="tabular-nums">
      {number}
      {symbol && <span className="text-accent-hover">{symbol}</span>}
    </span>
  );
}

export default function Trust() {
  return (
    <section className="bg-surface-alt px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-hover">
            Track record
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">
            Every number, on the record
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            No rounding up. This is the file we&apos;d hand you if you asked.
          </p>
        </div>

        {/* Trust strip */}
        <div className="relative mt-14">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div className="flex items-center justify-between bg-primary px-6 py-3">
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                Outcomes record
              </p>
              <p className="text-xs font-medium text-white/60">NIAMS</p>
            </div>

            <div className="flex flex-col divide-y divide-dashed divide-line sm:flex-row sm:divide-x sm:divide-y-0">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-1 items-start gap-4 px-6 py-6"
                >
                  <stat.icon className="mt-1 h-4 w-4 shrink-0 text-accent-hover" />
                  <div>
                    <p className="text-3xl font-bold text-primary">
                      <StatValue value={stat.value} />
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {stat.label}
                    </p>
                    <p className="text-xs text-gray-500">{stat.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seal — stamped on the corner of the record */}
          <div className="absolute -right-4 -top-6 z-10 hidden sm:block">
            <div className="flex h-20 w-20 rotate-[8deg] flex-col items-center justify-center rounded-full border-2 border-dashed border-accent bg-white text-center shadow-sm">
              <ShieldCheck className="h-4 w-4 text-accent-hover" />
              <p className="mt-1 text-[8px] font-bold uppercase leading-tight tracking-widest text-primary">
                Verified
                <br />
                Results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}