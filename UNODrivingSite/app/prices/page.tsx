import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import PricingCard from "@/app/components/PricingCard";

export default function Prices() {
    return (
        <main className="min-h-screen bg-gray-50">
            <PageHeader
                title="Lesson Fees and Packages!"
                subtitle="Affordable lessons with no hidden costs."
            />

            {/* Intro Section */}
            <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Overcome pre-test jitters and driving concerns with our support! Whether you’re rusty behind the wheel, a new driver, or unfamiliar with local road rules, we’ve got you covered. Leave your worries behind and trust our expertise. No need to worry! We’ve got your back!
                </p>
            </section>

            {/* Single Lessons */}
            <section className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h2 className="font-anton text-4xl text-primary uppercase mb-4">Single Lessons Prices</h2>
                    <p className="text-gray-600 italic">The first 10 lessons with an accredited instructor is equal to 30 hours in your logbook!</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PricingCard
                        title="Spark Lesson"
                        subtitle="One Hour Driving Lesson"
                        price="$75.00 / Hour"
                        features={[
                            "Fully Insured",
                            "Dual Controls",
                            "Automatic Car",
                            "Full Driving Theory",
                            "Private In-Car Instruction",
                            "Holistic Approach",
                            "Free Learner Plates",
                            "GPS Navigation",
                            "Friendly Smile"
                        ]}
                    />
                    <PricingCard
                        title="Ignition Lesson"
                        subtitle="90 Minute Driving Lesson"
                        price="$95.00"
                        features={[
                            "Fully Insured",
                            "Dual Controls",
                            "Automatic Car",
                            "Full Driving Theory",
                            "Private In-Car Instruction",
                            "Holistic Approach",
                            "Free Learner Plates",
                            "GPS Navigation",
                            "Friendly Smile"
                        ]}
                    />
                    <PricingCard
                        title="Cruise Lesson"
                        subtitle="Two Hour Driving Lesson"
                        price="$140.00"
                        features={[
                            "Fully Insured",
                            "Dual Controls",
                            "Automatic Car",
                            "Full Driving Theory",
                            "Private In-Car Instruction",
                            "Holistic Approach",
                            "Free Learner Plates",
                            "Mock Test Available",
                            "Friendly Smile"
                        ]}
                    />
                </div>
            </section>

            {/* Driving Lesson Packages */}
            <section className="container mx-auto px-6 py-12 bg-white rounded-3xl my-12 shadow-sm">
                <div className="text-center mb-12">
                    <h2 className="font-anton text-4xl text-primary uppercase mb-4">Driving Lesson Packages</h2>
                    <div className="text-gray-600 space-y-2">
                        <p className="font-bold">Please Note: These prices does not include Queensland Transport Fee.</p>
                        <p>Afterpay and Gift Vouchers are available.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PricingCard
                        title="Boost Package"
                        subtitle="3 Hours of Driving Lessons"
                        price="$190.00"
                        features={[
                            "Free Learner Plates",
                            "Start Safe",
                            "Fully Insured & Dual Controls",
                            "Automatic Car",
                            "Private In-Car Instruction",
                            "Full Driving Theory",
                            "Holistic Approach",
                            "Mock Tests Available",
                            "Friendly Smile"
                        ]}
                    />
                    <PricingCard
                        title="Turbo Package"
                        subtitle="5 Hours of Driving Lessons"
                        price="$355.00"
                        features={[
                            "Free Learner Plates",
                            "Fully Insured",
                            "Automatic Car",
                            "Dual Controlled",
                            "Pick Up & Drop Off",
                            "Test Routes",
                            "Mock Test Available",
                            "Provisional Plates",
                            "High Pass Rates",
                            "Friendly Smile"
                        ]}
                    />
                    <PricingCard
                        title="Nitro Package"
                        subtitle="10 Hours of Driving Lessons"
                        price="$700.00"
                        features={[
                            "Free Learner Plates",
                            "Fully Insured & Dual Controls",
                            "Automatic Car",
                            "Dual Controlled",
                            "Pick Up & Drop Off",
                            "Test Routes",
                            "Mock Test Available",
                            "Provisional Plates",
                            "High Pass Rates",
                            "Friendly Smile"
                        ]}
                        highlight={true}
                    />
                </div>
            </section>

            {/* Driving Test Plans */}
            <section className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h2 className="font-anton text-4xl text-primary uppercase mb-4">Driving Test Plans</h2>
                    <div className="text-gray-600 space-y-2">
                        <p className="font-bold">Please Note: These prices does not include Queensland Transport Fee.</p>
                        <p>Afterpay and Gift Vouchers are available.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PricingCard
                        title="Lightning McQueen Package"
                        subtitle="10 Hours of Driving Lessons plus Test Package"
                        price="$855.00"
                        features={[
                            "10 Hours of Driving Lessons",
                            "Driving Test Package",
                            "Mock Tests",
                            "Automatic Car",
                            "Use of Instructors Car for Test",
                            "Pick Up & Drop Off",
                            "Provisional Plates",
                            "High Pass Rates",
                            "Confidence-Building Techniques",
                            "Friendly Smile"
                        ]}
                        highlight={true}
                    />
                    <PricingCard
                        title="Fast & Furious Package"
                        subtitle="5 Hours of Driving Lessons plus Test Package"
                        price="$520.00"
                        features={[
                            "5 Hours of Driving Lessons",
                            "Driving Test Package",
                            "Dual Control Automatic Car",
                            "High Pass Rates",
                            "Full Driving Theory",
                            "Use of Instructors Car for Test",
                            "Mock Tests Available",
                            "Provisional Plates",
                            "Confidence-Building Techniques",
                            "Friendly Smile"
                        ]}
                    />
                    <PricingCard
                        title="Zoom Test Package"
                        subtitle="Driving Test Package including one hour pre drive"
                        price="$200.00"
                        features={[
                            "One Hour Practice Pre-Drive",
                            "Fully Insured",
                            "Dual Control Automatic Car",
                            "Private In-Car Instruction",
                            "Use of Instructors Car for Test",
                            "High Pass Rates",
                            "Mock Tests Available",
                            "Provisional Plates",
                            "Confidence-Building Techniques",
                            "Friendly Smile"
                        ]}
                    />
                </div>
            </section>

            {/* Speciality Lesson and Test Packages */}
            <section className="container mx-auto px-6 py-12 bg-white rounded-3xl my-12 shadow-sm">
                <div className="text-center mb-12">
                    <h2 className="font-anton text-4xl text-primary uppercase mb-4">Speciality Lesson and Test Packages</h2>
                    <div className="text-gray-600 space-y-2">
                        <p className="font-bold">Please Note: These prices does not include Queensland Transport Fee.</p>
                        <p>Please note: Queensland Transport does not allow triple log book hours for Night Driving.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PricingCard
                        title="Mock Driving Test"
                        subtitle="Simulated Driving Test Lesson"
                        price="$85.00"
                        features={[
                            "Full-Length Simulated Driving Test",
                            "Detailed Personalised Feedback Report",
                            "Video Recording & Playback",
                            "Pre-Test Q&A",
                            "Post Test & Debrief Coaching",
                            "Local Test Route Familiarisation",
                            "Dual Control Automatic Car",
                            "Confidence-Building Techniques",
                            "Friendly Smile"
                        ]}
                    />
                    <PricingCard
                        title="Night Rider Lesson"
                        subtitle="One Hour of Night Driving Lesson"
                        price="$95.00"
                        features={[
                            "One Hour Night Driving",
                            "Fully Insured",
                            "Dual Control Automatic Car",
                            "Hazard Perception",
                            "Pick Up & Drop Off",
                            "City Night Driving",
                            "Motorway Night Driving",
                            "Confidence-Building Techniques",
                            "Friendly Smile"
                        ]}
                    />
                    <PricingCard
                        title="GUMBALL 3000 Package"
                        subtitle="Use of Driver Instructors car only for driving test"
                        price="$120.00"
                        features={[
                            "No Lesson",
                            "Cabin Drill",
                            "Car Rental for Test",
                            "Dual Control Automatic Car",
                            "Full Insurance",
                            "Meet at Test Centre",
                            "Pre-Test Q&A",
                            "Provisional Plates",
                            "Friendly Smile"
                        ]}
                    />
                </div>
            </section>

            {/* Referral & CTA */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="font-anton text-4xl lg:text-5xl mb-6">REFERRAL PROGRAM</h2>
                    <p className="text-xl mb-8 font-roboto opacity-95">
                        For every person that you refer, earn $10 off your Road Test Package.
                        <br />
                        <span className="text-sm">(person referred must let us know YOU referred them)</span>
                    </p>

                    <div className="border-t border-white/30 my-10 pt-10">
                        <h3 className="font-anton text-3xl mb-4 text-white uppercase">"Affordable Driving Lessons and Gift Vouchers!"</h3>
                        <p className="text-lg leading-relaxed mb-8">
                            Explore our unbeatable prices at Uno Driving School! We offer affordable driving lesson packages, along with convenient gift vouchers and flexible Afterpay options. Start your journey to becoming a skilled driver without breaking the bank. Contact us today to learn more!
                        </p>
                        <Link href="/contact-us" className="bg-white text-primary font-anton uppercase px-12 py-4 rounded-full text-xl hover:bg-gray-100 transition-colors inline-block shadow-lg">
                            BOOK NOW
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
