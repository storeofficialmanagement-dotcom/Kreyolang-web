import React from 'react';
import IPhoneMockup from '../components/IPhoneMockup';
import { useLanguage } from '../context/LanguageContext';

const txt = {
  FR: {
    badge1: 'Nouveau',
    badge2: "L'app qui sauve vos racines",
    title1: 'Apprenez le Créole',
    title2: "et les langues d'Afrique",
    titleAccent: 'en vous amusant.',
    subtitle: 'Vos grands-parents parlent créole ou wolof. Vos enfants ne le comprennent plus.',
    subtitleBold: 'Changez ça en 5 minutes par jour.',
    cta1: "C'EST PARTI",
    cta2: "J'AI DÉJÀ UN COMPTE",
  },
  EN: {
    badge1: 'New',
    badge2: 'The app that saves your roots',
    title1: 'Learn Creole',
    title2: 'and African languages',
    titleAccent: 'while having fun.',
    subtitle: 'Your grandparents speak Creole or Wolof. Your children no longer understand.',
    subtitleBold: 'Change that in 5 minutes a day.',
    cta1: 'GET STARTED',
    cta2: 'I HAVE AN ACCOUNT',
  },
};

const HeroSection = ({ onCTA }) => {
  const { lang } = useLanguage();
  const t = txt[lang];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle radial glow — top right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 80% 10%, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left — text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5">
            <span className="text-[11px] font-extrabold text-violet-600">{t.badge1}</span>
            <span className="w-px h-3 bg-violet-200" />
            <span className="text-[11px] text-violet-400">{t.badge2}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            {t.title1}<br />{t.title2}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              {t.titleAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-500 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {t.subtitle}{' '}
            <strong className="text-slate-700">{t.subtitleBold}</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-2">
            <button
              onClick={onCTA}
              className="group relative bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border-b-[4px] border-violet-800 active:border-b-0 active:translate-y-[4px] transition-all duration-150 overflow-hidden"
            >
              <span className="relative z-10">{t.cta1}</span>
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[30deg] group-hover:left-[200%] transition-all duration-700 ease-in-out" />
            </button>
            <button
              onClick={onCTA}
              className="text-slate-600 hover:text-violet-600 font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border-2 border-slate-200 hover:border-violet-200 transition-all duration-150"
            >
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Right — iPhone mockup */}
        <div className="flex-1 flex justify-center relative">
          {/* Soft glow behind mockup */}
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-violet-100/60 to-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 drop-shadow-xl">
            <IPhoneMockup>
              <img
                src="/screenshots/map.png"
                alt="Kreyolang app"
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </IPhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
