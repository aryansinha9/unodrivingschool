import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/app/components/PageHeader";
import { locations } from "@/app/data/locations";
import { suburbContent } from "@/app/data/suburb-content";
import { suburbVideos } from "@/app/data/suburb-videos";
import VideoPlayer from "@/app/components/VideoPlayer";

type Params = Promise<{ region: string; suburb: string }>;

export async function generateStaticParams() {
    const params: { region: string; suburb: string }[] = [];

    for (const [region, suburbs] of Object.entries(locations)) {
        for (const suburb of suburbs) {
            params.push({
                region,
                suburb: suburb.toLowerCase().replace(/ /g, "-"),
            });
        }
    }

    return params;
}

export default async function SuburbPage({ params }: { params: Params }) {
    const { region, suburb } = await params;

    const regionSuburbs = locations[region as keyof typeof locations];

    if (!regionSuburbs) {
        notFound();
    }

    // Find the original suburb name (capitalized)
    const originalSuburb = regionSuburbs.find(
        (s) => s.toLowerCase().replace(/ /g, "-") === suburb
    );

    if (!originalSuburb) {
        notFound();
    }

    const regionName = region.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

    // Check for specific content
    const content = suburbContent[suburb];

    // Default/Fallback content
    const pageTitle = content?.title || `Driving Lessons ${originalSuburb}`;
    const pageHeading = content?.heading || `Learn to Drive in ${originalSuburb}`;

    return (
        <main className="min-h-screen">
            <PageHeader
                title={pageTitle}
                subtitle={content ? "Start your driving journey today." : `Top-rated driving instructors in ${originalSuburb}, ${regionName}.`}
            />

            <section className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="font-anton text-3xl mb-6">{pageHeading}</h2>
                    <div className="prose max-w-none text-gray-700 space-y-4">
                        {content ? (
                            content.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        ) : (
                            <>
                                <p>
                                    Looking for a driving school in {originalSuburb}? UNO Driving School offers professional,
                                    safety-focused lessons tailored to your skill level.
                                    Whether you are a complete beginner or looking to perfect your parking,
                                    our instructors in {regionName} are here to help.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Pick up and drop off in {originalSuburb}</li>
                                    <li>Automatic and Manual vehicles available</li>
                                    <li>Highly experienced local instructors</li>
                                    <li>High pass rates for {originalSuburb} students</li>
                                </ul>
                            </>
                        )}
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Link href="/contact-us" className="bg-primary text-white px-8 py-3 rounded-full font-anton uppercase text-lg hover:bg-green-600 transition-colors">
                            Book Now
                        </Link>
                        <Link href="/prices" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-anton uppercase text-lg hover:bg-primary hover:text-white transition-colors">
                            Lesson Prices
                        </Link>
                    </div>

                    {content?.customCta && (
                        <div className="mt-10 bg-background-alt p-6 rounded-xl border-l-4 border-primary">
                            <p className="font-bold text-lg mb-2">Ready To Hit the Road?</p>
                            <p className="text-gray-700">{content.customCta}</p>
                        </div>
                    )}

                    {/* Generic Homepage Video */}
                    <div className="mt-12">
                        <h3 className="font-anton text-2xl mb-4">Best Driving Lessons Even For Beginner!</h3>
                        <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden shadow-xl bg-black">
                            <VideoPlayer
                                videoId="AcHQLgvgftc"
                                thumbnailUrl="/video-thumbnail.png"
                                title="Best Driving Lessons Even For Beginner!"
                            />
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-black">
                    <VideoPlayer
                        videoId={suburbVideos[suburb] || "AcHQLgvgftc"}
                        thumbnailUrl="/location-video-thumbnail.jpg"
                        title={`Driving Lessons in ${originalSuburb}`}
                    />
                </div>
            </section>

            {/* Surrounding Suburbs Links */}
            <section className="bg-background-alt py-12">
                <div className="container mx-auto px-6">
                    <h3 className="font-anton text-2xl mb-6 text-center">Nearby Locations</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {regionSuburbs.filter(s => s !== originalSuburb).slice(0, 8).map(nearby => (
                            <Link
                                key={nearby}
                                href={`/locations/${region}/${nearby.toLowerCase().replace(/ /g, "-")}`}
                                className="text-sm bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all"
                            >
                                {nearby}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main >
    );
}
