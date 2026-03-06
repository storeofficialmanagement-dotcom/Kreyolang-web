import React from 'react';
import { Trophy, Zap } from 'lucide-react';

const players = [
  { rank: 1, name: 'MarieSoleil', xp: 2450, color: 'bg-amber-400',   initials: 'MS' },
  { rank: 2, name: 'JeanPierre',  xp: 2180, color: 'bg-slate-400',   initials: 'JP' },
  { rank: 3, name: 'Toi',         xp: 1920, color: 'bg-purple-500',  initials: '🏴‍☠️', isYou: true },
  { rank: 4, name: 'LucieK',      xp: 1740, color: 'bg-indigo-400',  initials: 'LK' },
  { rank: 5, name: 'TiMarco',     xp: 1580, color: 'bg-emerald-400', initials: 'TM' },
];

const LeagueScreen = () => (
  <div className="flex flex-col flex-1 bg-gradient-to-b from-amber-50 to-slate-50 pt-10 px-3.5 pb-3">
    {/* Header */}
    <div className="text-center mb-3">
      <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-200 rounded-full px-3 py-1 mb-2">
        <Trophy className="h-3.5 w-3.5 text-amber-600" />
        <span className="text-[11px] font-extrabold text-amber-700">Ligue Or</span>
      </div>
      <p className="text-[9px] text-slate-500 font-bold">Fin dans 3 jours</p>
    </div>

    {/* Leaderboard */}
    <div className="flex-1 bg-white rounded-2xl shadow border border-slate-100 p-2.5 space-y-1.5 overflow-hidden">
      {players.map(p => (
        <div
          key={p.rank}
          className={`flex items-center gap-2 py-1.5 px-2 rounded-xl text-[10px] ${
            p.isYou ? 'bg-purple-50 border border-purple-200' : 'hover:bg-slate-50'
          }`}
        >
          <span className={`w-4 text-center font-extrabold ${p.rank <= 3 ? 'text-amber-600' : 'text-slate-400'}`}>
            {p.rank}
          </span>
          <div className={`w-6 h-6 ${p.color} rounded-full flex items-center justify-center text-[8px] font-bold text-white shrink-0`}>
            {p.initials}
          </div>
          <span className={`flex-1 font-bold truncate ${p.isYou ? 'text-purple-700' : 'text-slate-700'}`}>
            {p.name}
          </span>
          <div className="flex items-center gap-0.5">
            <Zap className="h-2.5 w-2.5 text-purple-500" />
            <span className="font-extrabold text-purple-600">{p.xp.toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Promotion zone */}
    <div className="mt-2.5 bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-center">
      <p className="text-[9px] font-bold text-emerald-700">
        Top 3 promu en Ligue Diamant
      </p>
    </div>

    <div className="flex justify-center mt-2">
      <div className="w-14 h-1 bg-slate-300 rounded-full" />
    </div>
  </div>
);

export default LeagueScreen;
