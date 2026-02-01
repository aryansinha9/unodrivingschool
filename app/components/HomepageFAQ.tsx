"use client";

import Link from "next/link";
import FAQItem from "./FAQItem";

export default function HomepageFAQ() {
    return (
        <section className="container mx-auto px-6 pt-8 pb-16 max-w-4xl">
            <h2 className="font-anton text-3xl lg:text-4xl text-center mb-8 uppercase text-text-main">
                Frequently Asked Questions
            </h2>

            <div className="bg-white rounded-2xl shadow-sm px-6 py-2 mb-8 border border-gray-100">
                <FAQItem
                    question="How do I schedule driving lessons?"
                    answer="You can schedule lessons easily by contacting us via phone or using the 'Book Now' buttons on our website. We'll find a time that works for you."
                />
                <FAQItem
                    question="How much does a driving lesson cost?"
                    answer="Standard driving lessons typically cost between $75 to $80 per hour. We also offer value packages that reduce the hourly rate significantly."
                />
                <FAQItem
                    question="Do you offer pick-up and drop-off services?"
                    answer="Yes! We provide convenient pick-up and drop-off from your home, school, or workplace within our service areas."
                />
                <FAQItem
                    question="Is it true that 1 hour lesson = 3 logbook hours?"
                    answer="Yes! For the first 10 hours of professional driving lessons, each hour counts as 3 hours in your Queensland learner logbook (totaling 30 hours)."
                />
                <FAQItem
                    question="Do you provide a car for the driving test?"
                    answer="Absolutely. We offer lesson + test packages that include the use of our safety-equipped vehicle for your actual driving test."
                />
                <FAQItem
                    question="How many lessons do I need before the test?"
                    answer="It varies for everyone. On average, students might take 10-20 professional hours plus practice. Our instructors will assess your readiness and give you an honest estimate."
                />
                <FAQItem
                    question="Are your instructors certified?"
                    answer="Yes, all UNO driving instructors are fully certified, accredited, and hold blue cards (working with children checks)."
                />
                <FAQItem
                    question="Should I learn manual or automatic?"
                    answer="It depends on your goals! Automatic is easier to learn and great for city driving. Manual gives you more control and a license to drive both types."
                />
            </div>

            <div className="text-center">
                <Link href="/faqs" className="inline-block border-2 border-primary text-primary font-anton uppercase px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all">
                    View All FAQs
                </Link>
            </div>
        </section>
    );
}
