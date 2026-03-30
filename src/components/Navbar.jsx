import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const navFR = [
  { label: 'Méthode',        href: '#methode' },
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Culture',        href: '#culture' },
  { label: 'Langues',        href: '#langues' },
  { label: 'Prix',           href: '#prix' },
  { label: 'FAQ',            href: '#faq' },
];
const navEN = [
  { label: 'Method',    href: '#methode' },
  { label: 'Features',  href: '#features' },
  { label: 'Culture',   href: '#culture' },
  { label: 'Languages', href: '#langues' },
  { label: 'Pricing',   href: '#prix' },
  { label: 'FAQ',       href: '#faq' },
];

const Navbar = ({ onCTA }) => {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = lang === 'EN' ? navEN : navFR;
  const ctaLabel = lang === 'EN' ? 'GET STARTED' : "C'EST PARTI";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/mascot.webp"
            alt="Mascotte Kreyolang"
            className="h-20 w-20 md:h-24 md:w-24 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">Kreyolang</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-purple-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 font-bold text-slate-600 hover:bg-slate-100 py-2 px-3 rounded-2xl transition-colors text-sm"
            onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
          >
            <Globe className="h-4 w-4" />
            <span>{lang}</span>
          </button>

          <button
            onClick={onCTA}
            className="hidden md:block bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm py-2.5 px-5 rounded-xl border-b-[4px] border-purple-800 active:border-b-0 active:translate-y-[4px] transition-all duration-150"
          >
            {ctaLabel}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-bold text-slate-700 hover:text-purple-600 py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onCTA(); }}
            className="w-full mt-2 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm py-3 rounded-xl border-b-[4px] border-purple-800 active:border-b-0 active:translate-y-[4px] transition-all duration-150"
          >
            {ctaLabel}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
