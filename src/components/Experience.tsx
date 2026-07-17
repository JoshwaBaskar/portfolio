function Experience() {
  const experiences = [
    { company: 'Intrainz', role: 'Software Intern', period: '2024', details: 'Worked on full stack modules, API integration, and performance tuning.' },
    { company: 'NSIC Project', role: 'Developer', period: '2023', details: 'Built project workflows and implemented database-driven user management.' }
  ];

  return (
    <section id="experience" className="section-spacing bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Experience</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Professional Experience</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((item) => (
            <article key={item.company} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow">
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-emerald-400">{item.company}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.35em] text-slate-400">{item.period}</p>
              <p className="mt-4 text-slate-300">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
