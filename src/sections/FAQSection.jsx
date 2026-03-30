import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import SectionTag from '../components/SectionTag';

const faqFR = [
  { q: "Kreyolang est-il vraiment gratuit ?", a: "Oui ! Le compte gratuit donne accès aux premières leçons de chaque unité, au système de progression (XP, ligues, streaks) et à un nombre limité de sessions par jour. L'abonnement Premium débloque l'intégralité du contenu." },
  { q: "Quelles langues puis-je apprendre ?", a: "Kreyolang propose des langues créoles (martiniquais, haïtien, guadeloupéen, guyanais, réunionnais) et des langues africaines (wolof, bambara, peul). De nouvelles langues sont régulièrement ajoutées." },
  { q: "Les cours sont-ils conçus par des locuteurs natifs ?", a: "Absolument. Tous nos contenus pédagogiques sont créés et validés par des linguistes et locuteurs natifs de chaque langue. Les enregistrements audio sont réalisés par des voix authentiques." },
  { q: "Combien de temps faut-il pour progresser ?", a: "Avec seulement 5 à 10 minutes par jour, vous pouvez atteindre un niveau conversationnel en 3 à 6 mois. Notre méthode est basée sur la répétition espacée pour maximiser la rétention." },
  { q: "Puis-je utiliser Kreyolang hors connexion ?", a: "Les utilisateurs Premium peuvent télécharger les leçons pour un usage hors connexion. Idéal pour apprendre dans les transports ou en voyage !" },
  { q: "Pourquoi un thème pirate ?", a: "Le thème pirate est un clin d'œil à l'histoire maritime des Caraïbes et de l'océan Indien. Il rend l'apprentissage plus immersif et ludique : vous montez en grade de Moussaillon à Amiral au fil de votre progression, avec 8 rangs à débloquer." },
  { q: "Qu'est-ce que la section Culture ?", a: "La section Culture vous plonge dans l'univers créole au-delà de la langue : proverbes traditionnels (gratuit), histoire des Antilles, genres musicaux (du Bèlè au Zouk), recettes authentiques (Colombo, Accras, Ti-Punch) et légendes créoles (Manman Dlo, Konpè Lapen). Un contenu Premium unique." },
  { q: "Y aura-t-il d'autres langues à l'avenir ?", a: "Oui ! Kreyolang a pour ambition de couvrir un large éventail de langues créoles et africaines. Nous ajoutons régulièrement de nouvelles langues. Inscrivez-vous à la newsletter pour être notifié des prochains lancements." },
  { q: "Comment fonctionnent les rangs pirates ?", a: "Vous commencez comme L'Engagé avec un simple radeau, et vous progressez à travers 8 rangs jusqu'à L'Amiral et son Vaisseau Fantôme. Chaque rang débloque un nouveau navire et reflète votre maîtrise croissante de la langue." },
  { q: "Kreyolang est-il adapté aux enfants ?", a: "Oui, Kreyolang est conçu pour les apprenants dès 13 ans (16 ans dans l'UE). L'interface gamifiée et le contenu visuel le rendent particulièrement engageant pour les jeunes apprenants." },
  { q: "Comment annuler mon abonnement Premium ?", a: "Vous pouvez annuler à tout moment depuis les paramètres de votre compte, ou directement via l'App Store (iOS), le Google Play Store (Android), ou votre espace web. L'accès Premium reste actif jusqu'à la fin de la période payée." },
  { q: "Mes données sont-elles protégées ?", a: "Kreyolang est 100% conforme au RGPD. Nous ne vendons jamais vos données. Les informations bancaires sont traitées exclusivement par Apple, Google ou Stripe. Vous pouvez demander la suppression de votre compte à tout moment." },
  { q: "Puis-je utiliser Kreyolang sur plusieurs appareils ?", a: "Oui ! Votre progression est automatiquement synchronisée sur tous vos appareils via le cloud Supabase. Commencez sur votre téléphone et continuez sur votre tablette." },
];

const faqEN = [
  { q: "Is Kreyolang really free?", a: "Yes! The free account gives access to the first lessons of each unit, the progression system (XP, leagues, streaks) and a limited number of daily sessions. The Premium subscription unlocks all content." },
  { q: "Which languages can I learn?", a: "Kreyolang offers Creole languages (Martinican, Haitian, Guadeloupean, Guyanese, Reunionese) and African languages (Wolof, Bambara, Peul). New languages are regularly added." },
  { q: "Are the courses designed by native speakers?", a: "Absolutely. All our educational content is created and validated by linguists and native speakers of each language. Audio recordings are made by authentic voices." },
  { q: "How long does it take to progress?", a: "With just 5 to 10 minutes a day, you can reach a conversational level in 3 to 6 months. Our method is based on spaced repetition to maximize retention." },
  { q: "Can I use Kreyolang offline?", a: "Premium users can download lessons for offline use. Perfect for learning on public transport or while travelling!" },
  { q: "Why a pirate theme?", a: "The pirate theme is a nod to the maritime history of the Caribbean and Indian Ocean. It makes learning more immersive and fun: you climb the ranks from Deckhand to Admiral as you progress, with 8 ranks to unlock." },
  { q: "What is the Culture section?", a: "The Culture section immerses you in the Creole universe beyond language: traditional proverbs (free), Caribbean history, musical genres (from Bèlè to Zouk), authentic recipes (Colombo, Accras, Ti-Punch) and Creole legends (Manman Dlo, Konpè Lapen). Unique Premium content." },
  { q: "Will there be more languages in the future?", a: "Yes! Kreyolang aims to cover a wide range of Creole and African languages. We regularly add new languages. Sign up for the newsletter to be notified of upcoming launches." },
  { q: "How do the pirate ranks work?", a: "You start as L'Engagé with a simple raft, and progress through 8 ranks up to L'Amiral and the Ghost Ship. Each rank unlocks a new vessel and reflects your growing mastery of the language." },
  { q: "Is Kreyolang suitable for children?", a: "Yes, Kreyolang is designed for learners aged 13 and up (16 in the EU). The gamified interface and visual content make it particularly engaging for young learners." },
  { q: "How do I cancel my Premium subscription?", a: "You can cancel at any time from your account settings, or directly via the App Store (iOS), Google Play Store (Android), or your web account. Premium access remains active until the end of the paid period." },
  { q: "Is my data protected?", a: "Kreyolang is 100% GDPR compliant. We never sell your data. Payment information is handled exclusively by Apple, Google or Stripe. You can request account deletion at any time." },
  { q: "Can I use Kreyolang on multiple devices?", a: "Yes! Your progress is automatically synced across all your devices via the Supabase cloud. Start on your phone and continue on your tablet." },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-2 border-slate-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-sm font-extrabold text-slate-900">{q}</span>
        <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const titleFR = { tag: 'FAQ', h: 'Questions fréquentes', sub: "Tout ce que vous devez savoir avant d'embarquer." };
const titleEN = { tag: 'FAQ', h: 'Frequently asked questions', sub: 'Everything you need to know before coming on board.' };

const FAQSection = () => {
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const faq = lang === 'EN' ? faqEN : faqFR;
  const title = lang === 'EN' ? titleEN : titleFR;

  return (
    <section id="faq" className="py-20 bg-white">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <SectionTag label={title.tag} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title.h}</h2>
          <p className="text-slate-500 mt-3">{title.sub}</p>
        </div>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <FAQItem key={`${lang}-${i}`} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
