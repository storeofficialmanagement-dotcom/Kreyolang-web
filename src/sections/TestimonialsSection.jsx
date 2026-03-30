import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const testimonialsFR = [
  { name: 'Marie-Claire D.', city: 'Paris',          initials: 'MC', color: 'bg-purple-500', stars: 5, text: "Grâce à Kreyolang, je peux enfin parler créole avec ma grand-mère. Elle pleure de joie à chaque appel. Cette app m'a reconnectée à mes racines." },
  { name: 'Jean-Philippe R.', city: 'Montréal',       initials: 'JP', color: 'bg-indigo-500', stars: 5, text: "Le thème pirate rend l'apprentissage tellement fun ! Mes enfants adorent et moi aussi. On fait des mini-compétitions de XP en famille." },
  { name: 'Stéphanie L.',     city: 'Fort-de-France', initials: 'SL', color: 'bg-emerald-500', stars: 5, text: "J'ai essayé plein de méthodes pour apprendre le créole guadeloupéen. Kreyolang est la seule qui m'a vraiment fait progresser. Le streak est ultra motivant." },
  { name: 'David M.',         city: 'Lyon',           initials: 'DM', color: 'bg-amber-500',   stars: 4, text: "Ma femme est haïtienne et je voulais surprendre sa famille. Après 3 mois sur Kreyolang, j'ai pu tenir une conversation. Leur réaction valait tout l'or du monde." },
];

const testimonialsEN = [
  { name: 'Marie-Claire D.', city: 'Paris',        initials: 'MC', color: 'bg-purple-500', stars: 5, text: "Thanks to Kreyolang, I can finally speak Creole with my grandmother. She cries with joy on every call. This app reconnected me to my roots." },
  { name: 'Jean-Philippe R.', city: 'Montreal',    initials: 'JP', color: 'bg-indigo-500', stars: 5, text: "The pirate theme makes learning so fun! My kids love it and so do I. We have XP mini-competitions as a family." },
  { name: 'Stephanie L.',     city: 'Fort-de-France', initials: 'SL', color: 'bg-emerald-500', stars: 5, text: "I tried so many methods to learn Guadeloupean Creole. Kreyolang is the only one that really made me progress. The streak system is incredibly motivating." },
  { name: 'David M.',         city: 'Lyon',        initials: 'DM', color: 'bg-amber-500',   stars: 4, text: "My wife is Haitian and I wanted to surprise her family. After 3 months on Kreyolang, I could hold a conversation. Their reaction was priceless." },
];

const titleFR = { h: 'Ils ont embarqué à bord',  sub: 'Découvrez les histoires de nos apprenants.' };
const titleEN = { h: 'They came on board',        sub: 'Discover the stories of our learners.' };

/* ── Single card ── */
const TestimonialCard = ({ t }) => (
  <div className="bg-white rounded-3xl border-2 border-b-[6px] border-slate-100 p-6 h-full flex flex-col">
    <div className="flex gap-0.5 mb-4">
      {[1,2,3,4,5].map(s => (
        <Star key={s} className={`h-4 w-4 ${s <= t.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
      ))}
    </div>
    <p className="text-sm text-slate-600 leading-relaxed mb-6 italic flex-1">"{t.text}"</p>
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0`}>{t.initials}</div>
      <div>
        <p className="text-sm font-extrabold text-slate-900">{t.name}</p>
        <p className="text-xs text-slate-400">{t.city}</p>
      </div>
    </div>
  </div>
);

/* ── Carousel ── */
const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation();
  const { lang } = useLanguage();
  const testimonials = lang === 'EN' ? testimonialsEN : testimonialsFR;
  const title = lang === 'EN' ? titleEN : titleFR;

  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const autoRef = useRef(null);

  const go = (idx) => setCurrent((idx + total) % total);
  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  /* Auto-play every 5s */
  useEffect(() => {
    autoRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000);
    return () => clearInterval(autoRef.current);
  }, [total]);

  const pause = () => clearInterval(autoRef.current);

  return (
    <section className="py-20 bg-slate-50">
      <div ref={sectionRef} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title.h}</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">{title.sub}</p>
        </div>

        {/* ── Mobile carousel (< md) ── */}
        <div
          className="block md:hidden"
          onMouseEnter={pause}
          onTouchStart={pause}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full px-2">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Nav dots + arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-purple-400 hover:text-purple-600 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-purple-600 w-6' : 'bg-slate-300 w-2'
                  }`}
                  aria-label={`Aller au témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-purple-400 hover:text-purple-600 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Desktop carousel (≥ md) — 2 visible at a time ── */}
        <div
          className="hidden md:block"
          onMouseEnter={pause}
        >
          {/* We show 2 cards at a time; each "page" = 2 items */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${Math.floor(current / 2) * 100}%)` }}
            >
              {/* Group into pairs */}
              {[0, 2].map(start => (
                <div key={start} className="min-w-full grid grid-cols-2 lg:grid-cols-4 gap-6 px-1">
                  {testimonials.slice(start, start + (testimonials.length <= 4 ? testimonials.length : 2)).map((t, i) => (
                    <TestimonialCard key={i} t={t} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop nav arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-purple-400 hover:text-purple-600 transition-colors shadow-sm"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-purple-600 w-6' : 'bg-slate-300 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-purple-400 hover:text-purple-600 transition-colors shadow-sm"
              aria-label="Suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
