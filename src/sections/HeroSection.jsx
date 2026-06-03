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

          {/* Store badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-1">
            {/* App Store — live */}
            <a
              href="https://apps.apple.com/us/app/kreyolang-apprends-ta-langue/id6760952977?l=fr-FR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-black hover:bg-slate-800 text-white rounded-xl px-4 py-2.5 transition-colors shadow-sm"
            >
              <svg viewBox="0 0 384 512" className="h-5 w-5 fill-white shrink-0">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left">
                <div className="text-[9px] leading-none opacity-70">{lang === 'EN' ? 'Download on the' : 'Disponible sur'}</div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </a>

            {/* Google Play — live */}
            <a
              href="https://play.google.com/store/apps/details?id=com.kreyolangapp.kreyolang&utm_source=emea_Med"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-black hover:bg-slate-800 text-white rounded-xl px-4 py-2.5 transition-colors shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
                <path d="M3 20.5V3.5C3 2.9 3.7 2.6 4.2 3L20.2 12L4.2 21C3.7 21.4 3 21.1 3 20.5Z" fill="#34D399" />
              </svg>
              <div className="text-left">
                <div className="text-[9px] leading-none opacity-70">{lang === 'EN' ? 'Get it on' : 'Disponible sur'}</div>
                <div className="text-sm font-bold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right — iPhone mockup */}
        <div className="flex-1 flex justify-center relative">
          {/* Soft glow behind mockup */}
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-violet-100/60 to-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 drop-shadow-xl">
            <IPhoneMockup>
              <img
                src={lang === 'EN' ? '/screenshots/en/map.png' : '/screenshots/fr/map.png'}
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
