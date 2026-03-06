import React from 'react';
import IPhoneMockup from '../components/IPhoneMockup';
import QuizScreen from '../components/screens/QuizScreen';
import LeagueScreen from '../components/screens/LeagueScreen';
import StreakScreen from '../components/screens/StreakScreen';
import LessonMapScreen from '../components/screens/LessonMapScreen';
import CultureScreen from '../components/screens/CultureScreen';
import DictionaryScreen from '../components/screens/DictionaryScreen';
import useScrollAnimation from '../hooks/useScrollAnimation';

const screens = [
  { label: 'Quiz interactif',      component: <QuizScreen /> },
  { label: 'Classement Ligues',    component: <LeagueScreen /> },
  { label: 'Streak & Stats',       component: <StreakScreen /> },
  { label: 'Carte des leçons',     component: <LessonMapScreen /> },
  { label: 'Culture & Traditions',  component: <CultureScreen /> },
  { label: 'Dictionnaire',         component: <DictionaryScreen /> },
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
              <IPhoneMockup>{s.component}</IPhoneMockup>
              <span className="text-sm font-extrabold text-slate-700">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
