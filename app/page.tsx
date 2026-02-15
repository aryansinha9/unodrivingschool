"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HomepagePopup from "@/app/components/HomepagePopup";
import VideoPlayer from "@/app/components/VideoPlayer";
import HomepageFAQ from "@/app/components/HomepageFAQ";
import CountUp from "@/app/components/CountUp";
import VisionMission from "@/app/components/VisionMission";
import VideoModal from "@/app/components/VideoModal";
import LocationSearch from "@/app/components/LocationSearch";

export default function Home() {
  const [isHeroVideoOpen, setIsHeroVideoOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HomepagePopup />
      {/* Sticky Header removed - now in Layout */}


      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-visible bg-background-alt">
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
              LEARN TO <span className="text-primary">DRIVE</span> <br />
              <span className="text-primary">TODAY!</span>
            </h1>
            <p className="font-roboto-slab text-lg text-gray-600 max-w-xl leading-relaxed">
              Learning to drive? Need Driving Lessons? Tired of wasting endless money on Uber? Need to fill your learner log book hours up fast?
              Let’s start your engines and get your independence. Uno Driving School offers holistic affordable driving lessons and is the go-to driving school near you.
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
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Play Button Overlay */}
            <button
              onClick={() => setIsHeroVideoOpen(true)}
              className="absolute z-20 w-20 h-20 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group animate-pulse hover:animate-none cursor-pointer"
              aria-label="Play Video"
            >
              <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <Image
              src="/learn-to-drive.png"
              alt="Learn to Drive with UNO"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-4 lg:bottom-12 left-0 right-0 z-10 text-center pointer-events-none">
              <div className="bg-white px-8 py-4 rounded-2xl shadow-xl max-w-xs mx-auto transform -rotate-2 inline-block pointer-events-auto border-2 border-primary">
                <h3 className="font-anton text-2xl mb-1 text-primary">#1 Driving School</h3>
                <p className="font-roboto text-lg font-bold text-text-main">Brisbane & Gold Coast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Grid */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-background-main p-8 rounded-2xl">
            <h3 className="font-anton text-2xl mb-3 text-text-main">Driving School Near You</h3>
            <p className="font-roboto text-gray-700">Driving school near you promoting safe and independent drivers. Holistic, friendly approach, and positive culture for a safe learning.</p>
            <div className="mt-4">
              <Link href="/locations" className="text-primary font-anton uppercase hover:underline">Find Location &rarr;</Link>
            </div>
          </div>
          <div className="bg-background-main p-8 rounded-2xl">
            <h3 className="font-anton text-2xl mb-3 text-text-main">Queensland Learner Log Book</h3>
            <p className="font-roboto text-gray-700">Supercharge your log book progress with Uno! 1-hour lessons = 3 log book hours for the first 10 lessons. Get 30 hours in just 10 lessons!</p>
            <div className="mt-4">
              <Link href="/brisbane-learner-drivers" className="text-primary font-anton uppercase hover:underline">Learn More &rarr;</Link>
            </div>
          </div>
          <div className="bg-background-main p-8 rounded-2xl">
            <h3 className="font-anton text-2xl mb-3 text-text-main">Affordable Driving Lessons</h3>
            <p className="font-roboto text-gray-700">UNO offers affordable driving lessons with amazing savings on packages in Brisbane. Gift vouchers and Afterpay payment plans available.</p>
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
                src="/images/homepage_experience.jpg"
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
              Pass Your Drivers Test <span className="text-primary">With UNO!</span>
            </h2>
            <div className="space-y-6 font-roboto text-gray-600 leading-relaxed">
              <p>
                Looking for affordable driving school nearby with comprehensive and holistic teaching methods? Learn to drive confidently with UNO, the go-to driving school in Brisbane and the Gold Coast. Our expert instructors specialise in helping learners of all ages pass their driving test and drive safely.
              </p>
              <p>
                Specialising in supporting nervous drivers. Whether you struggle with road anxiety or are a nervous driver, our low-stress, holistic teaching approach will help you gain confidence. Experience a positive learning environment at UNO as you embark on a comprehensive journey towards mastering safe driving. Say goodbye to parental admonitions and start your driving lessons today and accelerate towards your independence with just a twist of the gear stick!
              </p>
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

      {/* Learning Path */}
      <section className="bg-background-alt py-16">
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

      {/* Packages Preview */}
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

            {/* Monte Carlo Test Package */}
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
                  <li>Rental of instructor’s car for test</li>
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
        <h2 className="font-anton text-3xl mb-6">Best Driving Lessons Even For Beginner!</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Accelerate your driving skills and boost your confidence through our comprehensive coaching at UNO Driving School. We offer diverse training programs for novice and advanced drivers in Brisbane, focusing on defensive driving. What sets us apart is our unwavering dedication to road safety and accident prevention.
        </p>

        <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden shadow-xl bg-black">
          <VideoPlayer
            videoId="AcHQLgvgftc"
            thumbnailUrl="/video-thumbnail.png"
            title="Best Driving Lessons Even For Beginner!"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <HomepageFAQ />

      <VideoModal
        videoId="Gmargl4hwNg"
        isOpen={isHeroVideoOpen}
        onClose={() => setIsHeroVideoOpen(false)}
      />
    </main>
  );
}
