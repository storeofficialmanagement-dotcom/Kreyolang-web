import React from 'react';
import { pirateRanks } from '../data/cultureData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const titleFR = { h: 'De Moussaillon à Amiral', sub: 'Gravissez les 8 rangs pirates au fil de votre apprentissage. Chaque rang débloque un nouveau navire.' };
const titleEN = { h: 'From Deckhand to Admiral', sub: 'Climb the 8 pirate ranks as you learn. Each rank unlocks a new vessel.' };

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
          {/* Gradient line — gauche sur mobile, centre sur desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-amber-400" />

          {pirateRanks.map((rank, i) => {
            const isLast = i === pirateRanks.length - 1;
            const isRight = i % 2 === 0; // desktop: pair = droite, impair = gauche

            return (
              <div key={i} className="relative flex items-start mb-5 md:mb-6">
                {/* Connector dot */}
                <div className="absolute left-4 md:left-1/2 top-5 w-3 h-3 -translate-x-1/2 bg-purple-400 rounded-full ring-4 ring-purple-900 z-10" />

                {/* ── Mobile layout : ligne gauche, carte à droite ── */}
                <div className="block md:hidden ml-10 w-[calc(100%-2.5rem)]">
                  <RankCard rank={rank} isLast={isLast} rankLabel={rankLabel} ultimateLabel={ultimateLabel} />
                </div>

                {/* ── Desktop layout : alternance gauche/droite ── */}
                {isRight ? (
                  /* Pair : spacer gauche + carte à droite */
                  <>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="hidden md:block md:w-1/2 md:pl-8">
                      <RankCard rank={rank} isLast={isLast} rankLabel={rankLabel} ultimateLabel={ultimateLabel} />
                    </div>
                  </>
                ) : (
                  /* Impair : carte à gauche + spacer droit */
                  <>
                    <div className="hidden md:block md:w-1/2 md:pr-8">
                      <RankCard rank={rank} isLast={isLast} rankLabel={rankLabel} ultimateLabel={ultimateLabel} />
                    </div>
                    <div className="hidden md:block md:w-1/2" />
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

/* ── Card component ── */
const RankCard = ({ rank, isLast, rankLabel, ultimateLabel }) => (
  <div className={`
    bg-purple-800/40 backdrop-blur-sm border border-purple-700/50
    rounded-2xl p-4 md:p-5
    hover:border-purple-400/50 transition-all duration-300
    ${isLast ? 'ring-2 ring-amber-400/50 bg-gradient-to-br from-purple-800/60 to-amber-950/30' : ''}
  `}>
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl md:text-2xl">{rank.emoji}</span>
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] text-purple-300 font-bold">{rankLabel} {rank.rank}</span>
          {isLast && (
            <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-extrabold">
              {ultimateLabel}
            </span>
          )}
        </div>
        <h3 className="text-sm md:text-base font-extrabold text-white">{rank.title}</h3>
      </div>
    </div>
    <p className="text-[11px] text-purple-300/70 mb-1">{rank.boat}</p>
    <p className="text-xs md:text-sm text-purple-100/80 leading-relaxed">{rank.desc}</p>
  </div>
);

export default PirateRanksSection;
