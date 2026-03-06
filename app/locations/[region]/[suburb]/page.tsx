import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/app/data/locations";
import { suburbContent } from "@/app/data/suburb-content";
import { suburbVideos } from "@/app/data/suburb-videos";
import { suburbSEO, standardManoeuvres } from "@/app/data/suburb-seo";
import VideoPlayer from "@/app/components/VideoPlayer";

type Params = Promise<{ region: string; suburb: string }>;

// ─── Static Params ───────────────────────────────────────────────────────────
export async function generateStaticParams() {
    const params: { region: string; suburb: string }[] = [];
    for (const [region, suburbs] of Object.entries(locations)) {
        for (const suburb of suburbs) {
            params.push({ region, suburb: suburb.toLowerCase().replace(/ /g, "-") });
        }
    }
    return params;
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { suburb } = await params;
    const seo = suburbSEO[suburb];
    const content = suburbContent[suburb];

    const regionSuburbs = Object.values(locations).flat();
    const originalSuburb = regionSuburbs.find(
        (s) => s.toLowerCase().replace(/ /g, "-") === suburb
    ) || suburb;

    return {
        title: seo?.metaTitle ?? content?.metaTitle ?? `Driving Lessons ${originalSuburb} | UNO Driving School`,
        description: seo?.metaDescription ?? content?.metaDescription ?? `Professional driving lessons in ${originalSuburb} with UNO Driving School.`,
    };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function SuburbPage({ params }: { params: Params }) {
    const { region, suburb } = await params;

    const regionSuburbs = locations[region as keyof typeof locations];
    if (!regionSuburbs) notFound();

    const originalSuburb = regionSuburbs.find(
        (s) => s.toLowerCase().replace(/ /g, "-") === suburb
    );
    if (!originalSuburb) notFound();

    const regionName = region.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    const seo = suburbSEO[suburb];
    const content = suburbContent[suburb];
    const videoId = suburbVideos[suburb] || "AcHQLgvgftc";

    // JSON-LD schemas
    const faqSchema = seo ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seo.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    } : null;

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "DrivingSchool",
        name: "UNO Driving School",
        description: `Automatic driving lessons in ${originalSuburb} and surrounding suburbs.`,
        areaServed: originalSuburb,
        url: `https://www.unodrivingschool.com.au/locations/${region}/${suburb}`,
        telephone: "1300 000 000",
        priceRange: "$$",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "200" },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Brisbane",
            addressRegion: "QLD",
            addressCountry: "AU",
        },
    };

    // ── RICH SEO TEMPLATE (Batch 1 suburbs) ─────────────────────────────────
    if (seo) {
        return (
            <main className="min-h-screen">
                {/* JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                {faqSchema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                    />
                )}

                {/* ── 1. Hero / H1 ─────────────────────────────────────────── */}
                <section className="bg-background-alt py-14">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                            UNO Driving School · {regionName}
                        </p>
                        <h1 className="font-anton text-4xl md:text-5xl text-text-main uppercase mb-6 leading-tight">
                            {seo.h1}
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact-us"
                                className="bg-primary text-white px-8 py-3 rounded-full font-anton uppercase text-lg hover:bg-green-600 transition-colors shadow-lg"
                            >
                                Book a Lesson
                            </Link>
                            <Link
                                href="/prices"
                                className="border-2 border-text-main text-text-main px-8 py-3 rounded-full font-anton uppercase text-lg hover:bg-text-main hover:text-white transition-colors"
                            >
                                View Prices
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── 2. Body Content + Video ───────────────────────────────── */}
                <section className="container mx-auto px-6 py-14 max-w-5xl grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2 prose prose-lg max-w-none text-gray-700 space-y-5">
                        {seo.bodyParagraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-black aspect-video lg:aspect-auto lg:h-72">
                        <VideoPlayer
                            videoId={videoId}
                            thumbnailUrl="/location-video-thumbnail.jpg"
                            title={`Driving Lessons in ${originalSuburb}`}
                        />
                    </div>
                </section>

                {/* ── 3. Landmarks ─────────────────────────────────────────── */}
                <section className="bg-background-alt py-12">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="font-anton text-3xl uppercase mb-4 text-text-main">
                            Driving Lessons Near {originalSuburb} Landmarks
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg">
                            We regularly practise with our {originalSuburb} students at and around these local landmarks — ensuring your skills are built on real, familiar roads:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {seo.landmarks.map((landmark, i) => (
                                <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                                    <span className="text-primary text-xl mt-0.5">📍</span>
                                    <span className="text-gray-700">{landmark}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-gray-600">
                            Practising in real {originalSuburb} traffic conditions helps students feel confident and wholly prepared before their driving test day.
                        </p>
                    </div>
                </section>

                {/* ── 4. Test Centre + Manoeuvres ───────────────────────────── */}
                <section className="container mx-auto px-6 py-12 max-w-5xl">
                    <h2 className="font-anton text-3xl uppercase mb-4 text-text-main">
                        Preparing for Your Queensland Driving Test Near {originalSuburb}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                            <h3 className="font-bold text-lg mb-2 text-blue-900">Your Nearest Test Centre</h3>
                            <p className="text-gray-700 font-semibold mb-1">{seo.testCentre} Test Centre</p>
                            <p className="text-gray-600 text-sm">{seo.testCentreAddress}</p>
                            <p className="mt-4 text-gray-700 text-sm">
                                Our instructors know the {seo.testCentre} test routes thoroughly and incorporate them directly into your {originalSuburb} lessons — so there are no surprises on the day.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-3 text-gray-900">Manoeuvres We Practise</h3>
                            <ul className="space-y-2">
                                {standardManoeuvres.map((m, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-green-500 text-lg font-bold">✓</span>
                                        <span className="text-gray-700">{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── 5. Google Map ─────────────────────────────────────────── */}
                <section className="pb-12">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="font-anton text-2xl uppercase mb-4 text-text-main">
                            Find the {seo.testCentre} Test Centre
                        </h2>
                        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 h-72 w-full">
                            <iframe
                                src={seo.mapEmbedSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`${seo.testCentre} Driving Test Centre map`}
                            />
                        </div>
                    </div>
                </section>

                {/* ── 6. Reviews ───────────────────────────────────────────── */}
                <section className="bg-background-alt py-12">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="font-anton text-3xl uppercase mb-8 text-text-main text-center">
                            What Our {originalSuburb} Students Say
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {seo.reviews.map((review, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <div className="text-yellow-400 text-xl mb-3">{"★".repeat(review.rating)}</div>
                                    <p className="text-gray-700 italic mb-4">&ldquo;{review.text}&rdquo;</p>
                                    <p className="font-bold text-gray-900 text-sm">
                                        — {review.name}, {review.suburb}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 7. FAQ ───────────────────────────────────────────────── */}
                <section className="container mx-auto px-6 py-12 max-w-5xl">
                    <h2 className="font-anton text-3xl uppercase mb-8 text-text-main">
                        Frequently Asked Questions — {originalSuburb}
                    </h2>
                    <div className="space-y-4">
                        {seo.faqs.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-gray-900 hover:text-primary transition-colors list-none">
                                    {faq.question}
                                    <span className="text-primary text-xl transition-transform group-open:rotate-45 shrink-0 ml-4">+</span>
                                </summary>
                                <div className="px-6 pb-5 text-gray-700 border-t border-gray-100 pt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ── 8. Internal Links / Nearby Areas ──────────────────────── */}
                <section className="bg-background-alt py-12">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="font-anton text-2xl uppercase mb-4 text-text-main text-center">
                            Nearby Areas We Cover
                        </h2>
                        <p className="text-center text-gray-600 mb-6">
                            If you are also looking for{" "}
                            {seo.nearbySuburbs.map((s, i) => (
                                <span key={s.slug}>
                                    <Link
                                        href={`/locations/${s.region}/${s.slug}`}
                                        className="text-primary hover:underline font-medium"
                                    >
                                        driving lessons in {s.name}
                                    </Link>
                                    {i < seo.nearbySuburbs.length - 1 ? ", " : ""}
                                </span>
                            ))},{" "}
                            we cover those areas too. Visit our{" "}
                            <Link href="/" className="text-primary hover:underline font-medium">
                                main Driving Lessons Brisbane page
                            </Link>{" "}
                            to see our full service area, or head to our{" "}
                            <Link href="/brisbane-driving-test" className="text-primary hover:underline font-medium">
                                Test Preparation page
                            </Link>{" "}
                            to learn how we prepare students for test day.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {regionSuburbs
                                .filter((s) => s !== originalSuburb)
                                .slice(0, 10)
                                .map((nearby) => (
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

                {/* ── 9. Video Transcript Placeholder ──────────────────────── */}
                <section className="container mx-auto px-6 py-12 max-w-5xl">
                    <h2 className="font-anton text-2xl uppercase mb-4 text-text-main">
                        Video Transcript — Driving Lessons in {originalSuburb}
                    </h2>
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-gray-500 italic text-sm">
                        Video transcript for {originalSuburb} lessons will be added here once the suburb-specific video is published to YouTube. In the meantime, watch our general{" "}
                        <Link href="/#why-choose-us" className="text-primary hover:underline">
                            UNO Driving School overview video
                        </Link>
                        .
                    </div>
                </section>

                {/* ── CTA Banner ────────────────────────────────────────────── */}
                <section className="bg-text-main text-white py-14 text-center">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="font-anton text-3xl md:text-4xl uppercase mb-4">
                            Ready to Get Your Licence in {originalSuburb}?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Join hundreds of {originalSuburb} students who passed first go with UNO.
                        </p>
                        <Link
                            href="/contact-us"
                            className="bg-primary text-white px-10 py-4 rounded-full font-anton uppercase text-xl hover:bg-green-500 transition-colors shadow-xl"
                        >
                            Book Your Lesson Today
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

    // ── LEGACY FALLBACK TEMPLATE (non-Batch 1 suburbs) ──────────────────────
    const pageTitle = content?.title || `Driving Lessons ${originalSuburb}`;
    const pageHeading = content?.heading || `Learn to Drive in ${originalSuburb}`;

    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <section className="bg-background-alt py-12">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="font-anton text-4xl uppercase mb-2 text-text-main">{pageTitle}</h1>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-start max-w-5xl">
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
                                    safety-focused automatic lessons tailored to your skill level. Whether you are a
                                    complete beginner or looking to perfect your parking, our instructors in {regionName} are here to help.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Free pick up and drop off in {originalSuburb}</li>
                                    <li>Modern automatic vehicles with dual controls</li>
                                    <li>Highly experienced, 5-star rated local instructors</li>
                                    <li>High first-attempt pass rates for {originalSuburb} students</li>
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
                </div>

                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-black">
                    <VideoPlayer
                        videoId={videoId}
                        thumbnailUrl="/location-video-thumbnail.jpg"
                        title={`Driving Lessons in ${originalSuburb}`}
                    />
                </div>
            </section>

            <section className="bg-background-alt py-12">
                <div className="container mx-auto px-6">
                    <h3 className="font-anton text-2xl mb-6 text-center">Nearby Locations</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {regionSuburbs.filter((s) => s !== originalSuburb).slice(0, 8).map((nearby) => (
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
        </main>
    );
}
