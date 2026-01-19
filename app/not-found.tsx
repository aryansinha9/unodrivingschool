
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-12">
            <div className="relative w-64 h-64 mb-8">
                <Image
                    src="/images/404-sad-car.png"
                    alt="Sad Car - 404 Error"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <h1 className="text-6xl font-anton mb-4 text-[var(--color-text-main)]">
                Wrong Turn!
            </h1>
            <p className="text-xl mb-8 max-w-md text-[var(--color-text-main)] font-roboto">
                It looks like you've ventured off-road. The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex gap-4 font-roboto-slab">
                <Link
                    href="/"
                    className="px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded hover:opacity-90 transition-opacity"
                >
                    Back to Garage
                </Link>
                <Link
                    href="/contact-us"
                    className="px-6 py-3 border-2 border-[var(--color-text-main)] text-[var(--color-text-main)] font-bold rounded hover:bg-[var(--color-text-main)] hover:text-white transition-colors"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
