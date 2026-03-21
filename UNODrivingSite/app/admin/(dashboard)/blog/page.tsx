import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import AdminDeletePostButton from '@/app/components/AdminDeletePostButton'

export const dynamic = 'force-dynamic'

export default async function AdminBlogPage() {
  const supabase = await createClient()

  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, blog_type, date, published')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="mt-1 text-gray-500">Manage all your blog posts from here.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-green-600 transition-colors"
        >
          New Post
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
        {error ? (
          <div className="p-8 text-center text-red-500">Failed to load posts or Supabase not configured.</div>
        ) : !posts || posts.length === 0 ? (
          <div className="p-12 text-center text-gray-500">No blog posts found. Create your first one!</div>
        ) : (
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-4 font-bold border-b">Title</th>
                <th className="px-6 py-4 font-bold border-b">Type</th>
                <th className="px-6 py-4 font-bold border-b hidden sm:table-cell">Date</th>
                <th className="px-6 py-4 font-bold border-b">Status</th>
                <th className="px-6 py-4 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <Link href={`/admin/blog/${post.id}/edit`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{post.blog_type}</td>
                  <td className="px-6 py-4 hidden sm:table-cell">{post.date}</td>
                  <td className="px-6 py-4">
                    {post.published ? (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right space-x-4">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Edit
                    </Link>
                    <AdminDeletePostButton id={post.id} title={post.title} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
