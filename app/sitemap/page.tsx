import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import { locations } from "@/app/data/locations";

export default function Sitemap() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Sitemap"
            />
            <section className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-anton text-xl mb-4">Main Pages</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li><Link href="/about-us" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/prices" className="hover:text-primary">Prices</Link></li>
                            <li><Link href="/locations" className="hover:text-primary">Locations</Link></li>
                            <li><Link href="/photo-gallery" className="hover:text-primary">Photo Gallery</Link></li>
                            <li><Link href="/faqs" className="hover:text-primary">FAQs</Link></li>
                            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                            <li><Link href="/contact-us" className="hover:text-primary">Contact Us</Link></li>
                            <li><Link href="/code-of-conduct" className="hover:text-primary">Code of Conduct</Link></li>
                            <li><Link href="/terms-conditions" className="hover:text-primary">Terms and Conditions</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
                            <li><Link href="/sitemap" className="hover:text-primary">Sitemap</Link></li>
                        </ul>
                    </div>

                    {Object.entries(locations).map(([region, suburbs]) => (
                        <div key={region}>
                            <h3 className="font-anton text-xl mb-4 capitalize">{region.replace("-", " ")}</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href={`/locations/${region}`} className="font-bold hover:text-primary">
                                        All {region.replace("-", " ")}
                                    </Link>
                                </li>
                                {suburbs.map((suburb) => (
                                    <li key={suburb}>
                                        <Link href={`/locations/${region}/${suburb.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary text-sm text-gray-600">
                                            {suburb}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
