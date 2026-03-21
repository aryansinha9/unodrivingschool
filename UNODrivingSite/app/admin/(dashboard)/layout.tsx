import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <span className="font-anton text-2xl text-primary tracking-wider">UNO</span>
            <span className="font-semibold text-gray-800 tracking-wide mt-1">ADMIN</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/dashboard" className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium">
            Dashboard
          </Link>
          <Link href="/admin/blog" className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium">
            Blog Posts
          </Link>
          
          {/* Future Proofing requested by user */}
          <div className="pt-6 pb-2">
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Coming Soon</p>
          </div>
          <div className="block px-4 py-2.5 rounded-lg text-gray-400 font-medium cursor-not-allowed flex justify-between items-center">
            <span>Bookings</span>
            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">WIP</span>
          </div>
          <div className="block px-4 py-2.5 rounded-lg text-gray-400 font-medium cursor-not-allowed flex justify-between items-center">
            <span>Users</span>
            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">WIP</span>
          </div>
          <div className="block px-4 py-2.5 rounded-lg text-gray-400 font-medium cursor-not-allowed flex justify-between items-center">
            <span>Analytics</span>
            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">WIP</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
          <h1 className="font-semibold text-gray-800">Admin Portal</h1>
          <form action="/admin/auth/signout" method="post">
            <button type="submit" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
              Logout
            </button>
          </form>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
