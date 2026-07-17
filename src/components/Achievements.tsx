function Achievements() {
  const achievements = [
    { title: 'Hackathon Winner', description: 'Awarded first place in a college hackathon for a smart campus app.' },
    { title: 'Top Performer', description: 'Recognized as top performer in final year project and coding competitions.' },
    { title: 'Published Project', description: 'Delivered a complete employee management system with AI support.' }
  ];

  return (
    <section id="achievements" className="section-spacing bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Achievements</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Career Highlights</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
