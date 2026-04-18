import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Conditions from './pages/Conditions';
import Confidentialite from './pages/Confidentialite';
import MentionsLegales from './pages/MentionsLegales';
import DeleteAccount from './pages/DeleteAccount';
import { LanguageProvider } from './context/LanguageContext';

const App = () => (
  <LanguageProvider>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/conditions" element={<Conditions />} />
      <Route path="/confidentialite" element={<Confidentialite />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
    </Routes>
  </LanguageProvider>
);

export default App;
