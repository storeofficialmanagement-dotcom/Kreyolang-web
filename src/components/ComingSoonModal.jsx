import React from 'react';
import { X, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const txtFR = {
  title: 'Bientôt disponible !',
  sub: "L'application Kreyolang arrive sur iOS et Android.\nSois le premier à embarquer à bord !",
  appstore: "Télécharger sur l'",
  gplay: 'Disponible sur',
  newsletter: 'Inscris-toi à la newsletter pour être notifié au lancement.',
};
const txtEN = {
  title: 'Coming soon!',
  sub: "The Kreyolang app is coming to iOS and Android.\nBe the first to come on board!",
  appstore: 'Download on the',
  gplay: 'Get it on',
  newsletter: 'Sign up for the newsletter to be notified at launch.',
};

const ComingSoonModal = ({ onClose }) => {
  const { lang } = useLanguage();
  const t = lang === 'EN' ? txtEN : txtFR;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border-b-8 border-slate-200 text-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="h-5 w-5 text-slate-500" />
        </button>

        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-5 flex items-center justify-center shadow-lg border-b-4 border-indigo-800">
          <Smartphone className="h-10 w-10 text-white" />
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{t.title}</h3>
        <p className="text-slate-500 mb-7 text-sm leading-relaxed whitespace-pre-line">{t.sub}</p>

        <div className="space-y-3">
          <button disabled className="w-full flex items-center gap-4 bg-slate-900 text-white py-4 px-5 rounded-2xl opacity-50 cursor-not-allowed border-b-4 border-slate-700">
            <svg viewBox="0 0 384 512" className="h-7 w-7 fill-white shrink-0">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-70 font-normal">{t.appstore}</div>
              <div className="text-sm font-extrabold leading-tight">App Store</div>
            </div>
          </button>

          <button disabled className="w-full flex items-center gap-4 bg-slate-900 text-white py-4 px-5 rounded-2xl opacity-50 cursor-not-allowed border-b-4 border-slate-700">
            <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
              <path d="M3 20.5V3.5C3 2.9 3.7 2.6 4.2 3L20.2 12L4.2 21C3.7 21.4 3 21.1 3 20.5Z" fill="#34D399" />
              <path d="M4.2 3L13.4 12.2L20.2 12L4.2 3Z" fill="#60A5FA" />
              <path d="M4.2 21L13.4 11.8L20.2 12L4.2 21Z" fill="#F87171" />
              <path d="M13.4 12.2L13.4 11.8L20.2 12L13.4 12.2Z" fill="#FBBF24" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-70 font-normal">{t.gplay}</div>
              <div className="text-sm font-extrabold leading-tight">Google Play</div>
            </div>
          </button>
        </div>

        <p className="text-xs text-slate-400 mt-5">{t.newsletter}</p>
      </div>
    </div>
  );
};

export default ComingSoonModal;
