import React from 'react';
import LegalPage, { Article, Callout } from '../components/LegalPage';

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
  <LegalPage title="Politique de Confidentialité" lastUpdated="20 novembre 2026" applicableFrom="20 novembre 2026">

    {/* Version du 20/11/2026 — texte source unique : public/confidentialite/index.html (même contenu) */}

    <p className="text-slate-600 leading-relaxed text-[15px]">Cette politique explique quelles données personnelles Kreyolang utilise, pourquoi, combien de temps, avec qui elles sont partagées, et comment exercer vos droits. Elle applique le Règlement général sur la protection des données (RGPD, règlement UE 2016/679), la loi n° 78-17 du 6 janvier 1978 « Informatique et Libertés » et l'article L34-5 du Code des postes et des communications électroniques.</p>

    <Article title="Article 1 — Qui est responsable de vos données">
      <p>Christopher Jeanne EI, entrepreneur individuel exerçant sous le nom commercial CMJ Group et la marque Kreyolang — SIREN 879 333 664 — 47, rue Vivienne, 75002 Paris — <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">contact@kreyolang.com</a>.</p>
      <p>Kreyolang n'a pas désigné de délégué à la protection des données (cette désignation n'est pas obligatoire pour son activité). Pour toute question, écrivez à l'adresse ci-dessus.</p>
    </Article>

    <Article title="Article 2 — Les données que nous utilisons">
      <p><strong className="text-slate-800">2.1 Votre compte</strong> : prénom, nom, pseudonyme et identifiant (@), adresse e-mail et date de naissance. Votre mot de passe est chiffré par notre prestataire d'authentification : nous n'y avons jamais accès. Si vous vous connectez avec Apple ou Google, nous recevons de ce service votre adresse e-mail (éventuellement masquée par Apple) et un identifiant.</p>
      <p><strong className="text-slate-800">2.2 Votre apprentissage</strong> : langues apprises, leçons et sections terminées, réponses aux exercices, points d'expérience (XP), gemmes, vies, séries de jours, ligue et classement, badges, objectif quotidien, temps de pratique de la journée et heure choisie pour le rappel d'entraînement, raison pour laquelle vous apprenez.</p>
      <p><strong className="text-slate-800">2.3 Vos échanges avec les autres joueurs</strong> : abonnements et demandes d'ami, messages privés, défis et duels, mentions « j'aime », signalements que vous faites et personnes que vous bloquez.</p>
      <p><strong className="text-slate-800">2.4 Vos réglages</strong> : langue de l'interface, fuseau horaire, apparence de votre avatar, vos choix de notifications, votre choix concernant les statistiques d'usage et votre choix concernant les offres et nouveautés (avec la date et la version du texte que vous avez accepté).</p>
      <p><strong className="text-slate-800">2.5 Données techniques</strong> : identifiant unique de votre compte, jeton de notification de chacun de vos appareils, système (iOS ou Android) et version de l'application, rapports d'erreurs, suivi de remise des notifications (notification envoyée, bien reçue par Apple ou Google, ou refusée). Si vous avez accepté les statistiques d'usage : les actions effectuées dans l'application (écrans ouverts, leçons lancées), rattachées à votre identifiant et à votre adresse e-mail.</p>
      <p><strong className="text-slate-800">2.6 Paiement</strong> : vos coordonnées bancaires sont traitées uniquement par Apple ou Google. Nous recevons seulement, via RevenueCat, l'état de votre abonnement (actif ou non, formule, date d'échéance).</p>
      <p><strong className="text-slate-800">2.7 Ce que nous ne collectons pas</strong> : ni localisation, ni contacts, ni photos, ni identifiant publicitaire. Kreyolang n'affiche aucune publicité de tiers et ne vend aucune donnée.</p>
      <p><strong className="text-slate-800">2.8 Données obligatoires</strong> : l'adresse e-mail (ou la connexion Apple/Google), un pseudonyme et la date de naissance sont nécessaires pour créer un compte — la date de naissance sert à vérifier que vous avez au moins 15 ans. Tout le reste est facultatif ou dépend de votre utilisation.</p>
    </Article>

    <Article title="Article 3 — Ce que voient les autres joueurs">
      <p>Votre pseudonyme et identifiant, votre avatar, les langues que vous apprenez, votre XP et votre rang de ligue, vos badges et, le cas échéant, votre statut Premium. Votre prénom, votre nom, votre date de naissance et votre adresse e-mail ne sont jamais affichés aux autres joueurs. Vos messages privés ne sont visibles que par vous et votre correspondant.</p>
    </Article>

    <Article title="Article 4 — Pourquoi nous utilisons vos données, et sur quelle base légale">
      <Table
        headers={['Finalité', 'Base légale (RGPD art. 6)']}
        rows={[
          [<>Créer et gérer votre compte, vérifier votre âge, vous connecter</>, <>Exécution du contrat (CGU)</>],
          [<>Vous faire apprendre : leçons, progression, sauvegarde et synchronisation entre appareils, ligues, défis, messagerie</>, <>Exécution du contrat</>],
          [<>Gérer votre abonnement Premium</>, <>Exécution du contrat</>],
          [<>Vous envoyer des e-mails de service (confirmation d'adresse, réinitialisation du mot de passe, information sur la sécurité ou une évolution de cette politique)</>, <>Exécution du contrat</>],
          [<>Notifications liées à votre activité : proverbe du jour, rappel d'entraînement, vies rechargées, messages, demandes d'ami et défis</>, <>Votre consentement (autorisation des notifications et réglages de l'application)</>],
          [<><strong className="text-slate-800">Vous informer de nos nouveautés et offres</strong> par notification et par e-mail (voir article 5)</>, <><strong className="text-slate-800">Votre consentement</strong>, séparé et facultatif</>],
          [<>Statistiques d'usage pour améliorer l'application</>, <>Votre consentement (bandeau au premier lancement)</>],
          [<>Détecter et corriger les erreurs et pannes</>, <>Intérêt légitime : faire fonctionner un service fiable. Seuls votre identifiant et votre pseudonyme sont joints aux rapports</>],
          [<>Sécurité de la communauté : traiter les signalements, bloquer les abus, empêcher la triche sur les gemmes et l'XP</>, <>Intérêt légitime : protéger les joueurs et l'équité du jeu</>],
          [<>Conserver la preuve de vos choix (consentements, refus)</>, <>Obligation légale (RGPD art. 7-1 : pouvoir démontrer le consentement)</>],
          [<>Obligations comptables et fiscales</>, <>Obligation légale</>],
        ]}
      />
      <p>Kreyolang ne prend aucune décision produisant des effets juridiques à votre égard sur le seul fondement d'un traitement automatisé.</p>
    </Article>

    <Article title="Article 5 — Nouveautés et offres">
      <p>Nous ne vous envoyons des messages de promotion (nouveautés de l'application, offres d'abonnement) <strong className="text-slate-800">que si vous l'avez accepté</strong>, en cochant la case « Recevoir nos nouveautés et offres par notification et e-mail » ou en activant ce choix dans les Réglages. Cette case n'est jamais cochée d'avance et la refuser ne change rien à votre utilisation de Kreyolang.</p>
      <p><strong className="text-slate-800">Messages adaptés à votre parcours.</strong> Pour vous envoyer un message utile plutôt que générique, nous pouvons tenir compte de votre progression : sections gratuites terminées, série de jours en cours, langue apprise, période sans connexion. Si vous avez moins de 18 ans, vous ne recevez que des messages généraux, jamais adaptés à votre parcours.</p>
      <p><strong className="text-slate-800">Changer d'avis à tout moment</strong>, aussi simplement que vous avez accepté : Réglages → Notifications → « Nouveautés et offres », avec un interrupteur pour les notifications et un pour les e-mails. Chaque e-mail promotionnel contient aussi un lien de désinscription gratuit. Votre retrait prend effet immédiatement pour les envois suivants.</p>
      <p><strong className="text-slate-800">Durée</strong> : votre accord est utilisé tant que vous ne l'avez pas retiré, et au plus 3 ans après votre dernière activité dans l'application. Au-delà, nous ne vous envoyons plus rien sans vous redemander votre accord.</p>
      <p>L'accord donné dans l'application concerne Kreyolang uniquement : vos données ne sont jamais transmises à des partenaires pour leur propre prospection.</p>
    </Article>

    <Article title="Article 6 — Avec qui vos données sont partagées">
      <p>Vos données ne sont ni vendues ni louées. Elles sont confiées à des prestataires (sous-traitants au sens de l'article 28 du RGPD) qui ne peuvent les utiliser que pour nous rendre service :</p>
      <Table
        headers={['Prestataire', 'Rôle', 'Lieu et garanties']}
        rows={[
          [<>Supabase</>, <>Base de données, comptes, stockage</>, <>Données hébergées en Irlande (UE). Société établie aux États-Unis : clauses contractuelles types de la Commission européenne</>],
          [<>RevenueCat</>, <>Gestion des abonnements Premium</>, <>États-Unis — clauses contractuelles types de la Commission européenne</>],
          [<>Apple, Google</>, <>Achats dans l'application ; connexion « Se connecter avec Apple / Google » si vous la choisissez</>, <>Apple et Google sont responsables de leurs propres traitements (voir leurs politiques)</>],
          [<>Expo, Apple (APNs), Google (FCM)</>, <>Acheminement des notifications</>, <>États-Unis — seuls le jeton de l'appareil et le contenu de la notification sont transmis</>],
          [<>Resend</>, <>Envoi des e-mails (de service et, si vous l'avez accepté, d'offres)</>, <>États-Unis — seuls votre adresse e-mail et le contenu du message sont transmis</>],
          [<>Sentry</>, <>Rapports d'erreurs</>, <>Hébergement en Allemagne (UE) — identifiant et pseudonyme uniquement ; l'adresse IP est supprimée avant l'envoi</>],
          [<>PostHog</>, <>Statistiques d'usage, seulement si vous les acceptez</>, <>Hébergement dans l'UE (« EU Cloud ») ; adresses IP anonymisées</>],
          [<>DiceBear</>, <>Dessin de votre avatar</>, <>Reçoit la description de l'avatar et l'adresse IP de l'appareil qui l'affiche</>],
        ]}
      />
      <p><strong className="text-slate-800">Transferts hors de l'Union européenne</strong> : quand un prestataire est établi aux États-Unis, le transfert repose sur la décision d'adéquation de la Commission européenne du 10 juillet 2023 (« Data Privacy Framework ») pour les entreprises certifiées, et à défaut sur les clauses contractuelles types de la Commission. Vous pouvez en obtenir une copie en écrivant à <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">contact@kreyolang.com</a>.</p>
      <p>Nous pouvons aussi communiquer des données à une autorité qui les exige légalement.</p>
    </Article>

    <Article title="Article 7 — Combien de temps nous les gardons">
      <Table
        headers={['Données', 'Durée']}
        rows={[
          [<>Compte, progression, réglages, échanges avec les autres joueurs</>, <>Tant que votre compte existe. Un compte sans connexion pendant 3 ans est supprimé, après un e-mail de prévenance envoyé un mois avant.</>],
          [<>Accord pour les nouveautés et offres</>, <>Jusqu'à votre retrait, et au plus 3 ans après votre dernière activité</>],
          [<>Preuve de vos choix (accord ou refus : date, canal, version du texte)</>, <>5 ans après la fin de l'accord, y compris après la suppression du compte, sous une forme réduite (identifiant technique, choix, date, version du texte) — uniquement pour pouvoir prouver votre choix en cas de contestation</>],
          [<>Statistiques d'usage (si acceptées)</>, <>1 an (durée fixe de notre offre PostHog), puis effacement automatique</>],
          [<>Rapports d'erreurs</>, <>30 jours</>],
          [<>Suivi de remise des notifications</>, <>30 jours</>],
          [<>Adresse IP</>, <>Nous ne l'enregistrons dans aucune de nos bases de données ; elle n'apparaît que dans les journaux techniques ci-dessous</>],
          [<>Journaux techniques de notre hébergeur (requêtes reçues par nos serveurs, pouvant contenir l'adresse IP)</>, <>7 jours</>],
          [<>Justificatifs comptables de nos ventes (relevés d'Apple et de Google, sans vos coordonnées bancaires)</>, <>10 ans (article L123-22 du Code de commerce)</>],
        ]}
      />
      <p><strong className="text-slate-800">Suppression de votre compte</strong> : lorsque vous supprimez votre compte, votre profil, votre progression, vos messages et votre compte de connexion sont effacés immédiatement, à l'exception de la preuve de vos choix décrite ci-dessus et des pièces comptables.</p>
    </Article>

    <Article title="Article 8 — Vos droits">
      <p>Vous disposez des droits suivants :</p>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li><strong className="text-slate-800">Accès</strong> (art. 15) : obtenir une copie de vos données. Depuis l'application, l'export de vos données au format JSON, ou par e-mail.</li>
        <li><strong className="text-slate-800">Rectification</strong> (art. 16) : depuis votre profil, ou par e-mail.</li>
        <li><strong className="text-slate-800">Effacement</strong> (art. 17) : Réglages → Mon compte → Supprimer mon compte, ou sur <a href="https://www.kreyolang.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">kreyolang.com</a> (« Supprimer mon compte »), ou par e-mail. La suppression est définitive : progression, XP, gemmes et séries sont perdues.</li>
        <li><strong className="text-slate-800">Portabilité</strong> (art. 20) : recevoir vos données dans un format structuré (JSON).</li>
        <li><strong className="text-slate-800">Retrait de votre consentement</strong> (art. 7-3), à tout moment, sans que cela remette en cause ce qui a été fait avant : notifications (Réglages → Notifications), nouveautés et offres (Réglages → Notifications → Nouveautés et offres, ou lien dans chaque e-mail), statistiques d'usage (Réglages → Expérience).</li>
        <li><strong className="text-slate-800">Opposition</strong> (art. 21) : vous pouvez vous opposer à tout moment, sans avoir à vous justifier, à l'envoi de messages promotionnels et au profilage qui y est lié. Vous pouvez aussi vous opposer aux traitements fondés sur notre intérêt légitime, pour des raisons tenant à votre situation particulière.</li>
        <li><strong className="text-slate-800">Limitation</strong> (art. 18) : demander le gel temporaire d'un traitement, par exemple le temps de vérifier une donnée contestée.</li>
        <li><strong className="text-slate-800">Directives après votre décès</strong> (loi Informatique et Libertés, art. 85) : indiquer ce que doivent devenir vos données après votre mort.</li>
      </ul>
      <p><strong className="text-slate-800">Comment faire</strong> : depuis l'application quand c'est indiqué, sinon en écrivant à <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">contact@kreyolang.com</a> depuis l'adresse de votre compte (sinon nous pourrons vous demander de prouver votre identité). Nous répondons dans un délai d'<strong className="text-slate-800">un mois</strong>, qui peut être prolongé de deux mois pour une demande complexe ; nous vous prévenons alors dans le premier mois.</p>
      <p><strong className="text-slate-800">Réclamation</strong> : si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL — 3, place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.cnil.fr/fr/plaintes</a>.</p>
    </Article>

    <Article title="Article 9 — Âge minimum">
      <p>Il faut avoir au moins 15 ans pour créer un compte Kreyolang ; votre date de naissance sert à le vérifier. À partir de 15 ans, vous pouvez consentir seul à l'utilisation de vos données (loi Informatique et Libertés, art. 45). Kreyolang ne collecte aucune donnée sensible (santé, opinions, localisation précise, biométrie). Un parent qui constate qu'un enfant de moins de 15 ans a créé un compte peut nous écrire pour le faire supprimer.</p>
    </Article>

    <Article title="Article 10 — Sécurité">
      <p>Les échanges entre l'application et nos serveurs sont chiffrés (HTTPS). L'accès aux données est limité compte par compte : votre prénom, votre nom, votre date de naissance, votre adresse e-mail, vos choix concernant les offres et vos messages privés ne sont accessibles qu'à vous (et à votre correspondant pour un message). Les mots de passe sont chiffrés par notre prestataire d'authentification. Les opérations sensibles (gemmes, XP, abonnement) sont validées par nos serveurs et non par l'appareil. En cas de violation de données présentant un risque pour vous, nous prévenons la CNIL dans les 72 heures et, si le risque est élevé, nous vous en informons directement (RGPD art. 33 et 34).</p>
    </Article>

    <Article title="Article 11 — Cookies et traceurs">
      <p><strong className="text-slate-800">Dans l'application</strong> : seuls les éléments nécessaires au fonctionnement sont utilisés sans votre accord (maintien de votre connexion, préférences). Les statistiques d'usage (PostHog) ne fonctionnent qu'après votre accord, donné ou refusé au premier lancement et modifiable dans Réglages → Expérience. Aucun traceur publicitaire n'est utilisé.</p>
      <p><strong className="text-slate-800">Sur le site kreyolang.com</strong> : le site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience. Il garde seulement votre choix de langue dans le stockage de votre navigateur. Pour vous proposer d'emblée la bonne langue, il interroge le service ipapi.co, qui reçoit l'adresse IP de votre appareil et renvoie le pays correspondant ; rien n'est enregistré par Kreyolang.</p>
    </Article>

    <Article title="Article 12 — Modifications de cette politique">
      <p>Nous pouvons modifier cette politique pour suivre l'évolution de l'application ou de la loi. La version en vigueur est toujours publiée sur cette page, avec sa date. En cas de changement important de vos droits ou de nos usages de vos données, nous vous prévenons par e-mail ou dans l'application au moins 30 jours avant son entrée en vigueur. Une nouvelle utilisation fondée sur le consentement (par exemple les offres et nouveautés) ne s'applique à vous que si vous l'acceptez.</p>
    </Article>

    {/* Contact */}
    <Callout color="slate">
      <p className="font-extrabold text-slate-900 mb-2">Christopher Jeanne EI — CMJ Group — Marque Kreyolang</p>
      <p>SIREN : 879 333 664</p>
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
