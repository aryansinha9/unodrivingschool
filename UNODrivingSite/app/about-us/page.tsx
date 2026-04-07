import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import { getPageContent, aboutUsDefaults } from "@/lib/supabase/pageContent";

export default async function AboutUs() {
  const content = await getPageContent('about-us', aboutUsDefaults);

  return (
    <main className="min-h-screen">
      <PageHeader
        title={content.page_header_title}
        subtitle={content.page_header_subtitle}
      />

      {/* Intro Section */}
      <section className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto text-left">
          <div className="space-y-6">
            <h2 className="font-anton text-3xl lg:text-4xl text-primary mb-4">{content.intro_heading}</h2>
            <p className="font-roboto text-lg text-gray-700 leading-relaxed">
              {content.intro_body_1}
            </p>
            <p className="font-roboto text-lg text-gray-700 leading-relaxed">
              {content.intro_body_2}
            </p>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={content.intro_image_src}
              alt="UNO Driving School Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
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
                If you&apos;re looking to gain more control over your driving experience. Learning to drive a manual vehicle involves understanding gear changes, clutch control, and overall vehicle dynamics.
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
              Experience our unique offer where <span className="font-bold">{content.logbook_highlight}</span>
            </p>
          </div>
          <p className="text-gray-700">
            {content.logbook_body}
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="font-anton text-3xl text-primary">Test Preparation</h3>
          <p className="text-gray-700">
            {content.test_prep_body}
          </p>
          <div className="bg-background-alt p-6 rounded-xl">
            <h4 className="font-anton text-xl mb-2">{content.mock_test_heading}</h4>
            <p className="text-gray-600 mb-4">
              {content.mock_test_body}
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
          <h2 className="font-anton text-3xl mb-4">{content.commitment_heading}</h2>
          <p className="text-gray-700 leading-relaxed">
            {content.commitment_body}
          </p>
        </div>

        <div className="bg-primary text-white p-12 rounded-3xl shadow-xl transform rotate-1">
          <h2 className="font-anton text-4xl lg:text-5xl mb-6 uppercase">{content.cta_heading}</h2>
          <p className="text-xl mb-8 font-roboto opacity-90">
            {content.cta_body}
          </p>
          <Link href="/prices" className="bg-white text-primary font-anton uppercase px-10 py-4 rounded-full text-xl hover:bg-gray-100 transition-colors inline-block shadow-lg">
            Register Now
          </Link>
        </div>
      </section>

    </main>
  );
}
