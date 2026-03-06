import React from 'react';
import { Star } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Marie-Claire D.',
    city: 'Paris',
    initials: 'MC',
    color: 'bg-purple-500',
    stars: 5,
    text: "Grâce à Kreyolang, je peux enfin parler créole avec ma grand-mère. Elle pleure de joie à chaque appel. Cette app m'a reconnectée à mes racines.",
  },
  {
    name: 'Jean-Philippe R.',
    city: 'Montréal',
    initials: 'JP',
    color: 'bg-indigo-500',
    stars: 5,
    text: "Le thème pirate rend l'apprentissage tellement fun ! Mes enfants adorent et moi aussi. On fait des mini-compétitions de XP en famille.",
  },
  {
    name: 'Stéphanie L.',
    city: 'Fort-de-France',
    initials: 'SL',
    color: 'bg-emerald-500',
    stars: 5,
    text: "J'ai essayé plein de méthodes pour apprendre le créole guadeloupéen. Kreyolang est la seule qui m'a vraiment fait progresser. Le système de streak est ultra motivant.",
  },
  {
    name: 'David M.',
    city: 'Lyon',
    initials: 'DM',
    color: 'bg-amber-500',
    stars: 4,
    text: "Ma femme est haïtienne et je voulais surprendre sa famille. Après 3 mois sur Kreyolang, j'ai pu tenir une conversation. Leur réaction valait tout l'or du monde.",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 bg-slate-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Ils ont embarqué à bord
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Découvrez les histoires de nos apprenants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border-2 border-b-[6px] border-slate-100 p-6 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star
                    key={s}
                    className={`h-4 w-4 ${s <= t.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-xs font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
