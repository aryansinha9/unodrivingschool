import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";

export default function BrisbaneLearnerDrivers() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Brisbane Learner Drivers"
                subtitle="Your journey to independence starts here."
            />

            <section className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="space-y-12">

                    {/* Satisfaction Section */}
                    <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-primary relative overflow-hidden">
                        <div className="absolute top-4 right-4 opacity-10 md:opacity-100 md:relative md:float-right md:ml-6 md:mb-2 w-32 h-24">
                            <img src="/images/l-p-plates-graphic.png" alt="L and P Plates" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="font-anton text-3xl mb-4 text-text-main uppercase">100% Customer Satisfaction Guaranteed!</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p className="mb-4">
                                At Uno Driving School, we are committed to ensuring your complete satisfaction as a customer. Our primary goal is to guide you seamlessly from your learner’s license to obtaining your driver’s license, transforming you into a competent and confident driver.
                            </p>
                            <p className="mb-4">
                                Throughout your learning journey, we provide expert instruction accompanied by a supportive and experienced driving instructor. With us, you will encounter a wide range of road situations and conditions, enabling you to develop the necessary skills to navigate any unforeseen circumstances with ease.
                            </p>
                            <p>
                                Our driving lessons incorporate the most effective and contemporary teaching techniques, empowering you to become a responsible driver while building your confidence. We will equip you with all the necessary knowledge and abilities required to successfully pass the written test and practical exam, ensuring a smooth path to obtaining your driver’s license.
                            </p>
                        </div>
                    </div>

                    {/* Checklist Section */}
                    <div>
                        <h3 className="font-anton text-2xl mb-6 text-primary uppercase">What We Cover</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                "Cockpit drill and safety checks",
                                "Road signals and positions",
                                "Controlled starts and stops",
                                "Acceleration and braking techniques",
                                "Mirrors and blind spots",
                                "Junctions and roundabouts",
                                "Traffic and motorways",
                                "Speed control",
                                "Parking and U-turns",
                                "Gear changes and clutch control"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span className="font-medium text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* How to Obtain License Section */}
                    <div>
                        <h2 className="font-anton text-3xl mb-6 text-text-main uppercase">How to Obtain a Learner’s Driving License?</h2>
                        <div className="prose prose-lg text-gray-700 space-y-4">
                            <p>
                                When you turn 16 years old, you can get your learner’s license from the nearest Department of Transport and Main Roads. Getting your learner’s permit is your rite of passage and will give you the ticket to independence and freedom on the roads of Brisbane!
                            </p>
                            <p>
                                To get the Queensland learner’s drivers license, you need to pass the written road rules test or the ‘PrepL’ test. When going for the application, don’t forget to bring some evidence of identity, your learner’s license fee, and a medical certificate if needed. You will receive the license in your mail.
                            </p>
                            <p>
                                Once you have your learner’s license, you can begin to learn to drive a car with proper adult supervision. The adult you are driving with should have an open driver’s license for more than a year to guide you. Don’t worry, our instructors have years of driving experience!
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-6">
                                <p className="font-bold text-blue-900 mb-2">Did you know?</p>
                                <p>
                                    To get your driving license, you will now need to wait a year as well as have 100 hours of supervised driving experience too. Uno Driving School can help you develop the skills and knowledge you need to practice with adult supervision on your own.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-background-alt rounded-2xl p-8 text-center">
                        <h2 className="font-anton text-3xl mb-4">Register Today and Start Your Driving Adventure!</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Embark on an exciting journey towards driving mastery. From novice to skilled driver, our course offers a fun and engaging way to build your confidence behind the wheel.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/prices"
                                className="inline-block bg-primary text-white font-anton uppercase text-lg px-8 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg"
                            >
                                Book a Lesson
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
