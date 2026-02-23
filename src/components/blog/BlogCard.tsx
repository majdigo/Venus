import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { SanityPost } from '@/lib/api/sanity-blog';

export function BlogCard({ post }: { post: SanityPost }) {
    return (
        <Link href={`/blog/${post.slug.current}`} className="group block h-full">
            <article className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    {post.mainImage ? (
                        <Image
                            src={typeof post.mainImage === 'string' ? post.mainImage : '/images/placeholder-blog.jpg'}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            Sans image
                        </div>
                    )}
                    {/* Category Tags */}
                    {post.categories && post.categories.length > 0 && (
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                            {post.categories.map((cat) => (
                                <span key={cat._id} className="bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                    {cat.title}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                        {post.author && (
                            <div className="flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5" />
                                <span>{post.author.name}</span>
                            </div>
                        )}
                    </div>

                    {/* Title & Excerpt */}
                    <h2 className="text-xl font-bold font-heading text-brand-navy mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3 mb-6 text-sm flex-grow">
                        {post.excerpt || "Découvrez notre nouvel article sur le blog de Venus Estetika."}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-auto flex items-center text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors">
                        Lire l&apos;article
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </article>
        </Link>
    );
}
