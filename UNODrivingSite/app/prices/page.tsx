import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import PricingCard from "@/app/components/PricingCard";
import { getPageContent, pricesDefaults } from "@/lib/supabase/pageContent";

export default async function Prices() {
  const content = await getPageContent('prices', pricesDefaults);

  return (
    <main className="min-h-screen bg-gray-50">
      <PageHeader
        title={content.page_header_title}
        subtitle={content.page_header_subtitle}
      />

      {/* Intro Section */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {content.intro_body}
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
            title={content.spark.title}
            subtitle={content.spark.subtitle}
            price={content.spark.price}
            features={[
              "Fully Insured", "Dual Controls", "Automatic Car", "Full Driving Theory",
              "Private In-Car Instruction", "Holistic Approach", "Free Learner Plates",
              "GPS Navigation", "Friendly Smile"
            ]}
          />
          <PricingCard
            title={content.ignition.title}
            subtitle={content.ignition.subtitle}
            price={content.ignition.price}
            features={[
              "Fully Insured", "Dual Controls", "Automatic Car", "Full Driving Theory",
              "Private In-Car Instruction", "Holistic Approach", "Free Learner Plates",
              "GPS Navigation", "Friendly Smile"
            ]}
          />
          <PricingCard
            title={content.cruise.title}
            subtitle={content.cruise.subtitle}
            price={content.cruise.price}
            features={[
              "Fully Insured", "Dual Controls", "Automatic Car", "Full Driving Theory",
              "Private In-Car Instruction", "Holistic Approach", "Free Learner Plates",
              "Mock Test Available", "Friendly Smile"
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
            title={content.boost.title}
            subtitle={content.boost.subtitle}
            price={content.boost.price}
            features={[
              "Free Learner Plates", "Start Safe", "Fully Insured & Dual Controls",
              "Automatic Car", "Private In-Car Instruction", "Full Driving Theory",
              "Holistic Approach", "Mock Tests Available", "Friendly Smile"
            ]}
          />
          <PricingCard
            title={content.turbo.title}
            subtitle={content.turbo.subtitle}
            price={content.turbo.price}
            features={[
              "Free Learner Plates", "Fully Insured", "Automatic Car", "Dual Controlled",
              "Pick Up & Drop Off", "Test Routes", "Mock Test Available",
              "Provisional Plates", "High Pass Rates", "Friendly Smile"
            ]}
          />
          <PricingCard
            title={content.nitro.title}
            subtitle={content.nitro.subtitle}
            price={content.nitro.price}
            features={[
              "Free Learner Plates", "Fully Insured & Dual Controls", "Automatic Car",
              "Dual Controlled", "Pick Up & Drop Off", "Test Routes", "Mock Test Available",
              "Provisional Plates", "High Pass Rates", "Friendly Smile"
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
            title={content.lightning.title}
            subtitle={content.lightning.subtitle}
            price={content.lightning.price}
            features={[
              "10 Hours of Driving Lessons", "Driving Test Package", "Mock Tests",
              "Automatic Car", "Use of Instructors Car for Test", "Pick Up & Drop Off",
              "Provisional Plates", "High Pass Rates", "Confidence-Building Techniques", "Friendly Smile"
            ]}
            highlight={true}
          />
          <PricingCard
            title={content.fast_furious.title}
            subtitle={content.fast_furious.subtitle}
            price={content.fast_furious.price}
            features={[
              "5 Hours of Driving Lessons", "Driving Test Package", "Dual Control Automatic Car",
              "High Pass Rates", "Full Driving Theory", "Use of Instructors Car for Test",
              "Mock Tests Available", "Provisional Plates", "Confidence-Building Techniques", "Friendly Smile"
            ]}
          />
          <PricingCard
            title={content.zoom.title}
            subtitle={content.zoom.subtitle}
            price={content.zoom.price}
            features={[
              "One Hour Practice Pre-Drive", "Fully Insured", "Dual Control Automatic Car",
              "Private In-Car Instruction", "Use of Instructors Car for Test", "High Pass Rates",
              "Mock Tests Available", "Provisional Plates", "Confidence-Building Techniques", "Friendly Smile"
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
            title={content.mock_test.title}
            subtitle={content.mock_test.subtitle}
            price={content.mock_test.price}
            features={[
              "Full-Length Simulated Driving Test", "Detailed Personalised Feedback Report",
              "Video Recording & Playback", "Pre-Test Q&A", "Post Test & Debrief Coaching",
              "Local Test Route Familiarisation", "Dual Control Automatic Car",
              "Confidence-Building Techniques", "Friendly Smile"
            ]}
          />
          <PricingCard
            title={content.night_rider.title}
            subtitle={content.night_rider.subtitle}
            price={content.night_rider.price}
            features={[
              "One Hour Night Driving", "Fully Insured", "Dual Control Automatic Car",
              "Hazard Perception", "Pick Up & Drop Off", "City Night Driving",
              "Motorway Night Driving", "Confidence-Building Techniques", "Friendly Smile"
            ]}
          />
          <PricingCard
            title={content.gumball.title}
            subtitle={content.gumball.subtitle}
            price={content.gumball.price}
            features={[
              "No Lesson", "Cabin Drill", "Car Rental for Test", "Dual Control Automatic Car",
              "Full Insurance", "Meet at Test Centre", "Pre-Test Q&A",
              "Provisional Plates", "Friendly Smile"
            ]}
          />
        </div>
      </section>

      {/* Referral & CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-anton text-4xl lg:text-5xl mb-6">{content.referral_heading}</h2>
          <p className="text-xl mb-8 font-roboto opacity-95">
            {content.referral_body}
            <br />
            <span className="text-sm">(person referred must let us know YOU referred them)</span>
          </p>

          <div className="border-t border-white/30 my-10 pt-10">
            <h3 className="font-anton text-3xl mb-4 text-white uppercase">{content.gift_voucher_heading}</h3>
            <p className="text-lg leading-relaxed mb-8">
              {content.gift_voucher_body}
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
