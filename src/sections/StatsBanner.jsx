import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const statsFR = [
  { value: '5 000+', label: 'Apprenants' },
  { value: '8+',     label: 'Langues' },
  { value: '500+',   label: 'Leçons' },
  { value: '17+',    label: "Types d'exercices" },
  { value: '4.8/5',  label: 'Note moyenne' },
];
const statsEN = [
  { value: '5,000+', label: 'Learners' },
  { value: '8+',     label: 'Languages' },
  { value: '500+',   label: 'Lessons' },
  { value: '17+',    label: 'Exercise types' },
  { value: '4.8/5',  label: 'Avg. rating' },
];

const StatsBanner = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const stats = lang === 'EN' ? statsEN : statsFR;

  return (
    <section className="py-10 bg-gradient-to-r from-indigo-600 to-purple-700">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-white">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-extrabold">{s.value}</p>
              <p className="text-sm opacity-80 font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
