import React from 'react';
import { Search, Volume2 } from 'lucide-react';

const words = [
  { creole: 'Manje',    french: 'Manger',    category: 'verbe',   emoji: '\ud83c\udf7d\ufe0f' },
  { creole: 'Dlo',      french: 'Eau',        category: 'nom',     emoji: '\ud83d\udca7' },
  { creole: 'Bèl',      french: 'Beau/Belle', category: 'adjectif', emoji: '\u2728' },
  { creole: 'Laplaj',   french: 'La plage',   category: 'lieu',    emoji: '\ud83c\udfd6\ufe0f' },
];

const categoryColors = {
  verbe:    'bg-purple-100 text-purple-700',
  nom:      'bg-blue-100 text-blue-700',
  adjectif: 'bg-amber-100 text-amber-700',
  lieu:     'bg-emerald-100 text-emerald-700',
};

const DictionaryScreen = () => (
  <div className="flex flex-col flex-1 bg-gradient-to-b from-indigo-50 to-slate-50 pt-10 px-3 pb-3">
    {/* Header */}
    <div className="text-center mb-2.5">
      <span className="text-[11px] font-extrabold text-indigo-700 bg-indigo-100 border border-indigo-200 rounded-full px-3 py-1">
        Diksyonè
      </span>
    </div>

    {/* Search bar */}
    <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 px-2.5 py-2 mb-3">
      <Search className="h-3.5 w-3.5 text-slate-400" />
      <span className="text-[10px] text-slate-400">Rechercher un mot...</span>
    </div>

    {/* Word results */}
    <div className="flex-1 space-y-2 overflow-hidden">
      {words.map((w, i) => (
        <div key={i} className="bg-white rounded-xl border border-slate-100 p-2.5 flex items-center gap-2.5">
          <span className="text-lg">{w.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-extrabold text-slate-800">{w.creole}</span>
              <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full ${categoryColors[w.category]}`}>
                {w.category}
              </span>
            </div>
            <p className="text-[9px] text-slate-500">{w.french}</p>
          </div>
          <Volume2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-2">
      <div className="w-14 h-1 bg-slate-300 rounded-full" />
    </div>
  </div>
);

export default DictionaryScreen;
