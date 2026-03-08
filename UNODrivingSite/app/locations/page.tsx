import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import { locations } from "@/app/data/locations";

export default function Locations() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Service Locations"
                subtitle="Uno Driving School – Professional Driving Lessons Across Brisbane."
            />

            {/* Intro Section */}
            <section className="container mx-auto px-6 py-12 text-center max-w-4xl mx-auto">
                <h2 className="font-anton text-3xl lg:text-4xl text-primary mb-6">FRIENDLY DRIVING SCHOOL NEAR YOU!</h2>
                <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                    No matter where you’re located in or around Brisbane, our patient and skilled instructors are here to provide you with top-notch Uno driving lessons. Get started on your journey to becoming a confident and safe driver with us today!
                </p>
            </section>

            {/* Service Details: Pick Up / Drop Off */}
            <section className="bg-background-alt py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-anton text-3xl mb-6 text-text-main">Convenient Pick-Up and Drop-Off Service!</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Uno Driving School is dedicated to making your learning experience as convenient as possible. With our flexible Brisbane driving lessons pick-up and drop-off service, you can choose from a range of locations within our service areas, all designed to fit your schedule seamlessly.
                        </p>
                        <p className="font-bold text-gray-800 mb-2">We can pick you up from:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6 font-medium">
                            <li>Your home</li>
                            <li>Your workplace</li>
                            <li>Your school or university</li>
                            <li>Nearby shopping centers</li>
                            <li>The city centre</li>
                        </ul>
                        <p className="text-gray-700">
                            And when your driving lesson is complete, we’ll also drop you off at your preferred location. We understand the importance of accommodating your needs!
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-white transform rotate-2">
                        {/* Service Map Visual */}
                        <div className="mt-16 bg-white p-4 rounded-2xl shadow-lg">
                            <h3 className="text-center font-anton text-2xl mb-6 text-gray-800">Our Service Areas</h3>
                            <div className="relative w-full h-[450px] bg-gray-100 rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453281.4329233895!2d152.68257225366636!3d-27.429969502142132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1768710716302!5m2!1sen!2sau"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-anton text-xl mb-2 text-primary">Expanding Our Reach</h3>
                            <p className="text-sm text-gray-600">
                                We’re constantly waiting to expand our service areas. Currently, we offer lessons in most suburbs of Brisbane. If you don’t see your suburb listed, please get in touch!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regions Grid */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="font-anton text-3xl text-center mb-12">Locations We Teach</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.keys(locations).map((region) => (
                        <Link key={region} href={`/locations/${region}`} className="group">
                            <div className="bg-white border p-8 rounded-2xl hover:shadow-xl transition-all hover:border-primary text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-primary transition-colors"></div>
                                <h3 className="font-anton text-2xl capitalize group-hover:text-primary transition-colors mb-2">
                                    {region.replace("-", " ")}
                                </h3>
                                <p className="text-gray-500 text-sm">View Suburbs &rarr;</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* "We Come To You" CTA */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="font-anton text-4xl lg:text-5xl mb-6 uppercase">"We Come To You!"</h2>
                    <p className="text-xl mb-8 font-roboto opacity-95 italic">
                        “At Uno Driving School, we’ve got you covered from the city CBD to the suburbs! Our expert instructors are here to guide you through your driving journey, no matter where you reside in Brisbane.”
                    </p>
                    <Link href="/prices" className="bg-white text-primary font-anton uppercase px-12 py-4 rounded-full text-xl hover:bg-gray-100 transition-colors inline-block shadow-lg">
                        Book Now
                    </Link>
                </div>
            </section>

        </main>
    );
}
