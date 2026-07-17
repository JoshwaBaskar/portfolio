import { usePortfolioContext } from '../hooks/usePortfolioContext';
import { FaCode, FaPalette, FaServer, FaDatabase, FaBrain, FaWrench } from 'react-icons/fa';

const iconMap = {
  Programming: FaCode,
  Frontend: FaPalette,
  Backend: FaServer,
  Database: FaDatabase,
  'Machine Learning': FaBrain,
  Tools: FaWrench
};

function Skills() {
  const { skillCategories } = usePortfolioContext();

  return (
    <section id="skills" className="section-spacing bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Skills</span>
          <h2 className="mt-3 text-4xl font-bold text-white">What I build with</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.name as keyof typeof iconMap] ?? FaWrench;
            return (
              <article key={category.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-emerald-500/30">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{category.name}</h3>
                <div className="space-y-2 text-slate-300">
                  {category.items.map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-950/80 px-4 py-3 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
