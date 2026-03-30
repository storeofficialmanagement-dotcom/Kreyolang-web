import React from 'react';
import { Anchor } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const txtFR = {
  title: 'Prêt à embarquer ?',
  sub: "Rejoignez des milliers d'apprenants et redécouvrez les langues de vos ancêtres. Créoles et langues d'Afrique — l'aventure commence maintenant.",
  cta1: 'COMMENCER GRATUITEMENT',
  cta2: 'DEVENIR PREMIUM',
};
const txtEN = {
  title: 'Ready to set sail?',
  sub: "Join thousands of learners and rediscover the languages of your ancestors. Creoles and African languages — the adventure starts now.",
  cta1: 'START FOR FREE',
  cta2: 'GO PREMIUM',
};

const FinalCTASection = ({ onCTA }) => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const t = lang === 'EN' ? txtEN : txtFR;

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <div ref={ref} className="container mx-auto px-4 text-center">
        <Anchor className="h-12 w-12 mx-auto mb-6 text-amber-300" />
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t.title}</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">{t.sub}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onCTA}
            className="group relative bg-white text-purple-700 font-extrabold text-lg py-4 px-10 rounded-2xl border-b-[6px] border-slate-300 active:border-b-0 active:translate-y-[6px] transition-all duration-150 overflow-hidden"
          >
            <span className="relative z-10">{t.cta1}</span>
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-purple-100 to-transparent -skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
          </button>
          <button
            onClick={onCTA}
            className="bg-transparent text-white font-extrabold text-lg py-4 px-10 rounded-2xl border-2 border-white/40 hover:border-white/70 transition-all duration-150"
          >
            {t.cta2}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
