import PageHeader from "@/app/components/PageHeader";

export default function Careers() {
    return (
        <main className="min-h-screen">
            <PageHeader title="DRIVER INSTRUCTOR JOBS" />
            <section className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="prose max-w-none text-gray-700 font-roboto leading-relaxed space-y-6">
                    <p className="lead text-lg font-bold">
                        Are you interested in a rewarding career as a driving instructor? Are you confident in your skills and ready to be a part of the Uno Driving School team? We invite you to apply today!
                    </p>
                    <p>
                        At Uno Driving School, we are seeking personable and experienced driving instructors who can guide and support our students on their journey to becoming proficient drivers. Our ideal candidates possess the following qualities:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>A warm and approachable demeanor to offer encouragement and understanding to new learners.</li>
                        <li>A commitment to ensuring every student emerges as a skilled and safe driver.</li>
                        <li>A depth of knowledge to impart excellent driving practices to the next generation of drivers.</li>
                    </ul>
                    <p>
                        If you believe you embody these qualities, we would be delighted to consider your application! With a steady influx of students each week, we require dedicated instructors capable of teaching both manual and automatic driving on a full-time or part-time basis.
                    </p>
                    <p>
                        When applying, please be prepared to address the following questions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Are you a registered driver instructor with Queensland Transport?</li>
                        <li>Do you hold a valid blue card?</li>
                        <li>Have you prepared a comprehensive CV?</li>
                        <li>Are you skilled in teaching Manual, Automatic, or both?</li>
                        <li>Are you registered with Keys2Drive?</li>
                    </ul>
                    <p>
                        Embark on a fulfilling career with MyLife Driving School and make a positive impact on the driving skills and safety of aspiring motorists. We look forward to welcoming passionate and competent instructors into our dynamic team!Apply now to begin a fulfilling career sharing your love for safe driving with others.
                    </p>

                    <hr className="my-10 border-gray-200" />

                    <div className="bg-background-alt p-8 rounded-2xl shadow-sm">
                        <h3 className="font-anton text-2xl mb-6 text-text-main uppercase">Contact Details</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="font-bold text-lg mb-2">Address</h4>
                                <p>Suite 128, 42 Manilla Street East Brisbane Queensland 4169</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Phone</h4>

                                <p>0456860714</p>
                            </div>
                            <div className="md:col-span-2">
                                <h4 className="font-bold text-lg mb-2">Email</h4>
                                <a href="mailto:hello@unodrivingschool.com.au" className="text-primary hover:underline">hello@unodrivingschool.com.au</a>
                            </div>
                        </div>

                        <h3 className="font-anton text-2xl mb-6 text-text-main uppercase">Apply Now</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors" placeholder="Name" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors" placeholder="Email" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors" placeholder="Phone Number" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors h-32" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="bg-primary text-white font-anton uppercase text-xl px-12 py-3 rounded-full hover:bg-green-600 transition-colors w-full md:w-auto shadow-md">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
