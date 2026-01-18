import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";

export const metadata = {
    title: "Advanced Smart Driver Course - UNO Driving School",
    description: "Take your driving skills to the next level with our Advanced Smart Driver Training. Perfect for experienced drivers, professionals, and skid control.",
};

export default function AdvancedDriverCourse() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Advanced Smart Driver Course"
                subtitle="Fine-tune your road skills to the next level."
            />

            <section className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="space-y-12">

                    {/* Intro Section */}
                    <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-primary relative overflow-hidden">
                        <div className="absolute top-4 right-4 opacity-10 md:opacity-100 md:relative md:float-right md:ml-6 md:mb-2 w-32 h-24">
                            <img src="/images/l-p-plates-graphic.png" alt="L and P Plates" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="font-anton text-3xl mb-4 text-text-main uppercase">Rev Up Your Skills Today!</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p className="mb-4">
                                At UNO Driving School, our Advanced Smart Driver Training Courses are perfect for individuals seeking to take their driving skills to the next level. Whether you’re an experienced driver looking to enhance your skills, a professional driver aiming to meet industry standards, or anyone in between, our meticulously designed programs are tailored to refine your driving techniques.
                            </p>
                        </div>
                    </div>

                    {/* Course Features */}
                    <div>
                        <h3 className="font-anton text-2xl mb-6 text-primary uppercase">Why Choose Our Advanced Training?</h3>
                        <div className="grid gap-6">
                            {[
                                { title: "Expert Instruction", desc: "Taught by certified instructors with extensive experience in defensive driving and advanced vehicle handling." },
                                { title: "Defensive Driving", desc: "Learn how to anticipate potential hazards and respond effectively to unexpected situations." },
                                { title: "High-Performance Driving", desc: "Master advanced vehicle control techniques including cornering, braking, and acceleration control." },
                                { title: "Skid Control and Recovery", desc: "Gain hands-on experience in managing skids and recovering from loss of traction." },
                                { title: "Night & Low-Light Driving", desc: "Specialised training that enhances your comfort and performance during night driving." },
                                { title: "Customised Training Plans", desc: "We create a personalised training plan that aligns with your specific goals." }
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <h4 className="font-anton text-xl mb-2 text-text-main">{item.title}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div>
                        <h3 className="font-anton text-2xl mb-6 text-primary uppercase">Benefits of the Course</h3>
                        <ul className="space-y-3">
                            {[
                                "Real-World Applications: Practice on highways, urban navigation, and rural roads.",
                                "Safety First: Emphasis on safe driving practices and understanding road laws.",
                                "Certification: Receive a certificate upon completion, beneficial for professional roles.",
                                "Flexible Scheduling: Weeknight and weekend options available."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-green-500 text-xl font-bold mt-[-2px]">✓</span>
                                    <span className="text-lg text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Conclusion */}
                    <div className="prose prose-lg text-gray-700">
                        <p>
                            At UNO Driving School, we are committed to transforming good drivers into exceptional ones. Our Advanced Driver Training Courses not only help you refine your techniques but also empower you with the confidence to handle a diverse range of driving scenarios. Designed for both personal growth and professional advancement, these courses represent the gold standard in driver education.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-background-alt rounded-2xl p-8 text-center">
                        <h2 className="font-anton text-3xl mb-4">Ready to Rev Level Up?</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Enrol now and rev up your skills on the road with the Smart Driver Course!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/prices"
                                className="inline-block bg-primary text-white font-anton uppercase text-lg px-8 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg"
                            >
                                Book Now
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-block border-2 border-text-main text-text-main font-anton uppercase text-lg px-8 py-3 rounded-full hover:bg-text-main hover:text-white transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
