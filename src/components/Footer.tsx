function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Joshwa B. Built with React, Vite, and Tailwind CSS.</p>
        <p className="text-sm text-slate-500">Designed for performance and production-ready styling.</p>
      </div>
    </footer>
  );
}

export default Footer;
