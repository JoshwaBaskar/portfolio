function Certifications() {
  const certifications = [
    { title: 'Google Data Analytics', issuer: 'Google', year: '2024' },
    { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
    { title: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', year: '2024' }
  ];

  return (
    <section id="certifications" className="section-spacing">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Certifications</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Proof of Learning</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-glow">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.issuer}</p>
              <p className="mt-2 text-sm text-slate-400">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
