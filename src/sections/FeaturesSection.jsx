import React from 'react';
import { Brain, Gamepad2, Mic, BookOpen } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import SectionTag from '../components/SectionTag';

const featuresFR = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Efficace et Prouvé',
    desc: 'Leçons courtes basées sur la répétition espacée — mémorisez durablement sans bachoter.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    accent: 'text-amber-600',
  },
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: 'Totalement Ludique',
    desc: 'XP, ligues, streaks, succès — apprendre devient aussi addictif qu\'un jeu vidéo.',
    color: 'bg-violet-50 text-violet-600 border-violet-100',
    accent: 'text-violet-600',
  },
  {
    icon: <Mic className="h-8 w-8" />,
    title: 'Voix Authentiques',
    desc: 'Audio enregistré par des locuteurs natifs. Entraînez votre oreille à la vraie musicalité de chaque langue.',
    color: 'bg-rose-50 text-rose-600 border-rose-100',
    accent: 'text-rose-600',
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Culture Immersive',
    desc: 'Proverbes, histoire, musique, cuisine et légendes — plongez au cœur des cultures créoles et africaines.',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    accent: 'text-indigo-600',
  },
];

const featuresEN = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Science-Backed',
    desc: 'Short lessons built on spaced repetition — retain vocabulary long-term without cramming.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    accent: 'text-amber-600',
  },
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: 'Totally Fun',
    desc: 'XP, leagues, streaks, achievements — learning becomes as addictive as a video game.',
    color: 'bg-violet-50 text-violet-600 border-violet-100',
    accent: 'text-violet-600',
  },
  {
    icon: <Mic className="h-8 w-8" />,
    title: 'Authentic Voices',
    desc: 'Audio recorded by native speakers. Train your ear to the real musicality of each language.',
    color: 'bg-rose-50 text-rose-600 border-rose-100',
    accent: 'text-rose-600',
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Immersive Culture',
    desc: 'Proverbs, history, music, cuisine and legends — dive deep into Creole and African cultures.',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    accent: 'text-indigo-600',
  },
];

const txtFR = { tag: 'Fonctionnalités', h: 'Pourquoi Kreyolang ?', sub: "Quatre piliers qui rendent l'apprentissage à la fois efficace et inoubliable." };
const txtEN = { tag: 'Features', h: 'Why Kreyolang?', sub: 'Four pillars that make learning both effective and unforgettable.' };

const FeaturesSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const features = lang === 'EN' ? featuresEN : featuresFR;
  const t = lang === 'EN' ? txtEN : txtFR;

  return (
    <section id="features" className="py-20 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <SectionTag label={t.tag} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t.h}</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">{t.sub}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border-2 border-slate-100 bg-white hover:border-slate-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 ${f.color} group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-sm md:text-base font-extrabold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
