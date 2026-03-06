import React from 'react';
import { Brain, Gamepad2, Smartphone, Mic, Users, Sparkles, BookOpen, Wrench } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

const features = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: 'Efficace et Prouvé',
    description: 'Nos leçons sont courtes et basées sur la science pour garantir une mémorisation à long terme du vocabulaire.',
    color: 'amber',
  },
  {
    icon: <Gamepad2 className="h-10 w-10" />,
    title: 'Totalement Ludique',
    description: 'Gagnez des XP, montez en ligue et débloquez des succès. Apprendre devient aussi addictif qu\'un jeu vidéo.',
    color: 'purple',
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: 'Partout avec vous',
    description: 'Dans le bus ou sur la plage, Kreyolang vous suit. Votre progression est synchronisée sur tous vos appareils.',
    color: 'indigo',
  },
  {
    icon: <Mic className="h-10 w-10" />,
    title: 'Prononciation Authentique',
    description: 'Audio enregistré par des locuteurs natifs. Entraînez votre oreille avec la vraie musicalité du créole.',
    color: 'rose',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Communauté Active',
    description: 'Classements entre amis, défis hebdomadaires et événements spéciaux. Apprenez ensemble, progressez ensemble.',
    color: 'emerald',
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: 'Intelligence Artificielle',
    description: 'Un parcours adaptatif qui s\'ajuste à votre niveau. L\'IA identifie vos faiblesses et renforce vos acquis.',
    color: 'cyan',
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Culture Immersive',
    description: 'Proverbes, histoire, musique, cuisine et légendes : plongez au cœur de la culture créole.',
    color: 'amber',
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: 'Outils Complets',
    description: 'Dictionnaire créole, conjugaison des verbes et guide phonétique pour aller encore plus loin.',
    color: 'indigo',
  },
];

const FeaturesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Pourquoi choisir la méthode Pirate ?
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            8 raisons qui font de Kreyolang l'app n°1 pour apprendre le créole.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
