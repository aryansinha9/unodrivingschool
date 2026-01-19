import Link from "next/link";
import Image from "next/image";
import ShapeBlur from "./ShapeBlur";

export default function Footer() {
    return (
        <footer className="bg-footer text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Contact */}
                    <div>
                        <h3 className="font-anton text-2xl mb-6 text-primary">Contact</h3>
                        <ul className="space-y-4 text-gray-400 font-roboto">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-white">Call:</span>
                                <div>
                                    <a href="tel:0734351575" className="hover:text-primary transition-colors block">(07) 3435 1575</a>
                                    <a href="tel:0456860714" className="hover:text-primary transition-colors block">0456 860 714</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-white">Address:</span>
                                <span>Suite 128, 42 Manilla Street East Brisbane Queensland 4169</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-white">Email:</span>
                                <a href="mailto:hello@unodrivingschool.com.au" className="hover:text-primary transition-colors">hello@unodrivingschool.com.au</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-white">Hours:</span>
                                <span>06.00 AM - 17.00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-anton text-2xl mb-6 text-primary">Explore</h3>
                        <ul className="space-y-2 text-gray-400 font-roboto">
                            <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/prices" className="hover:text-primary transition-colors">Prices</Link></li>
                            <li><Link href="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
                            <li><Link href="/photo-gallery" className="hover:text-primary transition-colors">Photos</Link></li>
                            <li><Link href="/faqs" className="hover:text-primary transition-colors">FAQS</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Legal & More */}
                    <div>
                        <h3 className="font-anton text-2xl mb-6 text-primary">Information</h3>
                        <ul className="space-y-2 text-gray-400 font-roboto">
                            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/code-of-conduct" className="hover:text-primary transition-colors">Code Of Conduct</Link></li>
                            <li><Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Brand/mission */}
                    <div>
                        <div className="relative h-24 w-64 mb-6">
                            <Image
                                src="/UNO-logo.png"
                                alt="UNO Driving School"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 font-roboto leading-relaxed mb-6">
                            Empowering responsible, confident, lifelong safe drivers through experienced instructors and comprehensive training.
                        </p>
                        <div className="flex gap-4">
                            {/* YouTube */}
                            <a href="https://www.youtube.com/@PeterHooper-bm3se" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors group" aria-label="YouTube">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            {/* TikTok */}
                            <a href="https://www.tiktok.com/@unodrivingschool?_t=8g7OXVd93Qo&_r=1" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-black transition-colors group" aria-label="TikTok">
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/tiktok-icon.png"
                                        alt="TikTok"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=61551775277355" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors group" aria-label="Facebook">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors group cursor-not-allowed opacity-70" aria-label="Instagram">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm pb-8">
                    <p>&copy; {new Date().getFullYear()} UNO Driving School. All rights reserved.</p>
                </div>

                {/* ShapeBlur Animation */}
                <div className="w-full h-24 relative opacity-30 mt-2 overflow-hidden rounded-lg">
                    <ShapeBlur
                        shapeSize={1.2}
                    />
                </div>
            </div>
        </footer>
    );
}
