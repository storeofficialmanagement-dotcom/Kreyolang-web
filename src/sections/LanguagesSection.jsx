import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const creoles = [
  {
    flag: '\ud83c\uddf2\ud83c\uddf6',
    name: 'Créole Martiniquais',
    example: '"Sa ou f\u00e8 ?"',
    translation: 'Comment vas-tu ?',
    lessons: '200+ le\u00e7ons',
    color: 'border-purple-200 bg-purple-50',
  },
  {
    flag: '\ud83c\udded\ud83c\uddf9',
    name: 'Créole Haïtien',
    example: '"Bonjou, ki jan ou ye ?"',
    translation: 'Bonjour, comment allez-vous ?',
    lessons: '200+ le\u00e7ons',
    color: 'border-blue-200 bg-blue-50',
  },
  {
    flag: '\ud83c\uddec\ud83c\uddf5',
    name: 'Créole Guadeloupéen',
    example: '"Ka ou f\u00e8 ?"',
    translation: 'Comment vas-tu ?',
    lessons: '150+ le\u00e7ons',
    color: 'border-emerald-200 bg-emerald-50',
  },
  {
    flag: '\ud83c\uddec\ud83c\uddeb',
    name: 'Créole Guyanais',
    example: '"Konman to y\u00e9 ?"',
    translation: 'Comment \u00e7a va ?',
    lessons: '80+ le\u00e7ons',
    color: 'border-teal-200 bg-teal-50',
  },
  {
    flag: '\ud83c\uddf7\ud83c\uddea',
    name: 'Créole Réunionnais',
    example: '"Koman i l\u00e9 ?"',
    translation: 'Comment \u00e7a va ?',
    lessons: '80+ le\u00e7ons',
    color: 'border-amber-200 bg-amber-50',
  },
];

const african = [
  {
    flag: '\ud83c\uddf8\ud83c\uddf3',
    name: 'Wolof',
    example: '"Nanga def ?"',
    translation: 'Comment vas-tu ?',
    color: 'border-orange-200 bg-orange-50',
  },
  {
    flag: '\ud83c\uddf2\ud83c\uddf1',
    name: 'Bambara',
    example: '"I ni ce !"',
    translation: 'Bonjour !',
    color: 'border-red-200 bg-red-50',
  },
  {
    flag: '\ud83c\uddec\ud83c\uddf3',
    name: 'Peul',
    example: '"No mba\u0111\u0257aa ?"',
    translation: 'Comment \u00e7a va ?',
    color: 'border-rose-200 bg-rose-50',
  },
];

const LanguagesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="langues" className="py-20 bg-slate-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            8 langues, une seule app
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Créoles des Antilles et de l'océan Indien, plus bientôt des langues africaines.
          </p>
        </div>

        {/* Créoles */}
        <h3 className="text-lg font-extrabold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full" />
          Langues Créoles
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {creoles.map((lang, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 border-b-[5px] p-5 ${lang.color} hover:-translate-y-1 transition-all duration-300`}
            >
              <span className="text-3xl block mb-2">{lang.flag}</span>
              <h4 className="text-sm font-extrabold text-slate-900 mb-2">{lang.name}</h4>
              <div className="bg-white/70 rounded-lg p-2 mb-2">
                <p className="text-xs font-bold text-slate-800 italic">{lang.example}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{lang.translation}</p>
              </div>
              {lang.lessons && (
                <span className="text-[10px] font-extrabold text-slate-500 bg-white/60 rounded-full px-2.5 py-0.5">
                  {lang.lessons}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Langues Africaines */}
        <h3 className="text-lg font-extrabold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full" />
          Langues Africaines
          <span className="text-xs bg-amber-100 text-amber-700 font-extrabold px-2.5 py-1 rounded-full">
            Bientôt
          </span>
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {african.map((lang, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 border-b-[5px] p-5 ${lang.color} hover:-translate-y-1 transition-all duration-300 relative`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-3xl block mb-2">{lang.flag}</span>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-2">{lang.name}</h4>
                </div>
              </div>
              <div className="bg-white/70 rounded-lg p-2">
                <p className="text-xs font-bold text-slate-800 italic">{lang.example}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{lang.translation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
