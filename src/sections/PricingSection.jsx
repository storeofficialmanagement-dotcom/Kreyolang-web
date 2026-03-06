import React, { useState } from 'react';
import { Check, X, Crown } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PricingSection = ({ onCTA }) => {
  const [annual, setAnnual] = useState(true);
  const ref = useScrollAnimation();

  const monthlyPrice = '7,99';
  const annualPrice = '69,99';
  const annualOldPrice = '99,99';
  const annualMonthly = '5,83';

  return (
    <section id="prix" className="py-20 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Choisissez votre plan
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Commencez gratuitement, passez Premium quand vous êtes prêt.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-bold ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Gratuit</span>
            <button
              onClick={() => setAnnual(a => !a)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? 'bg-purple-600' : 'bg-slate-300'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-0.5'}`} />
            </button>
            <span className={`text-sm font-bold ${annual ? 'text-slate-900' : 'text-slate-400'}`}>
              Annuel
            </span>
            {annual && (
              <span className="bg-emerald-100 text-emerald-700 text-xs font-extrabold px-2.5 py-1 rounded-full">
                -30%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free plan */}
          <div className="rounded-3xl border-2 border-b-[6px] border-slate-200 p-8 bg-white">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Gratuit</h3>
            <p className="text-slate-500 text-sm mb-6">Pour découvrir les langues</p>
            <p className="text-4xl font-extrabold text-slate-900 mb-6">
              0€ <span className="text-base font-bold text-slate-400">/ toujours</span>
            </p>

            <ul className="space-y-3 mb-8">
              {[
                { ok: true,  text: 'Premières leçons de chaque unité' },
                { ok: true,  text: 'XP, ligues et streaks' },
                { ok: true,  text: 'Sessions limitées par jour' },
                { ok: false, text: 'Accès à tout le contenu' },
                { ok: false, text: 'Mode hors-ligne' },
                { ok: false, text: 'Sans publicité' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  {item.ok ? (
                    <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-slate-300 shrink-0" />
                  )}
                  <span className={item.ok ? 'text-slate-700' : 'text-slate-400'}>{item.text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold py-3.5 rounded-2xl border-b-[4px] border-slate-300 active:border-b-0 active:translate-y-[4px] transition-all duration-150"
            >
              COMMENCER GRATUITEMENT
            </button>
          </div>

          {/* Premium plan */}
          <div className="relative rounded-3xl border-2 border-b-[6px] border-purple-300 p-8 bg-gradient-to-b from-purple-50 to-white ring-2 ring-purple-200">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Crown className="h-3.5 w-3.5" />
                Populaire
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 mt-2">Premium</h3>
            <p className="text-slate-500 text-sm mb-4">Accès illimité à tout le contenu</p>

            {/* Launch badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
              <span className="text-[11px] font-extrabold text-amber-700">Offre de lancement — 30% de réduction</span>
            </div>

            {annual ? (
              <div className="mb-6">
                <p className="text-4xl font-extrabold text-slate-900">
                  {annualPrice}€ <span className="text-base font-bold text-slate-400">/ an</span>
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  soit {annualMonthly}€/mois —{' '}
                  <span className="line-through text-slate-400">{annualOldPrice}€</span>
                </p>
              </div>
            ) : (
              <div className="mb-6">
                <p className="text-4xl font-extrabold text-slate-900">
                  {monthlyPrice}€ <span className="text-base font-bold text-slate-400">/ mois</span>
                </p>
                <p className="text-sm text-slate-500 mt-1">Sans engagement, annulable à tout moment</p>
              </div>
            )}

            <ul className="space-y-3 mb-8">
              {[
                'Accès illimité à toutes les leçons',
                'Toutes les langues disponibles',
                'Mode hors-ligne',
                'Expérience sans publicité',
                'Audio haute qualité',
                'Accès prioritaire aux nouveautés',
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-purple-500 shrink-0" />
                  <span className="text-slate-700">{text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold py-3.5 rounded-2xl border-b-[4px] border-purple-800 active:border-b-0 active:translate-y-[4px] transition-all duration-150"
            >
              DEVENIR PREMIUM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
