// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

//Default SEO
export const SITE_TITLE = "Red Arrow Flight Academy | El Paso, TX";
export const SITE_DESCRIPTION =
  "Red Arrow Flight Academy provides aviation training for the El Paso, Santa Teresa, and Las Cruces areas. Our flight school reflects our commitment to offering cost effective and secure pathways for aspiring pilots, including private pilot, instrument, commercial, and international student programs. Whether you're utilizing the GI Bill or pursuing a lifelong dream, we ensure a comprehensive and safe journey to earn your wings.";
export const OG_IMAGE = "/red-arrow-logo.webp";
export const SITE_KEYWORDS =
  "flight school el paso texas, pilot training santa teresa, KDNA flight school, las cruces flight school, Ft. Bliss Flight school, Ft. Bliss RTAG, Ft. Bliss pilot training, el paso pilot training, Juarez mexico international students, m1 m-1 visa international FAA pilot program,  Odessa Texas pilot school, Midland texas flight school  FAA certifications, purdue global aviation, M-1 Visa, foreign pilot licenses, aviation career, Part 141 flight school";

//Customer NAP info
export const ADDRESS = "8063 Airport Rd";
export const ADDRESS2 = "";
export const ADDRESS_CITY = "Santa Teresa";
export const ADDRESS_STATE = "NM";
export const ADDRESS_ZIP = "88008";
export const PHONE_NUMBER = "(575) 201-6160";
export const EMAIL_ADDRESS = "info@flyredarrow.com";

export const flightPrograms = {
  name: "Flight Programs",
  className: "flight-programs",
  mobileClassName: "flight-programs-mobile",
  submenu: [
    {
      name: "New to Flying?",
      link: "/flight-programs/new-to-flying",
    },
    {
      name: "Training Courses",
      link: "/flight-programs/training-courses",
    },
    {
      name: "University Program",
      link: "/flight-programs/university-program",
    },
    {
      name: "International Program",
      link: "/flight-programs/international-program",
    },
    {
      name: "Military / Rotor Transition",
      link: "/flight-programs/military-rotor-transition",
    },
  ],
};

export const resources = {
  name: "Resources",
  className: "resources",
  mobileClassName: "resources-mobile",
  submenu: [
    {
      name: "FAA Exam Center",
      link: "/resources/faa-exam-center",
    },
    {
      name: "Financing",
      link: "/resources/financing",
    },
    {
      name: "Maintenance",
      link: "/resources/maintenance",
    },
  ],
};

export const about = {
  name: "About",
  className: "about",
  mobileClassName: "about-mobile",
  submenu: [
    {
      name: "Our Story",
      link: "/about/our-story",
    },
    {
      name: "Our Team",
      link: "/about/our-team",
    },
    {
      name: "Our Fleet",
      link: "/about/our-fleet",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ],
};
