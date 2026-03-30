import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const txtFR = {
  title: "Prêt à embarquer ?",
  sub: "Rejoignez les premiers à bord et redécouvrez les langues de vos ancêtres.",
  cta1: 'COMMENCER GRATUITEMENT',
  cta2: 'DEVENIR PREMIUM',
};
const txtEN = {
  title: 'Ready to set sail?',
  sub: "Be among the first on board and rediscover the languages of your ancestors.",
  cta1: 'START FOR FREE',
  cta2: 'GO PREMIUM',
};

const FinalCTASection = ({ onCTA }) => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const t = lang === 'EN' ? txtEN : txtFR;

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div ref={ref} className="container mx-auto px-4 text-center max-w-2xl">
        {/* Mascot */}
        <img
          src="/mascot.webp"
          alt="Mascotte Kreyolang"
          className="w-20 h-20 object-contain mx-auto mb-6 drop-shadow-md"
        />

        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
          {t.title}
        </h2>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed">{t.sub}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onCTA}
            className="group relative bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg py-4 px-10 rounded-2xl border-b-[4px] border-violet-800 active:border-b-0 active:translate-y-[4px] transition-all duration-150 overflow-hidden"
          >
            <span className="relative z-10">{t.cta1}</span>
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[30deg] group-hover:left-[200%] transition-all duration-700 ease-in-out" />
          </button>
          <button
            onClick={onCTA}
            className="text-violet-600 hover:text-violet-700 font-extrabold text-lg py-4 px-10 rounded-2xl border-2 border-violet-200 hover:border-violet-300 transition-all duration-150"
          >
            {t.cta2}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
