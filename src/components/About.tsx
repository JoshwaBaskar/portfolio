import { usePortfolioContext } from '../hooks/usePortfolioContext';

function About() {
  const { skillCategories } = usePortfolioContext();

  return (
    <section id="about" className="section-spacing overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-slate-100">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">About</span>
          <h2 className="text-4xl font-bold">A fast learner who builds with purpose.</h2>
          <p className="max-w-3xl text-slate-300 sm:text-lg">
            I am a full stack developer with experience delivering modern web applications, integrating backend APIs, and building intelligent features with machine learning. I build production-focused solutions with strong attention to quality, maintainability, and performance.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.slice(0, 3).map((category) => (
            <div key={category.name} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-glow">
              <h3 className="mb-4 text-xl font-semibold text-white">{category.name}</h3>
              <ul className="space-y-2 text-slate-300">
                {category.items.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-900/80 px-3 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
