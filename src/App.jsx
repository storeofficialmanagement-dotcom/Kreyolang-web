import React, { useState } from 'react';
import { Menu, Globe, Anchor, Brain, Gamepad2, Smartphone, ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react';

// Composant Principal de la Landing Page
const KreyolangLandingPage = () => {
  // État pour le sélecteur de langue (pour la démo)
  const [language, setLanguage] = useState('FR');

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 flex flex-col">

      {/* ================= SECTION NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <Anchor className="h-8 w-8 text-purple-600 transition-transform group-hover:rotate-12" />
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Kreyolang<span className="text-purple-600">.com</span>
            </h1>
          </div>
          {/* Sélecteur de langue */}
          <button
            className="flex items-center gap-2 font-bold text-slate-600 hover:bg-slate-100 py-2 px-4 rounded-2xl transition-colors"
            onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
          >
            <Globe className="h-5 w-5" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </header>

      <main className="flex-grow font-medium">

        {/* ================= HERO SECTION ================= */}
        <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Partie Gauche : Textes et Boutons */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Apprenez le Créole en vous <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">amusant</span>.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
              Embarquez pour l'aventure linguistique ultime. La méthode pirate : rapide, efficace et totalement addictive. À l'abordage du savoir !
            </p>

            {/* Boutons style Duolingo */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="group relative bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border-b-[6px] border-purple-800 active:border-b-0 active:translate-y-[6px] transition-all duration-150 flex items-center justify-center overflow-hidden">
                 <span className="relative z-10">C'EST PARTI</span>
                 <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
              </button>
              <button className="bg-white hover:bg-slate-50 text-purple-700 font-extrabold text-lg py-4 px-8 w-full sm:w-auto rounded-2xl border-2 border-slate-200 border-b-[6px] active:border-b-2 active:translate-y-[4px] transition-all duration-150">
                J'AI DÉJÀ UN COMPTE
              </button>
            </div>
          </div>

          {/* Partie Droite : Illustration Placeholder */}
          <div className="flex-1 flex justify-center relative">
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-indigo-100 to-purple-200 rounded-full opacity-70 blur-2xl -z-10 animate-pulse"></div>
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-indigo-500 via-purple-600 to-amber-500 rounded-[3rem] shadow-xl border-b-8 border-indigo-800 p-8 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-center text-white space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-32 h-32 mx-auto text-amber-300"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <p className="text-2xl font-bold text-amber-300">Visuel Navire & Monde</p>
                <p className="opacity-80">Placez ici votre illustration 3D</p>
              </div>
            </div>
          </div>

        </section>

        {/* ================= SECTION ARGUMENTS (Features) ================= */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Pourquoi choisir la méthode Pirate ?</h2>
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

        {/* ================= SECTION SOCIAL PROOF ================= */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
           <div className="container mx-auto px-4">
             <h2 className="text-3xl font-extrabold mb-6">Le trésor est dans la méthode.</h2>
             <p className="text-xl font-medium max-w-2xl mx-auto opacity-90 leading-relaxed">
               Nous combinons le meilleur de l'intelligence artificielle et de la gamification pour transformer l'apprentissage d'une langue en une véritable chasse au trésor.
             </p>
           </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
                <Anchor className="h-6 w-6 text-amber-400" />
                <span className="text-xl font-extrabold text-white">Kreyolang.com</span>
            </div>
            <p className="text-sm">Apprenez le créole. <br/>Devenez un Amiral.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">À propos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">La Méthode</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">L'Équipe</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Carrières</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Confidentialité</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© 2026 Kreyolang.com. Tous droits réservés. Fait avec 💜 par le Capitaine et son Architecte.</p>
        </div>
      </footer>

    </div>
  );
};

// Sous-composant pour les cartes "Arguments" (Features)
const FeatureCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' },
  }[color];

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-3xl border-2 border-b-[6px] border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className={`p-6 rounded-2xl mb-6 ${colorClasses.bg} ${colorClasses.text} shadow-sm`}>
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold mb-4 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default KreyolangLandingPage;
