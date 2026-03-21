import AdminPostForm from '@/app/components/AdminPostForm';

export default function NewBlogPostPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
        <p className="mt-1 text-gray-500">Draft and publish a new blog post.</p>
      </div>
      <AdminPostForm />
    </div>
  );
}
