import React, { useState } from 'react';
import { BookOpen, Music, UtensilsCrossed, Scroll, Sparkles, Lock, Crown } from 'lucide-react';
import { proverbs, history, music, cuisine, legends } from '../data/cultureData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const tabs = [
  { id: 'proverbes', label: 'Proverbes',  icon: <Scroll className="h-4 w-4" /> },
  { id: 'histoire',  label: 'Histoire',   icon: <BookOpen className="h-4 w-4" /> },
  { id: 'musique',   label: 'Musique',    icon: <Music className="h-4 w-4" /> },
  { id: 'cuisine',   label: 'Cuisine',    icon: <UtensilsCrossed className="h-4 w-4" /> },
  { id: 'legendes',  label: 'Légendes',   icon: <Sparkles className="h-4 w-4" /> },
];

const categoryColors = {
  sagesse:   'bg-amber-100 text-amber-700',
  humour:    'bg-pink-100 text-pink-700',
  nature:    'bg-emerald-100 text-emerald-700',
  relations: 'bg-blue-100 text-blue-700',
  travail:   'bg-purple-100 text-purple-700',
};

/* ─── Premium overlay ─── */
const PremiumOverlay = ({ count, label }) => (
  <div className="relative mt-4">
    {/* Blurred placeholder */}
    <div className="rounded-2xl bg-slate-100 p-8 blur-[6px] select-none pointer-events-none" aria-hidden>
      <div className="h-4 bg-slate-200 rounded w-3/4 mb-3" />
      <div className="h-3 bg-slate-200 rounded w-1/2 mb-2" />
      <div className="h-3 bg-slate-200 rounded w-2/3" />
    </div>
    {/* Lock card */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm border-2 border-purple-200 rounded-2xl px-6 py-5 text-center shadow-xl max-w-xs">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Lock className="h-5 w-5 text-purple-600" />
        </div>
        <p className="text-sm font-extrabold text-slate-900 mb-1">
          +{count} {label} à découvrir
        </p>
        <p className="text-xs text-slate-500 mb-3">
          Disponible avec Kreyolang Premium
        </p>
        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-extrabold px-4 py-2 rounded-xl">
          <Crown className="h-3.5 w-3.5" />
          Débloquer avec Premium
        </span>
      </div>
    </div>
  </div>
);

const CultureSection = () => {
  const [activeTab, setActiveTab] = useState('proverbes');
  const ref = useScrollAnimation();

  return (
    <section id="culture" className="py-20 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Plus qu'une langue, une culture
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Kreyolang va au-delà de la grammaire. Découvrez les proverbes, l'histoire, la musique,
            la cuisine et les légendes qui font vibrer les cultures créoles et africaines.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 border-b-[3px] border-purple-800'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-b-[3px] border-slate-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 italic mb-6">(Exemples issus du créole martiniquais — disponible pour toutes les langues dans l'app)</p>

        {/* Tab content */}
        <div className="max-w-4xl mx-auto">

          {/* ─── PROVERBES ─── */}
          {activeTab === 'proverbes' && (
            <div className="space-y-4">
              {/* Featured proverb — visible */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl border-2 border-amber-200 p-6 md:p-8 text-center">
                <span className="text-3xl block mb-3">{'\ud83d\udcdc'}</span>
                <p className="text-lg md:text-xl font-extrabold text-slate-900 italic mb-2">
                  &ldquo;{proverbs[0].creole}&rdquo;
                </p>
                <p className="text-slate-600 mb-2">{proverbs[0].french}</p>
                <p className="text-sm text-amber-700 bg-amber-100 rounded-full px-4 py-1 inline-block">
                  {proverbs[0].explanation}
                </p>
              </div>

              {/* 1 extra proverb teaser */}
              <div className="bg-white rounded-2xl border-2 border-slate-100 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${categoryColors[proverbs[1].category]}`}>
                    {proverbs[1].category}
                  </span>
                </div>
                <p className="text-sm font-extrabold text-slate-900 italic mb-1">&ldquo;{proverbs[1].creole}&rdquo;</p>
                <p className="text-sm text-slate-500">{proverbs[1].french}</p>
              </div>

              {/* Premium lock */}
              <PremiumOverlay count={50} label="proverbes" />
            </div>
          )}

          {/* ─── HISTOIRE ─── */}
          {activeTab === 'histoire' && (
            <div className="space-y-4">
              {/* First chapter — visible */}
              <div className="bg-white rounded-2xl border-2 border-b-[5px] border-slate-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{history[0].icon}</span>
                  <div>
                    <p className="text-xs font-bold text-purple-600">{history[0].period}</p>
                    <h3 className="text-base font-extrabold text-slate-900">{history[0].title}</h3>
                    <p className="text-[10px] text-slate-400 italic">{history[0].creoleTitle}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{history[0].summary}</p>
                {history[0].keyFigures.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {history[0].keyFigures.map((f, j) => (
                      <span key={j} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Teaser cards — titles only, no details */}
              <div className="grid md:grid-cols-3 gap-3">
                {history.slice(1).map((ch, i) => (
                  <div key={i} className="relative bg-slate-50 rounded-2xl border-2 border-slate-100 p-4 opacity-60">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{ch.icon}</span>
                      <div>
                        <p className="text-[10px] font-bold text-purple-400">{ch.period}</p>
                        <h4 className="text-sm font-extrabold text-slate-500">{ch.title}</h4>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Lock className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium lock */}
              <PremiumOverlay count={12} label="chapitres d'histoire" />
            </div>
          )}

          {/* ─── MUSIQUE ─── */}
          {activeTab === 'musique' && (
            <div className="space-y-6">
              {/* First era — visible */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${music[0].colors[0]}, ${music[0].colors[1]})` }}
                  />
                  <h3 className="text-lg font-extrabold text-slate-900">{music[0].era}</h3>
                  <span className="text-xs text-slate-400 font-medium">{music[0].period}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {music[0].genres.map((g, j) => (
                    <div
                      key={j}
                      className="rounded-2xl p-4 text-white relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${music[0].colors[0]}, ${music[0].colors[1]})` }}
                    >
                      <span className="absolute top-2 right-2 text-3xl opacity-20">{g.icon}</span>
                      <span className="text-xl block mb-1">{g.icon}</span>
                      <h4 className="text-sm font-extrabold">{g.name}</h4>
                      <p className="text-xs opacity-80 mt-1 leading-relaxed">{g.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other eras — title only, locked */}
              <div className="grid md:grid-cols-2 gap-3">
                {music.slice(1).map((era, i) => (
                  <div key={i} className="relative rounded-2xl border-2 border-slate-100 p-4 opacity-60">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: `linear-gradient(135deg, ${era.colors[0]}, ${era.colors[1]})` }}
                      />
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-500">{era.era}</h4>
                        <span className="text-[10px] text-slate-400">{era.period} — {era.genres.length} genres</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Lock className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium lock */}
              <PremiumOverlay count={15} label="genres musicaux" />
            </div>
          )}

          {/* ─── CUISINE ─── */}
          {activeTab === 'cuisine' && (
            <div className="space-y-4">
              {/* First dish — visible */}
              <div className="bg-white rounded-2xl border-2 border-b-[5px] border-slate-100 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{cuisine[0].emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-base font-extrabold text-slate-900">{cuisine[0].name}</h3>
                    <p className="text-xs text-purple-600 font-bold italic">{cuisine[0].creoleName}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cuisine[0].tags.map((tag, j) => (
                        <span key={j} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">{cuisine[0].origin}</p>
                  </div>
                </div>
              </div>

              {/* Other dishes — name + emoji only, locked */}
              <div className="grid grid-cols-3 gap-3">
                {cuisine.slice(1).map((dish, i) => (
                  <div key={i} className="relative bg-slate-50 rounded-2xl border-2 border-slate-100 p-4 text-center opacity-60">
                    <span className="text-3xl block mb-2">{dish.emoji}</span>
                    <h4 className="text-sm font-extrabold text-slate-500">{dish.name}</h4>
                    <p className="text-[10px] text-purple-400 italic">{dish.creoleName}</p>
                    <div className="absolute top-2 right-2">
                      <Lock className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium lock */}
              <PremiumOverlay count={20} label="recettes créoles" />
            </div>
          )}

          {/* ─── LÉGENDES ─── */}
          {activeTab === 'legendes' && (
            <div className="space-y-4">
              {/* First legend — visible */}
              <div
                className="rounded-2xl p-6 text-white relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${legends[0].colors[0]}, ${legends[0].colors[1]})` }}
              >
                <span className="absolute top-3 right-3 text-5xl opacity-15">{legends[0].icon}</span>
                <span className="text-3xl block mb-3">{legends[0].icon}</span>
                <h3 className="text-lg font-extrabold mb-2">{legends[0].name}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{legends[0].desc}</p>
              </div>

              {/* Other legends — name + icon only, locked */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {legends.slice(1).map((legend, i) => (
                  <div key={i} className="relative bg-slate-50 rounded-2xl border-2 border-slate-100 p-4 text-center opacity-60">
                    <span className="text-3xl block mb-2">{legend.icon}</span>
                    <h4 className="text-sm font-extrabold text-slate-500">{legend.name}</h4>
                    <div className="absolute top-2 right-2">
                      <Lock className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium lock */}
              <PremiumOverlay count={10} label="légendes créoles" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
