import {
  CAREER_PATH_KEYWORDS,
  CORE_PROGRAM_KEYWORDS,
  LOCATION_KEYWORDS,
} from "../consts";

export const data = {
  page: {
    title: "Sport Pilot | Summit Flight Academy",
    description:
      "Embark on your aviation journey with Summit Flight Academy's sport pilot training program. Get access to the fastest and least complicated way of learning how to fly. Discover the path to obtaining a sport pilot certificate, from written tests to practical flight training. Our experienced instructors guide you through each step, ensuring you gain the knowledge and skills to safely operate aircraft for personal or recreational purposes. Start your flight training today and unlock the freedom of the skies.",
    keywords: `${CAREER_PATH_KEYWORDS}, ${CORE_PROGRAM_KEYWORDS}, ${LOCATION_KEYWORDS}, sport pilot training, sport pilot certificate, how to become a sport pilot, flight training program, sport pilot written exam, sport pilot practical exam, sport pilot certification requirements, aviation training, learn to fly`,
  },
  header: {
    title: "Sport Pilot Training",
    subTitle: "Your Fastest, Most Affordable Path to Becoming a Pilot",
  },
  aboutSection: {
    title: "What is a Sport Pilot?",
    description:
      "The Sport Pilot Certificate offers an efficient and cost-effective entry into aviation. Designed for recreational flyers, this training pathway minimizes time and expense while still providing the essential skills needed to fly safely and confidently. Students train in modern Light Sport Aircraft with experienced instructors, gaining hands-on proficiency, strong aeronautical decision-making abilities, and the confidence to fly, without the requirements of traditional medical certification or higher-hour programs. Whether you are pursuing aviation for fun or planning to continue through Private Pilot training in the future, this is the ideal starting point.",
  },
  advantagesSection: {
    title: "Key Points",
    bulletPoints: [
      {
        title: "Streamlined Training Pathway",
        description:
          "Learn to fly in as little as 20 hours of FAA-required flight time, making this the quickest route to earning a pilot certificate.",
      },
      {
        title: "No FAA Medical Required",
        description:
          "Fly using your valid U.S. driver’s license as your medical qualification, simplifying the approval process.",
      },
      {
        title: "Lower Cost Compared to Private Pilot Training",
        description:
          "Reduced training hours and efficient Light Sport Aircraft significantly decrease overall training investment.",
      },
      {
        title: "Fly for Fun and Build Experience",
        description:
          "Enjoy day VFR flying, carry one passenger, and explore the freedom of general aviation on your own schedule.",
      },
      {
        title: "Bridge to Future Ratings",
        description:
          "All flight time counts toward future certificates if you choose to upgrade to Private Pilot later.",
      },
      {
        title: "Modern, Lightweight Aircraft",
        description:
          "Train in LSAs known for efficiency, visibility, and advanced avionics, ideal for new pilots.",
      },
    ],
  },
  roadMap: {
    title: "Becoming a Sport Pilot",
    subTitle: "How to start training with Summit Flight Academy",
    steps: [
      {
        title: "Intro Flight & Enrollment",
        description:
          "Start with an introductory flight to experience the feel of Light Sport Aircraft and confirm your training goals. From there, you’ll enroll in the sport pilot program and receive your training materials.",
        img: {
          src: "/src/assets/summit-flight-academy-missoury-kansas-city-visit-us-header-simplifly-arizona-discovery-flight.webp",
          alt: "Summit Flight Academy office",
        },
      },
      {
        title: "Ground Knowledge & Online Study",
        description:
          "Complete your foundational aeronautical knowledge through instructor-led sessions and online coursework, covering weather, navigation, regulations, aircraft systems, and decision-making.",
        img: {
          src: "/src/assets/summit-flight-academy-missoury-kansas-city-visit-us-header-simplifly-arizona-discovery-flight.webp",
          alt: "Summit Flight Academy office",
        },
      },
      {
        title: "Flight Training",
        description:
          "Begin hands-on training with your instructor, you'll master takeoffs, landings, slow flight, stalls, emergency procedures, and basic navigation while preparing for solo flight. After demonstrating proficiency and safety, you will complete supervised solo flights and cross-country requirements.",
        img: {
          src: "/src/assets/summit-flight-academy-missoury-kansas-city-visit-us-header-simplifly-arizona-discovery-flight.webp",
          alt: "Summit Flight Academy office",
        },
      },
      {
        title: "FAA Knowledge Test",
        description:
          "Take the written exam covering essential ground knowledge. Your instructor will guide your preparation and endorse you when ready.",
        img: {
          src: "/src/assets/summit-flight-academy-missoury-kansas-city-visit-us-header-simplifly-arizona-discovery-flight.webp",
          alt: "Summit Flight Academy office",
        },
      },
      {
        title: "Practical Test (Checkride)",
        description:
          "Your instructor sharpens your skills through scenario-based training and mock evaluations to prepare you for the practical test. After that, the final step includes an oral exam and flight test with an FAA examiner. Upon completion, you earn your Sport Pilot Certificate and can begin flying immediately.",
        img: {
          src: "/src/assets/summit-flight-academy-missoury-kansas-city-visit-us-header-simplifly-arizona-discovery-flight.webp",
          alt: "Summit Flight Academy office",
        },
      },
    ],
  },

  ctaSection: {
    title: "Ready to Start Flying?",
    subTitle:
      "Your training begins the moment you take the controls, let's get you in the air.",
  },
};

export const sportPilotFAQs = {
  type: "Sport Pilot",
  questions: [
    {
      title: "What are the sport pilot eligibility requirements?",
      content: "For the sport pilot certificate, you must:",
      list: [
        "Be at least 17 years old.",
        "Be able to read, speak, write, and understand English.",
        "Hold at least a third class medical, or hold a current and valid U.S. driver's license.",
      ],
    },
    {
      title: "What are the training requirements for becoming a sport pilot?",
      content:
        "Training requirements for a sport pilot certificate with airplane category:",
      paragraph1: "A minimum of 20 hours flight time including:",
      oList: [
        "15 hours of flight training from an authorized instructor.",
        "5 hours of solo flight.",
      ],
      paragraph4: "Flight training must include at least:",
      list: [
        "2 hours cross-country flight training.",
        "10 takeoffs and landings to a full stop.",
        "One solo cross-country flight of at least 75 nautical miles total distance with a full-stop landing at a minimum of two points and one segment of the flight consisting of a straight-line distance of at least 25 nautical miles between takeoff and landing locations.",
        "2 hours flight training in preparation for the practical test.",
        "Ground training from an instructor or home-study course.",
      ],
      list2: [
        "FAA knowledge test on applicable aeronautical knowledge areas.",
        "FAA practical test for the applicable light-sport aircraft privilege.",
      ],
    },
    {
      title: "What types of airplanes can I fly?",
      content:
        "There are many types of airplanes that Sport Pilots can fly, however the limitations are:",
      list: [
        "Maximum aircraft speed: 250 knots.",
        "Stall speed: 59 knots clean stall speed (Vs1).",
        "Maximum of 4 seats",
        "Limited to 1 passenger",
      ],
      note: "There are no weight limitations.",
    },
    {
      title: "Can I fly at night?",
      content:
        "Yes, however a Third-Class Medical or BasicMed, plus additional training and endorsements are required.",
    },
    {
      title: "Can I fly cross-country with a Sport Pilot license?",
      content:
        "Yes, you'll complete at least one solo cross-country over 75 NM with two landings. You may fly cross-country under Sport Pilot rules within approved airspace.",
    },
  ],
};
