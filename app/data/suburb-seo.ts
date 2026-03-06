export interface SuburbReview {
    name: string;
    suburb: string;
    text: string;
    rating: number;
}

export interface SuburbFAQ {
    question: string;
    answer: string;
}

export interface SuburbSEO {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    bodyParagraphs: string[];
    landmarks: string[];
    testCentre: string;
    testCentreAddress: string;
    nearbySuburbs: { name: string; slug: string; region: string }[];
    reviews: SuburbReview[];
    faqs: SuburbFAQ[];
    mapEmbedSrc: string;
}

// Standard manoeuvres practised in every lesson (shared across all pages)
export const standardManoeuvres = [
    "Roundabouts and give-way rules",
    "Multi-lane road changes and merging",
    "School zones and 40km/h speed limits",
    "Parallel parking and three-point turns",
    "Reverse parallel parking",
    "Hazard perception and scanning techniques",
    "Merging onto motorways and expressways",
];

export const suburbSEO: Record<string, SuburbSEO> = {

    "east-brisbane": {
        metaTitle: "Driving Lessons East Brisbane | Automatic Instructor | UNO Driving School",
        metaDescription: "Looking for driving lessons in East Brisbane? UNO Driving School offers calm, automatic lessons with a 5-star local instructor. Book online today.",
        h1: "Affordable Driving Lessons in East Brisbane with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for professional driving lessons in East Brisbane? UNO Driving School provides calm, confidence-building automatic driving lessons for learners in East Brisbane, Norman Park, Kangaroo Point and surrounding areas. With over 20 years of combined instructor experience and a consistent 5-star rating, we specialise in helping nervous drivers pass their Queensland driving test on the very first attempt.",
            "East Brisbane sits just minutes from the Brisbane CBD, making it one of the most dynamic training environments in the city. Learners in East Brisbane benefit from exposure to a wide variety of road conditions — from quiet residential streets near Mowbray Park to the busier arteries along Wynnum Road and Lytton Road. Our East Brisbane instructors know every local road intimately and use that knowledge to design each lesson around your current skill level.",
            "One of the most common challenges for East Brisbane learners is managing the volume of traffic near The Gabba on event days and navigating the complex intersections at Main Street and Vulture Street. Our instructors walk you through these scenarios step by step, building your confidence progressively so that by the time your test day arrives, East Brisbane traffic feels entirely manageable.",
            "We are proud to be one of the most recommended automatic driving schools in East Brisbane. Our holistic teaching approach focuses on building genuine road sense — not just getting you through a checklist. We use encouraging, jargon-free communication and never make you feel rushed. Whether you are 16 and just starting out or returning to driving after a break, our East Brisbane lessons are tailored specifically to you.",
            "UNO Driving School offers free pickup and drop-off within East Brisbane and surrounding suburbs. Lessons are conducted in a fully insured, dual-controlled automatic vehicle, so both you and our instructor are always in a safe environment. Afterpay is available, and we offer flexible lesson packages so you can book what suits your schedule and budget. If you are ready to start your driving journey in East Brisbane, get in touch today and we will match you with the right local instructor.",
        ],
        landmarks: [
            "The Gabba (Brisbane Cricket Ground) — a high-traffic zone ideal for practising event-day driving",
            "Mowbray Park — quiet riverside streets perfect for beginners building basic control",
            "East Brisbane State School — school zone practice and pedestrian awareness",
            "Norman Creek parklands and cycle paths — used for scanning and low-speed manoeuvres",
            "Langlands Park Pool — local landmark and roundabout practice nearby",
            "Wynnum Road — key arterial route for lane discipline and speed control training",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Norman Park", slug: "norman-park", region: "eastern-brisbane" },
            { name: "Kangaroo Point", slug: "kangaroo-point", region: "inner-brisbane" },
            { name: "Woolloongabba", slug: "woolloongabba", region: "inner-brisbane" },
        ],
        reviews: [
            { name: "Jessica", suburb: "East Brisbane", rating: 5, text: "My instructor was so patient — I was absolutely terrified at first but felt completely calm by lesson 3. Passed my test at Greenslopes first go. Highly recommend UNO for anyone in East Brisbane!" },
            { name: "Marcus", suburb: "Norman Park", rating: 5, text: "I had tried two other driving schools before UNO. The difference in teaching style is night and day. Really clear explanations and no shouting. Passed first time." },
            { name: "Priya", suburb: "East Brisbane", rating: 5, text: "UNO Driving School is genuinely the best around. They picked me up from home, the car was comfortable, and my instructor knew exactly which roads to practise on near East Brisbane. 10/10." },
        ],
        faqs: [
            { question: "How much do driving lessons in East Brisbane cost?", answer: "Driving lessons in East Brisbane start from $75 per hour with UNO Driving School. We also offer discounted packages — 10 hours for $700, saving you $50. Our Zoom Test Package (lesson + use of instructor's car for the test) is $200." },
            { question: "Do you offer pickup and drop-off in East Brisbane?", answer: "Yes, we offer free pickup and drop-off from your home, school, or workplace anywhere in East Brisbane and surrounding suburbs including Norman Park, Kangaroo Point and Woolloongabba." },
            { question: "Which driving test centre do East Brisbane learners use?", answer: "Most East Brisbane learners sit their practical driving test at the Greenslopes Transport and Main Roads Customer Service Centre, located on Ipswich Road at Greenslopes. We specifically prepare you for this test route during your lessons." },
            { question: "Do you offer automatic driving lessons in East Brisbane?", answer: "Yes, all UNO Driving School lessons in East Brisbane are conducted in modern automatic vehicles. Automatic licences are perfectly valid for everyday driving and are the most popular choice for new drivers." },
            { question: "How many lessons do I need before my East Brisbane driving test?", answer: "Most learners require between 10 and 20 professional lessons depending on their starting confidence and experience. Your UNO instructor will assess your progress after each lesson and give you an honest recommendation on when you are ready to test." },
            { question: "Can you help nervous or anxious drivers in East Brisbane?", answer: "Absolutely — nervous driver support is one of our specialties at UNO Driving School. We use a calm, patient, and encouraging teaching style that has helped hundreds of anxious learners across East Brisbane gain genuine confidence on the road." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "coorparoo": {
        metaTitle: "Driving Lessons Coorparoo | Automatic Instructor | UNO Driving School",
        metaDescription: "Need driving lessons in Coorparoo? UNO Driving School provides patient, automatic lessons for learners of all levels near Camp Hill and Greenslopes. Book now.",
        h1: "Affordable Driving Lessons in Coorparoo with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Coorparoo? UNO Driving School delivers professional, calm, automatic driving lessons for learners in Coorparoo, Camp Hill, Greenslopes and surrounding inner-south suburbs. Our 5-star rated instructors have helped hundreds of Coorparoo students pass their Queensland practical driving test on the first attempt.",
            "Coorparoo is located just 4km from the Brisbane CBD, giving learners access to a fantastic mix of road environments — from the quieter residential streets around Langlands Park to the high-traffic Cavendish Road and Logan Road corridors. Our Coorparoo instructors use these roads deliberately in each lesson to progressively build your skill and confidence.",
            "Many Coorparoo learners find the three-way intersections along Cavendish Road and the roundabouts near Coorparoo Square challenging at first. Our instructors break these down step by step, rehearsing the correct approach speed, lane selection and safe gap assessment until these manoeuvres feel natural. We also regularly practise on the routes most commonly used by examiners at the Greenslopes test centre.",
            "At UNO Driving School, we specialise in supporting nervous and anxious drivers — and Coorparoo's busy road environment is exactly the kind of place where having the right instructor makes a real difference. Rather than teaching you to just survive the test, we focus on developing genuine, lifelong road safety skills. Our students leave feeling genuinely confident, not just relieved.",
            "All Coorparoo lessons include free pickup and drop-off from your home or another convenient location, at no extra cost. We use fully insured, modern automatic vehicles with dual controls for safety. Affordable lesson packages and Afterpay payment plans are available. Book your first driving lesson in Coorparoo today and take the first step toward your independence.",
        ],
        landmarks: [
            "Coorparoo Square shopping centre — roundabout and car park practice",
            "Langlands Park — quiet streets ideal for beginners",
            "Cavendish Road — major arterial used for lane discipline training",
            "Junction Road — complex intersection practice near the high school",
            "Coorparoo State School — school zone awareness and pedestrian safety",
            "Logan Road — multi-lane road for merging and speed management",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Camp Hill", slug: "camp-hill", region: "eastern-brisbane" },
            { name: "Greenslopes", slug: "greenslopes", region: "southern-brisbane" },
            { name: "Stones Corner", slug: "stones-corner", region: "southern-brisbane" },
        ],
        reviews: [
            { name: "Aiden", suburb: "Coorparoo", rating: 5, text: "Passed first try at Greenslopes! My instructor was incredibly calm and explained everything clearly. The lessons around Coorparoo were great practice for the actual test route." },
            { name: "Sophie", suburb: "Camp Hill", rating: 5, text: "I was really nervous about driving in this area because of the traffic on Cavendish Road. UNO made it feel manageable. Booked a package and passed within 8 weeks." },
            { name: "Tom", suburb: "Coorparoo", rating: 5, text: "Best driving school in Brisbane south. Pickup was on time, the instructor was professional and patient, and the car was really comfortable. Got my licence first go." },
        ],
        faqs: [
            { question: "How much do driving lessons in Coorparoo cost?", answer: "Driving lessons in Coorparoo start from $75 per hour. Our popular 10-lesson Boost Package is $700, and our Zoom Test Package (lesson + car hire for test day) is $200." },
            { question: "Do you pick up from Coorparoo?", answer: "Yes, UNO Driving School offers free pickup and drop-off anywhere in Coorparoo and neighbouring suburbs including Camp Hill, Greenslopes and Stones Corner." },
            { question: "Which test centre does Coorparoo use?", answer: "Coorparoo learners typically sit their driving test at the Greenslopes Transport and Main Roads Customer Service Centre. We specifically rehearse the test routes used at this centre." },
            { question: "Are automatic lessons available in Coorparoo?", answer: "Yes, all UNO lessons in Coorparoo are in modern automatic vehicles. An automatic licence allows you to drive any automatic car in Queensland with no restrictions." },
            { question: "How long until I'm ready to test from Coorparoo?", answer: "It depends on your experience and progress, but most UNO students in Coorparoo are test-ready within 10–20 professional lessons. Your instructor will guide you honestly throughout." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "west-end": {
        metaTitle: "Driving Lessons West End | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in West End with UNO Driving School. Patient automatic instructors serving West End, South Brisbane and Highgate Hill. Book your lesson today.",
        h1: "Affordable Driving Lessons in West End with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for professional driving lessons in West End? UNO Driving School offers calm, supportive, automatic driving lessons for learners across West End, South Brisbane, Dutton Park and Highgate Hill. Our experienced, 5-star rated instructors are passionate about helping nervous drivers build real confidence on the road.",
            "West End is one of Brisbane's most vibrant and unique inner-city suburbs, and learning to drive here gives you excellent preparation for real-world city driving. The mix of narrow heritage streets, bustling cafe strips on Boundary Street, active weekend markets at Davies Park, and proximity to major roads like Montague Road ensures your lessons cover a genuinely diverse range of traffic situations.",
            "West End's pedestrian-heavy streets and the ever-present bike lanes make observation and scanning skills especially important. Our instructors specifically use West End's road environment to train your hazard perception — one of the key competencies assessed in the Queensland practical driving test. By the time you sit your test, responding to cyclists, pedestrians and unexpected hazards will feel instinctive.",
            "We know West End learners often have busy, flexible schedules. That is why our booking system is designed around you — lessons are available seven days a week, in slots that suit your life. We offer free pickup from anywhere in West End and the surrounding suburbs, use Afterpay for payment flexibility, and provide a fully insured, dual-controlled automatic vehicle on every lesson.",
            "UNO Driving School is proud of our record in West End and across Brisbane's inner south. Our calm, jargon-free teaching style has helped hundreds of West End students pass their test first go and driving with genuine confidence long after their licence is in their wallet. Book your first lesson in West End today.",
        ],
        landmarks: [
            "Boundary Street — Brisbane's most famous bohemian strip, excellent for pedestrian-heavy driving practice",
            "Davies Park — site of the weekend markets, perfect for slow-speed and car park training",
            "West End State School — school zone compliance and pedestrian awareness",
            "Fish Lane laneway — understanding shared zones and narrow street navigation",
            "Montague Road — Brisbane's busy riverside arterial for speed management training",
            "Musgrave Park — local landmark surrounded by streets ideal for three-point turns",
        ],
        testCentre: "Woolloongabba",
        testCentreAddress: "Woolloongabba Transport and Main Roads Customer Service Centre, 47 Ipswich Rd, Woolloongabba QLD 4102",
        nearbySuburbs: [
            { name: "South Brisbane", slug: "south-brisbane", region: "inner-brisbane" },
            { name: "Dutton Park", slug: "dutton-park", region: "southern-brisbane" },
            { name: "Highgate Hill", slug: "highgate-hill", region: "inner-brisbane" },
        ],
        reviews: [
            { name: "Lena", suburb: "West End", rating: 5, text: "I'd been putting off learning to drive for years because of anxiety. UNO changed everything. My instructor was genuinely kind and never made me feel stupid. Passed first go!" },
            { name: "James", suburb: "West End", rating: 5, text: "The instructor really knew West End — he took me through all the tricky streets and made sure I was confident before moving onto busier roads. Really happy with UNO." },
            { name: "Chloe", suburb: "South Brisbane", rating: 5, text: "Completed 8 lessons with UNO and passed my test. The Afterpay option made it really easy to afford the package. Picked up from home every time, always on time." },
        ],
        faqs: [
            { question: "How much do driving lessons in West End cost?", answer: "Lessons in West End start from $75/hour. Our 10-lesson Boost Package is $700, and the Zoom Test Package (lesson + car for the test) is $200. Afterpay is available." },
            { question: "Do you offer pickup from West End?", answer: "Yes, we offer free pickup and drop-off from anywhere in West End, South Brisbane, Highgate Hill, and Dutton Park." },
            { question: "Which test centre do West End learners use?", answer: "West End learners typically sit their test at the Woolloongabba Transport and Main Roads Customer Service Centre on Ipswich Road. We rehearse those test routes specifically." },
            { question: "Can you help me if I'm a nervous driver in West End?", answer: "Absolutely. Nervous driver support is one of UNO's biggest strengths. We create a calm, non-judgemental learning environment from lesson one — many of our best results in West End have come from students who thought they'd never be able to drive." },
            { question: "Are lessons available on weekends in West End?", answer: "Yes, UNO offers lessons 7 days a week in West End. Weekend and early morning slots are available. Book online or call us to find a time that works." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Woolloongabba+Transport+Main+Roads+47+Ipswich+Road+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "south-brisbane": {
        metaTitle: "Driving Lessons South Brisbane | Automatic Instructor | UNO Driving School",
        metaDescription: "Professional driving lessons in South Brisbane with UNO Driving School. 5-star automatic instructors. Serving South Brisbane, West End and Woolloongabba. Book today.",
        h1: "Affordable Driving Lessons in South Brisbane with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in South Brisbane? UNO Driving School provides patient, professional, automatic driving lessons for learners across South Brisbane, West End, Woolloongabba and the inner city. Our experienced instructors hold a 5-star rating and have helped hundreds of South Brisbane students pass the Queensland practical driving test on their very first attempt.",
            "South Brisbane offers one of the most diverse and challenging training environments in the city. From navigating the busy Grey Street precincts and the Convention Centre drop-off zones to managing the complex lane changes at the Victoria Bridge intersection, every lesson in South Brisbane is rich with real-world driving experience. Our instructors know this area intimately and design every lesson to maximise your learning within it.",
            "South Bank Parklands brings significant pedestrian traffic and bus activity to South Brisbane, particularly on weekends. Learning to drive confidently in this environment teaches you some of Queensland's most important road rules — pedestrian crossings, shared zones, bus lane discipline, and managing distractions in busy public spaces. These are skills that will serve you for life, regardless of where you eventually drive.",
            "One thing many South Brisbane learners appreciate about UNO is how clearly and patiently our instructors explain the 'why' behind each road rule and driving technique. We never just tell you what to do — we explain the reasoning behind it, so you become a safe, self-sufficient driver rather than someone who only knows how to pass a test.",
            "UNO Driving School serves the full South Brisbane area with free pickup and drop-off. Our modern automatic dual-control vehicle is comfortable, safe and well-maintained. We offer packages to suit any budget, including Afterpay payment plans. Book your South Brisbane driving lesson today.",
        ],
        landmarks: [
            "South Bank Parklands — complex pedestrian and traffic environment, ideal for observation training",
            "Queensland Performing Arts Centre (QPAC) — adjacent roundabouts and bus road practice",
            "Grey Street — arterial street training for lane discipline and gap selection",
            "Stanley Street — multi-lane practice and merging skill development",
            "Victoria Bridge approaches — merging, lane changes and river crossing preparation",
            "GOMA (Gallery of Modern Art) — quiet side streets near a cultural landmark",
        ],
        testCentre: "Woolloongabba",
        testCentreAddress: "Woolloongabba Transport and Main Roads Customer Service Centre, 47 Ipswich Rd, Woolloongabba QLD 4102",
        nearbySuburbs: [
            { name: "West End", slug: "west-end", region: "inner-brisbane" },
            { name: "Woolloongabba", slug: "woolloongabba", region: "inner-brisbane" },
            { name: "Kangaroo Point", slug: "kangaroo-point", region: "inner-brisbane" },
        ],
        reviews: [
            { name: "Anna", suburb: "South Brisbane", rating: 5, text: "I live near South Bank and the traffic here was really intimidating. UNO broke it down so well — I went from zero confidence to passing first go at Woolloongabba. Couldn't recommend more." },
            { name: "Daniel", suburb: "South Brisbane", rating: 5, text: "Really professional service. Pickup was always on time, the instructor was patient and encouraging, and the lessons covered everything I needed for the test. Passed!" },
            { name: "Emma", suburb: "West End", rating: 5, text: "Great value for money and excellent instruction. The South Brisbane traffic is tricky but UNO prepares you really well. Passed first attempt." },
        ],
        faqs: [
            { question: "How much are driving lessons in South Brisbane?", answer: "Driving lessons in South Brisbane start from $75/hour. Our 10-hour Boost Package is $700, and the Zoom Test Package is $200. Afterpay is available on all packages." },
            { question: "Do you offer pickup in South Brisbane?", answer: "Yes, UNO provides free pickup from anywhere in South Brisbane, West End, Woolloongabba and surrounding inner-city suburbs." },
            { question: "Where do South Brisbane learners take their driving test?", answer: "The nearest test centre for South Brisbane learners is the Woolloongabba Transport and Main Roads Customer Service Centre on Ipswich Road. We practise all relevant test routes." },
            { question: "Do you offer automatic lessons in South Brisbane?", answer: "Yes, all UNO lessons in South Brisbane are in modern automatics. An automatic licence is fully valid in Queensland for any automatic vehicle." },
            { question: "Can nervous drivers learn in South Brisbane?", answer: "Yes — South Brisbane's busy environment can feel daunting, but our instructors are specialists in building calm, patient confidence. We start gently and progress at your pace." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Woolloongabba+Transport+Main+Roads+47+Ipswich+Road+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "woolloongabba": {
        metaTitle: "Driving Lessons Woolloongabba | Automatic Instructor | UNO Driving School",
        metaDescription: "Expert driving lessons in Woolloongabba with UNO Driving School. Automatic instructors near The Gabba and PA Hospital. Book your first lesson today.",
        h1: "Affordable Driving Lessons in Woolloongabba with a Patient Local Instructor",
        bodyParagraphs: [
            "Searching for reliable driving lessons in Woolloongabba? UNO Driving School delivers expert, calm, automatic driving tuition across Woolloongabba, South Brisbane, Stones Corner and surrounding suburbs. With over two decades of instructor experience and a consistently 5-star Google rating, we are Woolloongabba's trusted choice for learner and nervous driver support.",
            "Woolloongabba is one of Brisbane's busiest inner-city hubs. Home to The Gabba stadium, Princess Alexandra Hospital, and the complex five-way intersection on Ipswich Road, it demands sharp road skills and confident decision-making. Learning to drive in Woolloongabba gives you exceptional preparation for city driving anywhere in Brisbane — and excellent preparation for your practical test at the Woolloongabba test centre.",
            "Our Woolloongabba instructors work with you on the specific roads and intersections that feature in the local test route. We practise the Ipswich Road corridor, the turning lanes at the PA Hospital, the roundabouts near Stanley Street Plaza and the multi-lane sections near the tunnel access points. There are no surprises on test day because you have already driven the route with us.",
            "Woolloongabba's traffic can be intense — particularly on event days at The Gabba, with thousands of vehicles entering and leaving the suburb simultaneously. Our instructors teach you to read and respond to high-pressure traffic situations calmly and safely. This kind of real-world experience is invaluable, and it is something you simply cannot replicate in a quiet suburban carpark.",
            "Choose UNO Driving School in Woolloongabba and benefit from free pickup and drop-off, fully insured automatic dual-control vehicles, flexible booking, and an instructor who genuinely cares about your success. Afterpay is available. Book your Woolloongabba driving lesson today.",
        ],
        landmarks: [
            "The Gabba (Brisbane Cricket Ground) — event-day traffic management practice",
            "Princess Alexandra Hospital — complex intersection and give-way practice",
            "Stanley Street East — multi-lane discipline and roundabout training",
            "Ipswich Road — key arterial route used in the Woolloongabba test route",
            "Logan Road junction — lane selection at multi-directional intersections",
            "Stones Corner village — pedestrian zones and give-way rule practice",
        ],
        testCentre: "Woolloongabba",
        testCentreAddress: "Woolloongabba Transport and Main Roads Customer Service Centre, 47 Ipswich Rd, Woolloongabba QLD 4102",
        nearbySuburbs: [
            { name: "South Brisbane", slug: "south-brisbane", region: "inner-brisbane" },
            { name: "East Brisbane", slug: "east-brisbane", region: "inner-brisbane" },
            { name: "Stones Corner", slug: "stones-corner", region: "southern-brisbane" },
        ],
        reviews: [
            { name: "Zara", suburb: "Woolloongabba", rating: 5, text: "The traffic in Woolloongabba is crazy — I was so stressed about it. UNO built my confidence bit by bit and I passed at the Woolloongabba centre on my first go. Amazing instructors." },
            { name: "Ryan", suburb: "Woolloongabba", rating: 5, text: "Really impressed with UNO. My instructor knew the local roads perfectly and prepared me exactly for the test. Very patient with me as a nervous learner." },
            { name: "Mei", suburb: "South Brisbane", rating: 5, text: "Professional, punctual and incredibly effective teaching. After 12 lessons with UNO I felt 100% ready. Passed first try. Best investment I've made." },
        ],
        faqs: [
            { question: "How much do driving lessons in Woolloongabba cost?", answer: "Lessons in Woolloongabba start from $75/hour. Our Boost Package (10 hours) is $700, and the Zoom Test Package is $200. Afterpay available." },
            { question: "Do you pick up from Woolloongabba?", answer: "Yes — we offer free pickup and drop-off from anywhere in Woolloongabba, South Brisbane, East Brisbane and Stones Corner." },
            { question: "Where is the Woolloongabba driving test centre?", answer: "The Woolloongabba Transport and Main Roads Customer Service Centre is at 47 Ipswich Rd, Woolloongabba. This is the nearest centre for most Woolloongabba learners, and we practise the routes specifically used there." },
            { question: "Can you help with nervous driving in Woolloongabba?", answer: "Yes, nervous driver support is a core UNO specialty. We start every nervous learner gently and build up to the heavier Woolloongabba traffic progressively." },
            { question: "Do Woolloongabba learners need automatic or manual lessons?", answer: "We recommend automatic for most learners — it is simpler to learn and the licence is fully valid for automatic vehicles in QLD. UNO only offers automatic lessons." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Woolloongabba+Transport+Main+Roads+47+Ipswich+Road+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "new-farm": {
        metaTitle: "Driving Lessons New Farm | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in New Farm with UNO Driving School. Patient automatic instructors serving New Farm, Teneriffe and Newstead. 5-star rated. Book today.",
        h1: "Affordable Driving Lessons in New Farm with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in New Farm? UNO Driving School offers calm, professional automatic driving lessons for learners in New Farm, Teneriffe, Newstead and Fortitude Valley. Our 5-star instructors specialise in building lasting confidence, not just getting you through a checklist.",
            "New Farm is a stunning inner-city suburb with a unique mix of wide, tree-lined avenues and busier arterial roads like Brunswick Street and Merthyr Road. For learner drivers, this diversity is a genuine advantage — it means every lesson naturally covers multiple road environments within a short distance. Our New Farm instructors know exactly how to use this variety to build your skills progressively.",
            "Driving near New Farm Park on a sunny weekend can feel quite different from navigating the same streets on a quiet Tuesday morning. Our instructors are deliberately teaching you to adapt to changing road conditions — pedestrian crowding, double-parked cars near James Street, cyclists near the riverfront path — rather than training you for one set of ideal conditions. That adaptability is what separates confident, safe drivers from those who only feel safe on familiar roads.",
            "Many of our New Farm students are young adults or professionals who have been putting off learning to drive. Our friendly, non-judgmental instructors make the experience straightforward and enjoyable. By the time you are ready to test, the roads in New Farm will feel familiar and manageable — because you have already driven them dozens of times with us.",
            "Book your driving lesson in New Farm today. We offer flexible scheduling, free pickup and drop-off, Afterpay payment plans, and a full range of lesson packages. UNO Driving School — where New Farm learners get their licence first go.",
        ],
        landmarks: [
            "New Farm Park — scenic parkland ideal for slow-speed control and observation practice",
            "Brunswick Street — busy high street for pedestrian-aware driving and lane discipline",
            "Powerhouse (Brisbane Powerhouse) — riverside precinct with shared zones and cyclists",
            "James Street precinct — car park entry/exit practice and tight street navigation",
            "Merthyr Road roundabout — a key local roundabout ideal for give-way practice",
            "New Farm State School — school zone training and pedestrian crossing awareness",
        ],
        testCentre: "Fortitude Valley",
        testCentreAddress: "Fortitude Valley Transport and Main Roads Customer Service Centre, 237 Brunswick St, Fortitude Valley QLD 4006",
        nearbySuburbs: [
            { name: "Teneriffe", slug: "teneriffe", region: "inner-brisbane" },
            { name: "Fortitude Valley", slug: "fortitude-valley", region: "inner-brisbane" },
            { name: "Newstead", slug: "newstead", region: "inner-brisbane" },
        ],
        reviews: [
            { name: "Natalie", suburb: "New Farm", rating: 5, text: "I was so nervous about learning to drive — I'm in my 30s and kept putting it off. UNO made me feel completely at ease from the very first lesson in New Farm. Passed first attempt!" },
            { name: "Sam", suburb: "New Farm", rating: 5, text: "The instructor was punctual, calm, and really good at explaining things. New Farm has some tricky roads but I felt prepared for everything. Great experience overall." },
            { name: "Bianca", suburb: "Teneriffe", rating: 5, text: "Absolutely outstanding service. Picked up from home, the car was clean and comfortable, and I passed my test first try at Fortitude Valley. Highly recommend UNO!" },
        ],
        faqs: [
            { question: "How much are driving lessons in New Farm?", answer: "New Farm lessons start from $75/hour. Ten-lesson packages are $700, and the Zoom Test Package is $200. Afterpay is available on all bookings." },
            { question: "Do you offer pickup from New Farm?", answer: "Yes. We provide free pickup and drop-off from New Farm, Teneriffe, Newstead and Fortitude Valley." },
            { question: "Which driving test centre do New Farm learners use?", answer: "Most New Farm learners test at the Fortitude Valley Transport and Main Roads Customer Service Centre on Brunswick Street. We practise that specific test route during your lessons." },
            { question: "Are you good with nervous drivers in New Farm?", answer: "Absolutely — many of our most successful New Farm students are people who were very nervous before starting. Our calm, patient approach is designed specifically for anxious learners." },
            { question: "How many lessons will I need from New Farm?", answer: "Most learners need 10–20 professional lessons. Your UNO instructor will give you honest, regular feedback on your progress and readiness." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Fortitude+Valley+Transport+Main+Roads+237+Brunswick+St+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "teneriffe": {
        metaTitle: "Driving Lessons Teneriffe | Automatic Instructor | UNO Driving School",
        metaDescription: "Book driving lessons in Teneriffe with UNO Driving School. Patient automatic instructors for all levels. Serving Teneriffe, New Farm and Newstead. Book online.",
        h1: "Affordable Driving Lessons in Teneriffe with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for quality driving lessons in Teneriffe? UNO Driving School provides calm, professional, automatic driving tuition for learners across Teneriffe, New Farm, Newstead and Fortitude Valley. Our experienced instructors are 5-star rated and dedicated to building genuine driver confidence, not just test-ready performance.",
            "Teneriffe is one of Brisbane's most picturesque riverside suburbs, and its road network provides an excellent variety of training environments. From the tight heritage streets of the former woolstores to the wider Vernon Terrace running along the river, and from the residential pockets near Teneriffe Park to the busier Bowen Hills connections — our Teneriffe instructors use the full variety of local roads to build your skills systematically.",
            "Parallel parking and reverse manoeuvres are particularly common challenges in Teneriffe, where on-street parking is popular and spaces can be tight. We spend dedicated lesson time on these skills in a low-pressure environment before introducing them in actual traffic. By the time your test arrives, you will be executing parallel parks calmly and accurately.",
            "UNO instructors who teach in Teneriffe have an intimate knowledge of the queensland driving test routes used at the nearby Fortitude Valley test centre. We weave the key test sections into your regular lesson routes so that on the day itself, you are not navigating unfamiliar roads — you are driving roads you already know by heart.",
            "Free pickup and drop-off is included with every Teneriffe lesson, and we offer flexible scheduling 7 days a week, including evenings. Afterpay payment plans mean you can spread the cost of a lesson package comfortably. Book your first Teneriffe driving lesson with UNO today.",
        ],
        landmarks: [
            "Teneriffe Park — quiet parkland streets ideal for beginners and low-speed manoeuvres",
            "Woolstores precinct — narrow heritage streets for precise vehicle control practice",
            "Vernon Terrace — riverside arterial route for speed management and lane discipline",
            "Macquarie Street — local residential street used for parking practice",
            "Teneriffe Ferry terminal — a local landmark ideal for understanding shared zones",
            "Fortitude Valley boundary streets — preparation for the local test route",
        ],
        testCentre: "Fortitude Valley",
        testCentreAddress: "Fortitude Valley Transport and Main Roads Customer Service Centre, 237 Brunswick St, Fortitude Valley QLD 4006",
        nearbySuburbs: [
            { name: "New Farm", slug: "new-farm", region: "inner-brisbane" },
            { name: "Newstead", slug: "newstead", region: "inner-brisbane" },
            { name: "Fortitude Valley", slug: "fortitude-valley", region: "inner-brisbane" },
        ],
        reviews: [
            { name: "Georgia", suburb: "Teneriffe", rating: 5, text: "I absolutely loved learning with UNO. The streets around Teneriffe are tricky but my instructor was so good at building my confidence. Passed at Fortitude Valley on my first go!" },
            { name: "Hugo", suburb: "Teneriffe", rating: 5, text: "Best decision I made was booking with UNO. Really professional, always on time, and incredibly patient. Passed first try after 12 lessons." },
            { name: "Isla", suburb: "New Farm", rating: 5, text: "I tried two other schools before UNO and the difference is huge. The teaching style is calm, clear and genuinely effective. Result: passed first time!" },
        ],
        faqs: [
            { question: "How much are driving lessons in Teneriffe?", answer: "Lessons start from $75/hour. The 10-lesson Boost Package is $700. The Zoom Test Package (including car hire for test day) is $200. Afterpay available." },
            { question: "Do you offer pickup from Teneriffe?", answer: "Yes, UNO offers free pickup from Teneriffe, New Farm, Newstead and Fortitude Valley." },
            { question: "Which test centre do Teneriffe learners use?", answer: "Teneriffe learners typically test at the Fortitude Valley Transport Centre on Brunswick Street. We rehearse these test routes during lessons." },
            { question: "Is UNO good for anxious drivers in Teneriffe?", answer: "Yes — our calm, patient teaching style is built around helping anxious learners. Many Teneriffe students who came to us feeling very nervous left with genuine confidence." },
            { question: "How many lessons before I can test from Teneriffe?", answer: "Generally 10–20 lessons, depending on your experience. Your instructor provides honest, lesson-by-lesson feedback on your readiness." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Fortitude+Valley+Transport+Main+Roads+237+Brunswick+St+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "newstead": {
        metaTitle: "Driving Lessons Newstead | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in Newstead with UNO Driving School. Experienced automatic instructors near Gasworks and Teneriffe. 5-star rated. Book your lesson today.",
        h1: "Affordable Driving Lessons in Newstead with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Newstead? UNO Driving School offers professional, calm, automatic driving lessons for learners in Newstead, Teneriffe, Fortitude Valley and Bowen Hills. Our 5-star rated instructors have a proven record of helping students pass their Queensland practical driving test on the first attempt.",
            "Newstead is one of Brisbane's fastest-growing inner-city suburbs, and its road network reflects that growth — wide new residential streets sit alongside the busy Breakfast Creek Road and the development-heavy Montague Road corridor. Learning to drive in Newstead gives you experience with new estate road layouts, roundabouts serving high-density residential traffic, and construction vehicle awareness.",
            "The Gasworks precinct near James Street is a key local landmark and a regular part of our Newstead lesson routes. Navigating the car park entrances, the pedestrian crossings, and the give-way rules on the connecting roads is excellent practice for urban driving in any part of Brisbane. Our instructors use Gasworks specifically to teach hazard perception and situational awareness.",
            "From Newstead, the Fortitude Valley test centre is nearby, and our instructors know its test routes thoroughly. We rehearse the specific roads and manoeuvres used in the Fortitude Valley test as a regular part of your Newstead lessons — so when you sit your assessment, you are performing on familiar territory.",
            "UNO serves the full Newstead area with free pickup and drop-off, flexible 7-day scheduling, fully insured automatic vehicles with dual controls, and Afterpay payment plans. If you are ready to get your licence, book your first Newstead driving lesson today.",
        ],
        landmarks: [
            "Gasworks Plaza — pedestrian crossings, roundabouts and busy car park practice",
            "Newstead Park — quiet riverside streets perfect for beginner car control",
            "Breakfast Creek Road — arterial route for speed and lane discipline training",
            "Montague Road — construction zone awareness and merging practice",
            "Newstead Heritage Park — local residential streets for three-point turns",
            "James Street corridor — urban high-street navigation and pedestrian awareness",
        ],
        testCentre: "Fortitude Valley",
        testCentreAddress: "Fortitude Valley Transport and Main Roads Customer Service Centre, 237 Brunswick St, Fortitude Valley QLD 4006",
        nearbySuburbs: [
            { name: "Teneriffe", slug: "teneriffe", region: "inner-brisbane" },
            { name: "Fortitude Valley", slug: "fortitude-valley", region: "inner-brisbane" },
            { name: "Bowen Hills", slug: "bowen-hills", region: "inner-brisbane" },
        ],
        reviews: [
            { name: "Oscar", suburb: "Newstead", rating: 5, text: "The Gasworks area is crazy busy but UNO made me feel totally prepared. Instructor was patient and really knew the local roads. Passed at Fortitude Valley first go." },
            { name: "Hana", suburb: "Newstead", rating: 5, text: "Really impressed with the standard of teaching. My instructor was calm, punctual, and clearly knew exactly how to prepare me for the test. Would absolutely recommend." },
            { name: "Leon", suburb: "Teneriffe", rating: 5, text: "10 lessons with UNO and I passed first try. The car is comfortable, the instructor is great, and the pickup service saved me so much hassle. 5 stars." },
        ],
        faqs: [
            { question: "What do driving lessons in Newstead cost?", answer: "Lessons in Newstead start from $75/hour. The 10-lesson package is $700 and the Zoom Test Package is $200. Afterpay available." },
            { question: "Do you pick up from Newstead?", answer: "Yes — free pickup and drop-off from Newstead and nearby Teneriffe, Fortitude Valley and Bowen Hills." },
            { question: "Which test centre is closest to Newstead?", answer: "The Fortitude Valley Transport and Main Roads Customer Service Centre on Brunswick Street is the closest to Newstead learners." },
            { question: "Are automatic lessons available in Newstead?", answer: "Yes, all UNO lessons across Newstead are in modern automatic vehicles. Automatic licences are fully valid across Queensland." },
            { question: "How soon can I book my first Newstead lesson?", answer: "Usually within a few days. Contact UNO directly or book online and we will match you with an available local instructor in Newstead." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Fortitude+Valley+Transport+Main+Roads+237+Brunswick+St+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "fortitude-valley": {
        metaTitle: "Driving Lessons Fortitude Valley | Automatic Instructor | UNO Driving School",
        metaDescription: "Professional driving lessons in Fortitude Valley with UNO Driving School. Experienced automatic instructors near the Valley test centre. Book today.",
        h1: "Affordable Driving Lessons in Fortitude Valley with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Fortitude Valley? UNO Driving School delivers expert, automatic driving tuition for learners in Fortitude Valley, Newstead, Spring Hill and Bowen Hills. Our 5-star rated instructors specialise in building calm, confident drivers who pass their Queensland practical test first time.",
            "Fortitude Valley is Brisbane's entertainment and arts heart — and one of the most challenging inner-city environments to learn to drive in. The one-way systems on Ann Street and Wickham Street, the pedestrian-heavy Brunswick Street Mall, the bus lanes, and the Chinatown precinct all create a high-stimulus driving environment. UNO instructors teach you to navigate all of this with composed, systematic attention.",
            "The Fortitude Valley Transport and Main Roads Customer Service Centre is right in the suburb, making it the closest test centre for Valley learners. Our instructors have intimate knowledge of the test routes used at this centre — we rehearse the specific roads, intersections and manoeuvres that examiners are likely to assess. On test day, you will be driving routes you have already completed multiple times.",
            "Fortitude Valley's nightlife and event culture means your lessons may also expose you to heavy foot traffic, road closures, and impulsive pedestrian behaviour near Chinatown and the festival venues on Brunswick Street. We use these real-world challenges in your lessons deliberately — they sharpen your scanning and hazard perception skills far more effectively than quiet suburban streets ever could.",
            "UNO Driving School serves Fortitude Valley learners with free pickup and drop-off, modern automatic dual-control vehicles, 7-day flexible scheduling, and Afterpay payment options. Book your Fortitude Valley driving lesson now and work with an instructor who knows the Valley inside out.",
        ],
        landmarks: [
            "Brunswick Street Mall — pedestrian zone navigation and shared space rules",
            "Ann Street one-way system — directional road compliance and lane selection",
            "Wickham Street — one-way system and peak-hour traffic management",
            "Chinatown precinct — high-pedestrian area for hazard perception training",
            "TC Beirne building complex — roundabout and give-way practice",
            "Fortitude Valley Train Station — bus stop and taxi zone awareness",
        ],
        testCentre: "Fortitude Valley",
        testCentreAddress: "Fortitude Valley Transport and Main Roads Customer Service Centre, 237 Brunswick St, Fortitude Valley QLD 4006",
        nearbySuburbs: [
            { name: "Newstead", slug: "newstead", region: "inner-brisbane" },
            { name: "Spring Hill", slug: "spring-hill", region: "inner-brisbane" },
            { name: "Bowen Hills", slug: "bowen-hills", region: "inner-brisbane" },
        ],
        reviews: [
            { name: "Ruby", suburb: "Fortitude Valley", rating: 5, text: "The one-way streets in Fortitude Valley really confused me at first. My UNO instructor broke it down so well. Passed at the Valley test centre on my first go!" },
            { name: "Lucas", suburb: "Fortitude Valley", rating: 5, text: "Really great service. Pickup was always on time and my instructor was calm and professional. I passed first try after 10 lessons. Highly recommend." },
            { name: "Mia", suburb: "Spring Hill", rating: 5, text: "I'd heard the Valley driving test was tricky. UNO made sure I knew every part of the route. Passed with confidence. Best driving school for this area." },
        ],
        faqs: [
            { question: "How much are driving lessons in Fortitude Valley?", answer: "Lessons in Fortitude Valley start from $75/hour. Packages include a 10-hour deal at $700 and the Zoom Test Package at $200. Afterpay available." },
            { question: "Do you offer pickup from Fortitude Valley?", answer: "Yes — free pickup and drop-off from Fortitude Valley, Newstead, Spring Hill and Bowen Hills." },
            { question: "Where is the Fortitude Valley test centre?", answer: "The Fortitude Valley Transport and Main Roads Customer Service Centre is located at 237 Brunswick St. This is the local test centre for Valley learners." },
            { question: "Can UNO help with the Valley's one-way street system?", answer: "Absolutely. Navigating Ann Street and Wickham Street's one-way systems is a regular part of our Fortitude Valley lesson curriculum. You will be comfortable with them before your test." },
            { question: "Are you good with nervous drivers in Fortitude Valley?", answer: "Yes — our calm, patient teaching approach is perfect for the daunting inner-city environment of Fortitude Valley. We build confidence step by step." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Fortitude+Valley+Transport+Main+Roads+237+Brunswick+St+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "kangaroo-point": {
        metaTitle: "Driving Lessons Kangaroo Point | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in Kangaroo Point with UNO Driving School. Patient automatic instructors near Story Bridge and East Brisbane. 5-star rated. Book today.",
        h1: "Affordable Driving Lessons in Kangaroo Point with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Kangaroo Point? UNO Driving School provides calm, professional, automatic driving lessons for learners in Kangaroo Point, East Brisbane, Woolloongabba and South Brisbane. With over 20 years of instructor experience and a 5-star rating, we help nervous drivers confidently pass their Queensland practical test on the first attempt.",
            "Kangaroo Point's unique geography — a peninsula bounded on three sides by the Brisbane River — makes it one of the most interesting and challenging suburbs to learn to drive in. The long, straight Main Street is excellent for developing speed awareness and following distances. The winding riverside roads around Captain Burke Park provide practice on bends and crests. The approaches to the Story Bridge demand confident lane selection and merging skills.",
            "The steep gradient of the Kangaroo Point cliffs area and the hills along River Terrace provide excellent hill start and downhill braking practice. Many Kangaroo Point learners initially find hill starts daunting, but our instructors break this skill down specifically and patiently until it becomes second nature. By the time you are leaving the area on a hill in traffic, it will feel natural.",
            "Learning to drive near the Story Bridge specifically prepares you for bridge and high-speed approach driving — an important skill for any Brisbane driver who will regularly use the Gateway Motorway, the Story Bridge or the William Jolly Bridge. Our instructors teach approaching these structures at appropriate speeds with correct lane positioning.",
            "Book your Kangaroo Point driving lesson with UNO today. We offer free pickup and drop-off from anywhere in Kangaroo Point and surrounding suburbs, flexible 7-day scheduling, Afterpay payment options, and lesson packages that represent genuine value. Your licence is closer than you think.",
        ],
        landmarks: [
            "Kangaroo Point Cliffs — hill start and gradient driving practice on a local landmark",
            "Captain Burke Park — quiet riverside location for beginner car control",
            "Main Street — straight arterial for speed management and following distance training",
            "Story Bridge approaches — lane selection, speed management and bridge driving practice",
            "River Terrace — winding riverside road for bend and crest awareness training",
            "Thornton Street — residential practice for parallel parking and reversing manoeuvres",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "East Brisbane", slug: "east-brisbane", region: "inner-brisbane" },
            { name: "Woolloongabba", slug: "woolloongabba", region: "inner-brisbane" },
            { name: "South Brisbane", slug: "south-brisbane", region: "inner-brisbane" },
        ],
        reviews: [
            { name: "Finn", suburb: "Kangaroo Point", rating: 5, text: "The hills in Kangaroo Point were terrifying — I stalled so many times at first! But UNO was so patient and I passed at Greenslopes first time. Amazing teaching." },
            { name: "Claire", suburb: "Kangaroo Point", rating: 5, text: "Really professional and thorough. My instructor took me through all the tricky parts of Kangaroo Point and by the end I felt completely confident. Passed first go!" },
            { name: "Noah", suburb: "East Brisbane", rating: 5, text: "UNO is the real deal. Great communication, always on time, calm teaching style. Passed my test at Greenslopes on the first attempt after 14 lessons." },
        ],
        faqs: [
            { question: "How much do driving lessons in Kangaroo Point cost?", answer: "Lessons in Kangaroo Point start from $75/hour. The 10-lesson Boost Package is $700. The Zoom Test Package is $200. Afterpay available." },
            { question: "Do you offer pickup from Kangaroo Point?", answer: "Yes — free pickup from Kangaroo Point, East Brisbane, Woolloongabba and South Brisbane." },
            { question: "Which test centre do Kangaroo Point learners use?", answer: "Kangaroo Point learners typically test at the Greenslopes Transport and Main Roads Centre. We practise those specific test routes during your lessons." },
            { question: "Is Kangaroo Point hard to learn to drive in?", answer: "The hills and the location near the Story Bridge make Kangaroo Point more challenging than typical flat suburbs — but that is exactly why our experienced instructors are so valuable here. We break every challenge down clearly." },
            { question: "Can I learn to drive on the Story Bridge?", answer: "You can practise approaching and crossing the bridge as part of a Kangaroo Point lesson. It is great preparation for city driving across Brisbane." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    // ── EASTERN BRISBANE ──────────────────────────────────────────────────────

    "camp-hill": {
        metaTitle: "Driving Lessons Camp Hill | Automatic Instructor | UNO Driving School",
        metaDescription: "Book driving lessons in Camp Hill with UNO Driving School. Patient automatic instructors near Coorparoo and Carina. 5-star rated. Book online today.",
        h1: "Affordable Driving Lessons in Camp Hill with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Camp Hill? UNO Driving School provides calm, automatic driving lessons for learners across Camp Hill, Coorparoo, Carina and Seven Hills. Our 5-star rated instructors specialise in helping nervous drivers pass their Queensland practical test first time.",
            "Camp Hill sits on a ridge overlooking the eastern suburbs, giving it one of Brisbane's most distinctive road environments for learners. The hilly terrain along Samuel Griffith Drive and the winding residential streets demand strong clutch-free car control — exactly what our patient Camp Hill instructors build in you from lesson one. The varied gradient also means you receive more hill start practice in Camp Hill than almost anywhere else in the eastern suburbs.",
            "Old Cleveland Road is a major arterial that runs through Camp Hill, and mastering its multi-lane sections, bus stops, and high pedestrian activity near the local shops is a central part of Camp Hill lesson routes. We teach you to manage speed, spacing, and anticipation on Camp Hill's busy connecting roads while remaining comfortable on the quieter residential streets.",
            "UNO instructors who teach in Camp Hill know the Greenslopes test centre routes intimately — they build those specific roads into your regular lessons so test day feels like a practice run. Free pickup and drop-off from Camp Hill, Afterpay on all packages, and flexible 7-day scheduling. Book your Camp Hill lesson today.",
        ],
        landmarks: [
            "Camp Hill Marketplace — roundabout and car park practice near the shopping strip",
            "Samuel Griffith Drive — hilly arterial for gradient control training",
            "Old Cleveland Road — multi-lane practice and bus stop awareness",
            "Camp Hill State School — school zone compliance and pedestrian crossing",
            "Stones Corner boundary roads — connecting arterial navigation",
            "Martha Street — quiet residential streets for parking practice",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Coorparoo", slug: "coorparoo", region: "eastern-brisbane" },
            { name: "Carina", slug: "carina", region: "eastern-brisbane" },
            { name: "Norman Park", slug: "norman-park", region: "eastern-brisbane" },
        ],
        reviews: [
            { name: "Charlotte", suburb: "Camp Hill", rating: 5, text: "The hills in Camp Hill worried me but UNO was so good at building my confidence step by step. Passed at Greenslopes on my first go — couldn't be happier!" },
            { name: "Jack", suburb: "Camp Hill", rating: 5, text: "Really professional and patient. Old Cleveland Road felt intimidating at first but by lesson 5 I was totally comfortable. Passed first try, highly recommend." },
            { name: "Alicia", suburb: "Coorparoo", rating: 5, text: "Booked through UNO after a bad experience elsewhere. Completely different — calm, clear instruction and I passed first time. Worth every cent." },
        ],
        faqs: [
            { question: "How much are driving lessons in Camp Hill?", answer: "Camp Hill lessons start from $75/hour. The 10-lesson Boost Package is $700 and the Zoom Test Package (including car hire for test day) is $200. Afterpay available." },
            { question: "Do you pick up from Camp Hill?", answer: "Yes — free pickup and drop-off from Camp Hill, Coorparoo, Carina and Seven Hills." },
            { question: "Is Camp Hill hard to learn to drive in?", answer: "The hills make Camp Hill more challenging than flat suburbs, but that is exactly why UNO's experienced instructors are so valuable — we break hill starts down clearly and practise them until they feel natural." },
            { question: "Which test centre do Camp Hill learners use?", answer: "Camp Hill learners typically test at the Greenslopes Transport and Main Roads Customer Service Centre. We rehearse these routes specifically during your lessons." },
            { question: "Do you offer automatic lessons in Camp Hill?", answer: "Yes, all UNO lessons in Camp Hill are in modern automatic vehicles. An automatic licence is fully valid across Queensland." },
            { question: "How many lessons before I'm ready to test from Camp Hill?", answer: "Most Camp Hill learners are test-ready in 10–20 professional lessons. Your instructor provides honest feedback after every lesson." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "bulimba": {
        metaTitle: "Driving Lessons Bulimba | Automatic Instructor | UNO Driving School",
        metaDescription: "Professional driving lessons in Bulimba with UNO Driving School. Experienced automatic instructors near Oxford St and the river. 5-star rated. Book today.",
        h1: "Affordable Driving Lessons in Bulimba with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Bulimba? UNO Driving School offers calm, automatic driving tuition for learners across Bulimba, Hawthorne, Morningside and Balmoral. With 5-star rated instructors and a proven record of first-attempt test passes, we are Bulimba's most trusted driving school.",
            "Bulimba's unique riverside location means learners develop excellent spatial awareness and road-sharing skills from the outset. Oxford Street is a vibrant, pedestrian-active strip that teaches you how to manage cafe traffic, double-parked vehicles, and cyclists — all in one stretch. Our Bulimba instructors use this variety deliberately, building a complete skill set that goes far beyond basic test preparation.",
            "The hill gradients running from the river flat up to Hawthorne Road and the connecting streets to Morningside make Bulimba an excellent environment for perfecting hill starts without the intimidating steepness of suburbs further west. We also practise the Bulimba ferry precinct roads for shared zone observation and the Riverwalk access for pedestrian-aware driving.",
            "Bulimba learners typically sit their test at Greenslopes, and our instructors incorporate the specific test routes into every lesson from early on. Free pickup from Bulimba and surrounding suburbs, Afterpay payment options, and flexible scheduling make UNO the easy choice. Book your Bulimba driving lesson today.",
        ],
        landmarks: [
            "Oxford Street precinct — cafe strip navigation, pedestrian awareness and double-parking management",
            "Bulimba Riverwalk access — shared zone rules and pedestrian-aware driving",
            "Hawthorne Road — key connector for speed management and roundabout practice",
            "Bulimba State School — school zone speed limits and crossing awareness",
            "Morningside boundary roads — multi-lane transition from residential to arterial",
            "Bulimba Ferry terminal precinct — shared zone and slow-speed manoeuvres",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Hawthorne", slug: "hawthorne", region: "eastern-brisbane" },
            { name: "Morningside", slug: "morningside", region: "eastern-brisbane" },
            { name: "Balmoral", slug: "balmoral", region: "eastern-brisbane" },
        ],
        reviews: [
            { name: "Ella", suburb: "Bulimba", rating: 5, text: "Oxford Street was daunting with all the pedestrians, but my UNO instructor was so patient. Passed at Greenslopes first time — loved the experience." },
            { name: "Will", suburb: "Bulimba", rating: 5, text: "Fantastic driving school. Instructor picked me up from home, great teaching style, passed first go. Would absolutely recommend to anyone in Bulimba." },
            { name: "Grace", suburb: "Hawthorne", rating: 5, text: "Really impressed with the level of instruction. My UNO instructor knew exactly which roads to practise on and I felt completely ready for the test." },
        ],
        faqs: [
            { question: "How much do driving lessons in Bulimba cost?", answer: "Lessons in Bulimba start from $75/hour. Packages: 10 hours for $700, Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Bulimba?", answer: "Yes — free pickup from Bulimba, Hawthorne, Morningside and Balmoral." },
            { question: "Which test centre do Bulimba learners use?", answer: "Bulimba learners test at the Greenslopes Transport and Main Roads Centre. We rehearse those routes during lessons." },
            { question: "Are automatic lessons available in Bulimba?", answer: "Yes, all UNO lessons in Bulimba are conducted in modern automatic vehicles." },
            { question: "Can UNO help nervous drivers in Bulimba?", answer: "Absolutely — calm, patient instruction is our specialty. Many of our Bulimba students start very nervous and finish very confident." },
            { question: "How many lessons will I need in Bulimba?", answer: "Most learners need 10–20 professional lessons. Your instructor tracks your progress honestly every lesson." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "morningside": {
        metaTitle: "Driving Lessons Morningside | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in Morningside with UNO Driving School. Calm automatic instructors for all skill levels. Serving Morningside, Bulimba and Cannon Hill. Book now.",
        h1: "Affordable Driving Lessons in Morningside with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Morningside? UNO Driving School provides professional, automatic driving tuition for learners across Morningside, Bulimba, Cannon Hill and Murarrie. Our 5-star instructors have helped hundreds of Morningside students achieve their licence on the first attempt.",
            "Morningside sits at the junction of several key eastern Brisbane road corridors, making it a genuinely valuable training ground. Wynnum Road and Lytton Road expose learners to multi-lane driving and roundabout navigation, while the quieter residential streets off Thynne Road provide a controlled environment for perfecting low-speed manoeuvres and parking. This variety means every Morningside lesson builds a broad range of skills.",
            "The Colmslie Industrial Area on the suburb's edge introduces learners to truck and heavy vehicle awareness early — a skill that proves valuable across all of Greater Brisbane. Our Morningside instructors specifically teach safe passing distances, blind spot management near large vehicles, and anticipating the slower acceleration of trucks at intersections.",
            "UNO instructors know the Greenslopes test routes well and integrate them naturally into Morningside lesson plans. Free pickup is available anywhere in Morningside and nearby suburbs, Afterpay is accepted on all packages, and lessons run 7 days a week. Book your first Morningside lesson today.",
        ],
        landmarks: [
            "Colmslie Recreation Reserve — quiet access roads ideal for beginner car control",
            "Wynnum Road — major arterial for multi-lane and speed management training",
            "Lytton Road — industrial and residential mix, heavy vehicle awareness",
            "Morningside Central shopping precinct — car park practice and slow-speed navigation",
            "Thynne Road — connecting residential streets for parking and reversing practice",
            "Cannon Hill boundary roads — multi-lane transition and roundabout practice",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Bulimba", slug: "bulimba", region: "eastern-brisbane" },
            { name: "Cannon Hill", slug: "cannon-hill", region: "eastern-brisbane" },
            { name: "Murarrie", slug: "murarrie", region: "eastern-brisbane" },
        ],
        reviews: [
            { name: "Ben", suburb: "Morningside", rating: 5, text: "Really good experience with UNO. My instructor was calm and professional, covered all the right roads around Morningside and I passed first go at Greenslopes." },
            { name: "Zoe", suburb: "Morningside", rating: 5, text: "Highly recommend UNO. Picked up from home, always on time, and the teaching style is so encouraging. Passed first try!" },
            { name: "Lara", suburb: "Cannon Hill", rating: 5, text: "After a bad experience at another school I switched to UNO. Night and day difference. Patient, clear instruction — passed first attempt." },
        ],
        faqs: [
            { question: "How much do driving lessons in Morningside cost?", answer: "Morningside lessons start from $75/hr. The Boost Package (10 hrs) is $700; Zoom Test Package is $200. Afterpay available." },
            { question: "Do you pick up from Morningside?", answer: "Yes — free pickup from Morningside, Bulimba, Cannon Hill and Murarrie." },
            { question: "Which test centre is closest to Morningside?", answer: "The Greenslopes Transport and Main Roads Centre is the closest test centre for Morningside learners." },
            { question: "Are automatic lessons available in Morningside?", answer: "Yes, all UNO Morningside lessons are in modern, comfortable automatic vehicles." },
            { question: "Can you help anxious drivers in Morningside?", answer: "Yes — nervous driver support is one of UNO's core specialties. We build confidence gradually and patiently." },
            { question: "How quickly can I book a lesson in Morningside?", answer: "Usually within a few days. Contact UNO or book online and we will match you with a local Morningside instructor." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "norman-park": {
        metaTitle: "Driving Lessons Norman Park | Automatic Instructor | UNO Driving School",
        metaDescription: "Book driving lessons in Norman Park with UNO Driving School. Patient automatic instructors near East Brisbane and Camp Hill. 5-star rated. Book today.",
        h1: "Affordable Driving Lessons in Norman Park with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Norman Park? UNO Driving School provides calm, professional, automatic driving lessons for learners across Norman Park, Camp Hill, East Brisbane and Hawthorne. Our highly-rated instructors specialise in building genuine, lasting confidence — not just getting you through a test.",
            "Norman Park is one of Brisbane's most picturesque and hilly eastern suburbs, framed by Norman Creek and the ridge roads that connect it to Coorparoo and Camp Hill. The gently winding streets near Whites Hill Reserve provide an excellent early lesson environment — relaxed enough for beginners to find their feet, but varied enough to start developing real road sense from lesson one.",
            "Hawthorne Road and the connecting routes to East Brisbane introduce Morningside learners to higher-speed driving and lane discipline early. Our Norman Park instructors weave these roads naturally into every lesson, ensuring you progress smoothly from quiet residential streets to the broader arterials you will need for your Queensland practical driving test.",
            "Norman Park learners sit their test at the Greenslopes centre, and our instructors know that route thoroughly. We offer free pickup from Norman Park and surrounding suburbs, Afterpay payment plans, and flexible scheduling including weekends and evenings. Book your first Norman Park driving lesson today.",
        ],
        landmarks: [
            "Whites Hill Reserve — beautiful hillside reserve with winding access roads for early-stage training",
            "Norman Creek parklands — quiet flat roads ideal for beginners' first lessons",
            "Hawthorne Road — arterial route for speed management and lane discipline",
            "Norman Park State School — school zone awareness and pedestrian crossing practice",
            "Vulture Street access — multi-lane introduction and traffic light compliance",
            "Station Road — residential street ideal for parallel parking practice",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Camp Hill", slug: "camp-hill", region: "eastern-brisbane" },
            { name: "East Brisbane", slug: "east-brisbane", region: "inner-brisbane" },
            { name: "Hawthorne", slug: "hawthorne", region: "eastern-brisbane" },
        ],
        reviews: [
            { name: "Olivia", suburb: "Norman Park", rating: 5, text: "The hilly streets were intimidating at first but UNO made them feel totally manageable. Passed first go at Greenslopes. Best driving school in the east!" },
            { name: "Ethan", suburb: "Norman Park", rating: 5, text: "Calm, patient, effective. That describes my UNO instructor perfectly. Passed first attempt after 12 lessons — I couldn't be happier." },
            { name: "Isabelle", suburb: "Camp Hill", rating: 5, text: "Great pickup service, really safe car, and an instructor who genuinely cared about my progress. Passed first try. Highly recommend UNO." },
        ],
        faqs: [
            { question: "How much are driving lessons in Norman Park?", answer: "Norman Park lessons start from $75/hour. The 10-lesson package is $700; the Zoom Test Package is $200. Afterpay available." },
            { question: "Do you pick up from Norman Park?", answer: "Yes — free pickup from Norman Park, Camp Hill, East Brisbane and Hawthorne." },
            { question: "Which driving test centre do Norman Park learners use?", answer: "Norman Park learners typically sit their test at the Greenslopes Transport and Main Roads Customer Service Centre." },
            { question: "Are automatic lessons available in Norman Park?", answer: "Yes, all UNO lessons in Norman Park are in modern automatic vehicles." },
            { question: "Is Norman Park good for learning to drive?", answer: "Yes — the mix of quiet hill streets and wider arterial roads makes Norman Park an excellent and varied training environment." },
            { question: "Can UNO help nervous drivers in Norman Park?", answer: "Absolutely. Our calm, supportive teaching style is perfect for anxious learners, and many Norman Park students start nervous and finish very confident." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "hawthorne": {
        metaTitle: "Driving Lessons Hawthorne | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in Hawthorne with UNO Driving School. Patient, automatic instructors for all levels. Serving Hawthorne, Bulimba and Norman Park. Book today.",
        h1: "Affordable Driving Lessons in Hawthorne with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Hawthorne? UNO Driving School delivers calm, automatic driving tuition for learners in Hawthorne, Bulimba, Norman Park and Morningside. Our instructors are 5-star rated and dedicated to helping every student pass their Queensland practical driving test first time.",
            "Hawthorne is one of inner Brisbane's most charming riverside suburbs, and its hilly, narrow streets make it one of the most rewarding places to learn to drive. The winding streets that climb away from the river through Hawthorne's residential areas demand precise steering and confident speed control — skills that will serve you on any road in Brisbane. Our Hawthorne instructors love using this terrain because it builds real driver competency faster than flat suburban streets.",
            "The cafe strip on Hawthorne Road is a mini Oxford Street — active, pedestrian-heavy, and full of the kind of real-world hazards that make your scanning and hazard perception skills sharper. We integrate this road deliberately into Hawthorne lesson plans to build the observation habits that Queensland test examiners look for.",
            "UNO serves the full Hawthorne area with free pickup and drop-off, modern automatic vehicles, and flexible 7-day scheduling. Packages start from $700 for 10 lessons and Afterpay is available. Book your Hawthorne driving lesson today.",
        ],
        landmarks: [
            "Hawthorne Road cafe strip — pedestrian-active street for hazard perception training",
            "Hawthorne Canoe Club riverside area — quiet road for beginner car control",
            "Byron Street — narrow, hilly residential street for precision driving practice",
            "Norman Park boundary roads — suburban arterial and speed management practice",
            "Bulimba State School boundary — school zone speed limit compliance",
            "Tingal Road — connector for multi-lane introduction and merging practice",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Bulimba", slug: "bulimba", region: "eastern-brisbane" },
            { name: "Norman Park", slug: "norman-park", region: "eastern-brisbane" },
            { name: "Morningside", slug: "morningside", region: "eastern-brisbane" },
        ],
        reviews: [
            { name: "Ava", suburb: "Hawthorne", rating: 5, text: "The streets around Hawthorne are narrow and hilly but my UNO instructor made me feel completely confident within a few lessons. Passed first go!" },
            { name: "Liam", suburb: "Hawthorne", rating: 5, text: "Excellent instruction, always punctual, really comfortable car. After 10 lessons I passed my test first attempt. Can't recommend UNO enough." },
            { name: "Sophie", suburb: "Bulimba", rating: 5, text: "Really impressed — the instructor was calm, patient and knew the roads perfectly. Passed first try at Greenslopes." },
        ],
        faqs: [
            { question: "How much are driving lessons in Hawthorne?", answer: "Hawthorne lessons start from $75/hr. 10-lesson Boost Package $700; Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Hawthorne?", answer: "Yes — free pickup from Hawthorne, Bulimba, Norman Park and Morningside." },
            { question: "Which test centre do Hawthorne learners use?", answer: "Greenslopes Transport and Main Roads Centre. We rehearse those routes in your Hawthorne lessons." },
            { question: "Is Hawthorne a good suburb for learning to drive?", answer: "Yes — the hilly, narrow streets combined with busier connecting roads give you an excellent varied training environment." },
            { question: "Can UNO help nervous drivers in Hawthorne?", answer: "Yes — our calm, patient approach is built around helping anxious learners, and Hawthorne's streets are accessible enough to start gently." },
            { question: "Are automatic lessons available in Hawthorne?", answer: "Yes, all UNO lessons in Hawthorne are in modern automatic vehicles." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "carindale": {
        metaTitle: "Driving Lessons Carindale | Automatic Instructor | UNO Driving School",
        metaDescription: "Book driving lessons in Carindale with UNO Driving School. Patient automatic instructors near Westfield Carindale and Carina. 5-star rated. Book today.",
        h1: "Affordable Driving Lessons in Carindale with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Carindale? UNO Driving School provides calm, automatic driving tuition for learners across Carindale, Carina, Carina Heights and Chandler. Our 5-star instructors help students pass their Queensland driving test first time, every time.",
            "Carindale's road environment is dominated by the Westfield Carindale precinct, one of Queensland's largest shopping centres. Managing car park traffic, understanding pedestrian crossings around a major retail hub, and navigating the complex access roads on Old Cleveland Road are all regular parts of Carindale driving lessons. These are skills that will be equally relevant in every large shopping centre car park you drive into for the rest of your life.",
            "Old Cleveland Road through Carindale is a busy multi-lane corridor connecting the eastern suburbs to the CBD. Our instructors use it specifically to teach lane discipline, safe merging, and reading traffic light phasing — all skills that feature prominently in the Queensland practical driving test. By the time you sit your test, Old Cleveland Road will feel straightforward.",
            "UNO Driving School serves Carindale and all nearby suburbs with free pickup, modern automatic vehicles, and flexible scheduling. Packages include 10 lessons for $700 with Afterpay available. Book your Carindale driving lesson today.",
        ],
        landmarks: [
            "Westfield Carindale — car park practice, pedestrian crossings and shopping centre access roads",
            "Old Cleveland Road — major multi-lane arterial for lane discipline and speed training",
            "Carindale State School — school zone compliance and pedestrian safety",
            "Maygar Street — quiet residential streets for low-speed manoeuvre practice",
            "Chandler boundary roads — semi-rural road experience for confident open driving",
            "Creek Road — connector arterial for roundabout and intersection practice",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Carina", slug: "carina", region: "eastern-brisbane" },
            { name: "Carina Heights", slug: "carina-heights", region: "eastern-brisbane" },
            { name: "Chandler", slug: "chandler", region: "eastern-brisbane" },
        ],
        reviews: [
            { name: "Megan", suburb: "Carindale", rating: 5, text: "Carindale car parks are chaos on weekends! UNO trained me to handle it all calmly. Passed first go at Greenslopes. Really happy with the course." },
            { name: "Dylan", suburb: "Carindale", rating: 5, text: "Really professional service. Picked up from home, patient instruction on Old Cleveland Rd, and passed first attempt. Highly recommend UNO." },
            { name: "Sarah", suburb: "Carina", rating: 5, text: "Booked a 10-lesson package and it was worth every dollar. My instructor was calm, thorough and very supportive. Passed first try!" },
        ],
        faqs: [
            { question: "How much do driving lessons in Carindale cost?", answer: "Carindale lessons start from $75/hour. 10-lesson Boost Package $700; Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Carindale?", answer: "Yes — free pickup from Carindale, Carina, Carina Heights and Chandler." },
            { question: "Which test centre do Carindale learners use?", answer: "Carindale learners typically test at the Greenslopes Transport and Main Roads Centre. We rehearse those specific routes." },
            { question: "Is Westfield Carindale used in lessons?", answer: "Yes — learning to navigate the Westfield car parks and access roads is a genuine, useful skill we include in Carindale lessons." },
            { question: "Are automatic lessons available in Carindale?", answer: "Yes, all UNO lessons in Carindale are in modern automatic vehicles." },
            { question: "Can UNO help nervous drivers in Carindale?", answer: "Absolutely — our calm, patient teaching style is ideal for anxious learners of all ages." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "wynnum": {
        metaTitle: "Driving Lessons Wynnum | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in Wynnum with UNO Driving School. Patient automatic instructors near the esplanade and Manly. 5-star rated. Book your lesson today.",
        h1: "Affordable Driving Lessons in Wynnum with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Wynnum? UNO Driving School delivers calm, professional, automatic driving tuition for learners across Wynnum, Manly, Wynnum West and Lota. Our experienced, 5-star rated instructors help Wynnum students gain their licence on the very first attempt.",
            "Wynnum's bayside location gives it a road environment unlike anywhere else on the eastern side of Brisbane. The Wynnum Esplanade is a beautiful, wide, low-speed road that is perfect for early lessons — relaxed enough for complete beginners, yet long enough to develop smooth acceleration, correct mirror use, and confidence in open driving. Our Wynnum instructors love starting first lessons here.",
            "Wynnum Central on Tingal Road is a compact town centre with a mix of traffic lights, roundabouts, pedestrian crossings, and a train station — all in close proximity. Mastering Wynnum Central's road layout gives you excellent preparation for managing complex multi-feature intersections on the Queensland practical test. We practise this section deliberately in every Wynnum lesson.",
            "Wynnum learners test at the Greenslopes centre, and our instructors build those specific roads into every lesson from early on. Free pickup anywhere in Wynnum, Afterpay on all packages. Book your Wynnum driving lesson today.",
        ],
        landmarks: [
            "Wynnum Esplanade — flat, scenic bayside road ideal for first lessons and smooth control",
            "Wynnum Central (Tingal Road) — town centre with traffic lights, roundabouts, and crossings",
            "Wynnum Train Station — bus/train zone awareness and drop-off zone navigation",
            "Pandanus Beach — quiet car park area for reversing and U-turn practice",
            "Manly Road — connecting arterial for higher-speed and multi-lane practice",
            "Wynnum Mangrove Boardwalk carpark — low-pressure reversing and parking practice",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Manly", slug: "manly", region: "eastern-brisbane" },
            { name: "Wynnum West", slug: "wynnum-west", region: "eastern-brisbane" },
            { name: "Lota", slug: "lota", region: "eastern-brisbane" },
        ],
        reviews: [
            { name: "James", suburb: "Wynnum", rating: 5, text: "Starting on the esplanade was a great way to build confidence. By lesson 5 I was driving through Wynnum Central comfortably. Passed first go!" },
            { name: "Lucy", suburb: "Wynnum", rating: 5, text: "Really warm and calm instructor. I was very anxious but UNO made the whole process so manageable. Passed my test first attempt!" },
            { name: "Ryan", suburb: "Manly", rating: 5, text: "Excellent service start to finish. Picked up from home, clear instruction, and passed at Greenslopes on the first go. Thoroughly recommend UNO." },
        ],
        faqs: [
            { question: "How much are driving lessons in Wynnum?", answer: "Wynnum lessons start from $75/hr. 10-lesson Boost Package $700; Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Wynnum?", answer: "Yes — free pickup from Wynnum, Manly, Wynnum West and Lota." },
            { question: "Which test centre do Wynnum learners use?", answer: "Wynnum learners typically test at the Greenslopes Transport and Main Roads Centre. We practise the specific routes used there." },
            { question: "Is Wynnum a good suburb for learning to drive?", answer: "Yes — the esplanade is excellent for beginners, and Wynnum Central provides great preparation for real-world test conditions." },
            { question: "Are automatic lessons available in Wynnum?", answer: "Yes, all UNO lessons in Wynnum are conducted in modern automatic vehicles." },
            { question: "Can UNO help nervous drivers in Wynnum?", answer: "Absolutely. Wynnum's calmer bayside roads make it particularly well suited to building nervous learner confidence from lesson one." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "cannon-hill": {
        metaTitle: "Driving Lessons Cannon Hill | Automatic Instructor | UNO Driving School",
        metaDescription: "Book driving lessons in Cannon Hill with UNO Driving School. Patient automatic instructors near Morningside and Murarrie. 5-star rated. Book today.",
        h1: "Affordable Driving Lessons in Cannon Hill with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Cannon Hill? UNO Driving School provides calm, automatic driving lessons for learners across Cannon Hill, Morningside, Murarrie and Seven Hills. Our 5-star instructors help Cannon Hill students pass their Queensland practical test confidently on the first attempt.",
            "Cannon Hill's road network spans a wide range of driving environments within a small geographic footprint. Wynnum Road is a busy, multi-lane arterial ideal for lane discipline and speed management training. The adjacent AirHub industrial estate roads teach you heavy vehicle awareness and wide-road scanning. And the quieter residential streets off Creek Road are perfect for low-speed manoeuvres and parking practice.",
            "The Cannon Hill Shopping Centre precinct on Wynnum Road introduces learners to the real-world challenge of managing car park traffic, pedestrian crossings, and the unpredictable vehicle movements around retail centres — a skill every driver needs but few schools specifically practise. UNO's Cannon Hill instructors incorporate this as a deliberate lesson element.",
            "UNO serves Cannon Hill and surrounding suburbs with free pickup, modern automatic dual-control vehicles, Afterpay payment plans, and flexible scheduling. Book your Cannon Hill driving lesson today and get test-ready with Brisbane's most trusted automatic driving school.",
        ],
        landmarks: [
            "Cannon Hill Shopping Centre — car park practice and pedestrian crossing management",
            "Wynnum Road — multi-lane arterial for speed control and lane discipline",
            "AirHub precinct — industrial-area driving and heavy vehicle awareness",
            "Creek Road — residential connector for roundabouts and intersection practice",
            "Morningside boundary streets — varied suburban road conditions",
            "Kianawah Road — quieter residential street for parking and reversing practice",
        ],
        testCentre: "Greenslopes",
        testCentreAddress: "Greenslopes Transport and Main Roads Customer Service Centre, cnr Ipswich Rd & Greenslopes St, Greenslopes QLD 4120",
        nearbySuburbs: [
            { name: "Morningside", slug: "morningside", region: "eastern-brisbane" },
            { name: "Murarrie", slug: "murarrie", region: "eastern-brisbane" },
            { name: "Seven Hills", slug: "seven-hills", region: "eastern-brisbane" },
        ],
        reviews: [
            { name: "Nathan", suburb: "Cannon Hill", rating: 5, text: "Really great driving school. Wynnum Road felt scary at first but my UNO instructor built my confidence progressively. Passed first go at Greenslopes!" },
            { name: "Amy", suburb: "Cannon Hill", rating: 5, text: "Excellent experience — patient instructor, clean car, and free pickup. Passed my test first attempt. Highly recommend UNO to anyone in Cannon Hill." },
            { name: "Chris", suburb: "Murarrie", rating: 5, text: "Took 12 lessons and passed first try. The instructor was calm, knowledgeable and really supportive. Best investment for getting my licence." },
        ],
        faqs: [
            { question: "How much do driving lessons in Cannon Hill cost?", answer: "Cannon Hill lessons start from $75/hour. 10-lesson Boost Package $700; Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Cannon Hill?", answer: "Yes — free pickup from Cannon Hill, Morningside, Murarrie and Seven Hills." },
            { question: "Which test centre do Cannon Hill learners use?", answer: "Cannon Hill learners test at the Greenslopes Transport and Main Roads Centre. We rehearse those routes in your lessons." },
            { question: "Are automatic lessons available in Cannon Hill?", answer: "Yes, all UNO lessons in Cannon Hill are in modern automatic vehicles." },
            { question: "Can UNO help nervous drivers in Cannon Hill?", answer: "Absolutely — our calm teaching style is designed for all levels of anxious learners." },
            { question: "How many lessons before I can test from Cannon Hill?", answer: "Generally 10–20 professional lessons depending on your starting level. Your instructor advises honestly throughout." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Greenslopes+Transport+Main+Roads+Customer+Service+Centre+Ipswich+Rd+Greenslopes+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    // ── NORTHERN BRISBANE ─────────────────────────────────────────────────────

    "chermside": {
        metaTitle: "Driving Lessons Chermside | Automatic Instructor | UNO Driving School",
        metaDescription: "Expert driving lessons in Chermside with UNO Driving School. Patient automatic instructors near Westfield and Prince Charles Hospital. Book today.",
        h1: "Affordable Driving Lessons in Chermside with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Chermside? UNO Driving School offers expert, automatic driving tuition for learners across Chermside, Kedron, Stafford and Aspley. Our 5-star rated instructors have helped hundreds of Chermside students pass their Queensland practical driving test on the first attempt.",
            "Chermside is the retail and service heart of Brisbane's northern suburbs, and its road environment reflects that status. Gympie Road through Chermside is one of the busiest arterial corridors in the north — with bus lanes, multiple intersections, pedestrian crossings, and the Westfield Chermside precinct all demanding sharp observation and decisive decision-making. Our Chermside instructors prepare you for all of this systematically.",
            "The Prince Charles Hospital creates a constant flow of emergency vehicles, buses, and pedestrians through the centre of Chermside. Learning to respond appropriately to approaching emergency vehicles, manage hospital taxi drop-off zones, and navigate the surrounding streets is a practical skill that makes you a safer, more courteous driver everywhere you go.",
            "UNO's Chermside instructors know the local test routes and build them into every lesson from the start. Free pickup anywhere in Chermside and surrounding suburbs, flexible 7-day scheduling, and Afterpay payment plans. Book your Chermside driving lesson today.",
        ],
        landmarks: [
            "Westfield Chermside — Queensland's largest shopping centre car park and access road practice",
            "Gympie Road — Brisbane's busiest northern arterial for multi-lane and bus lane training",
            "Prince Charles Hospital — emergency vehicle awareness and hospital precinct navigation",
            "Kedron Brook — pleasant parkland area adjacent to quieter practice streets",
            "Webster Road — key connector for intersections and roundabout practice",
            "Hamilton Road — Chermside–Aspley boundary road for speed management training",
        ],
        testCentre: "Virginia",
        testCentreAddress: "Virginia Transport and Main Roads Customer Service Centre, 1540 Sandgate Rd, Virginia QLD 4014",
        nearbySuburbs: [
            { name: "Kedron", slug: "kedron", region: "northern-brisbane" },
            { name: "Stafford", slug: "stafford", region: "northern-brisbane" },
            { name: "Aspley", slug: "aspley", region: "northern-brisbane" },
        ],
        reviews: [
            { name: "Tara", suburb: "Chermside", rating: 5, text: "Gympie Road is intense but my UNO instructor built my confidence step by step. Passed first go at Virginia — the best driving school in Chermside!" },
            { name: "Marcus", suburb: "Chermside", rating: 5, text: "Really professional service. Picked up from home, instructor knew every road, passed first attempt. Highly recommend UNO." },
            { name: "Jess", suburb: "Kedron", rating: 5, text: "Calm, patient, effective teaching. Passed first try after 14 lessons. Great value and really supportive instructors." },
        ],
        faqs: [
            { question: "How much are driving lessons in Chermside?", answer: "Chermside lessons start from $75/hour. 10-lesson Boost Package $700; Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Chermside?", answer: "Yes — free pickup from Chermside, Kedron, Stafford and Aspley." },
            { question: "Which test centre do Chermside learners use?", answer: "Chermside learners typically sit their test at the Virginia Transport and Main Roads Customer Service Centre on Sandgate Road." },
            { question: "Are automatic lessons available in Chermside?", answer: "Yes, all UNO Chermside lessons are in modern automatic vehicles." },
            { question: "Can UNO help nervous drivers in Chermside?", answer: "Absolutely. Chermside's busy roads can feel intense, but our calm instructors build your confidence gradually." },
            { question: "How many lessons do I need in Chermside?", answer: "Most learners need 10–20 professional lessons depending on their starting experience." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Virginia+Transport+Main+Roads+1540+Sandgate+Rd+Virginia+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "aspley": {
        metaTitle: "Driving Lessons Aspley | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in Aspley with UNO Driving School. Patient automatic instructors near the Aspley Hypermarket and Chermside. 5-star rated. Book today.",
        h1: "Affordable Driving Lessons in Aspley with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Aspley? UNO Driving School provides calm, automatic driving lessons for learners across Aspley, Chermside, Bridgeman Downs and Bald Hills. Our 5-star instructors help Aspley students gain their Queensland licence confidently on the first attempt.",
            "Aspley sits at the northern gateway of Brisbane's established suburbs, giving learners access to a strategic mix of road types. The Aspley Hypermarket precinct on Gympie Road is excellent for practising multi-lane navigation, car park management, and high-volume intersection approaches. Further north, Aspley's residential streets become progressively quieter and more spacious, providing excellent low-pressure practice space.",
            "Gympie Road through Aspley is the dominant training corridor — it is high-speed, multi-lane, and features multiple complex intersections including the major junction at Albany Creek Road. Our Aspley instructors use this corridor deliberately to prepare you for the speed and lane discipline requirements of the Virginia test centre routes.",
            "UNO serves Aspley with free pickup and drop-off, modern automatic vehicles, and Afterpay payment plans. Lessons run 7 days a week. Book your Aspley driving lesson today.",
        ],
        landmarks: [
            "Aspley Hypermarket — large retail precinct for car park and access road practice",
            "Gympie Road — high-volume northern arterial for multi-lane training",
            "Albany Creek Road junction — complex multi-direction intersection practice",
            "Aspley State High School — school zone compliance and pedestrian awareness",
            "Kittyhawk Drive — quiet residential street for low-speed manoeuvre practice",
            "Hamilton Road — connecting arterial to Chermside for roundabout training",
        ],
        testCentre: "Virginia",
        testCentreAddress: "Virginia Transport and Main Roads Customer Service Centre, 1540 Sandgate Rd, Virginia QLD 4014",
        nearbySuburbs: [
            { name: "Chermside", slug: "chermside", region: "northern-brisbane" },
            { name: "Bridgeman Downs", slug: "bridgeman-downs", region: "northern-brisbane" },
            { name: "Bald Hills", slug: "bald-hills", region: "northern-brisbane" },
        ],
        reviews: [
            { name: "Patrick", suburb: "Aspley", rating: 5, text: "Really calm and thorough instruction. Gympie Road felt manageable by lesson 4 and I passed first go at Virginia. Outstanding experience." },
            { name: "Hannah", suburb: "Aspley", rating: 5, text: "UNO is fantastic. Patient instructor, great pickup service, and I passed my test first attempt. Would absolutely recommend." },
            { name: "Kyle", suburb: "Bridgeman Downs", rating: 5, text: "Tried two other schools before UNO. The difference in teaching quality is huge. Passed first try after switching to UNO." },
        ],
        faqs: [
            { question: "How much are driving lessons in Aspley?", answer: "Aspley lessons start from $75/hour. 10-lesson package $700; Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Aspley?", answer: "Yes — free pickup from Aspley, Chermside, Bridgeman Downs and Bald Hills." },
            { question: "Which test centre do Aspley learners use?", answer: "Aspley learners typically test at the Virginia Transport and Main Roads Customer Service Centre on Sandgate Road." },
            { question: "Are automatic lessons available in Aspley?", answer: "Yes, all UNO lessons in Aspley are in modern automatic vehicles." },
            { question: "Can you help nervous drivers in Aspley?", answer: "Absolutely. We start gently on Aspley's quieter streets and build up to the busier Gympie Road corridor progressively." },
            { question: "How many lessons before I am ready to test from Aspley?", answer: "Typically 10–20 professional lessons. Your instructor gives honest progress feedback after every session." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Virginia+Transport+Main+Roads+1540+Sandgate+Rd+Virginia+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "nundah": {
        metaTitle: "Driving Lessons Nundah | Automatic Instructor | UNO Driving School",
        metaDescription: "Professional driving lessons in Nundah with UNO Driving School. Patient automatic instructors near the Village and Kedron. 5-star rated. Book today.",
        h1: "Affordable Driving Lessons in Nundah with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Nundah? UNO Driving School provides calm, automatic driving lessons for learners across Nundah, Kedron, Virginia and Northgate. Our 5-star rated instructors are passionate about helping Nundah students pass their Queensland practical driving test on the very first attempt.",
            "Nundah is a vibrant urban village suburb with a road network that reflects its position as a northern transport hub. Sandgate Road through Nundah is a high-volume arterial with frequent bus stops, complex intersections, and the pedestrian bustle of the Nundah Village strip. Our instructors use this stretch deliberately to build your town-driving confidence early in the training program.",
            "The Nundah train station precinct introduces learners to some of Brisbane's most challenging driving scenarios — taxi drop-off zones, bus bays, pedestrian crossings, and vehicles stopping unexpectedly. Managing these situations safely requires sharp observation and anticipation, and our Nundah instructors are experts at teaching exactly these skills.",
            "UNO serves Nundah with free pickup and drop-off, modern automatic dual-control vehicles, and Afterpay on all packages. Flexible lesson times available seven days a week. Book your first Nundah lesson today.",
        ],
        landmarks: [
            "Nundah Village strip — pedestrian-active urban village for hazard perception training",
            "Sandgate Road — major northern arterial for speed and lane discipline practice",
            "Nundah Train Station precinct — taxi zones, bus bays and pedestrian crossing management",
            "Toombul boundary roads — connecting arterial and shopping centre access",
            "Buckland Road — quiet residential street for parking and reversing practice",
            "Virginia Road — northern connector for highway preparation training",
        ],
        testCentre: "Virginia",
        testCentreAddress: "Virginia Transport and Main Roads Customer Service Centre, 1540 Sandgate Rd, Virginia QLD 4014",
        nearbySuburbs: [
            { name: "Kedron", slug: "kedron", region: "northern-brisbane" },
            { name: "Virginia", slug: "virginia", region: "northern-brisbane" },
            { name: "Northgate", slug: "northgate", region: "northern-brisbane" },
        ],
        reviews: [
            { name: "Phoebe", suburb: "Nundah", rating: 5, text: "Sandgate Road felt overwhelming at first but UNO built my confidence step by step. Passed first go at Virginia — so glad I chose UNO!" },
            { name: "Jake", suburb: "Nundah", rating: 5, text: "Patient, punctual, professional. The instructor knew every road around Nundah and I passed my test first attempt. Couldn't recommend more." },
            { name: "Caitlin", suburb: "Kedron", rating: 5, text: "Really impressed with UNO. Took 12 lessons and passed first try. The Afterpay option made it really accessible too." },
        ],
        faqs: [
            { question: "How much are driving lessons in Nundah?", answer: "Nundah lessons start from $75/hour. 10-lesson package $700; Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Nundah?", answer: "Yes — free pickup from Nundah, Kedron, Virginia and Northgate." },
            { question: "Which test centre do Nundah learners use?", answer: "Nundah learners typically test at the Virginia Transport and Main Roads Centre on Sandgate Road. We practise those routes in your lessons." },
            { question: "Are automatic lessons available in Nundah?", answer: "Yes, all UNO lessons in Nundah are in modern automatic vehicles." },
            { question: "Can UNO help nervous drivers in Nundah?", answer: "Yes — we are specialists in nervous driver support. Nundah's quieter residential streets are a good starting point before introducing the busier roads." },
            { question: "How many lessons will I need in Nundah?", answer: "Most Nundah students are test-ready in 10–20 professional lessons. Your instructor advises honestly throughout." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Virginia+Transport+Main+Roads+1540+Sandgate+Rd+Virginia+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    "wavell-heights": {
        metaTitle: "Driving Lessons Wavell Heights | Automatic Instructor | UNO Driving School",
        metaDescription: "Driving lessons in Wavell Heights with UNO Driving School. Patient automatic instructors near Chermside and Nundah. 5-star rated. Book your lesson today.",
        h1: "Affordable Driving Lessons in Wavell Heights with a Patient Local Instructor",
        bodyParagraphs: [
            "Looking for driving lessons in Wavell Heights? UNO Driving School provides calm, automatic driving lessons for learners across Wavell Heights, Chermside, Nundah and Virginia. Our 5-star instructors help Wavell Heights students confidently pass their Queensland driving test first time.",
            "Wavell Heights lives up to its name — it is an elevated suburb with undulating terrain and a mix of busy connecting roads and quieter residential streets. Hamilton Road and Rode Road run along the suburb's boundaries and serve as the key arterials for speed management and lane control training. The rolling hills of the residential streets are excellent for practising smooth braking and acceleration in the automatic vehicle.",
            "The commercial strip along Hamilton Road bridges Wavell Heights to Chermside and Aspley, giving learners exposure to the busy northern Brisbane bus corridor early in their training. Our instructors use this corridor specifically to prepare you for the Virginia test centre routes, which use Sandgate Road and surrounding streets that share many characteristics with Wavell Heights' main roads.",
            "UNO serves the full Wavell Heights area with free pickup and drop-off, modern automatic vehicles, and Afterpay payment options. Book your Wavell Heights lesson today.",
        ],
        landmarks: [
            "Hamilton Road — key northern arterial for speed management and lane discipline",
            "Rode Road — busy connector for roundabout and intersection practice",
            "Wavell Heights State High School — school zone compliance and pedestrian safety",
            "Bracken Street — quiet residential hill street for smooth control practice",
            "Chermside Hills Reserve access — peaceful surroundings for low-stress beginning lessons",
            "Nundah boundary roads — urban village driving and observation practice",
        ],
        testCentre: "Virginia",
        testCentreAddress: "Virginia Transport and Main Roads Customer Service Centre, 1540 Sandgate Rd, Virginia QLD 4014",
        nearbySuburbs: [
            { name: "Chermside", slug: "chermside", region: "northern-brisbane" },
            { name: "Nundah", slug: "nundah", region: "northern-brisbane" },
            { name: "Virginia", slug: "virginia", region: "northern-brisbane" },
        ],
        reviews: [
            { name: "Nicole", suburb: "Wavell Heights", rating: 5, text: "The hills around Wavell Heights were perfect for building my driving skills. UNO's instructor was patient and I passed first go at Virginia!" },
            { name: "Adam", suburb: "Wavell Heights", rating: 5, text: "Really professional and calm teaching. Passed first attempt after 11 lessons. Great value and excellent experience with UNO." },
            { name: "Tess", suburb: "Chermside", rating: 5, text: "Switched to UNO after another school let me down. The difference was instant — better instruction, better car, passed first try." },
        ],
        faqs: [
            { question: "How much do driving lessons in Wavell Heights cost?", answer: "Wavell Heights lessons start from $75/hour. 10-lesson package $700; Zoom Test Package $200. Afterpay available." },
            { question: "Do you pick up from Wavell Heights?", answer: "Yes — free pickup from Wavell Heights, Chermside, Nundah and Virginia." },
            { question: "Which test centre do Wavell Heights learners use?", answer: "Wavell Heights learners typically test at the Virginia Transport and Main Roads Centre on Sandgate Road." },
            { question: "Are automatic lessons available in Wavell Heights?", answer: "Yes, all UNO lessons in Wavell Heights are in modern automatic vehicles." },
            { question: "Is Wavell Heights good for learning to drive?", answer: "Yes — the mix of hilly residential streets and busy connecting arterials gives learners an excellent, varied environment." },
            { question: "Can you help nervous drivers in Wavell Heights?", answer: "Absolutely. Many of our best Wavell Heights results come from students who arrived very nervous. Our patient teaching style makes the difference." },
        ],
        mapEmbedSrc: "https://maps.google.com/maps?q=Virginia+Transport+Main+Roads+1540+Sandgate+Rd+Virginia+QLD&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

};
