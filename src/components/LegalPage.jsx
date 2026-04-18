import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

// ─── Bloc Article (titre + contenu) ────────────────────
export const Article = ({ title, children }) => (
  <section className="scroll-mt-24">
    <h2 className="text-lg font-extrabold text-slate-900 mb-4 flex items-start gap-3">
      <span className="mt-1 w-1 h-5 bg-purple-600 rounded-full shrink-0" />
      {title}
    </h2>
    <div className="pl-4 space-y-3 text-slate-600 leading-relaxed text-[15px]">
      {children}
    </div>
  </section>
);

// ─── Sous-titre d'article ───────────────────────────────
export const SubTitle = ({ children }) => (
  <h3 className="font-extrabold text-slate-800 text-sm mt-5 mb-1.5">{children}</h3>
);

// ─── Mise en avant (boîte colorée) ─────────────────────
export const Callout = ({ color = 'amber', children }) => {
  const colors = {
    amber:  'bg-amber-50  border-amber-200  text-amber-900',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900',
    slate:  'bg-slate-50  border-slate-200  text-slate-700',
  }[color];
  return (
    <div className={`rounded-2xl border p-5 text-sm leading-relaxed ${colors}`}>
      {children}
    </div>
  );
};

// ─── Layout principal des pages légales ────────────────
const LegalPage = ({ title, lastUpdated, badge = 'Document légal', children }) => (
  <div className="min-h-screen bg-white font-sans text-slate-800">

    {/* ── Header sticky ── */}
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-slate-500 hover:text-purple-600 transition-colors font-semibold text-sm shrink-0"
        >
          <ChevronLeft className="h-4 w-4" />
          Accueil
        </Link>
        <span className="h-4 w-px bg-slate-200" />
        <div className="flex items-center gap-2">
          <img src="/mascot.webp" alt="Kreyolang" className="h-7 w-7 object-contain" />
          <span className="font-extrabold text-slate-900 text-sm">Kreyolang</span>
        </div>
        <nav className="ml-auto hidden sm:flex gap-5 text-xs font-semibold text-slate-400">
          <Link to="/conditions"       className="hover:text-purple-600 transition-colors">CGU / CGV</Link>
          <Link to="/confidentialite"  className="hover:text-purple-600 transition-colors">Confidentialité</Link>
        </nav>
      </div>
    </header>

    {/* ── Contenu principal ── */}
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 pb-20">

      {/* En-tête du document */}
      <div className="mb-10 pb-8 border-b border-slate-100">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
          {title}
        </h1>
        <p className="text-sm text-slate-500">
          Dernière mise à jour :{' '}
          <strong className="text-slate-700">{lastUpdated}</strong>
        </p>
        <p className="text-sm text-slate-500 mt-0.5">
          Applicable à partir du 1ᵉʳ mars 2026
        </p>
      </div>

      {/* Articles */}
      <div className="space-y-10">
        {children}
      </div>
    </main>

    {/* ── Footer ── */}
    <footer className="border-t border-slate-100 bg-slate-50 py-8 mt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <span>© 2026 Kreyolang.com — Tous droits réservés</span>
        <div className="flex gap-5">
          <Link to="/conditions"      className="hover:text-purple-600 transition-colors">CGU / CGV</Link>
          <Link to="/confidentialite" className="hover:text-purple-600 transition-colors">Confidentialité</Link>
          <Link to="/delete-account"  className="hover:text-purple-600 transition-colors">Supprimer mon compte</Link>
          <a href="mailto:legal@kreyolang.com" className="hover:text-purple-600 transition-colors">
            legal@kreyolang.com
          </a>
        </div>
      </div>
    </footer>

  </div>
);

export default LegalPage;
