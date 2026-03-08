import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import { blogPosts } from "@/app/data/blog-posts";

// Define params type for Next.js 15/14
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <PageHeader
                title={post.title} // Title might be long, PageHeader handles wrapping
                subtitle={`${post.date} • ${post.category}`}
            />

            <article className="container mx-auto px-6 py-12 max-w-4xl">
                {/* Back Link */}
                <div className="mb-8">
                    <Link href="/blog" className="text-primary hover:underline flex items-center gap-2 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blog
                    </Link>
                </div>
                {/* Featured Image */}
                {post.imageUrl && (
                    <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {post.content.map((paragraph, index) => {
                        // Simple check for headings
                        if (paragraph.startsWith("### ")) {
                            return (
                                <h3 key={index} className="text-2xl font-anton mt-8 mb-4 text-gray-900">
                                    {paragraph.replace("### ", "")}
                                </h3>
                            );
                        }
                        return (
                            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                                {paragraph}
                            </p>
                        );
                    })}
                </div>

                {/* Sidebar / Recent Posts Section (Simulated based on design request) */}
                <div className="mt-16 pt-8 border-t">
                    <h3 className="font-anton text-2xl mb-6">Recent Posts</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {blogPosts
                            .filter((p) => p.id !== post.id)
                            .slice(0, 2)
                            .map((recentPost) => (
                                <Link
                                    key={recentPost.id}
                                    href={`/blog/${recentPost.slug}`}
                                    className="group block p-4 border rounded-lg hover:border-primary transition-colors"
                                >
                                    <h4 className="font-bold group-hover:text-primary transition-colors mb-2">{recentPost.title}</h4>
                                    <span className="text-sm text-gray-500">{recentPost.date}</span>
                                </Link>
                            ))}
                    </div>
                </div>
            </article>
        </main>
    );
}
