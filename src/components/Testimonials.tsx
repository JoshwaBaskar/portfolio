function Testimonials() {
  const testimonials = [
    { name: 'Project Mentor', role: 'Senior Engineer', quote: 'Joshwa delivered clean, maintainable code and a thoughtful project architecture.' },
    { name: 'Team Lead', role: 'Product Owner', quote: 'Strong communication and dependable delivery on time and with quality.' }
  ];

  return (
    <section id="testimonials" className="section-spacing bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Testimonials</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Kind words from collaborators</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow">
              <p className="text-lg leading-relaxed text-slate-300">“{item.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
