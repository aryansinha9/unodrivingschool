'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function AdminDeletePostButton({ id, title }: { id: string, title: string }) {
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm(`Are you absolutely sure you want to delete the post "${title}"? This cannot be undone.`)) {
      setLoading(true);
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) {
        alert(error.message);
      } else {
        router.refresh();
      }
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleDelete}
      className={`font-medium ${loading ? 'text-gray-400' : 'text-red-600 hover:text-red-800'} hover:underline`}
    >
      {loading ? '...' : 'Delete'}
    </button>
  );
}
