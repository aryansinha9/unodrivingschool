import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import FAQItem from "@/app/components/FAQItem";

export default function FAQs() {
    return (
        <main className="min-h-screen bg-gray-50">
            <PageHeader
                title="Frequently Asked Questions"
                subtitle="Got questions? We've got answers. Everything you need to know about learning to drive with UNO."
            />

            <section className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Category: General & Scheduling */}
                    <div>
                        <h2 className="font-anton text-3xl text-primary mb-8 border-b-2 border-primary inline-block pb-2">General & Scheduling</h2>
                        <div className="bg-white rounded-2xl shadow-sm px-8">
                            <FAQItem
                                question="How do I schedule driving lessons with your school?"
                                answer="You can schedule lessons by contacting us via phone, email, or our website directly using the Book Now buttons."
                            />
                            <FAQItem
                                question="What is the cost of your driving lessons in Brisbane?"
                                answer="Our prices vary depending on the type of lesson and package you choose. We offer discounts for packages and promotions at times. Check our Prices page for the latest rates."
                            />
                            <FAQItem
                                question="How much does a driving lesson cost in Brisbane?"
                                answer="In Brisbane, standard driving lessons typically cost between $75 to $80 per hour lesson."
                            />
                            <FAQItem
                                question="Are there any discounts or packages available for driving lessons?"
                                answer="Some driving schools offer discounts or package deals for multiple lessons, so it's worth asking about any special offers they may have. Uno offers competitive packages."
                            />
                            <FAQItem
                                question="What payment methods are available?"
                                answer="Uno offers affordable driving lessons and amazing savings on lesson packages without breaking the bank! Payment methods include credit card, debit card, cash, or bank transfer. Gift Vouchers and Afterpay payment plans are also available."
                            />
                            <FAQItem
                                question="Do gift vouchers have an expiry date?"
                                answer="Yes, Gift Vouchers have a 6-month expiry from the date of purchase."
                            />
                            <FAQItem
                                question="Can I reschedule my Driving Lesson?"
                                answer="Yes, but please note that Uno Driving School requires a 24-hour cancellation notice to reschedule your driving lesson to avoid forfeiture."
                            />
                            <FAQItem
                                question="Do you offer pick-up and drop-off services?"
                                answer="Yes, we provide pick-up and drop-off services to make it convenient for our students. We can pick you up from home, work, or school."
                            />
                            <FAQItem
                                question="Can I choose the location for my driving lessons?"
                                answer="We can arrange lessons to start from your preferred location within our service area, but this may affect scheduling availability."
                            />
                            <FAQItem
                                question="How do I choose a reputable driving school?"
                                answer="Look for a driving school that is licensed, experienced, has positive reviews, offers comprehensive training programs, and has certified instructors."
                            />
                        </div>
                    </div>

                    {/* Category: Licensing & Log Book */}
                    <div>
                        <h2 className="font-anton text-3xl text-primary mb-8 border-b-2 border-primary inline-block pb-2">Licensing & Log Book</h2>
                        <div className="bg-white rounded-2xl shadow-sm px-8">
                            <FAQItem
                                question="What are the eligibility requirements to start driving lessons in Brisbane?"
                                answer="You typically need to be at least 16 years old and hold a learner's permit to begin lessons."
                            />
                            <FAQItem
                                question="How do I get my learner's license in Queensland?"
                                answer="You need to be at least 16 years old, pass a written PrepL road rules test, provide identification, and pay the required fees at a Queensland Transport centre."
                            />
                            <FAQItem
                                question="What are the conditions for learners in Queensland?"
                                answer={
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Display 'L' plates prominently on the front and back of the vehicle.</li>
                                        <li>Supervision by a fully licensed driver at all times while driving.</li>
                                        <li>Maintaining a zero blood alcohol concentration.</li>
                                        <li>Not using any mobile phones, including hands-free.</li>
                                        <li>Abiding by any additional conditions specified on your license.</li>
                                    </ul>
                                }
                            />
                            <FAQItem
                                question="Is it true that one hour of professional driving lesson counts as three logbook hours?"
                                answer="Yes! According to Queensland Transport regulations, one hour of professional driving lesson with a recognized driving school can be logged as three hours in the learner's logbook (for the first 10 lessons). This allows learners to progress more quickly towards completing their required 100 supervised driving hours."
                            />
                            <FAQItem
                                question="How can professional driving lessons be recorded in the QLD logbook?"
                                answer="Professional driving lessons can be recorded in the QLD logbook by indicating the start and end times of the lesson, the driving school's details, and the specific skills practiced during the session."
                            />
                            <FAQItem
                                question="What are the benefits of recording professional driving lessons in the QLD logbook?"
                                answer="Recording professional driving lessons not only helps learners advance faster in accumulating their required hours but also provides structured training from qualified instructors."
                            />
                            <FAQItem
                                question="Can I mix supervised driving hours with hours from professional driving lessons in my logbook?"
                                answer="Yes, learners can combine supervised driving hours with hours from professional driving lessons in their QLD logbook. This flexibility allows learners to benefit from both."
                            />
                            <FAQItem
                                question="What are the requirements for a log book in Qld?"
                                answer="Learner drivers are required to log a set number of supervised driving hours. The log book must accurately record details such as dates, duration, conditions, and supervisor details."
                            />
                            <FAQItem
                                question="How long does it take to get your logbook approved in Qld?"
                                answer="The processing time can vary but typically applicants should allow for a few weeks for the assessment and approval process."
                            />
                            <FAQItem
                                question="What is a log book exemption in Queensland?"
                                answer="A log book exemption allows certain drivers (e.g., mature age drivers, license conversions) to be exempt from the requirement to complete a log book of supervised driving hours. Check the QLD Transport website for specific eligibility criteria."
                            />
                            <FAQItem
                                question="Who is eligible for the log book exemption in Queensland?"
                                answer="Eligibility varies, but generally includes drivers aged over a certain threshold, individuals converting foreign licenses, or those transferring interstate licenses."
                            />
                            <FAQItem
                                question="How can I apply for a log book exemption in Queensland?"
                                answer="You typically need to submit required documentation to the Department of Transport and Main Roads, fill out a specific form, and provide proof of eligibility."
                            />
                        </div>
                    </div>

                    {/* Category: The Driving Test */}
                    <div>
                        <h2 className="font-anton text-3xl text-primary mb-8 border-b-2 border-primary inline-block pb-2">The Driving Test</h2>
                        <div className="bg-white rounded-2xl shadow-sm px-8">
                            <FAQItem
                                question="Where are the Driving Test centres located?"
                                answer={
                                    <div>
                                        <p className="mb-4">The main driving test centres we service include:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Brisbane Northside:</strong> Carseldine, Toowong, Strathpine, Redcliffe, Caboolture.</li>
                                            <li><strong>Brisbane Southside:</strong> Cleveland, Wynnum, Greenslopes, Sherwood, Logan City.</li>
                                            <li><strong>Gold Coast:</strong> Southport, Burleigh Waters, Helensvale, Currumbin Waters, Beenleigh.</li>
                                        </ul>
                                    </div>
                                }
                            />
                            <FAQItem
                                question="How do I book a Queensland driving test?"
                                answer="To book a Queensland driving test, you can visit the Department of Transport and Main Roads website or call their customer service line."
                            />
                            <FAQItem
                                question="What is the Queensland driving test like?"
                                answer="The test typically includes a practical assessment of your driving skills, knowledge of road rules, and ability to demonstrate safe driving practices (e.g., parallel parking, lane changing, turns)."
                            />
                            <FAQItem
                                question="How can I prepare for the Queensland driving test?"
                                answer="Practice driving regularly, study the road rules, and complete a mock driving test. Professional lessons can also help refine your skills."
                            />
                            <FAQItem
                                question="How many driving lessons do I need before taking the test?"
                                answer="The number of lessons varies for each individual based on skill level and practice. On average, students may require around 15-40 hours of practice before feeling confident. Our instructors can give you a better estimate after an assessment."
                            />
                            <FAQItem
                                question="What is the pass rate for the Queensland driving test?"
                                answer="The pass rate typically hovers around 50% to 60%. Preparation is key! Our mock tests can help increase your chances significantly."
                            />
                            <FAQItem
                                question="Is the Queensland driving test scary?"
                                answer="Many people experience nerves, but remembering that examiners are there to assess fairly can help. Preparation and practice are the best ways to overcome anxiety."
                            />
                            <FAQItem
                                question="What happens if I fail the Queensland driving test?"
                                answer="If you fail, you can usually rebook and retake the test after a waiting period (typically 7-14 days). Use the feedback to improve your skills."
                            />
                            <FAQItem
                                question="Do driving schools provide a vehicle for the driving test?"
                                answer="Yes, many students choose to book a lesson + test package which includes the use of our safety-equipped vehicle for the test itself."
                            />
                            <FAQItem
                                question="What should I bring to my Queensland driving test?"
                                answer="You should bring your learner's permit, your completed logbook (if applicable), proof of identity, and any other required documents. If using your own car, it must be roadworthy."
                            />
                        </div>
                    </div>

                    {/* Category: Hazard Perception Test */}
                    <div>
                        <h2 className="font-anton text-3xl text-primary mb-8 border-b-2 border-primary inline-block pb-2">Hazard Perception Test</h2>
                        <div className="bg-white rounded-2xl shadow-sm px-8">
                            <FAQItem
                                question="What is the Queensland Hazard Perception Test?"
                                answer="It is a component of the driver licensing process designed to assess a learner driver's ability to recognize and respond to potential hazards on the road via video clips."
                            />
                            <FAQItem
                                question="How do I prepare for the Queensland Hazard Perception Test?"
                                answer="You can access online practice tests provided by the Department of Transport and Main Roads. Studying road rules and taking driving lessons also helps."
                            />
                            <FAQItem
                                question="How many hazards do I need to identify in the Queensland Hazard Perception Test?"
                                answer="The number can vary. You must respond promptly by clicking the mouse when you perceive a potential danger (e.g., pedestrian, merging vehicle)."
                            />
                            <FAQItem
                                question="What happens if I fail the Queensland Hazard Perception Test?"
                                answer="If you fail, you may need to wait for a specific period before reattempting. Use the feedback provided to improve before your next attempt."
                            />
                        </div>
                    </div>

                    {/* Category: Preparation & Curriculum */}
                    <div>
                        <h2 className="font-anton text-3xl text-primary mb-8 border-b-2 border-primary inline-block pb-2">Preparation & Curriculum</h2>
                        <div className="bg-white rounded-2xl shadow-sm px-8">
                            <FAQItem
                                question="Are your driving instructors certified and experienced?"
                                answer="Yes, all our instructors are certified and have extensive experience in teaching safe holistic driving practices."
                            />
                            <FAQItem
                                question="What qualifications should I look for in a driving instructor?"
                                answer="A good driving instructor should be licensed, experienced, patient, professional, and able to effectively communicate and teach driving skills."
                            />
                            <FAQItem
                                question="What can I expect on my first lesson?"
                                answer="If you're inexperienced, you'll be taken to a quiet road to learn car controls and steering. If you're experienced, we'll assess your current skills and identify areas for improvement. Don't worry, our instructors are super friendly!"
                            />
                            <FAQItem
                                question="What do I need on my first Driving Lesson?"
                                answer={
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Queensland Learner License (including translations if needed).</li>
                                        <li>Learner Logbook or App.</li>
                                        <li>Glasses or medical certificates if required.</li>
                                        <li>Comfortable clothing and closed shoes.</li>
                                        <li>Water bottle.</li>
                                        <li>A smile! 🙂</li>
                                    </ul>
                                }
                            />
                            <FAQItem
                                question="Should I learn manual or automatic?"
                                answer="It depends on your preference! Automatic is easier to learn as there are no gears to manage, making it great for city driving. Manual gives you more control and allows you to drive both types of cars later on (if you pass in a manual). Note: Passing in an auto restricts you to auto cars only for the first year (P1)."
                            />
                            <FAQItem
                                question="Can I learn to drive with a manual transmission at a driving school?"
                                answer="Some driving schools offer manual transmission instruction. Uno provides both automatic and will have manual options."
                            />
                            <FAQItem
                                question="Is there a specific curriculum or program for the driving lessons?"
                                answer="Yes, we have a structured curriculum that covers essential driving skills and prepares you for the test and a lifetime of safe driving."
                            />
                            <FAQItem
                                question="How comprehensive is the learning to drive curriculum?"
                                answer="Uno Driving School offers a structured lesson plan, including a textbook, instructor lesson plans, and a means to monitor your progress."
                            />
                            <FAQItem
                                question="How do I track my progress during the lessons?"
                                answer="We maintain progress records for each student, and your instructor will provide feedback after each lesson. You may also access progress reports via the student portal."
                            />
                            <FAQItem
                                question="How long does it take to complete a driving course?"
                                answer="The duration can vary based on individual learning pace. Typically, students can complete a driving course in a few weeks to a few months."
                            />
                            <FAQItem
                                question="Do you offer refresher courses for experienced drivers?"
                                answer="Yes! We offer refresher courses to help experienced drivers regain confidence or brush up on skills."
                            />
                        </div>
                    </div>

                    {/* CTA Section */}
                    <section className="bg-primary text-white py-16">
                        <div className="container mx-auto px-6 text-center max-w-4xl">
                            <h2 className="font-anton text-3xl lg:text-4xl mb-6 uppercase">Can't Find the Answer?</h2>
                            <p className="text-xl mb-8 font-roboto opacity-95">
                                Have a question we haven’t covered? Send us a message! Our team is here to help with any inquiries you may have.
                            </p>
                            <Link href="/contact-us" className="bg-white text-primary font-anton uppercase px-12 py-4 rounded-full text-xl hover:bg-gray-100 transition-colors inline-block shadow-lg">
                                Send a Message
                            </Link>
                        </div>
                    </section>

                </div>
            </section>

        </main>
    );
}
