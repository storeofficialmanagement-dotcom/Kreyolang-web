import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ lang: 'FR', setLang: () => {} });

// Detect initial language
const detectLanguage = () => {
  // 1. Saved preference
  const saved = localStorage.getItem('kreyolang_lang');
  if (saved === 'EN' || saved === 'FR') return saved;

  // 2. Browser language
  const nav = navigator.language || navigator.languages?.[0] || 'fr';
  if (nav.toLowerCase().startsWith('en')) return 'EN';

  return 'FR';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState('FR');

  useEffect(() => {
    const detected = detectLanguage();
    setLangState(detected);

    // IP-based detection as async fallback (only if no saved preference)
    const saved = localStorage.getItem('kreyolang_lang');
    if (!saved) {
      const nav = navigator.language || '';
      // Only try IP if browser language doesn't clearly indicate EN or FR
      const isAmbiguous = !nav.toLowerCase().startsWith('en') && !nav.toLowerCase().startsWith('fr');
      if (isAmbiguous) {
        fetch('https://ipapi.co/json/')
          .then(r => r.json())
          .then(data => {
            const enCountries = ['US', 'GB', 'CA', 'AU', 'NZ', 'IE', 'JM', 'TT', 'BB', 'GY', 'LC', 'VC', 'GD', 'AG', 'KN'];
            if (enCountries.includes(data.country_code)) {
              setLangState('EN');
            }
          })
          .catch(() => {}); // Silent fail
      }
    }
  }, []);

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem('kreyolang_lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
