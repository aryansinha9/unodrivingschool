import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/app/data/locations";
import { suburbContent } from "@/app/data/suburb-content";
import { suburbVideos } from "@/app/data/suburb-videos";
import { suburbSEO } from "@/app/data/suburb-seo";
import VideoPlayer from "@/app/components/VideoPlayer";
import Image from "next/image";

type Params = Promise<{ suburb: string }>;

// ─── Static Params ───────────────────────────────────────────────────────────
export async function generateStaticParams() {
    const params: { suburb: string }[] = [];
    for (const [region, suburbs] of Object.entries(locations)) {
        for (const suburb of suburbs) {
            params.push({ suburb: suburb.toLowerCase().replace(/ /g, "-") });
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

// ─── Helper: Get Region from Suburb Slug ─────────────────────────────────────
function getRegionFromSuburb(suburbSlug: string): string | null {
    for (const [region, suburbs] of Object.entries(locations)) {
        for (const s of suburbs) {
            if (s.toLowerCase().replace(/ /g, "-") === suburbSlug) {
                return region;
            }
        }
    }
    return null;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function SuburbPage({ params }: { params: Params }) {
    const { suburb } = await params;

    const region = getRegionFromSuburb(suburb);
    if (!region) notFound();

    const regionSuburbs = locations[region as keyof typeof locations];

    const originalSuburb = regionSuburbs.find(
        (s) => s.toLowerCase().replace(/ /g, "-") === suburb
    );
    if (!originalSuburb) notFound();

    const regionName = region.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    const seo = suburbSEO[suburb];
    const content = suburbContent[suburb];
    const videoId = suburbVideos[suburb] || "AcHQLgvgftc";

    // ── Get Deterministic Image ───────────────────────────────────
    const allSuburbsList = Object.values(locations).flat().sort();
    const suburbIndex = allSuburbsList.indexOf(originalSuburb);
    const imageNumber = (suburbIndex === -1) ? 1 : (suburbIndex % 11) + 1;

    const internalLinks: { name: string; slug: string; region: string }[] = [];
    if (seo?.nearbySuburbs) {
        for (const s of seo.nearbySuburbs) {
            if (internalLinks.length < 5 && s.name !== originalSuburb) {
                internalLinks.push(s);
            }
        }
    }
    if (internalLinks.length < 5) {
        for (const s of regionSuburbs) {
            if (s !== originalSuburb && !internalLinks.some((n) => n.name === s)) {
                internalLinks.push({
                    name: s,
                    slug: s.toLowerCase().replace(/ /g, "-"),
                    region,
                });
                if (internalLinks.length === 5) break;
            }
        }
    }

    // JSON-LD schemas
    const faqSchema = seo ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            { question: `Do you pick up from ${originalSuburb}?`, answer: `Yes, we offer free pickup and drop-off from your home, school, or workplace in ${originalSuburb} and surrounding areas.` },
            { question: `How much are lessons in ${originalSuburb}?`, answer: `Our driving lessons in ${originalSuburb} are highly affordable. A standard 1-hour lesson is $75, or you can purchase a 10-hour package for $700.` },
            { question: `Can I use the instructor's car for the test at ${seo.testCentre}?`, answer: `Yes. We offer a dedicated Test Day Package which includes a 1-hour pre-test warm-up lesson and the use of the instructor's modern, dual-controlled automatic vehicle for your practical test at the ${seo.testCentre} TMR centre.` }
        ].map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    } : null;

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "DrivingSchool",
        name: `UNO Driving School ${originalSuburb}`,
        url: `https://www.unodrivingschool.com.au/locations/${suburb}/`,
        telephone: "0456 860 714",
        email: "hello@unodrivingschool.com.au",
        image: "https://www.unodrivingschool.com.au/wp-content/uploads/logo-url-here.png",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Suite 128, 42 Manilla Street",
            addressLocality: "East Brisbane",
            addressRegion: "QLD",
            postalCode: "4169",
            addressCountry: "AU",
        },
        areaServed: {
            "@type": "Place",
            name: originalSuburb,
        },
        makesOffer: {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: `Driving Lessons in ${originalSuburb}`,
                description: `Professional automatic driving lessons, test preparation, and logbook hours in ${originalSuburb}.`,
            },
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.unodrivingschool.com.au/" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.unodrivingschool.com.au/locations/" },
            { "@type": "ListItem", position: 3, name: originalSuburb, item: `https://www.unodrivingschool.com.au/locations/${suburb}/` }
        ]
    };

    // ── NEW SEO 8-SECTION TEMPLATE ─────────────────────────────────
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />

                {/* ── 1. Hero / H1 ─────────────────────────────────────────── */}
                <section className="bg-background-alt py-14">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6 tracking-wide">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>&rsaquo;</span>
                            <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
                            <span>&rsaquo;</span>
                            <span className="text-gray-900 font-medium">{originalSuburb}</span>
                        </div>
                        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                            UNO Driving School · {regionName}
                        </p>
                        <h1 className="font-anton text-4xl md:text-5xl text-text-main uppercase mb-6 leading-tight">
                            Driving Lessons in {originalSuburb}
                        </h1>
                        <div className="flex justify-center flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact-us"
                                className="bg-primary text-white px-8 py-3 rounded-full font-anton uppercase text-lg hover:bg-green-600 transition-colors shadow-lg"
                            >
                                Book Now
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

                {/* ── 2. Intro Paragraph ────────────────────────────────────── */}
                <section className="container mx-auto px-6 py-12 max-w-4xl text-center">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Learning to drive in {originalSuburb}? UNO Driving School offers professional automatic driving lessons tailored to your skill level. Our patient instructors focus on building safe, confident drivers, helping students pass their Queensland driving test on the first go.
                    </p>
                </section>

                {/* ── Passing Student Image ─────────────────────────────────── */}
                <section className="container mx-auto px-6 pb-12 max-w-4xl flex justify-center">
                    <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <Image
                            src={`/photo${imageNumber}.jpg`}
                            alt={`Pass student at UNO Driving School in ${originalSuburb}`}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </section>

                {/* ── 3. Local Roads and Driving Conditions (H2) ─────────────── */}
                <section className="bg-blue-50 py-14">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="font-anton text-3xl uppercase mb-6 text-text-main text-center">
                            Local Roads and Driving Conditions in {originalSuburb}
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-700 mb-10 text-center mx-auto">
                            {seo.bodyParagraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {seo.landmarks.map((landmark, i) => {
                                const splitPoint = landmark.indexOf("—");
                                const title = splitPoint > -1 ? landmark.substring(0, splitPoint).trim() : landmark;
                                const desc = splitPoint > -1 ? landmark.substring(splitPoint + 1).trim() : "great for mastering foundational driving skills.";
                                return (
                                    <li key={i} className="bg-white rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-4">
                                        <span className="text-primary text-xl mt-0.5">📍</span>
                                        <div>
                                            <strong className="text-gray-900 block mb-1">{title}</strong>
                                            <span className="text-gray-600 text-sm capitalize-first">{desc.charAt(0).toUpperCase() + desc.slice(1)}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>

                {/* ── 4. Driving Test Centre (H2) ────────────────────────────── */}
                <section className="container mx-auto px-6 py-14 max-w-4xl">
                    <h2 className="font-anton text-3xl uppercase mb-6 text-text-main text-center">
                        Driving Test Centre for {originalSuburb}
                    </h2>
                    <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-sm text-center">
                        <h3 className="font-bold text-2xl mb-2 text-gray-900">{seo.testCentre} Test Centre</h3>
                        <p className="text-gray-600 text-lg mb-6">{seo.testCentreAddress}</p>
                        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                            Our instructors are highly familiar with the specific test routes regularly used by examiners at the {seo.testCentre} centre. We incorporate these exact routes into your practical lessons, ensuring you understand the tricky intersections and speed zones well before exam day, minimizing surprises and maximizing your chance of passing on the first attempt.
                        </p>
                        <div className="rounded-xl overflow-hidden shadow-inner border border-gray-100 h-64 w-full max-w-2xl mx-auto">
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

                {/* ── 5. Skills Practised During Lessons (H2) ────────────────── */}
                <section className="bg-background-alt py-14">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h2 className="font-anton text-3xl uppercase mb-10 text-text-main">
                            Skills Practised During Lessons
                        </h2>
                        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                            {[
                                "Reverse parallel parking",
                                "Multi-lane merging safely",
                                "Hazard perception and scanning",
                                "Speed management in school zones",
                                "Three-point turn execution",
                                "Roundabout priority and giving way"
                            ].map((skill, i) => (
                                <li key={i} className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <span className="text-gray-800 font-medium">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ── 6. Student Testimonials (H2) ───────────────────────────── */}
                <section className="bg-text-main py-16">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <h2 className="font-anton text-3xl uppercase mb-10 text-white text-center">
                            Student Testimonials
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {seo.reviews.map((review, i) => (
                                <div key={i} className="bg-white rounded-2xl p-8 shadow-xl relative mt-4">
                                    <div className="absolute -top-5 left-8 bg-primary text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full font-serif font-bold">
                                        &ldquo;
                                    </div>
                                    <div className="text-yellow-400 text-xl mb-4 mt-2">{"★".repeat(review.rating)}</div>
                                    <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                                        &ldquo;{review.text}&rdquo;
                                    </blockquote>
                                    <div>
                                        <p className="font-bold text-gray-900">{review.name}</p>
                                        <p className="text-sm text-gray-500">{review.suburb}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 8. Frequently Asked Questions (H2) ─────────────────────── */}
                <section className="container mx-auto px-6 py-16 max-w-4xl">
                    <h2 className="font-anton text-3xl uppercase mb-10 text-text-main text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 text-left">
                        {/* Mandatory Q1 */}
                        <details className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                            <summary className="flex justify-between items-center cursor-pointer px-6 py-5 font-semibold text-gray-900 hover:text-primary transition-colors list-none">
                                <h3 className="inline text-lg m-0 font-bold">Do you pick up from {originalSuburb}?</h3>
                                <span className="text-primary text-2xl transition-transform group-open:rotate-45 shrink-0 ml-4">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-700 border-t border-gray-100 pt-5 text-lg">
                                Yes, we offer free pickup and drop-off from your home, school, or workplace in {originalSuburb} and surrounding areas.
                            </div>
                        </details>

                        {/* Mandatory Q2 */}
                        <details className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                            <summary className="flex justify-between items-center cursor-pointer px-6 py-5 font-semibold text-gray-900 hover:text-primary transition-colors list-none">
                                <h3 className="inline text-lg m-0 font-bold">How much are lessons in {originalSuburb}?</h3>
                                <span className="text-primary text-2xl transition-transform group-open:rotate-45 shrink-0 ml-4">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-700 border-t border-gray-100 pt-5 text-lg">
                                Our driving lessons in {originalSuburb} are highly affordable. A standard 1-hour lesson is $75, or you can purchase a 10-hour package for $700.
                            </div>
                        </details>

                        {/* Mandatory Q3 */}
                        <details className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                            <summary className="flex justify-between items-center cursor-pointer px-6 py-5 font-semibold text-gray-900 hover:text-primary transition-colors list-none">
                                <h3 className="inline text-lg m-0 font-bold">Can I use the instructor&apos;s car for the test at {seo.testCentre}?</h3>
                                <span className="text-primary text-2xl transition-transform group-open:rotate-45 shrink-0 ml-4">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-700 border-t border-gray-100 pt-5 text-lg">
                                Yes. We offer a dedicated Test Day Package which includes a 1-hour pre-test warm-up lesson and the use of the instructor&apos;s modern, dual-controlled automatic vehicle for your practical test at the {seo.testCentre} TMR centre.
                            </div>
                        </details>
                    </div>
                </section>

                {/* ── 8. Nearby Areas We Service (H2) ──────────────────────── */}
                <section className="bg-background-alt py-16 text-center">
                    <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
                        <h2 className="font-anton text-3xl uppercase mb-8 text-text-main">
                            Nearby Areas We Service
                        </h2>
                        <ul className="text-left text-lg space-y-3 w-fit">
                            {internalLinks.map((link, i) => (
                                <li key={i} className="list-disc ml-6 marker:text-primary">
                                    <Link
                                        href={`/locations/${link.slug}/`}
                                        className="text-primary hover:underline hover:text-green-600 font-medium"
                                    >
                                        Driving Lessons in {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
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

                {videoId !== "AcHQLgvgftc" && (
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-black">
                        <VideoPlayer
                            videoId={videoId}
                            thumbnailUrl="/location-video-thumbnail.jpg"
                            title={`Driving Lessons in ${originalSuburb}`}
                        />
                    </div>
                )}
            </section>

            {/* ── Passing Student Image ─────────────────────────────────── */}
            <section className="container mx-auto px-6 pb-12 max-w-4xl flex justify-center">
                <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                        src={`/photo${imageNumber}.jpg`}
                        alt={`Pass student at UNO Driving School in ${originalSuburb}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="bg-background-alt py-12">
                <div className="container mx-auto px-6 flex flex-col items-center">
                    <h2 className="font-anton text-2xl mb-6 text-center">Nearby Areas We Service</h2>
                    <ul className="text-left text-lg space-y-3 w-fit">
                        {internalLinks.map((link, i) => (
                            <li key={i} className="list-disc ml-6 marker:text-primary">
                                <Link
                                    href={`/locations/${link.slug}/`}
                                    className="text-primary hover:underline hover:text-green-600 font-medium"
                                >
                                    Driving Lessons in {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
