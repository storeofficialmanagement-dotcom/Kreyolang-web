import React from 'react';
import { Crown } from 'lucide-react';

const cards = [
  { title: 'Pwovèb', emoji: '\ud83d\udcdc', gradient: 'from-amber-400 to-orange-500', badge: 'Gratuit' },
  { title: 'Istwa',  emoji: '\ud83c\udff0', gradient: 'from-blue-400 to-indigo-500',  badge: 'Premium' },
  { title: 'Mizik',  emoji: '\ud83c\udfb6', gradient: 'from-pink-400 to-purple-500',  badge: 'Premium' },
  { title: 'Kwizin', emoji: '\ud83c\udf5b', gradient: 'from-emerald-400 to-teal-500', badge: 'Premium' },
];

const CultureScreen = () => (
  <div className="flex flex-col flex-1 bg-gradient-to-b from-purple-50 to-slate-50 pt-10 px-3 pb-3">
    {/* Daily proverb - glassmorphism */}
    <div className="mb-3 rounded-xl p-2.5 border border-white/30 bg-white/20 backdrop-blur-sm shadow-sm">
      <p className="text-[8px] font-bold text-purple-500 uppercase tracking-wider mb-1">Pwovèb du jour</p>
      <p className="text-[10px] font-extrabold text-slate-800 italic leading-snug">
        "Sé grenn diri ki ka fè sak diri."
      </p>
      <p className="text-[8px] text-slate-500 mt-0.5">Les petits efforts font les grands résultats.</p>
    </div>

    {/* Bento grid */}
    <div className="grid grid-cols-2 gap-2 flex-1">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${card.gradient} p-2.5 flex flex-col justify-end`}
        >
          {/* Large emoji background */}
          <span className="absolute top-1 right-1 text-[40px] opacity-20 leading-none">{card.emoji}</span>

          {/* Badge */}
          <div className="absolute top-1.5 left-1.5">
            <span className={`text-[7px] font-extrabold px-1.5 py-0.5 rounded-full ${
              card.badge === 'Gratuit'
                ? 'bg-white/30 text-white'
                : 'bg-black/20 text-white flex items-center gap-0.5'
            }`}>
              {card.badge === 'Premium' && <Crown className="h-2 w-2 inline" />}
              {card.badge}
            </span>
          </div>

          <span className="text-[12px] font-extrabold text-white mt-6 drop-shadow-sm">{card.title}</span>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-2">
      <div className="w-14 h-1 bg-slate-300 rounded-full" />
    </div>
  </div>
);

export default CultureScreen;
