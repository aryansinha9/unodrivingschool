import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import {
  getPageContent,
  homepageDefaults,
  aboutUsDefaults,
  pricesDefaults,
} from '@/lib/supabase/pageContent';
import PageContentForm from '@/app/components/PageContentForm';

export const dynamic = 'force-dynamic';

const ALLOWED_PAGES = ['homepage', 'about-us', 'prices'] as const;
type AllowedPage = (typeof ALLOWED_PAGES)[number];

function isAllowed(id: string): id is AllowedPage {
  return (ALLOWED_PAGES as readonly string[]).includes(id);
}

const PAGE_LABELS: Record<AllowedPage, string> = {
  'homepage': 'Homepage',
  'about-us': 'About Us',
  'prices': 'Prices',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
async function getDefaults(pageId: AllowedPage): Promise<Record<string, any>> {
  switch (pageId) {
    case 'homepage':  return homepageDefaults as Record<string, any>;
    case 'about-us':  return aboutUsDefaults  as Record<string, any>;
    case 'prices':    return pricesDefaults    as Record<string, any>;
  }
}

export default async function PageContentEditor({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) {
  const { pageId } = await params;

  if (!isAllowed(pageId)) notFound();

  const defaults = await getDefaults(pageId);
  const supabase = await createClient();
  const { data } = await supabase
    .from('page_content')
    .select('content')
    .eq('page_id', pageId)
    .single();

  // Merge saved data on top of defaults
  const initialData: Record<string, any> = {
    ...defaults,
    ...(data?.content && typeof data.content === 'object' ? data.content : {}),
  };

  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <a
          href="/admin/page-content"
          className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1"
        >
          &larr; Page Content
        </a>
        <span className="text-gray-300">/</span>
        <h1 className="text-2xl font-bold text-gray-900">{PAGE_LABELS[pageId]}</h1>
      </div>

      <PageContentForm pageId={pageId} initialData={initialData} defaults={defaults} />
    </div>
  );
}
