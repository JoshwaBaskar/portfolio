function Blogs() {
  const posts = [
    { title: 'Building a Full Stack Resume Analyzer', tag: 'AI/ML', date: 'Dec 2024', excerpt: 'How I built a resume screening platform with machine learning, vector databases, and React dashboards.' },
    { title: 'Deploying Spring Boot with Docker', tag: 'DevOps', date: 'Oct 2024', excerpt: 'A practical guide to containerizing Spring Boot applications for reliable production deployment.' }
  ];

  return (
    <section id="blogs" className="section-spacing">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Articles</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Stories and Learnings</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow transition hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between gap-4 text-slate-400">
                <span className="rounded-full bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.3em]">{post.tag}</span>
                <span className="text-sm">{post.date}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
