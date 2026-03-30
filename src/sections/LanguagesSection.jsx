import React from 'react';
import { Sparkles } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import SectionTag from '../components/SectionTag';

const creolesFR = [
  { flag: '🇲🇶', name: 'Créole Martiniquais', example: '"Sa ou fè ?"', translation: 'Comment vas-tu ?', lessons: '200+ leçons', color: 'border-violet-200 bg-violet-50/60' },
  { flag: '🇭🇹', name: 'Créole Haïtien', example: '"Bonjou, ki jan ou ye ?"', translation: 'Bonjour, comment allez-vous ?', lessons: '200+ leçons', color: 'border-blue-200 bg-blue-50/60' },
  { flag: '🇬🇵', name: 'Créole Guadeloupéen', example: '"Ka ou fè ?"', translation: 'Comment vas-tu ?', lessons: '150+ leçons', color: 'border-emerald-200 bg-emerald-50/60' },
  { flag: '🇬🇫', name: 'Créole Guyanais', example: '"Konman to yé ?"', translation: 'Comment ça va ?', lessons: '80+ leçons', color: 'border-teal-200 bg-teal-50/60' },
  { flag: '🇷🇪', name: 'Créole Réunionnais', example: '"Koman i lé ?"', translation: 'Comment ça va ?', lessons: '80+ leçons', color: 'border-amber-200 bg-amber-50/60' },
];
const creolesEN = [
  { flag: '🇲🇶', name: 'Martinican Creole', example: '"Sa ou fè ?"', translation: 'How are you?', lessons: '200+ lessons', color: 'border-violet-200 bg-violet-50/60' },
  { flag: '🇭🇹', name: 'Haitian Creole', example: '"Bonjou, ki jan ou ye ?"', translation: 'Hello, how are you?', lessons: '200+ lessons', color: 'border-blue-200 bg-blue-50/60' },
  { flag: '🇬🇵', name: 'Guadeloupean Creole', example: '"Ka ou fè ?"', translation: 'How are you?', lessons: '150+ lessons', color: 'border-emerald-200 bg-emerald-50/60' },
  { flag: '🇬🇫', name: 'Guyanese Creole', example: '"Konman to yé ?"', translation: 'How are you?', lessons: '80+ lessons', color: 'border-teal-200 bg-teal-50/60' },
  { flag: '🇷🇪', name: 'Reunionese Creole', example: '"Koman i lé ?"', translation: 'How are you?', lessons: '80+ lessons', color: 'border-amber-200 bg-amber-50/60' },
];

const africanFR = [
  { flag: '🇸🇳', name: 'Wolof', example: '"Nanga def ?"', translation: 'Comment vas-tu ?', color: 'border-orange-200 bg-orange-50/60' },
  { flag: '🇲🇱', name: 'Bambara', example: '"I ni ce !"', translation: 'Bonjour !', color: 'border-red-200 bg-red-50/60' },
  { flag: '🇬🇳', name: 'Peul', example: '"No mbađɗaa ?"', translation: 'Comment ça va ?', color: 'border-rose-200 bg-rose-50/60' },
];
const africanEN = [
  { flag: '🇸🇳', name: 'Wolof', example: '"Nanga def ?"', translation: 'How are you?', color: 'border-orange-200 bg-orange-50/60' },
  { flag: '🇲🇱', name: 'Bambara', example: '"I ni ce !"', translation: 'Hello!', color: 'border-red-200 bg-red-50/60' },
  { flag: '🇬🇳', name: 'Peul', example: '"No mbađɗaa ?"', translation: 'How are you?', color: 'border-rose-200 bg-rose-50/60' },
];

const txtFR = {
  tag: 'Langues',
  h: 'Un monde de langues à explorer',
  sub: "Des créoles des Antilles aux langues africaines — un univers linguistique en constante expansion.",
  creoles: 'Langues Créoles',
  moreCreoles: "Et bien d'autres créoles à venir...",
  african: 'Langues Africaines',
  comingSoon: 'Bientôt',
  moreAfrican: "Et bien d'autres langues africaines à venir...",
  hint: 'Glisser',
};
const txtEN = {
  tag: 'Languages',
  h: 'A world of languages to explore',
  sub: "From Caribbean Creoles to African languages — a constantly expanding linguistic universe.",
  creoles: 'Creole Languages',
  moreCreoles: 'And many more Creoles coming soon...',
  african: 'African Languages',
  comingSoon: 'Coming soon',
  moreAfrican: 'And many more African languages coming soon...',
  hint: 'Swipe',
};

const LangCard = ({ l }) => (
  <div className={`rounded-2xl border-2 p-5 ${l.color} snap-center shrink-0 w-[200px] hover:-translate-y-1 transition-all duration-300`}>
    <span className="text-3xl block mb-2">{l.flag}</span>
    <h4 className="text-sm font-extrabold text-slate-900 mb-2">{l.name}</h4>
    <div className="bg-white/70 rounded-lg p-2 mb-2">
      <p className="text-xs font-bold text-slate-800 italic">{l.example}</p>
      <p className="text-[10px] text-slate-500 mt-0.5">{l.translation}</p>
    </div>
    {l.lessons && (
      <span className="text-[10px] font-extrabold text-slate-500 bg-white/60 rounded-full px-2.5 py-0.5">{l.lessons}</span>
    )}
  </div>
);

const SwipeCarousel = ({ items, hint }) => {
  const [swiped, setSwiped] = React.useState(false);
  return (
    <div className="relative">
      {/* Scroll strip */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 scrollbar-hide"
        onScroll={() => setSwiped(true)}
      >
        {items.map((l, i) => <LangCard key={i} l={l} />)}
      </div>

      {/* Fade + hint — disparaît après le premier glissement */}
      {!swiped && (
        <div className="absolute right-0 top-0 bottom-3 w-28 pointer-events-none flex items-center justify-end pr-2"
          style={{ background: 'linear-gradient(to right, transparent, rgba(248,250,252,0.95))' }}>
          <span className="flex items-center gap-1 text-[11px] font-extrabold text-slate-400 bg-white/80 rounded-full px-2.5 py-1 shadow-sm border border-slate-100">
            {hint} →
          </span>
        </div>
      )}
    </div>
  );
};

const LanguagesSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const creoles = lang === 'EN' ? creolesEN : creolesFR;
  const african = lang === 'EN' ? africanEN : africanFR;
  const t = lang === 'EN' ? txtEN : txtFR;

  return (
    <section id="langues" className="py-20 bg-slate-50 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <SectionTag label={t.tag} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t.h}</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">{t.sub}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Créoles */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-700 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-500 rounded-full" />{t.creoles}
            </h3>
            <SwipeCarousel items={creoles} hint={t.hint} />
            <p className="text-xs text-violet-500 font-bold mt-4 flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" />{t.moreCreoles}
            </p>
          </div>

          {/* Africaines */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-700 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />{t.african}
              <span className="text-[10px] bg-amber-100 text-amber-700 font-extrabold px-2 py-0.5 rounded-full">{t.comingSoon}</span>
            </h3>
            <SwipeCarousel items={african} hint={t.hint} />
            <p className="text-xs text-amber-500 font-bold mt-4 flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" />{t.moreAfrican}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
