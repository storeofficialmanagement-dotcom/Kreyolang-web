import React from 'react';
import LegalPage, { Article, SubTitle, Callout } from '../components/LegalPage';

const Conditions = () => (
  <LegalPage
    title="Conditions Générales d'Utilisation et de Vente"
    lastUpdated="Novembre 2026"
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
        <strong>Christopher Jeanne EI</strong> (entrepreneur individuel, opérant sous le nom commercial CMJ Group et la marque verbale{' '}
        <strong>Kreyolang</strong>).
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
        <strong>15 ans</strong> (seuil de consentement numérique en France, art. 7-1 loi
        Informatique et Libertés, transposition de l'art. 8 du RGPD). En créant un compte,
        l'utilisateur confirme remplir cette condition d'âge. Pour les mineurs de moins de 15 ans,
        le consentement d'un parent ou tuteur légal est requis avant toute inscription.
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
        <li>Accès illimité à l'ensemble des leçons, unités et contenus effectivement publiés et rendus accessibles sur la plateforme au moment de la consultation</li>
        <li>Expérience sans publicité</li>
        <li>Téléchargement des leçons disponibles pour usage hors connexion</li>
        <li>Accès prioritaire aux nouvelles fonctionnalités au fur et à mesure de leur déploiement</li>
        <li>Contenu exclusif : histoires créoles, défis spéciaux, audio haute qualité</li>
        <li>Synchronisation cloud illimitée entre tous les appareils</li>
      </ul>

      <SubTitle>2.4 — Diamants (monnaie virtuelle)</SubTitle>
      <p>
        Kreyolang propose l'achat de Diamants, monnaie virtuelle utilisable exclusivement au sein
        de la plateforme, disponible sous forme de packs (500, 1 000 et 5 000 Diamants). L'achat
        de Diamants confère une licence personnelle, non-exclusive, non-transférable et révocable
        d'utilisation strictement limitée au Service.
      </p>
      <p>
        Les Diamants n'ont aucune valeur monétaire réelle, ne sont ni remboursables ni échangeables
        contre de l'argent, et ne peuvent être revendus, transférés ou cédés à un autre utilisateur
        ou à un tiers.
      </p>
      <p>
        CMJ Group se réserve le droit de modifier le prix, la composition des packs ou la
        disponibilité des Diamants à tout moment. Les Diamants déjà acquis et non utilisés restent
        utilisables selon les conditions en vigueur au moment de leur achat.
      </p>
      <p>
        Les achats de Diamants suivent les mêmes règles de paiement et de remboursement que celles
        définies à l'Article 3 des présentes CGU/CGV. Conformément à l'article{' '}
        <strong>L221-28 13°</strong> du Code de la consommation, l'achat de Diamants entraîne une
        exécution immédiate de la fourniture du contenu numérique ; l'utilisateur reconnaît
        expressément renoncer à son droit de rétractation de 14 jours pour cet achat, dans les
        mêmes conditions que celles prévues à l'Article 3.5 des présentes CGU/CGV.
      </p>

      <SubTitle>2.5 — Stories</SubTitle>
      <p>
        Kreyolang publie dans l'application de courts contenus appelés « stories » : actualités du service, contenus culturels, liens vers nos réseaux sociaux et présentation des offres de Kreyolang, dont l'abonnement Premium. Les stories sont accessibles à tous les utilisateurs, gratuits comme Premium, et ne s'ouvrent que si l'utilisateur choisit de les consulter : elles ne s'imposent jamais pendant l'apprentissage. La promesse « expérience sans publicité » de l'abonnement Premium (article 2.3) concerne la publicité affichée pendant l'utilisation ; elle n'empêche pas l'accès aux stories. Les stories sont publiées uniquement par CMJ Group ; les utilisateurs ne peuvent pas en publier. Les liens d'une story peuvent mener vers des sites tiers (article 6.3). Vos mentions « j'aime » sont enregistrées dans votre compte (voir la Politique de confidentialité).
      </p>
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

      <SubTitle>3.5 Politique de remboursement et droit de rétractation</SubTitle>
      <p>
        Les demandes de remboursement pour les achats effectués via l'App Store ou Google Play sont
        soumises aux politiques de remboursement respectives d'Apple et de Google. Pour les achats
        effectués sur le site web (via Stripe), toute demande peut être adressée à{' '}
        <strong>contact@kreyolang.com</strong> dans un délai de <strong>14 jours</strong> suivant
        la date d'achat, conformément au droit de rétractation légal (art. L221-18 du Code de la
        consommation).
      </p>
      <p className="mt-2">
        Toutefois, conformément à l'article <strong>L221-28 13°</strong> du Code de la
        consommation, le droit de rétractation ne peut être exercé pour les contenus numériques
        non fournis sur un support matériel (accès Premium immédiat, leçons téléchargées hors
        connexion) dont l'exécution a commencé avec l'accord préalable exprès du consommateur et
        son renoncement exprès à son droit de rétractation. En accédant immédiatement au contenu
        Premium Kreyolang après un achat sur <strong>www.kreyolang.com</strong>, l'utilisateur
        reconnaît expressément avoir accepté l'exécution immédiate du contrat et avoir renoncé à
        son droit de rétractation pour cette transaction.
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

      <SubTitle>Contenus soumis par l'utilisateur</SubTitle>
      <p>
        Si l'utilisateur soumet, publie ou transmet un contenu via le Service (commentaires,
        messages dans les espaces communautaires, ou tout autre contenu), il en conserve la
        propriété mais concède à CMJ Group, pour la durée de protection des droits d'auteur
        applicable, une licence gratuite, non-exclusive, mondiale et transférable, permettant
        d'utiliser, reproduire, adapter et afficher ce contenu dans le cadre du fonctionnement,
        de l'amélioration et de la promotion du Service. L'utilisateur garantit détenir tous les
        droits nécessaires sur le contenu qu'il soumet et s'engage à ne pas soumettre de contenu
        portant atteinte aux droits d'un tiers.
      </p>
    </Article>

    {/* ─── Article 5 ─── */}
    <Article title="Article 5 — Règles d'utilisation">
      <SubTitle>5.1 — Comportements interdits</SubTitle>
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

      <SubTitle>5.2 — Résiliation pour motif légitime</SubTitle>
      <p>
        Indépendamment des cas de violation mentionnés ci-dessus, CMJ Group peut suspendre ou
        résilier l'accès d'un utilisateur pour un motif légitime et sérieux, notamment en cas de
        comportement suspect, de risque avéré pour la sécurité de la plateforme ou des autres
        utilisateurs, ou de fraude suspectée, moyennant notification par email lorsque cela est
        possible. Si cette résiliation résulte d'une violation avérée des présentes CGU/CGV par
        l'utilisateur, aucun remboursement n'est dû au titre de l'abonnement Premium ou des
        Diamants non utilisés. Dans les autres cas, CMJ Group procède au remboursement au prorata
        de la période d'abonnement restante ou de la contre-valeur des Diamants non consommés.
      </p>

      <SubTitle>5.3 — Garantie et indemnisation</SubTitle>
      <p>
        En cas d'utilisation du Service par l'utilisateur en violation manifeste des présentes
        CGU/CGV ou des{' '}
        <a href="/regles-communaute" className="text-purple-600 hover:underline font-semibold">
          Règles de la Communauté
        </a>{' '}
        (notamment fraude, usage illicite, atteinte aux droits d'un tiers), l'utilisateur s'engage
        à indemniser CMJ Group du préjudice directement causé par cette violation. Cette garantie
        ne s'applique pas aux réclamations résultant d'une faute de CMJ Group, ni aux droits
        d'ordre public dont bénéficie l'utilisateur en sa qualité de consommateur.
      </p>
    </Article>

    {/* ─── Article 6 ─── */}
    <Article title="Article 6 — Limitation de responsabilité">
      <p>
        Kreyolang s'efforce de maintenir la plateforme disponible 24h/24, 7j/7, mais ne peut
        garantir une disponibilité ininterrompue, notamment en cas de maintenance planifiée, de
        mise à jour système, ou d'événement de force majeure.
      </p>
      <p>
        Sans préjudice de la garantie légale de conformité applicable aux contenus et services
        numériques (art. <strong>L224-25-12</strong> et suivants du Code de la consommation),
        CMJ Group ne garantit pas une disponibilité ininterrompue du Service, l'absence totale
        d'erreurs ou de bugs, ni la compatibilité avec l'ensemble des appareils, versions de
        systèmes d'exploitation ou configurations existantes. L'utilisateur reconnaît que des
        interruptions ponctuelles ou anomalies techniques mineures peuvent survenir sans que cela
        ne remette en cause la conformité générale du Service.
      </p>
      <p>La société ne pourra être tenue responsable :</p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>Des interruptions temporaires de service pour maintenance ou mise à jour</li>
        <li>
          Des dommages indirects (perte de données, manque à gagner) résultant de l'utilisation
          ou de l'impossibilité d'utiliser le service
        </li>
        <li>De la perte de progression, quelle qu'en soit la cause, notamment consécutive à un dysfonctionnement technique, une réinstallation de l'application, un changement d'appareil, une suppression de compte volontaire ou une désactivation de la synchronisation cloud</li>
        <li>
          Des transactions effectuées via Apple, Google ou Stripe, régies par leurs propres
          conditions générales
        </li>
      </ul>
      <SubTitle>6.1 — Nature du contenu pédagogique et limitations de garanties</SubTitle>
      <p>
        CMJ Group s'engage à mettre en œuvre tous les moyens raisonnables pour garantir la qualité,
        l'exactitude et la disponibilité du contenu proposé. La plateforme Kreyolang est fournie au
        titre d'une <strong>obligation de moyens</strong> et non d'une obligation de résultat :
        aucun niveau linguistique particulier n'est garanti à l'issue d'une période d'utilisation
        déterminée.
      </p>
      <p>
        Bien que nous apportions le plus grand soin à la rédaction, à la vérification et à la mise
        à jour des leçons et des lexiques, CMJ Group ne garantit pas que les contenus soient exempts
        de coquilles, d'omissions, d'erreurs typographiques ou d'inexactitudes linguistiques.
      </p>
      <p>
        Les langues créoles et les langues africaines enseignées sur la plateforme étant des langues
        vivantes, sujettes à des variations régionales, dialectales et intergénérationnelles, les
        contenus proposés ne prétendent pas à l'exhaustivité ni à l'universalité des expressions,
        du vocabulaire ou des graphies employées. La présence d'une forme régionale, d'une graphie
        alternative ou d'une variante dialectale ne constitue pas un défaut de conformité au sens de
        l'article <strong>L224-25-12</strong> du Code de la consommation.
      </p>
      <p>
        De même, les structures grammaticales et syntaxiques présentées dans les leçons reflètent
        un usage de référence, identifié par CMJ Group sur la base de travaux linguistiques
        reconnus. La grammaire de ces langues pouvant varier selon les régions, les générations et
        les contextes d'usage, la présentation d'une règle ou d'une construction syntaxique
        particulière ne peut être contestée comme erreur ou défaut de conformité, sauf à démontrer
        une contradiction manifeste avec les sources linguistiques de référence.
      </p>
      <p>
        L'utilisateur reconnaît et accepte que l'application est susceptible de faire l'objet
        d'améliorations continues. Certains contenus (notamment les modules audio) et certaines
        fonctionnalités visuelles peuvent être déployés de manière progressive ou être
        temporairement indisponibles sans que cela ne constitue un défaut de conformité. Les
        anomalies d'affichage ponctuelles (superpositions d'éléments, décalages visuels) font
        l'objet d'une correction dans le cadre du processus normal de maintenance et ne donnent pas
        droit à remboursement.
      </p>
      <SubTitle>6.2 — Signalement et remède aux erreurs de contenu</SubTitle>
      <p>
        Les contenus pédagogiques sont conçus à partir de sources linguistiques de référence, avec
        le concours d'outils algorithmiques et d'intelligences artificielles générant des
        propositions de contenu, ainsi que de contributions humaines de vérification. L'utilisateur
        reconnaît et accepte expressément que les technologies génératives peuvent produire des
        inexactitudes et que ce mode de production est inhérent au service tel qu'il est proposé.
      </p>
      <p>
        Malgré la rigueur apportée à leur vérification, des erreurs ponctuelles peuvent subsister.
        En cas d'erreur constatée, l'utilisateur est invité à la signaler par écrit à{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline font-semibold">
          contact@kreyolang.com
        </a>{' '}
        en précisant la leçon concernée et l'élément contesté. CMJ Group étudiera le signalement
        et pourra, à sa seule discrétion et selon sa feuille de route éditoriale, procéder à la
        modification du contenu dans un délai raisonnable selon les contraintes techniques et
        éditoriales en vigueur.
      </p>
      <p>
        L'existence d'une inexactitude dans le contenu pédagogique, même avérée, n'ouvre droit à
        aucun remboursement, avoir ou résiliation anticipée de l'abonnement. Le seul remède est
        l'analyse et la correction éventuelle du contenu dans le cadre des mises à jour régulières
        de la plateforme.
      </p>
      <SubTitle>6.3 — Liens vers des sites tiers</SubTitle>
      <p>
        Le Service peut contenir des liens vers des sites ou services tiers (stores d'application,
        réseaux sociaux, médiateur de la consommation). CMJ Group n'exerce aucun contrôle sur ces
        sites tiers et ne saurait être tenu responsable de leur contenu, de leurs pratiques, ou de
        tout dommage résultant de leur utilisation.
      </p>

      <p className="mt-3">
        La responsabilité de CMJ Group, si elle venait à être engagée, ne saurait en tout
        état de cause excéder le montant total payé par l'utilisateur au cours des{' '}
        <strong>12 derniers mois</strong> précédant le fait générateur.
      </p>
    </Article>

    {/* ─── Article 7 ─── */}
    <Article title="Article 7 — Médiation de la consommation">
      <SubTitle>7.1 Litiges liés aux achats via App Store ou Google Play</SubTitle>
      <p>
        Pour les abonnements souscrits via l'<strong>App Store (Apple)</strong> ou le{' '}
        <strong>Google Play Store</strong>, Apple et Google agissent en qualité de{' '}
        <em>Merchant of Record</em> : le contrat de vente est conclu directement entre vous et
        Apple ou Google. Les litiges relatifs à la facturation, aux remboursements ou aux
        transactions sont traités par leurs propres services :
      </p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>
          <strong>Apple :</strong>{' '}
          <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
            reportaproblem.apple.com
          </a>
        </li>
        <li>
          <strong>Google :</strong>{' '}
          <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
            play.google.com → Abonnements
          </a>
        </li>
      </ul>

      <SubTitle>7.2 Litiges liés au service ou aux achats via le site web</SubTitle>
      <p>
        Conformément à l'article <strong>L616-1</strong> du Code de la consommation, pour tout
        litige relatif au service Kreyolang (accès au contenu, compte, données personnelles) ou
        aux achats effectués sur <strong>www.kreyolang.com</strong> (via Stripe), en cas de
        défaut de résolution amiable dans un délai de <strong>30 jours</strong> suivant votre
        réclamation adressée à{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline font-semibold">
          contact@kreyolang.com
        </a>
        , vous pouvez recourir gratuitement au médiateur suivant :
      </p>
      <p className="mt-3 font-semibold text-slate-800">
        CM2C — Centre de Médiation de la Consommation de Conciliateurs de Justice
      </p>
      <p>
        Site :{' '}
        <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
          www.cm2c.net
        </a>
      </p>
      <p className="mt-2">
        La médiation est entièrement <strong>gratuite pour le consommateur</strong>.
      </p>
    </Article>

    {/* ─── Article 8 ─── */}
    <Article title="Article 8 — Droit applicable et juridiction compétente">
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
      <p className="font-extrabold text-slate-900 mb-2">Christopher Jeanne EI — CMJ Group — Marque Kreyolang</p>
      <p>SIREN : 879 333 664</p>
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
