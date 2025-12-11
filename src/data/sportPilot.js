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
    subTitle: "The fastest, most affordable path to becoming a pilot",
    img: {
      src: "/src/assets/student-pilot-and-cfi-at-sunset-at-lees-summit-airport.webp",
      alt: "Student pilot and CFI standing side by side in front of a plane at sunset",
    },
  },
  aboutSection: {
    title: "What is a Sport Pilot?",
    description:
      "The Sport Pilot Certificate offers an efficient and cost-effective entry into aviation. Designed for recreational flyers, this training pathway minimizes time and expense while still providing the essential skills needed to fly safely and confidently. Students train in modern aircraft with experienced instructors, gaining hands-on proficiency, strong aeronautical decision-making abilities, and the confidence to fly, without the requirements of traditional medical certification or higher-hour programs. Whether you are pursuing aviation for fun or planning to continue through Private Pilot training in the future, this is the ideal starting point.",
    cta: "Enroll Now",
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
          "Reduced training hours and no medical exam requirement significantly decrease overall training investment.",
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
        title: "Modern and varied Aircraft",
        description:
          "Train in a diverse range of aircraft, known for efficiency, visibility, and advanced avionics, ideal for new pilots.",
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
          "Start with an introductory flight to experience the sensation of controlling an aircraft, observe how to handle aircraft in flight, and confirm that aviation is the right path for you. During this session, your instructor will walk you through aircraft basics, safety procedures, and what to expect throughout your training. After your intro flight, you'll enroll in the Sport Pilot program, receive your training materials, and set up your personalized training schedule so you can begin progressing right away.",
        img: {
          src: "/src/assets/multi-engine-pilot-student-flying-twin-comanche-at-summit-flight-academy.jpg",
          alt: "Profile view of a pilot smiling while flying a plane",
        },
      },
      {
        title: "Ground Knowledge & Online Study",
        description:
          "Build a strong foundation in aeronautical knowledge through instructor-led ground lessons combined with flexible online coursework. You will study key topics such as weather theory, aerodynamics, FAA regulations, navigation techniques, aircraft systems, weight and balance, and aeronautical decision-making. This blended approach ensures that you understand the principles behind safe, confident flying before advancing into more complex flight operations. Your instructor will monitor your progress and help you prepare for the FAA Knowledge Test.",
        img: {
          src: "/src/assets/summit-flight-academy-ground-school-instrument-rating-simplifly-mesa-pilot-training.webp",
          alt: "CFI and student in office during ground school lesson",
        },
      },
      {
        title: "Flight Training",
        description:
          "Your hands-on training begins in the cockpit with your certified instructor guiding you through essential flight maneuvers and operational skills. You will practice takeoffs, landings, slow flight, stalls, steep turns, and emergency procedures while developing strong situational awareness and aircraft control. As your skills grow, you'll transition into solo operations, performing supervised solo flights and cross-country missions that reinforce your independence and readiness. This phase combines both structured lessons and real-world flying scenarios to prepare you for the demands of the checkride.",
        img: {
          src: "/src/assets/kansas-city-instruments-aircraft-instrument-rating-simplifly-arizona-pilot-training.webp",
          alt: "View of the instrument panel and window from inside an aircraft flying over fields",
        },
      },
      {
        title: "FAA Knowledge Test",
        description:
          "Once your instructor confirms your readiness, you will take the FAA Knowledge Test, a written exam that evaluates your understanding of aviation fundamentals. The exam covers meteorology, navigation, flight planning, airspace, aircraft performance, and regulations relevant to Sport Pilots. Leading up to the test, your instructor will provide targeted study guidance, practice tests, and review sessions to ensure you are confident and fully prepared.",
        img: {
          src: "/src/assets/stock/man-writing-on-paper-summit-flight-academy-sport-pilot-writen-exam.jpg",
          alt: "Man writing on a piece of paper",
        },
      },
      {
        title: "Practical Test - Checkride",
        description:
          `The final step is the FAA Practical Test, commonly known as the checkride. Your instructor will conduct scenario-based training, mock orals, and comprehensive flight reviews to help you refine your skills and remove any uncertainties. On test day, you will complete an oral exam followed by a flight test with an FAA examiner, demonstrating your ability to safely plan, manage, and execute a full flight. Upon successful completion, you will earn your Sport Pilot Certificate and immediately gain the privileges to operate aircraft as pilot in command with some limitations. <a class="link" href="#faqs">You can read more about the limitations in the FAQ section.</a>`,
        img: {
          src: "/src/assets/summit-flight-academy-missoury-happy-pilot-shaking-hands-with-flight-instructor-receiving-certificate.webp",
          alt: "CFI and student holding certificate while they shake hands and smile",
          objectPosition: "object-[50%_20%]",
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
      lists: [
        { text: "Be at least 17 years old." },
        { text: "Be able to read, speak, write, and understand English." },
        {
          text: "Hold at least a third class medical, or hold a current and valid U.S. driver's license.",
        },
      ],
    },
    {
      title: "What are the training requirements for becoming a sport pilot?",
      lists: [
        {
          text: "A minimum of 20 hours flight time including:",
          list: [
            "15 hours of flight training from an authorized instructor.",
            "5 hours of solo flight.",
          ],
        },
        {
          text: "Flight training must include at least:",
          list: [
            "2 hours cross-country flight training.",
            "10 takeoffs and landings to a full stop.",
            "One solo cross-country flight of at least 75 nautical miles total distance with a full-stop landing at a minimum of two points and one segment of the flight consisting of a straight-line distance of at least 25 nautical miles between takeoff and landing locations.",
            "2 hours flight training in preparation for the practical test.",
            "Ground training from an instructor or home-study course.",
          ],
        },
        {
          text: "FAA knowledge test on applicable aeronautical knowledge areas.",
        },
        {
          text: "FAA practical test for the applicable aircraft privilege.",
        },
      ],
    },
    {
      title: "What types of airplanes can I fly?",
      content:
        "There are many types of airplanes that Sport Pilots can fly, however the limitations are:",
      lists: [
        { text: "Maximum aircraft speed of 250 knots." },
        { text: "Maximum stall speed of 59 knots clean stall speed (Vs1)." },
        { text: "Maximum of 4 seats." },
        { text: "Limited to 1 passenger." },
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
