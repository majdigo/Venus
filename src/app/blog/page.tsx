import { getAllPosts, getCategories } from '@/lib/api/sanity-blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { TrackedLink } from '@/components/tracking/TrackedLink';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog Chirurgie Esthétique & Conseils | Venus Estetika',
    description: 'Découvrez tous nos conseils en chirurgie esthétique, bariatrique et soins capillaires en Tunisie. Articles rédigés par nos chirurgiens experts.',
    alternates: {
        canonical: 'https://venus-estetika.com/blog',
    },
};

export default async function BlogIndexPage() {
    const posts = await getAllPosts();
    const categories = await getCategories();

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="mb-16">
                    <TrackedLink href="/" ctaText="Retour à l'accueil" ctaLocation="blog-index-header" className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-navy transition-colors mb-6 pb-2 border-b border-transparent hover:border-brand-navy">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour à l&apos;accueil
                    </TrackedLink>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-navy mb-6 leading-tight">
                        Le Blog <span className="text-brand-blue">Venus Estetika</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                        Conseils d&apos;experts, nouveautés médicales et guides complets pour préparer votre séjour médical en Tunisie. L&apos;information médicale fiable, par des chirurgiens reconnus.
                    </p>
                </div>

                {/* Main Content: Posts Grid */}
                <div className="grid lg:grid-cols-4 gap-12 items-start">
                    {/* Categories Sidebar (Desktop) */}
                    <div className="hidden lg:block space-y-8 sticky top-32">
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-xl mb-4">Catégories</h3>
                            <div className="flex flex-col gap-2">
                                <TrackedLink href="/blog" ctaText="Tous les articles" ctaLocation="blog-sidebar-categories" className="text-brand-blue font-medium py-2 px-3 bg-brand-navy/5 rounded-lg transition-colors">
                                    Tous les articles
                                </TrackedLink>
                                {categories.map((cat) => (
                                    <TrackedLink
                                        key={cat._id}
                                        href={`/blog?category=${cat.title.toLowerCase()}`}
                                        ctaText={cat.title}
                                        ctaLocation="blog-sidebar-categories"
                                        className="text-gray-600 hover:text-brand-navy hover:bg-slate-50 font-medium py-2 px-3 rounded-lg transition-colors"
                                    >
                                        {cat.title}
                                    </TrackedLink>
                                ))}
                            </div>
                        </div>

                        {/* CTA Widget */}
                        <div className="bg-gradient-to-br from-brand-navy to-[#1e3a5f] rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
                            <h3 className="font-bold text-xl mb-3">Un projet esthétique ?</h3>
                            <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                Obtenez un diagnostic gratuit et un devis personnalisé sous 24h par notre équipe médicale.
                            </p>
                            <Button asChild className="w-full bg-white text-brand-navy hover:bg-slate-50 transition-colors">
                                <TrackedLink href="/devis" ctaText="Demander un devis" ctaLocation="blog-sidebar-cta">
                                    Demander un devis
                                </TrackedLink>
                            </Button>
                        </div>
                    </div>

                    {/* Posts Grid */}
                    <div className="lg:col-span-3">
                        {posts.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-8">
                                {posts.map((post) => (
                                    <div key={post._id} className="h-full">
                                        <BlogCard post={post} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl border border-gray-100 p-16 text-center shadow-sm">
                                <div className="w-20 h-20 bg-brand-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-brand-navy mb-4">Blog en construction</h3>
                                <p className="text-gray-600 text-lg">
                                    Nos chirurgiens préparent actuellement les premiers articles. Revenez très bientôt pour découvrir nos conseils exclusifs.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
