import React from 'react';
import LegalPage, { Article, Callout } from '../components/LegalPage';

const MentionsLegales = () => (
  <LegalPage title="Mentions Légales" lastUpdated="Mars 2026">

    <Callout color="indigo">
      Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la Confiance
      dans l'Économie Numérique (LCEN), les présentes mentions légales s'appliquent au site
      web <strong>www.kreyolang.com</strong> ainsi qu'à l'application mobile <strong>Kreyolang</strong>.
    </Callout>

    {/* ─── Article 1 ─── */}
    <Article title="Article 1 — Éditeur du site">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-1.5 text-sm">
        <p>
          <strong className="text-slate-800">Raison sociale :</strong> CMJ Group (micro-entreprise), opérant sous la marque verbale <strong>Kreyolang</strong>
        </p>
        <p>
          <strong className="text-slate-800">SIREN :</strong> 879 333 664
        </p>
        <p>
          <strong className="text-slate-800">Adresse du siège :</strong> 47, rue Vivienne – 75002 Paris, France
        </p>
        <p>
          <strong className="text-slate-800">Contact :</strong>{' '}
          <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
            contact@kreyolang.com
          </a>
        </p>
        <p>
          <strong className="text-slate-800">Site web :</strong>{' '}
          <a href="https://www.kreyolang.com" className="text-purple-600 hover:underline">
            www.kreyolang.com
          </a>
        </p>
      </div>
    </Article>

    {/* ─── Article 2 ─── */}
    <Article title="Article 2 — Directeur de la publication">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-1.5 text-sm">
        <p>
          Le directeur de la publication est le représentant légal de CMJ Group,
          joignable à l'adresse :{' '}
          <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
            contact@kreyolang.com
          </a>
        </p>
      </div>
    </Article>

    {/* ─── Article 3 ─── */}
    <Article title="Article 3 — Hébergement">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-1.5 text-sm">
        <p>
          <strong className="text-slate-800">Hébergeur du site web :</strong> GitHub Pages
        </p>
        <p>
          <strong className="text-slate-800">Société :</strong> GitHub, Inc. (filiale de Microsoft Corporation)
        </p>
        <p>
          <strong className="text-slate-800">Adresse :</strong> 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis
        </p>
        <p>
          <strong className="text-slate-800">Site :</strong>{' '}
          <a href="https://pages.github.com" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
            pages.github.com
          </a>
        </p>
      </div>
    </Article>

    {/* ─── Article 4 ─── */}
    <Article title="Article 4 — Propriété intellectuelle">
      <p>
        L'ensemble des contenus présents sur le site <strong>www.kreyolang.com</strong> et
        dans l'application <strong>Kreyolang</strong> (textes, images, illustrations, sons,
        vidéos, logos, icônes, code source) est la propriété exclusive de CMJ Group ou de
        ses partenaires, et est protégé par les lois françaises et internationales relatives
        à la propriété intellectuelle.
      </p>
      <p>
        La marque verbale <strong>Kreyolang</strong> est une marque déposée. Toute
        reproduction, représentation, modification ou exploitation, totale ou partielle, de
        ces contenus ou de cette marque, sans autorisation écrite préalable de CMJ Group,
        est strictement interdite et constituerait une contrefaçon sanctionnée par les
        articles L335-2 et suivants du Code de la Propriété Intellectuelle.
      </p>
    </Article>

    {/* ─── Article 5 ─── */}
    <Article title="Article 5 — Données personnelles">
      <p>
        Les informations relatives à la collecte et au traitement des données personnelles
        des utilisateurs sont détaillées dans notre{' '}
        <a href="/confidentialite" className="text-purple-600 hover:underline font-semibold">
          Politique de Confidentialité
        </a>
        , conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679)
        et à la loi Informatique et Libertés du 6 janvier 1978.
      </p>
      <p>
        Pour exercer vos droits ou pour toute question relative à vos données personnelles,
        contactez-nous à :{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
          contact@kreyolang.com
        </a>
      </p>
    </Article>

    {/* ─── Article 6 ─── */}
    <Article title="Article 6 — Cookies">
      <p>
        Le site <strong>www.kreyolang.com</strong> utilise des cookies strictement nécessaires
        à son fonctionnement (authentification) ainsi que des cookies analytiques via
        PostHog EU Cloud, soumis à votre consentement préalable.
      </p>
      <p>
        Vous pouvez configurer vos préférences en matière de cookies via le bandeau dédié
        affiché lors de votre première visite. Pour toute information sur l'utilisation des
        cookies, consultez notre{' '}
        <a href="/confidentialite" className="text-purple-600 hover:underline font-semibold">
          Politique de Confidentialité
        </a>
        .
      </p>
    </Article>

    {/* ─── Article 7 ─── */}
    <Article title="Article 7 — Limitation de responsabilité">
      <p>
        CMJ Group s'efforce d'assurer l'exactitude et la mise à jour des informations
        diffusées sur ce site. Toutefois, CMJ Group ne peut garantir l'exactitude, la
        complétude ou l'actualité des informations fournies. En conséquence, l'utilisateur
        reconnaît utiliser ces informations sous sa responsabilité exclusive.
      </p>
      <p>
        CMJ Group ne saurait être tenu responsable des dommages directs ou indirects résultant
        de l'accès au site ou de l'utilisation de son contenu, y compris en cas d'indisponibilité,
        de virus ou d'inexactitudes dans les informations.
      </p>
    </Article>

    {/* ─── Article 8 ─── */}
    <Article title="Article 8 — Droit applicable">
      <p>
        Les présentes mentions légales sont régies par le <strong>droit français</strong>.
        Tout litige relatif à l'interprétation ou à l'exécution des présentes sera soumis
        à la compétence exclusive des <strong>tribunaux de Paris</strong>.
      </p>
    </Article>

    {/* Contact */}
    <Callout color="slate">
      <p className="font-extrabold text-slate-900 mb-2">CMJ Group — Marque Kreyolang</p>
      <p>SIREN : 879 333 664</p>
      <p>47, rue Vivienne – 75002 Paris</p>
      <p className="mt-1">
        Contact :{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline">
          contact@kreyolang.com
        </a>
      </p>
    </Callout>

  </LegalPage>
);

export default MentionsLegales;
