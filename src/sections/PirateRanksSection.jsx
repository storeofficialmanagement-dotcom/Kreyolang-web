import React from 'react';
import { pirateRanks } from '../data/cultureData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const titleFR = { h: 'De Moussaillon à Amiral', sub: 'Gravissez les 8 rangs pirates au fil de votre apprentissage. Chaque rang débloque un nouveau navire.' };
const titleEN = { h: 'From Deckhand to Admiral', sub: 'Climb the 8 pirate ranks as you learn. Each rank unlocks a new vessel.' };

const rankLabelFR = 'Rang';
const rankLabelEN = 'Rank';
const ultimateFR = 'Rang ultime';
const ultimateEN = 'Ultimate rank';

const PirateRanksSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const title = lang === 'EN' ? titleEN : titleFR;
  const rankLabel = lang === 'EN' ? rankLabelEN : rankLabelFR;
  const ultimateLabel = lang === 'EN' ? ultimateEN : ultimateFR;

  return (
    <section id="rangs" className="py-20 bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-white overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">{title.h}</h2>
          <p className="text-purple-200/70 mt-3 max-w-xl mx-auto">{title.sub}</p>
        </div>

        {/* Grid 2 colonnes mobile → 4 colonnes desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          {pirateRanks.map((rank, i) => {
            const isLast = i === pirateRanks.length - 1;
            return (
              <div
                key={i}
                className={`relative bg-purple-800/40 backdrop-blur-sm border rounded-2xl p-4 md:p-5 hover:border-purple-400/60 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 ${
                  isLast
                    ? 'border-amber-400/50 ring-1 ring-amber-400/30 bg-gradient-to-br from-purple-800/60 to-amber-950/30'
                    : 'border-purple-700/50'
                }`}
              >
                {/* Rank number badge */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-purple-300/80 font-bold">{rankLabel} {rank.rank}</span>
                  {isLast && (
                    <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full font-extrabold leading-tight">
                      {ultimateLabel}
                    </span>
                  )}
                </div>

                {/* Emoji + title */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl">{rank.emoji}</span>
                  <h3 className="text-sm md:text-base font-extrabold text-white leading-tight">{rank.title}</h3>
                </div>

                {/* Boat name */}
                <p className="text-[10px] md:text-xs text-purple-300/70 font-medium">{rank.boat}</p>

                {/* Description */}
                <p className="text-xs text-purple-100/70 leading-relaxed">{rank.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PirateRanksSection;
