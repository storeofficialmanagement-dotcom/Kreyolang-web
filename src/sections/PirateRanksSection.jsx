import React from 'react';
import { pirateRanks } from '../data/cultureData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const titleFR = { h: 'De Moussaillon à Amiral', sub: 'Gravissez les 8 rangs pirates au fil de votre apprentissage. Chaque rang débloque un nouveau navire.' };
const titleEN = { h: 'From Deckhand to Admiral', sub: 'Climb the 8 pirate ranks as you learn. Each rank unlocks a new vessel.' };

const RankCard = ({ rank, isLast, rankLabel, ultimateLabel }) => (
  <div className={`
    bg-purple-800/40 backdrop-blur-sm border border-purple-700/50
    rounded-2xl p-3 md:p-5
    hover:border-purple-400/50 transition-all duration-300
    ${isLast ? 'ring-2 ring-amber-400/50 bg-gradient-to-br from-purple-800/60 to-amber-950/30' : ''}
  `}>
    <div className="flex items-center gap-2 mb-1.5">
      <span className="text-lg md:text-2xl shrink-0">{rank.emoji}</span>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] md:text-[11px] text-purple-300 font-bold whitespace-nowrap">{rankLabel} {rank.rank}</span>
          {isLast && (
            <span className="text-[9px] md:text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full font-extrabold whitespace-nowrap">
              {ultimateLabel}
            </span>
          )}
        </div>
        <h3 className="text-xs md:text-base font-extrabold text-white leading-tight">{rank.title}</h3>
      </div>
    </div>
    <p className="text-[10px] md:text-[11px] text-purple-300/70 mb-1">{rank.boat}</p>
    <p className="text-[11px] md:text-sm text-purple-100/80 leading-relaxed">{rank.desc}</p>
  </div>
);

const PirateRanksSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const title = lang === 'EN' ? titleEN : titleFR;
  const rankLabel = lang === 'EN' ? 'Rank' : 'Rang';
  const ultimateLabel = lang === 'EN' ? 'Ultimate rank' : 'Rang ultime';

  return (
    <section id="rangs" className="py-20 bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-white overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">{title.h}</h2>
          <p className="text-purple-200/70 mt-3 max-w-xl mx-auto">{title.sub}</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Ligne verticale toujours au centre */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-400 via-purple-500 to-amber-400" />

          {pirateRanks.map((rank, i) => {
            const isLast = i === pirateRanks.length - 1;
            const isRight = i % 2 === 0; // pair → carte à droite, impair → carte à gauche

            return (
              <div key={i} className="relative flex items-start mb-4 md:mb-6">
                {/* Dot centré sur la ligne */}
                <div className="absolute left-1/2 top-4 w-3 h-3 -translate-x-1/2 bg-purple-400 rounded-full ring-4 ring-purple-900 z-10" />

                {isRight ? (
                  /* Carte à DROITE — spacer gauche vide */
                  <>
                    <div className="w-1/2 pr-3 md:pr-6" />
                    <div className="w-1/2 pl-3 md:pl-6">
                      <RankCard rank={rank} isLast={isLast} rankLabel={rankLabel} ultimateLabel={ultimateLabel} />
                    </div>
                  </>
                ) : (
                  /* Carte à GAUCHE — spacer droit vide */
                  <>
                    <div className="w-1/2 pr-3 md:pr-6">
                      <RankCard rank={rank} isLast={isLast} rankLabel={rankLabel} ultimateLabel={ultimateLabel} />
                    </div>
                    <div className="w-1/2 pl-3 md:pl-6" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PirateRanksSection;
