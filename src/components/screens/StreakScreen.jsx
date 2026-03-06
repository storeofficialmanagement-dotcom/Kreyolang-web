import React from 'react';
import { Flame, Calendar, Zap, Target } from 'lucide-react';

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const active = [true, true, true, true, true, false, false]; // Mon-Fri done

const StreakScreen = () => (
  <div className="flex flex-col flex-1 bg-gradient-to-b from-orange-50 to-slate-50 pt-10 px-3.5 pb-3">
    {/* Streak counter */}
    <div className="text-center mb-3">
      <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mx-auto mb-2 flex items-center justify-center shadow-lg border-b-[3px] border-red-700">
        <Flame className="h-8 w-8 text-white" />
      </div>
      <p className="text-[20px] font-extrabold text-slate-900">7 jours</p>
      <p className="text-[10px] text-slate-500 font-bold">de série en cours !</p>
    </div>

    {/* Week calendar */}
    <div className="bg-white rounded-2xl shadow border border-slate-100 p-3 mb-2.5">
      <div className="flex items-center gap-1 mb-2">
        <Calendar className="h-3 w-3 text-slate-400" />
        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Cette semaine</span>
      </div>
      <div className="flex justify-between">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-[8px] font-bold text-slate-400">{d}</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              active[i]
                ? 'bg-orange-500 text-white'
                : 'bg-slate-100 text-slate-300'
            }`}>
              {active[i] ? <Flame className="h-3 w-3" /> : <span className="text-[8px]">–</span>}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-2 flex-1">
      <div className="bg-white rounded-xl border border-slate-100 p-2.5 flex flex-col items-center justify-center">
        <Zap className="h-4 w-4 text-purple-500 mb-1" />
        <span className="text-[14px] font-extrabold text-slate-900">1 920</span>
        <span className="text-[8px] text-slate-400 font-bold">XP total</span>
      </div>
      <div className="bg-white rounded-xl border border-slate-100 p-2.5 flex flex-col items-center justify-center">
        <Target className="h-4 w-4 text-emerald-500 mb-1" />
        <span className="text-[14px] font-extrabold text-slate-900">89%</span>
        <span className="text-[8px] text-slate-400 font-bold">Précision</span>
      </div>
      <div className="bg-white rounded-xl border border-slate-100 p-2.5 flex flex-col items-center justify-center">
        <Flame className="h-4 w-4 text-orange-500 mb-1" />
        <span className="text-[14px] font-extrabold text-slate-900">14</span>
        <span className="text-[8px] text-slate-400 font-bold">Record streak</span>
      </div>
      <div className="bg-white rounded-xl border border-slate-100 p-2.5 flex flex-col items-center justify-center">
        <Calendar className="h-4 w-4 text-indigo-500 mb-1" />
        <span className="text-[14px] font-extrabold text-slate-900">32</span>
        <span className="text-[8px] text-slate-400 font-bold">Leçons faites</span>
      </div>
    </div>

    <div className="flex justify-center mt-2">
      <div className="w-14 h-1 bg-slate-300 rounded-full" />
    </div>
  </div>
);

export default StreakScreen;
