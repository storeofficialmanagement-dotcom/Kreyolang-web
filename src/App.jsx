import React, { useState } from 'react';
import {
  Globe, Anchor, Brain, Gamepad2, Smartphone,
  Facebook, Twitter, Instagram,
  X, Flame, Zap, Shield, FileText,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════
//  MODAL — BIENTÔT DISPONIBLE (CTA)
// ═══════════════════════════════════════════════════════
const ComingSoonModal = ({ onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <div
      className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border-b-8 border-slate-200 text-center"
      onClick={e => e.stopPropagation()}
    >
      {/* Bouton fermeture */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
        aria-label="Fermer"
      >
        <X className="h-5 w-5 text-slate-500" />
      </button>

      {/* Icône */}
      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-5 flex items-center justify-center shadow-lg border-b-4 border-indigo-800">
        <Smartphone className="h-10 w-10 text-white" />
      </div>

      <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Bientôt disponible !</h3>
      <p className="text-slate-500 mb-7 text-sm leading-relaxed">
        L'application Kreyolang arrive sur iOS et Android.<br />
        Sois le premier à embarquer à bord !
      </p>

      {/* Boutons Stores — inactifs */}
      <div className="space-y-3">

        {/* App Store */}
        <button
          disabled
          className="w-full flex items-center gap-4 bg-slate-900 text-white py-4 px-5 rounded-2xl opacity-50 cursor-not-allowed border-b-4 border-slate-700"
        >
          {/* Logo Apple (SVG inline, licence MIT — Font Awesome) */}
          <svg viewBox="0 0 384 512" className="h-7 w-7 fill-white shrink-0">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          <div className="text-left">
            <div className="text-[10px] opacity-70 font-normal">Télécharger sur l'</div>
            <div className="text-sm font-extrabold leading-tight">App Store</div>
          </div>
        </button>

        {/* Google Play */}
        <button
          disabled
          className="w-full flex items-center gap-4 bg-slate-900 text-white py-4 px-5 rounded-2xl opacity-50 cursor-not-allowed border-b-4 border-slate-700"
        >
          {/* Logo Google Play (4 triangles colorés) */}
          <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
            <path d="M3 20.5V3.5C3 2.9 3.7 2.6 4.2 3L20.2 12L4.2 21C3.7 21.4 3 21.1 3 20.5Z" fill="#34D399" />
            <path d="M4.2 3L13.4 12.2L20.2 12L4.2 3Z" fill="#60A5FA" />
            <path d="M4.2 21L13.4 11.8L20.2 12L4.2 21Z" fill="#F87171" />
            <path d="M13.4 12.2L13.4 11.8L20.2 12L13.4 12.2Z" fill="#FBBF24" />
          </svg>
          <div className="text-left">
            <div className="text-[10px] opacity-70 font-normal">Disponible sur</div>
            <div className="text-sm font-extrabold leading-tight">Google Play</div>
          </div>
        </button>

      </div>

      <p className="text-xs text-slate-400 mt-5">
        Inscris-toi à la newsletter pour être notifié au lancement.
      </p>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════
//  CONTENU LÉGAL
// ═══════════════════════════════════════════════════════
const LEGAL_CONTENT = {
  terms: {
    title: "Conditions d'Utilisation",
    icon: <FileText className="h-7 w-7 text-white" />,
    gradient: 'from-indigo-500 to-indigo-700',
    borderColor: 'border-indigo-800',
    sections: [
      {
        heading: '1. Acceptation des termes',
        body: `En accédant à Kreyolang.com ou en utilisant l'application mobile Kreyolang, vous acceptez pleinement et sans réserve les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services. Ces conditions peuvent être mises à jour à tout moment ; la version en vigueur est toujours disponible sur cette page.`,
      },
      {
        heading: '2. Propriété intellectuelle',
        body: `Tout le contenu de Kreyolang (textes, illustrations, sons, animations, logotypes, architecture logicielle) est la propriété exclusive de Kreyolang SAS ou de ses partenaires. Toute reproduction, distribution ou utilisation commerciale, même partielle, est strictement interdite sans autorisation écrite préalable. Le nom "Kreyolang", le logo et la mascotte sont des marques déposées.`,
      },
      {
        heading: '3. Utilisation du service & Gamification',
        body: `Kreyolang est un service d'apprentissage linguistique basé sur la gamification (points XP, ligues, succès, séries de jours). Ces éléments sont fournis à titre d'encouragement et n'ont aucune valeur monétaire. Vous vous engagez à ne pas tricher, utiliser de scripts automatisés, ou créer plusieurs comptes dans le but de manipuler les classements. Toute fraude entraînera la suppression définitive du compte.`,
      },
      {
        heading: '4. Limitation de responsabilité',
        body: `Kreyolang est fourni "tel quel". Nous nous efforçons d'assurer la disponibilité et l'exactitude du contenu pédagogique, mais ne pouvons être tenus responsables des interruptions de service, des erreurs de contenu, ou de tout dommage indirect résultant de l'utilisation de la plateforme. La responsabilité de Kreyolang SAS ne saurait excéder le montant réglé par l'utilisateur sur les 12 derniers mois.`,
      },
    ],
  },
  privacy: {
    title: 'Politique de Confidentialité',
    icon: <Shield className="h-7 w-7 text-white" />,
    gradient: 'from-purple-500 to-purple-700',
    borderColor: 'border-purple-800',
    sections: [
      {
        heading: '1. Collecte des données',
        body: `Nous collectons les données nécessaires au service : informations de compte (email, nom d'utilisateur), données de progression (leçons complétées, XP, ligues) et données techniques (adresse IP, appareil, navigateur). Ces données sont stockées de manière sécurisée via Supabase (infrastructure certifiée SOC 2) et ne sont jamais revendues à des tiers.`,
      },
      {
        heading: '2. Analyse & PostHog',
        body: `Nous utilisons PostHog pour analyser l'usage de l'application et améliorer l'expérience utilisateur. PostHog opère en mode conforme RGPD : vos données analytiques ne transitent pas par des serveurs hors UE. Les données collectées sont anonymisées et agrégées. Vous pouvez vous opposer à cette collecte dans les paramètres de votre compte.`,
      },
      {
        heading: '3. Cookies',
        body: `Kreyolang utilise des cookies strictement nécessaires au fonctionnement du service (authentification, préférences de langue) et des cookies analytiques opt-in. Aucun cookie publicitaire tiers n'est utilisé. Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement ou les paramètres de votre compte.`,
      },
      {
        heading: '4. Vos droits (RGPD)',
        body: `Conformément au RGPD (UE 2016/679), vous disposez des droits suivants : accès, rectification, effacement (« droit à l'oubli »), portabilité, opposition et limitation du traitement. Pour exercer ces droits, contactez-nous à privacy@kreyolang.com. Nous nous engageons à répondre dans un délai de 30 jours.`,
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════
//  MODAL — PAGES LÉGALES
// ═══════════════════════════════════════════════════════
const LegalModal = ({ type, onClose }) => {
  const content = LEGAL_CONTENT[type];
  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-xl max-h-[88vh] flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header coloré */}
        <div className={`bg-gradient-to-r ${content.gradient} p-6 rounded-t-3xl flex items-center gap-4 shrink-0`}>
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
            {content.icon}
          </div>
          <h3 className="text-xl font-extrabold text-white leading-tight">{content.title}</h3>
          <button
            onClick={onClose}
            className="ml-auto p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Contenu défilable */}
        <div className="overflow-y-auto p-6 space-y-6 text-slate-700">
          <p className="text-xs text-slate-400 font-medium">Dernière mise à jour : Février 2026</p>
          {content.sections.map((section, i) => (
            <div key={i}>
              <h4 className="font-extrabold text-slate-900 mb-2 text-base">{section.heading}</h4>
              <p className="text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
          <div className="pt-2 pb-4 text-center text-xs text-slate-400">
            © 2026 Kreyolang SAS · Tous droits réservés
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
//  MOCKUP IPHONE (100 % Tailwind CSS)
// ═══════════════════════════════════════════════════════
const IPhoneMockup = () => (
  <div className="relative mx-auto w-[238px] select-none">

    {/* ── Boutons latéraux gauche (volume) ── */}
    <div className="absolute -left-[5px] top-[88px]  w-[5px] h-6  bg-slate-700 rounded-l-full" />
    <div className="absolute -left-[5px] top-[124px] w-[5px] h-10 bg-slate-700 rounded-l-full" />
    <div className="absolute -left-[5px] top-[170px] w-[5px] h-10 bg-slate-700 rounded-l-full" />
    {/* ── Bouton power droit ── */}
    <div className="absolute -right-[5px] top-[128px] w-[5px] h-14 bg-slate-700 rounded-r-full" />

    {/* ── Châssis ── */}
    <div className="w-[238px] h-[488px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-[9px] shadow-2xl ring-1 ring-white/10">

      {/* ── Écran ── */}
      <div className="relative h-full bg-white rounded-[2.4rem] overflow-hidden flex flex-col">

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[68px] h-[18px] bg-slate-900 rounded-full z-10" />

        {/* ── Contenu de l'app ── */}
        <div className="flex flex-col flex-1 bg-gradient-to-b from-indigo-50 to-slate-50 pt-10 px-3.5 pb-3">

          {/* Barre du haut : Streak · Titre · XP */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1">
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              <span className="text-[11px] font-extrabold text-orange-600">7</span>
            </div>
            <span className="text-[11px] font-extrabold text-slate-700 tracking-wide">Unité 2</span>
            <div className="flex items-center gap-1 bg-purple-50 border border-purple-200 rounded-full px-2.5 py-1">
              <Zap className="h-3.5 w-3.5 text-purple-500" />
              <span className="text-[11px] font-extrabold text-purple-600">340 XP</span>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="mb-3.5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-slate-500 font-bold">Leçon 3 / 5</span>
              <span className="text-[10px] text-indigo-600 font-extrabold">60 %</span>
            </div>
            <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                style={{ width: '60%' }}
              />
            </div>
          </div>

          {/* Carte de leçon */}
          <div className="flex-1 bg-white rounded-2xl shadow border border-slate-100 p-3 flex flex-col gap-2">
            <span className="text-[9px] font-extrabold text-purple-600 uppercase tracking-wider bg-purple-50 rounded-lg px-2 py-0.5 w-fit">
              Traduction
            </span>
            <p className="text-[12px] font-extrabold text-slate-800 leading-snug">
              "Bonjou, ki jan ou rele ?"
            </p>
            <p className="text-[10px] text-slate-500">Sélectionne la bonne réponse :</p>

            {/* Options */}
            <div className="space-y-1.5 mt-auto">
              {[
                { label: 'Bonjour, comment tu t\'appelles ?', correct: true  },
                { label: 'Bonsoir, comment tu vas ?',        correct: false },
                { label: 'Merci beaucoup !',                 correct: false },
              ].map((opt, i) => (
                <div
                  key={i}
                  className={`text-[10px] font-bold py-2 px-2.5 rounded-xl border-2 ${
                    opt.correct
                      ? 'bg-indigo-50 border-indigo-400 text-indigo-800'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          </div>

          {/* Bouton CONTINUER */}
          <div className="mt-2.5">
            <div className="w-full bg-purple-600 text-white text-[11px] font-extrabold py-2.5 rounded-xl text-center border-b-[3px] border-purple-800">
              CONTINUER
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center mt-2">
            <div className="w-14 h-1 bg-slate-300 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════
//  FEATURE CARD
// ═══════════════════════════════════════════════════════
const FeatureCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    amber:  { bg: 'bg-amber-100',  text: 'text-amber-600'  },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
  }[color];

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-3xl border-2 border-b-[6px] border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className={`p-6 rounded-2xl mb-6 ${colorClasses.bg} ${colorClasses.text} shadow-sm`}>
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold mb-4 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
//  COMPOSANT PRINCIPAL
// ═══════════════════════════════════════════════════════
const KreyolangLandingPage = () => {
  const [language,     setLanguage]     = useState('FR');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [legalType,    setLegalType]    = useState(null); // 'terms' | 'privacy' | null

  return (
    <>
      {/* ── Modales ── */}
      {showComingSoon && <ComingSoonModal onClose={() => setShowComingSoon(false)} />}
      {legalType      && <LegalModal type={legalType} onClose={() => setLegalType(null)} />}

      <div className="min-h-screen font-sans bg-slate-50 text-slate-800 flex flex-col">

        {/* ─────────────── NAVBAR ─────────────── */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">

            {/* Logo : mascotte + nom */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <img
                src="mascot.png"
                alt="Mascotte Kreyolang"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Kreyolang
              </h1>
            </div>

            {/* Sélecteur de langue */}
            <button
              className="flex items-center gap-2 font-bold text-slate-600 hover:bg-slate-100 py-2 px-4 rounded-2xl transition-colors"
              onClick={() => setLanguage(l => l === 'FR' ? 'EN' : 'FR')}
            >
              <Globe className="h-5 w-5" />
              <span>{language}</span>
            </button>

          </div>
        </header>

        <main className="flex-grow font-medium">

          {/* ─────────────── HERO ─────────────── */}
          <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">

            {/* Gauche : texte + boutons */}
            <div className="flex-1 text-center md:text-left space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
                Apprenez le Créole en vous{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  amusant
                </span>.
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
                Embarquez pour l'aventure linguistique ultime. La méthode pirate : rapide, efficace et totalement addictive. À l'abordage du savoir !
              </p>

              {/* CTA Buttons → ouvrent la modale */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="group relative bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border-b-[6px] border-purple-800 active:border-b-0 active:translate-y-[6px] transition-all duration-150 flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10">C'EST PARTI</span>
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                </button>
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="bg-white hover:bg-slate-50 text-purple-700 font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border-2 border-slate-200 border-b-[6px] active:border-b-2 active:translate-y-[4px] transition-all duration-150"
                >
                  J'AI DÉJÀ UN COMPTE
                </button>
              </div>
            </div>

            {/* Droite : Mockup iPhone */}
            <div className="flex-1 flex justify-center relative">
              <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-indigo-100 to-purple-200 rounded-full opacity-70 blur-3xl -z-10 animate-pulse" />
              <IPhoneMockup />
            </div>

          </section>

          {/* ─────────────── FEATURES ─────────────── */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  Pourquoi choisir la méthode Pirate ?
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <FeatureCard
                  icon={<Brain className="h-10 w-10" />}
                  title="Efficace et Prouvé"
                  description="Nos leçons sont courtes et basées sur la science pour garantir une mémorisation à long terme du vocabulaire."
                  color="amber"
                />
                <FeatureCard
                  icon={<Gamepad2 className="h-10 w-10" />}
                  title="Totalement Ludique"
                  description="Gagnez des XP, montez en ligue et débloquez des succès. Apprendre devient aussi addictif qu'un jeu vidéo."
                  color="purple"
                />
                <FeatureCard
                  icon={<Smartphone className="h-10 w-10" />}
                  title="Partout avec vous"
                  description="Dans le bus ou sur la plage, Kreyolang vous suit. Votre progression est synchronisée sur tous vos appareils."
                  color="indigo"
                />
              </div>
            </div>
          </section>

          {/* ─────────────── SOCIAL PROOF ─────────────── */}
          <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-extrabold mb-6">Le trésor est dans la méthode.</h2>
              <p className="text-xl font-medium max-w-2xl mx-auto opacity-90 leading-relaxed">
                Nous combinons le meilleur de l'intelligence artificielle et de la gamification pour transformer l'apprentissage d'une langue en une véritable chasse au trésor.
              </p>
            </div>
          </section>

        </main>

        {/* ─────────────── FOOTER ─────────────── */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">

            {/* Colonne 1 — Branding */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="h-6 w-6 text-amber-400" />
                <span className="text-xl font-extrabold text-white">Kreyolang.com</span>
              </div>
              <p className="text-sm leading-relaxed">Apprenez le créole.<br />Devenez un Amiral.</p>
            </div>

            {/* Colonne 2 — À propos */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">À propos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">La Méthode</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">L'Équipe</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Carrières</a></li>
              </ul>
            </div>

            {/* Colonne 3 — Légal (liens → modales) */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setLegalType('terms')}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    Conditions d'utilisation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalType('privacy')}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    Politique de confidentialité
                  </button>
                </li>
              </ul>
            </div>

            {/* Colonne 4 — Réseaux sociaux */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Suivez-nous</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/kreyolang"
                  className="hover:text-amber-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 Kreyolang.com. Tous droits réservés. Fait avec 💜 par le Capitaine et son Architecte.</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default KreyolangLandingPage;
