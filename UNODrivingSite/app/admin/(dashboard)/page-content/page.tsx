import Link from 'next/link';

export const dynamic = 'force-dynamic';

const EDITABLE_PAGES = [
  {
    id: 'homepage',
    label: 'Homepage',
    description: 'Hero section, USP cards, philosophy section, and "Why Choose Us" video.',
    href: '/admin/page-content/homepage',
  },
  {
    id: 'about-us',
    label: 'About Us',
    description: 'Page header, intro text & image, log book section, test prep, and CTA.',
    href: '/admin/page-content/about-us',
  },
  {
    id: 'prices',
    label: 'Prices',
    description: 'Page header, intro text, all pricing card titles/subtitles/prices, and referral section.',
    href: '/admin/page-content/prices',
  },
];

export default function PageContentIndex() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Page Content</h1>
        <p className="mt-1 text-gray-500">
          Edit text, images, and videos on selected pages. Layout and design are always preserved.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EDITABLE_PAGES.map((page) => (
          <Link
            key={page.id}
            href={page.href}
            className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                {page.label}
              </h2>
              <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Editable
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{page.description}</p>
            <div className="mt-4 text-sm font-semibold text-primary group-hover:underline">
              Edit Page &rarr;
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-sm text-blue-700">
          <span className="font-bold">Design is always preserved.</span> Changes you make here update only the content values — text, images, and video IDs. The layout, fonts, colours, and spacing of each page remain exactly as designed.
        </p>
      </div>
    </div>
  );
}
