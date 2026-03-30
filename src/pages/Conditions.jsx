import React from 'react';
import LegalPage, { Article, SubTitle, Callout } from '../components/LegalPage';

const Conditions = () => (
  <LegalPage
    title="Conditions Générales d'Utilisation et de Vente"
    lastUpdated="Février 2026"
  >

    {/* Préambule */}
    <Callout color="amber">
      Les présentes Conditions Générales d'Utilisation et de Vente (CGU/CGV) régissent l'accès et
      l'utilisation de la plateforme <strong>Kreyolang</strong>, accessible via l'application mobile
      (iOS et Android) et le site web <strong>www.kreyolang.com</strong>. En créant un compte ou en
      utilisant les services Kreyolang, vous acceptez pleinement et sans réserve ces conditions.
    </Callout>

    {/* ─── Article 1 ─── */}
    <Article title="Article 1 — Objet du service">
      <p>
        Kreyolang est une plateforme numérique d'apprentissage des langues créoles (créole haïtien,
        guadeloupéen, martiniquais, réunionnais et autres variantes), développée par{' '}
        <strong>CMJ Group</strong> (micro-entreprise), opérant sous la marque verbale{' '}
        <strong>Kreyolang</strong>.
      </p>
      <p>
        La plateforme propose un environnement d'apprentissage gamifié inspiré de l'univers de la
        piraterie : leçons structurées par niveaux et unités thématiques, système de points
        d'expérience (XP), classements par ligue, défis quotidiens, collection de gemmes et séries
        de jours (streaks). L'objectif est de rendre l'apprentissage des langues créoles accessible,
        engageant et scientifiquement efficace.
      </p>
      <p>
        Le service est disponible en version gratuite avec accès limité, et en version{' '}
        <strong>Premium</strong> avec accès complet à l'ensemble du contenu pédagogique.
      </p>
    </Article>

    {/* ─── Article 2 ─── */}
    <Article title="Article 2 — Accès au service">
      <SubTitle>2.1 Conditions d'éligibilité</SubTitle>
      <p>
        L'utilisation de Kreyolang est réservée aux personnes physiques âgées d'au moins{' '}
        <strong>13 ans</strong> (ou <strong>16 ans</strong> pour les résidents de l'Union
        Européenne). En créant un compte, l'utilisateur confirme remplir ces conditions. Pour les
        mineurs, le consentement parental explicite est requis avant toute inscription.
      </p>

      <SubTitle>2.2 Compte Gratuit</SubTitle>
      <p>Le compte gratuit donne accès :</p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>Aux premières leçons de chaque unité thématique</li>
        <li>Au système de progression de base (XP, ligues, streaks)</li>
        <li>À un nombre limité de sessions par jour</li>
      </ul>
      <p className="mt-2">
        Le contenu gratuit peut inclure de la publicité non intrusive, affichée de manière à ne pas
        perturber l'expérience d'apprentissage.
      </p>

      <SubTitle>2.3 Compte Premium</SubTitle>
      <p>L'abonnement Premium débloque intégralement :</p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>Accès illimité à l'intégralité des leçons, unités et contenus</li>
        <li>Expérience sans publicité</li>
        <li>Téléchargement des leçons pour usage hors connexion</li>
        <li>Accès prioritaire aux nouvelles unités et fonctionnalités</li>
        <li>Contenu exclusif : histoires créoles, défis spéciaux, audio haute qualité</li>
        <li>Synchronisation cloud illimitée entre tous les appareils</li>
      </ul>
    </Article>

    {/* ─── Article 3 ─── */}
    <Article title="Article 3 — Paiements et abonnements">
      <SubTitle>3.1 Tarification</SubTitle>
      <p>
        Les tarifs en vigueur — mensuel et annuel — sont clairement affichés au moment de la
        souscription, en euros toutes taxes comprises (TTC). Kreyolang se réserve le droit de
        modifier ses tarifs avec un préavis de <strong>30 jours</strong> communiqué par email à
        l'adresse associée au compte.
      </p>

      <SubTitle>3.2 Paiement via application mobile (iOS et Android)</SubTitle>
      <p>
        Les achats effectués depuis l'application <strong>iOS</strong> sont traités exclusivement
        par <strong>Apple (App Store)</strong> selon les conditions générales d'Apple Inc. Les
        achats depuis l'application <strong>Android</strong> sont traités par{' '}
        <strong>Google (Google Play Store)</strong>. La gestion technique des droits d'accès Premium
        est assurée par <strong>RevenueCat</strong>, notre prestataire spécialisé dans la gestion
        des abonnements mobiles. Kreyolang n'a à aucun moment accès aux coordonnées bancaires lors
        de ces transactions.
      </p>

      <SubTitle>3.3 Paiement via le site web</SubTitle>
      <p>
        Les paiements effectués sur <strong>www.kreyolang.com</strong> sont traités de manière
        sécurisée par <strong>Stripe, Inc.</strong> (certifié PCI-DSS Niveau 1). Kreyolang ne
        stocke à aucun moment les informations bancaires de ses utilisateurs sur ses propres
        serveurs.
      </p>

      <SubTitle>3.4 Renouvellement automatique et résiliation</SubTitle>
      <p>
        Les abonnements se renouvellent <strong>automatiquement</strong> à l'échéance de chaque
        période (mensuelle ou annuelle). L'utilisateur peut annuler son abonnement à tout moment
        depuis :
      </p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>
          <strong>iOS :</strong> Réglages Apple ID → Abonnements
        </li>
        <li>
          <strong>Android :</strong> Google Play Store → Abonnements
        </li>
        <li>
          <strong>Web :</strong> www.kreyolang.com → Mon compte → Mon abonnement
        </li>
      </ul>
      <p className="mt-2">
        La résiliation prend effet à la fin de la période d'abonnement en cours. Aucun remboursement
        partiel n'est accordé pour la période restante, sauf dispositions légales applicables.
      </p>

      <SubTitle>3.5 Politique de remboursement</SubTitle>
      <p>
        Les demandes de remboursement pour les achats effectués via l'App Store ou Google Play sont
        soumises aux politiques de remboursement respectives d'Apple et de Google. Pour les achats
        effectués sur le site web (via Stripe), toute demande peut être adressée à{' '}
        <strong>contact@kreyolang.com</strong> dans un délai de <strong>14 jours</strong> suivant
        la date d'achat, conformément au droit de rétractation légal (art. L221-18 du Code de la
        consommation).
      </p>
    </Article>

    {/* ─── Article 4 ─── */}
    <Article title="Article 4 — Propriété intellectuelle">
      <p>
        L'ensemble des éléments constituant la plateforme Kreyolang est protégé par le droit de la
        propriété intellectuelle et des marques :
      </p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>Contenus pédagogiques (textes, exercices, structures de cours, méthodes)</li>
        <li>Enregistrements audio et productions sonores originales</li>
        <li>Illustrations, animations et mascotte de l'application</li>
        <li>Univers de gamification (thème pirate, ligues, XP, gemmes)</li>
        <li>Logotypes, chartes graphiques et identité visuelle</li>
        <li>Architecture logicielle et code source</li>
      </ul>
      <p className="mt-3">
        Il est strictement interdit de reproduire, copier, distribuer, modifier, vendre ou
        exploiter commercialement tout contenu de la plateforme sans autorisation écrite préalable
        de CMJ Group.
      </p>
      <p>
        CMJ Group accorde à l'utilisateur une <strong>licence personnelle, non-exclusive et
        non-transférable</strong> d'utilisation de la plateforme, pour un usage strictement
        personnel et non commercial.
      </p>
    </Article>

    {/* ─── Article 5 ─── */}
    <Article title="Article 5 — Règles d'utilisation">
      <p>L'utilisateur s'engage expressément à ne pas :</p>
      <ul className="list-disc list-inside space-y-1.5 ml-2 mt-1">
        <li>Créer plusieurs comptes pour contourner les limitations du compte gratuit</li>
        <li>
          Utiliser des scripts automatisés, robots ou outils tiers pour progresser
          artificiellement dans les classements
        </li>
        <li>Partager ses identifiants de connexion avec des tiers</li>
        <li>
          Tenter de décompiler, désassembler ou réaliser une rétro-ingénierie de l'application
        </li>
        <li>
          Publier des contenus offensants, discriminatoires ou illicites dans les espaces
          communautaires
        </li>
        <li>Contourner ou désactiver les mesures de sécurité de la plateforme</li>
      </ul>
      <p className="mt-3">
        Toute violation de ces règles peut entraîner, sans préavis et sans indemnité, la{' '}
        <strong>suspension temporaire ou la résiliation définitive</strong> du compte de
        l'utilisateur concerné.
      </p>
    </Article>

    {/* ─── Article 6 ─── */}
    <Article title="Article 6 — Limitation de responsabilité">
      <p>
        Kreyolang s'efforce de maintenir la plateforme disponible 24h/24, 7j/7, mais ne peut
        garantir une disponibilité ininterrompue, notamment en cas de maintenance planifiée, de
        mise à jour système, ou d'événement de force majeure.
      </p>
      <p>La société ne pourra être tenue responsable :</p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>Des interruptions temporaires de service pour maintenance ou mise à jour</li>
        <li>
          Des dommages indirects (perte de données, manque à gagner) résultant de l'utilisation
          ou de l'impossibilité d'utiliser le service
        </li>
        <li>De la perte de progression consécutive à un dysfonctionnement technique imprévu</li>
        <li>
          Des transactions effectuées via Apple, Google ou Stripe, régies par leurs propres
          conditions générales
        </li>
      </ul>
      <p className="mt-3">
        La responsabilité de CMJ Group, si elle venait à être engagée, ne saurait en tout
        état de cause excéder le montant total payé par l'utilisateur au cours des{' '}
        <strong>12 derniers mois</strong> précédant le fait générateur.
      </p>
    </Article>

    {/* ─── Article 7 ─── */}
    <Article title="Article 7 — Droit applicable et juridiction compétente">
      <p>
        Les présentes CGU/CGV sont soumises au <strong>droit français</strong>. En cas de litige
        relatif à leur interprétation ou leur exécution, et à défaut de résolution amiable dans
        un délai de 30 jours suivant la notification du litige, les{' '}
        <strong>tribunaux de Paris</strong> seront seuls compétents.
      </p>
      <p>
        Pour toute question relative aux présentes conditions :{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline font-semibold">
          contact@kreyolang.com
        </a>
      </p>
    </Article>

    {/* Contact */}
    <Callout color="slate">
      <p className="font-extrabold text-slate-900 mb-2">CMJ Group — Marque Kreyolang</p>
      <p>47, rue Vivienne – 75002 Paris</p>
      <p className="mt-1">
        Site web :{' '}
        <a href="https://www.kreyolang.com" className="text-purple-600 hover:underline">
          www.kreyolang.com
        </a>
      </p>
      <p className="mt-1">
        Contact :{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
          contact@kreyolang.com
        </a>
      </p>
    </Callout>

  </LegalPage>
);

export default Conditions;
