import { usePortfolioContext } from '../hooks/usePortfolioContext';

function Projects() {
  const { projects } = usePortfolioContext();

  return (
    <section id="projects" className="section-spacing bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Projects</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Selected Work</h2>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow transition hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">{project.cls}</span>
              </div>
              <p className="mb-5 text-slate-300">{project.desc}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-400">Features</p>
                  <ul className="space-y-2 text-slate-300">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="rounded-2xl bg-slate-950/80 px-3 py-2">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-400">Tech stack</p>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-300">
                    {project.tech.map((tool) => (
                      <span key={tool} className="rounded-2xl bg-slate-950/80 px-3 py-2">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
