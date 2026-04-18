import React from 'react';
import LegalPage, { Article, Callout } from '../components/LegalPage';
import { Trash2, Smartphone, Clock, ShieldCheck, AlertTriangle } from 'lucide-react';

/* ── Étape numérotée ── */
const Step = ({ number, title, children }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-extrabold text-sm">
      {number}
    </div>
    <div className="pt-0.5">
      <p className="font-extrabold text-slate-800 text-sm mb-1">{title}</p>
      <div className="text-slate-500 text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

/* ── Ligne de tableau données ── */
const DataRow = ({ category, deleted, retained, duration }) => (
  <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
    <td className="py-3 px-3 font-semibold text-slate-700 text-sm align-top">{category}</td>
    <td className="py-3 px-3 text-sm align-top">
      {deleted ? (
        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          Supprimé
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-amber-700 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
          Conservé
        </span>
      )}
    </td>
    <td className="py-3 px-3 text-sm text-slate-500 align-top">{duration}</td>
    <td className="py-3 px-3 text-sm text-slate-500 align-top">{retained}</td>
  </tr>
);

const DeleteAccount = () => (
  <LegalPage
    title="Suppression de compte"
    lastUpdated="Avril 2026"
    badge="Kreyolang — Gestion du compte"
  >

    {/* Préambule */}
    <Callout color="indigo">
      Cette page concerne l'application <strong>Kreyolang</strong>, développée par{' '}
      <strong>Christopher Jeanne EI</strong> (CMJ Group). Elle décrit la procédure de
      suppression de compte et les données supprimées ou conservées, conformément au{' '}
      <strong>RGPD (UE 2016/679)</strong> et aux politiques du{' '}
      <strong>Google Play Store</strong> et de l'<strong>Apple App Store</strong>.
    </Callout>

    {/* ─── Section 1 : Procédure in-app ─── */}
    <Article title="Comment supprimer votre compte ?">
      <p>
        La suppression de votre compte <strong>Kreyolang</strong> se fait directement
        depuis l'application. Cette action est <strong>définitive et irréversible</strong>.
      </p>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-3 space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center">
            <Smartphone className="h-4 w-4 text-white" />
          </div>
          <p className="font-extrabold text-slate-800 text-sm">Directement dans l'application</p>
        </div>
        <Step number="1" title="Ouvrez Kreyolang">
          Lancez l'application sur votre appareil iOS ou Android.
        </Step>
        <Step number="2" title="Accédez à votre profil">
          Appuyez sur votre avatar ou l'icône de profil en bas de l'écran.
        </Step>
        <Step number="3" title="Paramètres du compte">
          Sélectionnez <strong>Paramètres</strong> puis <strong>Mon compte</strong>.
        </Step>
        <Step number="4" title="Supprimer le compte">
          Appuyez sur <strong>Supprimer mon compte</strong> et confirmez votre choix.
          La suppression est lancée immédiatement.
        </Step>
      </div>
    </Article>

    {/* ─── Section 2 : Délai ─── */}
    <Article title="Délai de traitement">
      <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <Clock className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
        <div className="space-y-1 text-sm">
          <p className="font-extrabold text-slate-800">Maximum 30 jours</p>
          <p className="text-slate-500">
            Votre compte est désactivé immédiatement après confirmation. La suppression
            définitive de toutes les données associées intervient dans un délai maximum de{' '}
            <strong>30 jours</strong>. Vous recevrez une confirmation par e-mail une fois
            la suppression effectuée.
          </p>
        </div>
      </div>
    </Article>

    {/* ─── Section 3 : Tableau des données ─── */}
    <Article title="Données supprimées et données conservées">
      <p>
        Le tableau ci-dessous détaille précisément les données supprimées et celles
        éventuellement conservées après votre demande, ainsi que leur durée de conservation.
      </p>

      <div className="overflow-x-auto -mx-4 px-4 mt-4">
        <table className="w-full text-sm border-collapse min-w-[540px]">
          <thead>
            <tr className="bg-slate-100">
              <th className="text-left py-2.5 px-3 font-extrabold text-slate-700 rounded-tl-xl">Catégorie de données</th>
              <th className="text-left py-2.5 px-3 font-extrabold text-slate-700">Statut</th>
              <th className="text-left py-2.5 px-3 font-extrabold text-slate-700">Durée</th>
              <th className="text-left py-2.5 px-3 font-extrabold text-slate-700 rounded-tr-xl">Motif</th>
            </tr>
          </thead>
          <tbody>
            <DataRow
              category="Profil (prénom, e-mail, avatar)"
              deleted={true}
              duration="Immédiat"
              retained="—"
            />
            <DataRow
              category="Progression (XP, streak, niveaux, ligues)"
              deleted={true}
              duration="Immédiat"
              retained="—"
            />
            <DataRow
              category="Préférences et paramètres"
              deleted={true}
              duration="Immédiat"
              retained="—"
            />
            <DataRow
              category="Historique d'activité in-app"
              deleted={true}
              duration="Sous 30 jours"
              retained="—"
            />
            <DataRow
              category="Données de facturation / abonnement Premium"
              deleted={false}
              duration="5 ans"
              retained="Obligation comptable légale (Code de commerce, art. L.123-22)"
            />
            <DataRow
              category="Historique des e-mails de support"
              deleted={false}
              duration="12 mois"
              retained="Traitement des litiges et service après-vente"
            />
            <DataRow
              category="Identifiant anonymisé anti-fraude"
              deleted={false}
              duration="6 mois"
              retained="Sécurité et prévention des abus (données non réidentifiables)"
            />
          </tbody>
        </table>
      </div>

      {/* Note abonnement actif */}
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-4">
        <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">
          <strong>Si vous avez un abonnement Premium actif :</strong> pensez à le résilier
          depuis l'App Store ou le Google Play Store avant de supprimer votre compte.
          La suppression du compte ne résilie pas automatiquement votre abonnement.
        </p>
      </div>
    </Article>

    {/* ─── Section 4 : Droits RGPD ─── */}
    <Article title="Vos autres droits sur vos données">
      <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <ShieldCheck className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
        <div className="text-sm text-slate-500 space-y-2">
          <p>
            Conformément au <strong className="text-slate-700">RGPD</strong>, vous disposez
            également des droits suivants, sans avoir à supprimer votre compte :
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1">
            <li><strong className="text-slate-700">Droit d'accès</strong> — obtenir une copie de vos données</li>
            <li><strong className="text-slate-700">Droit de rectification</strong> — corriger vos informations</li>
            <li><strong className="text-slate-700">Droit à la portabilité</strong> — exporter vos données</li>
            <li><strong className="text-slate-700">Droit d'opposition</strong> — vous opposer à certains traitements</li>
          </ul>
          <p>
            Pour exercer ces droits, écrivez à{' '}
            <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline font-semibold">
              contact@kreyolang.com
            </a>
            .
          </p>
        </div>
      </div>
    </Article>

    {/* Contact final */}
    <Callout color="slate">
      <div className="flex items-start gap-3">
        <Trash2 className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
        <div>
          <p className="font-extrabold text-slate-900 mb-1">Une question sur la suppression de votre compte ?</p>
          <p>
            Contactez-nous à{' '}
            <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline font-semibold">
              contact@kreyolang.com
            </a>{' '}
            — nous répondons sous 72 h ouvrées.
          </p>
          <p className="mt-1 text-slate-500 text-xs">
            Kreyolang — Christopher Jeanne EI (CMJ Group) — SIREN : 879 333 664
          </p>
        </div>
      </div>
    </Callout>

  </LegalPage>
);

export default DeleteAccount;
