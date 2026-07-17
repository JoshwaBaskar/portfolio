import { usePortfolioContext } from '../hooks/usePortfolioContext';

function Timeline() {
  const { timeline } = usePortfolioContext();

  return (
    <section id="timeline" className="section-spacing">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Timeline</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Growth Roadmap</h2>
        </div>
        <div className="space-y-6">
          {timeline.map((event) => (
            <div key={event.year} className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">{event.year}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{event.title}</h3>
              <p className="mt-3 text-slate-300">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
