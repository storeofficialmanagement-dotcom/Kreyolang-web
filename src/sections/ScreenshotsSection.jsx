import React from 'react';
import IPhoneMockup from '../components/IPhoneMockup';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import SectionTag from '../components/SectionTag';

const screensFR = [
  { label: 'Carte des leçons',      src: '/screenshots/map.png' },
  { label: 'Exercices visuels',     src: '/screenshots/quiz7.png' },
  { label: 'Classement Ligues',     src: '/screenshots/league.png' },
  { label: 'Culture & Traditions',  src: '/screenshots/culture.png' },
  { label: 'Profil & Statistiques', src: '/screenshots/streak.png' },
  { label: 'Atelier de langue',     src: '/screenshots/atelier.png' },
];
const screensEN = [
  { label: 'Lesson map',        src: '/screenshots/map.png' },
  { label: 'Visual exercises',  src: '/screenshots/quiz7.png' },
  { label: 'League rankings',   src: '/screenshots/league.png' },
  { label: 'Culture & Heritage',src: '/screenshots/culture.png' },
  { label: 'Profile & Stats',   src: '/screenshots/streak.png' },
  { label: 'Language Workshop', src: '/screenshots/atelier.png' },
];

const txtFR = { tag: "L'application", h: "Découvrez l'expérience", sub: "Voici à quoi ressemble Kreyolang — pas une promesse, une réalité." };
const txtEN = { tag: 'The app', h: 'Discover the experience', sub: "This is what Kreyolang looks like — not a promise, a reality." };

const ScreenshotsSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const screens = lang === 'EN' ? screensEN : screensFR;
  const t = lang === 'EN' ? txtEN : txtFR;

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <SectionTag label={t.tag} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t.h}</h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">{t.sub}</p>
        </div>

        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {screens.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3 snap-center shrink-0 w-[240px] md:w-auto">
              <IPhoneMockup>
                <img src={s.src} alt={s.label} className="w-full h-full object-cover object-top" draggable={false} />
              </IPhoneMockup>
              <span className="text-xs font-bold text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
