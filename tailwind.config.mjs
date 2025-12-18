import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-red": "#C70009",
      },
      backgroundImage: {
        home: "url('/img/pilot-student-shaking-hand-with-flight-instructor-in-font-of-piper-pa-28-cherokee-home-header-flight-school-summit-flight-academy-kansas-city-flight-school.webp')",
        "new-to-flying":
          "url('/img/pilot-student-in-font-of-piper-pa-28-cherokee-new-to-flying-certified-flight-instructor-summit-flight-academy-kansas-city-certified-flight-instructor-instrument.webp')",
        "multi-engine":
          "url('/img/me-training-twin-comanche-become-a-pilot-summit-flight-academy-lees-summit-flying-lessons.jpg')",
        404: "url('/img/stock/view-from-the-sky-of-land-through-clouds-summit-flight-academy-missouri-pilot-training.jpg')",
        "private-pilot":
          "url('/img/pilot-student-shaking-hands-with-flight-instructor-in-front-of-piper-pa-28-cherokee-header-multi-engine-rating-summit-flight-academy-missouri-multi-engine-rating.webp')",
        "instrument-rating":
          "url('/img/pilot-student-and-flight-instructor-inside-a-flight-simulator-commercial-pilot-summit-flight-academy-missouri-certified-flight-instructor-instrument.webp')",
        "pilot-bundle":
          "url('/img/very-happy-pilot-stanging-next-to-piper-cherokee-bundle-header-commercial-pilot-summit-flight-academy-missouri-become-a-pilot.webp')",
        "commercial-pilot":
          "url('/img/very-happy-pilot-standing-on-left-wing-of-piper-cherokee-flight-training-summit-flight-academy-kansas-city-flight-training.webp')",
        "multi-engine":
          "url('/img/multi-engine-pilot-student-flying-twin-comanche-at-private-pilot-summit-flight-academy-missouri-pilot-career-track.webp')",
        blog: "url('/img/blog-header-pilot-training-summit-flight-academy-lees-summit-pilot-training.webp')",
        "instructor-training":
          "url('/img/cfi-instructor-training-pilot-student-and-instructor-next-to-piper-cherokee-certified-flight-instructor-summit-flight-academy-missouri-sport-pilot.webp')",
        "career-track":
          "url('/img/career-track-zero-to-hero-pilot-student-and-instructor-next-to-piper-cherokee-flight-training-summit-flight-academy-lees-summit-pilot-career-track.webp')",
        "teach-at":
          "url('/img/cfi-instructor-teach-at-summit-header-instrument-rating-summit-flight-academy-missouri-flight-training.webp')",
        "our-team":
          "url('/img/our-team/our-team-header-discovery-flight-summit-flight-academy-missouri-discovery-flight.webp')",
        "our-fleet":
          "url('/img/our-fleet/summit-flight-academy_missouri_flight-school_flight-school_fleet-piper-warrior-pa-28-151-n425cb-instrument-panel-multi-engine-rating-summit-flight-academy-kansas-city-commercial-pilot.webp')",
        "forms-library":
          "url('/img/forms-header-become-a-pilot-summit-flight-academy-kansas-city-certified-flight-instructor-instrument.webp')",
        "faa-exam-center":
          "url('/img/faa-exam-center/banner-flying-lessons-summit-flight-academy-kansas-city-certified-flight-instructor-instrument.webp')",
        financing:
          "url('/img/financing-header-discovery-flight-summit-flight-academy-lees-summit-commercial-pilot.webp')",
        "insurance-header":
          "url('/img/insurance-header-flying-lessons-summit-flight-academy-kansas-city-pilot-training.webp')",
        "faqs-header":
          "url('/img/faqs-header-flight-training-summit-flight-academy-lees-summit-private-pilot.webp')",
        "visit-us":
          "url('/img/visit-us-header-discovery-flight-summit-flight-academy-lees-summit-certified-flight-instructor-instrument.webp')",
        "discovery-flight":
          "url('/img/front-view-of-piper-cherokee-park-on-runway-commercial-pilot-summit-flight-academy-kansas-city-certified-flight-instructor.webp')",
        "cfi-and-student":
          "url('/img/pilot-student-shaking-hands-with-flight-instructor-in-front-of-piper-pa-28-cherokee-header-multi-engine-rating-summit-flight-academy-missouri-multi-engine-rating.webp')",
        resources:
          "url('/img/blog/plane-ground_summit-flight-academy_missouri_flight-school_front-shot-of-n7664y-piper-twin-comanche-sfa-become-a-pilot-summit-flight-academy-missouri-flight-school.webp')",
      },
      height: (theme) => ({
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
        "screen-1/3": "calc(100vh / 3)",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
        "screen-mobile": "92vh", //depends on menu height
      }),
      keyframes: {
        moveReviews: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        fade: {
          "0%": { opacity: "0", transform: "scale(1.2)" },
          "25%": { opacity: "0" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        moveReviews: "moveReviews 5s linear infinite",
        "slow-fade": "fade 1s forwards ease-out",
        "slow-zoom": "zoom 45s alternate infinite ease-in-out",
        "mid-zoom": "zoom 18s alternate infinite ease-in-out",
      },
      fontFamily: {
        serif: ["Urbanist Variable", ...defaultTheme.fontFamily.serif],
        sans: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: ["object-left", "object-right", "object-center", "object-cover"],
};
