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
        home: "url('/img/summit-flight-academy-pilot-student-shaking-hand-with-flight-instructor-in-font-of-piper-pa-28-cherokee-home-header-simplifly-arizona-flight-school.webp')",
        "new-to-flying":
          "url('/img/summit-flight-academy-pilot-student-in-font-of-piper-pa-28-cherokee-new-to-flying-simplifly-mesa-certified-flight-instructor.webp')",
        "multi-engine":
          "url('/img/me-training-twin-comanche-simplifly-mesa-become-a-pilot.jpg')",
        404: "url('https://source.unsplash.com/random/?clouds,sky,skies/720x480')",
        "private-pilot":
          "url('/img/summit-flight-academy-pilot-student-shaking-hands-with-flight-instructor-in-front-of-piper-pa-28-cherokee-header-simplifly-mesa-multi-engine-rating.webp')",
        "instrument-rating":
          "url('/img/summit-flight-academy-pilot-student-and-flight-instructor-inside-a-flight-simulator-instrument-rating-simplifly-mesa-commercial-pilot.webp')",
        "pilot-bundle":
          "url('/img/summit-flight-academy-very-happy-pilot-stanging-next-to-piper-cherokee-bundle-header-simplifly-mesa-commercial-pilot.webp')",
        "commercial-pilot":
          "url('/img/summit-flight-academy-missoury-very-happy-pilot-standing-on-left-wing-of-piper-cherokee-commercial-pilot-simplifly-arizona-flight-training.webp')",
        "multi-engine":
          "url('/img/summit-flight-academy-missoury-kansas-city-multi-engine-pilot-student-flying-twin-comanche-at-summit-flight-academy-simplifly-mesa-private-pilot.webp')",
        blog: "url('/img/summit-flight-academy-missoury-kansas-city-blog-header-simplifly-mesa-pilot-training.webp')",
        "instructor-training":
          "url('/img/summit-flight-academy-missoury-kansas-city-cfi-instructor-training-pilot-student-and-instructor-next-to-piper-cherokee-simplifly-arizona-certified-flight-instructor.webp')",
        "career-track":
          "url('/img/summit-flight-academy-missoury-kansas-city-career-track-zero-to-hero-pilot-student-and-instructor-next-to-piper-cherokee-simplifly-arizona-flight-training.webp')",
        "teach-at":
          "url('/img/summit-flight-academy-missoury-kansas-city-cfi-instructor-teach-at-summit-header-simplifly-arizona-instrument-rating.webp')",
        "our-team":
          "url('/img/our-team/summit-flight-academy-missoury-kansas-city-our-team-header-simplifly-arizona-discovery-flight.webp')",
        "our-fleet":
          "url('/img/our-fleet/summit-flight-academy_kansas-city-missouri_flight-school_flight-school_fleet-piper-warrior-pa-28-151-n425cb-instrument-panel-simplifly-arizona-multi-engine-rating.webp')",
        "forms-library":
          "url('/img/summit-flight-academy-missoury-kansas-city-forms-header-simplifly-mesa-become-a-pilot.webp')",
        "faa-exam-center":
          "url('/img/faa-exam-center/banner-simplifly-arizona-flying-lessons.webp')",
        financing:
          "url('/img/summit-flight-academy-missoury-kansas-city-financing-header-simplifly-mesa-discovery-flight.webp')",
        "insurance-header":
          "url('/img/summit-flight-academy-missoury-kansas-city-insurance-header-simplifly-mesa-flying-lessons.webp')",
        "faqs-header":
          "url('/img/summit-flight-academy-missoury-kansas-city-faqs-header-simplifly-mesa-flight-training.webp')",
        "visit-us":
          "url('/img/summit-flight-academy-missoury-kansas-city-visit-us-header-simplifly-arizona-discovery-flight.webp')",
        "training-courses": "url('/img/training-courses/banner.webp')",
        "discovery-flight":
          "url('/img/summit-flight-academy-front-view-of-piper-cherokee-park-on-runway-discovery-flight-simplifly-arizona-commercial-pilot.webp')",
        "cfi-and-student":
          "url('/img/discovery-flight/cfi-and-student-simplifly-arizona-private-pilot.webp')",
        store: "url('/img/CFI-and-student-pilot.webp')",
        resources:
          "url('/img/our-fleet/summit-flight-academy_kansas-city-missouri_flight-school_front-shot-of-n7664y-piper-twin-comanche-sfa-simplifly-mesa-become-a-pilot.webp')",
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
