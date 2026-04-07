'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

const ALLOWED_PAGES = ['homepage', 'about-us', 'prices'] as const;
type AllowedPage = (typeof ALLOWED_PAGES)[number];

function isAllowedPage(pageId: string): pageId is AllowedPage {
  return (ALLOWED_PAGES as readonly string[]).includes(pageId);
}

export async function savePageContent(
  pageId: string,
  content: Record<string, unknown>
): Promise<{ ok: boolean; error?: string }> {
  if (!isAllowedPage(pageId)) {
    return { ok: false, error: 'This page is not editable.' };
  }

  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { ok: false, error: 'Unauthenticated.' };
  }

  const { error } = await supabase
    .from('page_content')
    .upsert(
      { page_id: pageId, content, updated_by: user.email },
      { onConflict: 'page_id' }
    );

  if (error) {
    return { ok: false, error: error.message };
  }

  // Immediately invalidate the public page cache
  revalidatePath(pageId === 'homepage' ? '/' : `/${pageId}`);

  return { ok: true };
}
