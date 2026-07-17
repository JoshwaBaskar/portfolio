import { usePortfolioContext } from '../hooks/usePortfolioContext';

function Stats() {
  const { stats } = usePortfolioContext();

  return (
    <section id="stats" className="section-spacing">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-center shadow-glow">
              <p className="text-5xl font-semibold text-white">{stat.value}{stat.suffix}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
