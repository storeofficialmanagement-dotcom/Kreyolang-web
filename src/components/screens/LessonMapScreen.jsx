import React from 'react';
import { Lock, Check, Anchor } from 'lucide-react';

const islands = [
  { id: 1, name: 'Moun & Idantité', status: 'done',    theme: 'bg-emerald-400', icon: '🏝️' },
  { id: 2, name: 'Objè & Lartik',   status: 'done',    theme: 'bg-blue-400',    icon: '🌴' },
  { id: 3, name: 'Lakay',           status: 'current', theme: 'bg-purple-500',  icon: '🌋' },
  { id: 4, name: 'Manje & Bwè',    status: 'locked',  theme: 'bg-slate-300',   icon: '🏰' },
];

const LessonMapScreen = () => (
  <div className="flex flex-col flex-1 bg-gradient-to-b from-sky-100 via-sky-50 to-blue-50 pt-10 px-3.5 pb-3 relative overflow-hidden">
    {/* Header */}
    <div className="text-center mb-3 relative z-10">
      <span className="text-[11px] font-extrabold text-indigo-700 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-3 py-1">
        Phase 1 — Fondasyon
      </span>
    </div>

    {/* Water waves background */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-200/40 to-transparent" />

    {/* Island map */}
    <div className="flex-1 flex flex-col items-center gap-4 relative z-10">
      {/* Dotted path */}
      <div className="absolute top-6 bottom-6 w-0.5 border-l-2 border-dashed border-blue-200/60 z-0" />

      {islands.map((island, i) => (
        <div key={island.id} className="relative z-10 flex items-center gap-3 w-full" style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
          {/* Island */}
          <div className={`w-14 h-14 ${island.theme} rounded-2xl flex items-center justify-center shadow-lg border-b-[3px] ${
            island.status === 'done'
              ? 'border-emerald-600'
              : island.status === 'current'
              ? 'border-purple-700 ring-2 ring-purple-300 ring-offset-1'
              : 'border-slate-400'
          }`}>
            {island.status === 'done' ? (
              <Check className="h-6 w-6 text-white" />
            ) : island.status === 'current' ? (
              <span className="text-lg">{island.icon}</span>
            ) : (
              <Lock className="h-5 w-5 text-white/70" />
            )}
          </div>

          {/* Label */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 ${
            island.status === 'locked' ? 'opacity-50' : ''
          }`}>
            <p className={`text-[10px] font-extrabold ${
              island.status === 'current' ? 'text-purple-700' : island.status === 'done' ? 'text-emerald-700' : 'text-slate-400'
            }`}>
              {island.name}
            </p>
            {island.status === 'done' && (
              <p className="text-[7px] text-emerald-500 font-bold">15/15 leçons</p>
            )}
            {island.status === 'current' && (
              <p className="text-[7px] text-purple-500 font-bold">4/15 leçons</p>
            )}
          </div>
        </div>
      ))}

      {/* Small boat at current position */}
      <div className="absolute" style={{ top: '42%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Anchor className="h-3 w-3 text-amber-500" />
      </div>
    </div>

    <div className="flex justify-center mt-2 relative z-10">
      <div className="w-14 h-1 bg-slate-300 rounded-full" />
    </div>
  </div>
);

export default LessonMapScreen;
