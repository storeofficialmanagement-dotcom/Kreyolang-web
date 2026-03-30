import React from 'react';
import { Globe, Sparkles } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const creolesFR = [
  { flag: '🇲🇶', name: 'Créole Martiniquais', example: '"Sa ou fè ?"', translation: 'Comment vas-tu ?', lessons: '200+ leçons', color: 'border-purple-200 bg-purple-50' },
  { flag: '🇭🇹', name: 'Créole Haïtien', example: '"Bonjou, ki jan ou ye ?"', translation: 'Bonjour, comment allez-vous ?', lessons: '200+ leçons', color: 'border-blue-200 bg-blue-50' },
  { flag: '🇬🇵', name: 'Créole Guadeloupéen', example: '"Ka ou fè ?"', translation: 'Comment vas-tu ?', lessons: '150+ leçons', color: 'border-emerald-200 bg-emerald-50' },
  { flag: '🇬🇫', name: 'Créole Guyanais', example: '"Konman to yé ?"', translation: 'Comment ça va ?', lessons: '80+ leçons', color: 'border-teal-200 bg-teal-50' },
  { flag: '🇷🇪', name: 'Créole Réunionnais', example: '"Koman i lé ?"', translation: 'Comment ça va ?', lessons: '80+ leçons', color: 'border-amber-200 bg-amber-50' },
];
const creolesEN = [
  { flag: '🇲🇶', name: 'Martinican Creole', example: '"Sa ou fè ?"', translation: 'How are you?', lessons: '200+ lessons', color: 'border-purple-200 bg-purple-50' },
  { flag: '🇭🇹', name: 'Haitian Creole', example: '"Bonjou, ki jan ou ye ?"', translation: 'Hello, how are you?', lessons: '200+ lessons', color: 'border-blue-200 bg-blue-50' },
  { flag: '🇬🇵', name: 'Guadeloupean Creole', example: '"Ka ou fè ?"', translation: 'How are you?', lessons: '150+ lessons', color: 'border-emerald-200 bg-emerald-50' },
  { flag: '🇬🇫', name: 'Guyanese Creole', example: '"Konman to yé ?"', translation: 'How are you?', lessons: '80+ lessons', color: 'border-teal-200 bg-teal-50' },
  { flag: '🇷🇪', name: 'Reunionese Creole', example: '"Koman i lé ?"', translation: 'How are you?', lessons: '80+ lessons', color: 'border-amber-200 bg-amber-50' },
];

const africanLangs = [
  { flag: '🇸🇳', name: 'Wolof', example: '"Nanga def ?"', translation: 'Comment vas-tu ?', color: 'border-orange-200 bg-orange-50' },
  { flag: '🇲🇱', name: 'Bambara', example: '"I ni ce !"', translation: 'Bonjour !', color: 'border-red-200 bg-red-50' },
  { flag: '🇬🇳', name: 'Peul', example: '"No mbađɗaa ?"', translation: 'Comment ça va ?', color: 'border-rose-200 bg-rose-50' },
];
const africanLangsEN = [
  { flag: '🇸🇳', name: 'Wolof', example: '"Nanga def ?"', translation: 'How are you?', color: 'border-orange-200 bg-orange-50' },
  { flag: '🇲🇱', name: 'Bambara', example: '"I ni ce !"', translation: 'Hello!', color: 'border-red-200 bg-red-50' },
  { flag: '🇬🇳', name: 'Peul', example: '"No mbađɗaa ?"', translation: 'How are you?', color: 'border-rose-200 bg-rose-50' },
];

const txtFR = {
  title: 'Un monde de langues à explorer',
  sub: "Des créoles des Antilles aux langues africaines, Kreyolang ouvre la porte à un univers linguistique en constante expansion.",
  creoles: 'Langues Créoles',
  moreCreoles: "Et bien d'autres créoles à venir...",
  african: 'Langues Africaines',
  comingSoon: 'Bientôt',
  moreAfrican: "Et bien d'autres langues africaines à venir...",
};
const txtEN = {
  title: 'A world of languages to explore',
  sub: "From Caribbean Creoles to African languages, Kreyolang opens the door to a constantly expanding linguistic universe.",
  creoles: 'Creole Languages',
  moreCreoles: 'And many more Creoles coming soon...',
  african: 'African Languages',
  comingSoon: 'Coming soon',
  moreAfrican: 'And many more African languages coming soon...',
};

const LanguagesSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const creoles = lang === 'EN' ? creolesEN : creolesFR;
  const african = lang === 'EN' ? africanLangsEN : africanLangs;
  const t = lang === 'EN' ? txtEN : txtFR;

  return (
    <section id="langues" className="py-20 bg-slate-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t.title}</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">{t.sub}</p>
        </div>

        <h3 className="text-lg font-extrabold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full" />
          {t.creoles}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-3">
          {creoles.map((l, i) => (
            <div key={i} className={`rounded-2xl border-2 border-b-[5px] p-5 ${l.color} hover:-translate-y-1 transition-all duration-300`}>
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
          ))}
        </div>
        <p className="text-sm text-purple-600 font-bold mb-10 flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          {t.moreCreoles}
        </p>

        <h3 className="text-lg font-extrabold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full" />
          {t.african}
          <span className="text-xs bg-amber-100 text-amber-700 font-extrabold px-2.5 py-1 rounded-full">{t.comingSoon}</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-3">
          {african.map((l, i) => (
            <div key={i} className={`rounded-2xl border-2 border-b-[5px] p-5 ${l.color} hover:-translate-y-1 transition-all duration-300`}>
              <span className="text-3xl block mb-2">{l.flag}</span>
              <h4 className="text-sm font-extrabold text-slate-900 mb-2">{l.name}</h4>
              <div className="bg-white/70 rounded-lg p-2">
                <p className="text-xs font-bold text-slate-800 italic">{l.example}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{l.translation}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-amber-600 font-bold flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5" />
          {t.moreAfrican}
        </p>
      </div>
    </section>
  );
};

export default LanguagesSection;
