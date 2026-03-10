"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import TiltedCard from "@/app/components/TiltedCard";

export default function ContactUs() {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "c8c85d06-14cb-4a7c-9e0f-e9235ae15df7");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("Message sent successfully!");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <p><strong>Phone:</strong> 0456 860 714</p>
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
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input type="hidden" name="subject" value="New Contact Inquiry" />
                        <input type="text" name="name" placeholder="Name" required className="w-full border p-3 rounded" />
                        <input type="email" name="email" placeholder="Email" required className="w-full border p-3 rounded" />
                        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border p-3 rounded" />
                        <textarea name="message" placeholder="Message" required rows={4} className="w-full border p-3 rounded"></textarea>
                        <button disabled={isSubmitting} className="bg-primary text-white px-8 py-3 rounded font-anton uppercase disabled:opacity-50">
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                        {status && <p className={`mt-4 font-bold ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>{status}</p>}
                    </form>
                </div>
            </section>
        </main>
    );
}
