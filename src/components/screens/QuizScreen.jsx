import React from 'react';
import { Flame, Zap, Heart } from 'lucide-react';

const QuizScreen = () => (
  <div className="flex flex-col flex-1 bg-gradient-to-b from-indigo-50 to-slate-50 pt-10 px-3.5 pb-3">
    {/* Top bar — realistic app layout */}
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-1 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1">
        <Flame className="h-3.5 w-3.5 text-orange-500" />
        <span className="text-[11px] font-extrabold text-orange-600">7</span>
      </div>
      <div className="flex items-center gap-1">
        <Heart className="h-3 w-3 text-red-400 fill-red-400" />
        <Heart className="h-3 w-3 text-red-400 fill-red-400" />
        <Heart className="h-3 w-3 text-red-400 fill-red-400" />
        <Heart className="h-3 w-3 text-slate-200" />
      </div>
      <div className="flex items-center gap-1 bg-purple-50 border border-purple-200 rounded-full px-2.5 py-1">
        <Zap className="h-3.5 w-3.5 text-purple-500" />
        <span className="text-[11px] font-extrabold text-purple-600">340 XP</span>
      </div>
    </div>

    {/* Progress */}
    <div className="mb-3.5">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] text-slate-500 font-bold">Moun & Idantité</span>
        <span className="text-[10px] text-indigo-600 font-extrabold">4 / 15</span>
      </div>
      <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: '27%' }} />
      </div>
    </div>

    {/* Image choice exercise — real app exercise type */}
    <div className="flex-1 bg-white rounded-2xl shadow border border-slate-100 p-3 flex flex-col gap-2">
      <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider bg-emerald-50 rounded-lg px-2 py-0.5 w-fit">
        Choix d'image
      </span>
      <p className="text-[12px] font-extrabold text-slate-800 leading-snug">
        Quel mot veut dire "Manje" ?
      </p>

      {/* Image grid */}
      <div className="grid grid-cols-2 gap-1.5 mt-1 flex-1">
        {[
          { emoji: '\ud83c\udf7d\ufe0f', label: 'Manger', correct: true },
          { emoji: '\ud83d\udca7', label: 'Boire', correct: false },
          { emoji: '\ud83d\udca4', label: 'Dormir', correct: false },
          { emoji: '\ud83c\udfd6\ufe0f', label: 'La plage', correct: false },
        ].map((opt, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center rounded-xl border-2 py-2 ${
              opt.correct
                ? 'bg-indigo-50 border-indigo-400'
                : 'bg-white border-slate-200'
            }`}
          >
            <span className="text-xl mb-0.5">{opt.emoji}</span>
            <span className={`text-[9px] font-bold ${opt.correct ? 'text-indigo-800' : 'text-slate-500'}`}>
              {opt.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Continue button */}
    <div className="mt-2.5">
      <div className="w-full bg-purple-600 text-white text-[11px] font-extrabold py-2.5 rounded-xl text-center border-b-[3px] border-purple-800">
        VÉRIFIER
      </div>
    </div>

    <div className="flex justify-center mt-2">
      <div className="w-14 h-1 bg-slate-300 rounded-full" />
    </div>
  </div>
);

export default QuizScreen;
