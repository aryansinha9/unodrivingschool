import { createClient } from '@/lib/supabase/server';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface HomepageContent {
  hero_heading_line1:      string;
  hero_heading_highlight:  string;
  hero_heading_line2:      string;
  hero_subtext:            string;
  hero_video_id:           string;  // YouTube ID for hero modal
  hero_badge_title:        string;
  hero_badge_subtitle:     string;
  hero_image_src:          string;
  usp_1_title:             string;
  usp_1_body:              string;
  usp_2_title:             string;
  usp_2_body:              string;
  usp_3_title:             string;
  usp_3_body:              string;
  philosophy_heading:      string;
  philosophy_body_1:       string;
  philosophy_body_2:       string;
  philosophy_image_src:    string;
  why_section_heading:     string;
  why_section_body:        string;
  why_section_video_id:    string;  // YouTube ID for VideoPlayer embed
  why_section_thumbnail:   string;
}

export interface AboutUsContent {
  page_header_title:        string;
  page_header_subtitle:     string;
  intro_heading:            string;
  intro_body_1:             string;
  intro_body_2:             string;
  intro_image_src:          string;
  logbook_highlight:        string;
  logbook_body:             string;
  test_prep_body:           string;
  mock_test_heading:        string;
  mock_test_body:           string;
  commitment_heading:       string;
  commitment_body:          string;
  cta_heading:              string;
  cta_body:                 string;
}

export interface PricingCardData {
  title:    string;
  subtitle: string;
  price:    string;
}

export interface PricesContent {
  page_header_title:       string;
  page_header_subtitle:    string;
  intro_body:              string;
  // Single lessons
  spark:                   PricingCardData;
  ignition:                PricingCardData;
  cruise:                  PricingCardData;
  // Lesson packages
  boost:                   PricingCardData;
  turbo:                   PricingCardData;
  nitro:                   PricingCardData;
  // Driving test plans
  lightning:               PricingCardData;
  fast_furious:            PricingCardData;
  zoom:                    PricingCardData;
  // Specialty
  mock_test:               PricingCardData;
  night_rider:             PricingCardData;
  gumball:                 PricingCardData;
  // Referral section
  referral_heading:        string;
  referral_body:           string;
  gift_voucher_heading:    string;
  gift_voucher_body:       string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Defaults — the content that renders when no overrides exist in Supabase.
// These mirror the current hardcoded values exactly.
// ─────────────────────────────────────────────────────────────────────────────

export const homepageDefaults: HomepageContent = {
  hero_heading_line1:     'LEARN TO',
  hero_heading_highlight: 'DRIVE',
  hero_heading_line2:     'TODAY!',
  hero_subtext:           'Learning to Drive in Brisbane or the Gold Coast? Need driving lessons? Tired of spending endless money on Uber? Want to fill your learner logbook hours quickly? Let\'s start your engines and gain your independence! Uno Driving School offers affordable, comprehensive driving lessons and is the go-to driving school near you.',
  hero_video_id:          'Gmargl4hwNg',
  hero_badge_title:       '#1 Driving School',
  hero_badge_subtitle:    'Brisbane & Gold Coast',
  hero_image_src:         '/learn-to-drive1.png',
  usp_1_title:            'Driving School Near You',
  usp_1_body:             'Driving school near you promoting safe and independent drivers. Holistic, friendly approach, and positive culture for a safe learning.',
  usp_2_title:            'Queensland Learner Log Book',
  usp_2_body:             'Supercharge your log book progress with Uno! 1-hour lessons = 3 log book hours for the first 10 lessons. Get 30 hours in just 10 lessons!',
  usp_3_title:            'Affordable Driving Lessons',
  usp_3_body:             'UNO offers affordable driving lessons with amazing savings on packages in Brisbane. Gift vouchers and Afterpay payment plans available.',
  philosophy_heading:     'Pass Your Drivers Test With UNO!',
  philosophy_body_1:      'Looking for affordable driving school nearby with comprehensive and holistic teaching methods? Learn to drive confidently with UNO, the go-to driving school in Brisbane and the Gold Coast. Our expert instructors specialise in helping learners of all ages pass their driving test and drive safely.',
  philosophy_body_2:      'Specialising in supporting nervous drivers. Whether you struggle with road anxiety or are a nervous driver, our low-stress, holistic teaching approach will help you gain confidence. Experience a positive learning environment at UNO as you embark on a comprehensive journey towards mastering safe driving. Say goodbye to parental admonitions and start your driving lessons today and accelerate towards your independence with just a twist of the gear stick!',
  philosophy_image_src:   '/images/homepage_experience.jpg',
  why_section_heading:    'Best Driving Lessons Even For Beginner!',
  why_section_body:       'Accelerate your driving skills and boost your confidence through our comprehensive coaching at UNO Driving School. We offer diverse training programs for novice and advanced drivers in Brisbane, focusing on defensive driving. What sets us apart is our unwavering dedication to road safety and accident prevention.',
  why_section_video_id:   'AcHQLgvgftc',
  why_section_thumbnail:  '/images/live-student.png',
};

export const aboutUsDefaults: AboutUsContent = {
  page_header_title:       'About Us',
  page_header_subtitle:    'Uno Driving School – Professional Driving Lessons in Brisbane, Logan and Gold Coast.',
  intro_heading:           'Welcome to UNO Driving School',
  intro_body_1:            "Welcome to UNO Driving School's official website, your pre-eminent destination for comprehensive and professional driver training services in Brisbane, Queensland. Step into a world of top-notch instruction and cutting-edge learning resources designed to elevate your driving skills and confidence on the road.",
  intro_body_2:            "Our fantastic team of certified instructors is dedicated to providing excellent driving lessons with a holistic approach. We're not just here to teach you the basics; we want to make you the best driver you can be. With heaps of experience and dedication, we aim to help you not only master essential skills but also embrace a holistic learning experience, ensuring you confidently navigate the roads. Get ready to rock the road with confidence!",
  intro_image_src:         '/About-Us.png',
  logbook_highlight:       'one hour of lessons counts as three log book hours for your first 10 lessons. Achieve a total of 30 log book hours in just 10 lessons!',
  logbook_body:            'As a Queensland Log Book approved driving school, UNO Driving School ensures that our training programs align with state licensing requirements.',
  test_prep_body:          'Our expert instructors are here to guide you through the entire driving test preparation process. We offer targeted lessons on essential driving manoeuvres, including parallel parking and navigating complex intersections.',
  mock_test_heading:       'UNO Mock Driving Tests',
  mock_test_body:          'Get exam-ready with comprehensive practice sessions that replicate the real Queensland driving test environment.',
  commitment_heading:      'Commitment to Safety',
  commitment_body:         'At UNO Driving School, we strive to make learning to drive a memorable experience. Our friendly and experienced instructors guide you every step of the way, focusing not just on passing the test but on instilling life-long safe driving habits that ensure the safety of everyone on the road.',
  cta_heading:             'Ready To Hit the Road?',
  cta_body:                "At Uno Driving School, we've got your back. Join us today and discover how enjoyable learning to drive can be!",
};

export const pricesDefaults: PricesContent = {
  page_header_title:    'Lesson Fees and Packages!',
  page_header_subtitle: 'Affordable lessons with no hidden costs.',
  intro_body:           "Overcome pre-test jitters and driving concerns with our support! Whether you're rusty behind the wheel, a new driver, or unfamiliar with local road rules, we've got you covered. Leave your worries behind and trust our expertise. No need to worry! We've got your back!",
  spark:       { title: 'Spark Lesson',    subtitle: 'One Hour Driving Lesson',                price: '$75.00 / Hour' },
  ignition:    { title: 'Ignition Lesson', subtitle: '90 Minute Driving Lesson',              price: '$95.00'        },
  cruise:      { title: 'Cruise Lesson',   subtitle: 'Two Hour Driving Lesson',               price: '$140.00'       },
  boost:       { title: 'Boost Package',   subtitle: '3 Hours of Driving Lessons',            price: '$190.00'       },
  turbo:       { title: 'Turbo Package',   subtitle: '5 Hours of Driving Lessons',            price: '$355.00'       },
  nitro:       { title: 'Nitro Package',   subtitle: '10 Hours of Driving Lessons',           price: '$700.00'       },
  lightning:   { title: 'Lightning McQueen Package', subtitle: '10 Hours of Driving Lessons plus Test Package', price: '$855.00' },
  fast_furious:{ title: 'Fast & Furious Package',    subtitle: '5 Hours of Driving Lessons plus Test Package',  price: '$520.00' },
  zoom:        { title: 'Zoom Test Package',         subtitle: 'Driving Test Package including one hour pre drive', price: '$200.00' },
  mock_test:   { title: 'Mock Driving Test',  subtitle: 'Simulated Driving Test Lesson',                    price: '$85.00'  },
  night_rider: { title: 'Night Rider Lesson', subtitle: 'One Hour of Night Driving Lesson',                 price: '$95.00'  },
  gumball:     { title: 'GUMBALL 3000 Package', subtitle: "Use of Driver Instructors car only for driving test", price: '$120.00' },
  referral_heading:     'REFERRAL PROGRAM',
  referral_body:        'For every person that you refer, earn $10 off your Road Test Package.',
  gift_voucher_heading: '"Affordable Driving Lessons and Gift Vouchers!"',
  gift_voucher_body:    'Explore our unbeatable prices at Uno Driving School! We offer affordable driving lesson packages, along with convenient gift vouchers and flexible Afterpay options. Start your journey to becoming a skilled driver without breaking the bank. Contact us today to learn more!',
};

// ─────────────────────────────────────────────────────────────────────────────
// Fetcher
// ─────────────────────────────────────────────────────────────────────────────

export async function getPageContent<T extends object>(
  pageId: 'homepage' | 'about-us' | 'prices',
  defaults: T
): Promise<T> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('page_content')
      .select('content')
      .eq('page_id', pageId)
      .single();

    if (!data?.content || typeof data.content !== 'object') return defaults;

    // Shallow merge: DB overrides defaults, missing DB fields fall back to defaults
    return { ...defaults, ...(data.content as Partial<T>) } as T;
  } catch {
    // If table doesn't exist yet or any DB error, return defaults safely
    return defaults;
  }
}
