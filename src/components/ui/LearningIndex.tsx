import { learningIndex } from "@/data/site";

const W = 640;
const H = 190;
const PAD = 8;

function buildPaths(series: number[]) {
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = max - min || 1;
  const step = (W - PAD * 2) / (series.length - 1);

  const pts = series.map((v, i) => ({
    x: PAD + i * step,
    y: PAD + (1 - (v - min) / range) * (H - PAD * 2),
  }));

  const line = pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L${pts[pts.length - 1].x.toFixed(1)},${H - PAD} L${PAD},${H - PAD} Z`;
  const end = pts[pts.length - 1];

  return { line, area, end };
}

export default function LearningIndex() {
  const { line, area, end } = buildPaths(learningIndex.series);

  return (
    <div className="panel hud-corners p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {learningIndex.label}
          </p>
          <p className="mt-1 font-display text-4xl font-semibold tracking-tight text-fg">
            {learningIndex.value}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm text-up">▲ {learningIndex.change}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {learningIndex.period}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-2xl">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`${learningIndex.label} chart, ${learningIndex.change} ${learningIndex.period}`}
        >
          <defs>
            <pattern
              id="idx-grid"
              width="64"
              height="47.5"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 47.5"
                fill="none"
                stroke="var(--grid-line)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="idx-fill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--foreground)"
                stopOpacity="0.08"
              />
              <stop
                offset="100%"
                stopColor="var(--foreground)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <rect width={W} height={H} fill="url(#idx-grid)" />
          <path d={area} fill="url(#idx-fill)" />
          <path
            d={line}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx={end.x} cy={end.y} r="3.5" fill="var(--accent)" />
        </svg>
      </div>

      <div className="rule mt-4 grid grid-cols-3 pt-4">
        {learningIndex.stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {stat.label}
            </p>
            <p className="mt-1 font-display text-xl font-semibold text-fg">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
