import React, { useState } from 'react';
import { BookOpen, Music, UtensilsCrossed, Scroll, Sparkles } from 'lucide-react';
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
            la cuisine et les légendes qui font vibrer le monde créole.
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

        {/* Tab content */}
        <div className="max-w-4xl mx-auto">

          {/* ─── PROVERBES ─── */}
          {activeTab === 'proverbes' && (
            <div className="space-y-4">
              {/* Featured proverb */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl border-2 border-amber-200 p-6 md:p-8 text-center">
                <span className="text-3xl block mb-3">{'\ud83d\udcdc'}</span>
                <p className="text-lg md:text-xl font-extrabold text-slate-900 italic mb-2">
                  "{proverbs[0].creole}"
                </p>
                <p className="text-slate-600 mb-2">{proverbs[0].french}</p>
                <p className="text-sm text-amber-700 bg-amber-100 rounded-full px-4 py-1 inline-block">
                  {proverbs[0].explanation}
                </p>
              </div>

              {/* Proverb grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {proverbs.slice(1).map((p, i) => (
                  <div key={i} className="bg-white rounded-2xl border-2 border-slate-100 p-5 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${categoryColors[p.category]}`}>
                        {p.category}
                      </span>
                    </div>
                    <p className="text-sm font-extrabold text-slate-900 italic mb-1">"{p.creole}"</p>
                    <p className="text-sm text-slate-500 mb-2">{p.french}</p>
                    <p className="text-xs text-slate-400">{p.explanation}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-purple-600 font-bold">50+ proverbes dans l'application</p>
            </div>
          )}

          {/* ─── HISTOIRE ─── */}
          {activeTab === 'histoire' && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {history.map((ch, i) => (
                  <div key={i} className="bg-white rounded-2xl border-2 border-b-[5px] border-slate-100 p-6 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{ch.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-purple-600">{ch.period}</p>
                        <h3 className="text-base font-extrabold text-slate-900">{ch.title}</h3>
                        <p className="text-[10px] text-slate-400 italic">{ch.creoleTitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{ch.summary}</p>
                    {ch.keyFigures.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {ch.keyFigures.map((f, j) => (
                          <span key={j} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── MUSIQUE ─── */}
          {activeTab === 'musique' && (
            <div className="space-y-6">
              {music.map((era, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: `linear-gradient(135deg, ${era.colors[0]}, ${era.colors[1]})` }}
                    />
                    <h3 className="text-lg font-extrabold text-slate-900">{era.era}</h3>
                    <span className="text-xs text-slate-400 font-medium">{era.period}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    {era.genres.map((g, j) => (
                      <div
                        key={j}
                        className="rounded-2xl p-4 text-white relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${era.colors[0]}, ${era.colors[1]})` }}
                      >
                        <span className="absolute top-2 right-2 text-3xl opacity-20">{g.icon}</span>
                        <span className="text-xl block mb-1">{g.icon}</span>
                        <h4 className="text-sm font-extrabold">{g.name}</h4>
                        <p className="text-xs opacity-80 mt-1 leading-relaxed">{g.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─── CUISINE ─── */}
          {activeTab === 'cuisine' && (
            <div className="grid md:grid-cols-2 gap-4">
              {cuisine.map((dish, i) => (
                <div key={i} className="bg-white rounded-2xl border-2 border-b-[5px] border-slate-100 p-6 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{dish.emoji}</span>
                    <div className="flex-1">
                      <h3 className="text-base font-extrabold text-slate-900">{dish.name}</h3>
                      <p className="text-xs text-purple-600 font-bold italic">{dish.creoleName}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {dish.tags.map((tag, j) => (
                          <span key={j} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mt-3">{dish.origin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─── LÉGENDES ─── */}
          {activeTab === 'legendes' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {legends.map((legend, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-white relative overflow-hidden hover:-translate-y-1 transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${legend.colors[0]}, ${legend.colors[1]})` }}
                >
                  <span className="absolute top-3 right-3 text-5xl opacity-15">{legend.icon}</span>
                  <span className="text-3xl block mb-3">{legend.icon}</span>
                  <h3 className="text-lg font-extrabold mb-2">{legend.name}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{legend.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
