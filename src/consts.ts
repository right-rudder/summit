// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

//Default SEO
export const SITE_TITLE = "Summit Flight Academy | Lee's Summit, MO";
export const SITE_DESCRIPTION =
  "Summit Flight Academy is a leading flight school in Kansas City, offering a range of pilot training programs including private pilot, instrument rating, commercial pilot, and multi-engine rating. With well-maintained aircraft, experienced instructors, and a supportive environment, they provide quality aviation education for aspiring pilots.";
export const OG_IMAGE =
  "/img/summit-flight-academy-missoury-kansas-city-piper-back-view-amazing-sunset-whats-next.webp";
export const SITE_KEYWORDS =
  "flight school kansas city, pilot training kansas city, private pilot training, instrument rating, commercial pilot training, multi-engine rating, aviation education, learn to fly, discovery flight, career pilot program";

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
