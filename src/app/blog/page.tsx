import { ArrowRight, BookOpen, Calendar, ChevronRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Blog Chirurgie Esthétique & Actualités Médicales | Venus Estetika",
    description: "Découvrez nos articles d'experts sur la chirurgie esthétique, bariatrique et les greffes de cheveux en Tunisie. Conseils pré et post-opératoires.",
};

const MOCK_POSTS = [
    {
        id: 1,
        title: "Liposuccion Vaser vs Classique : Quelles différences ?",
        category: "Silhouette",
        excerpt: "Comprendre pourquoi la technologie Vaser est devenue la nouvelle norme pour l'aspiration des graisses tout en sculptant la haute définition abdominale.",
        date: "20 Février 2026",
        imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Sleeve Gastrique : Le guide de l'alimentation post-opératoire",
        category: "Obésité",
        excerpt: "Quelles sont les étapes de la réalimentation après une Sleeve Gastrectomie ? Du liquide au solide, suivez nos conseils nutritionnels.",
        date: "15 Février 2026",
        imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Greffe de cheveux FUE Saphir : Avantages et résultats",
        category: "Capillaire",
        excerpt: "Découvrez pourquoi la lame en Saphir a révolutionné l'ouverture des canaux folliculaires pour une densité maximale et aucune cicatrice.",
        date: "05 Février 2026",
        imageUrl: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1972&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Facettes E-Max vs Lumineers : Faut-il limer ses dents ?",
        category: "Dentaire",
        excerpt: "La grande question du Hollywood Smile décryptée. Le surfaçage ultra-léger de l'émail expliqué simplement par nos dentistes esthétiques.",
        date: "28 Janvier 2026",
        imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Combien de temps faut-il rester en Tunisie pour un lifting ?",
        category: "Visage",
        excerpt: "Détails du séjour de 6 jours nécessaire pour un lifting cervico-facial. Du bloc opératoire à votre hôtel de convalescence en bord de mer.",
        date: "12 Janvier 2026",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-brand-navy/90" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-sm mb-6">
                        <BookOpen className="w-4 h-4 text-brand-gold" />
                        Journal Médical
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
                        Actualités & Conseils <span className="text-brand-gold">Esthétiques</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Lisez nos articles rédigés par des experts médicaux. Tout savoir sur les opérations, les prix, et la préparation de votre séjour en Tunisie.
                    </p>
                </div>
            </section>

            {/* MAIN BLOG GRID */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">

                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                        <h2 className="text-3xl font-heading font-bold text-brand-navy">Derniers Articles</h2>
                        <div className="flex gap-2">
                            {["Tous", "Visage", "Silhouette", "Obésité", "Dentaire", "Capillaire"].map((cat) => (
                                <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === "Tous" ? "bg-brand-navy text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-brand-navy"}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOCK_POSTS.map((post) => (
                            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2">
                                        <Link href="#" className="hover:text-brand-gold transition-colors">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                                        <Link href="#" className="text-brand-navy font-bold text-sm inline-flex items-center group/link">
                                            Lire l'article
                                            <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                        <span className="text-xs text-gray-400">5 min lecture</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full">
                            Charger plus d'articles
                        </Button>
                    </div>

                </div>
            </section>
        </div>
    );
}
