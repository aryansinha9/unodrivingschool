import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Area Not Covered - Uno Driving School",
    description: "We are expanding! See our currently supported locations.",
};

export default function NotCoveredPage() {
    return (
        <main className="min-h-screen bg-background-main flex items-center justify-center py-20">
            <div className="container mx-auto px-6 max-w-2xl text-center">
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 border-t-8 border-primary relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                    </div>

                    <h1 className="font-anton text-4xl md:text-5xl uppercase text-text-main mb-6 relative z-10">
                        Area Not Currently <span className="text-primary">Covered</span>
                    </h1>
                    
                    <p className="font-roboto text-xl text-gray-700 mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
                        Sorry, we do not currently cover this area. We are continuously expanding our fleet, so please check our other nearby locations!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link 
                            href="/locations" 
                            className="bg-primary text-white font-anton uppercase text-lg px-8 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg"
                        >
                            View Our Locations
                        </Link>
                        <Link 
                            href="/" 
                            className="border-2 border-text-main text-text-main font-anton uppercase text-lg px-8 py-3 rounded-full hover:bg-text-main hover:text-white transition-colors"
                        >
                            Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
