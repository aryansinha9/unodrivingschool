import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import { createClient } from "@/lib/supabase/server";

export const dynamic = 'force-dynamic';

export default async function Blog() {
    const supabase = await createClient();

    // Only fetch published posts
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, blog_type, date, excerpt:content, cover_image_url')
        .eq('published', true)
        .order('created_at', { ascending: false });

    const parseExcerpt = (content: any) => {
        try {
            if (Array.isArray(content)) {
                const firstParagraph = content.find((block: any) => block.type === 'paragraph');
                if (firstParagraph && firstParagraph.text) {
                    return firstParagraph.text.length > 150 
                        ? firstParagraph.text.substring(0, 150) + '...'
                        : firstParagraph.text;
                }
            }
        } catch (e) {
            return null;
        }
        return null;
    };

    return (
        <main className="min-h-screen">
            <PageHeader
                title="Blog"
                subtitle="Tips, tricks, and news from the road."
            />
            <section className="container mx-auto px-6 py-12">
                {error || !posts ? (
                    <div className="text-center text-gray-500 py-12">
                        Unable to load blog posts at this time.
                    </div>
                ) : posts.length === 0 ? (
                    <div className="text-center text-gray-500 py-12">
                        No published blog posts yet. Check back soon!
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                {/* Featured Image */}
                                <div className="relative aspect-video w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                    {post.cover_image_url ? (
                                        <img
                                            src={post.cover_image_url}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <span className="font-anton text-2xl opacity-20 text-gray-400">UNO</span>
                                    )}
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">{post.blog_type}</span>
                                        <span>•</span>
                                        <span className="whitespace-nowrap">{post.date}</span>
                                    </div>
                                    <h2 className="font-anton text-xl mb-3 leading-tight line-clamp-2">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    {parseExcerpt(post.excerpt) && (
                                        <p className="text-gray-600 mb-4 text-sm flex-grow">
                                            {parseExcerpt(post.excerpt)}
                                        </p>
                                    )}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center font-medium text-primary hover:text-green-700 transition-colors mt-auto"
                                    >
                                        Read Article
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
