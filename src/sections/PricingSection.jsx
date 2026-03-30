import React, { useState } from 'react';
import { Check, X, Crown } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const txt = {
  FR: {
    title: 'Choisissez votre plan',
    subtitle: 'Commencez gratuitement, passez Premium quand vous êtes prêt.',
    toggleFree: 'Mensuel',
    toggleAnnual: 'Annuel',
    saveBadge: '-30%',
    freeName: 'Gratuit',
    freeTagline: 'Pour découvrir les langues',
    freePrice: '0€',
    freePriceSub: '/ toujours',
    freeCta: 'COMMENCER GRATUITEMENT',
    freeFeatures: [
      { ok: true,  text: 'Premières leçons de chaque unité' },
      { ok: true,  text: 'XP, ligues et streaks' },
      { ok: true,  text: 'Sessions limitées par jour' },
      { ok: false, text: 'Accès à tout le contenu' },
      { ok: false, text: 'Mode hors-ligne' },
      { ok: false, text: 'Sans publicité' },
    ],
    premiumName: 'Premium',
    premiumTagline: 'Accès illimité à tout le contenu',
    popularBadge: 'Populaire',
    launchBadge: 'Offre de lancement — 30% de réduction',
    annualPrice: '69,99€',
    annualPriceSub: '/ an',
    annualMonthly: 'soit 5,83€/mois —',
    annualOld: '99,99€',
    monthlyPrice: '9,99€',
    monthlyPriceSub: '/ mois',
    monthlyNote: 'Sans engagement, annulable à tout moment',
    premiumCta: 'DEVENIR PREMIUM',
    premiumFeatures: [
      'Accès illimité à toutes les leçons',
      'Toutes les langues disponibles',
      'Mode hors-ligne',
      'Expérience sans publicité',
      'Audio haute qualité',
      'Accès prioritaire aux nouveautés',
    ],
  },
  EN: {
    title: 'Choose your plan',
    subtitle: 'Start free, go Premium when you\'re ready.',
    toggleFree: 'Monthly',
    toggleAnnual: 'Annual',
    saveBadge: '-30%',
    freeName: 'Free',
    freeTagline: 'Discover the languages',
    freePrice: '€0',
    freePriceSub: '/ forever',
    freeCta: 'START FOR FREE',
    freeFeatures: [
      { ok: true,  text: 'First lessons of each unit' },
      { ok: true,  text: 'XP, leagues & streaks' },
      { ok: true,  text: 'Limited daily sessions' },
      { ok: false, text: 'All content unlocked' },
      { ok: false, text: 'Offline mode' },
      { ok: false, text: 'Ad-free experience' },
    ],
    premiumName: 'Premium',
    premiumTagline: 'Unlimited access to all content',
    popularBadge: 'Popular',
    launchBadge: 'Launch offer — 30% off',
    annualPrice: '€69.99',
    annualPriceSub: '/ year',
    annualMonthly: 'just €5.83/month —',
    annualOld: '€99.99',
    monthlyPrice: '€9.99',
    monthlyPriceSub: '/ month',
    monthlyNote: 'No commitment, cancel anytime',
    premiumCta: 'GO PREMIUM',
    premiumFeatures: [
      'Unlimited access to all lessons',
      'All available languages',
      'Offline mode',
      'Ad-free experience',
      'High-quality audio',
      'Early access to new features',
    ],
  },
};

const PricingSection = ({ onCTA }) => {
  const [annual, setAnnual] = useState(true);
  const { lang } = useLanguage();
  const t = txt[lang];
  const ref = useScrollAnimation();

  return (
    <section id="prix" className="py-20 bg-gradient-to-b from-slate-900 to-indigo-950">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">
            {t.subtitle}
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-bold ${!annual ? 'text-white' : 'text-white/40'}`}>{t.toggleFree}</span>
            <button
              onClick={() => setAnnual(a => !a)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? 'bg-amber-500' : 'bg-white/20'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-0.5'}`} />
            </button>
            <span className={`text-sm font-bold ${annual ? 'text-white' : 'text-white/40'}`}>
              {t.toggleAnnual}
            </span>
            {annual && (
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold px-2.5 py-1 rounded-full">
                {t.saveBadge}
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free plan */}
          <div className="rounded-3xl border border-white/10 p-8 bg-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-extrabold text-white mb-2">{t.freeName}</h3>
            <p className="text-white/40 text-sm mb-6">{t.freeTagline}</p>
            <p className="text-4xl font-extrabold text-white mb-6">
              {t.freePrice} <span className="text-base font-bold text-white/40">{t.freePriceSub}</span>
            </p>

            <ul className="space-y-3 mb-8">
              {t.freeFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  {item.ok ? (
                    <Check className="h-5 w-5 text-emerald-400 shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-white/20 shrink-0" />
                  )}
                  <span className={item.ok ? 'text-white/80' : 'text-white/30'}>{item.text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-extrabold py-3.5 rounded-2xl border border-white/20 transition-all duration-150"
            >
              {t.freeCta}
            </button>
          </div>

          {/* Premium plan */}
          <div className="relative rounded-3xl border border-amber-500/40 p-8 bg-gradient-to-b from-amber-500/10 to-purple-900/20 ring-1 ring-amber-500/20 shadow-2xl shadow-amber-900/20">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Crown className="h-3.5 w-3.5" />
                {t.popularBadge}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2 mt-2">{t.premiumName}</h3>
            <p className="text-white/50 text-sm mb-4">{t.premiumTagline}</p>

            {/* Launch badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1 mb-4">
              <span className="text-[11px] font-extrabold text-amber-400">{t.launchBadge}</span>
            </div>

            {annual ? (
              <div className="mb-6">
                <p className="text-4xl font-extrabold text-white">
                  {t.annualPrice} <span className="text-base font-bold text-white/40">{t.annualPriceSub}</span>
                </p>
                <p className="text-sm text-white/50 mt-1">
                  {t.annualMonthly}{' '}
                  <span className="line-through text-white/30">{t.annualOld}</span>
                </p>
              </div>
            ) : (
              <div className="mb-6">
                <p className="text-4xl font-extrabold text-white">
                  {t.monthlyPrice} <span className="text-base font-bold text-white/40">{t.monthlyPriceSub}</span>
                </p>
                <p className="text-sm text-white/50 mt-1">{t.monthlyNote}</p>
              </div>
            )}

            <ul className="space-y-3 mb-8">
              {t.premiumFeatures.map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-amber-400 shrink-0" />
                  <span className="text-white/80">{text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold py-3.5 rounded-2xl shadow-lg shadow-amber-900/30 border-b-[3px] border-amber-700 active:border-b-0 active:translate-y-[3px] transition-all duration-150"
            >
              {t.premiumCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
