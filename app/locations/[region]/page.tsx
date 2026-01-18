import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/app/components/PageHeader";
import SuburbFilter from "@/app/components/SuburbFilter";
import { locations } from "@/app/data/locations";

// Define params type for Next.js 15/14
type Params = Promise<{ region: string }>;

export async function generateStaticParams() {
    return Object.keys(locations).map((region) => ({
        region: region,
    }));
}

export default async function RegionPage({ params }: { params: Params }) {
    const { region } = await params;
    const suburbs = locations[region as keyof typeof locations];

    if (!suburbs) {
        notFound();
    }

    const regionName = region.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

    return (
        <main className="min-h-screen">
            <PageHeader
                title={`Driving Lessons in ${regionName}`}
                subtitle={`Professional driving instructors available in ${regionName} and surrounding suburbs.`}
            />

            <section className="container mx-auto px-6 py-12">
                <h2 className="font-anton text-3xl mb-8 border-b pb-4">Suburbs We Serve</h2>
                <SuburbFilter suburbs={suburbs} region={region} />
            </section>

            <section className="bg-background-alt py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-anton text-3xl mb-4">Ready to Start?</h2>
                    <p className="mb-6 max-w-xl mx-auto text-gray-600">
                        Book your first lesson in {regionName} today and start your journey to becoming a safe, confident driver.
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-full font-anton uppercase text-xl hover:bg-green-600 transition-colors">
                        Book in {regionName}
                    </button>
                </div>
            </section>
        </main>
    );
}
