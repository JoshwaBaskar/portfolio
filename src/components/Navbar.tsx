import { useEffect, useState } from 'react';
import { usePortfolioContext } from '../hooks/usePortfolioContext';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeSection, setActiveSection, socialLinks } = usePortfolioContext();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-200px 0px -60%', threshold: 0.2 }
    );

    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 py-3' : 'py-5'}`;

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <button onClick={() => goTo('home')} className="text-xl font-bold font-display text-white">
          <span className="text-emerald-400">J</span>oshwa
        </button>
        <div className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(link.id);
              }}
              className={`text-sm font-medium transition-colors ${activeSection === link.id ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goTo('contact');
            }}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/10"
          >
            Hire Me
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white text-2xl">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open ? (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-6">
          <div className="space-y-3">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className={`block w-full text-left py-3 text-sm font-medium ${activeSection === link.id ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => goTo('contact')}
              className="w-full mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Hire Me
            </button>
          </div>
          <div className="mt-6 flex gap-3 justify-center">
            {socialLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
