import { FaJava, FaReact, FaPython, FaDatabase, FaDocker, FaBrain, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { usePortfolioContext } from '../hooks/usePortfolioContext';
import useTypingEffect from '../hooks/useTypingEffect';

const floating = [
  { Icon: FaJava, style: { top: '15%', left: '8%' } },
  { Icon: FaReact, style: { top: '25%', right: '10%' } },
  { Icon: FaPython, style: { bottom: '30%', left: '5%' } },
  { Icon: FaDatabase, style: { bottom: '20%', right: '8%' } },
  { Icon: FaDocker, style: { top: '60%', left: '12%' } },
  { Icon: FaBrain, style: { top: '10%', right: '20%' } }
];

function Hero() {
  const text = useTypingEffect(['Full Stack Developer', 'AI & Machine Learning Enthusiast', 'Java & Spring Boot Developer', 'React Frontend Developer']);
  const { socialLinks } = usePortfolioContext();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-[size:64px_64px] opacity-10" />
      <div className="absolute top-24 -left-28 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-24 -right-28 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute inset-x-0 top-1/3 mx-auto h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      {floating.map((item, index) => (
        <div
          key={index}
          className="hidden lg:block absolute text-emerald-400/20 text-3xl animate-float"
          style={{ ...item.style, animationDelay: `${index * 0.5}s` }}
        >
          <item.Icon className="h-10 w-10" />
        </div>
      ))}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>
        <h1 className="font-display text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
          Hi, I&apos;m <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">Joshwa B</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
          I build intelligent web applications using Java, Spring Boot, React, AI, and Cloud technologies.
        </p>
        <div className="mt-6 h-12 text-2xl text-emerald-400">
          {text}
          <span className="ml-2 inline-block h-6 w-1 rounded bg-emerald-400 animate-blink" />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            View Projects
          </a>
          <a href="#contact" className="rounded-xl border border-white/10 bg-slate-900/80 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-emerald-500/30 hover:text-emerald-400">
            Hire Me
          </a>
          <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/30 hover:text-white">
            Request Resume
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-4">
          {socialLinks.map((link) => {
            const iconMap = {
              GitHub: FaGithub,
              LinkedIn: FaLinkedin,
              Email: FaEnvelope
            } as const;
            const Icon = iconMap[link.label as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-emerald-500/10 hover:text-emerald-400"
                aria-label={link.label}
              >
                {Icon ? <Icon className="h-5 w-5" /> : link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
