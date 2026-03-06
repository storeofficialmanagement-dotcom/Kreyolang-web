import React from 'react';
import { Download, Globe, Gamepad2, Trophy } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const steps = [
  {
    icon: <Download className="h-7 w-7" />,
    title: 'Téléchargez l\'app',
    desc: 'Disponible gratuitement sur iOS et Android.',
    color: 'bg-indigo-100 text-indigo-600',
    ring: 'ring-indigo-200',
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: 'Choisissez votre langue',
    desc: 'Créoles des Antilles, de l\'océan Indien et langues d\'Afrique.',
    color: 'bg-purple-100 text-purple-600',
    ring: 'ring-purple-200',
  },
  {
    icon: <Gamepad2 className="h-7 w-7" />,
    title: 'Jouez et progressez',
    desc: 'Gagnez des XP, montez en ligue, gardez votre streak.',
    color: 'bg-amber-100 text-amber-600',
    ring: 'ring-amber-200',
  },
  {
    icon: <Trophy className="h-7 w-7" />,
    title: 'Devenez Amiral',
    desc: 'Atteignez le sommet et maîtrisez la langue.',
    color: 'bg-emerald-100 text-emerald-600',
    ring: 'ring-emerald-200',
  },
];

const HowItWorksSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="methode" className="py-20 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Comment ça marche ?</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">En 4 étapes simples, maîtrisez une nouvelle langue.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              {/* Number + icon */}
              <div className="relative mb-5">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-sm ring-4 ${step.ring} group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-extrabold">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>

              {/* Connector arrow (hidden on mobile and last item) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
