import React from 'react';
import { Brain, Gamepad2, Smartphone, Mic, Users, Sparkles, BookOpen, Wrench } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const featuresFR = [
  { icon: <Brain className="h-10 w-10" />, title: 'Efficace et Prouvé', description: 'Nos leçons courtes sont basées sur la science pour garantir une mémorisation à long terme du vocabulaire.', color: 'amber' },
  { icon: <Gamepad2 className="h-10 w-10" />, title: 'Totalement Ludique', description: "Gagnez des XP, montez en ligue et débloquez des succès. Apprendre devient aussi addictif qu'un jeu vidéo.", color: 'purple' },
  { icon: <Smartphone className="h-10 w-10" />, title: 'Partout avec vous', description: 'Dans le bus ou sur la plage, Kreyolang vous suit. Votre progression est synchronisée sur tous vos appareils.', color: 'indigo' },
  { icon: <Mic className="h-10 w-10" />, title: 'Prononciation Authentique', description: 'Audio enregistré par des locuteurs natifs. Entraînez votre oreille avec la vraie musicalité de chaque langue.', color: 'rose' },
  { icon: <Users className="h-10 w-10" />, title: 'Communauté Active', description: 'Classements entre amis, défis hebdomadaires et événements spéciaux. Apprenez ensemble, progressez ensemble.', color: 'emerald' },
  { icon: <Sparkles className="h-10 w-10" />, title: 'Intelligence Artificielle', description: "Un parcours adaptatif qui s'ajuste à votre niveau. L'IA identifie vos faiblesses et renforce vos acquis.", color: 'cyan' },
  { icon: <BookOpen className="h-10 w-10" />, title: 'Culture Immersive', description: 'Proverbes, histoire, musique, cuisine et légendes : plongez au cœur des cultures créoles et africaines.', color: 'amber' },
  { icon: <Wrench className="h-10 w-10" />, title: 'Outils Complets', description: 'Dictionnaire multilingue, conjugaison des verbes et guide phonétique pour aller encore plus loin.', color: 'indigo' },
];

const featuresEN = [
  { icon: <Brain className="h-10 w-10" />, title: 'Science-Backed', description: 'Short lessons built on spaced repetition science to guarantee long-term vocabulary retention.', color: 'amber' },
  { icon: <Gamepad2 className="h-10 w-10" />, title: 'Totally Fun', description: 'Earn XP, climb leagues and unlock achievements. Learning becomes as addictive as a video game.', color: 'purple' },
  { icon: <Smartphone className="h-10 w-10" />, title: 'Always with you', description: 'On the bus or on the beach, Kreyolang follows. Your progress syncs across all your devices.', color: 'indigo' },
  { icon: <Mic className="h-10 w-10" />, title: 'Authentic Pronunciation', description: 'Audio recorded by native speakers. Train your ear with the real musicality of each language.', color: 'rose' },
  { icon: <Users className="h-10 w-10" />, title: 'Active Community', description: 'Friend leaderboards, weekly challenges and special events. Learn together, grow together.', color: 'emerald' },
  { icon: <Sparkles className="h-10 w-10" />, title: 'Artificial Intelligence', description: 'An adaptive path that adjusts to your level. AI identifies your weak spots and reinforces your gains.', color: 'cyan' },
  { icon: <BookOpen className="h-10 w-10" />, title: 'Immersive Culture', description: 'Proverbs, history, music, cuisine and legends: dive deep into Creole and African cultures.', color: 'amber' },
  { icon: <Wrench className="h-10 w-10" />, title: 'Complete Tools', description: 'Multilingual dictionary, verb conjugation and phonetic guide to go even further.', color: 'indigo' },
];

const titleFR = { h: 'Pourquoi choisir la méthode Pirate ?', sub: "8 raisons qui font de Kreyolang l'app n°1 pour apprendre le créole et les langues d'Afrique." };
const titleEN = { h: 'Why choose the Pirate method?', sub: '8 reasons that make Kreyolang the #1 app for learning Creole and African languages.' };

const FeaturesSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const features = lang === 'EN' ? featuresEN : featuresFR;
  const title = lang === 'EN' ? titleEN : titleFR;

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title.h}</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">{title.sub}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
