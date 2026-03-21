import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Verify env is set up
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return (
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
        <h2 className="text-xl font-bold text-yellow-800 mb-2">Supabase Not Configured</h2>
        <p className="text-yellow-700">
          The Supabase environment variables are missing. Please add <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your <code>.env.local</code> file to proceed.
        </p>
      </div>
    )
  }

  // Fetch counts safely (will return error if table doesn't exist yet)
  const [{ count: totalPosts }, { count: publishedPosts }] = await Promise.all([
    supabase.from('posts').select('*', { count: 'exact', head: true }),
    supabase.from('posts').select('*', { count: 'exact', head: true }).eq('published', true)
  ]).catch(() => [{ count: 0 }, { count: 0 }])

  const drafts = (totalPosts || 0) - (publishedPosts || 0)

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-gray-500">Overview of your blog posts.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-green-600 transition-colors"
        >
          New Post
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Posts</p>
          <p className="mt-2 text-4xl font-bold text-gray-900">{totalPosts ?? '-'}</p>
        </div>
        
        <div className="rounded-xl border border-green-100 bg-green-50 p-6 shadow-sm">
          <p className="text-sm font-medium text-green-600 uppercase tracking-wider">Published</p>
          <p className="mt-2 text-4xl font-bold text-green-700">{publishedPosts ?? '-'}</p>
        </div>
        
        <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-6 shadow-sm">
          <p className="text-sm font-medium text-yellow-600 uppercase tracking-wider">Drafts</p>
          <p className="mt-2 text-4xl font-bold text-yellow-700">{drafts ?? '-'}</p>
        </div>
      </div>
    </div>
  )
}
