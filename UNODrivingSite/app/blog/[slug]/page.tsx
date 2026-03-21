import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const supabase = await createClient();
    
    const { data: post, error } = await supabase
        .from('posts')
        .select('title, content')
        .eq('slug', slug)
        .eq('published', true)
        .single();
    
    if (error || !post) return { title: 'Not Found | UNO Driving School' };

    let metaDesc = `Read ${post.title} by UNO Driving School`;
    if (Array.isArray(post.content)) {
        const firstParagraph = post.content.find((b: any) => b.type === 'paragraph');
        if (firstParagraph) metaDesc = firstParagraph.text.substring(0, 160) + '...';
    }

    return {
        title: `${post.title} | UNO Driving School Blog`,
        description: metaDesc,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Validate slug format before hitting the database
    if (!/^[a-z0-9-]+$/.test(slug)) {
        notFound();
    }

    const supabase = await createClient();

    const { data: post, error } = await supabase
        .from('posts')
        .select('id, title, date, slug, blog_type, cover_image_url, content, published')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error || !post) {
        notFound();
    }

    // Helper to render the JSONB block array back into exact native HTML matching the legacy
    const renderContentBlock = (block: any, i: number) => {
        if (block.type === 'subheading') {
            return (
                <h3 key={i} className="font-bold text-2xl text-gray-900 mt-10 mb-4 uppercase tracking-wide">
                    {block.text}
                </h3>
            );
        } else if (block.type === 'paragraph') {
            return (
                <p key={i} className="text-gray-700 leading-relaxed mb-6">
                    {block.text}
                </p>
            );
        } else if (block.type === 'image') {
            return (
                <div key={i} className="my-8">
                    <img src={block.url} alt={block.alt || 'Blog Image'} className="w-full h-auto rounded-xl shadow-sm border border-gray-100 object-cover" />
                </div>
            );
        }
        return null;
    };

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* ── 1. Header / Hero ─────────────────────────────────────────── */}
            <div className="bg-background-alt border-b border-gray-200 py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6 tracking-wide">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>&rsaquo;</span>
                        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <span>&rsaquo;</span>
                        <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
                    </div>

                    <div className="flex flex-col items-center text-center mb-8">
                        <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-text-main uppercase leading-tight mb-6">
                            {post.title}
                        </h1>
                        <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-200">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs">{post.blog_type}</span>
                            <span>•</span>
                            <span className="font-medium">{post.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── 2. Content ─────────────────────────────────────────────── */}
            <div className="container mx-auto px-6 max-w-4xl -mt-8">
                {post.cover_image_url && (
                    <div className="w-full relative aspect-[2/1] md:aspect-[2.5/1] rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-12 bg-gray-100">
                        <Image
                            src={post.cover_image_url}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <article className="prose prose-lg max-w-none text-gray-700 prose-headings:font-anton prose-headings:font-normal prose-headings:uppercase prose-headings:text-text-main prose-a:text-primary prose-a:font-bold prose-img:rounded-xl">
                    {Array.isArray(post.content) && (() => {
                        let coverSkipped = false;
                        return post.content.map((block: any, i: number) => {
                            // Skip the first image block that matches cover_image_url
                            // since it's already displayed as the hero above
                            if (!coverSkipped && block.type === 'image' && block.url === post.cover_image_url) {
                                coverSkipped = true;
                                return null;
                            }
                            return renderContentBlock(block, i);
                        });
                    })()}
                </article>
            </div>
        </main>
    );
}
