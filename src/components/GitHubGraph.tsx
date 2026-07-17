function GitHubGraph() {
  return (
    <section id="github" className="section-spacing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">GitHub</span>
        <h2 className="mt-3 text-4xl font-bold text-white">Open Source Activity</h2>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300">
          Explore contributions, repositories, and sample work on GitHub. This portfolio highlights selected projects, open-source experiments, and technical write-ups.
        </p>
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow">
          <div className="h-[410px] rounded-3xl bg-slate-950/80" />
          <p className="mt-6 text-sm text-slate-400">GitHub contribution graph placeholder — embed a real graph or link to your profile for production deployment.</p>
        </div>
      </div>
    </section>
  );
}

export default GitHubGraph;
