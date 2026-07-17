import { usePortfolioContext } from '../hooks/usePortfolioContext';
import { useState } from 'react';

function FAQ() {
  const { faqItems } = usePortfolioContext();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="faq" className="section-spacing bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">FAQ</span>
          <h2 className="mt-3 text-4xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.q} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-glow">
              <button
                type="button"
                onClick={() => setExpanded(expanded === item.q ? null : item.q)}
                className="flex w-full items-center justify-between text-left text-white"
              >
                <span className="text-lg font-semibold">{item.q}</span>
                <span className="text-slate-400">{expanded === item.q ? '−' : '+'}</span>
              </button>
              {expanded === item.q ? <p className="mt-4 text-slate-300">{item.a}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
