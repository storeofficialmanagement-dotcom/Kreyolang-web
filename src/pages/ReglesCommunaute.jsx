import React from 'react';
import LegalPage, { Article, SubTitle, Callout } from '../components/LegalPage';

const ReglesCommunaute = () => (
  <LegalPage
    title="Règles de conduite de la communauté"
    lastUpdated="Août 2026"
    badge="Communauté"
  >

    {/* Préambule */}
    <Callout color="amber">
      Kreyolang réunit une communauté d'apprenants autour des langues créoles et africaines. Ces
      règles sont les piliers de notre communauté — lis-les attentivement, elles s'appliquent à
      tous les espaces communautaires de la plateforme.
    </Callout>

    {/* ─── Article 1 ─── */}
    <Article title="Article 1 — Respecte toujours les autres">
      <p>
        Nous venons tous d'horizons différents et n'avons pas tous le même niveau de langue.
        Kreyolang célèbre la curiosité et la diversité culturelle. Respecte toujours les autres
        apprenants et leurs origines.
      </p>
    </Article>

    {/* ─── Article 2 ─── */}
    <Article title="Article 2 — Aide la communauté de façon constructive">
      <p>
        Apprendre une langue demande des efforts. Si un autre utilisateur fait une erreur ou pose
        une question qui te semble évidente, aide-le avec bienveillance. Les commentaires
        agressifs ou ironiques n'ont pas leur place ici.
      </p>
    </Article>

    {/* ─── Article 3 ─── */}
    <Article title="Article 3 — Accepte et valorise les variantes régionales et dialectales">
      <p>
        Les langues créoles et africaines enseignées sur Kreyolang connaissent de nombreuses
        variations régionales, dialectales et intergénérationnelles. C'est ce qui fait leur
        richesse — garde l'esprit ouvert dans tes échanges avec les autres membres.
      </p>
    </Article>

    {/* ─── Article 4 ─── */}
    <Article title="Article 4 — Protège tes données personnelles">
      <p>
        Ne partage jamais dans les espaces communautaires ton numéro de téléphone, ton adresse,
        ton âge précis, ton établissement scolaire ou toute autre donnée personnelle qui pourrait
        être utilisée de façon malveillante. Le partage de données personnelles (les tiennes ou
        celles d'un tiers) peut entraîner la suppression du message, voire du compte.
      </p>
    </Article>

    {/* ─── Article 5 ─── */}
    <Article title="Article 5 — N'utilise pas Kreyolang pour...">
      <SubTitle>Attaquer une personne ou un groupe</SubTitle>
      <p>
        Le harcèlement, les propos haineux, l'usurpation d'identité, les remarques à caractère
        sexuel et les propos discriminatoires ne sont pas tolérés. CMJ Group se réserve le droit,
        à sa seule discrétion, de supprimer tout contenu ou compte concerné, sans préavis.
      </p>

      <SubTitle>Tricher ou détourner le système</SubTitle>
      <p>
        L'utilisation de scripts automatisés, de robots ou de tout outil tiers pour progresser
        artificiellement dans les classements est interdite (voir également Art. 5 des CGU).
      </p>

      <SubTitle>Publier un langage grossier ou du contenu hors sujet</SubTitle>
      <p>
        Les commentaires haineux, obscènes ou hors sujet n'ont pas leur place dans les espaces
        communautaires.
      </p>

      <SubTitle>En résumé, ne sont pas tolérés :</SubTitle>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>Les contenus illicites, pornographiques ou excessivement violents</li>
        <li>Le spam</li>
        <li>Les menaces, le harcèlement ou l'intimidation</li>
        <li>Les contenus discriminatoires ou racistes</li>
        <li>L'usurpation d'identité</li>
        <li>Le partage de données personnelles</li>
      </ul>

      <p className="mt-3">
        Toute violation de ces règles peut entraîner, sans préavis, la suspension ou la
        suppression du compte concerné, conformément à l'Article 5 des CGU/CGV.
      </p>

      <SubTitle>Signaler un contenu illicite</SubTitle>
      <p>
        Pour signaler un contenu illicite, contacte-nous à{' '}
        <a href="mailto:contact@kreyolang.com" className="text-purple-600 hover:underline font-semibold">
          contact@kreyolang.com
        </a>{' '}
        en précisant la nature du contenu et sa localisation sur la plateforme. Nous traiterons
        ton signalement dans les meilleurs délais.
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

export default ReglesCommunaute;
