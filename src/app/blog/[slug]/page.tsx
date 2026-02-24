import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '@/lib/api/sanity-blog';
import { TrackedLink } from '@/components/tracking/TrackedLink';
import { ReadingProgressBar } from '@/components/blog/ReadingProgressBar';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JsonLd } from '@/components/seo/JsonLd';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: 'Article introuvable | Venus Estetika' };
    }

    return {
        title: `${post.title} | Blog Venus Estetika`,
        description: post.excerpt || `Découvrez l'article : ${post.title}`,
        alternates: {
            canonical: `https://venus-estetika.com/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: post.author ? [post.author.name] : [],
            images: post.mainImage ? [{ url: typeof post.mainImage === 'string' ? post.mainImage : '' }] : [],
        },
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug.current,
    }));
}

/* ─────────────────────────────────────────────────────────
   Static article content — keyed by slug.
   When Sanity CMS is connected (Sprint 4), replace with
   PortableText rendering.
   ───────────────────────────────────────────────────────── */
function ArticleContent({ slug }: { slug: string }) {
    switch (slug) {
        case 'rhinoplastie-tunisie-guide':
            return <RhinoplastieArticle />;
        case 'sleeve-gastrique-prix-tunisie':
            return <SleeveArticle />;
        case 'greffe-cheveux-fue-tunisie':
            return <GreffeArticle />;
        default:
            return (
                <p className="text-gray-500 italic text-center py-20">
                    Le contenu de cet article n&apos;est pas encore disponible.
                </p>
            );
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `https://venus-estetika.com/blog/${slug}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        inLanguage: 'fr-FR',
        image: typeof post.mainImage === 'string' ? `https://venus-estetika.com${post.mainImage}` : undefined,
        author: post.author ? {
            '@type': 'Person',
            name: post.author.name,
        } : undefined,
        publisher: {
            '@type': 'Organization',
            name: 'Venus Estetika',
            url: 'https://venus-estetika.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://venus-estetika.com/images/logo/logo-venus-estetika.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://venus-estetika.com/blog/${slug}`,
        },
    };

    return (
        <>
            <ReadingProgressBar />
            <JsonLd data={articleSchema} />
            <article className="min-h-screen bg-slate-50 pt-32 pb-24">
                {/* Header */}
                <header className="container mx-auto px-4 max-w-4xl mb-12">
                    <TrackedLink href="/blog" ctaText="Retour au blog" ctaLocation="blog-article-header" className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-navy transition-colors mb-8 pb-2 border-b border-transparent hover:border-brand-navy">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour au blog
                    </TrackedLink>

                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.categories.map(cat => (
                                <span key={cat._id} className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-sm">
                                    {cat.title}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-navy leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-y border-gray-200 py-4 mb-12">
                        {post.author && (
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                    <User className="w-5 h-5 text-brand-blue" />
                                </div>
                                <span className="font-medium text-brand-navy">{post.author.name}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-brand-blue" />
                            <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-brand-blue" />
                            <span>Lecture : ~5 min</span>
                        </div>
                    </div>

                    {post.mainImage && typeof post.mainImage === 'string' && (
                        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl mb-16">
                            <Image
                                src={post.mainImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 1024px"
                            />
                        </div>
                    )}
                </header>

                {/* Body */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <div className="prose prose-lg prose-headings:font-heading prose-a:text-brand-blue hover:prose-a:text-brand-navy max-w-none">
                            <ArticleContent slug={slug} />
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-16 bg-brand-navy rounded-3xl p-10 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 relative z-10">
                            Prêt à franchir le pas ?
                        </h3>
                        <p className="text-brand-blue/90 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Nos chirurgiens experts sont à votre disposition pour une téléconsultation gratuite. Obtenez un diagnostic personnalisé et un devis détaillé.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <Button variant="cta" size="cta" asChild className="hover:bg-white hover:text-brand-navy">
                                <TrackedLink href="/devis" ctaText="Obtenir mon devis gratuit" ctaLocation="blog-article-cta">
                                    Obtenir mon devis gratuit
                                </TrackedLink>
                            </Button>
                            <Button variant="ctaOutline" size="cta" asChild className="backdrop-blur-sm">
                                <TrackedLink href="/contact" ctaText="Nous contacter" ctaLocation="blog-article-cta">
                                    Nous contacter
                                </TrackedLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

/* ═══════════════════════════════════════════════════════════
   STATIC ARTICLE BODIES
   ═══════════════════════════════════════════════════════════ */

function RhinoplastieArticle() {
    return (
        <>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La rhinoplastie est l&apos;une des interventions de chirurgie esthétique les plus demandées au monde. En Tunisie, elle est réalisée par des chirurgiens de renommée internationale, formés dans les meilleures universités européennes, à un tarif jusqu&apos;à <strong className="text-brand-navy">60 % inférieur</strong> aux prix pratiqués en France ou en Suisse.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Pourquoi choisir la Tunisie pour une rhinoplastie ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Tunisie s&apos;est imposée comme une destination de référence pour le tourisme médical grâce à la qualité de ses infrastructures hospitalières, le niveau d&apos;expertise de ses chirurgiens et un rapport qualité-prix exceptionnel. Les cliniques partenaires de Venus Estetika sont certifiées aux normes internationales JCI et disposent d&apos;équipements de dernière génération.
            </p>
            <ul className="list-none space-y-3 mb-8 ml-4">
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Chirurgiens certifiés :</strong> Diplômés en France, Belgique ou Suisse avec 10 à 25 ans d&apos;expérience</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Cliniques aux normes :</strong> Blocs opératoires ISO 7, anesthésie-réanimation 24h/24</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Séjour tout inclus :</strong> Clinique + hôtel 5 étoiles + transferts + accompagnement</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Économie substantielle :</strong> 2 200 € tout inclus contre 5 500 € en France (hors hospitalisation)</span>
                </li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Les techniques de rhinoplastie proposées
            </h2>
            <h3 className="text-2xl font-heading font-bold text-brand-navy mt-8 mb-4">Rhinoplastie ouverte</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La technique ouverte offre une visibilité maximale au chirurgien. Elle est privilégiée pour les corrections complexes (bosse importante, déviation septale, pointe tombante). L&apos;incision columellaire est quasi invisible après cicatrisation complète (6 à 12 mois).
            </p>

            <h3 className="text-2xl font-heading font-bold text-brand-navy mt-8 mb-4">Rhinoplastie fermée (endonasale)</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Toutes les incisions sont réalisées à l&apos;intérieur des narines. Cette approche convient aux corrections modérées et offre une récupération plus rapide. Aucune cicatrice externe visible.
            </p>

            <h3 className="text-2xl font-heading font-bold text-brand-navy mt-8 mb-4">Rhinoplastie ultrasonique (Piezo)</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Technique de pointe utilisant des ultrasons pour sculpter l&apos;os nasal avec une précision millimétrique. Moins de bleus, moins de gonflement, récupération accélérée. Disponible chez Venus Estetika avec le Dr. Bouzid.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Déroulement de votre séjour
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Votre séjour de rhinoplastie avec Venus Estetika dure en moyenne <strong className="text-brand-navy">5 à 7 jours</strong> :
            </p>
            <ol className="list-decimal text-lg text-gray-700 space-y-2 mb-8 ml-6">
                <li><strong className="text-brand-navy">Téléconsultation gratuite</strong> — Échange vidéo avec votre chirurgien, analyse de vos photos, simulation 3D du résultat</li>
                <li><strong className="text-brand-navy">Jour 1 : Arrivée</strong> — Accueil VIP à l&apos;aéroport, transfert à l&apos;hôtel, visite de la clinique</li>
                <li><strong className="text-brand-navy">Jour 2 : Bilan préopératoire</strong> — Examen clinique, analyses sanguines, validation du plan opératoire</li>
                <li><strong className="text-brand-navy">Jour 3 : Opération</strong> — Intervention sous anesthésie générale (1h30 à 2h30), nuit en clinique</li>
                <li><strong className="text-brand-navy">Jours 4-6 : Récupération</strong> — Convalescence à l&apos;hôtel avec visites de contrôle quotidiennes</li>
                <li><strong className="text-brand-navy">Jour 7 : Retour</strong> — Retrait de l&apos;attelle, dernière consultation, transfert aéroport</li>
            </ol>

            <blockquote className="border-l-4 border-brand-blue pl-6 py-2 my-8 italic text-xl text-gray-600 bg-brand-navy/5 rounded-r-lg">
                &laquo; Le Dr. Bouzid a transformé mon nez tout en gardant un résultat naturel. Je ne regrette rien de cette expérience en Tunisie. &raquo; — Sophie, 32 ans, Lyon
            </blockquote>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Prix de la rhinoplastie en Tunisie
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chez Venus Estetika, le tarif tout inclus pour une rhinoplastie est de <strong className="text-brand-navy">2 200 €</strong>, comprenant les honoraires chirurgien et anesthésiste, les frais de clinique, l&apos;hébergement en hôtel 5 étoiles (5 nuits), les transferts aéroport-clinique-hôtel et le suivi postopératoire 12 mois.
            </p>
        </>
    );
}

function SleeveArticle() {
    return (
        <>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La sleeve gastrique (gastrectomie longitudinale) est l&apos;intervention bariatrique la plus pratiquée dans le monde. En Tunisie, cette opération est réalisée par des chirurgiens spécialistes de l&apos;obésité dans des cliniques aux normes internationales, pour un <strong className="text-brand-navy">tarif jusqu&apos;à 70 % inférieur</strong> aux prix européens.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Qu&apos;est-ce que la sleeve gastrique ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La sleeve consiste à retirer environ <strong className="text-brand-navy">75 à 80 %</strong> de l&apos;estomac pour lui donner la forme d&apos;un tube. L&apos;estomac résiduel a une capacité de 100 à 150 ml, ce qui réduit considérablement la quantité de nourriture ingérée et diminue la production de ghréline, l&apos;hormone de la faim.
            </p>
            <ul className="list-none space-y-3 mb-8 ml-4">
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Technique :</strong> Cœlioscopie (3-5 micro-incisions), durée 45 min à 1h30</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Perte de poids :</strong> 25 à 35 kg sur 12 à 18 mois (60-70 % de l&apos;excès de poids)</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Comorbidités résolues :</strong> Diabète type 2, apnée du sommeil, hypertension dans 70 % des cas</span>
                </li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Critères d&apos;éligibilité
            </h2>
            <ul className="list-none space-y-3 mb-8 ml-4">
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span>IMC supérieur à 40 (obésité morbide)</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span>IMC supérieur à 35 avec comorbidités (diabète, HTA, apnée)</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span>Échec documenté des régimes et traitements médicaux</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span>Âge compris entre 18 et 65 ans</span>
                </li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Déroulement de votre séjour
            </h2>
            <ol className="list-decimal text-lg text-gray-700 space-y-2 mb-8 ml-6">
                <li><strong className="text-brand-navy">Téléconsultation gratuite</strong> — Évaluation IMC, antécédents médicaux, objectifs de perte de poids</li>
                <li><strong className="text-brand-navy">Jour 1 : Arrivée</strong> — Accueil VIP, transfert hôtel, bilan sanguin complet</li>
                <li><strong className="text-brand-navy">Jour 2 : Préopératoire</strong> — Fibroscopie gastrique, consultation anesthésiste et nutritionniste</li>
                <li><strong className="text-brand-navy">Jour 3 : Opération</strong> — Sleeve sous cœlioscopie, 2 nuits en clinique</li>
                <li><strong className="text-brand-navy">Jours 4-5 : Récupération</strong> — Reprise alimentation liquide, visites de contrôle</li>
                <li><strong className="text-brand-navy">Jour 6 : Retour</strong> — Consultation de sortie, programme nutritionnel, transfert aéroport</li>
            </ol>

            <blockquote className="border-l-4 border-brand-blue pl-6 py-2 my-8 italic text-xl text-gray-600 bg-brand-navy/5 rounded-r-lg">
                &laquo; J&apos;ai perdu 32 kg en 8 mois après ma sleeve en Tunisie. L&apos;équipe de Venus Estetika m&apos;a accompagnée avant, pendant et après. Ma vie a changé. &raquo; — Fatima, 41 ans, Bruxelles
            </blockquote>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Prix de la sleeve gastrique en Tunisie
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le tarif tout inclus chez Venus Estetika est de <strong className="text-brand-navy">4 200 €</strong>, contre 12 000 à 15 000 € en France. Ce prix comprend les honoraires chirurgien + anesthésiste, 2 nuits en clinique, hôtel 5 étoiles (4 nuits), transferts et programme nutritionnel 6 mois avec suivi postopératoire 12 mois.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Alimentation après la sleeve
            </h2>
            <ol className="list-decimal text-lg text-gray-700 space-y-2 mb-8 ml-6">
                <li><strong className="text-brand-navy">Semaines 1-2 :</strong> Alimentation liquide (bouillons, jus, compléments protéinés)</li>
                <li><strong className="text-brand-navy">Semaines 3-4 :</strong> Alimentation mixée (purées, yaourts, soupes épaisses)</li>
                <li><strong className="text-brand-navy">Semaines 5-8 :</strong> Alimentation molle (poisson, œufs, légumes cuits)</li>
                <li><strong className="text-brand-navy">Après 2 mois :</strong> Alimentation normale adaptée (petites portions, mastication lente)</li>
            </ol>
        </>
    );
}

function GreffeArticle() {
    return (
        <>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La greffe de cheveux FUE (Follicular Unit Extraction) est la technique la plus avancée pour traiter la calvitie. La Tunisie est devenue une destination de premier plan pour cette intervention, offrant des résultats naturels et durables à un <strong className="text-brand-navy">tarif 50 à 65 % inférieur</strong> aux prix européens.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Qu&apos;est-ce que la technique FUE ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La FUE consiste à prélever des unités folliculaires (groupes de 1 à 4 cheveux) une par une dans la zone donneuse à l&apos;aide d&apos;un micro-punch de 0,7 à 0,9 mm. Les greffons sont ensuite implantés dans les zones dégarnies selon un plan de densité personnalisé.
            </p>
            <ul className="list-none space-y-3 mb-8 ml-4">
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Sans cicatrice linéaire :</strong> Contrairement à la FUT, la FUE ne laisse aucune cicatrice visible</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Résultats naturels :</strong> Implantation cheveu par cheveu avec respect de l&apos;angle de pousse</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Résultats définitifs :</strong> Les cheveux greffés ne tombent plus (résistants à la DHT)</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Récupération rapide :</strong> Retour aux activités normales en 5 à 7 jours</span>
                </li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                FUE classique vs. DHI
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La technique <strong className="text-brand-navy">DHI</strong> (Direct Hair Implantation) utilise un stylo implanteur Choi pour une implantation directe sans pré-incisions. Venus Estetika propose les deux options :
            </p>
            <ul className="list-none space-y-3 mb-8 ml-4">
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">FUE classique :</strong> Idéale pour les grandes surfaces (3 000+ greffons)</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">DHI :</strong> Idéale pour les zones de densification et la ligne frontale</span>
                </li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Déroulement de votre greffe en Tunisie
            </h2>
            <ol className="list-decimal text-lg text-gray-700 space-y-2 mb-8 ml-6">
                <li><strong className="text-brand-navy">Téléconsultation gratuite</strong> — Analyse calvitie (échelle Norwood), estimation greffons, simulation résultat</li>
                <li><strong className="text-brand-navy">Jour 1 : Arrivée</strong> — Accueil VIP, installation hôtel, kit préopératoire</li>
                <li><strong className="text-brand-navy">Jour 2 : Greffe FUE</strong> — Sous anesthésie locale (4 à 8 heures), retour hôtel le soir même</li>
                <li><strong className="text-brand-navy">Jour 3 : Premier contrôle</strong> — Vérification des greffons, instructions soins</li>
                <li><strong className="text-brand-navy">Jour 4 : Premier lavage</strong> — Shampoing spécial en clinique, démonstration soins quotidiens</li>
                <li><strong className="text-brand-navy">Jour 5 : Retour</strong> — Dernière consultation, kit soins 1 mois, transfert aéroport</li>
            </ol>

            <blockquote className="border-l-4 border-brand-blue pl-6 py-2 my-8 italic text-xl text-gray-600 bg-brand-navy/5 rounded-r-lg">
                &laquo; 3 500 greffons implantés en une seule séance. 10 mois plus tard, mes cheveux sont denses et naturels. Je recommande Venus Estetika à 100 %. &raquo; — Marc, 38 ans, Genève
            </blockquote>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Prix de la greffe de cheveux en Tunisie
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chez Venus Estetika, le tarif FUE tout inclus commence à <strong className="text-brand-navy">1 800 €</strong> (jusqu&apos;à 2 000 greffons) et <strong className="text-brand-navy">2 500 €</strong> pour les méga-séances (3 000 à 5 000 greffons). Comprend : honoraires chirurgien, anesthésie locale, hôtel 5 étoiles (3 nuits), transferts, kit soins et traitement PRP offert.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-navy mt-12 mb-6">
                Résultats : calendrier de repousse
            </h2>
            <ul className="list-none space-y-3 mb-8 ml-4">
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Mois 1-3 :</strong> Chute des cheveux greffés (normale) — le bulbe reste en place</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Mois 3-6 :</strong> Début de la repousse, cheveux fins et clairs</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Mois 6-9 :</strong> Cheveux plus épais, densité visible</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 leading-relaxed">
                    <span className="text-brand-blue mr-3 mt-1.5">•</span>
                    <span><strong className="text-brand-navy">Mois 10-12 :</strong> Résultat final — densité maximale, aspect naturel</span>
                </li>
            </ul>
        </>
    );
}
