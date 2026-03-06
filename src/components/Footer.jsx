import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12">
    <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Anchor className="h-6 w-6 text-amber-400" />
          <span className="text-xl font-extrabold text-white">Kreyolang.com</span>
        </div>
        <p className="text-sm leading-relaxed">Apprenez le créole.<br />Devenez un Amiral.</p>
      </div>

      <div>
        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navigation</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#methode" className="hover:text-amber-400 transition-colors">Méthode</a></li>
          <li><a href="#features" className="hover:text-amber-400 transition-colors">Fonctionnalités</a></li>
          <li><a href="#langues" className="hover:text-amber-400 transition-colors">Langues</a></li>
          <li><a href="#prix" className="hover:text-amber-400 transition-colors">Prix</a></li>
          <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Légal</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/conditions" className="hover:text-amber-400 transition-colors">
              Conditions d'utilisation
            </Link>
          </li>
          <li>
            <Link to="/confidentialite" className="hover:text-amber-400 transition-colors">
              Politique de confidentialité
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Suivez-nous</h3>
        <div className="flex gap-4">
          <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/kreyolang"
            className="hover:text-amber-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Store badges (disabled) */}
        <div className="flex gap-3 mt-6">
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 opacity-50 cursor-not-allowed">
            <svg viewBox="0 0 384 512" className="h-4 w-4 fill-white">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <span className="text-[10px] font-bold text-white">App Store</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 opacity-50 cursor-not-allowed">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="M3 20.5V3.5C3 2.9 3.7 2.6 4.2 3L20.2 12L4.2 21C3.7 21.4 3 21.1 3 20.5Z" fill="#34D399" />
            </svg>
            <span className="text-[10px] font-bold text-white">Google Play</span>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-800 pt-8 text-center text-sm">
      <p>&copy; 2026 Kreyolang.com. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
