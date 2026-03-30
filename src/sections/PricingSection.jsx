import React, { useState } from 'react';
import { Check, X, Crown } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import SectionTag from '../components/SectionTag';

const txt = {
  FR: {
    title: 'Choisissez votre plan',
    subtitle: 'Commencez gratuitement, passez Premium quand vous êtes prêt.',
    toggleMonthly: 'Mensuel',
    toggleAnnual: 'Annuel',
    saveBadge: '-30%',
    premiumName: 'Premium',
    premiumTagline: 'Accès illimité à tout le contenu',
    popularBadge: 'Recommandé',
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
    orFree: 'Ou commencez gratuitement',
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
  },
  EN: {
    title: 'Choose your plan',
    subtitle: 'Start free, go Premium when you\'re ready.',
    toggleMonthly: 'Monthly',
    toggleAnnual: 'Annual',
    saveBadge: '-30%',
    premiumName: 'Premium',
    premiumTagline: 'Unlimited access to all content',
    popularBadge: 'Recommended',
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
    orFree: 'Or start for free',
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
          <SectionTag label={lang === 'EN' ? 'Pricing' : 'Tarifs'} dark />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">{t.title}</h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Premium card — centered, max-w-md */}
        <div className="max-w-md mx-auto">
          {/* Toggle Mensuel / Annuel */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={`text-sm font-bold transition-colors ${!annual ? 'text-white' : 'text-white/40'}`}>
              {t.toggleMonthly}
            </span>
            <button
              onClick={() => setAnnual(a => !a)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? 'bg-violet-600' : 'bg-white/20'}`}
              aria-label="Toggle billing period"
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-0.5'}`} />
            </button>
            <span className={`text-sm font-bold transition-colors ${annual ? 'text-white' : 'text-white/40'}`}>
              {t.toggleAnnual}
            </span>
            {annual && (
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold px-2.5 py-1 rounded-full">
                {t.saveBadge}
              </span>
            )}
          </div>

          {/* Premium Card */}
          <div className="relative rounded-3xl border border-violet-500/40 p-8 bg-gradient-to-b from-violet-500/10 to-indigo-900/30 ring-1 ring-violet-500/20 shadow-2xl shadow-indigo-900/30">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
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

            {/* Price */}
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

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {t.premiumFeatures.map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-violet-400 shrink-0" />
                  <span className="text-white/80">{text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-indigo-900/40 border-b-[3px] border-indigo-800 active:border-b-0 active:translate-y-[3px] transition-all duration-150"
            >
              {t.premiumCta}
            </button>
          </div>

          {/* ── Divider + Free plan ── */}
          <div className="mt-10 relative">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
            <p className="relative text-center text-white/50 text-sm font-bold bg-transparent px-4">
              <span className="bg-indigo-950 px-4">{t.orFree}</span>
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-extrabold text-white">{t.freeName}</h3>
                <p className="text-white/40 text-xs mt-0.5">{t.freeTagline}</p>
              </div>
              <p className="text-2xl font-extrabold text-white">
                {t.freePrice} <span className="text-sm font-bold text-white/40">{t.freePriceSub}</span>
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
              {t.freeFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs">
                  {item.ok ? (
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  ) : (
                    <X className="h-4 w-4 text-white/20 shrink-0" />
                  )}
                  <span className={item.ok ? 'text-white/70' : 'text-white/30'}>{item.text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTA}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-extrabold py-3 rounded-xl border border-white/20 transition-all duration-150 text-sm"
            >
              {t.freeCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
