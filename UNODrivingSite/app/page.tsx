import Link from "next/link";
import Image from "next/image";

import HomepagePopup from "@/app/components/HomepagePopup";
import VideoPlayer from "@/app/components/VideoPlayer";
import HomepageFAQ from "@/app/components/HomepageFAQ";
import CountUp from "@/app/components/CountUp";
import VisionMission from "@/app/components/VisionMission";
import LocationSearch from "@/app/components/LocationSearch";
import HeroPlayButton from "@/app/components/HeroPlayButton";
import { getPageContent, homepageDefaults } from "@/lib/supabase/pageContent";

export default async function Home() {
  const content = await getPageContent('homepage', homepageDefaults);

  return (
    <main className="min-h-screen">
      <HomepagePopup />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-visible bg-background-main">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-cars-pattern.jpg"
            alt="Driving School Pattern"
            fill
            className="opacity-10 object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <h1 className="font-anton text-5xl lg:text-7xl leading-tight uppercase text-text-main">
              {content.hero_heading_line1} <span className="text-primary">{content.hero_heading_highlight}</span> <br />
              <span className="text-primary">{content.hero_heading_line2}</span>
            </h1>
            <p className="font-roboto-slab text-lg text-gray-600 max-w-xl leading-relaxed">
              {content.hero_subtext}
            </p>

            <div className="space-y-4">
              <p className="font-anton text-xl text-text-main uppercase">Find your local instructor:</p>
              <LocationSearch />
            </div>

            <div className="flex flex-row gap-4 pt-2">
              <Link href="/prices" className="bg-primary text-white font-anton uppercase text-xl px-4 lg:px-8 py-3 rounded-full hover:bg-green-500 transition-transform hover:scale-105 shadow-xl">
                Book a Lesson
              </Link>
              <Link href="/contact-us" className="border-2 border-text-main text-text-main font-anton uppercase text-xl px-4 lg:px-8 py-3 rounded-full hover:bg-text-main hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right side visual */}
          <div className="relative h-[550px] lg:h-[700px] w-full flex items-center justify-center -mt-8 lg:-mt-12">
            {/* Play Button — client component owns the modal state */}
            <HeroPlayButton videoId={content.hero_video_id} />

            {/* Main Visual Image */}
            <Image
              src={content.hero_image_src}
              alt="Learn to Drive with UNO"
              fill
              className="object-contain scale-[1.3] lg:scale-[1.3] translate-x-2 lg:translate-x-6"
              priority
            />
            <div className="absolute bottom-4 lg:bottom-12 left-0 right-0 z-10 text-center pointer-events-none">
              <div className="bg-white px-8 py-4 rounded-2xl shadow-xl max-w-xs mx-auto transform -rotate-2 inline-block pointer-events-auto border-2 border-primary">
                <h3 className="font-anton text-2xl mb-1 text-primary">{content.hero_badge_title}</h3>
                <p className="font-roboto text-lg font-bold text-text-main">{content.hero_badge_subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Grid */}
      <section className="bg-background-main py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-background-alt p-8 rounded-2xl">
            <h3 className="font-anton text-2xl mb-3 text-text-main">{content.usp_1_title}</h3>
            <p className="font-roboto text-gray-700">{content.usp_1_body}</p>
            <div className="mt-4">
              <Link href="/locations" className="text-primary font-anton uppercase hover:underline">Find Location &rarr;</Link>
            </div>
          </div>
          <div className="bg-background-alt p-8 rounded-2xl">
            <h3 className="font-anton text-2xl mb-3 text-text-main">{content.usp_2_title}</h3>
            <p className="font-roboto text-gray-700">{content.usp_2_body}</p>
            <div className="mt-4">
              <Link href="/brisbane-learner-drivers" className="text-primary font-anton uppercase hover:underline">Learn More &rarr;</Link>
            </div>
          </div>
          <div className="bg-background-alt p-8 rounded-2xl">
            <h3 className="font-anton text-2xl mb-3 text-text-main">{content.usp_3_title}</h3>
            <p className="font-roboto text-gray-700">{content.usp_3_body}</p>
            <div className="mt-4">
              <Link href="/prices" className="text-primary font-anton uppercase hover:underline">View Prices &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / About Section */}
      <section className="bg-background-alt py-16 lg:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with Counter */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={content.philosophy_image_src}
                alt="Happy student passing driving test"
                fill
                className="object-cover object-[60%_50%] lg:object-center"
              />

              {/* Experience Counter Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary shadow-lg max-w-[200px]">
                <div className="flex items-baseline gap-1">
                  <CountUp
                    to={20}
                    duration={2.5}
                    className="text-4xl font-anton text-primary"
                  />
                  <span className="text-4xl font-anton text-primary">+</span>
                </div>
                <p className="font-anton text-gray-800 uppercase leading-tight mt-1">
                  Total Years of Experience
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 bottom-[-20px] right-[-20px] w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-anton text-4xl lg:text-5xl uppercase text-text-main">
              {content.philosophy_heading.includes('UNO!')
                ? (
                  <>
                    {content.philosophy_heading.replace(' With UNO!', '')} <span className="text-primary">With UNO!</span>
                  </>
                )
                : content.philosophy_heading
              }
            </h2>
            <div className="space-y-6 font-roboto text-gray-600 leading-relaxed">
              <p>{content.philosophy_body_1}</p>
              <p>{content.philosophy_body_2}</p>
            </div>

            <VisionMission />

            <div className="pt-2">
              <Link href="/about-us" className="bg-text-main text-white font-anton uppercase px-8 py-3 rounded-full hover:bg-gray-800 transition-colors inline-block">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path — mirrors Prices page structure, hardcoded */}
      <section className="bg-background-main py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-anton text-4xl text-center mb-12">Simple Steps to Get Your License</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image src="/images/l-plate.png" alt="L Plate" fill className="object-contain" />
              </div>
              <h3 className="font-anton text-xl mb-3">Brisbane Learner Drivers</h3>
              <p className="text-gray-600 mb-4 h-20">Learn how to be a safe confident driver for life and open a world of new opportunities!</p>
              <Link href="/brisbane-learner-drivers" className="text-primary font-bold hover:underline">Learn More</Link>
            </div>
            <div className="text-center p-6 border rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image src="/images/red-p-plate.png" alt="Red P Plate" fill className="object-contain" />
              </div>
              <h3 className="font-anton text-xl mb-3">Brisbane Driving Test</h3>
              <p className="text-gray-600 mb-4 h-20">Lets get you on the road. Gain your confidence and experience to pass your driving test first go!</p>
              <Link href="/brisbane-driving-test" className="text-primary font-bold hover:underline">Learn More</Link>
            </div>
            <div className="text-center p-6 border rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image src="/images/green-p-plate.png" alt="Green P Plate" fill className="object-contain" />
              </div>
              <h3 className="font-anton text-xl mb-3">Smart Driver Course</h3>
              <p className="text-gray-600 mb-4 h-20">Fine-tune your road skills. Are you ready to take your driving to the next level?</p>
              <Link href="/advanced-driver-course" className="text-primary font-bold hover:underline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview — mirrors Prices page, hardcoded per plan */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-anton text-4xl text-center mb-6">Choose Your Driving Lessons</h2>
          <div className="text-center mb-12">
            <Link href="/prices" className="underline font-anton uppercase text-lg hover:text-primary">
              View All Packages &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Spark */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-transform flex flex-col">
              <div className="bg-primary p-4 text-center">
                <h3 className="font-anton text-white text-2xl uppercase">Spark Driving Lesson</h3>
              </div>
              <div className="p-8 text-center flex-grow flex flex-col">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">One Hour Driving Lesson</p>
                <div className="text-3xl font-anton text-primary mb-6">$75.00 <span className="text-gray-400 text-lg font-roboto font-normal">per hour</span></div>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>60-minute driving lesson</li>
                  <li>Automatic car</li>
                  <li>Accelerated learning</li>
                  <li>Private in-car instruction</li>
                  <li>Holistic approach</li>
                  <li>Free learner driver plates</li>
                  <li>Smile</li>
                </ul>
                <Link href="/price-packages" className="block w-full bg-text-main text-white font-anton uppercase py-3 rounded hover:bg-gray-800 transition-colors mt-auto">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Boost Package - Popular */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform scale-105 border-4 border-primary z-10 flex flex-col">
              <div className="bg-primary p-4 text-center">
                <h3 className="font-anton text-white text-2xl uppercase">Boost Package</h3>
                <span className="text-xs font-bold bg-white text-primary px-3 py-1 rounded-full inline-block mt-2 uppercase shadow-sm">Popular</span>
              </div>
              <div className="p-8 text-center flex-grow flex flex-col">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">10 Hours of Driving Lessons</p>
                <div className="text-3xl font-anton text-primary mb-6">$700</div>
                <ul className="space-y-3 text-gray-700 mb-8 font-medium flex-grow">
                  <li>10 hours of driving lessons</li>
                  <li>Automatic car</li>
                  <li>Accelerated learning</li>
                  <li>Pick-up and drop-off</li>
                  <li>Fully insured</li>
                  <li>Afterpay available</li>
                  <li>Free learner driver plates</li>
                </ul>
                <Link href="/price-packages" className="block w-full bg-primary text-white font-anton uppercase py-3 rounded hover:bg-green-600 transition-colors mt-auto shadow-lg">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Zoom Test Package */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-transform flex flex-col">
              <div className="bg-primary p-4 text-center">
                <h3 className="font-anton text-white text-2xl uppercase">Zoom Test Package</h3>
              </div>
              <div className="p-8 text-center flex-grow flex flex-col">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Dept. of Transport fees not included</p>
                <div className="text-3xl font-anton text-primary mb-6">$200</div>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>60-minute driving lesson</li>
                  <li>Insured automatic car</li>
                  <li>Pick-up and drop-off</li>
                  <li>Rental of instructor&apos;s car for test</li>
                  <li>Free provisional plates</li>
                  <li>Smile</li>
                </ul>
                <Link href="/price-packages" className="block w-full bg-text-main text-white font-anton uppercase py-3 rounded hover:bg-gray-800 transition-colors mt-auto">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <h2 className="font-anton text-3xl mb-6">{content.why_section_heading}</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          {content.why_section_body}
        </p>

        <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden shadow-xl bg-black">
          <VideoPlayer
            videoId={content.why_section_video_id}
            thumbnailUrl={content.why_section_thumbnail}
            title={content.why_section_heading}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <HomepageFAQ />
    </main>
  );
}
