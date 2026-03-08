import PageHeader from "@/app/components/PageHeader";

export default function TermsConditions() {
    return (
        <main className="min-h-screen">
            <PageHeader title="Terms & Conditions" />
            <section className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="prose max-w-none text-gray-700 font-roboto leading-relaxed">
                    <ul className="list-disc pl-6 space-y-4">
                        <li>
                            Uno Driving School instructors are all Driver Trainer accredited with the Queensland Department of Transport and are in possession of a valid Blue Card to work with minors.
                        </li>
                        <li>
                            These accreditations can be produced upon request at any time.
                        </li>
                        <li>
                            Uno Driving School instructors will at all times conduct themselves in a calm, professional manner.
                        </li>
                        <li>
                            No abusive or violent behavior will be tolerated from any student and we reserve the right to terminate a lesson at any time (no refund of fees).
                        </li>
                        <li>
                            All information provided to Uno Driving School will remain confidential. We will not divulge such information to any other third party (unless required to do so in the interest of the student).
                        </li>
                        <li>
                            All lessons and packages are to be paid for in full prior to the commencement of the first lesson.
                        </li>
                        <li>
                            By making a booking online or via telephone, you are agreeing to the terms and conditions of Uno Driving School.
                        </li>
                        <li>
                            A valid driver license or learners license must be produced before a lesson can commence. Failure to do so will result in the lesson being rescheduled. A $50 call out fee will be charged.
                        </li>
                        <li>
                            Students must be drug and alcohol free. The instructor reserves the right to use their own discretion in this regard. The lesson will be rescheduled and a $50 call out fee charged.
                        </li>
                        <li>
                            Uno Driving School reserves the right to cancel or reschedule a lesson if necessary.
                        </li>
                        <li>
                            If a student fails, refuses or cannot afford to pay for the booked lesson or package deal, then the student’s legal guardian shall be liable for such payments.
                        </li>
                        <li>
                            Uno Driving School reserves the right to change lesson fees and packages at any time. This, however, does not affect any pre-paid lessons or packages.
                        </li>
                        <li>
                            We or our instructors do not accept any responsibility for personal items left inside our vehicles.
                        </li>
                        <li>
                            All lessons, package deals and gift certificates have a six month expiry period from the date of purchase. Any outstanding lessons after the expiry date shall be forfeited.
                        </li>
                        <li>
                            Driving lessons can be done in your own vehicle at the discretion of the instructor. We, however, do not accept responsibility whatsoever for traffic infringements or accidents whilst with the learner driver. You also hereby warrant that your vehicle is covered by compulsory third party and comprehensive insurance.
                        </li>
                        <li>
                            Uno Driving School does not accept any responsibility for the outcome of any driving test and any traffic infringements or speeding fines occurred during the test. The student or their legal guardian shall be liable to pay for those.
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
