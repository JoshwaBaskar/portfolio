import { useState } from 'react';
import { usePortfolioContext } from '../hooks/usePortfolioContext';

function Contact() {
  const { contactItems } = usePortfolioContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitted');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Contact</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Let&apos;s build something together</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            If you have a project or opportunity, I&apos;d love to connect. Send a message or reach out directly using the links below.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
            <h3 className="text-2xl font-semibold text-white">Contact Info</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              {contactItems.map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="mt-2 block text-lg text-white hover:text-emerald-400">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg text-white">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow space-y-5">
            {status === 'submitted' && (
              <div className="rounded-3xl bg-emerald-500/10 p-4 text-sm text-emerald-300">
                Thanks! Your message is queued and I&apos;ll follow up soon.
              </div>
            )}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500/50"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">Email</label>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500/50"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">Message</label>
              <textarea
                placeholder="What would you like to build?"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500/50"
                required
              />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
