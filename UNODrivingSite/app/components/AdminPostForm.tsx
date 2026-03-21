'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export type BlockTypes = 'paragraph' | 'subheading' | 'image';

export interface ContentBlock {
  type: BlockTypes;
  text?: string;
  url?: string;
  alt?: string;
}

export interface AdminPostFormProps {
  initialData?: {
    id: string;
    title: string;
    date: string;
    blog_type: string;
    slug: string;
    cover_image_url: string;
    content: ContentBlock[];
    published: boolean;
  };
}

export default function AdminPostForm({ initialData }: AdminPostFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState(initialData?.title || '');
  const [date, setDate] = useState(initialData?.date || '');
  const [blogType, setBlogType] = useState(initialData?.blog_type || 'Tips and Trick');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [published, setPublished] = useState(initialData?.published || false);
  const [blocks, setBlocks] = useState<ContentBlock[]>(initialData?.content || []);
  const [loading, setLoading] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!initialData) {
      setSlug(
        newTitle
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_]+/g, '-')
          .replace(/^-+|-+$/g, '')
      );
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, blockIndex: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate MIME type
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!ALLOWED_TYPES.includes(file.type)) {
      alert('Only JPEG, PNG, WebP, and GIF images are allowed.');
      e.target.value = '';
      return;
    }

    // Validate file size (5MB max)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      alert('Image must be under 5MB.');
      e.target.value = '';
      return;
    }

    // Create uniquely named file
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file);
      
    if (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload image. Please check your storage policies.');
      return;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage.from('blog-images').getPublicUrl(fileName);

    const newBlocks = [...blocks];
    newBlocks[blockIndex] = { ...newBlocks[blockIndex], url: publicUrl, alt: 'Blog Image' };
    setBlocks(newBlocks);
  };

  // Block builders
  const addBlock = (type: BlockTypes) => setBlocks([...blocks, { type, text: '' }]);
  const updateBlock = (index: number, updates: Partial<ContentBlock>) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], ...updates };
    setBlocks(newBlocks);
  };
  const removeBlock = (index: number) => setBlocks(blocks.filter((_, i) => i !== index));
  const moveBlock = (index: number, up: boolean) => {
    if ((up && index === 0) || (!up && index === blocks.length - 1)) return;
    const newBlocks = [...blocks];
    const swapWith = up ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[swapWith]] = [newBlocks[swapWith], newBlocks[index]];
    setBlocks(newBlocks);
  };

  const getFirstImageFromContent = (contentBlocks: ContentBlock[]) => {
    const firstImage = contentBlocks.find(b => b.type === 'image' && b.url != null);
    return firstImage ? firstImage.url : null;
  };

  const submitForm = async (e: React.FormEvent, asPublished: boolean) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      title,
      date,
      blog_type: blogType,
      slug,
      cover_image_url: getFirstImageFromContent(blocks),
      content: blocks,
      published: asPublished
    };

    if (initialData) {
      const { error } = await supabase.from('posts').update(payload).eq('id', initialData.id);
      if (error) alert(error.message);
      else router.push('/admin/blog');
    } else {
      const { error } = await supabase.from('posts').insert([payload]);
      if (error) alert(error.message);
      else router.push('/admin/blog');
    }
    
    setLoading(false);
    router.refresh(); // Tell Next.js routing cache that data changed natively
  };

  return (
    <form className="max-w-5xl space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm space-y-6">
        <h2 className="text-xl font-bold border-b pb-4 mb-4">Post Meta</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input required type="text" value={title} onChange={handleTitleChange} className="w-full border p-2.5 rounded text-sm"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input required type="text" value={slug} onChange={e => setSlug(e.target.value)} className="w-full border p-2.5 rounded text-sm"/>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input required type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border p-2.5 rounded text-sm"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category / Type</label>
            <select value={blogType} onChange={e => setBlogType(e.target.value)} className="w-full border p-2.5 rounded text-sm">
              <option value="Tips and Trick">Tips and Trick</option>
              <option value="News & Events">News & Events</option>
              <option value="Guide">Guide</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm space-y-6">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-bold">Content Blocks</h2>
          <div className="space-x-2">
            <button type="button" onClick={() => addBlock('subheading')} className="bg-gray-100 px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-200">+ Subheading</button>
            <button type="button" onClick={() => addBlock('paragraph')} className="bg-gray-100 px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-200">+ Paragraph</button>
            <button type="button" onClick={() => addBlock('image')} className="bg-gray-100 px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-200">+ Image</button>
          </div>
        </div>

        <div className="space-y-4">
          {blocks.length === 0 && <p className="text-gray-400 text-center py-8">No content blocks yet. Add one above.</p>}
          {blocks.map((block, index) => (
            <div key={index} className="flex gap-4 p-4 border rounded bg-gray-50 items-start">
              <div className="flex flex-col gap-1 items-center mt-2">
                <button type="button" onClick={() => moveBlock(index, true)} className="text-gray-400 hover:text-black">↑</button>
                <button type="button" onClick={() => moveBlock(index, false)} className="text-gray-400 hover:text-black">↓</button>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{block.type}</span>
                  <button type="button" onClick={() => removeBlock(index)} className="text-xs text-red-500 hover:underline">Remove</button>
                </div>
                
                {block.type === 'subheading' && (
                  <input type="text" placeholder="H3 Subheading..." value={block.text || ''} onChange={e => updateBlock(index, { text: e.target.value })} className="w-full border p-2 rounded text-lg font-bold" />
                )}
                
                {block.type === 'paragraph' && (
                  <textarea rows={4} placeholder="Paragraph content..." value={block.text || ''} onChange={e => updateBlock(index, { text: e.target.value })} className="w-full border p-2 rounded text-sm" />
                )}

                {block.type === 'image' && (
                  <div className="space-y-2">
                     {block.url ? (
                       <img src={block.url} alt="Block img" className="h-40 object-cover rounded border" />
                     ) : (
                       <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, index)} className="text-sm" />
                     )}
                     <input type="text" placeholder="Image Alt Text" value={block.alt || ''} onChange={e => updateBlock(index, { alt: e.target.value })} className="w-full border p-2 rounded text-sm" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4 pb-20">
        <button 
          type="button" 
          disabled={loading}
          onClick={(e) => submitForm(e, false)} 
          className="px-6 py-2.5 rounded font-bold border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition"
        >
          {loading ? 'Saving...' : 'Save as Draft'}
        </button>
        <button 
          type="button" 
          disabled={loading}
          onClick={(e) => submitForm(e, true)} 
          className="px-8 py-2.5 rounded font-bold bg-primary text-white hover:bg-green-600 transition"
        >
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </form>
  );
}
