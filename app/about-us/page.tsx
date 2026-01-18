import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";

export default function AboutUs() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="About Us"
                subtitle="Uno Driving School – Professional Driving Lessons in Brisbane, Logan and Gold Coast."
            />

            {/* Intro Section */}
            <section className="container mx-auto px-6 py-12 lg:py-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="font-anton text-3xl lg:text-4xl text-primary mb-4">Welcome to UNO Driving School</h2>
                    <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                        Welcome to UNO Driving School’s official website, your pre-eminent destination for comprehensive and professional driver training services in Brisbane, Queensland. Step into a world of top-notch instruction and cutting-edge learning resources designed to elevate your driving skills and confidence on the road.
                    </p>
                    <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                        Our fantastic team of certified instructors is dedicated to providing excellent driving lessons with a holistic approach. We’re not just here to teach you the basics; we want to make you the best driver you can be. With heaps of experience and dedication, we aim to help you not only master essential skills but also embrace a holistic learning experience, ensuring you confidently navigate the roads. Get ready to rock the road with confidence!
                    </p>
                </div>
            </section>

            {/* Training Programs */}
            <section className="bg-background-alt py-16">
                <div className="container mx-auto px-6">
                    <h2 className="font-anton text-3xl text-center mb-12">Learner Driver Training Programs</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Automatic */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="font-anton text-2xl mb-4 text-text-main">Automatic Driving Lessons</h3>
                            <p className="text-gray-600 mb-4">
                                For those who want a more relaxed driving experience, our automatic driving lessons focus on the simplicity and ease of driving without the added complexity of gear changes. Excellent choice for busy urban environments.
                            </p>
                            <Link href="/prices" className="text-primary font-bold hover:underline uppercase font-anton">Book Now</Link>
                        </div>

                        {/* Manual */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm opacity-75 relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-bold px-2 py-1 rounded uppercase">Coming Soon</div>
                            <h3 className="font-anton text-2xl mb-4 text-text-main">Manual Driving Lessons</h3>
                            <p className="text-gray-600">
                                If you’re looking to gain more control over your driving experience. Learning to drive a manual vehicle involves understanding gear changes, clutch control, and overall vehicle dynamics.
                            </p>
                        </div>

                        {/* EV */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm opacity-75 relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded uppercase">Coming Soon</div>
                            <h3 className="font-anton text-2xl mb-4 text-text-main">EV Training</h3>
                            <p className="text-gray-600">
                                We have embraced the shift by offering specialised training for electric vehicles. Covers regenerative braking, charging procedures, and handling differences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Log Book & Test Prep */}
            <section className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="font-anton text-3xl text-primary">Queensland Log Book Approved</h3>
                    <div className="bg-green-50 border-l-4 border-primary p-6 rounded-r-xl">
                        <p className="font-bold text-lg text-gray-800 mb-2">Boost your log book progress with UNO!</p>
                        <p className="text-gray-700">
                            Experience our unique offer where <span className="font-bold">one hour of lessons counts as three log book hours</span> for your first 10 lessons. Achieve a total of 30 log book hours in just 10 lessons!
                        </p>
                    </div>
                    <p className="text-gray-700">
                        As a Queensland Log Book approved driving school, UNO Driving School ensures that our training programs align with state licensing requirements.
                    </p>
                </div>
                <div className="space-y-6">
                    <h3 className="font-anton text-3xl text-primary">Test Preparation</h3>
                    <p className="text-gray-700">
                        Our expert instructors are here to guide you through the entire driving test preparation process. We offer targeted lessons on essential driving manoeuvres, including parallel parking and navigating complex intersections.
                    </p>
                    <div className="bg-background-alt p-6 rounded-xl">
                        <h4 className="font-anton text-xl mb-2">UNO Mock Driving Tests</h4>
                        <p className="text-gray-600 mb-4">
                            Get exam-ready with comprehensive practice sessions that replicate the real Queensland driving test environment.
                        </p>
                        <Link href="/brisbane-driving-test" className="text-primary font-bold hover:underline uppercase font-anton text-sm">Learn More about Tests</Link>
                    </div>
                </div>
            </section>

            {/* More Services */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="font-anton text-3xl text-center mb-12">Specialised Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-anton text-xl mb-3">Elderly Assessments</h4>
                            <p className="text-sm text-gray-600">Supporting older adults in maintaining their driving abilities, safety, and independence.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-anton text-xl mb-3">License Upgrades</h4>
                            <p className="text-sm text-gray-600">Need to upgrade from automatic to manual? We make the process smooth and hassle-free.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-anton text-xl mb-3">Refresher Training</h4>
                            <p className="text-sm text-gray-600">Tailored courses to boost confidence and improve comfort behind the wheel.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-anton text-xl mb-3">Overseas Licenses</h4>
                            <p className="text-sm text-gray-600">License conversions to obtain a Queensland license for international drivers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy & CTA */}
            <section className="container mx-auto px-6 py-16 text-center">
                <div className="max-w-3xl mx-auto mb-12">
                    <h2 className="font-anton text-3xl mb-4">Commitment to Safety</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At UNO Driving School, we strive to make learning to drive a memorable experience. Our friendly and experienced instructors guide you every step of the way, focusing not just on passing the test but on instilling life-long safe driving habits that ensure the safety of everyone on the road.
                    </p>
                </div>

                <div className="bg-primary text-white p-12 rounded-3xl shadow-xl transform rotate-1">
                    <h2 className="font-anton text-4xl lg:text-5xl mb-6 uppercase">Ready To Hit the Road?</h2>
                    <p className="text-xl mb-8 font-roboto opacity-90">
                        At Uno Driving School, we’ve got your back. Join us today and discover how enjoyable learning to drive can be!
                    </p>
                    <Link href="/prices" className="bg-white text-primary font-anton uppercase px-10 py-4 rounded-full text-xl hover:bg-gray-100 transition-colors inline-block shadow-lg">
                        Register Now
                    </Link>
                </div>
            </section>

        </main>
    );
}
