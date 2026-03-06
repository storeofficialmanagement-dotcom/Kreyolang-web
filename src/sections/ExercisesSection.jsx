import React from 'react';
import { exerciseTypes } from '../data/cultureData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ExercisesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="exercices" className="py-20 bg-slate-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            17 types d'exercices
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Pour ne jamais s'ennuyer. Chaque leçon mélange les formats pour stimuler toutes les compétences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {exerciseTypes.map((ex, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 border-b-[5px] border-slate-100 hover:border-slate-200 p-4 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl block mb-2">{ex.icon}</span>
              <h3 className="text-sm font-extrabold text-slate-900 mb-1">{ex.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{ex.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          + 5 autres types en développement continu
        </p>
      </div>
    </section>
  );
};

export default ExercisesSection;
