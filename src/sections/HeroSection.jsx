import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import IPhoneMockup from '../components/IPhoneMockup';
import QuizScreen from '../components/screens/QuizScreen';

const HeroSection = ({ onCTA }) => {
  const ref = useScrollAnimation();

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">
      <div ref={ref} className="flex-1 text-center md:text-left space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5">
          <span className="text-[11px] font-extrabold text-purple-700">Nouveau</span>
          <span className="text-[11px] text-purple-500">L'app qui sauve vos racines</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
          Apprenez le Créole en vous{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            amusant
          </span>.
        </h2>

        {/* Emotional subtitle */}
        <p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Vos grands-parents parlent créole. Vos enfants ne le comprennent plus.{' '}
          <strong className="text-slate-700">Changez ça en 5 minutes par jour.</strong>
        </p>

        {/* Social proof avatars */}
        <div className="flex items-center justify-center md:justify-start gap-3">
          <div className="flex -space-x-2">
            {['bg-purple-500', 'bg-indigo-500', 'bg-amber-500', 'bg-emerald-500'].map((c, i) => (
              <div key={i} className={`w-8 h-8 ${c} rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white`}>
                {['MC', 'JP', 'LK', 'SD'][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            <strong className="text-slate-700">5 000+</strong> apprenants nous font confiance
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
          <button
            onClick={onCTA}
            className="group relative bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border-b-[6px] border-purple-800 active:border-b-0 active:translate-y-[6px] transition-all duration-150 flex items-center justify-center overflow-hidden"
          >
            <span className="relative z-10">C'EST PARTI</span>
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
          </button>
          <button
            onClick={onCTA}
            className="bg-white hover:bg-slate-50 text-purple-700 font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border-2 border-slate-200 border-b-[6px] active:border-b-2 active:translate-y-[4px] transition-all duration-150"
          >
            J'AI DÉJÀ UN COMPTE
          </button>
        </div>
      </div>

      {/* iPhone mockup */}
      <div className="flex-1 flex justify-center relative">
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-indigo-100 to-purple-200 rounded-full opacity-70 blur-3xl -z-10 animate-float" />
        <IPhoneMockup>
          <QuizScreen />
        </IPhoneMockup>
      </div>
    </section>
  );
};

export default HeroSection;
