import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales — Venus Estetika",
    description: "Mentions légales du site venus-estetika.com. Informations légales, éditeur, hébergeur, propriété intellectuelle.",
    robots: "noindex, follow",
};

export default function MentionsLegalesPage() {
    return (
        <div className="mt-20 py-24 px-4 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">

                {/* Page header */}
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                    Mentions Légales
                </h1>
                <p className="text-gray-500 text-sm mb-12">
                    Dernière mise à jour : 21 février 2026
                </p>

                {/* Section 1 — Éditeur */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        1. Éditeur du site
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Le site <span className="font-medium text-brand-navy">venus-estetika.com</span> est édité par :
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600 leading-relaxed">
                        <li><span className="font-medium text-brand-navy">Dénomination :</span> Venus Estetika</li>
                        <li><span className="font-medium text-brand-navy">Adresse :</span> Lac Malaren, Les Berges du Lac, 1053 Tunis, Tunisie</li>
                        <li>
                            <span className="font-medium text-brand-navy">Téléphone :</span>{' '}
                            <a
                                href="tel:+21650606780"
                                className="text-brand-blue hover:underline"
                            >
                                +216 50 606 780
                            </a>
                        </li>
                        <li>
                            <span className="font-medium text-brand-navy">Email :</span>{' '}
                            <a
                                href="mailto:contact@venus-estetika.com"
                                className="text-brand-blue hover:underline"
                            >
                                contact@venus-estetika.com
                            </a>
                        </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Venus Estetika est une clinique spécialisée dans la chirurgie esthétique, bariatrique, dentaire
                        et la greffe capillaire, légalement constituée selon la législation tunisienne.
                    </p>
                </section>

                {/* Section 2 — Hébergement */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        2. Hébergement
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Le site est hébergé par :
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600 leading-relaxed">
                        <li><span className="font-medium text-brand-navy">Société :</span> Vercel Inc.</li>
                        <li><span className="font-medium text-brand-navy">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
                        <li>
                            <span className="font-medium text-brand-navy">Site web :</span>{' '}
                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue hover:underline"
                            >
                                vercel.com
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Section 3 — Propriété intellectuelle */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        3. Propriété intellectuelle
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        L'ensemble des éléments constituant le site venus-estetika.com — notamment les textes, photographies,
                        illustrations, vidéos, logos, graphismes, mises en page et architecture — est la propriété exclusive de
                        Venus Estetika ou de ses partenaires, et est protégé par les lois tunisiennes et internationales
                        relatives à la propriété intellectuelle.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou
                        partie des contenus du site, par quelque procédé que ce soit, sans l'autorisation écrite préalable de
                        Venus Estetika, est strictement interdite et constitue une contrefaçon sanctionnée par la loi.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Les marques et logos figurant sur le site sont des marques déposées. Leur utilisation sans
                        autorisation expresse engage la responsabilité civile et pénale de leur auteur.
                    </p>
                </section>

                {/* Section 4 — Limitation de responsabilité */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        4. Limitation de responsabilité
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Les informations publiées sur ce site ont un caractère purement informatif et général. Elles ne
                        sauraient en aucun cas se substituer à une consultation médicale personnalisée réalisée par un
                        professionnel de santé qualifié. Venus Estetika ne peut être tenu responsable des décisions prises
                        par l'utilisateur sur la base des seules informations contenues sur ce site.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Toute intervention chirurgicale comporte des risques inhérents. Seul un chirurgien qualifié, après
                        examen clinique complet et recueil du consentement éclairé du patient, est habilité à évaluer
                        l'opportunité d'une opération et à en informer le patient des bénéfices attendus et des risques
                        potentiels.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Venus Estetika s'efforce de maintenir le site accessible et les informations à jour, mais ne garantit
                        pas l'exactitude, l'exhaustivité ou l'actualité des contenus. L'éditeur se réserve le droit de
                        modifier les informations à tout moment et sans préavis.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Les liens hypertextes pointant vers d'autres sites web sont fournis à titre indicatif. Venus Estetika
                        n'exerce aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur contenu.
                    </p>
                </section>

                {/* Section 5 — Cookies */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        5. Cookies et données personnelles
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Ce site utilise des cookies afin d'améliorer l'expérience utilisateur et de mesurer l'audience.
                        Certains cookies sont strictement nécessaires au bon fonctionnement du site, d'autres
                        (analytiques, publicitaires) ne sont déposés qu'avec votre consentement explicite, conformément
                        au Règlement Général sur la Protection des Données (RGPD).
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Pour une information complète sur les cookies utilisés, les finalités du traitement et l'exercice
                        de vos droits, veuillez consulter notre{' '}
                        <Link
                            href="/politique-confidentialite"
                            className="text-brand-blue font-medium hover:underline"
                        >
                            Politique de Confidentialité
                        </Link>
                        .
                    </p>
                </section>

                {/* Section 6 — Droit applicable */}
                <section>
                    <h2 className="text-xl font-bold text-brand-navy mt-10 mb-4">
                        6. Droit applicable et juridiction compétente
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Les présentes mentions légales sont régies par le droit tunisien. En cas de litige relatif à
                        l'interprétation ou à l'exécution des présentes, et à défaut de résolution amiable, les
                        tribunaux compétents de Tunis seront seuls compétents.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Pour toute question ou réclamation, vous pouvez nous contacter par email à{' '}
                        <a
                            href="mailto:contact@venus-estetika.com"
                            className="text-brand-blue hover:underline"
                        >
                            contact@venus-estetika.com
                        </a>{' '}
                        ou par téléphone au{' '}
                        <a
                            href="tel:+21650606780"
                            className="text-brand-blue hover:underline"
                        >
                            +216 50 606 780
                        </a>
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
