import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ComingSoonModal from '../components/ComingSoonModal';
import HeroSection from '../sections/HeroSection';
import ScreenshotsSection from '../sections/ScreenshotsSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import FeaturesSection from '../sections/FeaturesSection';
import LanguagesSection from '../sections/LanguagesSection';
import CultureSection from '../sections/CultureSection';
import PricingSection from '../sections/PricingSection';
import FAQSection from '../sections/FAQSection';
import FinalCTASection from '../sections/FinalCTASection';

/**
 * Section order (conversion-optimised):
 * Hero → Screenshots → Method → Features → Languages → Culture → Pricing → FAQ → CTA
 *
 * Removed: StatsBanner (fake stats), Testimonials (fake), Exercises (redundant),
 *          PirateRanks (not conversion-critical), Newsletter (redundant with CTA)
 */
const LandingPage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const openModal = () => setShowComingSoon(true);

  return (
    <>
      {showComingSoon && <ComingSoonModal onClose={() => setShowComingSoon(false)} />}

      <div className="min-h-screen font-sans bg-white text-slate-800 flex flex-col">
        <Navbar onCTA={openModal} />

        <main className="flex-grow">
          <HeroSection       onCTA={openModal} />  {/* 1 — Accroche émotionnelle      */}
          <ScreenshotsSection />                    {/* 2 — Preuve produit immédiate    */}
          <HowItWorksSection />                     {/* 3 — Comprendre la méthode       */}
          <FeaturesSection />                       {/* 4 — Les 4 bénéfices clés        */}
          <LanguagesSection />                      {/* 5 — "Ma langue est là ?"        */}
          <CultureSection />                        {/* 6 — Différenciateur premium     */}
          <PricingSection    onCTA={openModal} />   {/* 7 — Décision d'achat            */}
          <FAQSection />                            {/* 8 — Lever les dernières objections */}
          <FinalCTASection   onCTA={openModal} />   {/* 9 — Fermer la page              */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
