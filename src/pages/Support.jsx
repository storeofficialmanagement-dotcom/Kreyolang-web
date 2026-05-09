import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft, ChevronDown, Mail, Smartphone, CreditCard,
  Trash2, RefreshCw, AlertCircle, Clock, CheckCircle2,
  MessageCircle, Shield, BookOpen, Anchor, ExternalLink,
  Wifi, Star, HelpCircle,
} from 'lucide-react';

/* ─────────────────────────────────────────
   DONNÉES
───────────────────────────────────────── */

const TOPICS = [
  {
    icon: Smartphone,
    color: 'bg-purple-100 text-purple-600',
    ring: 'ring-purple-200',
    title: 'Connexion & Compte',
    desc: 'Mot de passe oublié, impossible de se connecter, compte bloqué.',
  },
  {
    icon: CreditCard,
    color: 'bg-amber-100 text-amber-600',
    ring: 'ring-amber-200',
    title: 'Abonnement Premium',
    desc: 'Achat non crédité, résiliation, remboursement, changement de plan.',
  },
  {
    icon: RefreshCw,
    color: 'bg-emerald-100 text-emerald-600',
    ring: 'ring-emerald-200',
    title: 'Progression & XP',
    desc: 'Streak perdu, XP non comptabilisé, niveaux réinitialisés.',
  },
  {
    icon: AlertCircle,
    color: 'bg-red-100 text-red-600',
    ring: 'ring-red-200',
    title: 'Bug & Erreur technique',
    desc: 'Crash de l\'app, écran blanc, contenu qui ne charge pas.',
  },
  {
    icon: Wifi,
    color: 'bg-blue-100 text-blue-600',
    ring: 'ring-blue-200',
    title: 'Mode hors-ligne',
    desc: 'Leçons inaccessibles sans connexion, synchronisation.',
  },
  {
    icon: Shield,
    color: 'bg-indigo-100 text-indigo-600',
    ring: 'ring-indigo-200',
    title: 'Confidentialité & Données',
    desc: 'Exercer vos droits RGPD, exporter ou supprimer vos données.',
  },
];

const FAQ_ITEMS = [
  {
    category: 'Compte',
    q: 'J\'ai oublié mon mot de passe, que faire ?',
    a: 'Sur l\'écran de connexion, appuyez sur « Mot de passe oublié ? ». Entrez votre adresse e-mail et vous recevrez un lien de réinitialisation dans les 5 minutes. Vérifiez vos spams si vous ne voyez rien.',
  },
  {
    category: 'Compte',
    q: 'Je n\'arrive pas à me connecter avec Apple ou Google.',
    a: 'Assurez-vous que l\'application est à jour, puis vérifiez que vos identifiants Apple ID / Google sont actifs sur votre appareil. Si le problème persiste, essayez de vous connecter via e-mail + mot de passe, ou contactez-nous.',
  },
  {
    category: 'Premium',
    q: 'J\'ai payé mais Premium ne s\'est pas activé.',
    a: 'Allez dans Profil → Paramètres → Mon compte → Restaurer les achats. L\'activation peut prendre quelques minutes. Si l\'achat n\'apparaît toujours pas, envoyez-nous votre reçu Apple / Google à contact@kreyolang.com.',
  },
  {
    category: 'Premium',
    q: 'Comment résilier mon abonnement Premium ?',
    a: 'La résiliation se fait depuis la plateforme d\'achat, pas depuis l\'app :\n• iOS : Réglages iPhone → Identifiant Apple → Abonnements\n• Android : Google Play → Abonnements\nVotre accès Premium reste actif jusqu\'à la fin de la période payée.',
  },
  {
    category: 'Progression',
    q: 'Mon streak a été réinitialisé alors que j\'avais joué.',
    a: 'Le streak se valide si vous complétez au moins une leçon avant minuit (heure locale). Si vous pensez que c\'est une erreur, contactez-nous dans les 48 h avec une capture d\'écran — nous pouvons vérifier votre historique d\'activité.',
  },
  {
    category: 'Progression',
    q: 'Ma progression a disparu après une réinstallation.',
    a: 'Votre progression est liée à votre compte, pas à votre appareil. Reconnectez-vous avec le même compte et votre progression sera restaurée. Si vous aviez joué en mode invité, les données locales ne sont malheureusement pas récupérables.',
  },
  {
    category: 'Technique',
    q: 'L\'application crash ou ne se lance pas.',
    a: 'Essayez dans l\'ordre : (1) Fermez complètement l\'app et relancez-la. (2) Redémarrez votre appareil. (3) Vérifiez que votre iOS / Android est à jour. (4) Désinstallez et réinstallez l\'app (votre progression est sauvegardée). Si rien n\'y fait, envoyez-nous le modèle de votre appareil et la version du système.',
  },
  {
    category: 'Données',
    q: 'Comment supprimer définitivement mon compte ?',
    a: 'Allez dans Profil → Paramètres → Mon Compte → Supprimer le profil. L\'opération est immédiate et irréversible. Consultez notre page dédiée pour connaître les données supprimées et conservées.',
    link: { label: 'Page suppression de compte', to: '/delete-account' },
  },
  {
    category: 'Données',
    q: 'Comment obtenir une copie de mes données (droit RGPD) ?',
    a: 'Envoyez un e-mail à contact@kreyolang.com avec l\'objet « Demande d\'accès aux données » depuis l\'adresse associée à votre compte. Nous vous répondons dans un délai maximum de 30 jours, conformément au RGPD.',
  },
];

const RESPONSE_TIMES = [
  { icon: CheckCircle2, color: 'text-emerald-500', label: 'Questions simples', time: '< 24 h' },
  { icon: Clock,         color: 'text-amber-500',   label: 'Problèmes Premium',  time: '< 48 h' },
  { icon: Shield,        color: 'text-purple-500',   label: 'Demandes RGPD',     time: '≤ 30 jours' },
];

/* ─────────────────────────────────────────
   COMPOSANTS
───────────────────────────────────────── */

const TopicCard = ({ icon: Icon, color, ring, title, desc }) => (
  <button
    onClick={() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className={`group text-left w-full bg-white border border-slate-200 hover:border-transparent hover:ring-2 ${ring} rounded-2xl p-5 transition-all duration-200 hover:shadow-md`}
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
      <Icon className="h-5 w-5" />
    </div>
    <p className="font-extrabold text-slate-800 text-sm mb-1 group-hover:text-purple-700 transition-colors">
      {title}
    </p>
    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </button>
);

const FaqItem = ({ q, a, link }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left group"
      >
        <div className="flex items-start gap-3">
          <HelpCircle className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
          <span className="text-sm font-bold text-slate-700 group-hover:text-purple-700 transition-colors leading-snug">
            {q}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="pb-4 pl-7 pr-2 space-y-3">
          <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">{a}</p>
          {link && (
            <Link
              to={link.to}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {link.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */

const CATEGORIES = ['Tous', 'Compte', 'Premium', 'Progression', 'Technique', 'Données'];

const Support = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredFaq = activeCategory === 'Tous'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(f => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">

      {/* ── Header sticky ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-slate-500 hover:text-purple-600 transition-colors font-semibold text-sm shrink-0"
          >
            <ChevronLeft className="h-4 w-4" />
            Accueil
          </Link>
          <span className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <img src="/mascot.webp" alt="Kreyolang" className="h-7 w-7 object-contain" />
            <span className="font-extrabold text-slate-900 text-sm">Kreyolang</span>
          </div>
          <nav className="ml-auto hidden sm:flex gap-5 text-xs font-semibold text-slate-400">
            <a href="#faq"     className="hover:text-purple-600 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Nous contacter</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 text-white overflow-hidden">
        {/* Motif décoratif */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-8 left-12 text-7xl rotate-12">⚓</div>
          <div className="absolute bottom-6 right-16 text-5xl -rotate-6">🏴‍☠️</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-5">⚓</div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-bold mb-6">
            <MessageCircle className="h-4 w-4" />
            Centre d'aide Kreyolang
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Comment pouvons-nous<br className="hidden sm:block" />
            <span className="text-amber-300"> vous aider ?</span>
          </h1>
          <p className="text-purple-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Trouvez rapidement une réponse à votre question ou contactez notre équipe.
            Nous répondons à tous les messages sous 24 à 48 h ouvrées.
          </p>

          {/* Lien contact rapide */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 bg-white text-purple-700 font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg hover:bg-purple-50 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Envoyer un message
          </a>
        </div>
      </section>

      {/* ── Topics ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-xl font-extrabold text-slate-900 mb-2">Quel est votre problème ?</h2>
        <p className="text-sm text-slate-500 mb-8">Cliquez sur un sujet pour accéder à la section contact.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {TOPICS.map((t, i) => <TopicCard key={i} {...t} />)}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-slate-50 border-y border-slate-100 py-14 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-3">
              Questions fréquentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Les réponses les plus demandées
            </h2>
          </div>

          {/* Filtres catégories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-purple-300 hover:text-purple-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion FAQ */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100 px-4 sm:px-6">
            {filteredFaq.length === 0 ? (
              <p className="py-8 text-center text-sm text-slate-400">Aucune question dans cette catégorie.</p>
            ) : (
              filteredFaq.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} link={item.link} />
              ))
            )}
          </div>

          <p className="text-center text-sm text-slate-400 mt-6">
            Vous ne trouvez pas votre réponse ?{' '}
            <a href="#contact" className="text-purple-600 font-bold hover:underline">
              Contactez-nous directement ↓
            </a>
          </p>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="max-w-3xl mx-auto px-4 sm:px-6 py-14 scroll-mt-20">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-3">
            Nous contacter
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Une question ? On est là.
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Notre équipe répond à chaque message personnellement.
            Incluez un maximum de détails pour une réponse plus rapide.
          </p>
        </div>

        {/* Card contact principal */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white text-center shadow-xl mb-8">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mail className="h-7 w-7 text-white" />
          </div>
          <p className="text-purple-100 text-sm mb-2">Écrivez-nous à</p>
          <a
            href="mailto:contact@kreyolang.com?subject=Support Kreyolang"
            className="text-2xl font-extrabold text-white hover:text-amber-300 transition-colors break-all"
          >
            contact@kreyolang.com
          </a>
          <p className="text-purple-200 text-xs mt-3 max-w-sm mx-auto">
            Depuis l'adresse e-mail associée à votre compte Kreyolang pour un traitement plus rapide.
          </p>
          <a
            href="mailto:contact@kreyolang.com?subject=Support Kreyolang"
            className="inline-flex items-center gap-2 mt-6 bg-white text-purple-700 font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors shadow-md"
          >
            <Mail className="h-4 w-4" />
            Envoyer un e-mail
          </a>
        </div>

        {/* Délais de réponse */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {RESPONSE_TIMES.map(({ icon: Icon, color, label, time }, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
              <Icon className={`h-5 w-5 mx-auto mb-2 ${color}`} />
              <p className="text-[11px] text-slate-500 font-semibold leading-tight mb-1">{label}</p>
              <p className="text-sm font-extrabold text-slate-800">{time}</p>
            </div>
          ))}
        </div>

        {/* Objet suggéré selon le sujet */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <p className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3">
            💡 Pour un traitement plus rapide, précisez dans votre e-mail :
          </p>
          <ul className="space-y-2 text-sm text-slate-500">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold shrink-0">•</span>
              Le <strong className="text-slate-700">sujet</strong> de votre problème (connexion, Premium, bug…)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold shrink-0">•</span>
              Votre <strong className="text-slate-700">appareil</strong> et version du système (ex : iPhone 14, iOS 17)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold shrink-0">•</span>
              Une <strong className="text-slate-700">capture d'écran</strong> si possible
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold shrink-0">•</span>
              L'<strong className="text-slate-700">adresse e-mail</strong> de votre compte Kreyolang
            </li>
          </ul>
        </div>
      </section>

      {/* ── Liens utiles ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-5 text-center">
            Pages utiles
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Trash2,    label: 'Supprimer mon compte',    to: '/delete-account' },
              { icon: BookOpen,  label: 'Conditions d\'utilisation', to: '/conditions' },
              { icon: Shield,    label: 'Confidentialité',          to: '/confidentialite' },
              { icon: Star,      label: 'Mentions légales',         to: '/mentions-legales' },
            ].map(({ icon: Icon, label, to }, i) => (
              <Link
                key={i}
                to={to}
                className="flex flex-col items-center gap-2 bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-purple-300 hover:shadow-sm transition-all group"
              >
                <Icon className="h-5 w-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
                <span className="text-[11px] font-bold text-slate-500 group-hover:text-purple-700 transition-colors leading-tight">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 bg-slate-50 py-8 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© 2026 Kreyolang.com — Tous droits réservés</span>
          <div className="flex flex-wrap gap-5">
            <Link to="/conditions"       className="hover:text-purple-600 transition-colors">CGU / CGV</Link>
            <Link to="/confidentialite"  className="hover:text-purple-600 transition-colors">Confidentialité</Link>
            <Link to="/mentions-legales" className="hover:text-purple-600 transition-colors">Mentions légales</Link>
            <Link to="/delete-account"   className="hover:text-purple-600 transition-colors">Supprimer mon compte</Link>
            <a href="mailto:contact@kreyolang.com" className="hover:text-purple-600 transition-colors">contact@kreyolang.com</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Support;
