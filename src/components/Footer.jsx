import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { useSitePreferences } from '../contexts/SitePreferences';

export default function Footer() {
  const { translate } = useSitePreferences();
  const footer = translate('footer');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <span className="font-mono text-cyan-400 font-bold text-lg">&lt;RC/&gt;</span>
          <span className="text-sm text-slate-400">
            © {new Date().getFullYear()} Rafael Augusto Carmona. {footer.rights}
          </span>
        </div>

        <div className="text-xs text-slate-500 flex items-center gap-1">
          {footer.created}
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          title={footer.top}
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
}
