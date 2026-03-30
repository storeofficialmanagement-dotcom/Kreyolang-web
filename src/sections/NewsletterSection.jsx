import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const txtFR = {
  title: 'Restez informé',
  sub: "Inscrivez-vous pour être notifié du lancement et recevoir des astuces d'apprentissage.",
  placeholder: 'votre@email.com',
  cta: "S'INSCRIRE",
  fine: 'Pas de spam, promis. Désabonnement en un clic.',
  confirm: (email) => `Merci ! Vous serez notifié au lancement à : ${email}`,
};
const txtEN = {
  title: 'Stay in the loop',
  sub: "Sign up to be notified at launch and receive learning tips.",
  placeholder: 'your@email.com',
  cta: 'SUBSCRIBE',
  fine: 'No spam, ever. Unsubscribe in one click.',
  confirm: (email) => `Thank you! You'll be notified at launch at: ${email}`,
};

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const ref = useScrollAnimation();
  const { lang } = useLanguage();
  const t = lang === 'EN' ? txtEN : txtFR;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(t.confirm(email));
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div ref={ref} className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-white rounded-3xl border-2 border-b-[6px] border-slate-100 p-8 md:p-12">
          <div className="w-14 h-14 bg-purple-100 rounded-2xl mx-auto mb-5 flex items-center justify-center">
            <Mail className="h-7 w-7 text-purple-600" />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">{t.title}</h2>
          <p className="text-slate-500 text-sm mb-8">{t.sub}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.placeholder}
              required
              className="flex-1 px-5 py-3.5 rounded-xl border-2 border-slate-200 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl border-b-[4px] border-purple-800 active:border-b-0 active:translate-y-[4px] transition-all duration-150 flex items-center justify-center gap-2"
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="text-xs text-slate-400 mt-4">{t.fine}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
