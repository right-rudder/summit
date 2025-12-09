// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

//Default SEO
export const SITE_TITLE = "Kansas City Leading Flight School | Summit Flight Academy";
export const SITE_DESCRIPTION =
  "Summit Flight Academy is a leading flight school in Kansas City, offering a range of pilot training programs including private pilot, instrument rating, commercial pilot, and multi-engine rating. With well-maintained aircraft, experienced instructors, and a supportive environment, they provide quality aviation education for aspiring pilots.";
export const OG_IMAGE =
  "/img/summit-flight-academy-missoury-kansas-city-piper-back-view-amazing-sunset-whats-next-simplifly-arizona-pilot-training.webp";
export const SITE_KEYWORDS =
  "flight school Lee's Summit, Kansas City pilot training, private pilot license, multi-engine rating, flight lessons Missouri, instrument rating training, flight academy Kansas City, discovery flights, commercial pilot certification, Lee's Summit Airport flight school";

// 🔹 Core Programs
export const CORE_PROGRAM_KEYWORDS = [
  "private pilot license",
  "instrument rating training",
  "commercial pilot training MO",
  "multi-engine rating Kansas City",
  "flight instructor training",
  "pilot training Kansas City",
  "aviation career Kansas City",
  "part 61 flight schools near me",
  "part 141 flight schools",
  "accelerated private pilot training"
].join(", ");

// 🔹 Aircraft & Fleet
export const AIRCRAFT_FLEET_KEYWORDS = [
  "Piper aircraft training",
  "Cherokee flight school",
  "Warrior pilot training",
  "Archer II flight lessons",
  "Twin Comanche multi-engine",
  "Piper fleet training",
  "piper flight school",
  "flight school Piper fleet"
].join(", ");

// 🔹 Discovery & Beginner Experience
export const DISCOVERY_EXPERIENCE_KEYWORDS = [
  "discovery flight Kansas City",
  "discovery flight near me",
  "learn to fly near me",
  "flying lessons Kansas City",
  "private pilot flight school near me",
  "flight school near me",
  "flight schools near me",
  "flying school near me",
  "pilot lessons near me"
].join(", ");

// 🔹 Professional Pathways & Jobs
export const CAREER_PATH_KEYWORDS = [
  "flight instructor jobs Missouri",
  "flight instructor job near me",
  "CFI training Kansas City",
  "MEI training Missouri",
  "airline pilot career track",
  "aviation programs near me",
  "flight academy career track"
].join(", ");

// 🔹 Location-Based SEO
export const LOCATION_KEYWORDS = [
  "Lee’s Summit flight school",
  "Kansas City flight school",
  "flight training Kansas City",
  "flight lessons Missouri",
  "flight schools in Kansas City",
  "Missouri flight schools",
  "Kansas City flight training",
  "Lee’s Summit Airport training"
].join(", ");

// 🔹 Aircraft Rental & Ground Training
export const RENTAL_GROUND_KEYWORDS = [
  "airplane rental Kansas City",
  "plane rental Kansas City",
  "aircraft rental near me",
  "aviation ground school",
  "flight simulator training",
  "flight instruction near me"
].join(", ");

// 🔹 General Aviation Interest
export const GENERAL_AVIATION_KEYWORDS = [
  "flight schools Missouri",
  "pilot school Kansas City",
  "flight academy near me",
  "aviation school Kansas City",
  "learn to fly",
  "best flight schools in Kansas City",
  "aviation schools in Missouri"
].join(", ");

// 🔹 Flight Tech & Training Tools
export const TECH_TRAINING_KEYWORDS = [
  "flight training app",
  "flight study app",
  "apps for pilots",
  "aircraft instrument panel",
  "plane study app"
].join(", ");

//Customer NAP info
export const ADDRESS = "2751 NE Douglas St";
export const ADDRESS2 = "";
export const ADDRESS_CITY = "Lee's Summit";
export const ADDRESS_STATE = "MO";
export const ADDRESS_ZIP = "64064";
export const PHONE_NUMBER = "(816) 296-9892";
export const EMAIL_ADDRESS = "info@summit-flight.com";

//Social Media Links
export const FACEBOOK_LINK = "https://www.facebook.com/summitflightacademy/";
export const INSTAGRAM_LINK = "https://www.instagram.com/summitflightacademy/";
export const YOUTUBE_LINK = "https://www.youtube.com/@SummitFlight";

export const flightPrograms = {
  name: "Training",
  className: "flight-programs",
  link: "/flight-programs/private-pilot-training",
  mobileClassName: "flight-programs-mobile",
  submenu: [
    {
      name: "Private Pilot Training",
      link: "/flight-programs/private-pilot-training",
    },
    {
      name: "Instrument Rating",
      link: "/flight-programs/instrument-rating",
    },
    {
      name: "Private Pilot + Instrument Bundle",
      link: "/flight-programs/private-pilot-instrument-bundle",
    },
    {
      name: "Commercial Pilot Training",
      link: "/flight-programs/commercial-pilot-training",
    },
    {
      name: "Multi-Engine Rating",
      link: "/flight-programs/multi-engine-rating",
    },
  ],
};

export const career = {
  name: "Career Track",
  className: "career",
  link: "/career/career-track",
  mobileClassName: "career-mobile",
  submenu: [
    {
      name: "Career Track Program",
      link: "/career/career-track",
    },
    {
      name: "Instructor Training",
      link: "/career/instructor-training",
    },
    {
      name: "Teach at Summit",
      link: "/career/teach-at-summit",
    },
  ],
};

export const resources = {
  name: "Resources",
  className: "resources",
  link: "/resources/faqs",
  mobileClassName: "resources-mobile",
  submenu: [
    {
      name: "Financing",
      link: "/resources/financing",
    },
    {
      name: "Insurance",
      link: "/resources/insurance",
    },
    {
      name: "Forms Library",
      link: "/resources/forms",
    },
    {
      name: "FAQs",
      link: "/resources/faqs",
    },
    {
      name: "Multi-Engine Resources",
      link: "/multi-engine-resources",
    },
  ],
};

export const about = {
  name: "About",
  className: "about",
  link: "/about/our-team",
  mobileClassName: "about-mobile",
  submenu: [
    {
      name: "Our Team",
      link: "/about/our-team",
    },
    {
      name: "Our Fleet",
      link: "/about/our-fleet",
    },
    {
      name: "Visit Us",
      link: "/about/visit-us",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ],
};
