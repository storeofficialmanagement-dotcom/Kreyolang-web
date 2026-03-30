import React from 'react';
import LegalPage, { Article, SubTitle, Callout } from '../components/LegalPage';

// Tableau générique réutilisable
const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto -mx-4 px-4 mt-3">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-slate-100">
          {headers.map((h, i) => (
            <th
              key={i}
              className={`text-left py-2.5 px-3 font-extrabold text-slate-700 ${
                i === 0 ? 'rounded-tl-xl' : ''
              } ${i === headers.length - 1 ? 'rounded-tr-xl' : ''}`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="py-2.5 px-3 align-top text-slate-600">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Confidentialite = () => (
  <LegalPage title="Politique de Confidentialité" lastUpdated="Février 2026">

    {/* Préambule */}
    <Callout color="indigo">
      Cette politique décrit comment <strong>CMJ Group</strong> (opérant sous la marque{' '}
      <strong>Kreyolang</strong>) collecte, utilise et protège vos données personnelles,
      conformément au{' '}
      <strong>Règlement Général sur la Protection des Données (RGPD — UE 2016/679)</strong>, aux
      directives de l'<strong>Apple App Store Review Guidelines (§ 5.1)</strong> et du{' '}
      <strong>Google Play Developer Policy</strong>.
    </Callout>

    {/* ─── Article 1 ─── */}
    <Article title="Article 1 — Responsable du traitement">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-1.5 text-sm">
        <p>
          <strong className="text-slate-800">Entité :</strong> CMJ Group (micro-entreprise), opérant sous la marque verbale <strong>Kreyolang</strong>
        </p>
        <p>
          <strong className="text-slate-800">Adresse :</strong> 47, rue Vivienne – 75002 Paris
        </p>
        <p>
          <strong className="text-slate-800">Site web :</strong>{' '}
          <a href="https://www.kreyolang.com" className="text-purple-600 hover:underline">
            www.kreyolang.com
          </a>
        </p>
        <p>
          <strong className="text-slate-800">Contact :</strong>{' '}
          <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
            contact@kreyolang.com
          </a>
        </p>
      </div>
    </Article>

    {/* ─── Article 2 ─── */}
    <Article title="Article 2 — Données collectées">
      <SubTitle>2.1 Données d'identité</SubTitle>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li>Prénom, Nom (ou pseudonyme)</li>
        <li>Adresse email</li>
      </ul>

      <SubTitle>2.2 Données de contact</SubTitle>
      <p>
        Numéro de téléphone — collecté <strong>uniquement si fourni volontairement</strong> par
        l'utilisateur lors de la configuration du profil. Ce champ n'est pas obligatoire à
        l'inscription.
      </p>

      <SubTitle>2.3 Données de progression</SubTitle>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li>Points d'expérience (XP) et Gemmes</li>
        <li>Niveau de ligue et classement</li>
        <li>Leçons complétées, taux de réussite, temps d'apprentissage</li>
        <li>Séries de jours consécutifs (Streaks)</li>
        <li>Préférences linguistiques et unités actives</li>
      </ul>

      <SubTitle>2.4 Données techniques et identifiants</SubTitle>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li>Identifiant utilisateur unique (UUID généré par Supabase)</li>
        <li>Adresse IP (anonymisée automatiquement après 30 jours)</li>
        <li>Identifiant de l'appareil — Device ID (iOS/Android)</li>
        <li>Système d'exploitation et version de l'application</li>
        <li>Logs de session et rapports d'erreurs anonymisés</li>
      </ul>

      <SubTitle>2.5 Données de paiement</SubTitle>
      <p>
        Les coordonnées bancaires sont <strong>traitées exclusivement</strong> par Apple, Google
        ou Stripe et ne sont <strong>jamais transmises ni stockées</strong> par Kreyolang sur ses
        propres serveurs. Nous conservons uniquement la confirmation du statut d'abonnement
        (actif / inactif / type d'offre) via RevenueCat.
      </p>
    </Article>

    {/* ─── Article 3 ─── */}
    <Article title="Article 3 — Finalité du traitement">
      <Table
        headers={['Finalité', 'Base légale']}
        rows={[
          [
            'Création et gestion du compte utilisateur',
            <span className="bg-purple-50 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Exécution du contrat</span>,
          ],
          [
            'Synchronisation de la progression (cloud Supabase)',
            <span className="bg-purple-50 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Exécution du contrat</span>,
          ],
          [
            'Gestion des abonnements Premium (RevenueCat)',
            <span className="bg-purple-50 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Exécution du contrat</span>,
          ],
          [
            'Envoi de notifications de progression et rappels',
            <span className="bg-amber-50 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Consentement</span>,
          ],
          [
            "Analyse anonymisée de l'usage (amélioration du service)",
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Intérêt légitime</span>,
          ],
          [
            'Conformité aux obligations légales et comptables',
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Obligation légale</span>,
          ],
        ]}
      />
    </Article>

    {/* ─── Article 4 ─── */}
    <Article title="Article 4 — Sous-traitants">
      <p>
        Kreyolang fait appel aux prestataires suivants, sélectionnés pour leurs garanties de
        conformité RGPD et leur niveau de sécurité certifié :
      </p>
      <Table
        headers={['Prestataire', 'Rôle', 'Localisation & garanties']}
        rows={[
          [
            <strong className="text-slate-900">Supabase</strong>,
            'Base de données, authentification, stockage cloud',
            'UE / USA — Clauses contractuelles types (CCT), certifié SOC 2',
          ],
          [
            <strong className="text-slate-900">RevenueCat</strong>,
            'Gestion des droits Premium et abonnements mobiles (iOS & Android)',
            'USA — Clauses contractuelles types (CCT), données minimisées',
          ],
          [
            <strong className="text-slate-900">PostHog</strong>,
            'Analytics comportementaux de progression (opt-in)',
            'UE — EU Cloud, conforme RGPD, données anonymisées',
          ],
          [
            <strong className="text-slate-900">Stripe</strong>,
            'Traitement sécurisé des paiements web',
            'USA / UE — Certifié PCI-DSS Niveau 1',
          ],
        ]}
      />
    </Article>

    {/* ─── Article 5 ─── */}
    <Article title="Article 5 — Durée de conservation">
      <div className="space-y-2 mt-1">
        {[
          ['Données de compte actif', 'Durée de l\'abonnement + 1 an après la dernière connexion'],
          ['Données de progression', 'Durée de vie du compte actif'],
          ['Adresse IP', 'Anonymisée automatiquement après 30 jours'],
          ['Logs techniques', '90 jours glissants'],
          ['Données de facturation', '10 ans (obligation légale comptable, art. L123-22 C.com.)'],
          ['Compte supprimé', 'Toutes les données personnelles effacées sous 30 jours suivant la demande'],
        ].map(([type, duree], i) => (
          <div key={i} className="flex flex-col sm:flex-row items-start gap-2 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
            <span className="font-extrabold text-slate-800 text-sm sm:min-w-[220px] shrink-0">{type}</span>
            <span className="text-slate-500 text-sm">{duree}</span>
          </div>
        ))}
      </div>
    </Article>

    {/* ─── Article 6 ─── */}
    <Article title="Article 6 — Droits des utilisateurs">
      <Callout color="amber">
        <p className="font-bold mb-1">Comment exercer vos droits :</p>
        <p>
          Adressez votre demande à{' '}
          <a href="mailto:contact@kreyolang.com" className="text-amber-800 font-bold hover:underline">
            contact@kreyolang.com
          </a>{' '}
          — Délai de réponse : <strong>30 jours maximum</strong>. En cas de réclamation non
          satisfaite, vous pouvez saisir la{' '}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-800 font-bold hover:underline"
          >
            CNIL (www.cnil.fr)
          </a>
          .
        </p>
      </Callout>

      <SubTitle>6.1 Droit d'accès</SubTitle>
      <p>
        Vous pouvez demander une copie complète de toutes les données personnelles que nous
        détenons à votre sujet, dans un délai de 30 jours.
      </p>

      <SubTitle>6.2 Droit de rectification</SubTitle>
      <p>
        Vous pouvez corriger des informations inexactes directement depuis les{' '}
        <strong>paramètres de votre profil</strong> dans l'application, ou en nous contactant
        par email.
      </p>

      <SubTitle>6.3 Droit à l'effacement — « Droit à l'oubli »</SubTitle>
      <p>
        Vous pouvez demander la suppression complète et définitive de votre compte et de
        l'intégralité de vos données personnelles.{' '}
        <strong>Cette action est irréversible</strong> : elle entraîne la perte permanente de
        votre progression, XP, Gemmes, streaks et historique d'apprentissage.
      </p>
      <p className="mt-2">La suppression peut être initiée :</p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>
          <strong>Depuis l'application :</strong> Paramètres → Mon compte → Supprimer mon compte
        </li>
        <li>
          <strong>Par email :</strong>{' '}
          <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
            contact@kreyolang.com
          </a>
        </li>
      </ul>
      <p className="text-xs text-slate-400 mt-2 italic">
        Cette fonctionnalité est requise par Apple App Store Review Guidelines (§ 5.1.1) et
        Google Play Developer Policy.
      </p>

      <SubTitle>6.4 Droit à la portabilité</SubTitle>
      <p>
        Vous pouvez demander l'exportation de vos données de progression dans un format structuré
        et lisible (JSON) via{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
          contact@kreyolang.com
        </a>
        .
      </p>

      <SubTitle>6.5 Droit d'opposition et de limitation</SubTitle>
      <p>
        Vous pouvez vous opposer au traitement de vos données à des fins d'analyse, ou en
        demander la limitation, à tout moment depuis les{' '}
        <strong>paramètres de confidentialité</strong> de votre compte ou en nous contactant.
      </p>
    </Article>

    {/* ─── Article 7 ─── */}
    <Article title="Article 7 — Cookies et traceurs">
      <SubTitle>7.1 Cookies strictement nécessaires</SubTitle>
      <p>
        Ces cookies permettent l'authentification sécurisée (tokens JWT via Supabase) et la
        mémorisation de vos préférences. Ils sont indispensables au fonctionnement du service et{' '}
        <strong>ne nécessitent pas votre consentement</strong>.
      </p>

      <SubTitle>7.2 Cookies analytiques (opt-in)</SubTitle>
      <p>
        Utilisés via <strong>PostHog EU Cloud</strong> pour analyser l'usage agrégé et améliorer
        l'expérience pédagogique. Ces cookies requièrent votre consentement préalable via le
        bandeau dédié. Ils peuvent être refusés sans impact sur l'utilisation du service.
      </p>

      <SubTitle>7.3 Absence de cookies publicitaires</SubTitle>
      <p>
        Kreyolang <strong>n'utilise aucun cookie publicitaire tiers</strong>. Aucune donnée de
        navigation n'est partagée avec des réseaux publicitaires.
      </p>
    </Article>

    {/* ─── Article 8 ─── */}
    <Article title="Article 8 — Modifications de la politique">
      <p>
        Nous nous réservons le droit de modifier la présente politique pour l'adapter aux
        évolutions légales, réglementaires ou fonctionnelles de notre service.
      </p>
      <p>
        En cas de modification substantielle affectant vos droits, vous serez notifié par email
        au minimum <strong>30 jours</strong> avant l'entrée en vigueur des nouvelles dispositions.
        La version en vigueur est toujours consultable sur cette page.
      </p>
    </Article>

    {/* Contact */}
    <Callout color="slate">
      <p className="font-extrabold text-slate-900 mb-2">CMJ Group — Marque Kreyolang</p>
      <p>47, rue Vivienne – 75002 Paris</p>
      <p className="mt-1">
        Contact :{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
          contact@kreyolang.com
        </a>
      </p>
      <p className="mt-1">
        Autorité de contrôle :{' '}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline"
        >
          Commission Nationale de l'Informatique et des Libertés (CNIL)
        </a>
      </p>
    </Callout>

  </LegalPage>
);

export default Confidentialite;
