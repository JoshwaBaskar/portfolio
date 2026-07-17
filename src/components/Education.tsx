function Education() {
  const education = [
    { institution: 'Anna University', degree: 'B.Tech in Computer Science', year: '2021 - 2025' },
    { institution: 'Government Higher Secondary School', degree: 'Higher Secondary Education', year: '2019 - 2021' }
  ];

  return (
    <section id="education" className="section-spacing bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Education</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Academic Journey</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <article key={item.institution} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">{item.year}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-2 text-slate-300">{item.institution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
