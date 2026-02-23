import Link from 'next/link';

export const metadata = {
    title: "Politique de Confidentialité — Venus Estetika",
    description: "Politique de confidentialité et protection des données personnelles de Venus Estetika. Conformité RGPD.",
    robots: "noindex, follow",
};

export default function PolitiqueConfidentialitePage() {
    return (
        <div className="mt-20 py-24 px-4 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">

                {/* Page header */}
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                    Politique de Confidentialité
                </h1>
                <p className="text-gray-500 text-sm mb-12">
                    Dernière mise à jour : 21 février 2026
                </p>

                {/* Section 1 — Introduction */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        1. Introduction
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Venus Estetika s'engage à protéger la vie privée des personnes qui visitent le site
                        venus-estetika.com et qui utilisent ses services. La présente politique de confidentialité
                        décrit de manière transparente quelles données personnelles nous collectons, pourquoi nous
                        les collectons, comment nous les utilisons et quels sont vos droits à leur égard.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Nous appliquons les principes du Règlement Général sur la Protection des Données (RGPD —
                        Règlement UE 2016/679) ainsi que la législation tunisienne en matière de protection des données
                        personnelles (Loi n° 2004-63 du 27 juillet 2004). Nous ne collectons que les données
                        strictement nécessaires et ne les partageons jamais à des fins commerciales sans votre
                        consentement explicite.
                    </p>
                </section>

                {/* Section 2 — Responsable du traitement */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        2. Responsable du traitement
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Le responsable du traitement des données personnelles collectées sur ce site est :
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600 leading-relaxed">
                        <li><span className="font-medium text-brand-navy">Dénomination :</span> Venus Estetika</li>
                        <li><span className="font-medium text-brand-navy">Adresse :</span> Lac Malaren, Les Berges du Lac, 1053 Tunis, Tunisie</li>
                        <li>
                            <span className="font-medium text-brand-navy">Email :</span>{' '}
                            <a
                                href="mailto:contact@venus-estetika.com"
                                className="text-brand-blue hover:underline"
                            >
                                contact@venus-estetika.com
                            </a>
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Téléphone :</span>{' '}
                            <a
                                href="tel:+21650606780"
                                className="text-brand-blue hover:underline"
                            >
                                +216 50 606 780
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Section 3 — Données collectées */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        3. Données collectées
                    </h2>

                    <h3 className="text-base font-bold text-brand-navy mt-6 mb-3">
                        3.1 Données fournies volontairement
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Lorsque vous utilisez nos formulaires en ligne, nous collectons les données que vous saisissez
                        directement :
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                        <li>
                            <span className="font-medium">Formulaire de devis :</span> nom et prénom, adresse email,
                            numéro de téléphone, pays de résidence, intervention(s) souhaitée(s), et — si vous
                            choisissez de les envoyer — des photos médicales à des fins d'analyse préopératoire.
                        </li>
                        <li>
                            <span className="font-medium">Formulaire de contact :</span> nom, adresse email, message libre.
                        </li>
                        <li>
                            <span className="font-medium">WhatsApp :</span> si vous nous contactez via le bouton
                            WhatsApp, les données échangées sont soumises à la politique de confidentialité de Meta
                            Platforms Inc.
                        </li>
                    </ul>

                    <h3 className="text-base font-bold text-brand-navy mt-6 mb-3">
                        3.2 Données collectées automatiquement
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Lors de votre navigation sur le site, des données techniques sont collectées automatiquement,
                        sous réserve de votre consentement pour les cookies non essentiels :
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                        <li>
                            <span className="font-medium">Cookies analytiques (GA4 / GTM) :</span> pages visitées,
                            durée de session, événements d'interaction, source de trafic. Collectés uniquement
                            avec votre consentement.
                        </li>
                        <li>
                            <span className="font-medium">Cookies fonctionnels :</span> préférences de langue,
                            mémorisation du consentement cookies.
                        </li>
                        <li>
                            <span className="font-medium">Données techniques :</span> adresse IP anonymisée, type
                            de navigateur, système d'exploitation, résolution d'écran. Ces données ne permettent
                            pas de vous identifier personnellement.
                        </li>
                    </ul>
                </section>

                {/* Section 4 — Finalités */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        4. Finalités du traitement
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Vos données sont traitées uniquement pour les finalités définies ci-dessous, chacune reposant
                        sur une base juridique distincte :
                    </p>

                    {/* Responsive table */}
                    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                        <table className="w-full text-sm text-gray-600">
                            <thead>
                                <tr className="bg-brand-navy text-white">
                                    <th className="text-left px-5 py-3 font-semibold">Finalité</th>
                                    <th className="text-left px-5 py-3 font-semibold">Base juridique</th>
                                    <th className="text-left px-5 py-3 font-semibold">Durée de conservation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-5 py-4">Répondre à une demande de devis</td>
                                    <td className="px-5 py-4">Intérêt légitime / Pré-contractuel</td>
                                    <td className="px-5 py-4">3 ans</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-5 py-4">Gestion de la relation patient (CRM)</td>
                                    <td className="px-5 py-4">Exécution du contrat</td>
                                    <td className="px-5 py-4">5 ans après la dernière interaction</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-5 py-4">Suivi médical post-opératoire</td>
                                    <td className="px-5 py-4">Obligation légale / Intérêt vital</td>
                                    <td className="px-5 py-4">10 ans (archives médicales)</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-5 py-4">Mesure d'audience (Analytics)</td>
                                    <td className="px-5 py-4">Consentement</td>
                                    <td className="px-5 py-4">13 mois (cookies)</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-5 py-4">Publicité ciblée (Meta Pixel)</td>
                                    <td className="px-5 py-4">Consentement</td>
                                    <td className="px-5 py-4">90 jours (audience personnalisée)</td>
                                </tr>
                                <tr className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-5 py-4">Prévention de la fraude et sécurité</td>
                                    <td className="px-5 py-4">Intérêt légitime</td>
                                    <td className="px-5 py-4">12 mois (logs techniques)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 5 — Cookies */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        5. Cookies
                    </h2>

                    <h3 className="text-base font-bold text-brand-navy mt-6 mb-3">
                        5.1 Cookies essentiels (toujours actifs)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation, la
                        mémorisation de votre choix de consentement et la sécurisation des formulaires. Ils ne
                        nécessitent pas votre accord préalable.
                    </p>

                    <h3 className="text-base font-bold text-brand-navy mt-6 mb-3">
                        5.2 Cookies analytiques et publicitaires (avec consentement)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Ces cookies sont déposés uniquement si vous acceptez, via notre bannière de consentement :
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                        <li>
                            <span className="font-medium">Google Analytics 4 (GA4) :</span> mesure l'audience du site
                            (pages vues, sessions, taux de rebond). Les données sont anonymisées et agrégées. Éditeur :
                            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande.
                        </li>
                        <li>
                            <span className="font-medium">Google Tag Manager (GTM) :</span> gestionnaire de balises
                            permettant le déploiement contrôlé des scripts de mesure.
                        </li>
                        <li>
                            <span className="font-medium">Meta Pixel :</span> mesure l'efficacité de nos campagnes
                            publicitaires sur Facebook et Instagram. Éditeur : Meta Platforms Inc., 1 Hacker Way,
                            Menlo Park, CA 94025, États-Unis.
                        </li>
                    </ul>

                    <h3 className="text-base font-bold text-brand-navy mt-6 mb-3">
                        5.3 Gestion du consentement
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Lors de votre première visite, une bannière de consentement (Consent Mode v2) vous permet
                        d'accepter ou de refuser chaque catégorie de cookies. Vous pouvez modifier vos préférences
                        à tout moment via le lien «&nbsp;Gérer mes cookies&nbsp;» disponible en pied de page. Le
                        refus des cookies analytiques n'affecte pas votre navigation sur le site.
                    </p>
                </section>

                {/* Section 6 — Partage des données */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        6. Partage des données
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées,
                        dans la stricte limite des finalités décrites, avec les catégories de destinataires suivantes :
                    </p>
                    <ul className="mt-4 space-y-3 text-gray-600 leading-relaxed">
                        <li>
                            <span className="font-medium text-brand-navy">Chirurgiens et équipe médicale :</span>{' '}
                            dans le cadre de la prise en charge médicale et du suivi post-opératoire, sous couvert
                            du secret médical.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Hébergeur (Vercel Inc.) :</span>{' '}
                            dans le cadre du fonctionnement technique du site, sous contrat de traitement de données
                            conforme au RGPD.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Google Analytics / Google Tag Manager :</span>{' '}
                            données d'audience anonymisées, avec votre consentement.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Meta Platforms (Meta Pixel) :</span>{' '}
                            données de conversion publicitaires, avec votre consentement.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Autorités compétentes :</span>{' '}
                            en cas d'obligation légale ou de réquisition judiciaire.
                        </li>
                    </ul>
                </section>

                {/* Section 7 — Transferts hors UE */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        7. Transferts hors Union Européenne
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Certains de nos sous-traitants sont établis hors de l'Union Européenne, notamment :
                    </p>
                    <ul className="mt-4 space-y-3 text-gray-600 leading-relaxed">
                        <li>
                            <span className="font-medium text-brand-navy">Tunisie :</span> les données médicales et
                            administratives liées à votre prise en charge sont traitées en Tunisie par nos équipes
                            soignantes. La Tunisie a obtenu une reconnaissance partielle de protection adéquate par
                            la Commission européenne. Des garanties contractuelles complémentaires sont mises en
                            place (clauses contractuelles types de la Commission européenne).
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">États-Unis (Vercel, Google, Meta) :</span>{' '}
                            ces transferts sont encadrés par les clauses contractuelles types (CCT) adoptées par la
                            Commission européenne et par le cadre UE-États-Unis Data Privacy Framework, lorsque
                            le sous-traitant y est certifié.
                        </li>
                    </ul>
                </section>

                {/* Section 8 — Droits RGPD */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        8. Vos droits
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
                    </p>
                    <ul className="mt-4 space-y-3 text-gray-600 leading-relaxed">
                        <li>
                            <span className="font-medium text-brand-navy">Droit d'accès :</span>{' '}
                            obtenir une copie des données personnelles que nous détenons à votre sujet.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Droit de rectification :</span>{' '}
                            corriger des données inexactes ou incomplètes vous concernant.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Droit à l'effacement («&nbsp;droit à l'oubli&nbsp;») :</span>{' '}
                            demander la suppression de vos données, sous réserve de nos obligations légales de conservation.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Droit à la limitation du traitement :</span>{' '}
                            restreindre l'utilisation de vos données dans certains cas prévus par le RGPD.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Droit à la portabilité :</span>{' '}
                            recevoir vos données dans un format structuré et lisible par machine.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Droit d'opposition :</span>{' '}
                            vous opposer à un traitement fondé sur notre intérêt légitime, notamment à des fins de
                            prospection commerciale.
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Retrait du consentement :</span>{' '}
                            retirer à tout moment votre consentement aux cookies analytiques ou publicitaires, sans que
                            cela n'affecte la licéité du traitement antérieur.
                        </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">
                        Pour exercer l'un de ces droits, adressez une demande écrite à :{' '}
                        <a
                            href="mailto:contact@venus-estetika.com"
                            className="text-brand-blue font-medium hover:underline"
                        >
                            contact@venus-estetika.com
                        </a>
                        . Nous nous engageons à répondre dans un délai d'un (1) mois suivant la réception de votre
                        demande. En cas de réponse insatisfaisante, vous disposez du droit d'introduire une réclamation
                        auprès de l'autorité de contrôle compétente (en France : la CNIL — cnil.fr).
                    </p>
                </section>

                {/* Section 9 — Données médicales */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        9. Traitement des données médicales
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Les données de santé constituent une catégorie particulière de données personnelles bénéficiant
                        d'une protection renforcée au titre de l'article 9 du RGPD. Venus Estetika traite des données
                        médicales uniquement dans le cadre strict de la relation de soin, sur la base du consentement
                        explicite du patient ou de la nécessité médicale.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Les photos médicales avant/après que vous transmettez via nos formulaires sont utilisées
                        exclusivement pour l'évaluation préopératoire par nos chirurgiens. Elles ne sont jamais
                        publiées sans votre consentement écrit, daté et signé. L'accès à ces données est strictement
                        limité au personnel médical habilité, soumis au secret médical.
                    </p>
                </section>

                {/* Section 10 — Sécurité */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        10. Sécurité des données
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Venus Estetika met en œuvre des mesures techniques et organisationnelles appropriées pour
                        protéger vos données personnelles contre tout accès non autorisé, divulgation, altération
                        ou destruction :
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
                        <li>
                            Chiffrement des communications via le protocole <span className="font-medium">HTTPS / TLS 1.3</span> sur
                            l'ensemble du site.
                        </li>
                        <li>
                            Contrôle d'accès strict : seul le personnel autorisé peut accéder aux données patients,
                            via des comptes nominatifs et authentification à deux facteurs.
                        </li>
                        <li>
                            Sauvegardes automatiques et redondantes des données critiques, avec chiffrement au repos.
                        </li>
                        <li>
                            Surveillance des accès et journaux d'audit conservés 12 mois.
                        </li>
                        <li>
                            Procédure de notification en cas de violation de données, conformément à l'article 33 du RGPD
                            (notification à l'autorité de contrôle dans les 72 heures).
                        </li>
                    </ul>
                </section>

                {/* Section 11 — Modifications */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        11. Modifications de la présente politique
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Venus Estetika se réserve le droit de modifier la présente politique de confidentialité à tout
                        moment, notamment pour s'adapter aux évolutions réglementaires ou aux nouvelles pratiques de
                        traitement. La date de dernière mise à jour figurant en haut de ce document sera actualisée
                        à chaque révision.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        En cas de modification substantielle affectant vos droits, nous vous en informerons par email
                        si nous disposons de votre adresse, ou par un avis visible sur le site. Nous vous encourageons
                        à consulter régulièrement cette page.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Pour toute question relative à la présente politique, contactez-nous à :{' '}
                        <a
                            href="mailto:contact@venus-estetika.com"
                            className="text-brand-blue font-medium hover:underline"
                        >
                            contact@venus-estetika.com
                        </a>
                        . Voir également nos{' '}
                        <Link
                            href="/mentions-legales"
                            className="text-brand-blue font-medium hover:underline"
                        >
                            Mentions Légales
                        </Link>
                        .
                    </p>
                </section>

                {/* Bottom separator */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-sm text-center">
                        Venus Estetika — Lac Malaren, Les Berges du Lac, 1053 Tunis, Tunisie
                    </p>
                </div>

            </div>
        </div>
    );
}
