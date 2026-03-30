import React from 'react';
import IPhoneMockup from '../components/IPhoneMockup';
import { useLanguage } from '../context/LanguageContext';

const txt = {
  FR: {
    badge1: 'Nouveau',
    badge2: "L'app qui sauve vos racines",
    title1: 'Apprenez le Créole',
    title2: 'et les langues d\'Afrique',
    titleAccent: 'en vous amusant.',
    subtitle: 'Vos grands-parents parlent créole ou wolof. Vos enfants ne le comprennent plus.',
    subtitleBold: 'Changez ça en 5 minutes par jour.',
    social: 'apprenants nous font confiance',
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
    social: 'learners trust us',
    cta1: 'GET STARTED',
    cta2: 'I HAVE AN ACCOUNT',
  },
};

const HeroSection = ({ onCTA }) => {
  const { lang } = useLanguage();
  const t = txt[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-[#0A0820]">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-full blur-[80px]" />
        {/* Stars */}
        {[
          'top-[10%] left-[8%]', 'top-[25%] left-[20%]', 'top-[60%] left-[5%]',
          'top-[15%] right-[12%]', 'top-[40%] right-[6%]', 'top-[75%] right-[15%]',
          'top-[50%] left-[45%]', 'top-[80%] left-[30%]',
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-1 h-1 bg-white/40 rounded-full`}
            style={{ animation: `pulse ${2 + i * 0.3}s ease-in-out infinite` }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-28 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left — text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="text-[11px] font-extrabold text-amber-400">{t.badge1}</span>
            <span className="text-[11px] text-white/70">{t.badge2}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            {t.title1}<br />{t.title2}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              {t.titleAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {t.subtitle}{' '}
            <strong className="text-white/90">{t.subtitleBold}</strong>
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex -space-x-2">
              {['bg-purple-500', 'bg-indigo-500', 'bg-amber-500', 'bg-emerald-500'].map((c, i) => (
                <div key={i} className={`w-8 h-8 ${c} rounded-full border-2 border-white/20 flex items-center justify-center text-[10px] font-bold text-white`}>
                  {['MC', 'JP', 'LK', 'SD'][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/60">
              <strong className="text-white">5 000+</strong> {t.social}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            <button
              onClick={onCTA}
              className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl shadow-lg shadow-amber-900/40 border-b-[4px] border-amber-700 active:border-b-0 active:translate-y-[4px] transition-all duration-150 flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10">{t.cta1}</span>
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[30deg] group-hover:left-[200%] transition-all duration-700 ease-in-out" />
            </button>
            <button
              onClick={onCTA}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border border-white/30 transition-all duration-150"
            >
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Right — iPhone mockup */}
        <div className="flex-1 flex justify-center relative">
          {/* Glow behind phone */}
          <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-gradient-to-tr from-purple-600/30 to-indigo-500/30 rounded-full blur-3xl" />
          <div className="relative z-10 drop-shadow-2xl">
            <IPhoneMockup>
              <img
                src="/screenshots/quiz7.png"
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
