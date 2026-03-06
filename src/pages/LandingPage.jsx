import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ComingSoonModal from '../components/ComingSoonModal';
import HeroSection from '../sections/HeroSection';
import StatsBanner from '../sections/StatsBanner';
import HowItWorksSection from '../sections/HowItWorksSection';
import FeaturesSection from '../sections/FeaturesSection';
import ScreenshotsSection from '../sections/ScreenshotsSection';
import ExercisesSection from '../sections/ExercisesSection';
import CultureSection from '../sections/CultureSection';
import LanguagesSection from '../sections/LanguagesSection';
import PirateRanksSection from '../sections/PirateRanksSection';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FAQSection from '../sections/FAQSection';
import NewsletterSection from '../sections/NewsletterSection';
import FinalCTASection from '../sections/FinalCTASection';

const LandingPage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const openModal = () => setShowComingSoon(true);

  return (
    <>
      {showComingSoon && <ComingSoonModal onClose={() => setShowComingSoon(false)} />}

      <div className="min-h-screen font-sans bg-slate-50 text-slate-800 flex flex-col">
        <Navbar onCTA={openModal} />

        <main className="flex-grow font-medium">
          <HeroSection onCTA={openModal} />
          <StatsBanner />
          <HowItWorksSection />
          <FeaturesSection />
          <ScreenshotsSection />
          <ExercisesSection />
          <CultureSection />
          <LanguagesSection />
          <PirateRanksSection />
          <PricingSection onCTA={openModal} />
          <TestimonialsSection />
          <FAQSection />
          <NewsletterSection />
          <FinalCTASection onCTA={openModal} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
