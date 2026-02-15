import PageHeader from "@/app/components/PageHeader";
import Link from "next/link"; // Added Link import

export default function BrisbaneDrivingTest() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Brisbane Driving Test"
                subtitle="Prepare for your practical driving test with confidence."
            />
            <section className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="space-y-12">

                    {/* Intro Section */}
                    <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-primary relative overflow-hidden">
                        <div className="absolute top-4 right-4 opacity-10 md:opacity-100 md:relative md:float-right md:ml-6 md:mb-2 w-32 h-24">
                            <img src="/images/l-p-plates-graphic.png" alt="L and P Plates" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="font-anton text-3xl mb-4 text-text-main uppercase">Passing Your Practical Driving Test First Go!</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p className="mb-4">
                                Feeling anxious about your upcoming driving test, particularly if it’s your maiden attempt, is entirely normal. However, fret not! Numerous effective strategies exist to ready yourself for the test and ensure a successful outcome.
                            </p>
                            <p className="mb-4">
                                To begin, ensure you avoid rushing into the test! Our skilled instructors will determine your readiness for the test. Rest assured, our driving school guarantees comprehensive preparation, alleviating the need for excessive worry.
                            </p>
                            <p>
                                An excellent method to ready yourself for the test is to acquaint yourself with Queensland’s transport testing area. Though it might feel like a cheat code, driving in a familiar territory is a smart tactic. Getting to know the traffic patterns and road layout increases your chances of performing well on the driving test.
                            </p>
                        </div>
                    </div>

                    {/* Assessment Criteria */}
                    <div>
                        <h3 className="font-anton text-2xl mb-6 text-primary uppercase">What You Will Be Assessed On</h3>
                        <p className="mb-6 text-gray-700 text-lg">
                            During the assessment, your proficiency will be evaluated in various driving skills, including Reverse Parallel Parking, Turnaround Manoeuvres, U-Turns, Hill Starts, Gear Changes, and Straight Reversing.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                "Conducting pre-entry safety checks",
                                "Judging spatial areas while moving",
                                "Setting mirrors to minimise blind spots",
                                "Checking gaps when changing lanes",
                                "Mastering steering operation and control",
                                "Employing correct reversing techniques",
                                "Understanding traffic signs and symbols",
                                "Interacting with trucks, buses, & motorcycles"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span className="font-medium text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Preparation Guide - Official Q-Safe Manual */}
                    <div className="bg-orange-50 rounded-2xl p-8 border-l-4 border-orange-400 relative overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div className="flex-1">
                                <h3 className="font-anton text-2xl mb-3 text-gray-900 uppercase">Prepare for Your Test</h3>
                                <p className="text-gray-700 text-lg mb-4">
                                    The practical driving test in Brisbane requires specific skills and knowledge to pass. We strongly recommend taking the time to carefully review everything you will be assessed on.
                                </p>
                            </div>
                            <div className="shrink-0 w-full md:w-auto">
                                <a
                                    href="https://bookingtimes-public.s3.ap-southeast-2.amazonaws.com/366/q-safe-manual-june-2015v4-march-2021-updates.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-white border border-orange-200 hover:border-orange-400 text-gray-800 px-6 py-4 rounded-xl transition-all shadow-sm hover:shadow-md group w-full md:w-auto"
                                >
                                    <svg className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                    </svg>
                                    <div className="text-left">
                                        <span className="block font-bold text-lg leading-none mb-1 text-orange-900">Q-Safe Guide</span>
                                        <span className="text-sm text-gray-500">Download Official PDF</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Resources & Logs */}
                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                        <h3 className="font-anton text-2xl mb-4 text-blue-900">Essential Requirements</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-2 rounded-full shadow-sm text-blue-600 font-bold min-w-[40px] text-center">1</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Queensland Learner Log Book</h4>
                                    <p className="text-gray-700">Make sure your Log Book is filled out correctly with 100 hours logged and approved before your driving test.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-2 rounded-full shadow-sm text-blue-600 font-bold min-w-[40px] text-center">2</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Hazard Perception Test</h4>
                                    <p className="text-gray-700">Prior to your driving test, you will need to complete the hazard perception test to sharpen your road awareness.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testing Centers */}
                    <div>
                        <h2 className="font-anton text-3xl mb-6 text-text-main uppercase">We Service These Testing Centres</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-xl mb-4 text-primary border-b pb-2">Brisbane Northside</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Carseldine%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Carseldine
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Toowong%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Toowong
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Strathpine%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Strathpine
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Redcliffe%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Redcliffe
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Caboolture%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Caboolture
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-4 text-primary border-b pb-2">Brisbane Southside</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Cleveland%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Cleveland
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=wynnum%20transport%20and%20main%20roads%20customer%20service%20centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Wynnum
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Greenslopes%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Greenslopes
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Sherwood%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Sherwood
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.qld.gov.au/transport/contacts/centres/view?title=Logan%20Transport%20and%20Main%20Roads%20Customer%20Service%20Centre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            • Logan City
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-background-alt rounded-2xl p-8 text-center">
                        <h2 className="font-anton text-3xl mb-4">Gear Up for Success!</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Master your driving test with confidence. Trust us to prepare you thoroughly and boost your confidence for test day!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/prices"
                                className="inline-block bg-primary text-white font-anton uppercase text-lg px-8 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg"
                            >
                                Book Test Package
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
