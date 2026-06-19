import React, { useState, useRef, useEffect } from 'react';
import IPhoneMockup from '../components/IPhoneMockup';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import SectionTag from '../components/SectionTag';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screensFR = [
  { label: 'Carte des leçons',      src: '/screenshots/fr/map.png' },
  { label: 'Exercices visuels',     src: '/screenshots/fr/quiz7.png' },
  { label: 'Classement Ligues',     src: '/screenshots/fr/league2.png' },
  { label: 'Culture & Traditions',  src: '/screenshots/fr/culture.png' },
  { label: 'Profil & Statistiques', src: '/screenshots/fr/streak.png' },
  { label: 'Atelier de langue',     src: '/screenshots/fr/atelier.png' },
  { label: 'Duels',                 src: '/screenshots/fr/duels.png' },
];
const screensEN = [
  { label: 'Lesson map',         src: '/screenshots/en/map.png' },
  { label: 'Visual exercises',   src: '/screenshots/en/quiz7.png' },
  { label: 'League rankings',    src: '/screenshots/en/league2.png' },
  { label: 'Culture & Heritage', src: '/screenshots/en/culture.png' },
  { label: 'Profile & Stats',    src: '/screenshots/en/streak.png' },
  { label: 'Language Workshop',  src: '/screenshots/en/atelier.png' },
  { label: 'Duels',              src: '/screenshots/en/duels.png' },
];

const txtFR = { tag: "L'application", h: "Découvrez l'expérience", sub: "Voici à quoi ressemble Kreyolang — pas une promesse, une réalité." };
const txtEN = { tag: 'The app', h: 'Discover the experience', sub: "This is what Kreyolang looks like — not a promise, a reality." };

const VISIBLE = { sm: 1, md: 3, lg: 4 };

const ScreenshotsSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const screens = lang === 'EN' ? screensEN : screensFR;
  const t = lang === 'EN' ? txtEN : txtFR;

  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(VISIBLE.lg);
  const trackRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setPerPage(VISIBLE.sm);
      else if (window.innerWidth < 1024) setPerPage(VISIBLE.md);
      else setPerPage(VISIBLE.lg);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Reset position when language changes
  useEffect(() => { setCurrent(0); }, [lang]);

  const maxIndex = Math.max(0, screens.length - perPage);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  const itemWidth = 100 / perPage;

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <SectionTag label={t.tag} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t.h}</h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">{t.sub}</p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * itemWidth}%)` }}
            >
              {screens.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 shrink-0 px-3"
                  style={{ width: `${itemWidth}%` }}
                >
                  <IPhoneMockup>
                    <img
                      src={s.src}
                      alt={s.label}
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  </IPhoneMockup>
                  <span className="text-xs font-bold text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Suivant"
          >
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-violet-600'
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
