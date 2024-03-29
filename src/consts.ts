// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

//Default SEO
export const SITE_TITLE = "Summit Flight Academy | Kansas , MO";
export const SITE_DESCRIPTION =
  "Summit Flight Academy provides aviation training for the Kansas City area. Our flight school reflects our commitment to offering cost effective and secure pathways for aspiring pilots, including private pilot, instrument, commercial, and international student programs. Whether you're utilizing the GI Bill or pursuing a lifelong dream, we ensure a comprehensive and safe journey to earn your wings.";
export const OG_IMAGE = "/img/fromWIX/SFA-logo.png";
export const SITE_KEYWORDS =
  "flight school kansas city, pilot training kansas city, LXT flight school, kansas city flight school, Ft. Bliss Flight school, Ft. Bliss RTAG, Ft. Bliss pilot training, lee's summit flight school,FAA pilot program,  Odessa Texas pilot school, Midland texas flight school  FAA certifications, purdue global aviation, M-1 Visa, foreign pilot licenses, aviation career, Part 141 flight school";

//Customer NAP info
export const ADDRESS = "2751 NE Douglas St";
export const ADDRESS2 = "";
export const ADDRESS_CITY = "Lee's Summit";
export const ADDRESS_STATE = "MO";
export const ADDRESS_ZIP = "64064";
export const PHONE_NUMBER = "816-282-1500";
export const EMAIL_ADDRESS = "info@summit-flight.com";

//Social Media Links
export const FACEBOOK_LINK = "https://www.facebook.com/summitflightacademy/";
export const INSTAGRAM_LINK = "https://www.instagram.com/summitflightacademy/";

export const flightPrograms = {
  name: "Private Training",
  className: "flight-programs",
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
      name: "Multi-Engine Rating",
      link: "/flight-programs/multi-engine-rating",
    },
    {
      name: "Flight Reviews & IPCs",
      link: "/flight-programs/fligh-reviews-ipcs",
    },
  ],
};

export const career = {
  name: "Career",
  className: "career",
  mobileClassName: "career-mobile",
  submenu: [
    {
      name: "Commercial Pilot Training",
      link: "/career/commercial-pilot-training",
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
      name: "Download Forms",
      link: "/resources/download-forms",
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
