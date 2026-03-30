import React from 'react';
import IPhoneMockup from '../components/IPhoneMockup';
import useScrollAnimation from '../hooks/useScrollAnimation';

const screens = [
  { label: 'Exercices visuels',     src: '/screenshots/quiz7.png' },
  { label: 'Carte des leçons',      src: '/screenshots/map.png' },
  { label: 'Classement Ligues',     src: '/screenshots/league.png' },
  { label: 'Culture & Traditions',  src: '/screenshots/culture.png' },
  { label: 'Profil & Statistiques', src: '/screenshots/streak.png' },
  { label: 'Atelier de langue',     src: '/screenshots/atelier.png' },
];

const ScreenshotsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Un aperçu de l'aventure
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Découvrez l'expérience Kreyolang en quelques écrans.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {screens.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-4 snap-center shrink-0 w-[260px] md:w-auto">
              <IPhoneMockup>
                <img
                  src={s.src}
                  alt={s.label}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </IPhoneMockup>
              <span className="text-sm font-extrabold text-slate-700">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
