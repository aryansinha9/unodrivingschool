import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Peter Hooper - Brisbane Driving Instructor",
    description: "Meet Peter Hooper, a highly experienced driving instructor in Brisbane with over 20 years of professional experience.",
};

export default function InstructorPage() {
    return (
        <main className="min-h-screen bg-background-main pb-20">
            {/* Minimal Header Spacer */}
            <div className="h-12 bg-primary"></div>

            <section className="container mx-auto px-6 py-12 lg:py-20 max-w-6xl">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
                    
                    {/* Image Column */}
                    <div className="w-full lg:w-2/5 p-6 md:p-10 bg-gray-50 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 relative">
                        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-8 bg-white">
                            <Image
                                src="/Peter-Hooper.JPG"
                                alt="Peter Hooper - Driving Instructor"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 320px"
                                priority
                            />
                        </div>
                        
                        <div className="w-full space-y-4 px-4">
                            <h3 className="font-anton text-2xl uppercase text-text-main border-b-2 border-primary pb-2 inline-block">Certifications & Details</h3>
                            <ul className="space-y-3 font-roboto font-medium text-gray-700">
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Fully Vaccinated (COVID-19)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Blue Card Certified (Working with Children)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 7H5.2l-1.6 3H2v6h2a3 3 0 006 0h4a3 3 0 006 0h2v-4.5l-3-4.5H16M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                                    </svg>
                                    <span>Car Used: Suzuki Swift, Automatic</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-3/5 p-8 md:p-12">
                        <h1 className="font-anton text-4xl md:text-5xl uppercase text-text-main mb-2">
                            Meet <span className="text-primary">Peter Hooper</span>
                        </h1>
                        <h2 className="font-roboto text-lg md:text-xl font-bold text-gray-500 mb-8">
                            Professional Driving Lessons in Brisbane | Safe, Confident Driving Starts Here
                        </h2>

                        <div className="space-y-6 font-roboto text-gray-700 leading-relaxed text-lg mb-10">
                            <p>
                                Peter Hooper is a highly experienced driving instructor in Brisbane and the founder of MyLife Driving School, 
                                with over 20 years of professional experience helping learners become safe and confident drivers.
                            </p>
                            <p>
                                Before becoming a driving instructor, Peter worked as a chef in leading hotels, including the Hilton. He later 
                                followed his passion for teaching, dedicating his career to helping students develop essential driving skills for life.
                            </p>
                            <p>
                                Known for his calm, patient, and supportive teaching style, Peter specialises in helping nervous drivers, beginners, 
                                and overseas licence holders feel comfortable behind the wheel. His modern teaching methods and personalised lessons 
                                ensure every student learns at their own pace.
                            </p>
                            <p>
                                Peter&apos;s focus isn&apos;t just on passing the driving test — it&apos;s on building safe driving habits, confidence, and real-world 
                                skills that last a lifetime. Every lesson is structured to be clear, practical, and easy to follow.
                            </p>
                            <p>
                                Learning to drive with Peter is a relaxed and positive experience. He creates a stress-free environment where students 
                                can stay focused, build confidence, and even enjoy the process of learning to drive.
                            </p>
                            <p>
                                Outside of driving instruction, Peter has a strong passion for cars and rally racing. He enjoys meeting new people, 
                                travelling, cooking, and participating in motorsport events across Australia.
                            </p>
                        </div>

                        <div className="bg-background-alt p-6 rounded-xl border border-gray-200">
                            <p className="font-roboto font-medium text-gray-800 text-lg mb-4 flex items-start gap-4 shadow-sm">
                                <span className="text-2xl">👉</span>
                                <span>
                                    If you&apos;re looking for a trusted Brisbane driving instructor who puts your progress first, contact MyLife Driving 
                                    School today and start your journey towards safe and confident driving.
                                </span>
                            </p>
                            <div className="flex pt-2">
                                <Link 
                                    href="/contact-us" 
                                    className="bg-primary text-white font-anton uppercase px-8 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl ml-10"
                                >
                                    Book With Peter
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
