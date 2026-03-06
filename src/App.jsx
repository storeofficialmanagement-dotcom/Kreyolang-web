import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Conditions from './pages/Conditions';
import Confidentialite from './pages/Confidentialite';

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/conditions" element={<Conditions />} />
    <Route path="/confidentialite" element={<Confidentialite />} />
  </Routes>
);

export default App;
