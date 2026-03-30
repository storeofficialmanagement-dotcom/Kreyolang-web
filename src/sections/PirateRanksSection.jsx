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

  return (
    <section id="rangs" className="py-20 bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-white overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {title.h}
          </h2>
          <p className="text-purple-200/70 mt-3 max-w-xl mx-auto">
            {title.sub}
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-amber-400" />

          {pirateRanks.map((rank, i) => (
            <div
              key={i}
              className={`relative flex items-center gap-4 mb-6 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Connector dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 -translate-x-1/2 bg-purple-400 rounded-full ring-4 ring-purple-900 z-10" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className={`bg-purple-800/40 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-5 hover:border-purple-400/50 transition-all duration-300 ${
                  i === pirateRanks.length - 1 ? 'ring-2 ring-amber-400/50 bg-gradient-to-br from-purple-800/60 to-amber-950/30' : ''
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{rank.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-purple-300 font-bold">Rang {rank.rank}</span>
                        {i === pirateRanks.length - 1 && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-extrabold">
                            Rang ultime
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-extrabold text-white">{rank.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-purple-300/70 mb-1">{rank.boat}</p>
                  <p className="text-sm text-purple-100/80 leading-relaxed">{rank.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PirateRanksSection;
