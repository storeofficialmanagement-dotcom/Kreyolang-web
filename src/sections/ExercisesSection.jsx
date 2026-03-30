import React from 'react';
import { Brain, Ear, Mic, Gamepad2, PenLine, Eye } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const highlightsFR = [
  { icon: <Brain className="h-7 w-7" />, title: 'Compréhension', desc: "Quiz, choix d'images, textes à trous — testez votre compréhension de multiples façons.", color: 'from-purple-500 to-indigo-600' },
  { icon: <Ear className="h-7 w-7" />, title: 'Écoute', desc: "Dictées audio et exercices d'écoute pour entraîner votre oreille à chaque langue.", color: 'from-amber-500 to-orange-600' },
  { icon: <Mic className="h-7 w-7" />, title: 'Expression', desc: 'Prononciation, écriture libre et construction de phrases pour parler avec confiance.', color: 'from-emerald-500 to-teal-600' },
  { icon: <Gamepad2 className="h-7 w-7" />, title: 'Mini-jeux', desc: 'Bubble Pop, Match Madness, Word Rain — apprenez sans même vous en rendre compte.', color: 'from-rose-500 to-pink-600' },
  { icon: <PenLine className="h-7 w-7" />, title: 'Écriture', desc: "Anagrammes, banque de mots et traduction libre pour maîtriser l'orthographe de chaque langue.", color: 'from-cyan-500 to-blue-600' },
  { icon: <Eye className="h-7 w-7" />, title: 'Reconnaissance', desc: 'Swipe Match et associations visuelles pour ancrer le vocabulaire dans votre mémoire.', color: 'from-violet-500 to-purple-600' },
];

const highlightsEN = [
  { icon: <Brain className="h-7 w-7" />, title: 'Comprehension', desc: "Quizzes, image choices, fill-in-the-blanks — test your understanding in multiple ways.", color: 'from-purple-500 to-indigo-600' },
  { icon: <Ear className="h-7 w-7" />, title: 'Listening', desc: "Audio dictations and listening exercises to train your ear to each language.", color: 'from-amber-500 to-orange-600' },
  { icon: <Mic className="h-7 w-7" />, title: 'Speaking', desc: 'Pronunciation, free writing and sentence building to speak with confidence.', color: 'from-emerald-500 to-teal-600' },
  { icon: <Gamepad2 className="h-7 w-7" />, title: 'Mini-games', desc: 'Bubble Pop, Match Madness, Word Rain — learn without even realising it.', color: 'from-rose-500 to-pink-600' },
  { icon: <PenLine className="h-7 w-7" />, title: 'Writing', desc: "Anagrams, word banks and free translation to master the spelling of each language.", color: 'from-cyan-500 to-blue-600' },
  { icon: <Eye className="h-7 w-7" />, title: 'Recognition', desc: 'Swipe Match and visual associations to anchor vocabulary in your memory.', color: 'from-violet-500 to-purple-600' },
];

const titleFR = { h: "+ de 17 types d'exercices", sub: 'Pour ne jamais s\'ennuyer. Chaque leçon mélange les formats pour stimuler toutes les compétences.', more: 'Et de nouveaux formats ajoutés régulièrement...' };
const titleEN = { h: '17+ exercise types', sub: 'Never get bored. Every lesson mixes formats to stimulate all your skills.', more: 'And new formats added regularly...' };

const ExercisesSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const highlights = lang === 'EN' ? highlightsEN : highlightsFR;
  const title = lang === 'EN' ? titleEN : titleFR;

  return (
    <section id="exercices" className="py-20 bg-slate-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title.h}</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">{title.sub}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-b-[5px] border-slate-100 hover:border-slate-200 p-6 hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {h.icon}
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">{h.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">{title.more}</p>
      </div>
    </section>
  );
};

export default ExercisesSection;
