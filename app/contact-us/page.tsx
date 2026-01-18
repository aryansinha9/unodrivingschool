import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import TiltedCard from "@/app/components/TiltedCard";

export default function ContactUs() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch to start your driving journey."
            />
            <section className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-anton text-3xl mb-6">Get In Touch</h2>
                        <div className="space-y-4">
                            <p><strong>Address:</strong> Suite 128, 42 Manilla Street East Brisbane Queensland 4169</p>
                            <p><strong>Phone:</strong> (07) 3435 1575 / 0456 860 714</p>
                            <p><strong>Email:</strong> hello@unodrivingschool.com.au</p>
                        </div>

                        {/* Interactive Logo Badge */}
                        <div className="mt-12 flex justify-start">
                            <TiltedCard
                                imageSrc="/images/uno-badge-logo.png"
                                altText="UNO Driving School Badge"
                                captionText="UNO Driving School - Est. 2013"
                                containerHeight="400px"
                                containerWidth="400px"
                                imageHeight="400px"
                                imageWidth="400px"
                                rotateAmplitude={25}
                                scaleOnHover={1.25}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={false}
                            />
                        </div>

                    </div>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
                        <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
                        <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded" />
                        <textarea placeholder="Message" rows={4} className="w-full border p-3 rounded"></textarea>
                        <button className="bg-primary text-white px-8 py-3 rounded font-anton uppercase">Send Message</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
