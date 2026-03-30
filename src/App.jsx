import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Conditions from './pages/Conditions';
import Confidentialite from './pages/Confidentialite';
import MentionsLegales from './pages/MentionsLegales';

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/conditions" element={<Conditions />} />
    <Route path="/confidentialite" element={<Confidentialite />} />
    <Route path="/mentions-legales" element={<MentionsLegales />} />
  </Routes>
);

export default App;
